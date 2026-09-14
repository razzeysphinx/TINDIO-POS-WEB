import { AppFrame } from "@/components/marketing/app-frame";
import { InventoryActivityPreview } from "@/components/marketing/inventory-showcase";
import { EmployeeAccessPreview } from "@/components/marketing/employee-access-showcase";
import { MultiStorePerformancePreview } from "@/components/marketing/multi-store-showcase";
import { SyncStatusPreview } from "@/components/marketing/offline-showcase";
import { ReportsPreview } from "@/components/marketing/reports-showcase";
import { LoyaltyPreview } from "@/components/marketing/loyalty-showcase";
import { SmartMenuPreview } from "@/components/marketing/smart-menu-showcase";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { LoginAction } from "@/components/marketing/login-action";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon, CheckoutIcon, InventoryIcon, StoresIcon } from "@/components/ui/icons";
import { publicCtaDestinations } from "@/lib/public-navigation";

const pillars = [
  {
    number: "01",
    title: "Sell simply.",
    text: "Give every sale a clear, dependable flow—from the counter to the back office.",
    icon: CheckoutIcon,
  },
  {
    number: "02",
    title: "Track every item.",
    text: "Keep a closer eye on what you have, what is moving and what needs attention.",
    icon: InventoryIcon,
  },
  {
    number: "03",
    title: "Manage every store.",
    text: "Stay connected as your business grows from one location to the next.",
    icon: StoresIcon,
  },
];

export default function Home() {
  return (
    <main id="top" className="overflow-x-clip bg-[#fbfbf8] text-stone-950">
      <SiteHeader />

      <section className="hero-section relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-28">
        <div className="absolute inset-x-0 top-0 -z-0 h-[620px] bg-[radial-gradient(ellipse_at_top,rgba(167,243,208,0.4),transparent_63%)]" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-[980px] text-center">
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-emerald-800">TINDIO for modern business</p>
            <h1 className="hero-headline mt-6 text-balance text-[3.1rem] font-extrabold leading-[0.96] tracking-[-0.07em] sm:text-7xl lg:text-[5.6rem] xl:text-[6.35rem]">Sell simple. Grow smarter.</h1>
            <p className="mx-auto mt-7 max-w-[630px] text-pretty text-lg leading-7 text-stone-600 sm:text-xl sm:leading-8">Run sales, inventory, employees and every store from one place.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={publicCtaDestinations.getStarted} size="lg">Get Started <ArrowRightIcon className="h-4 w-4" /></Button>
              <Button href="#product" variant="secondary" size="lg">See how TINDIO works</Button>
            </div>
          </div>

          <div id="product" className="hero-product-composition relative mx-auto mt-14 max-w-[1320px] sm:mt-16 lg:mt-20 xl:max-w-[1380px]">
            <AppFrame
              title="TINDIO Back Office"
              screenshotSrc="/images/tindio-back-office-hero.png"
              screenshotAlt="TINDIO Back Office dashboard with organization-wide actions and business performance cards"
              screenshotWidth={1672}
              screenshotHeight={941}
              priority
              className="relative z-10 mx-auto w-full"
            />
            <div className="hero-pos-overlay relative z-20 mx-auto mt-4 w-[82%] max-w-[420px] sm:absolute sm:-bottom-16 sm:right-0 sm:mt-0 sm:w-[45%] sm:max-w-[440px] lg:-bottom-20 lg:-right-3">
              <AppFrame
                title="TINDIO POS"
                screenshotSrc="/images/tindio-pos-hero.png"
                screenshotAlt="TINDIO POS with product search, category tabs, catalog cards and current cart"
                screenshotWidth={1672}
                screenshotHeight={941}
                className="ring-8 ring-[#fbfbf8] sm:ring-[10px]"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-stone-200 bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_2fr] lg:gap-20">
            <div>
              <p className="eyebrow">One connected system</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">The essential work, in one place.</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                <article key={pillar.number} className="border-t border-stone-300 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 text-emerald-800"><Icon className="h-4 w-4" /></span>
                    <p className="text-xs font-bold tracking-[0.12em] text-emerald-800">{pillar.number}</p>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-[-0.04em]">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{pillar.text}</p>
                </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section id="inventory" className="bg-[#f5f6f2] py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 xl:gap-24">
            <div className="max-w-[500px]">
              <p className="eyebrow">Inventory</p>
              <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Know where every item goes.</h2>
              <p className="mt-5 max-w-[460px] text-lg leading-7 text-stone-600">Follow inventory from receiving to sale, transfer, adjustment, count and return—without digging through complicated reports.</p>
              <Button href="/inventory" className="mt-8" variant="primary">Explore Inventory <ArrowRightIcon className="h-4 w-4" /></Button>
            </div>
            <div className="mx-auto w-full max-w-[760px] lg:mx-0 lg:max-w-none">
              <InventoryActivityPreview />
            </div>
          </div>
        </Container>
      </section>

      <section id="multi-store" className="bg-white py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.22fr_0.78fr] lg:gap-16 xl:gap-24">
            <div className="order-2 mx-auto w-full max-w-[760px] lg:order-1 lg:mx-0 lg:max-w-none">
              <MultiStorePerformancePreview />
            </div>
            <div className="order-1 max-w-[500px] lg:order-2">
              <p className="eyebrow">Multi-Store</p>
              <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Know which branch is performing best.</h2>
              <p className="mt-5 max-w-[460px] text-lg leading-7 text-stone-600">Compare every branch from one place, then drill into an individual store when you need the details.</p>
              <p className="mt-3 max-w-[460px] text-sm leading-6 text-stone-500">Compare sales, transactions, average ticket, inventory alerts and operational performance across every store you’re authorized to manage.</p>
              <div className="mt-8 border-y border-stone-200 py-5">
                <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-5">
                  <div><p className="text-xs font-bold uppercase tracking-[0.1em] text-emerald-800">All Stores</p><p className="mt-1 text-sm font-semibold text-stone-800">Consolidated business view</p></div>
                  <span className="hidden text-xl text-emerald-700 sm:block">→</span>
                  <div><p className="text-xs font-bold uppercase tracking-[0.1em] text-emerald-800">One Store</p><p className="mt-1 text-sm font-semibold text-stone-800">Detailed branch view</p></div>
                </div>
              </div>
              <Button href="#multi-store" className="mt-8" variant="primary">Explore Multi-Store <ArrowRightIcon className="h-4 w-4" /></Button>
            </div>
          </div>
        </Container>
      </section>

      <section id="offline" className="bg-[#f5f6f2] py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 xl:gap-24">
            <div className="max-w-[500px]">
              <p className="eyebrow">Offline</p>
              <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Built for unreliable connections.</h2>
              <p className="mt-5 max-w-[460px] text-lg leading-7 text-stone-600">TINDIO keeps transactions safe during connection problems and automatically catches up when you’re back online.</p>
              <p className="mt-3 max-w-[460px] text-sm leading-6 text-stone-500">Pending transactions stay visible, so you can see what is waiting to sync rather than searching through reports.</p>
              <Button href="#offline" className="mt-8" variant="primary">Explore Offline POS <ArrowRightIcon className="h-4 w-4" /></Button>
            </div>
            <div className="mx-auto w-full max-w-[760px] lg:mx-0 lg:max-w-none">
              <SyncStatusPreview />
            </div>
          </div>
        </Container>
      </section>

      <section id="employee-access" className="bg-white py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.22fr_0.78fr] lg:gap-16 xl:gap-24">
            <div className="order-2 mx-auto w-full max-w-[760px] lg:order-1 lg:mx-0 lg:max-w-none">
              <EmployeeAccessPreview />
            </div>
            <div className="order-1 max-w-[500px] lg:order-2">
              <p className="eyebrow">Employee Access</p>
              <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Give every employee the right access.</h2>
              <p className="mt-5 max-w-[460px] text-lg leading-7 text-stone-600">Owners can manage the whole business, while managers, inventory staff and cashiers only see what they need.</p>
              <p className="mt-3 max-w-[460px] text-sm leading-6 text-stone-500">Each role can be limited to the stores and tools they’re authorized to use.</p>
              <div className="mt-8 flex items-center gap-2.5 border-y border-stone-200 py-4.5 text-xs font-bold uppercase tracking-[0.1em] text-emerald-800"><span>Role</span><span className="text-stone-300">↓</span><span>Permissions</span><span className="text-stone-300">↓</span><span>Store Access</span></div>
              <Button href="#employee-access" className="mt-8" variant="primary">Explore Employee Access <ArrowRightIcon className="h-4 w-4" /></Button>
            </div>
          </div>
        </Container>
      </section>

      <section id="reports" className="bg-[#f5f6f2] py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 xl:gap-24">
            <div className="max-w-[500px]">
              <p className="eyebrow">Reports</p>
              <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">See what’s happening across your business.</h2>
              <p className="mt-5 max-w-[460px] text-lg leading-7 text-stone-600">Track the numbers that matter, compare stores, and drill into the details when you need them.</p>
              <p className="mt-3 max-w-[460px] text-sm leading-6 text-stone-500">Track sales, shifts, payments, inventory, employees and store performance from one place—then drill into the details when you need them.</p>
              <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-y border-stone-200 py-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-emerald-800">All Stores</p><p className="mt-1 text-xs font-semibold text-stone-700">Consolidated business view</p></div><span className="text-emerald-700">→</span><div><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-emerald-800">Specific Store</p><p className="mt-1 text-xs font-semibold text-stone-700">Branch-level report</p></div></div>
              <Button href="#reports" className="mt-8" variant="primary">Explore Reports <ArrowRightIcon className="h-4 w-4" /></Button>
            </div>
            <div className="mx-auto w-full max-w-[760px] lg:mx-0 lg:max-w-none">
              <ReportsPreview />
            </div>
          </div>
        </Container>
      </section>

      <section id="loyalty" className="bg-white py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.22fr_0.78fr] lg:gap-16 xl:gap-24">
            <div className="order-2 mx-auto w-full max-w-[760px] lg:order-1 lg:mx-0 lg:max-w-none">
              <LoyaltyPreview />
            </div>
            <div className="order-1 max-w-[500px] lg:order-2">
              <p className="eyebrow">Loyalty</p>
              <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Simple loyalty customers can actually use.</h2>
              <p className="mt-5 max-w-[460px] text-lg leading-7 text-stone-600">Scan a card, recognize the customer, and track reward progress instantly.</p>
              <p className="mt-3 max-w-[460px] text-sm leading-6 text-stone-500">Let customers scan a loyalty card at checkout, track reward progress digitally, and verify every card before rewards are redeemed.</p>
              <div className="mt-8 border-y border-stone-200 py-4"><p className="text-sm font-semibold leading-6 text-stone-700">The physical card is convenient. The digital TINDIO record keeps it trustworthy.</p></div>
              <Button href="#loyalty" className="mt-8" variant="primary">Explore Loyalty <ArrowRightIcon className="h-4 w-4" /></Button>
            </div>
          </div>
        </Container>
      </section>

      <section id="solutions" className="bg-[#f5f6f2] py-20 sm:py-28 lg:py-32">
        <Container>
          <div id="smart-menu" className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 xl:gap-24">
            <div className="max-w-[500px]">
              <p className="eyebrow">Smart Menu</p>
              <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Turn your catalog into a customer menu.</h2>
              <p className="mt-5 max-w-[460px] text-lg leading-7 text-stone-600">Use the same products, prices, categories and modifiers already managed in TINDIO.</p>
              <p className="mt-3 max-w-[460px] text-sm leading-6 text-stone-500">Use the same products, categories, prices, variants, and modifiers already managed in TINDIO to power a simple customer-facing QR menu.</p>
              <div className="mt-8 flex items-center gap-3 border-y border-stone-200 py-4 text-xs font-bold uppercase tracking-[0.1em]"><span className="text-emerald-800">TINDIO Catalog</span><span className="text-stone-300">↓</span><span className="text-emerald-800">Smart Menu</span></div>
              <Button href="#smart-menu" className="mt-8" variant="primary">Explore Smart Menu <ArrowRightIcon className="h-4 w-4" /></Button>
            </div>
            <div className="mx-auto w-full max-w-[760px] lg:mx-0 lg:max-w-none">
              <SmartMenuPreview />
            </div>
          </div>
        </Container>
      </section>

      <section id="get-started" className="bg-emerald-800 py-16 text-white sm:py-20">
        <Container>
          <div className="mx-auto max-w-[780px] text-center">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-200">TINDIO</p>
            <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.06em] sm:text-5xl">Ready to run your business with less complexity?</h2>
            <p className="mx-auto mt-5 max-w-[600px] text-pretty text-lg leading-7 text-emerald-100">Start with one store today and grow into multiple branches when you’re ready.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={publicCtaDestinations.getStarted} variant="secondary" size="lg" className="border-white bg-white text-emerald-900 hover:bg-emerald-50">Get Started <ArrowRightIcon className="h-4 w-4" /></Button>
              <LoginAction variant="emeraldOutline" size="lg" />
            </div>
          </div>
        </Container>
      </section>

      <div id="login" className="sr-only">Log in</div>
      <SiteFooter />
    </main>
  );
}
