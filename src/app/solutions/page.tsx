import type { Metadata } from "next";

import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { solutionList } from "@/lib/solution-data";

export const metadata: Metadata = {
  title: "TINDIO Solutions | Find the Workflow That Fits",
  description:
    "Explore TINDIO workflows for retail, restaurants and cafés, grocery and convenience stores, and multi-store businesses.",
};

export default function SolutionsPage() {
  return (
    <main
      id="top"
      className="overflow-x-clip bg-[#fbfbf8] text-stone-950"
    >
      <SiteHeader />

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-x-0 top-0 -z-0 h-[620px] bg-[radial-gradient(ellipse_at_top,rgba(167,243,208,0.42),transparent_65%)]" />

        <Container>
          <div className="mx-auto max-w-[900px] text-center">
            <Reveal>
              <p className="eyebrow">Solutions</p>
              <h1 className="mt-5 text-balance text-5xl font-extrabold leading-[0.98] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
                Start with how your business actually operates.
              </h1>
              <p className="mx-auto mt-6 max-w-[720px] text-pretty text-lg leading-8 text-stone-600 sm:text-xl">
                TINDIO uses the same connected product system across different
                business workflows. Choose the path that looks closest to yours.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-stone-200 bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-4 lg:grid-cols-2">
            {solutionList.map((solution, index) => (
              <Reveal
                key={solution.key}
                delay={index * 0.04}
              >
                <a
                  href={solution.route}
                  className="group block h-full rounded-[22px] border border-stone-200 bg-[#fbfbf8] p-6 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-px hover:border-emerald-200 hover:shadow-[0_18px_50px_rgba(28,25,23,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.11em] text-emerald-700">
                        {solution.label}
                      </p>
                      <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-stone-950">
                        {solution.title}
                      </h2>
                      <p className="mt-4 text-sm leading-6 text-stone-600">
                        {solution.description}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-xl text-emerald-700 transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {solution.productLinks.slice(0, 4).map((link) => (
                      <span
                        key={link.label}
                        className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-[11px] font-bold text-stone-600"
                      >
                        {link.label}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-emerald-800 py-16 text-white sm:py-20">
        <Container>
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">
              Not sure which path fits?
            </h2>
            <p className="mx-auto mt-5 max-w-[600px] text-lg leading-7 text-emerald-100">
              Use the guided start page to choose by workflow instead of business label.
            </p>
            <Button
              href="/get-started"
              variant="secondary"
              size="lg"
              className="mt-8 border-white bg-white text-emerald-900 hover:bg-emerald-50"
            >
              Choose your path
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      <SiteFooter />
    </main>
  );
}
