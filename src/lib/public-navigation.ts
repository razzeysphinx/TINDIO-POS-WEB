export type PublicNavigationLink = {
  label: string;
  href: string;
};

export const publicRoutes = {
  home: "/",
  homeTop: "/#top",
  productOverview: "/#product",
  businessTypes: "/#business-types",
  interactiveDemo: "/#interactive-demo",
  offlineExperience: "/#offline-experience",
  multiStoreExperience: "/#multi-store-experience",
  getStarted: "/#get-started",
  product: {
    pointOfSale: "/pos",
    inventory: "/inventory",
    multiStore: "/multi-store",
    reports: "/reports",
    employeeAccess: "/employee-access",
    offlinePos: "/offline",
    loyalty: "/loyalty",
    smartMenu: "/smart-menu",
  },
} as const;

export const publicNavigation = {
  product: [
    { label: "Point of Sale", href: publicRoutes.product.pointOfSale },
    { label: "Inventory", href: publicRoutes.product.inventory },
    { label: "Multi-Store", href: publicRoutes.product.multiStore },
    { label: "Reports", href: publicRoutes.product.reports },
    { label: "Employee Access", href: publicRoutes.product.employeeAccess },
    { label: "Offline POS", href: publicRoutes.product.offlinePos },
    { label: "Loyalty", href: publicRoutes.product.loyalty },
    { label: "Smart Menu", href: publicRoutes.product.smartMenu },
  ] as const satisfies readonly PublicNavigationLink[],
  resources: [
    { label: "Product Overview", href: publicRoutes.productOverview },
    { label: "Interactive POS Demo", href: publicRoutes.interactiveDemo },
    { label: "Offline POS Demo", href: publicRoutes.offlineExperience },
    { label: "Multi-Store Demo", href: publicRoutes.multiStoreExperience },
  ] as const satisfies readonly PublicNavigationLink[],
  plannedSolutions: ["Retail", "Restaurants & Cafés", "Grocery / Convenience", "Multi-Branch Businesses"],
  plannedResources: ["Help Center", "FAQ", "Security", "Contact"],
  plannedLegal: ["Privacy", "Terms", "Legal / Compliance Information"],
} as const;

export const publicCtaDestinations = {
  getStarted: publicRoutes.getStarted,
  exploreTindio: publicRoutes.productOverview,
  explorePos: publicRoutes.product.pointOfSale,
  exploreFeatures: publicRoutes.productOverview,
  // Set this to the real TINDIO application login URL before launch.
  login: null as string | null,
} as const;
