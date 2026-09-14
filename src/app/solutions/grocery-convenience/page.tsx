import type { Metadata } from "next";

import { SolutionPage } from "@/components/marketing/solution-page";
import { solutionDefinitions } from "@/lib/solution-data";

export const metadata: Metadata = {
  title: "TINDIO for Grocery & Convenience | Fast Checkout and Inventory",
  description:
    "Explore a TINDIO grocery and convenience workflow connecting fast checkout, inventory attention, employee access, and reporting.",
};

export default function GroceryConvenienceSolutionPage() {
  return (
    <SolutionPage
      solution={solutionDefinitions.groceryConvenience}
    />
  );
}
