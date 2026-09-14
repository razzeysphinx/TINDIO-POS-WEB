import type { Metadata } from "next";

import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "TINDIO Security & Trust | Public Product Principles",
  description:
    "Review the public access-control and transparency principles TINDIO communicates without claiming unverified certifications.",
};

const principles = [
  {
    title: "Role-aware access",
    description:
      "The public product story separates owner, manager, inventory, and cashier responsibilities instead of presenting every tool to every employee.",
  },
  {
    title: "Store-aware access",
    description:
      "Multi-store and employee-access experiences communicate that store context matters when deciding what a team member should see and manage.",
  },
  {
    title: "Visible operational state",
    description:
      "Offline and inventory demos favor explicit states such as Local Pending, Syncing, Synced, and visible stock movements instead of hiding operational uncertainty.",
  },
  {
    title: "Approval before public claims",
    description:
      "Pricing, login destinations, certifications, and regulatory statements remain unpublished or clearly unavailable until verified information is ready.",
  },
] as const;

const notClaimed = [
  "No PCI certification is claimed by this marketing page.",
  "No BIR accreditation or registration status is claimed by this marketing page.",
  "No uptime SLA is claimed by this marketing page.",
  "No payment-acquirer certification is claimed by this marketing page.",
  "No security certification should be inferred unless it is explicitly published and verified.",
] as const;

export default function SecurityPage() {
  return (
    <main
      id="top"
      className="overflow-x-clip bg-[#fbfbf8] text-stone-950"
    >
      <SiteHeader />

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-x-0 top-0 -z-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(167,243,208,0.4),transparent_65%)]" />

        <Container>
          <div className="mx-auto max-w-[880px] text-center">
            <p className="eyebrow">Security & Trust</p>
            <h1 className="mt-5 text-balance text-5xl font-extrabold tracking-[-0.065em] sm:text-6xl">
              Trust starts by being precise about what is public.
            </h1>
            <p className="mx-auto mt-6 max-w-[720px] text-lg leading-8 text-stone-600">
              This page describes public product and access-control principles.
              It intentionally avoids certifications, regulatory claims, and guarantees that have not been formally published.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-stone-200 bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className="rounded-2xl border border-stone-200 bg-[#fbfbf8] p-6"
              >
                <span className="font-mono-tindio text-xs font-black text-emerald-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-2xl font-extrabold tracking-[-0.04em]">
                  {principle.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f6f2] py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="eyebrow">Public claim boundary</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">
                What this website does not claim.
              </h2>
            </div>

            <ul className="space-y-3">
              {notClaimed.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-stone-200 bg-white p-4 text-sm leading-6 text-stone-700"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 text-emerald-700"
                  >
                    â€”
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/faq">Read FAQ</Button>
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
