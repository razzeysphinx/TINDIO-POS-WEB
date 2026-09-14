import { AppFrame } from "@/components/marketing/app-frame";

type EmployeeAccessPreviewProps = {
  screenshotSrc?: string;
};

const roles = [
  { role: "Owner", stores: "All Stores", permissions: ["Full Access"], tone: "owner" },
  { role: "Manager", stores: "Mall Branch", permissions: ["Reports", "Inventory", "Shifts", "Approvals"], tone: "manager" },
  { role: "Inventory Staff", stores: "Main + Mall", permissions: ["Inventory", "Receiving", "Transfers"], tone: "standard" },
  { role: "Cashier", stores: "Mall Branch", permissions: ["POS Only"], tone: "standard" },
] as const;

/** An access-control preview; provide screenshotSrc when approved product imagery is available. */
export function EmployeeAccessPreview({ screenshotSrc }: EmployeeAccessPreviewProps) {
  return (
    <AppFrame
      title="TINDIO Back Office — Employee Access"
      screenshotSrc={screenshotSrc}
      screenshotAlt="TINDIO employee roles, permissions and store access"
      className="w-full"
    >
      <div className="bg-[#fafbf9] p-4 sm:p-5 lg:p-6">
        <div className="flex items-center justify-between border-b border-stone-200 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-700 text-xs font-extrabold text-white">T</span>
            <span className="text-xs font-bold tracking-[-0.02em] text-stone-900">Back Office</span>
          </div>
          <span className="rounded-full border border-stone-200 bg-white px-2.5 py-1 text-[10px] font-bold text-stone-500">Team settings</span>
        </div>

        <div className="py-5 sm:py-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">Employee Access</p>
          <h3 className="mt-1.5 text-lg font-extrabold tracking-[-0.045em] text-stone-950 sm:text-xl">Roles and permissions</h3>
        </div>

        <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
          <ul className="divide-y divide-stone-100">
            {roles.map((item) => (
              <li key={item.role} className={`px-4 py-3.5 sm:px-5 sm:py-4 ${item.tone === "manager" ? "bg-emerald-50/50" : ""}`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-extrabold tracking-[-0.02em] text-stone-900">{item.role}</p>
                    <p className="mt-0.5 text-xs text-stone-500">{item.stores}</p>
                  </div>
                  <div className="flex max-w-[62%] flex-wrap justify-end gap-1.5">
                    {item.permissions.map((permission) => <span key={permission} className={`rounded-full px-2 py-1 text-[9px] font-bold ${item.tone === "owner" ? "bg-stone-900 text-white" : item.tone === "manager" ? "bg-emerald-100 text-emerald-800" : "bg-stone-100 text-stone-600"}`}>{permission}</span>)}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-xl border border-stone-200 bg-white p-4">
            <div className="flex items-center justify-between gap-3"><p className="text-xs font-extrabold text-stone-900">Manager</p><span className="text-[9px] font-bold uppercase tracking-[0.1em] text-stone-400">Assigned Stores</span></div>
            <div className="mt-3 space-y-2 text-xs text-stone-600"><p className="flex items-center gap-2"><span className="flex h-4 w-4 items-center justify-center rounded border border-emerald-600 bg-emerald-600 text-[10px] font-bold text-white">✓</span>Mall Branch</p><p className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-stone-300" />Main Branch</p><p className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-stone-300" />Airport Branch</p></div>
          </div>
          <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-emerald-800">Approval</p>
            <p className="mt-2 text-sm font-extrabold tracking-[-0.025em] text-emerald-950">Refund ₱2,500</p>
            <p className="mt-1 text-xs leading-5 text-emerald-800">Manager approval required</p>
          </div>
        </div>
      </div>
    </AppFrame>
  );
}
