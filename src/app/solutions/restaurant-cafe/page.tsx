import type { Metadata } from "next";

import { SolutionPage } from "@/components/marketing/solution-page";
import { solutionDefinitions } from "@/lib/solution-data";

export const metadata: Metadata = {
  title: "TINDIO for Restaurants & Cafés | POS and Smart Menu",
  description:
    "Explore a TINDIO restaurant and café workflow connecting point of sale, menu presentation, employee access, and reporting.",
};

export default function RestaurantCafeSolutionPage() {
  return (
    <SolutionPage
      solution={solutionDefinitions.restaurantCafe}
    />
  );
}
