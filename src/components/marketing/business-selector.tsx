"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { solutionRoutes } from "@/lib/solution-data";

const businessTypes = {
  retail: {
    label: "Retail",
    title: "Keep the counter fast and the back office connected.",
    description:
      "Sell, scan, track stock, understand customers, and keep reporting connected without turning everyday work into a complicated process.",
    capabilities: [
      "Point of Sale",
      "Barcode",
      "Inventory",
      "Customers",
      "Loyalty",
      "Reports",
    ],
    href: solutionRoutes.retail,
    action: "Explore Retail",
  },

  restaurant: {
    label: "Restaurant & Café",
    title: "Connect the order from the counter to the customer menu.",
    description:
      "Keep modifiers, dining-oriented workflows, employee access, reporting, and Smart Menu presentation connected to the same product system.",
    capabilities: [
      "Point of Sale",
      "Modifiers",
      "Dining",
      "Open Tickets",
      "Employee Access",
      "Smart Menu",
    ],
    href: solutionRoutes.restaurantCafe,
    action: "Explore Restaurant & Café",
  },

  grocery: {
    label: "Grocery / Convenience",
    title: "Move quickly without losing sight of stock.",
    description:
      "Keep checkout focused while barcode workflows, inventory visibility, low-stock awareness, employee access, and reports stay close behind.",
    capabilities: [
      "Barcode",
      "Fast Checkout",
      "Inventory",
      "Low Stock",
      "Employee Access",
      "Reports",
    ],
    href: solutionRoutes.groceryConvenience,
    action: "Explore Grocery / Convenience",
  },

  multiStore: {
    label: "Multi-Store",
    title: "See the whole business without losing each branch.",
    description:
      "Compare stores, control access, move inventory, and understand performance from one central view while each location keeps operating.",
    capabilities: [
      "Central Dashboard",
      "Store Inventory",
      "Transfers",
      "Employees",
      "Approvals",
      "Consolidated Reports",
    ],
    href: solutionRoutes.multiStore,
    action: "Explore Multi-Store",
  },
} as const;

type BusinessType = keyof typeof businessTypes;

export function BusinessSelector() {
  const [activeType, setActiveType] =
    useState<BusinessType>("retail");
  const reduceMotion = useReducedMotion();

  const active = businessTypes[activeType];

  return (
    <section
      id="business-types"
      className="border-y border-stone-200 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="eyebrow">Built around your business</p>
          <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.055em] text-stone-950 sm:text-5xl">
            One TINDIO. Different ways to operate.
          </h2>
          <p className="mx-auto mt-5 max-w-[660px] text-pretty text-lg leading-7 text-stone-600">
            Start with the workflow that matches your business, then use the
            same connected system as your operation grows.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Business type"
          className="mx-auto mt-10 flex max-w-[880px] gap-2 overflow-x-auto rounded-2xl border border-stone-200 bg-[#f7f7f4] p-2 [scrollbar-width:none]"
        >
          {(
            Object.entries(businessTypes) as [
              BusinessType,
              (typeof businessTypes)[BusinessType],
            ][]
          ).map(([key, item]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={activeType === key}
              onClick={() => setActiveType(key)}
              className={`relative min-h-11 shrink-0 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 sm:flex-1 ${
                activeType === key
                  ? "text-white"
                  : "text-stone-600 hover:bg-white hover:text-stone-950"
              }`}
            >
              {activeType === key ? (
                <motion.span
                  layoutId="business-selector-active"
                  className="absolute inset-0 -z-10 rounded-xl bg-emerald-700"
                  transition={{
                    duration: reduceMotion ? 0 : 0.24,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              ) : null}

              {item.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-[1040px] overflow-hidden rounded-[24px] border border-stone-200 bg-[#fbfbf8] shadow-[0_24px_70px_rgba(28,25,23,0.08)]">
          <AnimatePresence
            mode="wait"
            initial={false}
          >
            <motion.div
              key={activeType}
              role="tabpanel"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 10,
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
              transition={{
                duration: reduceMotion ? 0 : 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-10"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-emerald-800">
                  {active.label}
                </p>
                <h3 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-stone-950 sm:text-4xl">
                  {active.title}
                </h3>
                <p className="mt-4 max-w-[560px] text-base leading-7 text-stone-600">
                  {active.description}
                </p>

                <Button
                  href={active.href}
                  className="mt-6"
                >
                  {active.action}
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {active.capabilities.map(
                  (capability, index) => (
                    <motion.div
                      key={capability}
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
                      transition={{
                        duration: reduceMotion ? 0 : 0.28,
                        delay: reduceMotion
                          ? 0
                          : index * 0.035,
                      }}
                      className="flex min-h-16 items-center gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-sm"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-sm font-extrabold text-emerald-800">
                        {String(index + 1).padStart(
                          2,
                          "0",
                        )}
                      </span>
                      <span className="text-sm font-bold text-stone-800">
                        {capability}
                      </span>
                    </motion.div>
                  ),
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
