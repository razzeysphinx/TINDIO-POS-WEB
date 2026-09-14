import { access } from "node:fs/promises";

const routes = [
  ["/", "src/app/page.tsx"],
  ["/pos", "src/app/pos/page.tsx"],
  ["/inventory", "src/app/inventory/page.tsx"],
  ["/multi-store", "src/app/multi-store/page.tsx"],
  ["/reports", "src/app/reports/page.tsx"],
  [
    "/employee-access",
    "src/app/employee-access/page.tsx",
  ],
  ["/offline", "src/app/offline/page.tsx"],
  ["/loyalty", "src/app/loyalty/page.tsx"],
  ["/smart-menu", "src/app/smart-menu/page.tsx"],
  ["/solutions", "src/app/solutions/page.tsx"],
  [
    "/solutions/retail",
    "src/app/solutions/retail/page.tsx",
  ],
  [
    "/solutions/restaurant-cafe",
    "src/app/solutions/restaurant-cafe/page.tsx",
  ],
  [
    "/solutions/grocery-convenience",
    "src/app/solutions/grocery-convenience/page.tsx",
  ],
  [
    "/solutions/multi-store",
    "src/app/solutions/multi-store/page.tsx",
  ],
  ["/resources", "src/app/resources/page.tsx"],
  ["/faq", "src/app/faq/page.tsx"],
  ["/security", "src/app/security/page.tsx"],
  ["/get-started", "src/app/get-started/page.tsx"],
];

const missing = [];

for (const [route, file] of routes) {
  try {
    await access(file);
  } catch {
    missing.push({
      route,
      file,
    });
  }
}

if (missing.length > 0) {
  console.error("Missing public route files:");

  for (const item of missing) {
    console.error(`${item.route} -> ${item.file}`);
  }

  process.exit(1);
}

console.log(
  `route file check passed: ${routes.length} public routes`,
);
