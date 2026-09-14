import { AppFrame } from "@/components/marketing/app-frame";

type LoyaltyPreviewProps = {
  screenshotSrc?: string;
};

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

export function LoyaltyQrMark() {
  return (
    <div className="rounded-lg border border-stone-200 bg-white p-2.5 text-center shadow-sm" role="img" aria-label="QR-style loyalty card identifier for TND-8X92K">
      <div className="grid grid-cols-9 gap-[2px]">
        {qrRows.flatMap((row, rowIndex) => row.split("").map((cell, columnIndex) => <span key={`${rowIndex}-${columnIndex}`} className={`block aspect-square rounded-[1px] ${cell === "1" ? "bg-stone-900" : "bg-transparent"}`} />))}
      </div>
      <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.08em] text-stone-500">Scan card</span>
    </div>
  );
}

/** A loyalty-card preview; provide screenshotSrc when approved product imagery is available. */
export function LoyaltyPreview({ screenshotSrc }: LoyaltyPreviewProps) {
  return (
    <AppFrame
      title="TINDIO POS — Customer Loyalty"
      screenshotSrc={screenshotSrc}
      screenshotAlt="TINDIO loyalty card with QR verification and reward progress"
      className="w-full"
    >
      <div className="bg-[#fafbf9] p-4 sm:p-5 lg:p-6">
        <div className="flex items-center justify-between border-b border-stone-200 pb-4">
          <div className="flex items-center gap-2.5"><span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-700 text-xs font-extrabold text-white">T</span><span className="text-xs font-bold tracking-[-0.02em] text-stone-900">POS</span></div>
          <span className="rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-800">Loyalty</span>
        </div>

        <div className="flex items-start justify-between gap-4 py-5 sm:py-6">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">Customer</p><h3 className="mt-1.5 text-lg font-extrabold tracking-[-0.045em] text-stone-950 sm:text-xl">Maria Santos</h3><p className="mt-1 text-xs text-stone-500">Card TND-8X92K</p></div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-800"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Valid</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
          <div className="rounded-xl border border-stone-200 bg-white p-4 sm:p-5">
            <div className="flex items-center justify-between"><p className="text-xs font-extrabold text-stone-900">Loyalty Progress</p><p className="text-sm font-extrabold tracking-[-0.03em] text-emerald-800">8 / 10</p></div>
            <div className="mt-4 grid grid-cols-10 gap-1.5">{Array.from({ length: 10 }, (_, index) => <span key={index} className={`aspect-square rounded-full ${index < 8 ? "bg-emerald-600" : "border border-stone-300 bg-white"}`} />)}</div>
            <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-3"><p className="text-xs text-stone-500">Reward available at 10 / 10</p><span className="text-[10px] font-bold text-emerald-700">2 to go</span></div>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-stone-200 bg-[#f7f7f4] p-4 sm:p-5"><LoyaltyQrMark /></div>
        </div>

        <div className="mt-4 flex flex-col gap-3 rounded-xl border border-stone-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-xs font-extrabold text-stone-900">Card verified</p><p className="mt-1 text-[10px] text-stone-500">Progress updates after an eligible completed purchase</p></div>
          <span className="inline-flex w-fit rounded-lg bg-emerald-50 px-3.5 py-2 text-xs font-bold text-emerald-800">Eligible purchase</span>
        </div>
      </div>
    </AppFrame>
  );
}
