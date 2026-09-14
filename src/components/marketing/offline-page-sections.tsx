import type { ReactNode } from "react";

import { SyncStatusPreview } from "@/components/marketing/offline-showcase";
import { AppFrame } from "@/components/marketing/app-frame";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { publicCtaDestinations } from "@/lib/public-navigation";

type SyncState = "Online" | "Offline" | "Syncing" | "Synced" | "Sync problem";

function SyncFrame({ children, title }: { children: ReactNode; title: string }) {
  return <AppFrame title={`TINDIO POS — ${title}`} className="w-full"><div className="bg-[#fafbf9] p-4 sm:p-5 lg:p-6">{children}</div></AppFrame>;
}

function PreviewHeader({ area, title, action }: { area: string; title: string; action?: string }) {
  return <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4"><div className="flex items-center gap-2.5"><span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-700 text-[10px] font-extrabold text-white">T</span><div><p className="text-[9px] font-bold uppercase tracking-[0.1em] text-stone-400">{area}</p><p className="mt-0.5 text-xs font-bold tracking-[-0.02em] text-stone-900">{title}</p></div></div>{action ? <span className="rounded-md border border-stone-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-stone-600">{action}</span> : null}</div>;
}

function SyncBadge({ state }: { state: SyncState }) {
  const tone = state === "Online" || state === "Synced" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : state === "Offline" ? "border-stone-300 bg-stone-100 text-stone-700" : state === "Syncing" ? "border-sky-200 bg-sky-50 text-sky-800" : "border-amber-200 bg-amber-50 text-amber-800";
  return <span className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-[9px] font-extrabold ${tone}`}><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />{state}</span>;
}

const queue = [
  { reference: "MAIN-R01-000428", time: "10:14 AM", state: "Saved locally" },
  { reference: "MAIN-R01-000429", time: "10:17 AM", state: "Saved locally" },
  { reference: "MAIN-R01-000430", time: "10:21 AM", state: "Saved locally" },
] as const;

export function OfflineHeroCopy() {
  return <div className="max-w-[560px]"><p className="eyebrow">Offline POS</p><h1 className="mt-4 text-balance text-[3rem] font-extrabold leading-[0.98] tracking-[-0.065em] text-stone-950 sm:text-6xl">Keep selling when the connection doesn&apos;t cooperate.</h1><p className="mt-6 max-w-[520px] text-pretty text-lg leading-7 text-stone-600 sm:text-xl sm:leading-8">TINDIO keeps offline transactions visible and ready to sync when the connection returns, so your team can see what is pending instead of guessing.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href={publicCtaDestinations.getStarted} size="lg">Get Started <ArrowRightIcon className="h-4 w-4" /></Button><Button href="#offline-transaction" variant="secondary" size="lg">See How Offline Works</Button></div></div>;
}

export function OfflineHeroPreview() {
  return <SyncFrame title="Sync Status"><PreviewHeader area="POS" title="Sync status" action="Offline" /><div className="mt-5 rounded-xl border border-stone-200 bg-white"><div className="flex flex-wrap items-start justify-between gap-3 border-b border-stone-100 p-4 sm:p-5"><div><p className="text-sm font-extrabold text-stone-950">3 transactions saved locally</p><p className="mt-1 text-xs text-stone-500">Main Branch · Register 01</p></div><SyncBadge state="Offline" /></div><ul className="divide-y divide-stone-100">{queue.map((sale) => <li key={sale.reference} className="flex items-center justify-between gap-3 px-4 py-3.5 sm:px-5"><div className="min-w-0"><p className="truncate text-xs font-extrabold text-stone-900">{sale.reference}</p><p className="mt-1 text-[10px] text-stone-500">{sale.time} · {sale.state}</p></div><span className="shrink-0 rounded-full bg-stone-100 px-2 py-1 text-[9px] font-bold text-stone-700">Pending</span></li>)}</ul></div><div className="mt-4 flex items-center gap-3 rounded-lg border border-stone-200 bg-white px-3.5 py-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-100 text-[10px] font-extrabold text-stone-600">3</span><p className="text-xs font-bold text-stone-700">Transactions remain visible in the offline queue.</p></div></SyncFrame>;
}

export function OfflineTransactionPreview() {
  return <SyncFrame title="Offline Transaction"><PreviewHeader area="POS" title="Sale status" action="Offline" /><div className="mt-5 rounded-xl border border-stone-200 bg-white p-4 sm:p-5"><div className="flex items-start justify-between gap-3 border-b border-stone-100 pb-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.09em] text-stone-400">Sale</p><p className="mt-1 text-base font-extrabold text-stone-950">MAIN-R01-000428</p></div><SyncBadge state="Offline" /></div><dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4"><div><dt className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Total</dt><dd className="mt-1 text-sm font-extrabold text-stone-950">₱370</dd></div><div><dt className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Payment</dt><dd className="mt-1 text-sm font-extrabold text-stone-950">Cash</dd></div><div><dt className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Store</dt><dd className="mt-1 text-sm font-extrabold text-stone-950">Main Branch</dd></div><div><dt className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Register</dt><dd className="mt-1 text-sm font-extrabold text-stone-950">Register 01</dd></div></dl><div className="mt-5 rounded-lg border border-emerald-100 bg-emerald-50 px-3.5 py-3"><p className="text-[10px] font-bold uppercase tracking-[0.08em] text-emerald-800">Status</p><p className="mt-1 text-sm font-extrabold text-emerald-950">Saved locally</p></div></div><p className="mt-4 text-[10px] leading-4 text-stone-500">The sale remains visible after local save instead of disappearing from the cashier&apos;s view.</p></SyncFrame>;
}

export function PendingQueuePreview() {
  return <SyncFrame title="Offline Queue"><PreviewHeader area="POS" title="Offline queue" action="3 pending" /><div className="mt-5 overflow-hidden rounded-xl border border-stone-200 bg-white"><div className="border-b border-stone-100 px-4 py-3.5 sm:px-5"><p className="text-xs font-extrabold text-stone-900">Main Branch · Register 01</p><p className="mt-1 text-[10px] text-stone-500">Transactions saved during offline operation</p></div><ul className="divide-y divide-stone-100">{queue.map((sale) => <li key={sale.reference} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3.5 sm:px-5"><div className="min-w-0"><p className="truncate text-xs font-extrabold text-stone-900">{sale.reference}</p><p className="mt-1 text-[10px] text-stone-500">Register 01 · {sale.time} · Saved locally</p></div><span className="rounded-full bg-stone-100 px-2 py-1 text-[9px] font-bold text-stone-700">Pending</span></li>)}</ul></div><p className="mt-4 text-[10px] leading-4 text-stone-500">Pending transactions stay visible instead of becoming hidden background work.</p></SyncFrame>;
}

export function ConnectionRestoredPreview() {
  return <SyncStatusPreview />;
}

export function SyncStatesPreview() {
  const states: Array<{ state: SyncState; reference: string; detail: string }> = [{ state: "Online", reference: "Connection active", detail: "Ready to send completed activity" }, { state: "Offline", reference: "3 pending", detail: "Transactions are saved locally" }, { state: "Syncing", reference: "MAIN-R01-000429", detail: "Pending transaction moving through sync" }, { state: "Synced", reference: "MAIN-R01-000428", detail: "Transaction synchronized" }, { state: "Sync problem", reference: "MAIN-R01-000430", detail: "Needs attention" }];
  return <SyncFrame title="Sync States"><PreviewHeader area="POS" title="Transaction states" action="Visible status" /><ul className="mt-5 divide-y divide-stone-100 overflow-hidden rounded-xl border border-stone-200 bg-white">{states.map((item) => <li key={item.state} className="flex items-center justify-between gap-3 px-4 py-3.5 sm:px-5"><div className="min-w-0"><p className="text-xs font-extrabold text-stone-900">{item.reference}</p><p className="mt-1 text-[10px] leading-4 text-stone-500">{item.detail}</p></div><SyncBadge state={item.state} /></li>)}</ul><p className="mt-4 text-[10px] leading-4 text-stone-500">Each label communicates the transaction&apos;s current state without relying on color alone.</p></SyncFrame>;
}

export function RecoveryAttentionPreview() {
  return <SyncFrame title="Sync Problem"><PreviewHeader area="POS" title="Sync problem" action="Needs attention" /><div className="mt-5 rounded-xl border border-amber-200 bg-amber-50/70 p-4 sm:p-5"><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.09em] text-amber-800">Transaction</p><p className="mt-1 text-base font-extrabold text-amber-950">MAIN-R01-000430</p></div><SyncBadge state="Sync problem" /></div><dl className="mt-5 grid grid-cols-2 gap-4 border-y border-amber-200/80 py-4 text-xs"><div><dt className="text-[9px] font-bold uppercase tracking-[0.08em] text-amber-700">Store</dt><dd className="mt-1 font-extrabold text-amber-950">Mall Branch</dd></div><div><dt className="text-[9px] font-bold uppercase tracking-[0.08em] text-amber-700">Register</dt><dd className="mt-1 font-extrabold text-amber-950">Register 01</dd></div></dl><p className="mt-4 text-xs font-bold text-amber-950">Status: Needs attention</p><p className="mt-1 text-[10px] leading-4 text-amber-800">Keep the issue visible for review instead of silently treating the transaction as complete.</p></div></SyncFrame>;
}

export function StoreRegisterContextPreview() {
  const context = [{ label: "Organization", value: "TINDIO Demo Store" }, { label: "Store", value: "Main Branch" }, { label: "Register", value: "Register 01" }, { label: "Cashier", value: "Alex Reyes" }, { label: "Shift", value: "MAIN-SH-000042" }, { label: "Status", value: "Pending sync" }];
  return <SyncFrame title="Transaction Context"><PreviewHeader area="POS" title="Transaction context" action="Pending sync" /><div className="mt-5 rounded-xl border border-stone-200 bg-white p-4 sm:p-5"><div className="border-b border-stone-100 pb-4"><p className="text-[10px] font-bold uppercase tracking-[0.09em] text-stone-400">Transaction</p><p className="mt-1 text-base font-extrabold text-stone-950">MAIN-R01-000430</p></div><dl className="mt-4 grid gap-x-5 gap-y-4 sm:grid-cols-2">{context.map((item) => <div key={item.label}><dt className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">{item.label}</dt><dd className="mt-1 text-xs font-extrabold text-stone-900">{item.value}</dd></div>)}</dl></div><p className="mt-4 text-[10px] leading-4 text-stone-500">Offline activity retains the store, register, cashier, shift, and transaction context it belongs to.</p></SyncFrame>;
}

export function OfflineTransactionCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Offline transaction</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Keep the transaction visible even when you&apos;re offline.</h2><p className="mt-5 text-lg leading-7 text-stone-600">A cash sale can remain visible after it is saved locally, so the cashier can see its pending state instead of wondering where it went.</p></div>;
}

export function PendingQueueCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Pending queue</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Always know what still needs to sync.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Pending transactions remain visible with their reference, register, time, and local status rather than becoming hidden background work.</p></div>;
}

export function ConnectionRestoredCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Connection restored</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Pick up where the connection left off.</h2><p className="mt-5 text-lg leading-7 text-stone-600">When connectivity returns, pending transactions can move through synchronization while their status remains visible.</p></div>;
}

export function SyncStatesCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Sync states</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Know where every transaction stands.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Clear labels show whether a sale is online, offline, syncing, synced, or needs attention.</p></div>;
}

export function RecoveryAttentionCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Recovery &amp; attention</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Surface problems instead of hiding them.</h2><p className="mt-5 text-lg leading-7 text-stone-600">When something cannot sync normally, TINDIO keeps the issue visible so it can be reviewed instead of silently treating the transaction as complete.</p></div>;
}

export function StoreRegisterContextCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Store &amp; register context</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Keep every offline sale tied to the right place.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Offline transactions keep their store, register, cashier, and shift context—especially important when you manage more than one location.</p><Button href="/multi-store" variant="secondary" size="sm" className="mt-7">Explore Multi-Store <ArrowRightIcon className="h-3.5 w-3.5" /></Button></div>;
}

export function OfflinePrinciple() {
  return <div className="mt-7 flex items-center gap-2.5 border-y border-stone-200 py-4 text-xs font-bold uppercase tracking-[0.1em]"><CheckIcon className="h-4 w-4 text-emerald-800" /><span className="text-emerald-800">Visible state</span><span className="text-stone-300">→</span><span className="text-stone-600">clear next step</span></div>;
}
