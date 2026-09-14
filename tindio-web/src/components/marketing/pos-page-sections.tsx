import type { ReactNode } from "react";

import { AppFrame } from "@/components/marketing/app-frame";
import { SyncStatusPreview } from "@/components/marketing/offline-showcase";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { publicCtaDestinations } from "@/lib/public-navigation";

function PreviewHeader({ area, title, action }: { area: string; title: string; action?: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4">
      <div className="flex items-center gap-2.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-700 text-[10px] font-extrabold text-white">T</span>
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-stone-400">{area}</p>
          <p className="mt-0.5 text-xs font-bold tracking-[-0.02em] text-stone-900">{title}</p>
        </div>
      </div>
      {action ? <span className="rounded-md border border-stone-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-stone-600">{action}</span> : null}
    </div>
  );
}

function PosPreviewFrame({ children, title }: { children: ReactNode; title: string }) {
  return (
    <AppFrame title={`TINDIO POS — ${title}`} className="w-full">
      <div className="bg-[#fafbf9] p-4 sm:p-5 lg:p-6">{children}</div>
    </AppFrame>
  );
}

function FlowStep({ label, detail, number, active = false }: { label: string; detail?: string; number: number; active?: boolean }) {
  return <li className="relative min-w-0"><span className={`relative flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-extrabold ${active ? "bg-emerald-700 text-white" : "bg-stone-100 text-stone-500"}`}>{number}</span><p className="mt-2 text-[10px] font-bold text-stone-900">{label}</p>{detail ? <p className="mt-0.5 text-[9px] leading-4 text-stone-500">{detail}</p> : null}</li>;
}

export function PosHeroCopy() {
  return (
    <div className="max-w-[560px]">
      <p className="eyebrow">Point of Sale</p>
      <h1 className="mt-4 text-balance text-[3rem] font-extrabold leading-[0.98] tracking-[-0.065em] text-stone-950 sm:text-6xl">Sell faster without making checkout complicated.</h1>
      <p className="mt-6 max-w-[510px] text-pretty text-lg leading-7 text-stone-600 sm:text-xl sm:leading-8">Search or scan products, build the cart, take payment, and issue receipts from one clear selling screen.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href={publicCtaDestinations.getStarted} size="lg">Get Started <ArrowRightIcon className="h-4 w-4" /></Button><Button href="#checkout" variant="secondary" size="lg">See How Checkout Works</Button></div>
    </div>
  );
}

export function PosHeroPreview() {
  return (
    <>
      <div className="sm:hidden">
        <PosPreviewFrame title="Selling Screen">
          <PreviewHeader area="POS" title="Selling screen" action="Online" />
          <div className="mt-4 grid grid-cols-[1.08fr_0.92fr] gap-3">
            <div className="min-w-0"><div className="rounded-lg border border-stone-200 bg-white px-2.5 py-2 text-[10px] text-stone-500">Search or scan</div><div className="mt-2 flex gap-1.5"><span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-800">Coffee</span><span className="rounded-full bg-stone-100 px-2 py-1 text-[9px] font-bold text-stone-600">Food</span></div><div className="mt-3 space-y-2"><div className="rounded-lg border border-stone-200 bg-white p-2.5"><p className="text-[10px] font-bold text-stone-900">Latte</p><p className="mt-1 text-[10px] font-extrabold text-stone-950">₱120</p></div><div className="rounded-lg border border-stone-200 bg-white p-2.5"><p className="text-[10px] font-bold text-stone-900">Sandwich</p><p className="mt-1 text-[10px] font-extrabold text-stone-950">₱150</p></div></div></div>
            <div className="rounded-xl border border-stone-200 bg-white p-3"><p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Current cart</p><p className="mt-3 text-[10px] font-bold text-stone-900">Latte × 2</p><p className="mt-1 text-[10px] font-bold text-stone-900">Sandwich</p><div className="mt-5 border-t border-stone-100 pt-3"><div className="flex justify-between text-[10px] font-extrabold text-stone-950"><span>Total</span><span>₱390</span></div><button type="button" className="mt-3 w-full rounded-md bg-emerald-700 px-2 py-2 text-[10px] font-extrabold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">Charge</button></div></div>
          </div>
        </PosPreviewFrame>
      </div>
      <AppFrame
        title="TINDIO POS"
        screenshotSrc="/images/tindio-pos-hero.png"
        screenshotAlt="TINDIO point-of-sale workspace with search, categories, product cards, current cart, totals, Charge action, and online status"
        screenshotWidth={1672}
        screenshotHeight={941}
        priority
        className="hidden w-full sm:block"
      />
    </>
  );
}

export function CheckoutFlowPreview() {
  const steps = [
    ["Open shift", "Register ready"], ["Find item", "Search or scan"], ["Build cart", "Review sale"], ["Payment", "Record method"], ["Receipt", "Complete sale"], ["Stock updated", ""],
  ] as const;
  return (
    <PosPreviewFrame title="Checkout Flow">
      <PreviewHeader area="POS" title="Focused checkout" action="Main Register" />
      <div className="mt-5 rounded-xl border border-stone-200 bg-white p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">Current sale</p><p className="mt-1 text-lg font-extrabold tracking-[-0.04em] text-stone-950">Ticket • 2 items</p></div><span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-800"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Shift open</span></div>
        <ol className="mt-6 grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-2">
          {steps.map(([label, detail], index) => <FlowStep key={label} label={label} detail={detail} number={index + 1} active={index < 4} />)}
        </ol>
        <div className="mt-6 flex flex-wrap gap-2 border-t border-stone-100 pt-4"><span className="rounded-md bg-stone-100 px-2.5 py-1.5 text-[10px] font-bold text-stone-600">Quantity</span><span className="rounded-md bg-stone-100 px-2.5 py-1.5 text-[10px] font-bold text-stone-600">Customer</span><span className="rounded-md bg-stone-100 px-2.5 py-1.5 text-[10px] font-bold text-stone-600">Discount</span><span className="rounded-md bg-stone-100 px-2.5 py-1.5 text-[10px] font-bold text-stone-600">Tax</span><span className="rounded-md bg-stone-100 px-2.5 py-1.5 text-[10px] font-bold text-stone-600">Dining option</span></div>
      </div>
    </PosPreviewFrame>
  );
}

const productCards = [
  { name: "Latte", price: "₱120", category: "Coffee" },
  { name: "Americano", price: "₱90", category: "Coffee" },
  { name: "Sandwich", price: "₱150", category: "Food" },
  { name: "Coca-Cola 500ml", price: "₱65", category: "Drinks" },
] as const;

export function ProductSearchPreview() {
  return (
    <PosPreviewFrame title="Product Search">
      <PreviewHeader area="POS" title="Product discovery" action="Online" />
      <div className="mt-5 rounded-xl border border-stone-200 bg-white p-3.5 sm:p-4">
        <div className="flex items-center gap-3 rounded-lg border border-stone-200 bg-stone-50 px-3 py-2.5 text-xs text-stone-500"><span aria-hidden="true" className="text-base leading-none">⌕</span><span>Search products, SKU, or scan barcode</span><span className="ml-auto hidden rounded bg-emerald-50 px-1.5 py-0.5 text-[9px] font-bold text-emerald-800 sm:inline">Scan</span></div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]"><button type="button" className="shrink-0 rounded-lg bg-emerald-700 px-3 py-2 text-[10px] font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">Catalogue</button><button type="button" className="shrink-0 rounded-lg border border-stone-200 bg-white px-3 py-2 text-[10px] font-bold text-stone-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">Favorites</button><button type="button" className="shrink-0 rounded-lg border border-stone-200 bg-white px-3 py-2 text-[10px] font-bold text-stone-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">Recent</button></div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]"><span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-800">Coffee</span><span className="shrink-0 rounded-full bg-stone-100 px-2.5 py-1.5 text-[10px] font-bold text-stone-600">Food</span><span className="shrink-0 rounded-full bg-stone-100 px-2.5 py-1.5 text-[10px] font-bold text-stone-600">Drinks</span></div>
        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {productCards.map((product) => <button key={product.name} type="button" className="min-w-0 rounded-xl border border-stone-200 bg-white p-3 text-left transition-colors hover:border-emerald-200 hover:bg-emerald-50/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"><span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-50 text-[11px] font-extrabold text-emerald-800">{product.name.charAt(0)}</span><p className="mt-4 truncate text-[11px] font-bold text-stone-900">{product.name}</p><p className="mt-1 text-[9px] text-stone-500">{product.category}</p><p className="mt-2 text-xs font-extrabold text-stone-950">{product.price}</p></button>)}
        </div>
      </div>
    </PosPreviewFrame>
  );
}

export function CartPreview() {
  return (
    <PosPreviewFrame title="Current Cart">
      <PreviewHeader area="POS" title="Current cart" action="2 items" />
      <div className="mt-5 rounded-xl border border-stone-200 bg-white p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-stone-100 pb-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">Customer</p><p className="mt-1 text-sm font-extrabold text-stone-950">Maria Santos</p></div><span className="rounded-lg border border-stone-200 px-2.5 py-1.5 text-[10px] font-bold text-stone-600">Change</span></div>
        <ul className="divide-y divide-stone-100"><li className="flex items-start justify-between gap-3 py-4"><div><p className="text-sm font-bold text-stone-900">Latte</p><p className="mt-1 text-xs text-stone-500">2 × ₱120</p></div><p className="text-sm font-extrabold text-stone-950">₱240</p></li><li className="flex items-start justify-between gap-3 py-4"><div><p className="text-sm font-bold text-stone-900">Sandwich</p><p className="mt-1 text-xs text-stone-500">1 × ₱150</p></div><p className="text-sm font-extrabold text-stone-950">₱150</p></li></ul>
        <div className="grid gap-2 border-t border-stone-100 pt-4 text-xs"><div className="flex justify-between text-stone-500"><span>Subtotal</span><span>₱390</span></div><div className="flex justify-between text-stone-500"><span>Discount · 5%</span><span>−₱20</span></div><div className="flex justify-between text-stone-500"><span>Tax</span><span>Included</span></div><div className="flex justify-between pt-1 text-base font-extrabold text-stone-950"><span>Total</span><span>₱370</span></div></div>
        <div className="mt-4 flex flex-wrap gap-2"><span className="rounded-md bg-stone-100 px-2.5 py-1.5 text-[10px] font-bold text-stone-600">Discount</span><span className="rounded-md bg-stone-100 px-2.5 py-1.5 text-[10px] font-bold text-stone-600">Tax</span><span className="rounded-md bg-stone-100 px-2.5 py-1.5 text-[10px] font-bold text-stone-600">Dine in</span></div>
        <button type="button" className="mt-4 flex w-full items-center justify-between rounded-lg bg-emerald-700 px-4 py-3 text-sm font-extrabold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"><span>Charge</span><span>₱370</span></button>
      </div>
    </PosPreviewFrame>
  );
}

export function PaymentPreview() {
  return (
    <PosPreviewFrame title="Payment Selection">
      <PreviewHeader area="POS" title="Payment selection" action="Sale total" />
      <div className="mt-5 rounded-xl border border-stone-200 bg-white p-4 sm:p-5">
        <div className="text-center"><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">Total</p><p className="mt-1 text-3xl font-extrabold tracking-[-0.06em] text-stone-950">₱370</p><p className="mt-2 text-[10px] text-stone-500">Choose a configured payment method</p></div>
        <div className="mt-5 grid grid-cols-2 gap-3"><button type="button" className="rounded-xl border-2 border-emerald-600 bg-emerald-50 p-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"><span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-700 text-xs font-extrabold text-white">₱</span><p className="mt-3 text-xs font-extrabold text-emerald-950">Cash</p><p className="mt-1 text-[10px] text-emerald-800">Selected</p></button><button type="button" className="rounded-xl border border-stone-200 bg-white p-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"><span className="flex h-7 w-7 items-center justify-center rounded-md bg-stone-100 text-xs font-extrabold text-stone-600">+</span><p className="mt-3 text-xs font-extrabold text-stone-900">Other method</p><p className="mt-1 text-[10px] text-stone-500">Configured by business</p></button></div>
        <div className="mt-5 rounded-lg bg-stone-50 px-3.5 py-3 text-xs"><div className="flex justify-between text-stone-600"><span>Recorded amount</span><span className="font-bold text-stone-900">₱370</span></div></div>
        <button type="button" className="mt-4 w-full rounded-lg bg-emerald-700 px-4 py-3 text-sm font-extrabold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">Complete sale</button>
      </div>
    </PosPreviewFrame>
  );
}

export function ReceiptPreview() {
  return (
    <PosPreviewFrame title="Receipt History">
      <PreviewHeader area="POS" title="Receipts" action="Main Branch" />
      <div className="mt-5 overflow-hidden rounded-xl border border-stone-200 bg-white"><div className="border-b border-stone-100 p-4 sm:p-5"><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-sm font-extrabold tracking-[-0.02em] text-stone-950">MAIN-RC-R01-000428</p><p className="mt-1 text-xs text-stone-500">Maria Santos · Today, 2:41 PM</p></div><span className="text-base font-extrabold text-stone-950">₱370</span></div><div className="mt-4 grid grid-cols-2 gap-2 text-[10px]"><p className="rounded-md bg-stone-50 px-2.5 py-2 text-stone-600">Cash · Main Register</p><p className="rounded-md bg-stone-50 px-2.5 py-2 text-stone-600">Cashier · Alex Reyes</p></div></div><div className="p-4 sm:p-5"><div className="grid gap-2 text-xs"><div className="flex justify-between text-stone-600"><span>Latte × 2</span><span>₱240</span></div><div className="flex justify-between text-stone-600"><span>Sandwich × 1</span><span>₱150</span></div><div className="flex justify-between border-t border-stone-100 pt-2 font-extrabold text-stone-950"><span>Total</span><span>₱370</span></div></div><div className="mt-4 flex items-center justify-between gap-3"><button type="button" className="rounded-lg border border-stone-200 px-3 py-2 text-[10px] font-bold text-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">View receipt</button><span className="text-[10px] font-semibold text-stone-500">Post-sale actions are controlled</span></div></div></div>
    </PosPreviewFrame>
  );
}

export function ShiftPreview() {
  return (
    <PosPreviewFrame title="Register Shift">
      <PreviewHeader area="POS" title="Register shift" action="Main Register" />
      <div className="mt-5 rounded-xl border border-stone-200 bg-white p-4 sm:p-5"><div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">Open shift</p><p className="mt-1 text-sm font-extrabold text-stone-950">Starting cash</p><p className="mt-1 text-xl font-extrabold text-emerald-700">₱2,000</p></div><span className="rounded-full bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-800">Active</span><div className="text-right"><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">Cashier</p><p className="mt-1 text-sm font-extrabold text-stone-950">Alex Reyes</p><p className="mt-1 text-[10px] text-stone-500">Opened 8:02 AM</p></div></div><ol className="mt-5 grid grid-cols-3 gap-3 border-y border-stone-100 py-4"><FlowStep label="Sell" detail="Cash sales" number={1} active /><FlowStep label="Pay in / out" detail="Recorded" number={2} active /><FlowStep label="Close shift" detail="Review cash" number={3} /></ol><div className="mt-5 grid grid-cols-3 gap-2.5 text-center"><div className="rounded-lg bg-stone-50 p-2.5"><p className="text-[8px] font-bold uppercase tracking-[0.08em] text-stone-400">Expected</p><p className="mt-1 text-sm font-extrabold text-stone-950">₱8,450</p></div><div className="rounded-lg bg-stone-50 p-2.5"><p className="text-[8px] font-bold uppercase tracking-[0.08em] text-stone-400">Actual</p><p className="mt-1 text-sm font-extrabold text-stone-950">₱8,420</p></div><div className="rounded-lg bg-rose-50 p-2.5"><p className="text-[8px] font-bold uppercase tracking-[0.08em] text-rose-500">Difference</p><p className="mt-1 text-sm font-extrabold text-rose-700">−₱30</p></div></div></div>
      <p className="mt-3 text-[10px] leading-4 text-stone-500"><span className="font-bold text-stone-800">No active shift = POS locked.</span> Time Clock and register shifts remain separate.</p>
    </PosPreviewFrame>
  );
}

export function PosOfflinePreview() {
  return <SyncStatusPreview />;
}

export function PosAccessPreview() {
  return (
    <PosPreviewFrame title="Register Access">
      <PreviewHeader area="POS" title="Register access" action="Mall Branch" />
      <div className="mt-5 grid gap-3 sm:grid-cols-[1.15fr_0.85fr]"><div className="rounded-xl border border-stone-200 bg-white p-4"><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">Cashier</p><p className="mt-1 text-base font-extrabold tracking-[-0.035em] text-stone-950">Focused register access</p><ul className="mt-4 space-y-2.5 text-xs text-stone-600">{["Sell and take payment", "View permitted receipts", "Open and close assigned shift"].map((item) => <li key={item} className="flex items-center gap-2"><span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-800"><CheckIcon className="h-3 w-3" /></span>{item}</li>)}</ul><p className="mt-4 border-t border-stone-100 pt-3 text-[10px] text-stone-500">Store access and permissions are configured for the role.</p></div><div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4"><p className="text-[9px] font-bold uppercase tracking-[0.1em] text-emerald-800">Sensitive action</p><p className="mt-2 text-sm font-extrabold tracking-[-0.025em] text-emerald-950">Manager approval</p><ul className="mt-3 space-y-2 text-[10px] font-semibold text-emerald-800"><li>Refund</li><li>Large discount</li><li>Void or cash action</li></ul><p className="mt-4 text-[10px] leading-4 text-emerald-800">May be required according to the business&apos;s configuration.</p></div></div>
    </PosPreviewFrame>
  );
}

export function CheckoutCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Checkout</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Keep checkout focused.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Cashiers can complete a normal sale from one clear flow instead of bouncing between unrelated screens.</p></div>;
}

export function SearchCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Product search</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Find products in seconds.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Use product names, SKU, barcode scanning, categories, favorites, and recent items to keep the counter moving.</p></div>;
}

export function CartCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Current cart</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Keep every sale easy to review.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Before charging, the cashier can clearly see the items, customer, sale options, totals, and the next action.</p></div>;
}

export function PaymentCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Payments</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Let customers pay their way.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Configure the payment methods your business accepts and record how each sale was paid from a clear checkout selection.</p><p className="mt-3 text-sm leading-6 text-stone-500">Choose from the payment methods your business has configured.</p></div>;
}

export function ReceiptCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Receipts</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Every completed sale stays easy to find.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Receipt history keeps the sale, payment method, cashier, store, register, and time together for a clear post-sale record.</p><p className="mt-3 text-sm leading-6 text-stone-500">Completed sales stay traceable. Post-sale actions are controlled rather than rewriting the original transaction.</p></div>;
}

export function ShiftCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Register shifts</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Keep every shift accountable.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Start with a register shift, sell with a clear cash position, record pay-ins or pay-outs, and review the close with expected and actual cash.</p><p className="mt-3 text-sm leading-6 text-stone-500">A required register shift is separate from Time Clock, and normal selling stays locked until that shift is open.</p></div>;
}

export function OfflineCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Offline &amp; sync</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Keep selling through connection problems.</h2><p className="mt-5 text-lg leading-7 text-stone-600">TINDIO keeps offline transactions visible and syncs them when the connection returns, so cashiers can see what is pending instead of guessing.</p><p className="mt-3 text-sm leading-6 text-stone-500">Status stays clear from online through offline, syncing, synced, or a sync problem that needs attention.</p></div>;
}

export function AccessCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Register access</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Give cashiers the access they need — and nothing more.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Roles provide permission defaults, while store access and sensitive actions can be configured for the way each business operates.</p><p className="mt-3 text-sm leading-6 text-stone-500">Cashier access does not automatically grant Back Office management.</p></div>;
}
