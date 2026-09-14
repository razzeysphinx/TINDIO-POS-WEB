import type { ReactNode } from "react";

import { AppFrame } from "@/components/marketing/app-frame";
import { LoyaltyPreview, LoyaltyQrMark } from "@/components/marketing/loyalty-showcase";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { publicCtaDestinations } from "@/lib/public-navigation";

function LoyaltyFrame({ children, title }: { children: ReactNode; title: string }) {
  return <AppFrame title={`TINDIO POS — ${title}`} className="w-full"><div className="bg-[#fafbf9] p-4 sm:p-5 lg:p-6">{children}</div></AppFrame>;
}

function PreviewHeader({ area, title, action }: { area: string; title: string; action?: string }) {
  return <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4"><div className="flex items-center gap-2.5"><span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-700 text-[10px] font-extrabold text-white">T</span><div><p className="text-[9px] font-bold uppercase tracking-[0.1em] text-stone-400">{area}</p><p className="mt-0.5 text-xs font-bold tracking-[-0.02em] text-stone-900">{title}</p></div></div>{action ? <span className="rounded-md border border-stone-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-stone-600">{action}</span> : null}</div>;
}

function StampProgress({ value = 8, total = 10, dark = false }: { value?: number; total?: number; dark?: boolean }) {
  return <div role="progressbar" aria-label={`${value} of ${total} loyalty stamps collected`} aria-valuemin={0} aria-valuemax={total} aria-valuenow={value}><div className="grid grid-cols-10 gap-1.5">{Array.from({ length: total }, (_, index) => <span key={index} aria-hidden="true" className={`aspect-square rounded-full ${index < value ? dark ? "bg-white" : "bg-emerald-600" : dark ? "border border-emerald-300 bg-transparent" : "border border-stone-300 bg-white"}`} />)}</div><p className={`mt-2 text-[10px] font-bold ${dark ? "text-emerald-100" : "text-stone-600"}`}>{value} of {total} stamps collected</p></div>;
}

export function LoyaltyHeroCopy() {
  return <div className="max-w-[560px]"><p className="eyebrow">Loyalty</p><h1 className="mt-4 text-balance text-[3rem] font-extrabold leading-[0.98] tracking-[-0.065em] text-stone-950 sm:text-6xl">Simple loyalty customers can actually use.</h1><p className="mt-6 max-w-[520px] text-pretty text-lg leading-7 text-stone-600 sm:text-xl sm:leading-8">Give customers a clear loyalty card, keep their progress connected to purchases, and make rewards easy to understand at the register.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href={publicCtaDestinations.getStarted} size="lg">Get Started <ArrowRightIcon className="h-4 w-4" /></Button><Button href="#loyalty-identity" variant="secondary" size="lg">See How Loyalty Works</Button></div></div>;
}

export function LoyaltyHeroPreview() {
  return <LoyaltyPreview />;
}

export function LoyaltyIdentityPreview() {
  return <LoyaltyFrame title="Loyalty Member"><PreviewHeader area="Loyalty" title="Customer identity" action="Active" /><div className="mt-5 rounded-xl border border-stone-200 bg-white p-4 sm:p-5"><div className="flex items-start justify-between gap-3 border-b border-stone-100 pb-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.09em] text-stone-400">Member</p><p className="mt-1 text-lg font-extrabold tracking-[-0.04em] text-stone-950">Maria Santos</p><p className="mt-1 text-xs text-stone-500">Loyalty Member</p></div><span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-800"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Active</span></div><div className="mt-4 grid gap-4 sm:grid-cols-[1fr_auto]"><div><p className="text-[10px] font-bold uppercase tracking-[0.08em] text-stone-400">Member ID</p><p className="mt-1 text-sm font-extrabold text-stone-950">TND-8X92K</p><p className="mt-5 text-[10px] font-bold uppercase tracking-[0.08em] text-stone-400">Progress</p><p className="mt-1 text-sm font-extrabold text-emerald-800">8 of 10 stamps</p></div><div className="flex items-center justify-center rounded-xl border border-stone-200 bg-[#f7f7f4] p-3.5"><LoyaltyQrMark /></div></div></div><p className="mt-4 text-[10px] leading-4 text-stone-500">Loyalty progress belongs to a known customer record, not an anonymous counter.</p></LoyaltyFrame>;
}

export function LoyaltyProgressPreview() {
  return <LoyaltyFrame title="Reward Progress"><PreviewHeader area="Loyalty" title="Reward progress" action="Maria Santos" /><div className="mt-5 rounded-xl border border-stone-200 bg-white p-4 sm:p-5"><div className="flex items-end justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.09em] text-stone-400">Current progress</p><p className="mt-1 text-3xl font-extrabold tracking-[-0.06em] text-stone-950">8 / 10</p></div><span className="rounded-lg bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-800">2 stamps to go</span></div><div className="mt-6"><StampProgress /></div><div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4 text-xs"><span className="text-stone-600">Reward available at 10 stamps</span><span className="font-bold text-stone-900">Next eligible purchase</span></div></div><p className="mt-4 text-[10px] leading-4 text-stone-500">One simple stamp model keeps the next reward easy to understand.</p></LoyaltyFrame>;
}

export function LoyaltyPosConnectionPreview() {
  const steps = [{ title: "Find customer", detail: "Search or scan card" }, { title: "Add to sale", detail: "Maria Santos selected" }, { title: "Complete purchase", detail: "Normal checkout flow" }, { title: "Loyalty updated", detail: "Eligible stamp added" }];
  return <LoyaltyFrame title="POS Loyalty"><PreviewHeader area="POS" title="Loyalty in checkout" action="Customer selected" /><ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{steps.map((step, index) => <li key={step.title} className="rounded-xl border border-stone-200 bg-white p-3.5"><span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-extrabold ${index < 3 ? "bg-emerald-700 text-white" : "bg-emerald-100 text-emerald-800"}`}>{index + 1}</span><p className="mt-3 text-xs font-extrabold text-stone-900">{step.title}</p><p className="mt-1 text-[10px] leading-4 text-stone-500">{step.detail}</p></li>)}</ol><div className="mt-4 flex items-center justify-between rounded-lg border border-stone-200 bg-white px-3.5 py-3"><div><p className="text-xs font-extrabold text-stone-900">Current sale</p><p className="mt-1 text-[10px] text-stone-500">Maria Santos · Loyalty card verified</p></div><span className="rounded-full bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-800">8 / 10</span></div></LoyaltyFrame>;
}

export function DigitalCardPreview() {
  return <LoyaltyFrame title="Digital Loyalty Card"><PreviewHeader area="Loyalty" title="Digital card" action="Verified" /><div className="mt-5 rounded-2xl bg-emerald-800 p-5 text-white shadow-[0_16px_32px_rgba(4,120,87,0.2)] sm:p-6"><div className="flex items-start justify-between gap-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-200">TINDIO Loyalty</p><p className="mt-3 text-xl font-extrabold tracking-[-0.04em]">Maria Santos</p><p className="mt-1 text-xs text-emerald-100">Card TND-8X92K</p></div><span className="rounded-full border border-emerald-600 bg-emerald-700 px-2.5 py-1.5 text-[10px] font-bold text-emerald-50">Verified</span></div><div className="mt-6 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[0.09em] text-emerald-200">Reward progress</p><p className="mt-1 text-2xl font-extrabold">8 / 10</p><div className="mt-4"><StampProgress dark /></div></div><div className="w-fit rounded-xl bg-white p-3 text-stone-900"><LoyaltyQrMark /></div></div></div><p className="mt-4 text-[10px] leading-4 text-stone-500">The digital card identifies the customer; the TINDIO loyalty record remains the source of current progress.</p></LoyaltyFrame>;
}

export function LoyaltyVerificationPreview() {
  const steps = [{ title: "Scan or identify customer", detail: "Card ID TND-8X92K" }, { title: "Card verified", detail: "Maria Santos matched" }, { title: "Loyalty record opened", detail: "8 of 10 stamps" }];
  return <LoyaltyFrame title="Loyalty Verification"><PreviewHeader area="Loyalty" title="Customer verification" action="At checkout" /><ol className="mt-5 grid gap-3 sm:grid-cols-3">{steps.map((step, index) => <li key={step.title} className="rounded-xl border border-stone-200 bg-white p-4"><span className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-extrabold ${index === 1 ? "bg-emerald-700 text-white" : "bg-stone-100 text-stone-600"}`}>{index + 1}</span><p className="mt-3 text-xs font-extrabold text-stone-900">{step.title}</p><p className="mt-1 text-[10px] leading-4 text-stone-500">{step.detail}</p></li>)}</ol><p className="mt-4 text-[10px] leading-4 text-stone-500">Verification opens the loyalty record associated with the customer before reward activity is applied.</p></LoyaltyFrame>;
}

export function LoyaltyHistoryPreview() {
  const history = [{ date: "Aug 30", action: "Purchase", detail: "+1 stamp · Main Branch", receipt: "MAIN-R01-000428" }, { date: "Aug 25", action: "Purchase", detail: "+1 stamp · Mall Branch", receipt: "MALL-R01-000284" }, { date: "Aug 20", action: "Reward redeemed", detail: "Reward activity recorded", receipt: "Main Branch" }];
  return <LoyaltyFrame title="Loyalty History"><PreviewHeader area="Loyalty" title="Progress history" action="Maria Santos" /><ul className="mt-5 divide-y divide-stone-100 overflow-hidden rounded-xl border border-stone-200 bg-white">{history.map((event, index) => <li key={`${event.date}-${event.action}`} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 px-4 py-4 sm:px-5"><time className="rounded-md bg-stone-100 px-2 py-1 text-[9px] font-bold text-stone-600">{event.date}</time><div className="min-w-0"><p className="text-xs font-extrabold text-stone-900">{event.action}</p><p className="mt-1 text-[10px] leading-4 text-stone-500">{event.detail}</p></div><span className={`text-right text-[10px] font-bold ${index < 2 ? "text-emerald-800" : "text-stone-600"}`}>{event.receipt}</span></li>)}</ul><p className="mt-4 text-[10px] leading-4 text-stone-500">History keeps purchase and reward context visible without rewriting completed sale records.</p></LoyaltyFrame>;
}

export function MultiStoreLoyaltyPreview() {
  const activity = [{ store: "Main Branch", detail: "Purchase · +1 stamp", date: "Aug 30" }, { store: "Mall Branch", detail: "Purchase · +1 stamp", date: "Aug 25" }];
  return <LoyaltyFrame title="Loyalty by Store"><PreviewHeader area="Loyalty" title="Customer activity by store" action="Store context" /><div className="mt-5 rounded-xl border border-stone-200 bg-white p-4 sm:p-5"><div className="flex items-end justify-between gap-3 border-b border-stone-100 pb-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.08em] text-stone-400">Customer</p><p className="mt-1 text-base font-extrabold text-stone-950">Maria Santos</p></div><div className="text-right"><p className="text-[10px] font-bold uppercase tracking-[0.08em] text-stone-400">Record detail</p><p className="mt-1 text-sm font-extrabold text-emerald-800">Store identified</p></div></div><ul className="divide-y divide-stone-100">{activity.map((event) => <li key={event.store} className="flex items-center justify-between gap-3 py-3.5"><div><p className="text-xs font-extrabold text-stone-900">{event.store}</p><p className="mt-1 text-[10px] text-stone-500">{event.detail}</p></div><time className="text-[10px] font-bold text-stone-400">{event.date}</time></li>)}</ul></div><p className="mt-4 text-[10px] leading-4 text-stone-500">Each loyalty activity keeps the branch that recorded it visible.</p></LoyaltyFrame>;
}

export function LoyaltyIdentityCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Customer loyalty identity</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Give every member one clear loyalty identity.</h2><p className="mt-5 text-lg leading-7 text-stone-600">A loyalty card and customer record keep progress connected to the person who earned it.</p></div>;
}

export function LoyaltyProgressCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Progress</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Make the next reward easy to understand.</h2><p className="mt-5 text-lg leading-7 text-stone-600">A clear stamp count shows customers how close they are to the next reward through one familiar model.</p></div>;
}

export function LoyaltyPosConnectionCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">POS connection</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Keep loyalty inside the selling flow.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Identify the customer in the sale, complete normal checkout, and keep eligible loyalty progress connected to the purchase.</p></div>;
}

export function DigitalCardCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Digital loyalty card</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Give customers a card they can carry on their phone.</h2><p className="mt-5 text-lg leading-7 text-stone-600">A digital card makes the customer, card identity, progress, and verification state easy to present at the register.</p></div>;
}

export function LoyaltyVerificationCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Verification</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Keep rewards tied to the right customer.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Scan or identify the customer, verify the card, and open the loyalty record before applying reward activity.</p></div>;
}

export function LoyaltyHistoryCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Loyalty history</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">See how progress was earned and used.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Review purchases and reward activity with the date, store, and business reference that provide the right context.</p></div>;
}

export function MultiStoreLoyaltyCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Multi-store loyalty</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Keep customer activity clear across your business.</h2><p className="mt-5 text-lg leading-7 text-stone-600">When you review a customer’s loyalty activity, the branch that recorded each entry remains visible.</p><Button href="/multi-store" variant="secondary" size="sm" className="mt-7">Explore Multi-Store <ArrowRightIcon className="h-3.5 w-3.5" /></Button><div className="mt-7 flex items-center gap-2.5 border-y border-stone-200 py-4 text-xs font-bold uppercase tracking-[0.1em]"><CheckIcon className="h-4 w-4 text-emerald-800" /><span className="text-emerald-800">Customer</span><span className="text-stone-300">→</span><span className="text-stone-600">purchase</span><span className="text-stone-300">→</span><span className="text-stone-600">store context</span></div></div>;
}
