import type { Metadata } from "next";

import { SolutionPage } from "@/components/marketing/solution-page";
import { solutionDefinitions } from "@/lib/solution-data";

export const metadata: Metadata = {
  title: "TINDIO for Multi-Store | Branch Visibility and Stock Transfers",
  description:
    "Explore a TINDIO multi-store workflow connecting branch performance, inventory transfers, employee access, and consolidated reporting.",
};

export default function MultiStoreSolutionPage() {
  return (
    <SolutionPage
      solution={solutionDefinitions.multiStore}
    />
  );
}
