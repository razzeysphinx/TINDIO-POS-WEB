import type { Metadata } from "next";

import {
  EmployeeCopy,
  EmployeePerformancePreview,
  ExceptionsCopy,
  ExceptionsPreview,
  FiltersCopy,
  FiltersPreview,
  KpiCopy,
  KpiOverviewPreview,
  LibraryCopy,
  PaymentCopy,
  PaymentReportingPreview,
  ProductCopy,
  ProductPerformancePreview,
  ReportLibraryPreview,
  ReportsHeroCopy,
  ReportsHeroPreview,
  SalesTrendPreview,
  StoreCopy,
  StorePerformancePreview,
  TrendCopy,
} from "@/components/marketing/reports-page-sections";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { publicCtaDestinations } from "@/lib/public-navigation";

export const metadata: Metadata = {
  title: "TINDIO Reports | Understand Your Business",
  description: "Track sales, products, stores, employees, payment methods, refunds, and shift performance through clear, store-aware TINDIO reports.",
};

export default function ReportsPage() {
  return (
    <main id="top" className="overflow-x-clip bg-[#fbfbf8] text-stone-950">
      <SiteHeader />

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28"><div className="absolute inset-x-0 top-0 -z-0 h-[620px] bg-[radial-gradient(ellipse_at_top,rgba(167,243,208,0.38),transparent_65%)]" /><Container className="relative z-10"><div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 xl:gap-24"><ReportsHeroCopy /><div className="mx-auto w-full max-w-[780px] lg:mx-0 lg:max-w-none"><ReportsHeroPreview /></div></div></Container></section>

      <section id="kpi-overview" className="border-y border-stone-200 bg-white py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 xl:gap-24"><KpiCopy /><div className="mx-auto w-full max-w-[840px] lg:mx-0 lg:max-w-none"><KpiOverviewPreview /></div></div></Container></section>

      <section className="bg-[#f5f6f2] py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[1.16fr_0.84fr] lg:gap-16 xl:gap-24"><div className="order-2 mx-auto w-full max-w-[780px] lg:order-1 lg:mx-0 lg:max-w-none"><SalesTrendPreview /></div><div className="order-1 lg:order-2"><TrendCopy /></div></div></Container></section>

      <section className="bg-white py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 xl:gap-24"><ProductCopy /><div className="mx-auto w-full max-w-[800px] lg:mx-0 lg:max-w-none"><ProductPerformancePreview /></div></div></Container></section>

      <section className="bg-[#f5f6f2] py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[1.16fr_0.84fr] lg:gap-16 xl:gap-24"><div className="order-2 mx-auto w-full max-w-[760px] lg:order-1 lg:mx-0 lg:max-w-none"><StorePerformancePreview /></div><div className="order-1 lg:order-2"><StoreCopy /></div></div></Container></section>

      <section className="bg-white py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 xl:gap-24"><EmployeeCopy /><div className="mx-auto w-full max-w-[760px] lg:mx-0 lg:max-w-none"><EmployeePerformancePreview /></div></div></Container></section>

      <section className="bg-[#f5f6f2] py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[1.16fr_0.84fr] lg:gap-16 xl:gap-24"><div className="order-2 mx-auto w-full max-w-[720px] lg:order-1 lg:mx-0 lg:max-w-none"><PaymentReportingPreview /></div><div className="order-1 lg:order-2"><PaymentCopy /></div></div></Container></section>

      <section className="bg-white py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 xl:gap-24"><ExceptionsCopy /><div className="mx-auto w-full max-w-[760px] lg:mx-0 lg:max-w-none"><ExceptionsPreview /></div></div></Container></section>

      <section className="bg-[#f5f6f2] py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[1.16fr_0.84fr] lg:gap-16 xl:gap-24"><div className="order-2 mx-auto w-full max-w-[760px] lg:order-1 lg:mx-0 lg:max-w-none"><ReportLibraryPreview /></div><div className="order-1 lg:order-2"><LibraryCopy /></div></div></Container></section>

      <section className="bg-white py-20 sm:py-28 lg:py-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16 xl:gap-24"><FiltersCopy /><div className="mx-auto w-full max-w-[760px] lg:mx-0 lg:max-w-none"><FiltersPreview /></div></div></Container></section>

      <section id="get-started" className="bg-emerald-800 py-16 text-white sm:py-20"><Container><div className="mx-auto max-w-[780px] text-center"><p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-200">TINDIO Reports</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.06em] sm:text-5xl">Turn business activity into a clearer picture.</h2><p className="mx-auto mt-5 max-w-[600px] text-pretty text-lg leading-7 text-emerald-100">TINDIO brings sales, products, stores, employees, payments, refunds, and shifts into reports you can actually understand.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button href={publicCtaDestinations.getStarted} variant="secondary" size="lg" className="border-white bg-white text-emerald-900 hover:bg-emerald-50">Get Started <ArrowRightIcon className="h-4 w-4" /></Button><Button href={publicCtaDestinations.exploreTindio} variant="emeraldOutline" size="lg">Explore TINDIO</Button></div></div></Container></section>

      <SiteFooter />
    </main>
  );
}
