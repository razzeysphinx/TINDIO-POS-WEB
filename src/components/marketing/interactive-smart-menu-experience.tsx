"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { useMemo, useState } from "react";

type MenuItemId = "latte" | "cappuccino" | "americano";

type MenuItemState = {
  id: MenuItemId;
  name: string;
  price: number;
  category: "Coffee";
  available: boolean;
};

const initialItems: Record<MenuItemId, MenuItemState> = {
  latte: {
    id: "latte",
    name: "Latte",
    price: 120,
    category: "Coffee",
    available: true,
  },
  cappuccino: {
    id: "cappuccino",
    name: "Cappuccino",
    price: 130,
    category: "Coffee",
    available: true,
  },
  americano: {
    id: "americano",
    name: "Americano",
    price: 100,
    category: "Coffee",
    available: true,
  },
};

const itemOrder: MenuItemId[] = [
  "latte",
  "cappuccino",
  "americano",
];

const qrCells = [
  1, 1, 1, 0, 1,
  1, 0, 1, 1, 0,
  1, 0, 1, 0, 1,
  0, 1, 0, 1, 0,
  1, 1, 0, 1, 1,
];

const peso = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  maximumFractionDigits: 0,
});

export function InteractiveSmartMenuExperience() {
  const [items, setItems] =
    useState<Record<MenuItemId, MenuItemState>>(initialItems);
  const [selectedId, setSelectedId] =
    useState<MenuItemId>("latte");
  const [oatMilk, setOatMilk] = useState(true);
  const [largeSize, setLargeSize] = useState(true);
  const [syncPulse, setSyncPulse] = useState(0);

  const reduceMotion = useReducedMotion();

  const selected = items[selectedId];

  const visibleItems = useMemo(
    () =>
      itemOrder
        .map((id) => items[id])
        .filter((item) => item.available),
    [items],
  );

  function markSynced() {
    setSyncPulse((value) => value + 1);
  }

  function adjustPrice(delta: number) {
    setItems((current) => ({
      ...current,
      [selectedId]: {
        ...current[selectedId],
        price: Math.max(10, current[selectedId].price + delta),
      },
    }));
    markSynced();
  }

  function toggleAvailability() {
    setItems((current) => ({
      ...current,
      [selectedId]: {
        ...current[selectedId],
        available: !current[selectedId].available,
      },
    }));
    markSynced();
  }

  function toggleOatMilk() {
    setOatMilk((current) => !current);
    markSynced();
  }

  function toggleLargeSize() {
    setLargeSize((current) => !current);
    markSynced();
  }

  function resetDemo() {
    setItems(initialItems);
    setSelectedId("latte");
    setOatMilk(true);
    setLargeSize(true);
    markSynced();
  }

  return (
    <section
      id="smart-menu-experience"
      className="relative overflow-hidden bg-stone-950 py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.14),transparent_32%),radial-gradient(circle_at_82%_70%,rgba(120,113,108,0.18),transparent_34%)]" />
      <div className="premium-grid absolute inset-0 opacity-[0.06]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[830px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">
            Smart Menu
          </p>
          <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">
            Change the catalog. Watch the customer menu follow.
          </h2>
          <p className="mx-auto mt-5 max-w-[710px] text-pretty text-lg leading-7 text-stone-300">
            Use the demo Back Office controls to change a product price,
            availability, size, or milk option and see the customer-facing menu
            update beside it.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[1220px] overflow-hidden rounded-[26px] border border-white/10 bg-[#11110f] shadow-[0_34px_110px_rgba(0,0,0,0.46)]">
          <div className="flex min-h-14 flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-[11px] font-black text-white">
                T
              </span>
              <div className="min-w-0">
                <p className="truncate text-xs font-bold text-white">
                  TINDIO Catalog → Smart Menu Demo
                </p>
                <p className="mt-0.5 text-[10px] text-stone-500">
                  Demo Café · customer menu preview
                </p>
              </div>
            </div>

            <motion.span
              key={syncPulse}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0.45,
                      scale: 0.94,
                    }
              }
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.24,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-extrabold tracking-[0.06em] text-emerald-200"
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-emerald-400"
              />
              MENU IN SYNC
            </motion.span>
          </div>

          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="border-b border-white/10 p-5 sm:p-6 lg:border-b-0 lg:border-r">
              <p className="text-[10px] font-bold uppercase tracking-[0.11em] text-emerald-300">
                Back Office catalog
              </p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.05em] text-white">
                Edit the source once.
              </h3>
              <p className="mt-3 max-w-[540px] text-sm leading-6 text-stone-400">
                Select a demo product, change its details, and compare the
                result with the customer preview.
              </p>

              <div className="mt-6 grid gap-2 sm:grid-cols-3">
                {itemOrder.map((id) => {
                  const item = items[id];
                  const active = selectedId === id;

                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setSelectedId(id)}
                      className={`rounded-xl border p-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 ${
                        active
                          ? "border-emerald-400/40 bg-emerald-400/10"
                          : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-extrabold text-white">
                          {item.name}
                        </span>
                        <span
                          className={`h-2 w-2 rounded-full ${
                            item.available
                              ? "bg-emerald-400"
                              : "bg-stone-600"
                          }`}
                          aria-label={
                            item.available
                              ? "Visible in menu"
                              : "Hidden from menu"
                          }
                        />
                      </div>
                      <p className="mt-2 text-xs font-bold text-stone-400">
                        {peso.format(item.price)}
                      </p>
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={selectedId}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 8,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          y: -6,
                        }
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.22,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.09em] text-stone-500">
                        Selected product
                      </p>
                      <p className="mt-1 text-lg font-extrabold text-white">
                        {selected.name}
                      </p>
                      <p className="mt-1 text-xs text-stone-500">
                        {selected.category}
                      </p>
                    </div>

                    <span
                      className={`rounded-full border px-2.5 py-1.5 text-[10px] font-bold ${
                        selected.available
                          ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
                          : "border-white/10 bg-white/[0.04] text-stone-400"
                      }`}
                    >
                      {selected.available
                        ? "VISIBLE"
                        : "HIDDEN"}
                    </span>
                  </div>

                  <div className="mt-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.09em] text-stone-500">
                      Price
                    </p>

                    <div className="mt-2 grid grid-cols-[44px_1fr_44px] items-center gap-2">
                      <button
                        type="button"
                        onClick={() => adjustPrice(-10)}
                        aria-label={`Decrease ${selected.name} price by 10 pesos`}
                        className="flex h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg font-bold text-stone-300 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                      >
                        −
                      </button>

                      <motion.div
                        key={`${selectedId}-${selected.price}`}
                        initial={
                          reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                scale: 0.92,
                              }
                        }
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        className="flex h-11 items-center justify-center rounded-xl bg-black/20 text-base font-extrabold text-white"
                      >
                        {peso.format(selected.price)}
                      </motion.div>

                      <button
                        type="button"
                        onClick={() => adjustPrice(10)}
                        aria-label={`Increase ${selected.name} price by 10 pesos`}
                        className="flex h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg font-bold text-stone-300 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <button
                      type="button"
                      onClick={toggleAvailability}
                      className={`rounded-xl border p-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 ${
                        selected.available
                          ? "border-emerald-400/30 bg-emerald-400/10"
                          : "border-white/10 bg-white/[0.03]"
                      }`}
                    >
                      <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-500">
                        Menu visibility
                      </p>
                      <p className="mt-1 text-xs font-extrabold text-white">
                        {selected.available ? "On" : "Off"}
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={toggleLargeSize}
                      className={`rounded-xl border p-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 ${
                        largeSize
                          ? "border-emerald-400/30 bg-emerald-400/10"
                          : "border-white/10 bg-white/[0.03]"
                      }`}
                    >
                      <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-500">
                        Large size
                      </p>
                      <p className="mt-1 text-xs font-extrabold text-white">
                        {largeSize ? "Available" : "Hidden"}
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={toggleOatMilk}
                      className={`rounded-xl border p-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 ${
                        oatMilk
                          ? "border-emerald-400/30 bg-emerald-400/10"
                          : "border-white/10 bg-white/[0.03]"
                      }`}
                    >
                      <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-500">
                        Oat milk
                      </p>
                      <p className="mt-1 text-xs font-extrabold text-white">
                        {oatMilk ? "+₱20" : "Hidden"}
                      </p>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={resetDemo}
                    className="mt-5 min-h-10 w-full rounded-xl border border-white/10 px-4 text-xs font-bold text-stone-300 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                  >
                    Reset catalog demo
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="bg-white/[0.02] p-5 sm:p-6">
              <div className="mx-auto max-w-[390px]">
                <div className="overflow-hidden rounded-[32px] border-[8px] border-stone-800 bg-[#fbfbf8] shadow-[0_28px_70px_rgba(0,0,0,0.32)]">
                  <div className="flex h-7 items-center justify-center bg-stone-900">
                    <span className="h-1.5 w-16 rounded-full bg-stone-700" />
                  </div>

                  <div className="min-h-[570px] bg-[#fbfbf8] text-stone-950">
                    <div className="border-b border-stone-200 bg-white px-4 pb-4 pt-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-emerald-700">
                            TINDIO SMART MENU
                          </p>
                          <h3 className="mt-1 text-xl font-extrabold tracking-[-0.045em]">
                            Demo Café
                          </h3>
                          <p className="mt-1 text-[11px] text-stone-500">
                            Customer menu preview
                          </p>
                        </div>

                        <span
                          role="img"
                          aria-label="Demo QR code"
                          className="grid h-10 w-10 shrink-0 grid-cols-5 gap-px rounded-md border border-stone-200 bg-white p-1"
                        >
                          {qrCells.map((cell, index) => (
                            <span
                              key={index}
                              className={
                                cell
                                  ? "bg-stone-900"
                                  : "bg-white"
                              }
                            />
                          ))}
                        </span>
                      </div>

                      <div className="mt-4 flex gap-2 overflow-x-auto [scrollbar-width:none]">
                        {["Coffee", "Food", "Dessert"].map(
                          (category, index) => (
                            <span
                              key={category}
                              className={`shrink-0 rounded-full px-3 py-1.5 text-[10px] font-bold ${
                                index === 0
                                  ? "bg-emerald-700 text-white"
                                  : "border border-stone-200 bg-white text-stone-500"
                              }`}
                            >
                              {category}
                            </span>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.09em] text-stone-400">
                            Coffee
                          </p>
                          <p className="mt-1 text-sm font-bold text-stone-800">
                            {visibleItems.length} visible products
                          </p>
                        </div>

                        <motion.span
                          key={`phone-sync-${syncPulse}`}
                          initial={
                            reduceMotion
                              ? false
                              : {
                                  opacity: 0.45,
                                }
                          }
                          animate={{
                            opacity: 1,
                          }}
                          className="inline-flex items-center gap-1.5 text-[9px] font-bold text-emerald-700"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          Updated
                        </motion.span>
                      </div>

                      <div className="mt-4 space-y-2.5">
                        <AnimatePresence initial={false}>
                          {visibleItems.map((item) => (
                            <motion.button
                              layout
                              key={item.id}
                              type="button"
                              onClick={() =>
                                setSelectedId(item.id)
                              }
                              initial={
                                reduceMotion
                                  ? false
                                  : {
                                      opacity: 0,
                                      y: 8,
                                    }
                              }
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              exit={
                                reduceMotion
                                  ? undefined
                                  : {
                                      opacity: 0,
                                      y: -8,
                                    }
                              }
                              className={`flex w-full items-center justify-between gap-3 rounded-xl border p-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${
                                selectedId === item.id
                                  ? "border-emerald-200 bg-emerald-50"
                                  : "border-stone-200 bg-white"
                              }`}
                            >
                              <div className="min-w-0">
                                <p className="truncate text-sm font-extrabold text-stone-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-[10px] text-stone-500">
                                  {item.category}
                                </p>
                              </div>

                              <motion.p
                                key={`${item.id}-${item.price}`}
                                initial={
                                  reduceMotion
                                    ? false
                                    : {
                                        opacity: 0,
                                        scale: 0.92,
                                      }
                                }
                                animate={{
                                  opacity: 1,
                                  scale: 1,
                                }}
                                className="text-sm font-extrabold text-emerald-800"
                              >
                                {peso.format(item.price)}
                              </motion.p>
                            </motion.button>
                          ))}
                        </AnimatePresence>
                      </div>

                      {visibleItems.length === 0 ? (
                        <div className="mt-4 rounded-xl border border-dashed border-stone-300 p-5 text-center">
                          <p className="text-xs font-bold text-stone-500">
                            No Coffee products are currently visible.
                          </p>
                        </div>
                      ) : null}

                      {selected.available ? (
                        <motion.div
                          key={`${selectedId}-${largeSize}-${oatMilk}`}
                          initial={
                            reduceMotion
                              ? false
                              : {
                                  opacity: 0,
                                  y: 8,
                                }
                          }
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4"
                        >
                          <div className="flex items-baseline justify-between gap-3">
                            <div>
                              <p className="text-[9px] font-bold uppercase tracking-[0.09em] text-emerald-700">
                                Selected item
                              </p>
                              <p className="mt-1 text-base font-extrabold text-emerald-950">
                                {selected.name}
                              </p>
                            </div>
                            <p className="text-sm font-extrabold text-emerald-900">
                              {peso.format(selected.price)}
                            </p>
                          </div>

                          <div className="mt-4">
                            <p className="text-[10px] font-extrabold text-emerald-950">
                              Size
                            </p>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              <span className="rounded-md border border-emerald-200 bg-white px-2.5 py-1.5 text-[9px] font-bold text-emerald-900">
                                Small
                              </span>
                              <span className="rounded-md bg-emerald-700 px-2.5 py-1.5 text-[9px] font-bold text-white">
                                Medium
                              </span>
                              {largeSize ? (
                                <span className="rounded-md border border-emerald-200 bg-white px-2.5 py-1.5 text-[9px] font-bold text-emerald-900">
                                  Large
                                </span>
                              ) : null}
                            </div>
                          </div>

                          <div className="mt-4">
                            <p className="text-[10px] font-extrabold text-emerald-950">
                              Milk
                            </p>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              <span className="rounded-md border border-emerald-200 bg-white px-2.5 py-1.5 text-[9px] font-bold text-emerald-900">
                                Regular
                              </span>
                              {oatMilk ? (
                                <span className="rounded-md border border-emerald-200 bg-white px-2.5 py-1.5 text-[9px] font-bold text-emerald-900">
                                  Oat +₱20
                                </span>
                              ) : null}
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <div className="mt-5 rounded-2xl border border-stone-200 bg-stone-100 p-4 text-center">
                          <p className="text-xs font-bold text-stone-500">
                            {selected.name} is hidden from the customer
                            menu.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-[780px] text-center text-xs leading-5 text-stone-500">
          Marketing simulation only. It demonstrates the relationship between
          catalog data and Smart Menu presentation; it does not publish changes,
          accept orders, or process payments.
        </p>
      </div>
    </section>
  );
}


