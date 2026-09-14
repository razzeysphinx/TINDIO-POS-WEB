import { AppFrame } from "@/components/marketing/app-frame";

type ReportsPreviewProps = {
  screenshotSrc?: string;
};

const metrics = [
  { label: "Net Sales", value: "₱580,000", accent: true },
  { label: "Transactions", value: "842", accent: false },
  { label: "Average Ticket", value: "₱689", accent: false },
  { label: "Refunds", value: "₱7,400", accent: false },
] as const;

const stores = [
  { name: "Main Branch", value: "₱250,000", width: "w-full" },
  { name: "Mall Branch", value: "₱210,000", width: "w-[84%]" },
  { name: "Airport Branch", value: "₱120,000", width: "w-[48%]" },
] as const;

/** A reports preview; provide screenshotSrc when approved product imagery is available. */
export function ReportsPreview({ screenshotSrc }: ReportsPreviewProps) {
  return (
    <AppFrame
      title="TINDIO Back Office — Reports"
      screenshotSrc={screenshotSrc}
      screenshotAlt="TINDIO business reports with all-store sales and breakdown"
      className="w-full"
    >
      <div className="bg-[#fafbf9] p-4 sm:p-5 lg:p-6">
        <div className="flex items-center justify-between border-b border-stone-200 pb-4">
          <div className="flex items-center gap-2.5"><span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-700 text-xs font-extrabold text-white">T</span><span className="text-xs font-bold tracking-[-0.02em] text-stone-900">Back Office</span></div>
          <span className="rounded-full border border-stone-200 bg-white px-2.5 py-1 text-[10px] font-bold text-stone-500">Reports</span>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-3 py-5 sm:py-6">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">Reports</p><h3 className="mt-1.5 text-lg font-extrabold tracking-[-0.045em] text-stone-950 sm:text-xl">Sales Summary</h3></div>
          <div className="flex gap-2">
            <button type="button" className="rounded-lg border border-stone-200 bg-white px-2.5 py-2 text-[10px] font-bold text-stone-800 shadow-sm"><span className="text-stone-400">Store:</span> ALL STORES <span className="text-emerald-700">⌄</span></button>
            <button type="button" className="rounded-lg border border-stone-200 bg-white px-2.5 py-2 text-[10px] font-bold text-stone-800 shadow-sm"><span className="text-stone-400">Date:</span> THIS MONTH <span className="text-emerald-700">⌄</span></button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
          {metrics.map((metric) => (
            <div key={metric.label} className={`rounded-lg border p-3 sm:p-3.5 ${metric.accent ? "border-emerald-100 bg-emerald-50" : "border-stone-200 bg-white"}`}>
              <p className={`text-[9px] font-bold uppercase tracking-[0.09em] ${metric.accent ? "text-emerald-800" : "text-stone-400"}`}>{metric.label}</p>
              <p className={`mt-2 text-base font-extrabold tracking-[-0.05em] sm:text-lg ${metric.accent ? "text-emerald-900" : "text-stone-900"}`}>{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-stone-200 bg-white p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3"><p className="text-xs font-extrabold text-stone-900">Sales trend</p><p className="text-[10px] font-bold text-emerald-700">This month</p></div>
          <div className="mt-5 flex h-24 items-end gap-1.5 sm:h-28 sm:gap-2">
            {[32, 44, 37, 58, 51, 70, 62, 77, 68, 88, 76, 94].map((height, index) => <span key={index} style={{ height: `${height}%` }} className={`flex-1 rounded-t-sm ${index > 8 ? "bg-emerald-600" : "bg-emerald-100"}`} />)}
          </div>
          <div className="mt-2 flex justify-between text-[9px] font-medium text-stone-400"><span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span></div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-xl border border-stone-200 bg-white p-4">
            <div className="flex items-center justify-between"><p className="text-xs font-extrabold text-stone-900">By Store</p><span className="text-[9px] font-bold uppercase tracking-[0.09em] text-stone-400">All Stores</span></div>
            <div className="mt-3 space-y-3.5">
              {stores.map((store) => <div key={store.name}><div className="flex justify-between gap-3 text-xs"><span className="font-semibold text-stone-700">{store.name}</span><span className="font-bold text-stone-900">{store.value}</span></div><div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-stone-100"><span className={`block h-full rounded-full bg-emerald-500 ${store.width}`} /></div></div>)}
            </div>
          </div>
          <div className="rounded-xl border border-stone-200 bg-white p-4"><p className="text-xs font-extrabold text-stone-900">More reports</p><div className="mt-3 flex flex-wrap gap-1.5">{["By Product", "By Category", "By Employee", "By Payment", "Shift Reports"].map((report) => <span key={report} className="rounded-full bg-stone-100 px-2.5 py-1.5 text-[10px] font-bold text-stone-600">{report}</span>)}</div></div>
        </div>
      </div>
    </AppFrame>
  );
}
