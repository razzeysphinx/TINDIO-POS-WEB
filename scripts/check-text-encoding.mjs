import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const ROOTS = ["src"];

const suspiciousCharacters = [
  ["U+00C3", "\u00c3"],
  ["U+00C2", "\u00c2"],
  ["U+00E2", "\u00e2"],
  ["U+FFFD", "\ufffd"],
];

const textExtensions = new Set([
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".mjs",
  ".cjs",
  ".json",
  ".css",
  ".md",
  ".yml",
  ".yaml",
]);

async function walk(directory) {
  const entries = await readdir(directory);
  const files = [];

  for (const entry of entries) {
    const absolute = path.join(directory, entry);
    const details = await stat(absolute);

    if (details.isDirectory()) {
      files.push(...(await walk(absolute)));
      continue;
    }

    if (textExtensions.has(path.extname(entry))) {
      files.push(absolute);
    }
  }

  return files;
}

const failures = [];

for (const root of ROOTS) {
  const files = await walk(root);

  for (const file of files) {
    const content = await readFile(file, "utf8");
    const lines = content.split(/\r?\n/u);

    lines.forEach((line, index) => {
      for (const [label, character] of suspiciousCharacters) {
        if (line.includes(character)) {
          failures.push({
            file,
            line: index + 1,
            label,
            text: line.trim(),
          });
        }
      }
    });
  }
}

if (failures.length > 0) {
  console.error("Suspicious text encoding sequences detected:");

  for (const failure of failures) {
    console.error(
      `${failure.file}:${failure.line} ${failure.label} ${failure.text}`,
    );
  }

  process.exit(1);
}

console.log("text encoding check passed");
