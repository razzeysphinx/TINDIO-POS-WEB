import type { Metadata } from "next";

import { LoginAction } from "@/components/marketing/login-action";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { solutionRoutes } from "@/lib/solution-data";

export const metadata: Metadata = {
  title: "Get Started with TINDIO | Choose Your Product Path",
  description:
    "Choose the TINDIO product demo or business solution that best matches what you want to understand first.",
};

const paths = [
  {
    eyebrow: "Selling",
    title: "I want to see the POS.",
    description:
      "Try adding products, reviewing a cart, choosing a demo payment method, and finishing a demo sale.",
    href: "/#interactive-demo",
    action: "Try POS demo",
  },
  {
    eyebrow: "Inventory",
    title: "I want to understand stock movement.",
    description:
      "Follow opening stock through receiving, sale, transfer, and physical count adjustment.",
    href: "/#inventory-experience",
    action: "Try Inventory demo",
  },
  {
    eyebrow: "Multi-Store",
    title: "I manage more than one location.",
    description:
      "Compare branches, drill into one store, and simulate moving stock between locations.",
    href: "/#multi-store-experience",
    action: "Try Multi-Store demo",
  },
  {
    eyebrow: "Offline",
    title: "Connectivity is a concern.",
    description:
      "Walk through the demo lifecycle from Online to Offline, Local Pending, Syncing, and Synced.",
    href: "/#offline-experience",
    action: "Try Offline demo",
  },
  {
    eyebrow: "Customer Menu",
    title: "I want a customer-facing menu.",
    description:
      "Change catalog details and watch the customer-facing Smart Menu preview respond.",
    href: "/#smart-menu-experience",
    action: "Try Smart Menu demo",
  },
  {
    eyebrow: "Business Fit",
    title: "I want a workflow for my business type.",
    description:
      "Choose Retail, Restaurant & Café, Grocery / Convenience, or Multi-Store.",
    href: solutionRoutes.overview,
    action: "Explore Solutions",
  },
] as const;

export default function GetStartedPage() {
  return (
    <main
      id="top"
      className="overflow-x-clip bg-[#fbfbf8] text-stone-950"
    >
      <SiteHeader />

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-x-0 top-0 -z-0 h-[560px] bg-[radial-gradient(ellipse_at_top,rgba(167,243,208,0.44),transparent_65%)]" />

        <Container>
          <div className="mx-auto max-w-[900px] text-center">
            <p className="eyebrow">Get Started</p>
            <h1 className="mt-5 text-balance text-5xl font-extrabold leading-[0.98] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
              Start with what you want to understand.
            </h1>
            <p className="mx-auto mt-6 max-w-[720px] text-pretty text-lg leading-8 text-stone-600 sm:text-xl">
              Account onboarding is not connected to this marketing website yet,
              so this page gives you a useful next step without pretending to create an account.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-stone-200 bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {paths.map((path) => (
              <a
                key={path.href}
                href={path.href}
                className="group flex h-full flex-col rounded-[22px] border border-stone-200 bg-[#fbfbf8] p-6 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-px hover:border-emerald-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                <p className="text-xs font-bold uppercase tracking-[0.11em] text-emerald-700">
                  {path.eyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.045em]">
                  {path.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-stone-600">
                  {path.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-800">
                  {path.action}
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f6f2] py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-[760px] rounded-[24px] border border-stone-200 bg-white p-6 text-center shadow-sm sm:p-8">
            <p className="eyebrow">Account access</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em]">
              Login remains intentionally unavailable.
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-sm leading-6 text-stone-600">
              When the real TINDIO application login destination is approved and
              connected, the existing Login control can become active without inventing a temporary destination.
            </p>

            <div className="mt-6 flex justify-center">
              <LoginAction
                variant="secondary"
                size="lg"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              href="/resources"
              variant="secondary"
            >
              Explore Resources
            </Button>
          </div>
        </Container>
      </section>

      <SiteFooter />
    </main>
  );
}
