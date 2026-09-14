import type { Metadata } from "next";

import { InteractiveMultiStoreExperience } from "@/components/marketing/interactive-multi-store-experience";

import {
  AccessCopy,
  BranchComparisonPreview,
  BranchDrilldownPreview,
  ComparisonCopy,
  DrilldownCopy,
  InventoryCopy,
  MultiStoreHeroCopy,
  MultiStoreHeroPreview,
  MultiStoreInventoryPreview,
  OperationsCopy,
  OperationsPreview,
  RecordsCopy,
  StoreAccessPreview,
  StoreRecordsPreview,
} from "@/components/marketing/multi-store-page-sections";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { publicCtaDestinations } from "@/lib/public-navigation";

export const metadata: Metadata = {
  title: "TINDIO Multi-Store | Compare Every Branch",
  description: "Compare branch performance, view store-specific sales, inventory, shifts, receipts, and access controls across your business with TINDIO.",
};

export default function MultiStorePage() {
  return (
    <main id="top" className="overflow-x-clip bg-[#fbfbf8] text-stone-950">
      <SiteHeader />

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28"><div className="absolute inset-x-0 top-0 -z-0 h-[620px] bg-[radial-gradient(ellipse_at_top,rgba(167,243,208,0.38),transparent_65%)]" /><Container className="relative z-10"><div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 xl:gap-24"><MultiStoreHeroCopy /><div className="mx-auto w-full max-w-[780px] lg:mx-0 lg:max-w-none"><MultiStoreHeroPreview /></div></div></Container></section>

      <InteractiveMultiStoreExperience />

      <section id="branch-comparison" className="border-y border-stone-200 bg-white py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 xl:gap-24"><ComparisonCopy /><div className="mx-auto w-full max-w-[840px] lg:mx-0 lg:max-w-none"><BranchComparisonPreview /></div></div></Container></section>

      <section className="bg-[#f5f6f2] py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[1.16fr_0.84fr] lg:gap-16 xl:gap-24"><div className="order-2 mx-auto w-full max-w-[780px] lg:order-1 lg:mx-0 lg:max-w-none"><BranchDrilldownPreview /></div><div className="order-1 lg:order-2"><DrilldownCopy /></div></div></Container></section>

      <section className="bg-white py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 xl:gap-24"><RecordsCopy /><div className="mx-auto w-full max-w-[820px] lg:mx-0 lg:max-w-none"><StoreRecordsPreview /></div></div></Container></section>

      <section className="bg-[#f5f6f2] py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[1.16fr_0.84fr] lg:gap-16 xl:gap-24"><div className="order-2 mx-auto w-full max-w-[760px] lg:order-1 lg:mx-0 lg:max-w-none"><MultiStoreInventoryPreview /></div><div className="order-1 lg:order-2"><InventoryCopy /></div></div></Container></section>

      <section className="bg-white py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 xl:gap-24"><OperationsCopy /><div className="mx-auto w-full max-w-[760px] lg:mx-0 lg:max-w-none"><OperationsPreview /></div></div></Container></section>

      <section className="bg-[#f5f6f2] py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[1.16fr_0.84fr] lg:gap-16 xl:gap-24"><div className="order-2 mx-auto w-full max-w-[760px] lg:order-1 lg:mx-0 lg:max-w-none"><StoreAccessPreview /></div><div className="order-1 lg:order-2"><AccessCopy /></div></div></Container></section>

      <section id="get-started" className="bg-emerald-800 py-16 text-white sm:py-20"><Container><div className="mx-auto max-w-[780px] text-center"><p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-200">TINDIO Multi-Store</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.06em] sm:text-5xl">Compare every branch without losing the details.</h2><p className="mx-auto mt-5 max-w-[600px] text-pretty text-lg leading-7 text-emerald-100">TINDIO gives you one place to compare performance across stores, then drill into the sales, inventory, shifts, receipts, and activity behind each branch.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button href={publicCtaDestinations.explorePos} variant="secondary" size="lg" className="border-white bg-white text-emerald-900 hover:bg-emerald-50">Explore TINDIO POS <ArrowRightIcon className="h-4 w-4" /></Button><Button href={publicCtaDestinations.exploreFeatures} variant="emeraldOutline" size="lg">Explore Features</Button></div></div></Container></section>

      <SiteFooter />
    </main>
  );
}
