import { AppFrame } from "@/components/marketing/app-frame";

type SyncStatusPreviewProps = {
  screenshotSrc?: string;
};

const transactions = [
  { reference: "Sale MAIN-R01-000428", state: "Synced", tone: "synced" },
  { reference: "Sale MAIN-R01-000429", state: "Synced", tone: "synced" },
  { reference: "Sale MAIN-R01-000430", state: "Pending", tone: "pending" },
] as const;

/** A transaction-sync preview; provide screenshotSrc when approved POS imagery is available. */
export function SyncStatusPreview({ screenshotSrc }: SyncStatusPreviewProps) {
  return (
    <AppFrame
      title="TINDIO POS — Sync Status"
      screenshotSrc={screenshotSrc}
      screenshotAlt="TINDIO POS sync status and pending transactions"
      className="w-full"
    >
      <div className="bg-[#fafbf9] p-4 sm:p-5 lg:p-6">
        <div className="flex items-center justify-between border-b border-stone-200 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-700 text-xs font-extrabold text-white">T</span>
            <span className="text-xs font-bold tracking-[-0.02em] text-stone-900">POS</span>
          </div>
          <span className="rounded-full border border-stone-200 bg-white px-2.5 py-1 text-[10px] font-bold text-stone-500">Main Branch</span>
        </div>

        <div className="flex items-start justify-between gap-4 py-5 sm:py-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">Sync Status</p>
            <h3 className="mt-1.5 text-lg font-extrabold tracking-[-0.045em] text-stone-950 sm:text-xl">Transactions are catching up.</h3>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-800"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Syncing</span>
        </div>

        <div className="rounded-xl border border-stone-200 bg-white">
          <div className="border-b border-stone-200 px-4 py-3.5 sm:px-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold tracking-[-0.02em] text-stone-900">Connection restored</p>
                <p className="mt-1 text-xs text-stone-500">3 transactions were saved while offline</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> 2 of 3</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-stone-100"><span className="block h-full w-2/3 rounded-full bg-emerald-500" /></div>
          </div>
          <ul className="divide-y divide-stone-100">
            {transactions.map((transaction) => (
              <li key={transaction.reference} className="flex items-center justify-between gap-3 px-4 py-3.5 sm:px-5">
                <div className="min-w-0"><p className="truncate text-sm font-bold tracking-[-0.02em] text-stone-900">{transaction.reference}</p><p className="mt-0.5 text-xs text-stone-500">Saved locally during offline operation</p></div>
                <span className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-bold ${transaction.tone === "synced" ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}>{transaction.state}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 grid grid-cols-[auto_1fr] gap-x-3 gap-y-3 text-xs">
          <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-stone-100 text-[10px] font-bold text-stone-500">1</span><p className="text-stone-600"><span className="font-bold text-stone-900">Offline</span> — transactions are saved locally and remain visible in the queue.</p>
          <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-800">2</span><p className="text-stone-600"><span className="font-bold text-stone-900">Connection restored</span> — pending sales move through syncing to synced.</p>
        </div>

        <div className="mt-4 flex items-center gap-2 border-t border-stone-200 pt-3 text-[10px] font-semibold text-stone-400"><span className="h-1.5 w-1.5 rounded-full bg-stone-300" /> Sync problems are surfaced for review when they need attention.</div>
      </div>
    </AppFrame>
  );
}
