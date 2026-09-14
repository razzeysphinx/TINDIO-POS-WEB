import { AppFrame } from "@/components/marketing/app-frame";
import { InventoryActivityPreview } from "@/components/marketing/inventory-showcase";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon, InventoryIcon, StoresIcon } from "@/components/ui/icons";
import { publicCtaDestinations, publicRoutes } from "@/lib/public-navigation";

type DetailRowProps = {
  label: string;
  value: string;
  valueClassName?: string;
};

function DetailRow({ label, value, valueClassName = "text-stone-800" }: DetailRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-t border-stone-100 py-2.5 first:border-t-0 first:pt-0">
      <span className="text-xs text-stone-500">{label}</span>
      <span className={`text-right text-xs font-bold ${valueClassName}`}>{value}</span>
    </div>
  );
}

function PreviewHeader({ area, title, action }: { area: string; title: string; action?: string }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3 border-b border-stone-200 pb-4">
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

function InventoryPreviewFrame({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <AppFrame title={`TINDIO Inventory — ${title}`} className="w-full">
      <div className="bg-[#fafbf9] p-4 sm:p-5 lg:p-6">{children}</div>
    </AppFrame>
  );
}

export function InventoryHeroPreview() {
  return <InventoryActivityPreview activityId={undefined} />;
}

export function InventoryJourneyPreview() {
  const journey = [
    { label: "Received", detail: "PO received", state: "complete" },
    { label: "Stored", detail: "Main Branch", state: "complete" },
    { label: "Sold", detail: "Receipt", state: "complete" },
    { label: "Transferred", detail: "Mall Branch", state: "active" },
    { label: "Adjusted", detail: "Damage", state: "neutral" },
    { label: "Counted", detail: "Stock count", state: "neutral" },
    { label: "Returned", detail: "Customer return", state: "neutral" },
  ] as const;

  return (
    <InventoryPreviewFrame title="Item Journey">
      <PreviewHeader area="Inventory" title="Item journey" action="COCA-COLA 500ML" />
      <div className="mt-5 rounded-xl border border-stone-200 bg-white p-4 sm:p-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">Current stock</p>
            <p className="mt-1 text-2xl font-extrabold tracking-[-0.055em] text-stone-950">41 <span className="text-sm font-semibold text-stone-500">units</span></p>
          </div>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-800">All movements</span>
        </div>
        <ol className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7 lg:gap-2">
          {journey.map((item, index) => (
            <li key={item.label} className="relative min-w-0 lg:pr-2">
              {index < journey.length - 1 ? <span aria-hidden="true" className="absolute left-[calc(50%+16px)] top-3 hidden h-px w-[calc(100%-22px)] bg-stone-200 lg:block" /> : null}
              <span className={`relative flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-extrabold ${item.state === "complete" ? "bg-emerald-700 text-white" : item.state === "active" ? "border border-emerald-300 bg-emerald-50 text-emerald-800" : "bg-stone-100 text-stone-500"}`}>
                {item.state === "complete" ? <CheckIcon className="h-3.5 w-3.5" /> : index + 1}
              </span>
              <p className="mt-2 text-[11px] font-bold text-stone-900">{item.label}</p>
              <p className="mt-0.5 text-[10px] leading-4 text-stone-500">{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </InventoryPreviewFrame>
  );
}

const activityRows = [
  { type: "Received", amount: "+24", place: "Main Branch", source: "PO MAIN-PO-000118", tone: "positive", time: "09:42" },
  { type: "Sold", amount: "-2", place: "Main Branch", source: "Receipt MAIN-R01-000428", tone: "neutral", time: "11:08" },
  { type: "Transferred out", amount: "-10", place: "Main → Mall", source: "Transfer MAIN-ST-000042", tone: "neutral", time: "13:25" },
  { type: "Damaged", amount: "-1", place: "Main Branch", source: "Juan Dela Cruz", tone: "attention", time: "15:16" },
] as const;

export function InventoryActivityDetailPreview() {
  return (
    <InventoryPreviewFrame title="Recent Inventory Activity">
      <PreviewHeader area="Inventory" title="Recent inventory activity" action="Today" />
      <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">COCA-COLA 500ML</p>
          <p className="mt-1 text-xl font-extrabold tracking-[-0.045em] text-stone-950">Current stock: 41</p>
        </div>
        <button type="button" className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-[10px] font-bold text-stone-600">Main Branch <span className="ml-1 text-emerald-700">⌄</span></button>
      </div>
      <ol className="mt-5 divide-y divide-stone-100 rounded-xl border border-stone-200 bg-white">
        {activityRows.map((item) => (
          <li key={item.type} className="grid grid-cols-[20px_minmax(0,1fr)_auto] gap-x-2.5 px-3.5 py-3.5 sm:grid-cols-[28px_minmax(0,1fr)_auto] sm:gap-x-3 sm:px-4">
            <span className={`mt-0.5 h-2.5 w-2.5 rounded-full ${item.tone === "positive" ? "bg-emerald-500" : item.tone === "attention" ? "bg-amber-400" : "bg-stone-300"}`} />
            <div className="min-w-0">
              <p className="text-xs font-bold text-stone-900">{item.type}</p>
              <p className="mt-0.5 truncate text-[11px] text-stone-600">{item.place} <span className="text-stone-300">•</span> {item.source}</p>
            </div>
            <div className="text-right">
              <p className={`text-xs font-extrabold ${item.tone === "positive" ? "text-emerald-700" : "text-stone-800"}`}>{item.amount}</p>
              <p className="mt-0.5 text-[10px] text-stone-400">{item.time}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-3 flex items-center justify-between text-[10px] font-semibold text-stone-500"><span>Showing today&apos;s movements</span><span className="text-emerald-800">View full history →</span></div>
    </InventoryPreviewFrame>
  );
}

const attentionItems = [
  { count: "17", label: "Low stock", tone: "emerald" },
  { count: "4", label: "Out of stock", tone: "amber" },
  { count: "2", label: "Negative stock", tone: "rose" },
  { count: "6", label: "Awaiting receiving", tone: "stone" },
  { count: "3", label: "Pending transfers", tone: "stone" },
  { count: "2", label: "Count variances", tone: "amber" },
] as const;

export function NeedsAttentionPreview() {
  return (
    <InventoryPreviewFrame title="Needs Attention">
      <PreviewHeader area="Inventory" title="Needs attention" action="All stores" />
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {attentionItems.map((item) => (
          <button key={item.label} type="button" className="rounded-xl border border-stone-200 bg-white p-3.5 text-left transition-colors hover:border-emerald-200 hover:bg-emerald-50/30 sm:p-4">
            <span className={`inline-flex h-7 min-w-7 items-center justify-center rounded-full px-1.5 text-xs font-extrabold ${item.tone === "emerald" ? "bg-emerald-100 text-emerald-800" : item.tone === "amber" ? "bg-amber-50 text-amber-800" : item.tone === "rose" ? "bg-rose-50 text-rose-700" : "bg-stone-100 text-stone-700"}`}>{item.count}</span>
            <p className="mt-4 text-xs font-bold tracking-[-0.015em] text-stone-900">{item.label}</p>
            <p className="mt-1 text-[10px] text-stone-500">Review items →</p>
          </button>
        ))}
      </div>
      <p className="mt-4 text-[10px] leading-4 text-stone-500">Choose a category to focus the inventory work that needs review.</p>
    </InventoryPreviewFrame>
  );
}

const branchRows = [
  { name: "Main Branch", stock: "50", status: "Healthy", tone: "emerald" },
  { name: "Mall Branch", stock: "40", status: "Healthy", tone: "emerald" },
  { name: "Airport Branch", stock: "30", status: "Low stock", tone: "amber" },
] as const;

export function StoreStockPreview() {
  return (
    <InventoryPreviewFrame title="Store Stock">
      <PreviewHeader area="Inventory" title="Stock by store" action="All stores ⌄" />
      <div className="mt-5 rounded-xl border border-stone-200 bg-white p-4 sm:p-5">
        <div className="flex items-end justify-between gap-4 border-b border-stone-100 pb-4">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">COCA-COLA 500ML</p><p className="mt-1 text-2xl font-extrabold tracking-[-0.05em] text-stone-950">120 <span className="text-sm font-semibold text-stone-500">total units</span></p></div>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-800">All stores</span>
        </div>
        <div className="mt-3 divide-y divide-stone-100">
          {branchRows.map((branch) => (
            <div key={branch.name} className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 py-3.5">
              <span className="text-xs font-bold text-stone-900">{branch.name}</span>
              <span className="text-sm font-extrabold text-stone-900">{branch.stock}</span>
              <span className={`rounded-full px-2 py-1 text-[9px] font-bold ${branch.tone === "emerald" ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>{branch.status}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-3 text-[10px] font-semibold text-emerald-800">Select a branch to see its detailed stock view →</p>
    </InventoryPreviewFrame>
  );
}

export function TransferPreview() {
  const stages = ["Requested", "Approved", "In transit", "Received"];
  return (
    <InventoryPreviewFrame title="Stock Transfer">
      <PreviewHeader area="Inventory" title="Stock transfer" action="Transfer MAIN-ST-000042" />
      <div className="mt-5 rounded-xl border border-stone-200 bg-white p-4 sm:p-5">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">From</p><p className="mt-1 text-sm font-extrabold text-stone-950">Main Branch</p><p className="mt-1 text-xs text-stone-500">50 on hand</p></div>
          <div className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs font-extrabold text-emerald-800">20 <span className="mx-1 text-emerald-500">→</span></div>
          <div className="text-right"><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">To</p><p className="mt-1 text-sm font-extrabold text-stone-950">Mall Branch</p><p className="mt-1 text-xs text-stone-500">3 on hand</p></div>
        </div>
        <ol className="mt-6 grid grid-cols-4 gap-2 border-t border-stone-100 pt-4">
          {stages.map((stage, index) => (
            <li key={stage}><span className={`flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold ${index < 3 ? "bg-emerald-700 text-white" : "border border-stone-200 bg-white text-stone-500"}`}>{index < 3 ? <CheckIcon className="h-3 w-3" /> : 4}</span><p className="mt-2 text-[10px] font-bold text-stone-800">{stage}</p></li>
          ))}
        </ol>
      </div>
      <p className="mt-3 text-[10px] text-stone-500">The receiving store confirms the transfer before its stock changes.</p>
    </InventoryPreviewFrame>
  );
}

export function StockCountPreview() {
  return (
    <InventoryPreviewFrame title="Stock Count">
      <PreviewHeader area="Inventory" title="Stock count review" action="Main Branch" />
      <div className="mt-5 rounded-xl border border-stone-200 bg-white p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-stone-100 pb-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">COCA-COLA 500ML</p><p className="mt-1 text-sm font-extrabold text-stone-950">Count #MAIN-SC-000024</p></div><span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-amber-800">Variance to review</span></div>
        <div className="mt-5 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-lg bg-stone-50 p-3"><p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Expected</p><p className="mt-1 text-lg font-extrabold text-stone-950">42</p></div>
          <div className="rounded-lg bg-stone-50 p-3"><p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Counted</p><p className="mt-1 text-lg font-extrabold text-stone-950">39</p></div>
          <div className="rounded-lg bg-rose-50 p-3"><p className="text-[9px] font-bold uppercase tracking-[0.08em] text-rose-500">Difference</p><p className="mt-1 text-lg font-extrabold text-rose-700">−3</p></div>
        </div>
        <ol className="mt-5 flex items-center justify-between gap-2 border-t border-stone-100 pt-4">
          {["Review variance", "Approve", "Post adjustment"].map((stage, index) => <li key={stage} className="flex min-w-0 items-center gap-2 text-[10px] font-bold text-stone-600"><span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${index === 0 ? "bg-emerald-700 text-white" : "bg-stone-100 text-stone-500"}`}>{index + 1}</span><span className="hidden sm:inline">{stage}</span></li>)}
        </ol>
      </div>
      <p className="mt-3 text-[10px] text-stone-500">A count variance is reviewed before an adjustment is posted to history.</p>
    </InventoryPreviewFrame>
  );
}

export function ReceivingPreview() {
  return (
    <InventoryPreviewFrame title="Purchase Order Receiving">
      <PreviewHeader area="Inventory" title="Purchase order receiving" action="PO MAIN-PO-000118" />
      <div className="mt-5 rounded-xl border border-stone-200 bg-white p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-stone-100 pb-4"><div><p className="text-sm font-extrabold text-stone-950">COCA-COLA 500ML</p><p className="mt-1 text-[10px] text-stone-500">Supplier: TINDIO Demo Supplier</p></div><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-800">Partially received</span></div>
        <div className="mt-5 grid grid-cols-3 gap-3 text-center"><div><p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Ordered</p><p className="mt-1 text-xl font-extrabold text-stone-950">100</p></div><div><p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Received</p><p className="mt-1 text-xl font-extrabold text-emerald-700">80</p></div><div><p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Remaining</p><p className="mt-1 text-xl font-extrabold text-stone-800">20</p></div></div>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-stone-100"><span className="block h-full w-4/5 rounded-full bg-emerald-600" /></div>
        <div className="mt-5 grid gap-1.5 sm:grid-cols-2 sm:gap-x-5"><DetailRow label="Received to" value="Main Branch" /><DetailRow label="Received by" value="Alex Reyes" /><DetailRow label="Received at" value="Today, 09:42" /><DetailRow label="Reference" value="GRN MAIN-GRN-000062" /></div>
      </div>
    </InventoryPreviewFrame>
  );
}

export function InventoryHeroCopy() {
  return (
    <div className="max-w-[560px]">
      <p className="eyebrow">Inventory</p>
      <h1 className="mt-4 text-balance text-[3rem] font-extrabold leading-[0.98] tracking-[-0.065em] text-stone-950 sm:text-6xl">Stop wondering where your stock went.</h1>
      <p className="mt-6 max-w-[510px] text-pretty text-lg leading-7 text-stone-600 sm:text-xl sm:leading-8">TINDIO connects every inventory change to the sale, transfer, receiving, count, or adjustment that caused it.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href={publicCtaDestinations.getStarted} size="lg">Get Started <ArrowRightIcon className="h-4 w-4" /></Button>
        <Button href="#inventory-activity" variant="secondary" size="lg">See Inventory Activity</Button>
      </div>
    </div>
  );
}

export function JourneyCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Movement history</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Follow the journey of every item.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Every movement stays connected to the business action behind it, from the first receiving record to the next sale, count, or return.</p></div>;
}

export function ActivityCopy() {
  return <div className="max-w-[500px]"><p className="eyebrow">Inventory activity</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Every stock change has a story.</h2><p className="mt-5 text-lg leading-7 text-stone-600">See what happened, where it happened, and the reference or person connected to it. The important context is visible first; the full history is there when you need it.</p></div>;
}

export function AttentionCopy() {
  return <div className="max-w-[500px]"><p className="eyebrow">Inventory control</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">See what needs attention before it becomes a problem.</h2><p className="mt-5 text-lg leading-7 text-stone-600">A simple view of the inventory work that deserves a closer look—so the team can act without digging through every item.</p></div>;
}

export function StoreCopy() {
  return <div className="max-w-[500px]"><p className="eyebrow">Multi-store inventory</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Know what every store has.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Start with a consolidated view across your stores, then select a branch for the exact stock position and next action.</p><div className="mt-7 flex items-center gap-3 border-y border-stone-200 py-4 text-xs font-bold uppercase tracking-[0.1em]"><StoresIcon className="h-4 w-4 text-emerald-800" /><span className="text-emerald-800">All stores</span><span className="text-stone-300">→</span><span className="text-stone-600">branch detail</span></div><Button href={publicRoutes.product.multiStore} variant="secondary" size="sm" className="mt-7">Explore Multi-Store <ArrowRightIcon className="h-3.5 w-3.5" /></Button></div>;
}

export function TransferCopy() {
  return <div className="max-w-[500px]"><p className="eyebrow">Stock transfers</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Move stock where it&apos;s needed.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Give stores a clear handoff instead of creating unexplained stock changes. Each transfer follows a visible lifecycle from request through receipt.</p></div>;
}

export function CountCopy() {
  return <div className="max-w-[500px]"><p className="eyebrow">Stock counts</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Count stock without losing the history.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Compare what was expected with what was counted, review the variance, and post an adjustment only when it has been checked.</p></div>;
}

export function ReceivingCopy() {
  return <div className="max-w-[500px]"><p className="eyebrow">Purchasing &amp; receiving</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Track inventory from the moment it arrives.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Keep the purchase order, supplier, receiving store, employee, and quantities together—so new stock enters the business with clear context.</p><div className="mt-7 flex items-center gap-3 border-y border-stone-200 py-4 text-xs font-bold uppercase tracking-[0.1em]"><InventoryIcon className="h-4 w-4 text-emerald-800" /><span className="text-emerald-800">Purchase order</span><span className="text-stone-300">→</span><span className="text-stone-600">received stock</span></div></div>;
}
