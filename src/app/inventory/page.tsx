import type { Metadata } from "next";

import { InteractiveInventoryExperience } from "@/components/marketing/interactive-inventory-experience";
import {
  ActivityCopy,
  AttentionCopy,
  CountCopy,
  InventoryActivityDetailPreview,
  InventoryHeroCopy,
  InventoryHeroPreview,
  InventoryJourneyPreview,
  JourneyCopy,
  NeedsAttentionPreview,
  ReceivingCopy,
  ReceivingPreview,
  StoreCopy,
  StoreStockPreview,
  TransferCopy,
  TransferPreview,
  StockCountPreview,
} from "@/components/marketing/inventory-page-sections";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { publicCtaDestinations } from "@/lib/public-navigation";

export const metadata: Metadata = {
  title: "TINDIO Inventory | Track Every Stock Movement",
  description:
    "Track every stock movement in TINDIO, from receiving and sales to transfers, counts, adjustments, and returns.",
};

export default function InventoryPage() {
  return (
    <main
      id="top"
      className="overflow-x-clip bg-[#fbfbf8] text-stone-950"
    >
      <SiteHeader />

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-x-0 top-0 -z-0 h-[620px] bg-[radial-gradient(ellipse_at_top,rgba(167,243,208,0.38),transparent_65%)]" />

        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 xl:gap-24">
            <InventoryHeroCopy />

            <div className="mx-auto w-full max-w-[780px] lg:mx-0 lg:max-w-none">
              <InventoryHeroPreview />
            </div>
          </div>
        </Container>
      </section>

      <InteractiveInventoryExperience />

      <section className="border-y border-stone-200 bg-white py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 xl:gap-24">
            <JourneyCopy />

            <div className="mx-auto w-full max-w-[860px] lg:mx-0 lg:max-w-none">
              <InventoryJourneyPreview />
            </div>
          </div>
        </Container>
      </section>

      <section
        id="inventory-activity"
        className="bg-[#f5f6f2] py-20 sm:py-28 lg:py-32"
      >
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.16fr_0.84fr] lg:gap-16 xl:gap-24">
            <div className="order-2 mx-auto w-full max-w-[780px] lg:order-1 lg:mx-0 lg:max-w-none">
              <InventoryActivityDetailPreview />
            </div>

            <div className="order-1 lg:order-2">
              <ActivityCopy />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 xl:gap-24">
            <AttentionCopy />

            <div className="mx-auto w-full max-w-[780px] lg:mx-0 lg:max-w-none">
              <NeedsAttentionPreview />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f6f2] py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.16fr_0.84fr] lg:gap-16 xl:gap-24">
            <div className="order-2 mx-auto w-full max-w-[780px] lg:order-1 lg:mx-0 lg:max-w-none">
              <StoreStockPreview />
            </div>

            <div className="order-1 lg:order-2">
              <StoreCopy />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 xl:gap-24">
            <TransferCopy />

            <div className="mx-auto w-full max-w-[780px] lg:mx-0 lg:max-w-none">
              <TransferPreview />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f6f2] py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.16fr_0.84fr] lg:gap-16 xl:gap-24">
            <div className="order-2 mx-auto w-full max-w-[780px] lg:order-1 lg:mx-0 lg:max-w-none">
              <StockCountPreview />
            </div>

            <div className="order-1 lg:order-2">
              <CountCopy />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 xl:gap-24">
            <ReceivingCopy />

            <div className="mx-auto w-full max-w-[780px] lg:mx-0 lg:max-w-none">
              <ReceivingPreview />
            </div>
          </div>
        </Container>
      </section>

      <section
        id="get-started"
        className="bg-emerald-800 py-16 text-white sm:py-20"
      >
        <Container>
          <div className="mx-auto max-w-[780px] text-center">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-200">
              TINDIO Inventory
            </p>

            <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.06em] sm:text-5xl">
              Know where your stock went â€” and why.
            </h2>

            <p className="mx-auto mt-5 max-w-[620px] text-pretty text-lg leading-7 text-emerald-100">
              Explore how inventory connects back to selling and the wider
              TINDIO product.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                href={publicCtaDestinations.explorePos}
                variant="secondary"
                size="lg"
                className="border-white bg-white text-emerald-900 hover:bg-emerald-50"
              >
                Explore TINDIO POS
                <ArrowRightIcon className="h-4 w-4" />
              </Button>

              <Button
                href={publicCtaDestinations.exploreTindio}
                variant="emeraldOutline"
                size="lg"
              >
                Explore TINDIO
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <SiteFooter />
    </main>
  );
}
