import type { Metadata } from "next";

import { SolutionPage } from "@/components/marketing/solution-page";
import { solutionDefinitions } from "@/lib/solution-data";

export const metadata: Metadata = {
  title: "TINDIO for Retail | POS, Inventory, Loyalty and Reports",
  description:
    "Explore a TINDIO retail workflow connecting checkout, inventory, customers, loyalty, and reporting.",
};

export default function RetailSolutionPage() {
  return <SolutionPage solution={solutionDefinitions.retail} />;
}
