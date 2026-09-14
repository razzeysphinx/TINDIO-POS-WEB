import type { ReactNode } from "react";

import { AppFrame } from "@/components/marketing/app-frame";
import { StoreStockPreview } from "@/components/marketing/inventory-page-sections";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon, StoresIcon } from "@/components/ui/icons";
import { publicCtaDestinations } from "@/lib/public-navigation";

type Branch = {
  name: string;
  sales: string;
  transactions: string;
  ticket: string;
  refunds: string;
  status: string;
  tone: "healthy" | "alert";
};

const branches: Branch[] = [
  { name: "Main Branch", sales: "₱320,000", transactions: "420", ticket: "₱762", refunds: "₱2,400", status: "Healthy", tone: "healthy" },
  { name: "Mall Branch", sales: "₱210,000", transactions: "315", ticket: "₱667", refunds: "₱3,100", status: "2 alerts", tone: "alert" },
  { name: "Airport Branch", sales: "₱180,000", transactions: "260", ticket: "₱692", refunds: "₱1,200", status: "1 alert", tone: "alert" },
];

function PreviewHeader({ area, title, action }: { area: string; title: string; action?: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4">
      <div className="flex items-center gap-2.5"><span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-700 text-[10px] font-extrabold text-white">T</span><div><p className="text-[9px] font-bold uppercase tracking-[0.1em] text-stone-400">{area}</p><p className="mt-0.5 text-xs font-bold tracking-[-0.02em] text-stone-900">{title}</p></div></div>
      {action ? <span className="rounded-md border border-stone-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-stone-600">{action}</span> : null}
    </div>
  );
}

function MultiStoreFrame({ children, title }: { children: ReactNode; title: string }) {
  return <AppFrame title={`TINDIO Back Office — ${title}`} className="w-full"><div className="bg-[#fafbf9] p-4 sm:p-5 lg:p-6">{children}</div></AppFrame>;
}

function StatusPill({ branch }: { branch: Branch }) {
  return <span className={`rounded-full px-2 py-1 text-[9px] font-bold ${branch.tone === "healthy" ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>{branch.status}</span>;
}

export function MultiStoreHeroCopy() {
  return <div className="max-w-[560px]"><p className="eyebrow">Multi-Store</p><h1 className="mt-4 text-balance text-[3rem] font-extrabold leading-[0.98] tracking-[-0.065em] text-stone-950 sm:text-6xl">Know which branch is performing best.</h1><p className="mt-6 max-w-[510px] text-pretty text-lg leading-7 text-stone-600 sm:text-xl sm:leading-8">Compare sales, transactions, average ticket, refunds, and operational alerts across every store from one clear view.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href={publicCtaDestinations.getStarted} size="lg">Get Started <ArrowRightIcon className="h-4 w-4" /></Button><Button href="#branch-comparison" variant="secondary" size="lg">Compare Stores</Button></div></div>;
}

export function MultiStoreHeroPreview() {
  return (
    <MultiStoreFrame title="All Stores Performance">
      <PreviewHeader area="Back Office" title="All stores performance" action="This month" />
      <div className="mt-5 rounded-xl border border-stone-200 bg-white"><div className="flex items-center justify-between border-b border-stone-100 px-4 py-3 sm:px-5"><div><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">All stores</p><p className="mt-1 text-sm font-extrabold tracking-[-0.03em] text-stone-950">Compare branch performance</p></div><span className="rounded-lg bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-800">This month</span></div><ul className="divide-y divide-stone-100">{branches.map((branch) => <li key={branch.name} className="px-4 py-4 sm:px-5"><div className="flex items-center justify-between gap-3"><p className="text-xs font-extrabold text-stone-900">{branch.name}</p><StatusPill branch={branch} /></div><dl className="mt-3 grid grid-cols-3 gap-2"><div><dt className="text-[8px] font-bold uppercase tracking-[0.08em] text-stone-400">Net sales</dt><dd className="mt-1 text-xs font-extrabold text-stone-950">{branch.sales}</dd></div><div><dt className="text-[8px] font-bold uppercase tracking-[0.08em] text-stone-400">Transactions</dt><dd className="mt-1 text-xs font-extrabold text-stone-950">{branch.transactions}</dd></div><div><dt className="text-[8px] font-bold uppercase tracking-[0.08em] text-stone-400">Avg ticket</dt><dd className="mt-1 text-xs font-extrabold text-stone-950">{branch.ticket}</dd></div></dl></li>)}</ul></div>
      <div className="mt-3 flex items-center gap-2 border-t border-stone-200 pt-3 text-[10px] text-stone-500"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Each result keeps its store context.</div>
    </MultiStoreFrame>
  );
}

export function BranchComparisonPreview() {
  return (
    <MultiStoreFrame title="Branch Comparison">
      <PreviewHeader area="Back Office" title="Branch comparison" action="This month" />
      <div className="mt-5 flex flex-wrap gap-2"><button type="button" className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-[10px] font-bold text-stone-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">Date: This month ⌄</button><button type="button" className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-[10px] font-bold text-stone-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">Sort: Net sales ⌄</button></div>
      <div className="mt-4 space-y-3 sm:hidden">{branches.map((branch) => <article key={branch.name} className="rounded-xl border border-stone-200 bg-white p-3.5"><div className="flex items-center justify-between gap-3"><h3 className="text-xs font-extrabold text-stone-900">{branch.name}</h3><StatusPill branch={branch} /></div><dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2"><div><dt className="text-[9px] text-stone-400">Net sales</dt><dd className="mt-0.5 text-xs font-bold text-stone-900">{branch.sales}</dd></div><div><dt className="text-[9px] text-stone-400">Transactions</dt><dd className="mt-0.5 text-xs font-bold text-stone-900">{branch.transactions}</dd></div><div><dt className="text-[9px] text-stone-400">Avg ticket</dt><dd className="mt-0.5 text-xs font-bold text-stone-900">{branch.ticket}</dd></div><div><dt className="text-[9px] text-stone-400">Refunds</dt><dd className="mt-0.5 text-xs font-bold text-stone-900">{branch.refunds}</dd></div></dl></article>)}</div>
      <div className="mt-4 hidden overflow-hidden rounded-xl border border-stone-200 bg-white sm:block"><table className="w-full border-collapse text-left"><thead className="bg-stone-50 text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400"><tr><th className="px-4 py-3 sm:px-5">Store</th><th className="px-3 py-3">Net sales</th><th className="px-3 py-3">Transactions</th><th className="px-3 py-3">Avg ticket</th><th className="px-3 py-3">Refunds</th></tr></thead><tbody className="divide-y divide-stone-100">{branches.map((branch) => <tr key={branch.name}><th scope="row" className="px-4 py-3.5 text-xs font-extrabold text-stone-900 sm:px-5">{branch.name}</th><td className="px-3 py-3.5 text-xs font-bold text-stone-800">{branch.sales}</td><td className="px-3 py-3.5 text-xs font-bold text-stone-800">{branch.transactions}</td><td className="px-3 py-3.5 text-xs font-bold text-stone-800">{branch.ticket}</td><td className="px-3 py-3.5 text-xs font-bold text-stone-800">{branch.refunds}</td></tr>)}</tbody></table></div>
    </MultiStoreFrame>
  );
}

export function BranchDrilldownPreview() {
  return (
    <MultiStoreFrame title="Mall Branch Detail">
      <PreviewHeader area="Back Office" title="Store detail" action="Mall Branch ⌄" />
      <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.08em]"><span className="text-emerald-800">All stores</span><span className="text-stone-300">→</span><span className="text-stone-700">Mall Branch</span></div>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4"><div className="rounded-xl border border-stone-200 bg-white p-3"><p className="text-[8px] font-bold uppercase tracking-[0.08em] text-stone-400">Net sales</p><p className="mt-2 text-base font-extrabold tracking-[-0.04em] text-stone-950">₱210,000</p></div><div className="rounded-xl border border-stone-200 bg-white p-3"><p className="text-[8px] font-bold uppercase tracking-[0.08em] text-stone-400">Transactions</p><p className="mt-2 text-base font-extrabold tracking-[-0.04em] text-stone-950">315</p></div><div className="rounded-xl border border-stone-200 bg-white p-3"><p className="text-[8px] font-bold uppercase tracking-[0.08em] text-stone-400">Avg ticket</p><p className="mt-2 text-base font-extrabold tracking-[-0.04em] text-stone-950">₱667</p></div><div className="rounded-xl border border-stone-200 bg-white p-3"><p className="text-[8px] font-bold uppercase tracking-[0.08em] text-stone-400">Refunds</p><p className="mt-2 text-base font-extrabold tracking-[-0.04em] text-stone-950">₱3,100</p></div></div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2"><div className="rounded-xl border border-stone-200 bg-white p-3.5"><p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Top products</p><div className="mt-3 space-y-2 text-xs"><p className="flex justify-between font-bold text-stone-800"><span>Latte</span><span>96 sold</span></p><p className="flex justify-between font-bold text-stone-800"><span>Sandwich</span><span>64 sold</span></p></div></div><div className="rounded-xl border border-stone-200 bg-white p-3.5"><p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Operations to review</p><div className="mt-3 flex flex-wrap gap-2"><span className="rounded-full bg-amber-50 px-2 py-1 text-[9px] font-bold text-amber-800">Low stock</span><span className="rounded-full bg-stone-100 px-2 py-1 text-[9px] font-bold text-stone-600">Open shift</span><span className="rounded-full bg-stone-100 px-2 py-1 text-[9px] font-bold text-stone-600">Payment mix</span></div></div></div>
    </MultiStoreFrame>
  );
}

const receipts = [
  { ref: "MAIN-RC-R01-000428", store: "Main Branch", amount: "₱1,240", method: "Cash", time: "2:41 PM" },
  { ref: "MALL-RC-R02-000119", store: "Mall Branch", amount: "₱860", method: "Recorded method", time: "3:08 PM" },
] as const;

export function StoreRecordsPreview() {
  return (
    <MultiStoreFrame title="Store-Aware Records">
      <PreviewHeader area="Back Office" title="Store-aware records" action="All stores" />
      <div className="mt-5 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]"><div className="rounded-xl border border-stone-200 bg-white"><div className="border-b border-stone-100 px-4 py-3"><p className="text-[10px] font-bold uppercase tracking-[0.09em] text-stone-400">Recent receipts</p></div><ul className="divide-y divide-stone-100">{receipts.map((receipt) => <li key={receipt.ref} className="px-4 py-3.5"><div className="flex items-start justify-between gap-3"><div className="min-w-0"><p className="truncate text-[11px] font-extrabold text-stone-900">{receipt.ref}</p><p className="mt-1 text-[10px] text-stone-500">{receipt.store} · {receipt.method} · {receipt.time}</p></div><p className="shrink-0 text-xs font-extrabold text-stone-950">{receipt.amount}</p></div></li>)}</ul></div><div className="overflow-hidden rounded-xl border border-stone-200 bg-white"><div className="border-b border-stone-100 px-4 py-3"><p className="text-[10px] font-bold uppercase tracking-[0.09em] text-stone-400">Daily report by store</p></div><div className="divide-y divide-stone-100">{[{ store: "Main Branch", sales: "₱48,200", refunds: "₱620" }, { store: "Mall Branch", sales: "₱31,900", refunds: "₱410" }, { store: "Airport Branch", sales: "₱27,600", refunds: "₱180" }].map((report) => <div key={report.store} className="grid grid-cols-[minmax(0,1fr)_auto_auto] gap-3 px-4 py-3"><p className="text-[10px] font-bold text-stone-800">{report.store}</p><p className="text-[10px] font-bold text-stone-900">{report.sales}</p><p className="text-[10px] text-stone-500">{report.refunds} refunds</p></div>)}</div></div></div>
      <p className="mt-3 text-[10px] leading-4 text-stone-500">All Stores keeps the store name alongside each record, rather than mixing branch data together.</p>
    </MultiStoreFrame>
  );
}

export function MultiStoreInventoryPreview() {
  return <StoreStockPreview />;
}

export function OperationsPreview() {
  const registers = [
    { store: "Main Branch", register: "Register 01", state: "Shift open", detail: "Cashier: Maria Santos", status: "Online", tone: "healthy" },
    { store: "Main Branch", register: "Register 02", state: "Shift closed", detail: "Last closed: 5:40 PM", status: "Online", tone: "healthy" },
    { store: "Mall Branch", register: "Register 01", state: "Shift open", detail: "Cashier: Alex Reyes", status: "Sync problem", tone: "alert" },
  ] as const;
  return <MultiStoreFrame title="Branch Operations"><PreviewHeader area="Back Office" title="Branch operations" action="Store status" /><div className="mt-5 divide-y divide-stone-100 overflow-hidden rounded-xl border border-stone-200 bg-white">{registers.map((register) => <div key={`${register.store}-${register.register}`} className="px-4 py-3.5 sm:px-5"><div className="flex items-start justify-between gap-3"><div><p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">{register.store}</p><p className="mt-1 text-xs font-extrabold text-stone-900">{register.register}</p><p className="mt-1 text-[10px] text-stone-500">{register.state} · {register.detail}</p></div><span className={`shrink-0 rounded-full px-2 py-1 text-[9px] font-bold ${register.tone === "healthy" ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>{register.status}</span></div></div>)}</div><p className="mt-3 text-[10px] leading-4 text-stone-500">Operational status stays connected to the branch and register it belongs to.</p></MultiStoreFrame>;
}

export function StoreAccessPreview() {
  const people = [
    { name: "Maria Santos", role: "Manager", stores: "Main Branch · Mall Branch", scope: "Sales, shifts, inventory" },
    { name: "Alex Reyes", role: "Cashier", stores: "Mall Branch only", scope: "POS and permitted receipts" },
    { name: "Jamie Cruz", role: "Inventory", stores: "Main · Mall · Airport", scope: "Inventory operations" },
  ] as const;
  return <MultiStoreFrame title="Employee Store Access"><PreviewHeader area="Back Office" title="Employee store access" action="Permission scope" /><ul className="mt-5 divide-y divide-stone-100 overflow-hidden rounded-xl border border-stone-200 bg-white">{people.map((person) => <li key={person.name} className="px-4 py-3.5 sm:px-5"><div className="flex items-start justify-between gap-3"><div className="min-w-0"><p className="text-xs font-extrabold text-stone-900">{person.name}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-emerald-800">{person.role}</p><p className="mt-1 truncate text-[10px] text-stone-500">{person.stores}</p></div><span className="max-w-[42%] rounded-full bg-stone-100 px-2 py-1 text-right text-[9px] font-bold text-stone-600">{person.scope}</span></div></li>)}</ul><p className="mt-3 flex items-center gap-2 text-[10px] leading-4 text-stone-500"><CheckIcon className="h-3.5 w-3.5 shrink-0 text-emerald-700" /> Store filtering follows the employee&apos;s assigned access.</p></MultiStoreFrame>;
}

export function ComparisonCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Branch comparison</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">See the difference between stores at a glance.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Compare the signals that matter most across branches, then sort or filter when you need a closer view. It is fast comparison, not a dense reporting screen.</p></div>;
}

export function DrilldownCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Store drilldown</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Drill into the store behind the numbers.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Start with All Stores, then select a branch to see its sales, inventory, shifts, payment mix, and operational details without mixing in other locations.</p><div className="mt-7 flex items-center gap-3 border-y border-stone-200 py-4 text-xs font-bold uppercase tracking-[0.1em]"><span className="text-emerald-800">All stores</span><span className="text-stone-300">→</span><span className="text-stone-600">Specific store</span></div></div>;
}

export function RecordsCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Store-aware records</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Keep every receipt and report tied to the right store.</h2><p className="mt-5 text-lg leading-7 text-stone-600">All Stores gives a consolidated view, not a scrambled one. Receipt references and reports retain the branch that created each record.</p></div>;
}

export function InventoryCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Store inventory</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">See stock across every store without losing the branch view.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Review an item&apos;s total stock, then see what each branch holds and where attention may be needed.</p><Button href="/inventory" variant="secondary" size="sm" className="mt-7">Explore Inventory <ArrowRightIcon className="h-3.5 w-3.5" /></Button></div>;
}

export function OperationsCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Branch operations</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">See the operational status of every branch.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Keep shifts, register activity, assigned employees, and connection status visible for the stores you manage.</p></div>;
}

export function AccessCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Store access</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Keep store access clear for every employee.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Employees only see the stores and actions they are allowed to access. A cashier&apos;s assigned branch does not automatically grant access to every location.</p><div className="mt-7 flex items-center gap-3 border-y border-stone-200 py-4 text-xs font-bold uppercase tracking-[0.1em]"><StoresIcon className="h-4 w-4 text-emerald-800" /><span className="text-emerald-800">Role</span><span className="text-stone-300">→</span><span className="text-stone-600">Store scope</span></div></div>;
}
