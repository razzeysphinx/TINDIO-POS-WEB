import type { ReactNode } from "react";

import { AppFrame } from "@/components/marketing/app-frame";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { publicCtaDestinations } from "@/lib/public-navigation";

type AccessState = "Allowed" | "Approval required" | "Not allowed";

function AccessFrame({ children, title }: { children: ReactNode; title: string }) {
  return <AppFrame title={`TINDIO Back Office — ${title}`} className="w-full"><div className="bg-[#fafbf9] p-4 sm:p-5 lg:p-6">{children}</div></AppFrame>;
}

function PreviewHeader({ area, title, action }: { area: string; title: string; action?: string }) {
  return <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4"><div className="flex items-center gap-2.5"><span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-700 text-[10px] font-extrabold text-white">T</span><div><p className="text-[9px] font-bold uppercase tracking-[0.1em] text-stone-400">{area}</p><p className="mt-0.5 text-xs font-bold tracking-[-0.02em] text-stone-900">{title}</p></div></div>{action ? <span className="rounded-md border border-stone-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-stone-600">{action}</span> : null}</div>;
}

function StatusBadge({ state }: { state: AccessState }) {
  const tone = state === "Allowed" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : state === "Approval required" ? "border-amber-200 bg-amber-50 text-amber-800" : "border-stone-200 bg-stone-100 text-stone-600";
  return <span className={`inline-flex rounded-full border px-2 py-1 text-[9px] font-extrabold ${tone}`}>{state}</span>;
}

function StoreState({ store, assigned }: { store: string; assigned: boolean }) {
  return <div className="flex items-center justify-between gap-3 rounded-lg border border-stone-200 bg-white px-3 py-2.5"><span className="text-xs font-bold text-stone-800">{store}</span><span className={`inline-flex items-center gap-1.5 text-[10px] font-bold ${assigned ? "text-emerald-800" : "text-stone-500"}`}><span aria-hidden="true" className={`flex h-4 w-4 items-center justify-center rounded border text-[10px] ${assigned ? "border-emerald-600 bg-emerald-600 text-white" : "border-stone-300 bg-stone-50 text-stone-400"}`}>{assigned ? "✓" : "—"}</span>{assigned ? "Allowed" : "Not assigned"}</span></div>;
}

const permissionRows = [
  { action: "Sell", manager: "Allowed", cashier: "Allowed" },
  { action: "Refund", manager: "Allowed", cashier: "Approval required" },
  { action: "Inventory", manager: "Allowed", cashier: "Not allowed" },
  { action: "View reports", manager: "Allowed", cashier: "Not allowed" },
  { action: "Shift work", manager: "Allowed", cashier: "Allowed" },
] as const;

export function EmployeeAccessHeroCopy() {
  return <div className="max-w-[560px]"><p className="eyebrow">Employee access</p><h1 className="mt-4 text-balance text-[3rem] font-extrabold leading-[0.98] tracking-[-0.065em] text-stone-950 sm:text-6xl">Give every employee the right access.</h1><p className="mt-6 max-w-[520px] text-pretty text-lg leading-7 text-stone-600 sm:text-xl sm:leading-8">Set role defaults, store access, and granular permissions so people can do their jobs without seeing or changing what they shouldn&apos;t.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href={publicCtaDestinations.getStarted} size="lg">Get Started <ArrowRightIcon className="h-4 w-4" /></Button><Button href="#roles-permissions" variant="secondary" size="lg">See How Access Works</Button></div></div>;
}

export function EmployeeAccessHeroPreview() {
  return <AccessFrame title="Employee Access"><PreviewHeader area="Employee access" title="Maria Santos" action="Manager" /><div className="mt-5 grid gap-3 sm:grid-cols-[0.88fr_1.12fr]"><div className="rounded-xl border border-stone-200 bg-white p-4"><p className="text-[10px] font-bold uppercase tracking-[0.09em] text-stone-400">Assigned stores</p><div className="mt-3 space-y-2"><StoreState store="Main Branch" assigned /><StoreState store="Mall Branch" assigned /></div></div><div className="rounded-xl border border-stone-200 bg-white p-4"><p className="text-[10px] font-bold uppercase tracking-[0.09em] text-stone-400">Permissions</p><div className="mt-3 space-y-2.5">{[{ label: "Sales", state: "Allowed" }, { label: "Refunds", state: "Allowed" }, { label: "Inventory", state: "Allowed" }, { label: "Reports", state: "Allowed" }, { label: "Shift work", state: "Allowed" }].map((item) => <div key={item.label} className="flex items-center justify-between gap-3"><span className="text-xs font-bold text-stone-800">{item.label}</span><StatusBadge state={item.state as AccessState} /></div>)}</div></div></div><p className="mt-4 text-[10px] leading-4 text-stone-500">Access combines assigned stores, role defaults, and granular permissions.</p></AccessFrame>;
}

export function RoleDefaultsPreview() {
  const roles = [{ name: "Owner", detail: "Broad organization access" }, { name: "Admin", detail: "Business administration" }, { name: "Manager", detail: "Assigned operational management" }, { name: "Inventory", detail: "Inventory operations" }, { name: "Cashier", detail: "POS operations" }];
  return <AccessFrame title="Role Defaults"><PreviewHeader area="Employee access" title="Role defaults" action="Adjustable" /><div className="mt-5 grid gap-2.5 sm:grid-cols-2">{roles.map((role, index) => <div key={role.name} className={`rounded-xl border p-3.5 ${index === 2 ? "border-emerald-200 bg-emerald-50/60" : "border-stone-200 bg-white"}`}><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-extrabold text-stone-900">{role.name}</p><p className="mt-1 text-[10px] leading-4 text-stone-500">{role.detail}</p></div><span className="shrink-0 rounded-full bg-stone-100 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.08em] text-stone-500">Default</span></div></div>)}</div><p className="mt-4 text-[10px] leading-4 text-stone-500">Role defaults give teams a sensible starting point; permissions can be adjusted for how the business works.</p></AccessFrame>;
}

export function GranularPermissionsPreview() {
  return <AccessFrame title="Granular Permissions"><PreviewHeader area="Employee access" title="Permission comparison" action="Manager · Cashier" /><div className="mt-5 sm:hidden space-y-2.5">{permissionRows.map((row) => <div key={row.action} className="rounded-xl border border-stone-200 bg-white p-3.5"><p className="text-xs font-extrabold text-stone-900">{row.action}</p><div className="mt-3 grid grid-cols-2 gap-3"><div><p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Manager</p><div className="mt-1.5"><StatusBadge state={row.manager} /></div></div><div><p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">Cashier</p><div className="mt-1.5"><StatusBadge state={row.cashier} /></div></div></div></div>)}</div><div className="mt-5 hidden overflow-hidden rounded-xl border border-stone-200 bg-white sm:block"><table className="w-full text-left"><caption className="sr-only">Permission comparison for Manager and Cashier default roles</caption><thead className="bg-stone-50 text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400"><tr><th scope="col" className="px-4 py-3.5 sm:px-5">Action</th><th scope="col" className="px-4 py-3.5">Manager</th><th scope="col" className="px-4 py-3.5 sm:px-5">Cashier</th></tr></thead><tbody>{permissionRows.map((row) => <tr key={row.action} className="border-t border-stone-100"><th scope="row" className="px-4 py-3.5 text-xs font-bold text-stone-900 sm:px-5">{row.action}</th><td className="px-4 py-3.5"><StatusBadge state={row.manager} /></td><td className="px-4 py-3.5 sm:px-5"><StatusBadge state={row.cashier} /></td></tr>)}</tbody></table></div><p className="mt-4 text-[10px] leading-4 text-stone-500">Permissions control both what employees see and the actions they are allowed to perform.</p></AccessFrame>;
}

export function StoreAccessPreview() {
  const people = [{ name: "Maria Santos", role: "Manager", stores: [{ name: "Main Branch", assigned: true }, { name: "Mall Branch", assigned: true }, { name: "Airport Branch", assigned: false }] }, { name: "Alex Reyes", role: "Cashier", stores: [{ name: "Mall Branch", assigned: true }, { name: "Main Branch", assigned: false }, { name: "Airport Branch", assigned: false }] }];
  return <AccessFrame title="Store Access"><PreviewHeader area="Employee access" title="Store assignments" action="Permission-aware" /><div className="mt-5 grid gap-3 sm:grid-cols-2">{people.map((person) => <div key={person.name} className="rounded-xl border border-stone-200 bg-white p-4"><div className="flex items-center justify-between gap-3"><div><p className="text-xs font-extrabold text-stone-900">{person.name}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-emerald-800">{person.role}</p></div><span className="rounded-full bg-stone-100 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.08em] text-stone-500">Store scope</span></div><div className="mt-4 space-y-2">{person.stores.map((store) => <StoreState key={store.name} store={store.name} assigned={store.assigned} />)}</div></div>)}</div><p className="mt-4 text-[10px] leading-4 text-stone-500">The store selector only shows locations an employee is assigned and authorized to use.</p></AccessFrame>;
}

export function ManagerApprovalsPreview() {
  const steps = [{ title: "Refund request", detail: "Alex Reyes · Cashier", record: "MALL-RC-R01-000284" }, { title: "Manager approval", detail: "Maria Santos · Manager", record: "Approval required" }, { title: "Approved", detail: "Sensitive action cleared", record: "Mall Branch" }, { title: "Refund recorded", detail: "Completed financial history", record: "Receipt retained" }];
  return <AccessFrame title="Manager Approvals"><PreviewHeader area="Employee access" title="Refund approval" action="Mall Branch" /><ol className="mt-5 grid gap-3 md:grid-cols-4 md:gap-2">{steps.map((step, index) => <li key={step.title} className="relative rounded-xl border border-stone-200 bg-white p-3.5"><span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-extrabold ${index < 3 ? "bg-emerald-700 text-white" : "bg-stone-100 text-stone-600"}`}>{index + 1}</span><p className="mt-3 text-[11px] font-extrabold text-stone-900">{step.title}</p><p className="mt-1 text-[10px] leading-4 text-stone-500">{step.detail}</p><p className="mt-2 text-[9px] font-bold text-emerald-800">{step.record}</p></li>)}</ol><p className="mt-4 text-[10px] leading-4 text-stone-500">Approval requirements can depend on the role and permission configuration for the business.</p></AccessFrame>;
}

export function WorkspaceAccessPreview() {
  return <AccessFrame title="Workspace Access"><PreviewHeader area="Employee access" title="Workspace access" action="Role-aware" /><div className="mt-5 grid gap-3 sm:grid-cols-2"><div className="rounded-xl border border-stone-200 bg-white p-4"><p className="text-[10px] font-bold uppercase tracking-[0.09em] text-stone-400">Cashier</p><div className="mt-4 rounded-lg border border-emerald-100 bg-emerald-50 p-3"><p className="text-[10px] font-bold uppercase tracking-[0.08em] text-emerald-800">POS</p><ul className="mt-2 space-y-1.5 text-xs font-bold text-emerald-950"><li className="flex items-center gap-1.5"><CheckIcon className="h-3.5 w-3.5 text-emerald-700" />Sales</li><li className="flex items-center gap-1.5"><CheckIcon className="h-3.5 w-3.5 text-emerald-700" />Receipts</li><li className="flex items-center gap-1.5"><CheckIcon className="h-3.5 w-3.5 text-emerald-700" />Shift</li></ul></div><div className="mt-3 rounded-lg border border-stone-200 bg-stone-50 p-3"><p className="text-[10px] font-bold uppercase tracking-[0.08em] text-stone-500">Back Office</p><p className="mt-2 text-xs font-bold text-stone-700">No management access</p></div></div><div className="rounded-xl border border-stone-200 bg-white p-4"><p className="text-[10px] font-bold uppercase tracking-[0.09em] text-stone-400">Manager</p><div className="mt-4 rounded-lg border border-emerald-100 bg-emerald-50 p-3"><p className="text-[10px] font-bold uppercase tracking-[0.08em] text-emerald-800">POS</p><p className="mt-2 text-xs font-bold text-emerald-950">Available when permitted</p></div><div className="mt-3 rounded-lg border border-stone-200 bg-white p-3"><p className="text-[10px] font-bold uppercase tracking-[0.08em] text-stone-500">Back Office</p><p className="mt-2 text-xs font-bold text-stone-900">Assigned operational access</p></div></div></div><p className="mt-4 text-[10px] leading-4 text-stone-500">POS operates the register. Back Office manages the business. Access to one does not automatically grant the other.</p></AccessFrame>;
}

export function SecurityActivityPreview() {
  const activity = [{ action: "Refund approved", person: "Maria Santos", detail: "Mall Branch · MALL-RC-R01-000284", time: "2:41 PM" }, { action: "Role updated", person: "Owner", detail: "Alex Reyes · Cashier → Senior Cashier", time: "11:20 AM" }, { action: "Inventory adjustment approved", person: "Jamie Cruz", detail: "Main Branch · MAIN-IA-000024", time: "9:18 AM" }];
  return <AccessFrame title="Activity"><PreviewHeader area="Employee access" title="Important activity" action="Selected context" /><ul className="mt-5 divide-y divide-stone-100 overflow-hidden rounded-xl border border-stone-200 bg-white">{activity.map((item, index) => <li key={item.action} className="flex items-start gap-3 px-4 py-4 sm:px-5"><span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-extrabold ${index === 0 ? "bg-emerald-100 text-emerald-800" : "bg-stone-100 text-stone-600"}`}>{index + 1}</span><div className="min-w-0 flex-1"><p className="text-xs font-extrabold text-stone-900">{item.action}</p><p className="mt-1 text-[10px] font-bold text-stone-700">{item.person}</p><p className="mt-1 text-[10px] leading-4 text-stone-500">{item.detail}</p></div><time className="shrink-0 text-[10px] font-bold text-stone-400">{item.time}</time></li>)}</ul><p className="mt-4 text-[10px] leading-4 text-stone-500">Review relevant business activity with the employee, store, record, and time that provide its context.</p></AccessFrame>;
}

export function CustomRolesPreview() {
  return <AccessFrame title="Custom Roles"><PreviewHeader area="Employee access" title="Create role" action="Senior Cashier" /><div className="mt-5 rounded-xl border border-stone-200 bg-white p-4"><div className="flex items-center justify-between gap-3 border-b border-stone-100 pb-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.08em] text-stone-400">Role name</p><p className="mt-1 text-sm font-extrabold text-stone-950">Senior Cashier</p></div><span className="rounded-full bg-emerald-50 px-2.5 py-1.5 text-[9px] font-bold text-emerald-800">Mall Branch</span></div><div className="mt-4 grid gap-3 sm:grid-cols-[1.08fr_0.92fr]"><div><p className="text-[10px] font-bold uppercase tracking-[0.08em] text-stone-400">POS</p><div className="mt-2 flex flex-wrap gap-1.5">{["Sell", "Receipts", "Open / close shift"].map((permission) => <span key={permission} className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1.5 text-[9px] font-bold text-emerald-800">{permission}</span>)}</div></div><div><p className="text-[10px] font-bold uppercase tracking-[0.08em] text-stone-400">Sensitive actions</p><div className="mt-2"><StatusBadge state="Approval required" /></div><p className="mt-1.5 text-[10px] font-bold text-stone-700">Refund</p></div></div><div className="mt-4 rounded-lg border border-stone-200 bg-stone-50 px-3.5 py-3"><p className="text-[10px] font-bold uppercase tracking-[0.08em] text-stone-500">Back Office</p><p className="mt-1 text-xs font-bold text-stone-700">No access</p></div></div><p className="mt-4 text-[10px] leading-4 text-stone-500">Default roles can be adjusted, and new roles use the same permission and store-scope model.</p></AccessFrame>;
}

export function RoleDefaultsCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Role defaults</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Start with roles. Customize when you need to.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Use sensible role defaults, then adjust permissions to match how your business actually works.</p></div>;
}

export function GranularPermissionsCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Granular permissions</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Control what people can actually do.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Roles provide a starting point. Permissions clarify the specific work employees can see and perform.</p></div>;
}

export function StoreAccessCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Store access</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Keep access limited to the right locations.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Combine role permissions with store assignment, from a single branch to the locations an employee is authorized to manage.</p><Button href="/multi-store" variant="secondary" size="sm" className="mt-7">Explore Multi-Store <ArrowRightIcon className="h-3.5 w-3.5" /></Button></div>;
}

export function ManagerApprovalsCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Manager approvals</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Add another layer of control to sensitive actions.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Sensitive actions can require approval instead of giving every employee unrestricted access.</p></div>;
}

export function WorkspaceAccessCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Workspace access</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Keep register access separate from business management.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Cashier access to POS does not automatically grant Back Office management. Each workspace remains permission-aware.</p></div>;
}

export function SecurityActivityCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Security activity</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Keep important actions traceable.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Review relevant activity with the employee, store, business record, and time needed to understand the action.</p></div>;
}

export function CustomRolesCopy() {
  return <div className="max-w-[510px]"><p className="eyebrow">Custom roles</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">Build roles around the way your business actually works.</h2><p className="mt-5 text-lg leading-7 text-stone-600">Start with TINDIO&apos;s default roles or create roles that match your own team structure.</p><div className="mt-7 flex items-center gap-2.5 border-y border-stone-200 py-4 text-xs font-bold uppercase tracking-[0.1em]"><CheckIcon className="h-4 w-4 text-emerald-800" /><span className="text-emerald-800">Role</span><span className="text-stone-300">→</span><span className="text-stone-600">Permissions</span><span className="text-stone-300">→</span><span className="text-stone-600">Store scope</span></div></div>;
}
