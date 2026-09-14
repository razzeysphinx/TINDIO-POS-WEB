import { AppFrame } from "@/components/marketing/app-frame";

type MultiStorePerformancePreviewProps = {
  screenshotSrc?: string;
};

const stores = [
  { name: "Main Branch", sales: "₱250,000", transactions: "380", ticket: "₱658", width: "w-full" },
  { name: "Mall Branch", sales: "₱210,000", transactions: "301", ticket: "₱698", width: "w-[84%]" },
  { name: "Airport Branch", sales: "₱120,000", transactions: "161", ticket: "₱745", width: "w-[48%]" },
] as const;

/** A consolidated-store preview; pass screenshotSrc when approved product imagery is available. */
export function MultiStorePerformancePreview({ screenshotSrc }: MultiStorePerformancePreviewProps) {
  return (
    <AppFrame
      title="TINDIO Back Office — Store Performance"
      screenshotSrc={screenshotSrc}
      screenshotAlt="TINDIO multi-store performance overview"
      className="w-full"
    >
      <div className="bg-[#fafbf9] p-4 sm:p-5 lg:p-6">
        <div className="flex items-center justify-between border-b border-stone-200 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-700 text-xs font-extrabold text-white">T</span>
            <span className="text-xs font-bold tracking-[-0.02em] text-stone-900">Back Office</span>
          </div>
          <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
        </div>

        <div className="flex flex-wrap items-end justify-between gap-3 py-5 sm:py-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">Overview</p>
            <h3 className="mt-1.5 text-lg font-extrabold tracking-[-0.045em] text-stone-950 sm:text-xl">Store Performance</h3>
          </div>
          <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs font-bold text-stone-800 shadow-sm">
            <span className="text-stone-500">Store:</span> ALL STORES <span className="text-emerald-700">⌄</span>
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
          <div className="hidden grid-cols-[minmax(0,1.4fr)_0.9fr_0.7fr_0.85fr] gap-3 border-b border-stone-200 bg-stone-50 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.1em] text-stone-400 sm:grid sm:px-5">
            <span>Store</span><span>Net Sales</span><span>Transactions</span><span>Average Ticket</span>
          </div>
          <ul className="divide-y divide-stone-100">
            {stores.map((store, index) => (
              <li key={store.name} className="px-4 py-4 sm:px-5 sm:py-4.5">
                <div className="grid gap-x-3 gap-y-2 sm:grid-cols-[minmax(0,1.4fr)_0.9fr_0.7fr_0.85fr] sm:items-center">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 shrink-0 rounded-full ${index === 0 ? "bg-emerald-600" : "bg-stone-300"}`} />
                      <p className="truncate text-sm font-bold tracking-[-0.02em] text-stone-900">{store.name}</p>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-stone-100 sm:mr-6"><span className={`block h-full rounded-full ${index === 0 ? "bg-emerald-500" : "bg-emerald-200"} ${store.width}`} /></div>
                  </div>
                  <dl className="grid grid-cols-3 gap-2 sm:contents">
                    <div><dt className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400 sm:hidden">Net Sales</dt><dd className="mt-1 text-xs font-extrabold tracking-[-0.025em] text-stone-900 sm:mt-0 sm:text-sm">{store.sales}</dd></div>
                    <div><dt className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400 sm:hidden">Transactions</dt><dd className="mt-1 text-xs font-bold tracking-[-0.025em] text-stone-900 sm:mt-0 sm:text-sm">{store.transactions}</dd></div>
                    <div><dt className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400 sm:hidden">Avg. Ticket</dt><dd className="mt-1 text-xs font-extrabold tracking-[-0.025em] text-stone-900 sm:mt-0 sm:text-sm">{store.ticket}</dd></div>
                  </dl>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
          <div className="rounded-lg border border-stone-200 bg-white px-3 py-2.5"><p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Low Stock</p><p className="mt-1 text-xs font-bold text-stone-800">Review</p></div>
          <div className="rounded-lg border border-stone-200 bg-white px-3 py-2.5"><p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Shift Difference</p><p className="mt-1 text-xs font-bold text-stone-800">Review</p></div>
          <div className="rounded-lg border border-stone-200 bg-white px-3 py-2.5"><p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Refunds</p><p className="mt-1 text-xs font-bold text-stone-800">Review</p></div>
        </div>
      </div>
    </AppFrame>
  );
}
