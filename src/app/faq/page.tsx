import type { Metadata } from "next";

import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "TINDIO FAQ | Product and Demo Questions",
  description:
    "Answers about TINDIO product demos, multi-store workflows, offline behavior, Smart Menu, pricing, login, and public product claims.",
};

const faqs = [
  {
    question: "Are the interactive demos connected to a real TINDIO account?",
    answer:
      "No. The website demos use local browser state for product storytelling. They do not create real sales, payments, inventory movements, customer records, or sync requests.",
  },
  {
    question: "Does the POS demo process real payments?",
    answer:
      "No. Cash, Card, GCash, and Maya are presented as demo payment choices only. Real payment processing depends on actual payment integrations and is not performed by the marketing website.",
  },
  {
    question: "What does the Offline POS demo show?",
    answer:
      "It demonstrates the intended transaction lifecycle concept: Online, Offline, Local Pending, Syncing, and Synced. The website simulation itself does not persist or synchronize a real transaction.",
  },
  {
    question: "Is TINDIO designed for multiple stores?",
    answer:
      "The public product experience includes multi-store views, branch context, store inventory concepts, employee access, reporting, and a stock-transfer simulation.",
  },
  {
    question: "Does Smart Menu accept online orders?",
    answer:
      "This website currently demonstrates catalog-to-menu presentation. It does not claim or simulate a production online ordering or payment flow.",
  },
  {
    question: "Is pricing published?",
    answer:
      "Not yet. The website intentionally keeps Pricing unavailable instead of inventing plans or amounts that have not been approved.",
  },
  {
    question: "Why is Log in unavailable?",
    answer:
      "The public marketing repository does not yet have the real TINDIO application login destination configured. The control remains intentionally unavailable until that destination is connected.",
  },
  {
    question: "Does this website claim certifications or regulatory approval?",
    answer:
      "No unverified certification or regulatory status should be inferred from the marketing website. Formal compliance or certification claims should only be published after they are verified and approved for public use.",
  },
] as const;

export default function FaqPage() {
  return (
    <main
      id="top"
      className="overflow-x-clip bg-[#fbfbf8] text-stone-950"
    >
      <SiteHeader />

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-x-0 top-0 -z-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(167,243,208,0.4),transparent_65%)]" />
        <Container>
          <div className="mx-auto max-w-[840px] text-center">
            <p className="eyebrow">FAQ</p>
            <h1 className="mt-5 text-balance text-5xl font-extrabold tracking-[-0.065em] sm:text-6xl">
              Clear answers. No invented promises.
            </h1>
            <p className="mx-auto mt-6 max-w-[680px] text-lg leading-8 text-stone-600">
              These answers describe what the public website demonstrates and
              the boundaries it intentionally keeps visible.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-stone-200 bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-[900px] divide-y divide-stone-200 border-y border-stone-200">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-extrabold tracking-[-0.025em] text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl font-normal text-emerald-700 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-[760px] pb-2 pt-4 text-sm leading-7 text-stone-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/resources">Explore Resources</Button>
            <Button
              href="/get-started"
              variant="secondary"
            >
              Choose your path
            </Button>
          </div>
        </Container>
      </section>

      <SiteFooter />
    </main>
  );
}
