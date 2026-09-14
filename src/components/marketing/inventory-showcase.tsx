import { AppFrame } from "@/components/marketing/app-frame";

type InventoryActivityPreviewProps = {
  screenshotSrc?: string;
  activityId?: string;
};

const activities = [
  {
    type: "Received",
    quantity: "+24",
    location: "Main Branch",
    reference: "PO MAIN-PO-000118",
    indicator: "positive",
  },
  {
    type: "Sold",
    quantity: "-2",
    location: "Main Branch",
    reference: "Receipt MAIN-R01-000428",
    indicator: "negative",
  },
  {
    type: "Transferred",
    quantity: "-10",
    location: "Main → Mall",
    reference: "Transfer MAIN-ST-000042",
    indicator: "transfer",
  },
  {
    type: "Damaged",
    quantity: "-1",
    location: "Main Branch",
    reference: "Juan Dela Cruz",
    indicator: "negative",
  },
] as const;

/** A real-app activity preview; provide screenshotSrc whenever approved product imagery is available. */
export function InventoryActivityPreview({ screenshotSrc, activityId = "inventory-activity" }: InventoryActivityPreviewProps) {
  return (
    <AppFrame
      title="TINDIO Inventory — Coca-Cola 500ml"
      screenshotSrc={screenshotSrc}
      screenshotAlt="TINDIO Inventory Activity for Coca-Cola 500ml"
      className="w-full"
    >
      <div className="bg-[#fafbf9] p-4 sm:p-5 lg:p-6">
        <div className="flex items-center justify-between border-b border-stone-200 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-700 text-xs font-extrabold text-white">T</span>
            <span className="text-xs font-bold tracking-[-0.02em] text-stone-900">Inventory</span>
          </div>
          <span className="rounded-full border border-stone-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-stone-500">Item activity</span>
        </div>

        <div className="flex items-end justify-between gap-4 py-5 sm:py-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">Item</p>
            <h3 className="mt-1.5 text-base font-extrabold tracking-[-0.045em] text-stone-950 sm:text-lg">COCA-COLA 500ML</h3>
          </div>
          <div className="shrink-0 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2.5 text-right sm:px-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-emerald-800">Current Stock</p>
            <p className="mt-0.5 text-xl font-extrabold tracking-[-0.05em] text-emerald-900 sm:text-2xl">41</p>
          </div>
        </div>

        <div id={activityId} className="rounded-xl border border-stone-200 bg-white">
          <div className="flex items-center justify-between border-b border-stone-200 px-4 py-3.5 sm:px-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-stone-500">Recent Inventory Activity</p>
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-label="Live activity" />
          </div>
          <ul className="divide-y divide-stone-100">
            {activities.map((activity) => (
              <li key={activity.type} className="grid grid-cols-[26px_minmax(0,1fr)_auto] gap-x-2.5 px-4 py-3.5 sm:grid-cols-[30px_minmax(0,1fr)_auto] sm:gap-x-3 sm:px-5 sm:py-4">
                <span className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold sm:h-7 sm:w-7 ${activity.indicator === "positive" ? "bg-emerald-100 text-emerald-800" : activity.indicator === "transfer" ? "bg-stone-100 text-stone-600" : "bg-rose-50 text-rose-700"}`}>
                  {activity.indicator === "positive" ? "+" : activity.indicator === "transfer" ? "→" : "−"}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold tracking-[-0.02em] text-stone-900">{activity.type}</p>
                  <p className="mt-0.5 truncate text-xs text-stone-600">{activity.location}</p>
                  <p className="mt-1 truncate text-[10px] font-medium text-stone-400">{activity.reference}</p>
                </div>
                <p className={`pt-0.5 text-sm font-extrabold tracking-[-0.03em] ${activity.indicator === "positive" ? "text-emerald-700" : "text-stone-800"}`}>{activity.quantity}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AppFrame>
  );
}
