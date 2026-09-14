"use client";

import { motion, useReducedMotion } from "motion/react";

const modules = [
  { title: "Point of Sale", text: "The counter where every sale starts." },
  { title: "Inventory", text: "Stock changes stay connected to operations." },
  { title: "Customers", text: "Customer activity stays with the transaction." },
  { title: "Stores", text: "Each branch remains visible inside one business." },
  { title: "Employees", text: "Roles and access follow the people doing the work." },
  { title: "Reports", text: "Business activity becomes something owners can understand." },
] as const;

export function ConnectedSystem() {
  const reduceMotion = useReducedMotion();
  return <section className="relative overflow-hidden bg-[#f5f6f2] py-20 sm:py-24 lg:py-28">
    <div className="premium-grid absolute inset-0 opacity-45" /><div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/30 blur-3xl" />
    <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><div className="mx-auto max-w-[760px] text-center"><p className="eyebrow">One connected system</p><h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] text-stone-950 sm:text-5xl">The work stays connected behind the screen.</h2><p className="mx-auto mt-5 max-w-[660px] text-pretty text-lg leading-7 text-stone-600">TINDIO is designed so sales, inventory, stores, employees, customers, and reporting are parts of the same operating system rather than isolated tools.</p></div>
      <div className="mx-auto mt-12 max-w-[1060px]"><motion.div initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }} className="mx-auto flex h-24 w-24 items-center justify-center rounded-[28px] bg-emerald-700 text-xl font-black tracking-[-0.05em] text-white shadow-[0_22px_50px_rgba(4,120,87,0.28)]">T</motion.div><motion.div initial={reduceMotion ? false : { scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.15 }} className="mx-auto h-10 w-px origin-top bg-emerald-300" />
        <div className="relative"><motion.div initial={reduceMotion ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.25 }} className="absolute left-[8%] right-[8%] top-0 hidden h-px origin-center bg-emerald-300 sm:block" /><div className="grid gap-3 pt-4 sm:grid-cols-2 sm:gap-4 sm:pt-8 lg:grid-cols-3">{modules.map((module, index) => <motion.article key={module.title} initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 0.25 + index * 0.05, ease: [0.22, 1, 0.36, 1] }} className="relative rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_12px_36px_rgba(28,25,23,0.06)]"><span className="font-mono-tindio text-[10px] font-bold text-emerald-700">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-3 text-lg font-extrabold tracking-[-0.035em] text-stone-950">{module.title}</h3><p className="mt-2 text-sm leading-6 text-stone-600">{module.text}</p></motion.article>)}</div></div>
      </div></div>
  </section>;
}
