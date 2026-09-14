import { solutionRoutes } from "@/lib/solution-data";

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
  inventoryExperience: "/#inventory-experience",
  offlineExperience: "/#offline-experience",
  multiStoreExperience: "/#multi-store-experience",
  smartMenuExperience: "/#smart-menu-experience",

  getStarted: "/get-started",
  resources: "/resources",
  faq: "/faq",
  security: "/security",

  solutions: solutionRoutes,

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
    {
      label: "Point of Sale",
      href: publicRoutes.product.pointOfSale,
    },
    {
      label: "Inventory",
      href: publicRoutes.product.inventory,
    },
    {
      label: "Multi-Store",
      href: publicRoutes.product.multiStore,
    },
    {
      label: "Reports",
      href: publicRoutes.product.reports,
    },
    {
      label: "Employee Access",
      href: publicRoutes.product.employeeAccess,
    },
    {
      label: "Offline POS",
      href: publicRoutes.product.offlinePos,
    },
    {
      label: "Loyalty",
      href: publicRoutes.product.loyalty,
    },
    {
      label: "Smart Menu",
      href: publicRoutes.product.smartMenu,
    },
  ] as const satisfies readonly PublicNavigationLink[],

  solutions: [
    {
      label: "All Solutions",
      href: publicRoutes.solutions.overview,
    },
    {
      label: "Retail",
      href: publicRoutes.solutions.retail,
    },
    {
      label: "Restaurant & Café",
      href: publicRoutes.solutions.restaurantCafe,
    },
    {
      label: "Grocery / Convenience",
      href: publicRoutes.solutions.groceryConvenience,
    },
    {
      label: "Multi-Store",
      href: publicRoutes.solutions.multiStore,
    },
  ] as const satisfies readonly PublicNavigationLink[],

  resources: [
    {
      label: "Resource Center",
      href: publicRoutes.resources,
    },
    {
      label: "Product Demos",
      href: "/resources#demos",
    },
    {
      label: "FAQ",
      href: publicRoutes.faq,
    },
    {
      label: "Security & Trust",
      href: publicRoutes.security,
    },
  ] as const satisfies readonly PublicNavigationLink[],

  company: [
    {
      label: "Get Started",
      href: publicRoutes.getStarted,
    },
    {
      label: "Solutions",
      href: publicRoutes.solutions.overview,
    },
  ] as const satisfies readonly PublicNavigationLink[],

  planned: {
    pricing: "Pricing",
    contact: "Contact",
    legal: [
      "Privacy",
      "Terms",
      "Legal / Compliance Information",
    ],
  },
} as const;

export const publicCtaDestinations = {
  getStarted: publicRoutes.getStarted,
  exploreTindio: publicRoutes.solutions.overview,
  explorePos: publicRoutes.product.pointOfSale,
  exploreFeatures: publicRoutes.productOverview,

  // Set this to the real TINDIO application login URL before launch.
  login: null as string | null,
} as const;
