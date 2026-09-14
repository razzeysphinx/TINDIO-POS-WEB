import type { ReactNode } from "react";

import { AppFrame } from "@/components/marketing/app-frame";
import { ReportsPreview } from "@/components/marketing/reports-showcase";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { publicCtaDestinations } from "@/lib/public-navigation";

function PreviewHeader({ area, title, action }: { area: string; title: string; action?: string }) {
  return <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4"><div className="flex items-center gap-2.5"><span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-700 text-[10px] font-extrabold text-white">T</span><div><p className="text-[9px] font-bold uppercase tracking-[0.1em] text-stone-400">{area}</p><p className="mt-0.5 text-xs font-bold tracking-[-0.02em] text-stone-900">{title}</p></div></div>{action ? <span className="rounded-md border border-stone-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-stone-600">{action}</span> : null}</div>;
}

function ReportsFrame({ children, title }: { children: ReactNode; title: string }) {
  return <AppFrame title={`TINDIO Back Office — ${title}`} className="w-full"><div className="bg-[#fafbf9] p-4 sm:p-5 lg:p-6">{children}</div></AppFrame>;
}

const kpis = [
  { label: "Net sales", value: "₱580,000", tone: "emerald" },
  { label: "Transactions", value: "842", tone: "neutral" },
  { label: "Average ticket", value: "₱689", tone: "neutral" },
  { label: "Refunds", value: "₱7,400", tone: "neutral" },
  { label: "Discounts", value: "₱12,800", tone: "neutral" },
] as const;

export function ReportsHeroCopy() {
  return <div className="max-w-[560px]"><p className="eyebrow">Reports</p><h1 className="mt-4 text-balance text-[3rem] font-extrabold leading-[0.98] tracking-[-0.065em] text-stone-950 sm:text-6xl">See what&apos;s happening across your business.</h1><p className="mt-6 max-w-[510px] text-pretty text-lg leading-7 text-stone-600 sm:text-xl sm:leading-8">Track sales, transactions, refunds, average ticket, and other key performance signals from one clear reporting view.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href={publicCtaDestinations.getStarted} size="lg">Get Started <ArrowRightIcon className="h-4 w-4" /></Button><Button href="#kpi-overview" variant="secondary" size="lg">Explore Reports</Button></div></div>;
}

export function ReportsHeroPreview() {
  return <ReportsPreview />;
}

export function KpiOverviewPreview() {
  return <ReportsFrame title="KPI Overview"><PreviewHeader area="Reports" title="Key performance indicators" action="All stores · This month" /><div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-5 sm:gap-3">{kpis.map((kpi) => <div key={kpi.label} className={`rounded-xl border p-3 sm:p-3.5 ${kpi.tone === "emerald" ? "border-emerald-100 bg-emerald-50" : "border-stone-200 bg-white"}`}><p className={`text-[8px] font-bold uppercase tracking-[0.08em] ${kpi.tone === "emerald" ? "text-emerald-800" : "text-stone-400"}`}>{kpi.label}</p><p className={`mt-2 text-sm font-extrabold tracking-[-0.045em] ${kpi.tone === "emerald" ? "text-emerald-950" : "text-stone-900"}`}>{kpi.value}</p></div>)}</div><p className="mt-4 text-[10px] leading-4 text-stone-500">Start with a concise all-store summary, then open the report detail when a number needs more context.</p></ReportsFrame>;
}

export function SalesTrendPreview() {
  const values = [32, 45, 40, 55, 48, 68, 61, 76, 70, 86, 78, 94];
  return <ReportsFrame title="Sales Trend"><PreviewHeader area="Reports" title="Sales trend" action="All stores · This month" /><div className="mt-5 rounded-xl border border-stone-200 bg-white p-4 sm:p-5"><div className="flex items-end justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.09em] text-stone-400">Net sales</p><p className="mt-1 text-2xl font-extrabold tracking-[-0.055em] text-stone-950">₱580,000</p></div><span className="rounded-lg bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-800">Current period</span></div><div className="mt-6 flex h-32 items-end gap-1.5 sm:h-40 sm:gap-2" role="img" aria-label="Illustrative net sales trend for the current month, with values rising towards the end of the period.">{values.map((height, index) => <span key={index} style={{ height: `${height}%` }} className={`flex-1 rounded-t-sm ${index > 8 ? "bg-emerald-600" : "bg-emerald-100"}`} />)}</div><div className="mt-2 flex justify-between text-[9px] font-medium text-stone-400"><span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span></div></div><p className="mt-3 text-[10px] leading-4 text-stone-500">The visual summarizes the selected period; detailed report views remain available when needed.</p></ReportsFrame>;
}

export function ProductPerformancePreview() {
  const products = [{ name: "Latte", sales: "₱84,200", units: "118 sold" }, { name: "Coca-Cola 500ml", sales: "₱72,400", units: "1,114 sold" }, { name: "Sandwich", sales: "₱64,800", units: "432 sold" }, { name: "Americano", sales: "₱51,300", units: "684 sold" }];
  return <ReportsFrame title="Product Performance"><PreviewHeader area="Reports" title="Product performance" action="All stores" /><div className="mt-5 grid gap-3 sm:grid-cols-[1.2fr_0.8fr]"><div className="rounded-xl border border-stone-200 bg-white p-4"><p className="text-[10px] font-bold uppercase tracking-[0.09em] text-stone-400">Top products</p><ol className="mt-3 divide-y divide-stone-100">{products.map((product, index) => <li key={product.name} className="grid grid-cols-[20px_minmax(0,1fr)_auto] items-center gap-2.5 py-2.5"><span className="text-[10px] font-bold text-stone-400">0{index + 1}</span><div className="min-w-0"><p className="truncate text-xs font-bold text-stone-900">{product.name}</p><p className="mt-0.5 text-[10px] text-stone-500">{product.units}</p></div><p className="text-xs font-extrabold text-stone-950">{product.sales}</p></li>)}</ol></div><div className="rounded-xl border border-stone-200 bg-white p-4"><p className="text-[10px] font-bold uppercase tracking-[0.09em] text-stone-400">By category</p><div className="mt-4 space-y-3"><div><div className="flex justify-between text-[10px] font-bold text-stone-700"><span>Beverages</span><span>₱208,000</span></div><div className="mt-1.5 h-1.5 rounded-full bg-stone-100"><span className="block h-full w-[36%] rounded-full bg-emerald-500" /></div></div><div><div className="flex justify-between text-[10px] font-bold text-stone-700"><span>Food</span><span>₱148,000</span></div><div className="mt-1.5 h-1.5 rounded-full bg-stone-100"><span className="block h-full w-[26%] rounded-full bg-emerald-300" /></div></div><div><div className="flex justify-between text-[10px] font-bold text-stone-700"><span>Other</span><span>₱224,000</span></div><div className="mt-1.5 h-1.5 rounded-full bg-stone-100"><span className="block h-full w-[39%] rounded-full bg-stone-300" /></div></div></div></div></div></ReportsFrame>;
}

export function StorePerformancePreview() {
  const stores = [{ name: "Main Branch", sales: "₱250,000", transactions: "380" }, { name: "Mall Branch", sales: "₱210,000", transactions: "301" }, { name: "Airport Branch", sales: "₱120,000", transactions: "161" }];
  return <ReportsFrame title="Store Performance"><PreviewHeader area="Reports" title="Store performance" action="All stores" /><div className="mt-5 rounded-xl border border-stone-200 bg-white"><div className="grid grid-cols-[minmax(0,1fr)_auto_auto] gap-3 border-b border-stone-100 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400 sm:px-5"><span>Store</span><span>Net sales</span><span>Transactions</span></div>{stores.map((store) => <div key={store.name} className="grid grid-cols-[minmax(0,1fr)_auto_auto] gap-3 border-b border-stone-100 px-4 py-3.5 last:border-b-0 sm:px-5"><p className="text-xs font-extrabold text-stone-900">{store.name}</p><p className="text-xs font-bold text-stone-900">{store.sales}</p><p className="text-xs font-bold text-stone-700">{store.transactions}</p></div>)}</div><p className="mt-3 text-[10px] leading-4 text-stone-500">Store identity remains visible in the reporting view. For branch operations, open the dedicated Multi-Store workspace.</p></ReportsFrame>;
}

export function EmployeePerformancePreview() {
  const employees = [{ name: "Maria Santos", store: "Main Branch", transactions: "380", sales: "₱250,000" }, { name: "Alex Reyes", store: "Mall Branch", transactions: "301", sales: "₱210,000" }, { name: "Jamie Cruz", store: "Airport Branch", transactions: "161", sales: "₱120,000" }];
  return <ReportsFrame title="Sales by Employee"><PreviewHeader area="Reports" title="Sales by employee" action="All stores · This month" /><div className="mt-5 divide-y divide-stone-100 overflow-hidden rounded-xl border border-stone-200 bg-white">{employees.map((employee) => <div key={employee.name} className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 px-4 py-3.5 sm:px-5"><div className="min-w-0"><p className="truncate text-xs font-extrabold text-stone-900">{employee.name}</p><p className="mt-1 text-[10px] text-stone-500">{employee.store}</p></div><div className="text-right"><p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Transactions</p><p className="mt-1 text-xs font-bold text-stone-800">{employee.transactions}</p></div><div className="text-right"><p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Net sales</p><p className="mt-1 text-xs font-extrabold text-stone-950">{employee.sales}</p></div></div>)}</div><p className="mt-3 text-[10px] leading-4 text-stone-500">Employee activity is shown with its store context; reporting access follows the permissions available in TINDIO.</p></ReportsFrame>;
}

export function PaymentReportingPreview() {
  return <ReportsFrame title="Payment Method Reporting"><PreviewHeader area="Reports" title="Payment methods" action="All stores · This month" /><div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4"><p className="text-[10px] font-bold uppercase tracking-[0.09em] text-emerald-800">Cash</p><p className="mt-2 text-xl font-extrabold tracking-[-0.05em] text-emerald-950">₱265,000</p><p className="mt-1 text-[10px] text-emerald-800">Recorded payment method</p></div><div className="rounded-xl border border-stone-200 bg-white p-4"><p className="text-[10px] font-bold uppercase tracking-[0.09em] text-stone-400">Other method</p><p className="mt-2 text-xl font-extrabold tracking-[-0.05em] text-stone-950">₱315,000</p><p className="mt-1 text-[10px] text-stone-500">Configured by business</p></div></div><p className="mt-4 text-[10px] leading-4 text-stone-500">Reports show the payment method recorded for each sale. Methods remain configurable by the business.</p></ReportsFrame>;
}

export function ExceptionsPreview() {
  return <ReportsFrame title="Sales Exceptions"><PreviewHeader area="Reports" title="Refunds, discounts & exceptions" action="All stores · This month" /><div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4"><div className="rounded-xl border border-stone-200 bg-white p-3.5"><p className="text-[8px] font-bold uppercase tracking-[0.08em] text-stone-400">Refunds</p><p className="mt-2 text-base font-extrabold text-stone-950">₱7,400</p></div><div className="rounded-xl border border-stone-200 bg-white p-3.5"><p className="text-[8px] font-bold uppercase tracking-[0.08em] text-stone-400">Discounts</p><p className="mt-2 text-base font-extrabold text-stone-950">₱12,800</p></div><div className="rounded-xl border border-stone-200 bg-white p-3.5"><p className="text-[8px] font-bold uppercase tracking-[0.08em] text-stone-400">Controlled actions</p><p className="mt-2 text-base font-extrabold text-stone-950">4</p></div><div className="rounded-xl border border-amber-100 bg-amber-50 p-3.5"><p className="text-[8px] font-bold uppercase tracking-[0.08em] text-amber-700">Shift differences</p><p className="mt-2 text-base font-extrabold text-amber-900">2</p></div></div><div className="mt-4 rounded-xl border border-stone-200 bg-white p-3.5 text-xs text-stone-600"><span className="font-bold text-stone-900">Selected context:</span> All Stores · This month · Store and register retained</div><p className="mt-3 text-[10px] leading-4 text-stone-500">Completed financial history remains controlled; reports help surface sales adjustments for review.</p></ReportsFrame>;
}

export function ReportLibraryPreview() {
  const reports = ["Sales Summary", "Sales by Product", "Sales by Category", "Sales by Employee", "Sales by Payment", "Shift Reports"];
  return <ReportsFrame title="Report Library"><PreviewHeader area="Reports" title="Report library" action="Summary first" /><ol className="mt-5 grid grid-cols-3 gap-2.5 border-y border-stone-200 py-4"><li><span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-700 text-[9px] font-extrabold text-white">1</span><p className="mt-2 text-[10px] font-bold text-stone-800">Summary</p></li><li><span className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-100 text-[9px] font-extrabold text-stone-600">2</span><p className="mt-2 text-[10px] font-bold text-stone-800">Choose report</p></li><li><span className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-100 text-[9px] font-extrabold text-stone-600">3</span><p className="mt-2 text-[10px] font-bold text-stone-800">Open detail</p></li></ol><div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">{reports.map((report) => <button key={report} type="button" className="rounded-xl border border-stone-200 bg-white px-3 py-3 text-left text-[10px] font-bold text-stone-700 transition-colors hover:border-emerald-200 hover:bg-emerald-50/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">{report}<span aria-hidden="true" className="ml-1 text-emerald-700">→</span></button>)}</div></ReportsFrame>;
}

export function FiltersPreview() {
  return <ReportsFrame title="Report Filters"><PreviewHeader area="Reports" title="Reporting toolbar" action="Store-aware" /><div className="mt-5 rounded-xl border border-stone-200 bg-white p-4"><div className="grid gap-3 sm:grid-cols-3"><label className="block"><span className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Date</span><span className="mt-1.5 flex rounded-lg border border-stone-200 bg-stone-50 px-3 py-2.5 text-xs font-bold text-stone-700">This month <span className="ml-auto text-emerald-700">⌄</span></span></label><label className="block"><span className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Store</span><span className="mt-1.5 flex rounded-lg border border-stone-200 bg-stone-50 px-3 py-2.5 text-xs font-bold text-stone-700">All stores <span className="ml-auto text-emerald-700">⌄</span></span></label><label className="block"><span className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Report</span><span className="mt-1.5 flex rounded-lg border border-stone-200 bg-stone-50 px-3 py-2.5 text-xs font-bold text-stone-700">Sales Summary <span className="ml-auto text-emerald-700">⌄</span></span></label></div><button type="button" className="mt-4 rounded-lg bg-emerald-700 px-4 py-2.5 text-xs font-extrabold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">Apply</button></div><p className="mt-3 text-[10px] leading-4 text-stone-500">All Stores shows consolidated authorized data with the originating store retained; a specific store narrows the report to that branch.</p></ReportsFrame>;
}

export function KpiCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">KPI overview</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Start with the numbers that matter most.</h2><p className="mt-5 text-lg leading-7 text-stone-600">A concise summary helps you understand the business at a glance before opening a detailed report.</p></div>;
}

export function TrendCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Sales trends</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">See how performance changes over time.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Follow a clear sales trend for the selected period, then move to detailed reporting when a change needs explanation.</p></div>;
}

export function ProductCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Product performance</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Know what&apos;s actually selling.</h2><p className="mt-5 text-lg leading-7 text-stone-600">See products, categories, units, and net sales together—without turning a sales report into an inventory workflow.</p><Button href="/inventory" variant="secondary" size="sm" className="mt-7">Explore Inventory <ArrowRightIcon className="h-3.5 w-3.5" /></Button></div>;
}

export function StoreCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Store performance</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Compare performance without losing store context.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Reports answer what the numbers show across stores. Multi-Store gives you the operational detail behind each branch.</p><Button href="/multi-store" variant="secondary" size="sm" className="mt-7">Explore Multi-Store <ArrowRightIcon className="h-3.5 w-3.5" /></Button></div>;
}

export function EmployeeCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Employee performance</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Understand sales activity by employee.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Review sales activity with employee and store context, keeping the reporting view practical and permission-aware.</p></div>;
}

export function PaymentCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Payment methods</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">See how customers are paying.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Track the payment method recorded for transactions, using the methods your business has configured.</p></div>;
}

export function ExceptionsCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Sales adjustments</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">See what reduced the final sale.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Bring refunds, discounts, controlled actions, and shift differences into a clear review context—without rewriting completed financial history.</p></div>;
}

export function LibraryCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Report library</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Open the detail when you need it.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Start with the summary, choose the question you need answered, and open the relevant sales or shift detail.</p></div>;
}

export function FiltersCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Report filters</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Get the exact view you need.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Use date, store, and report selections to focus the information that matters while preserving the store context behind it.</p><div className="mt-7 flex items-center gap-2.5 border-y border-stone-200 py-4 text-xs font-bold uppercase tracking-[0.1em]"><CheckIcon className="h-4 w-4 text-emerald-800" /><span className="text-emerald-800">Overview first</span><span className="text-stone-300">→</span><span className="text-stone-600">detail on demand</span></div></div>;
}
