import { AppFrame } from "@/components/marketing/app-frame";

type SmartMenuPreviewProps = {
  screenshotSrc?: string;
};

const menuQrCells = [1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1];

const menuItems = [
  { name: "Latte", price: "₱120", active: true },
  { name: "Cappuccino", price: "₱130", active: false },
  { name: "Americano", price: "₱100", active: false },
] as const;

/** A customer-facing catalog menu preview; provide screenshotSrc when approved imagery is available. */
export function SmartMenuPreview({ screenshotSrc }: SmartMenuPreviewProps) {
  return (
    <AppFrame
      title="TINDIO Smart Menu"
      screenshotSrc={screenshotSrc}
      screenshotAlt="TINDIO Smart Menu with catalog items and product modifiers"
      className="w-full"
    >
      <div className="bg-[#fafbf9] p-4 sm:p-5 lg:p-6">
        <div className="flex items-center justify-between border-b border-stone-200 pb-4">
          <div className="flex items-center gap-2.5"><span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-700 text-xs font-extrabold text-white">T</span><span className="text-xs font-bold tracking-[-0.02em] text-stone-900">Smart Menu</span></div>
          <span className="rounded-full border border-stone-200 bg-white px-2.5 py-1 text-[10px] font-bold text-stone-500">Customer view</span>
        </div>

        <div className="flex items-end justify-between gap-3 py-5 sm:py-6">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">TINDIO SMART MENU</p><h3 className="mt-1.5 text-lg font-extrabold tracking-[-0.045em] text-stone-950 sm:text-xl">A menu from your catalog.</h3></div>
          <div className="flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-2 py-1.5"><span role="img" aria-label="QR code to view the menu" className="grid h-6 w-6 grid-cols-5 gap-px rounded-sm bg-white p-0.5">{menuQrCells.map((cell, index) => <span key={index} className={cell ? "bg-stone-900" : "bg-white"} />)}</span><span className="text-[10px] font-bold text-stone-600">Scan to view menu</span></div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
          {["Coffee", "Food", "Dessert"].map((category, index) => <button key={category} type="button" className={`shrink-0 rounded-full px-3 py-1.5 text-[10px] font-bold ${index === 0 ? "bg-emerald-700 text-white" : "border border-stone-200 bg-white text-stone-600"}`}>{category}</button>)}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
            <ul className="divide-y divide-stone-100">
              {menuItems.map((item) => <li key={item.name} className={`flex items-center justify-between gap-3 px-4 py-4 ${item.active ? "bg-emerald-50/55" : ""}`}><div><p className="text-sm font-extrabold tracking-[-0.025em] text-stone-900">{item.name}</p><p className="mt-0.5 text-[10px] text-stone-500">From your TINDIO catalog</p></div><p className={`text-sm font-extrabold tracking-[-0.03em] ${item.active ? "text-emerald-800" : "text-stone-800"}`}>{item.price}</p></li>)}
            </ul>
          </div>
          <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 sm:p-5">
            <div className="flex items-baseline justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-emerald-800">Selected item</p><p className="mt-1.5 text-lg font-extrabold tracking-[-0.045em] text-emerald-950">Latte</p></div><p className="text-sm font-extrabold text-emerald-900">₱120</p></div>
            <div className="mt-5"><p className="text-xs font-extrabold text-emerald-950">Size</p><div className="mt-2 flex flex-wrap gap-1.5">{["Small", "Medium", "Large"].map((size, index) => <span key={size} className={`rounded-md px-2.5 py-1.5 text-[10px] font-bold ${index === 1 ? "bg-emerald-700 text-white" : "border border-emerald-200 bg-white text-emerald-900"}`}>{size}</span>)}</div></div>
            <div className="mt-4"><p className="text-xs font-extrabold text-emerald-950">Milk</p><div className="mt-2 flex flex-wrap gap-1.5"><span className="rounded-md border border-emerald-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-emerald-900">Regular</span><span className="rounded-md border border-emerald-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-emerald-900">Oat +₱20</span></div></div>
          </div>
        </div>
      </div>
    </AppFrame>
  );
}
