const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();

if (!raw) {
  console.error(
    "NEXT_PUBLIC_SITE_URL is required for the launch gate.",
  );
  process.exit(1);
}

let url;

try {
  url = new URL(raw);
} catch {
  console.error(
    "NEXT_PUBLIC_SITE_URL must be a valid absolute URL.",
  );
  process.exit(1);
}

if (url.protocol !== "https:") {
  console.error(
    "NEXT_PUBLIC_SITE_URL must use https for production.",
  );
  process.exit(1);
}

const blockedHosts = new Set([
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  "your-production-domain.example",
  "example.com",
  "www.example.com",
]);

if (blockedHosts.has(url.hostname)) {
  console.error(
    `NEXT_PUBLIC_SITE_URL cannot use placeholder/local host: ${url.hostname}`,
  );
  process.exit(1);
}

console.log(
  `production site URL check passed: ${url.origin}`,
);
