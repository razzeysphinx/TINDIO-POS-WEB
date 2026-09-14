import type { Metadata } from "next";

import {
  DigitalCardCopy,
  DigitalCardPreview,
  LoyaltyHeroCopy,
  LoyaltyHeroPreview,
  LoyaltyHistoryCopy,
  LoyaltyHistoryPreview,
  LoyaltyIdentityCopy,
  LoyaltyIdentityPreview,
  LoyaltyPosConnectionCopy,
  LoyaltyPosConnectionPreview,
  LoyaltyProgressCopy,
  LoyaltyProgressPreview,
  LoyaltyVerificationCopy,
  LoyaltyVerificationPreview,
  MultiStoreLoyaltyCopy,
  MultiStoreLoyaltyPreview,
} from "@/components/marketing/loyalty-page-sections";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { publicCtaDestinations } from "@/lib/public-navigation";

export const metadata: Metadata = {
  title: "TINDIO Loyalty | Simple Customer Rewards",
  description: "Keep customer loyalty progress, digital cards, purchases, and rewards connected with TINDIO.",
};

export default function LoyaltyPage() {
  return (
    <main id="top" className="overflow-x-clip bg-[#fbfbf8] text-stone-950">
      <SiteHeader />

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28"><div className="absolute inset-x-0 top-0 -z-0 h-[620px] bg-[radial-gradient(ellipse_at_top,rgba(167,243,208,0.38),transparent_65%)]" /><Container className="relative z-10"><div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 xl:gap-24"><LoyaltyHeroCopy /><div className="mx-auto w-full max-w-[780px] lg:mx-0 lg:max-w-none"><LoyaltyHeroPreview /></div></div></Container></section>

      <section id="loyalty-identity" className="border-y border-stone-200 bg-white py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 xl:gap-24"><LoyaltyIdentityCopy /><div className="mx-auto w-full max-w-[760px] lg:mx-0 lg:max-w-none"><LoyaltyIdentityPreview /></div></div></Container></section>

      <section className="bg-[#f5f6f2] py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[1.16fr_0.84fr] lg:gap-16 xl:gap-24"><div className="order-2 mx-auto w-full max-w-[720px] lg:order-1 lg:mx-0 lg:max-w-none"><LoyaltyProgressPreview /></div><div className="order-1 lg:order-2"><LoyaltyProgressCopy /></div></div></Container></section>

      <section className="bg-white py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 xl:gap-24"><LoyaltyPosConnectionCopy /><div className="mx-auto w-full max-w-[800px] lg:mx-0 lg:max-w-none"><LoyaltyPosConnectionPreview /></div></div></Container></section>

      <section className="bg-[#f5f6f2] py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[1.16fr_0.84fr] lg:gap-16 xl:gap-24"><div className="order-2 mx-auto w-full max-w-[760px] lg:order-1 lg:mx-0 lg:max-w-none"><DigitalCardPreview /></div><div className="order-1 lg:order-2"><DigitalCardCopy /></div></div></Container></section>

      <section className="bg-white py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 xl:gap-24"><LoyaltyVerificationCopy /><div className="mx-auto w-full max-w-[760px] lg:mx-0 lg:max-w-none"><LoyaltyVerificationPreview /></div></div></Container></section>

      <section className="bg-[#f5f6f2] py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[1.16fr_0.84fr] lg:gap-16 xl:gap-24"><div className="order-2 mx-auto w-full max-w-[760px] lg:order-1 lg:mx-0 lg:max-w-none"><LoyaltyHistoryPreview /></div><div className="order-1 lg:order-2"><LoyaltyHistoryCopy /></div></div></Container></section>

      <section className="bg-white py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 xl:gap-24"><MultiStoreLoyaltyCopy /><div className="mx-auto w-full max-w-[760px] lg:mx-0 lg:max-w-none"><MultiStoreLoyaltyPreview /></div></div></Container></section>

      <section id="get-started" className="bg-emerald-800 py-16 text-white sm:py-20"><Container><div className="mx-auto max-w-[780px] text-center"><p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-200">TINDIO Loyalty</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.06em] sm:text-5xl">Give customers a reason to come back.</h2><p className="mx-auto mt-5 max-w-[600px] text-pretty text-lg leading-7 text-emerald-100">TINDIO keeps customer identity, loyalty progress, purchases, and rewards connected in one simple experience.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button href={publicCtaDestinations.getStarted} variant="secondary" size="lg" className="border-white bg-white text-emerald-900 hover:bg-emerald-50">Get Started <ArrowRightIcon className="h-4 w-4" /></Button><Button href={publicCtaDestinations.exploreTindio} variant="emeraldOutline" size="lg">Explore TINDIO</Button></div></div></Container></section>

      <SiteFooter />
    </main>
  );
}
