"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { useMemo, useState } from "react";

type InventoryStepId =
  | "opening"
  | "received"
  | "sold"
  | "transferred"
  | "counted";

type Movement = {
  id: InventoryStepId;
  label: string;
  shortLabel: string;
  description: string;
  delta: number;
  mainStock: number;
  mallStock: number;
  reference: string;
  location: string;
  tone: "neutral" | "positive" | "negative" | "transfer";
};

const steps: Movement[] = [
  {
    id: "opening",
    label: "Opening Stock",
    shortLabel: "Opening",
    description:
      "The demo begins with 30 units at Main Branch and 28 units at Mall Branch.",
    delta: 0,
    mainStock: 30,
    mallStock: 28,
    reference: "Opening balance",
    location: "Main Branch",
    tone: "neutral",
  },
  {
    id: "received",
    label: "Received",
    shortLabel: "Receive",
    description:
      "A purchase order is received at Main Branch and adds 24 units to on-hand stock.",
    delta: 24,
    mainStock: 54,
    mallStock: 28,
    reference: "PO MAIN-PO-DEMO-118",
    location: "Main Branch",
    tone: "positive",
  },
  {
    id: "sold",
    label: "Sold",
    shortLabel: "Sale",
    description:
      "Two units are sold at the register and the branch quantity decreases automatically in this simulation.",
    delta: -2,
    mainStock: 52,
    mallStock: 28,
    reference: "Receipt MAIN-R01-DEMO-428",
    location: "Main Branch",
    tone: "negative",
  },
  {
    id: "transferred",
    label: "Transferred",
    shortLabel: "Transfer",
    description:
      "Ten units move from Main Branch to Mall Branch. One location decreases while the other increases.",
    delta: -10,
    mainStock: 42,
    mallStock: 38,
    reference: "Transfer MAIN-ST-DEMO-042",
    location: "Main → Mall",
    tone: "transfer",
  },
  {
    id: "counted",
    label: "Count Adjustment",
    shortLabel: "Count",
    description:
      "A physical count finds one fewer unit than expected, leaving Main Branch with 41 units.",
    delta: -1,
    mainStock: 41,
    mallStock: 38,
    reference: "Count MAIN-COUNT-DEMO-017",
    location: "Main Branch",
    tone: "negative",
  },
];

function movementToneClasses(tone: Movement["tone"]) {
  if (tone === "positive") {
    return {
      badge: "bg-emerald-100 text-emerald-800",
      delta: "text-emerald-700",
      dot: "bg-emerald-500",
    };
  }

  if (tone === "negative") {
    return {
      badge: "bg-rose-50 text-rose-700",
      delta: "text-rose-700",
      dot: "bg-rose-400",
    };
  }

  if (tone === "transfer") {
    return {
      badge: "bg-sky-50 text-sky-700",
      delta: "text-sky-700",
      dot: "bg-sky-400",
    };
  }

  return {
    badge: "bg-stone-100 text-stone-600",
    delta: "text-stone-600",
    dot: "bg-stone-400",
  };
}

export function InteractiveInventoryExperience() {
  const [stepIndex, setStepIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const current = steps[stepIndex];
  const isLast = stepIndex === steps.length - 1;

  const completedMovements = useMemo(
    () => steps.slice(1, stepIndex + 1),
    [stepIndex],
  );

  function advance() {
    if (isLast) {
      setStepIndex(0);
      return;
    }

    setStepIndex((currentIndex) =>
      Math.min(currentIndex + 1, steps.length - 1),
    );
  }

  return (
    <section
      id="inventory-experience"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute left-[8%] top-20 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />
      <div className="absolute bottom-10 right-[6%] h-80 w-80 rounded-full bg-stone-200/70 blur-3xl" />
      <div className="premium-grid absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="eyebrow">Inventory Journey</p>
          <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] text-stone-950 sm:text-5xl">
            Watch every movement explain the stock on hand.
          </h2>
          <p className="mx-auto mt-5 max-w-[700px] text-pretty text-lg leading-7 text-stone-600">
            Step through a demo item from opening stock to receiving, sale,
            transfer, and physical count. Every movement stays visible instead
            of becoming a mystery number.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[1220px] overflow-hidden rounded-[26px] border border-stone-200 bg-[#fbfbf8] shadow-[0_30px_90px_rgba(28,25,23,0.1)]">
          <div className="flex min-h-14 flex-wrap items-center justify-between gap-3 border-b border-stone-200 bg-white px-4 py-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-[11px] font-black text-white">
                T
              </span>
              <div className="min-w-0">
                <p className="truncate text-xs font-bold text-stone-950">
                  TINDIO Inventory — Activity Demo
                </p>
                <p className="mt-0.5 text-[10px] text-stone-500">
                  Coca-Cola 500ml · SKU DEMO-CC-500
                </p>
              </div>
            </div>

            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1.5 text-[10px] font-extrabold tracking-[0.06em] text-emerald-800">
              DEMO DATA
            </span>
          </div>

          <div className="border-b border-stone-200 p-4 sm:p-5">
            <ol className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              {steps.map((step, index) => {
                const active = index === stepIndex;
                const complete = index < stepIndex;

                return (
                  <li key={step.id}>
                    <button
                      type="button"
                      onClick={() => setStepIndex(index)}
                      aria-current={active ? "step" : undefined}
                      className={`w-full rounded-xl border px-3 py-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${
                        active
                          ? "border-emerald-300 bg-emerald-50"
                          : complete
                            ? "border-stone-200 bg-white"
                            : "border-stone-200 bg-stone-50/70"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-black ${
                            active
                              ? "bg-emerald-700 text-white"
                              : complete
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-stone-200 text-stone-500"
                          }`}
                        >
                          {complete ? "✓" : index + 1}
                        </span>
                        <span
                          className={`text-[11px] font-bold ${
                            active
                              ? "text-emerald-900"
                              : "text-stone-600"
                          }`}
                        >
                          {step.shortLabel}
                        </span>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
            <div className="border-b border-stone-200 p-5 sm:p-6 lg:border-b-0 lg:border-r">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.id}
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
                    Current movement
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.05em] text-stone-950">
                    {current.label}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-stone-600">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-stone-400">
                    Main Branch
                  </p>
                  <motion.p
                    key={`main-${current.mainStock}`}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 0.9,
                          }
                    }
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="mt-2 text-3xl font-extrabold tracking-[-0.06em] text-stone-950"
                  >
                    {current.mainStock}
                  </motion.p>
                  <p className="mt-1 text-xs text-stone-500">
                    units on hand
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-stone-400">
                    Mall Branch
                  </p>
                  <motion.p
                    key={`mall-${current.mallStock}`}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 0.9,
                          }
                    }
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="mt-2 text-3xl font-extrabold tracking-[-0.06em] text-stone-950"
                  >
                    {current.mallStock}
                  </motion.p>
                  <p className="mt-1 text-xs text-stone-500">
                    units on hand
                  </p>
                </div>
              </div>

              {current.id === "transferred" ? (
                <motion.div
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
                  className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-2xl border border-sky-100 bg-sky-50 p-4"
                >
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-sky-700">
                      Main
                    </p>
                    <p className="mt-1 text-sm font-extrabold text-sky-950">
                      −10 units
                    </p>
                  </div>

                  <motion.span
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            x: [0, 5, 0],
                          }
                    }
                    transition={{
                      duration: 0.75,
                    }}
                    className="text-xl text-sky-700"
                    aria-hidden="true"
                  >
                    →
                  </motion.span>

                  <div className="text-right">
                    <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-sky-700">
                      Mall
                    </p>
                    <p className="mt-1 text-sm font-extrabold text-sky-950">
                      +10 units
                    </p>
                  </div>
                </motion.div>
              ) : null}

              <button
                type="button"
                onClick={advance}
                className="mt-5 min-h-12 w-full rounded-xl bg-emerald-700 px-4 text-sm font-extrabold text-white transition-[transform,background-color] duration-200 hover:-translate-y-px hover:bg-emerald-800 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                {isLast
                  ? "Restart inventory journey"
                  : `Next: ${steps[stepIndex + 1].label}`}
              </button>
            </div>

            <div className="bg-white p-5 sm:p-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.11em] text-stone-400">
                    Inventory ledger
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold tracking-[-0.035em] text-stone-950">
                    Every change explains the total.
                  </h3>
                </div>

                <span className="font-mono-tindio rounded-lg bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-800">
                  MAIN ON HAND · {current.mainStock}
                </span>
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl border border-stone-200">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 border-b border-stone-200 bg-stone-50 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.1em] text-stone-400">
                  <span>Movement</span>
                  <span>Quantity</span>
                </div>

                <div className="border-b border-stone-100 bg-white px-4 py-3.5">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-stone-400" />
                        <p className="text-sm font-bold text-stone-900">
                          Opening Stock
                        </p>
                      </div>
                      <p className="mt-1 truncate pl-4 text-[10px] text-stone-400">
                        Opening balance · Main Branch
                      </p>
                    </div>
                    <p className="text-sm font-extrabold text-stone-700">
                      30
                    </p>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {completedMovements.map((movement) => {
                    const tone = movementToneClasses(
                      movement.tone,
                    );

                    return (
                      <motion.div
                        key={movement.id}
                        initial={
                          reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                height: 0,
                              }
                        }
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={
                          reduceMotion
                            ? undefined
                            : {
                                opacity: 0,
                                height: 0,
                              }
                        }
                        transition={{
                          duration: reduceMotion ? 0 : 0.25,
                        }}
                        className="border-b border-stone-100 bg-white last:border-b-0"
                      >
                        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 px-4 py-3.5">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span
                                className={`h-2 w-2 shrink-0 rounded-full ${tone.dot}`}
                              />
                              <p className="text-sm font-bold text-stone-900">
                                {movement.label}
                              </p>
                            </div>
                            <p className="mt-1 truncate pl-4 text-[10px] text-stone-400">
                              {movement.reference} ·{" "}
                              {movement.location}
                            </p>
                          </div>

                          <p
                            className={`text-sm font-extrabold ${tone.delta}`}
                          >
                            {movement.delta > 0
                              ? `+${movement.delta}`
                              : movement.delta}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {completedMovements.length === 0 ? (
                  <div className="px-4 py-5 text-center text-xs text-stone-400">
                    Run the next movement to build the activity
                    ledger.
                  </div>
                ) : null}
              </div>

              <div className="mt-4 rounded-xl border border-stone-200 bg-[#fbfbf8] p-3.5">
                <p className="text-xs font-bold text-stone-800">
                  Why this matters
                </p>
                <p className="mt-1 text-[11px] leading-5 text-stone-500">
                  The quantity on hand is not presented as an isolated
                  number. Each receiving, sale, transfer, and count movement
                  remains part of the explanation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-[760px] text-center text-xs leading-5 text-stone-500">
          Marketing simulation only. No purchase order, sale, transfer, count,
          or inventory record is written by this component.
        </p>
      </div>
    </section>
  );
}


