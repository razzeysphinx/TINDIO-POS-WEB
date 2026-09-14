import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fbfbf8] text-stone-950">
      <SiteHeader />

      <section className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="eyebrow">404</p>

            <h1 className="mt-5 text-balance text-5xl font-extrabold tracking-[-0.065em] sm:text-6xl">
              This page is not part of the TINDIO site.
            </h1>

            <p className="mx-auto mt-6 max-w-[580px] text-lg leading-8 text-stone-600">
              The link may be outdated or the destination may
              not be public yet.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/">
                Back to TINDIO
              </Button>

              <Button
                href="/resources"
                variant="secondary"
              >
                Explore Resources
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <SiteFooter />
    </main>
  );
}
