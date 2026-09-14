import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOTS = ["src"];

const replacements = [
  ["\u00c3\u00a9", "\u00e9"],
  ["\u00e2\u20ac\u201d", "\u2014"],
  ["\u00e2\u20ac\u201c", "\u2013"],
  ["\u00e2\u20ac\u2122", "\u2019"],
  ["\u00e2\u20ac\u0153", "\u201c"],
  ["\u00e2\u20ac\u009d", "\u201d"],
  ["\u00e2\u20ac\u00a6", "\u2026"],
  ["\u00e2\u2020\u2019", "\u2192"],
  ["\u00e2\u2020\u201c", "\u2193"],
  ["\u00e2\u2020\u2018", "\u2191"],
  ["\u00e2\u2020\u0090", "\u2190"],
  ["\u00e2\u0153\u201c", "\u2713"],
  ["\u00e2\u02c6\u2019", "\u2212"],
  ["\u00c2\u00b7", "\u00b7"],
  ["\u00e2\u201a\u00b1", "\u20b1"],
  ["\u00e2\u0152\u201e", "\u2304"],
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

let changedFiles = 0;
let replacementsMade = 0;

for (const root of ROOTS) {
  const files = await walk(root);

  for (const file of files) {
    const original = await readFile(file, "utf8");
    let repaired = original;

    for (const [broken, correct] of replacements) {
      const occurrences = repaired.split(broken).length - 1;

      if (occurrences > 0) {
        repaired = repaired.split(broken).join(correct);
        replacementsMade += occurrences;
      }
    }

    if (repaired !== original) {
      await writeFile(file, repaired, "utf8");
      changedFiles += 1;
      console.log(`repaired: ${file}`);
    }
  }
}

console.log(
  `encoding repair complete: ${replacementsMade} replacements across ${changedFiles} files`,
);
