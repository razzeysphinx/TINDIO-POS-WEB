import { SiteFooter } from "@/components/marketing/site-footer";
import Link from "next/link";
import { SiteHeader } from "@/components/marketing/site-header";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";
import type { SolutionDefinition } from "@/lib/solution-data";

type SolutionPageProps = {
  solution: SolutionDefinition;
};

export function SolutionPage({ solution }: SolutionPageProps) {
  return (
    <main
      id="top"
      className="overflow-x-clip bg-[#fbfbf8] text-stone-950"
    >
      <SiteHeader />

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-x-0 top-0 -z-0 h-[620px] bg-[radial-gradient(ellipse_at_top,rgba(167,243,208,0.42),transparent_65%)]" />
        <div className="premium-grid absolute inset-0 -z-10 opacity-30" />

        <Container className="relative">
          <div className="mx-auto max-w-[930px] text-center">
            <Reveal>
              <p className="eyebrow">{solution.eyebrow}</p>
              <h1 className="mt-5 text-balance text-5xl font-extrabold leading-[0.98] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
                {solution.title}
              </h1>
              <p className="mx-auto mt-6 max-w-[720px] text-pretty text-lg leading-8 text-stone-600 sm:text-xl">
                {solution.description}
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/get-started" size="lg">
                  Choose your path
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>

                <Button
                  href={solution.demoLinks[0].href}
                  variant="secondary"
                  size="lg"
                >
                  {solution.demoLinks[0].label}
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="mx-auto mt-12 max-w-[900px] rounded-[24px] border border-emerald-100 bg-white/80 p-6 text-center shadow-[0_20px_60px_rgba(28,25,23,0.07)] backdrop-blur sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-emerald-800">
                Workflow focus
              </p>
              <p className="mx-auto mt-3 max-w-[760px] text-base leading-7 text-stone-700">
                {solution.context}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-stone-200 bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="mx-auto max-w-[760px] text-center">
            <p className="eyebrow">How the workflow connects</p>
            <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">
              Keep the daily work connected from start to review.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {solution.workflows.map((workflow, index) => (
              <Reveal
                key={workflow.number}
                delay={index * 0.04}
              >
                <article className="h-full rounded-2xl border border-stone-200 bg-[#fbfbf8] p-6">
                  <span className="font-mono-tindio text-xs font-black text-emerald-700">
                    {workflow.number}
                  </span>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-[-0.04em] text-stone-950">
                    {workflow.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">
                    {workflow.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f6f2] py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="eyebrow">Product areas</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">
                Go deeper where your operation needs it.
              </h2>
              <p className="mt-5 max-w-[500px] text-lg leading-7 text-stone-600">
                The solution page organizes the workflow. The product pages show
                each TINDIO area in more detail.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {solution.productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-px hover:border-emerald-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-extrabold tracking-[-0.035em] text-stone-950">
                        {link.label}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-stone-600">
                        {link.description}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="mt-1 text-emerald-700 transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="mx-auto max-w-[760px] text-center">
            <p className="eyebrow">Try the product story</p>
            <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">
              Use the demos instead of guessing how it feels.
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-[980px] gap-4 sm:grid-cols-2">
            {solution.demoLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-2xl border border-stone-200 bg-[#fbfbf8] p-6 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-px hover:border-emerald-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-emerald-700">
                  Interactive demo
                </p>
                <h3 className="mt-3 text-xl font-extrabold tracking-[-0.04em]">
                  {link.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {link.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-800">
                  Open demo
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-emerald-800 py-16 text-white sm:py-20">
        <Container>
          <div className="mx-auto max-w-[780px] text-center">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-200">
              TINDIO
            </p>
            <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.06em] sm:text-5xl">
              Start from the workflow that matters to you.
            </h2>
            <p className="mx-auto mt-5 max-w-[620px] text-pretty text-lg leading-7 text-emerald-100">
              Choose a product demo, a business solution, or a deeper product
              page without pretending there is a signup flow that is not yet connected.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                href="/get-started"
                variant="secondary"
                size="lg"
                className="border-white bg-white text-emerald-900 hover:bg-emerald-50"
              >
                Choose your path
                <ArrowRightIcon className="h-4 w-4" />
              </Button>

              <Button
                href="/solutions"
                variant="emeraldOutline"
                size="lg"
              >
                All Solutions
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <SiteFooter />
    </main>
  );
}
