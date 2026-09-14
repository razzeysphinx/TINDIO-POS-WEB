import type { ReactNode } from "react";

import { AppFrame } from "@/components/marketing/app-frame";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { publicCtaDestinations } from "@/lib/public-navigation";

const qrRows = [
  "111000011",
  "101010101",
  "111010111",
  "000101000",
  "111011101",
  "001100101",
  "111010111",
  "101101001",
  "111001111",
];

const menuItems = [
  { name: "Latte", price: "₱120" },
  { name: "Cappuccino", price: "₱130" },
  { name: "Americano", price: "₱90" },
];

function SmartMenuFrame({ children, title }: { children: ReactNode; title: string }) {
  return <AppFrame title={`TINDIO Smart Menu — ${title}`} className="w-full"><div className="bg-[#fafbf9] p-4 sm:p-5 lg:p-6">{children}</div></AppFrame>;
}

function PreviewHeader({ area, title, action }: { area: string; title: string; action?: string }) {
  return <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4"><div className="flex items-center gap-2.5"><span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-700 text-[10px] font-extrabold text-white">T</span><div><p className="text-[9px] font-bold uppercase tracking-[0.1em] text-stone-400">{area}</p><p className="mt-0.5 text-xs font-bold tracking-[-0.02em] text-stone-900">{title}</p></div></div>{action ? <span className="rounded-md border border-stone-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-stone-600">{action}</span> : null}</div>;
}

export function SmartMenuQrMark({ label = "QR-style code for the TINDIO Demo Café menu" }: { label?: string }) {
  return <div className="rounded-lg border border-stone-200 bg-white p-2.5 text-center shadow-sm" role="img" aria-label={label}><div className="grid grid-cols-9 gap-[2px]">{qrRows.flatMap((row, rowIndex) => row.split("").map((cell, columnIndex) => <span key={`${rowIndex}-${columnIndex}`} className={`block aspect-square rounded-[1px] ${cell === "1" ? "bg-stone-900" : "bg-transparent"}`} />))}</div><span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.08em] text-stone-500">Scan menu</span></div>;
}

function CustomerMenu({ compact = false }: { compact?: boolean }) {
  return <div className={`rounded-2xl border border-stone-200 bg-white ${compact ? "p-4" : "p-4 sm:p-5"}`}><div className="flex items-start justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-emerald-800">TINDIO Smart Menu</p><p className="mt-1 text-lg font-extrabold tracking-[-0.045em] text-stone-950">TINDIO Demo Café</p></div><span className="rounded-full bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-800">Customer menu</span></div><div className="mt-5 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]" role="list" aria-label="Menu categories"><span role="listitem" aria-current="page" className="shrink-0 rounded-full bg-emerald-700 px-3 py-1.5 text-[10px] font-bold text-white">Coffee</span><span role="listitem" className="shrink-0 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-[10px] font-bold text-stone-600">Food</span><span role="listitem" className="shrink-0 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-[10px] font-bold text-stone-600">Dessert</span></div><ul className="mt-4 divide-y divide-stone-100 rounded-xl border border-stone-200">{menuItems.map((item, index) => <li key={item.name} className={`flex items-center justify-between gap-3 px-4 py-3.5 ${index === 0 ? "bg-emerald-50/55" : "bg-white"}`}><span className="text-sm font-extrabold tracking-[-0.025em] text-stone-900">{item.name}</span><span className="text-sm font-extrabold tracking-[-0.03em] text-stone-950">{item.price}</span></li>)}</ul></div>;
}

export function SmartMenuHeroCopy() {
  return <div className="max-w-[560px]"><p className="eyebrow">Smart Menu</p><h1 className="mt-4 text-balance text-[3rem] font-extrabold leading-[0.98] tracking-[-0.065em] text-stone-950 sm:text-6xl">Turn your catalog into a customer menu.</h1><p className="mt-6 max-w-[520px] text-pretty text-lg leading-7 text-stone-600 sm:text-xl sm:leading-8">Show customers your products, categories, prices, variants, and available options through a menu connected to TINDIO.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href={publicCtaDestinations.getStarted} size="lg">Get Started <ArrowRightIcon className="h-4 w-4" /></Button><Button href="#catalog-menu" variant="secondary" size="lg">See How Smart Menu Works</Button></div></div>;
}

export function SmartMenuHeroPreview() {
  return <SmartMenuFrame title="Customer Menu"><div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start"><CustomerMenu /><div className="order-first mx-auto w-fit sm:order-none"><SmartMenuQrMark /></div></div><div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-xs font-semibold leading-5 text-emerald-950">A customer-facing menu built from one product catalog.</div></SmartMenuFrame>;
}

export function CatalogPreview() {
  return <SmartMenuFrame title="One Catalog"><PreviewHeader area="Catalog" title="Product information" action="Connected menu" /><div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center"><div className="rounded-xl border border-stone-200 bg-white p-4 sm:p-5"><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">TINDIO Catalog</p><p className="mt-3 text-lg font-extrabold tracking-[-0.04em] text-stone-950">Latte</p><dl className="mt-4 space-y-2 text-xs"><div className="flex items-center justify-between gap-3"><dt className="text-stone-500">Price</dt><dd className="font-extrabold text-stone-900">₱120</dd></div><div className="flex items-center justify-between gap-3"><dt className="text-stone-500">Category</dt><dd className="font-bold text-stone-800">Coffee</dd></div></dl></div><span aria-hidden="true" className="hidden text-center text-2xl text-emerald-700 sm:block">→</span><div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4 sm:p-5"><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-emerald-800">Smart Menu</p><p className="mt-3 text-lg font-extrabold tracking-[-0.04em] text-emerald-950">Latte — ₱120</p><p className="mt-4 text-xs leading-5 text-emerald-900">Customer menu item connected to the catalog information shown.</p></div></div><div className="mt-5 flex flex-wrap items-center gap-2.5 border-y border-stone-200 py-4 text-xs font-bold uppercase tracking-[0.1em]"><CheckIcon className="h-4 w-4 text-emerald-800" /><span className="text-emerald-800">Catalog</span><span className="text-stone-300">→</span><span className="text-stone-600">products</span><span className="text-stone-300">→</span><span className="text-stone-600">customer menu</span></div></SmartMenuFrame>;
}

export function CategoriesPreview() {
  const categories = [{ name: "Coffee", count: "3 items" }, { name: "Food", count: "2 items" }, { name: "Dessert", count: "2 items" }, { name: "Drinks", count: "4 items" }];
  return <SmartMenuFrame title="Menu Categories"><PreviewHeader area="Customer Menu" title="Browse by category" action="Mobile ready" /><div className="mt-5 grid gap-3 sm:grid-cols-2">{categories.map((category, index) => <div key={category.name} className={`rounded-xl border p-4 ${index === 0 ? "border-emerald-200 bg-emerald-50" : "border-stone-200 bg-white"}`}><p className={`text-sm font-extrabold ${index === 0 ? "text-emerald-950" : "text-stone-900"}`}>{category.name}</p><p className={`mt-1 text-[10px] font-bold ${index === 0 ? "text-emerald-800" : "text-stone-500"}`}>{category.count}</p></div>)}</div><div className="mt-4 rounded-xl border border-stone-200 bg-white p-4"><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">Coffee</p><div className="mt-3 flex items-center justify-between gap-3"><p className="text-sm font-extrabold text-stone-950">Latte</p><p className="text-sm font-extrabold text-stone-900">₱120</p></div></div></SmartMenuFrame>;
}

export function ProductDetailsPreview() {
  return <SmartMenuFrame title="Product Detail"><PreviewHeader area="Customer Menu" title="Product details" action="Coffee" /><div className="mt-5 grid gap-4 sm:grid-cols-[0.86fr_1.14fr]"><div className="flex min-h-40 items-center justify-center rounded-xl border border-emerald-100 bg-[radial-gradient(circle_at_50%_35%,rgba(167,243,208,0.8),transparent_34%),linear-gradient(145deg,#ecfdf5,#f7f7f4)]"><span className="rounded-full border border-white/80 bg-white/80 px-3 py-1.5 text-[10px] font-bold text-emerald-900">Latte</span></div><div className="rounded-xl border border-stone-200 bg-white p-4 sm:p-5"><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">Coffee</p><div className="mt-2 flex items-start justify-between gap-3"><h3 className="text-xl font-extrabold tracking-[-0.045em] text-stone-950">Latte</h3><p className="text-base font-extrabold text-stone-950">₱120</p></div><dl className="mt-5 divide-y divide-stone-100 border-y border-stone-100 text-xs"><div className="flex items-center justify-between gap-3 py-3"><dt className="text-stone-500">Item type</dt><dd className="font-bold text-stone-800">Menu item</dd></div><div className="flex items-center justify-between gap-3 py-3"><dt className="text-stone-500">Product choices</dt><dd className="font-bold text-stone-800">When configured</dd></div></dl></div></div></SmartMenuFrame>;
}

export function VariantsPreview() {
  return <SmartMenuFrame title="Product Choices"><PreviewHeader area="Customer Menu" title="Latte options" action="Menu presentation" /><div className="mt-5 rounded-xl border border-stone-200 bg-white p-4 sm:p-5"><div className="flex items-start justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">Selected item</p><p className="mt-1 text-lg font-extrabold tracking-[-0.04em] text-stone-950">Latte</p></div><p className="text-sm font-extrabold text-stone-950">₱120</p></div><div className="mt-5 border-t border-stone-100 pt-4"><p className="text-xs font-extrabold text-stone-900">Size</p><div className="mt-2 flex flex-wrap gap-2"><span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-[10px] font-bold text-emerald-900">Regular</span><span className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-[10px] font-bold text-stone-700">Large +₱30</span></div></div><div className="mt-4"><p className="text-xs font-extrabold text-stone-900">Milk</p><div className="mt-2 flex flex-wrap gap-2"><span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-[10px] font-bold text-emerald-900">Regular</span><span className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-[10px] font-bold text-stone-700">Oat +₱20</span></div></div><div className="mt-4"><p className="text-xs font-extrabold text-stone-900">Extra Shot</p><p className="mt-2 text-[10px] font-bold text-stone-600">+₱25 when configured</p></div></div><p className="mt-4 text-[10px] leading-4 text-stone-500">Configured product choices are shown as part of browsing the menu.</p></SmartMenuFrame>;
}

export function QrAccessPreview() {
  return <SmartMenuFrame title="QR Access"><PreviewHeader area="Smart Menu" title="Scan to view menu" action="Customer access" /><div className="mt-5 grid gap-5 rounded-2xl bg-emerald-800 p-5 text-white sm:grid-cols-[auto_1fr] sm:items-center sm:p-6"><div className="mx-auto w-fit rounded-xl bg-white p-3 text-stone-900"><SmartMenuQrMark label="QR-style code that opens the TINDIO Demo Café customer menu" /></div><div><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-200">Scan to view menu</p><p className="mt-2 text-xl font-extrabold tracking-[-0.04em]">TINDIO Demo Café</p><p className="mt-2 text-xs leading-5 text-emerald-100">Coffee · Food · Dessert</p><p className="mt-4 text-[10px] leading-4 text-emerald-200">A quick way for customers to open the menu on their own device.</p></div></div></SmartMenuFrame>;
}

export function StoreContextPreview() {
  return <SmartMenuFrame title="Store Context"><PreviewHeader area="Smart Menu" title="Menu context" action="Main Branch" /><div className="mt-5 rounded-xl border border-stone-200 bg-white p-4 sm:p-5"><div className="flex flex-wrap items-start justify-between gap-3 border-b border-stone-100 pb-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">Current menu context</p><p className="mt-1 text-lg font-extrabold tracking-[-0.04em] text-stone-950">Main Branch</p></div><span className="rounded-lg bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-800">TINDIO Demo Café</span></div><div className="mt-4 grid gap-3 sm:grid-cols-3"><div className="rounded-lg border border-emerald-100 bg-emerald-50 p-3"><p className="text-[10px] font-bold text-emerald-900">Coffee</p><p className="mt-1 text-[10px] text-emerald-800">Catalog category</p></div><div className="rounded-lg border border-stone-200 bg-white p-3"><p className="text-[10px] font-bold text-stone-900">Food</p><p className="mt-1 text-[10px] text-stone-500">Catalog category</p></div><div className="rounded-lg border border-stone-200 bg-white p-3"><p className="text-[10px] font-bold text-stone-900">Dessert</p><p className="mt-1 text-[10px] text-stone-500">Catalog category</p></div></div></div><p className="mt-4 text-[10px] leading-4 text-stone-500">The customer menu clearly shows the business and location context it represents.</p></SmartMenuFrame>;
}

export function MenuManagementPreview() {
  const layers = [{ label: "Catalog source", detail: "Products and prices" }, { label: "Menu structure", detail: "Categories and item choices" }, { label: "Customer view", detail: "Simple menu presentation" }];
  return <SmartMenuFrame title="Menu Setup"><PreviewHeader area="Smart Menu" title="Catalog-connected setup" action="One catalog" /><ol className="mt-5 grid gap-3 sm:grid-cols-3">{layers.map((layer, index) => <li key={layer.label} className="rounded-xl border border-stone-200 bg-white p-4"><span className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-extrabold ${index === 0 ? "bg-emerald-700 text-white" : "bg-stone-100 text-stone-600"}`}>{index + 1}</span><p className="mt-4 text-xs font-extrabold text-stone-900">{layer.label}</p><p className="mt-1 text-[10px] leading-4 text-stone-500">{layer.detail}</p></li>)}</ol><div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3"><p className="text-xs font-extrabold text-emerald-950">One catalog, one customer menu</p><p className="mt-1 text-[10px] leading-4 text-emerald-800">Smart Menu presents the catalog information your business already manages in TINDIO where supported.</p></div></SmartMenuFrame>;
}

export function CatalogCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">One catalog</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Update products once. Keep the menu connected.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Smart Menu uses the same product information your business already manages in TINDIO where supported.</p></div>;
}

export function CategoriesCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Categories</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Help customers find what they want quickly.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Clear categories give customers a familiar way to browse the menu without overwhelming them with back-office detail.</p></div>;
}

export function ProductDetailsCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Product details</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Give customers the details they need to choose.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Present the product name, category, price, and configured choices in a clear customer-facing view.</p></div>;
}

export function VariantsCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Variants and modifiers</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Show the choices connected to each item.</h2><p className="mt-5 text-lg leading-7 text-stone-600">When product choices are configured in TINDIO, Smart Menu can present them alongside the item while keeping the experience focused on menu browsing.</p></div>;
}

export function QrAccessCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">QR access</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Put the menu one scan away.</h2><p className="mt-5 text-lg leading-7 text-stone-600">A recognizable QR code gives customers a direct way to open the customer-facing menu on their own device.</p></div>;
}

export function StoreContextCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Store context</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Show the right menu context for the right location.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Keep the business and location represented by the customer menu clear, alongside the catalog categories it presents.</p><Button href="/multi-store" variant="secondary" size="sm" className="mt-7">Explore Multi-Store <ArrowRightIcon className="h-3.5 w-3.5" /></Button></div>;
}

export function MenuManagementCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Menu management</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Keep the customer view connected to your catalog.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Build the customer-facing menu from the product structure you already manage instead of maintaining a second set of menu items.</p></div>;
}
