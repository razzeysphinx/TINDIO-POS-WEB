import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "TINDIO Resources | Product Demos and Guides",
  description:
    "Explore TINDIO product demos, product pages, FAQs, and public security and trust information.",
};

const demos = [
  {
    label: "POS Demo",
    href: "/#interactive-demo",
    description:
      "Add products, review the cart, choose a payment method, and complete a marketing demo sale.",
  },
  {
    label: "Inventory Demo",
    href: "/#inventory-experience",
    description:
      "Follow a demo item through receiving, sale, transfer, and count adjustment.",
  },
  {
    label: "Offline POS Demo",
    href: "/#offline-experience",
    description:
      "Walk through Online → Offline → Local Pending → Syncing → Synced.",
  },
  {
    label: "Multi-Store Demo",
    href: "/#multi-store-experience",
    description:
      "Switch branches and simulate moving stock between locations.",
  },
  {
    label: "Smart Menu Demo",
    href: "/#smart-menu-experience",
    description:
      "Change catalog details and watch a customer menu preview update.",
  },
] as const;

const guides = [
  { label: "Point of Sale", href: "/pos" },
  { label: "Inventory", href: "/inventory" },
  { label: "Multi-Store", href: "/multi-store" },
  { label: "Reports", href: "/reports" },
  { label: "Employee Access", href: "/employee-access" },
  { label: "Offline POS", href: "/offline" },
  { label: "Loyalty", href: "/loyalty" },
  { label: "Smart Menu", href: "/smart-menu" },
] as const;

export default function ResourcesPage() {
  return (
    <main
      id="top"
      className="overflow-x-clip bg-[#fbfbf8] text-stone-950"
    >
      <SiteHeader />

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-x-0 top-0 -z-0 h-[560px] bg-[radial-gradient(ellipse_at_top,rgba(167,243,208,0.4),transparent_65%)]" />

        <Container>
          <div className="mx-auto max-w-[880px] text-center">
            <p className="eyebrow">Resources</p>
            <h1 className="mt-5 text-balance text-5xl font-extrabold leading-[0.98] tracking-[-0.065em] sm:text-6xl">
              Understand TINDIO by exploring the product.
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-pretty text-lg leading-8 text-stone-600">
              Use interactive demos for the quick story, product pages for the
              deeper workflow, and public FAQ and trust pages for boundaries and expectations.
            </p>
          </div>
        </Container>
      </section>

      <section
        id="demos"
        className="border-y border-stone-200 bg-white py-20 sm:py-24"
      >
        <Container>
          <div className="max-w-[720px]">
            <p className="eyebrow">Interactive demos</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">
              Try the core product stories.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {demos.map((demo) => (
              <Link
                key={demo.href}
                href={demo.href}
                className="group rounded-2xl border border-stone-200 bg-[#fbfbf8] p-5 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-px hover:border-emerald-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-extrabold tracking-[-0.035em]">
                      {demo.label}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-stone-600">
                      {demo.description}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-emerald-700 transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f6f2] py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="eyebrow">Product guides</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">
                Go deeper by product area.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group flex items-center justify-between rounded-xl border border-stone-200 bg-white px-4 py-4 text-sm font-bold text-stone-800 transition-colors hover:border-emerald-200 hover:text-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                >
                  {guide.label}
                  <span
                    aria-hidden="true"
                    className="text-emerald-700 transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/faq"
              className="rounded-[22px] border border-stone-200 bg-[#fbfbf8] p-6 transition-colors hover:border-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 sm:p-8"
            >
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em]">
                Clear answers without marketing guesses.
              </h2>
              <p className="mt-4 text-sm leading-6 text-stone-600">
                Review what the demos mean, what is not being claimed, and what
                public product paths exist today.
              </p>
            </Link>

            <Link
              href="/security"
              className="rounded-[22px] border border-stone-200 bg-[#fbfbf8] p-6 transition-colors hover:border-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 sm:p-8"
            >
              <p className="eyebrow">Security & Trust</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em]">
                Publish only what can be supported.
              </h2>
              <p className="mt-4 text-sm leading-6 text-stone-600">
                See the public access-control principles TINDIO communicates and
                the claims this website intentionally does not make.
              </p>
            </Link>
          </div>

          <div className="mt-10 text-center">
            <Button href="/get-started" size="lg">
              Choose where to start
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      <SiteFooter />
    </main>
  );
}
