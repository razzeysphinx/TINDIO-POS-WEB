"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  useMemo,
  useState,
} from "react";

const branches = [
  {
    id: "main",
    name: "Main Branch",
    subtitle: "Flagship location",
    sales: 250000,
    transactions: 380,
    lowStock: 4,
  },
  {
    id: "mall",
    name: "Mall Branch",
    subtitle: "Retail location",
    sales: 210000,
    transactions: 301,
    lowStock: 7,
  },
  {
    id: "airport",
    name: "Airport Branch",
    subtitle: "High-traffic location",
    sales: 120000,
    transactions: 161,
    lowStock: 3,
  },
] as const;

type BranchId = (typeof branches)[number]["id"];
type StoreSelection = "all" | BranchId;

const initialStock: Record<BranchId, number> = {
  main: 41,
  mall: 28,
  airport: 17,
};

const peso = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  maximumFractionDigits: 0,
});

function branchById(id: BranchId) {
  return branches.find((branch) => branch.id === id)!;
}

export function InteractiveMultiStoreExperience() {
  const [selectedStore, setSelectedStore] =
    useState<StoreSelection>("all");
  const [stock, setStock] =
    useState<Record<BranchId, number>>(initialStock);
  const [source, setSource] = useState<BranchId>("mall");
  const [destination, setDestination] =
    useState<BranchId>("main");
  const [quantity, setQuantity] = useState(10);
  const [transferMessage, setTransferMessage] =
    useState<string | null>(null);
  const [transferPulse, setTransferPulse] = useState(0);

  const reduceMotion = useReducedMotion();

  const aggregate = useMemo(() => {
    const sales = branches.reduce(
      (sum, branch) => sum + branch.sales,
      0,
    );
    const transactions = branches.reduce(
      (sum, branch) => sum + branch.transactions,
      0,
    );

    return {
      name: "All Stores",
      subtitle: `${branches.length} active branches`,
      sales,
      transactions,
      averageTicket: Math.round(sales / transactions),
      lowStock: branches.reduce(
        (sum, branch) => sum + branch.lowStock,
        0,
      ),
      stock: Object.values(stock).reduce(
        (sum, value) => sum + value,
        0,
      ),
    };
  }, [stock]);

  const selectedMetrics = useMemo(() => {
    if (selectedStore === "all") {
      return aggregate;
    }

    const branch = branchById(selectedStore);

    return {
      name: branch.name,
      subtitle: branch.subtitle,
      sales: branch.sales,
      transactions: branch.transactions,
      averageTicket: Math.round(
        branch.sales / branch.transactions,
      ),
      lowStock: branch.lowStock,
      stock: stock[branch.id],
    };
  }, [aggregate, selectedStore, stock]);

  const sourceBranch = branchById(source);
  const destinationBranch = branchById(destination);

  const sameBranch = source === destination;
  const insufficientStock = stock[source] < quantity;
  const canTransfer = !sameBranch && !insufficientStock;

  function clearFeedback() {
    setTransferMessage(null);
  }

  function performTransfer() {
    if (!canTransfer) {
      return;
    }

    setStock((current) => ({
      ...current,
      [source]: current[source] - quantity,
      [destination]: current[destination] + quantity,
    }));

    setTransferMessage(
      `${quantity} units moved from ${sourceBranch.name} to ${destinationBranch.name}.`,
    );
    setTransferPulse((value) => value + 1);
  }

  function resetDemo() {
    setSelectedStore("all");
    setStock(initialStock);
    setSource("mall");
    setDestination("main");
    setQuantity(10);
    setTransferMessage(null);
    setTransferPulse((value) => value + 1);
  }

  return (
    <section
      id="multi-store-experience"
      className="relative overflow-hidden bg-[#f5f6f2] py-20 sm:py-24 lg:py-28"
    >
      <div className="premium-grid absolute inset-0 opacity-40" />
      <div className="absolute left-[10%] top-16 h-72 w-72 rounded-full bg-emerald-200/35 blur-3xl" />
      <div className="absolute bottom-10 right-[8%] h-80 w-80 rounded-full bg-stone-300/45 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="eyebrow">Multi-Store Control</p>
          <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] text-stone-950 sm:text-5xl">
            Move from the whole business to one branch in a click.
          </h2>
          <p className="mx-auto mt-5 max-w-[700px] text-pretty text-lg leading-7 text-stone-600">
            Compare branch performance, drill into one location, then simulate
            moving stock between stores without leaving the same workspace.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[1220px] overflow-hidden rounded-[26px] border border-stone-200 bg-white shadow-[0_30px_90px_rgba(28,25,23,0.11)]">
          <div className="flex min-h-14 flex-wrap items-center justify-between gap-3 border-b border-stone-200 bg-[#fbfbf8] px-4 py-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-[11px] font-black text-white">
                T
              </span>
              <div className="min-w-0">
                <p className="truncate text-xs font-bold text-stone-950">
                  TINDIO Back Office — Multi-Store Demo
                </p>
                <p className="mt-0.5 text-[10px] text-stone-500">
                  Demo organization
                </p>
              </div>
            </div>

            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1.5 text-[10px] font-extrabold tracking-[0.06em] text-emerald-800">
              DEMO DATA
            </span>
          </div>

          <div className="border-b border-stone-200 p-4 sm:p-5">
            <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
              <button
                type="button"
                onClick={() => setSelectedStore("all")}
                className={`min-h-10 shrink-0 rounded-xl px-4 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${
                  selectedStore === "all"
                    ? "bg-emerald-700 text-white"
                    : "border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 hover:text-stone-950"
                }`}
              >
                All Stores
              </button>

              {branches.map((branch) => (
                <button
                  key={branch.id}
                  type="button"
                  onClick={() =>
                    setSelectedStore(branch.id)
                  }
                  className={`min-h-10 shrink-0 rounded-xl px-4 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${
                    selectedStore === branch.id
                      ? "bg-emerald-700 text-white"
                      : "border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 hover:text-stone-950"
                  }`}
                >
                  {branch.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="border-b border-stone-200 p-5 sm:p-6 lg:border-b-0 lg:border-r">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={selectedStore}
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
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.11em] text-emerald-700">
                    Performance view
                  </p>

                  <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-extrabold tracking-[-0.05em] text-stone-950">
                        {selectedMetrics.name}
                      </h3>
                      <p className="mt-1 text-xs text-stone-500">
                        {selectedMetrics.subtitle}
                      </p>
                    </div>

                    <span className="rounded-lg border border-stone-200 bg-stone-50 px-2.5 py-1.5 text-[10px] font-bold text-stone-500">
                      Current selection
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-stone-200 bg-[#fbfbf8] p-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-stone-400">
                        Net Sales
                      </p>
                      <p className="mt-2 text-xl font-extrabold tracking-[-0.04em] text-stone-950 sm:text-2xl">
                        {peso.format(selectedMetrics.sales)}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-stone-200 bg-[#fbfbf8] p-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-stone-400">
                        Transactions
                      </p>
                      <p className="mt-2 text-xl font-extrabold tracking-[-0.04em] text-stone-950 sm:text-2xl">
                        {selectedMetrics.transactions}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-stone-200 bg-[#fbfbf8] p-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-stone-400">
                        Average Ticket
                      </p>
                      <p className="mt-2 text-xl font-extrabold tracking-[-0.04em] text-stone-950 sm:text-2xl">
                        {peso.format(
                          selectedMetrics.averageTicket,
                        )}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-stone-200 bg-[#fbfbf8] p-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-stone-400">
                        Low Stock Alerts
                      </p>
                      <p className="mt-2 text-xl font-extrabold tracking-[-0.04em] text-stone-950 sm:text-2xl">
                        {selectedMetrics.lowStock}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200">
                <div className="grid grid-cols-[1fr_auto] gap-3 border-b border-stone-200 bg-stone-50 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.1em] text-stone-400">
                  <span>House Blend 1kg · branch stock</span>
                  <span>On Hand</span>
                </div>

                <ul className="divide-y divide-stone-100">
                  {branches.map((branch) => {
                    const selected =
                      selectedStore === branch.id;

                    return (
                      <li key={branch.id}>
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedStore(branch.id)
                          }
                          className={`grid w-full grid-cols-[1fr_auto] items-center gap-3 px-4 py-3.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-emerald-700 ${
                            selected
                              ? "bg-emerald-50/70"
                              : "bg-white hover:bg-stone-50"
                          }`}
                        >
                          <span className="flex min-w-0 items-center gap-2.5">
                            <span
                              className={`h-2 w-2 shrink-0 rounded-full ${
                                selected
                                  ? "bg-emerald-600"
                                  : "bg-stone-300"
                              }`}
                            />
                            <span className="truncate text-sm font-bold text-stone-800">
                              {branch.name}
                            </span>
                          </span>

                          <motion.span
                            key={`${branch.id}-${stock[branch.id]}-${transferPulse}`}
                            initial={
                              reduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    scale: 0.88,
                                  }
                            }
                            animate={{
                              opacity: 1,
                              scale: 1,
                            }}
                            className="font-mono-tindio text-sm font-black text-stone-950"
                          >
                            {stock[branch.id]}
                          </motion.span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="bg-[#fbfbf8] p-5 sm:p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.11em] text-emerald-700">
                Stock transfer simulator
              </p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.05em] text-stone-950">
                Move stock between branches.
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                Use the demo SKU below to see branch stock change at both the
                source and destination.
              </p>

              <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-4 sm:p-5">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-stone-400">
                    Demo item
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-extrabold text-stone-950">
                        House Blend 1kg
                      </p>
                      <p className="mt-1 text-xs text-stone-500">
                        SKU · DEMO-HB-1KG
                      </p>
                    </div>

                    <span className="rounded-lg bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-800">
                      Tracked
                    </span>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[10px] font-bold uppercase tracking-[0.09em] text-stone-500">
                      From
                    </span>
                    <select
                      value={source}
                      onChange={(event) => {
                        setSource(
                          event.target.value as BranchId,
                        );
                        clearFeedback();
                      }}
                      className="mt-2 min-h-11 w-full rounded-xl border border-stone-200 bg-white px-3 text-sm font-bold text-stone-800 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                    >
                      {branches.map((branch) => (
                        <option
                          key={branch.id}
                          value={branch.id}
                        >
                          {branch.name}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-[10px] font-bold uppercase tracking-[0.09em] text-stone-500">
                      To
                    </span>
                    <select
                      value={destination}
                      onChange={(event) => {
                        setDestination(
                          event.target.value as BranchId,
                        );
                        clearFeedback();
                      }}
                      className="mt-2 min-h-11 w-full rounded-xl border border-stone-200 bg-white px-3 text-sm font-bold text-stone-800 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                    >
                      {branches.map((branch) => (
                        <option
                          key={branch.id}
                          value={branch.id}
                        >
                          {branch.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="mt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.09em] text-stone-500">
                    Quantity
                  </p>

                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {[5, 10, 20].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setQuantity(amount);
                          clearFeedback();
                        }}
                        className={`min-h-10 rounded-xl border text-sm font-extrabold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${
                          quantity === amount
                            ? "border-emerald-700 bg-emerald-700 text-white"
                            : "border-stone-200 bg-white text-stone-600 hover:bg-stone-50 hover:text-stone-950"
                        }`}
                      >
                        {amount}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-xl bg-stone-50 p-3.5">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">
                      {sourceBranch.name}
                    </p>
                    <p className="mt-1 text-lg font-extrabold text-stone-950">
                      {stock[source]}
                    </p>
                  </div>

                  <span
                    className="text-xl text-emerald-700"
                    aria-hidden="true"
                  >
                    →
                  </span>

                  <div className="text-right">
                    <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-stone-400">
                      {destinationBranch.name}
                    </p>
                    <p className="mt-1 text-lg font-extrabold text-stone-950">
                      {stock[destination]}
                    </p>
                  </div>
                </div>

                {sameBranch ? (
                  <p className="mt-3 text-xs font-semibold text-amber-700">
                    Choose two different branches.
                  </p>
                ) : insufficientStock ? (
                  <p className="mt-3 text-xs font-semibold text-amber-700">
                    Only {stock[source]} units are available at{" "}
                    {sourceBranch.name}.
                  </p>
                ) : null}

                <button
                  type="button"
                  disabled={!canTransfer}
                  onClick={performTransfer}
                  className="mt-5 min-h-12 w-full rounded-xl bg-emerald-700 px-4 text-sm font-extrabold text-white transition-[transform,background-color] duration-200 hover:-translate-y-px hover:bg-emerald-800 active:translate-y-0 disabled:cursor-not-allowed disabled:bg-stone-200 disabled:text-stone-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                >
                  Transfer {quantity} units
                </button>

                <AnimatePresence initial={false}>
                  {transferMessage ? (
                    <motion.div
                      key={transferPulse}
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
                            }
                      }
                      className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5"
                    >
                      <p className="text-xs font-extrabold text-emerald-900">
                        ✓ Transfer complete
                      </p>
                      <p className="mt-1 text-[11px] leading-5 text-emerald-800/80">
                        {transferMessage}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <button
                  type="button"
                  onClick={resetDemo}
                  className="mt-3 min-h-10 w-full rounded-xl border border-stone-200 bg-white px-4 text-xs font-bold text-stone-600 transition-colors hover:bg-stone-50 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                >
                  Reset multi-store demo
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-[760px] text-center text-xs leading-5 text-stone-500">
          Marketing simulation only. The branch metrics, item, and stock counts
          are demo data and do not write to TINDIO inventory.
        </p>
      </div>
    </section>
  );
}


