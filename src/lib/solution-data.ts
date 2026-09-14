export const solutionRoutes = {
  overview: "/solutions",
  retail: "/solutions/retail",
  restaurantCafe: "/solutions/restaurant-cafe",
  groceryConvenience: "/solutions/grocery-convenience",
  multiStore: "/solutions/multi-store",
} as const;

export type SolutionKey =
  | "retail"
  | "restaurantCafe"
  | "groceryConvenience"
  | "multiStore";

export type SolutionWorkflow = {
  number: string;
  title: string;
  description: string;
};

export type SolutionLink = {
  label: string;
  href: string;
  description: string;
};

export type SolutionDefinition = {
  key: SolutionKey;
  route: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  context: string;
  workflows: readonly SolutionWorkflow[];
  productLinks: readonly SolutionLink[];
  demoLinks: readonly SolutionLink[];
};

export const solutionDefinitions: Record<
  SolutionKey,
  SolutionDefinition
> = {
  retail: {
    key: "retail",
    route: solutionRoutes.retail,
    label: "Retail",
    eyebrow: "TINDIO for Retail",
    title: "Keep checkout fast without losing sight of stock.",
    description:
      "Connect everyday selling with inventory, customers, loyalty, and reporting so the counter stays simple while the business stays visible.",
    context:
      "Designed around counter sales, barcode-oriented workflows, stock awareness, customer activity, and owner reporting.",
    workflows: [
      {
        number: "01",
        title: "Sell at the counter",
        description:
          "Keep product search, cart changes, payment recording, and receipts focused on the cashier workflow.",
      },
      {
        number: "02",
        title: "Follow the stock",
        description:
          "Connect sales with stock awareness, low-stock attention, counts, receiving, and transfers.",
      },
      {
        number: "03",
        title: "Recognize customers",
        description:
          "Keep customer activity and loyalty close to the transaction without crowding the selling screen.",
      },
      {
        number: "04",
        title: "Review the business",
        description:
          "Use reports and store-level context to understand what is moving and where attention is needed.",
      },
    ],
    productLinks: [
      {
        label: "Point of Sale",
        href: "/pos",
        description: "Explore the focused selling workflow.",
      },
      {
        label: "Inventory",
        href: "/inventory",
        description: "Follow stock movements and branch quantities.",
      },
      {
        label: "Loyalty",
        href: "/loyalty",
        description: "See the customer loyalty workflow.",
      },
      {
        label: "Reports",
        href: "/reports",
        description: "Review business and store performance.",
      },
    ],
    demoLinks: [
      {
        label: "Try the POS demo",
        href: "/#interactive-demo",
        description: "Add products, choose a payment method, and finish a demo sale.",
      },
      {
        label: "Try the Inventory demo",
        href: "/#inventory-experience",
        description: "Step through receiving, sale, transfer, and count movements.",
      },
    ],
  },

  restaurantCafe: {
    key: "restaurantCafe",
    route: solutionRoutes.restaurantCafe,
    label: "Restaurant & CafÃ©",
    eyebrow: "TINDIO for Restaurant & CafÃ©",
    title: "Connect the counter, menu, team, and daily operation.",
    description:
      "Keep the selling workflow close to modifiers, dining-oriented operations, employee access, reporting, and a customer-facing Smart Menu.",
    context:
      "Designed around fast counter service, configurable products, customer menu presentation, employee roles, and operational visibility.",
    workflows: [
      {
        number: "01",
        title: "Take the order",
        description:
          "Use a focused POS flow while product options and modifiers stay part of the catalog.",
      },
      {
        number: "02",
        title: "Keep the menu connected",
        description:
          "Use catalog data as the source for the customer-facing Smart Menu presentation.",
      },
      {
        number: "03",
        title: "Control team access",
        description:
          "Keep employees limited to the tools and stores their role requires.",
      },
      {
        number: "04",
        title: "Review operations",
        description:
          "Use reports to understand sales, payments, shifts, and store performance.",
      },
    ],
    productLinks: [
      {
        label: "Point of Sale",
        href: "/pos",
        description: "Explore the selling and checkout workspace.",
      },
      {
        label: "Smart Menu",
        href: "/smart-menu",
        description: "See how catalog data becomes a customer menu.",
      },
      {
        label: "Employee Access",
        href: "/employee-access",
        description: "Review role and store access concepts.",
      },
      {
        label: "Reports",
        href: "/reports",
        description: "Explore operational reporting.",
      },
    ],
    demoLinks: [
      {
        label: "Try the POS demo",
        href: "/#interactive-demo",
        description: "Walk through a simple demo checkout.",
      },
      {
        label: "Try the Smart Menu demo",
        href: "/#smart-menu-experience",
        description: "Change catalog details and watch the customer preview update.",
      },
    ],
  },

  groceryConvenience: {
    key: "groceryConvenience",
    route: solutionRoutes.groceryConvenience,
    label: "Grocery / Convenience",
    eyebrow: "TINDIO for Grocery / Convenience",
    title: "Move quickly at checkout and keep stock visible behind it.",
    description:
      "Bring selling, barcode-oriented workflows, inventory attention, employee access, and reporting into one connected operating view.",
    context:
      "Designed around frequent transactions, stock awareness, clear employee access, and fast review of store activity.",
    workflows: [
      {
        number: "01",
        title: "Keep checkout moving",
        description:
          "Give the cashier a focused workspace for finding items, building the cart, and completing the sale.",
      },
      {
        number: "02",
        title: "Watch inventory pressure",
        description:
          "Keep low-stock attention, stock movement history, receiving, and counts visible.",
      },
      {
        number: "03",
        title: "Limit employee access",
        description:
          "Separate the selling job from management and inventory responsibilities.",
      },
      {
        number: "04",
        title: "Review the store",
        description:
          "Use reports to compare sales, transactions, payments, inventory, and employee activity.",
      },
    ],
    productLinks: [
      {
        label: "Point of Sale",
        href: "/pos",
        description: "Explore checkout and product search.",
      },
      {
        label: "Inventory",
        href: "/inventory",
        description: "Review stock activity and store quantities.",
      },
      {
        label: "Employee Access",
        href: "/employee-access",
        description: "See role and store access concepts.",
      },
      {
        label: "Reports",
        href: "/reports",
        description: "Review store performance.",
      },
    ],
    demoLinks: [
      {
        label: "Try the POS demo",
        href: "/#interactive-demo",
        description: "Experience a simple checkout flow.",
      },
      {
        label: "Try the Inventory demo",
        href: "/#inventory-experience",
        description: "Follow stock from receiving through count adjustment.",
      },
    ],
  },

  multiStore: {
    key: "multiStore",
    route: solutionRoutes.multiStore,
    label: "Multi-Store",
    eyebrow: "TINDIO for Multi-Store",
    title: "See the whole business without losing each branch.",
    description:
      "Compare stores, move inventory, control employee access, and review consolidated performance while keeping branch-level context available.",
    context:
      "Designed around central visibility, store-specific records, stock transfers, branch permissions, and consolidated reporting.",
    workflows: [
      {
        number: "01",
        title: "Start from all stores",
        description:
          "Use a consolidated view to understand the organization before drilling into one branch.",
      },
      {
        number: "02",
        title: "Open one branch",
        description:
          "Move into store-specific sales, inventory, employees, shifts, and operational context.",
      },
      {
        number: "03",
        title: "Move stock where it is needed",
        description:
          "Use store-to-store transfer workflows while preserving branch-level quantities.",
      },
      {
        number: "04",
        title: "Keep access scoped",
        description:
          "Give employees and managers access only to the stores and tools relevant to their role.",
      },
    ],
    productLinks: [
      {
        label: "Multi-Store",
        href: "/multi-store",
        description: "Explore branch comparison and store context.",
      },
      {
        label: "Inventory",
        href: "/inventory",
        description: "Follow stock and transfers by location.",
      },
      {
        label: "Employee Access",
        href: "/employee-access",
        description: "Review store-scoped role access.",
      },
      {
        label: "Reports",
        href: "/reports",
        description: "Compare consolidated and branch-level performance.",
      },
    ],
    demoLinks: [
      {
        label: "Try the Multi-Store demo",
        href: "/#multi-store-experience",
        description: "Switch branches and simulate a stock transfer.",
      },
      {
        label: "Try the Inventory demo",
        href: "/#inventory-experience",
        description: "See how a transfer affects two branch quantities.",
      },
    ],
  },
};

export const solutionList = [
  solutionDefinitions.retail,
  solutionDefinitions.restaurantCafe,
  solutionDefinitions.groceryConvenience,
  solutionDefinitions.multiStore,
] as const;
