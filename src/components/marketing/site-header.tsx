"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import { TindioMark } from "@/components/brand/tindio-mark";
import { LoginAction } from "@/components/marketing/login-action";
import { Button } from "@/components/ui/button";
import {
  CloseIcon,
  MenuIcon,
} from "@/components/ui/icons";
import {
  publicCtaDestinations,
  publicNavigation,
  publicRoutes,
} from "@/lib/public-navigation";
import { cn } from "@/lib/utils";

type MenuName = "product" | "solutions" | "resources";
type OpenDesktopMenu = MenuName | null;
type OpenMobileSection = MenuName | null;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] =
    useState<OpenDesktopMenu>(null);
  const [openMobileSection, setOpenMobileSection] =
    useState<OpenMobileSection>(null);

  const reduceMotion = useReducedMotion();

  const productDesktopTriggerRef =
    useRef<HTMLButtonElement>(null);
  const solutionsDesktopTriggerRef =
    useRef<HTMLButtonElement>(null);
  const resourcesDesktopTriggerRef =
    useRef<HTMLButtonElement>(null);

  const mobileMenuTriggerRef =
    useRef<HTMLButtonElement>(null);
  const productMobileTriggerRef =
    useRef<HTMLButtonElement>(null);
  const solutionsMobileTriggerRef =
    useRef<HTMLButtonElement>(null);
  const resourcesMobileTriggerRef =
    useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setIsOpen(false);
    setOpenDesktopMenu(null);
    setOpenMobileSection(null);
  }

  function focusDesktopTrigger(menu: MenuName) {
    if (menu === "product") {
      productDesktopTriggerRef.current?.focus();
    }

    if (menu === "solutions") {
      solutionsDesktopTriggerRef.current?.focus();
    }

    if (menu === "resources") {
      resourcesDesktopTriggerRef.current?.focus();
    }
  }

  function focusMobileTrigger(menu: MenuName) {
    if (menu === "product") {
      productMobileTriggerRef.current?.focus();
    }

    if (menu === "solutions") {
      solutionsMobileTriggerRef.current?.focus();
    }

    if (menu === "resources") {
      resourcesMobileTriggerRef.current?.focus();
    }
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      if (openDesktopMenu) {
        focusDesktopTrigger(openDesktopMenu);
      }

      if (isOpen && openMobileSection) {
        focusMobileTrigger(openMobileSection);
      }

      if (isOpen && !openMobileSection) {
        mobileMenuTriggerRef.current?.focus();
      }

      setIsOpen(false);
      setOpenDesktopMenu(null);
      setOpenMobileSection(null);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, openDesktopMenu, openMobileSection]);

  const dropdownMotion = {
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          y: -5,
          scale: 0.985,
        },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: reduceMotion
      ? undefined
      : {
          opacity: 0,
          y: -4,
          scale: 0.99,
        },
    transition: {
      duration: reduceMotion ? 0 : 0.16,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#fbfbf8]/90 backdrop-blur-lg">
      <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href={publicRoutes.homeTop}
          aria-label="TINDIO home"
          onClick={closeMenu}
        >
          <TindioMark size="header" />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary navigation"
        >
          <div className="relative">
            <button
              type="button"
              ref={productDesktopTriggerRef}
              aria-expanded={openDesktopMenu === "product"}
              aria-controls="product-navigation"
              onClick={() =>
                setOpenDesktopMenu((current) =>
                  current === "product" ? null : "product",
                )
              }
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-2.5 text-[15px] font-medium text-stone-600 transition-colors hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              Product
              <span
                aria-hidden="true"
                className="text-xs"
              >
                ⌄
              </span>
            </button>

            <AnimatePresence>
              {openDesktopMenu === "product" ? (
                <motion.div
                  id="product-navigation"
                  {...dropdownMotion}
                  className="absolute left-0 top-[calc(100%+8px)] w-60 origin-top-left rounded-xl border border-stone-200 bg-white p-1.5 shadow-[0_18px_38px_rgba(28,25,23,0.12)]"
                >
                  {publicNavigation.product.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-stone-800 transition-colors hover:bg-emerald-50 hover:text-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className="text-emerald-700"
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <div className="relative">
            <button
              type="button"
              ref={solutionsDesktopTriggerRef}
              aria-expanded={openDesktopMenu === "solutions"}
              aria-controls="solutions-navigation"
              onClick={() =>
                setOpenDesktopMenu((current) =>
                  current === "solutions" ? null : "solutions",
                )
              }
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-2.5 text-[15px] font-medium text-stone-600 transition-colors hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              Solutions
              <span
                aria-hidden="true"
                className="text-xs"
              >
                ⌄
              </span>
            </button>

            <AnimatePresence>
              {openDesktopMenu === "solutions" ? (
                <motion.div
                  id="solutions-navigation"
                  {...dropdownMotion}
                  className="absolute left-0 top-[calc(100%+8px)] w-64 origin-top-left rounded-xl border border-stone-200 bg-white p-1.5 shadow-[0_18px_38px_rgba(28,25,23,0.12)]"
                >
                  {publicNavigation.solutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-stone-800 transition-colors hover:bg-emerald-50 hover:text-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className="text-emerald-700"
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <span
            aria-disabled="true"
            title="Pricing is not published yet"
            className="rounded-md px-3 py-2.5 text-[15px] font-medium text-stone-400"
          >
            Pricing
          </span>

          <div className="relative">
            <button
              type="button"
              ref={resourcesDesktopTriggerRef}
              aria-expanded={openDesktopMenu === "resources"}
              aria-controls="resources-navigation"
              onClick={() =>
                setOpenDesktopMenu((current) =>
                  current === "resources" ? null : "resources",
                )
              }
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-2.5 text-[15px] font-medium text-stone-600 transition-colors hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              Resources
              <span
                aria-hidden="true"
                className="text-xs"
              >
                ⌄
              </span>
            </button>

            <AnimatePresence>
              {openDesktopMenu === "resources" ? (
                <motion.div
                  id="resources-navigation"
                  {...dropdownMotion}
                  className="absolute right-0 top-[calc(100%+8px)] w-60 origin-top-right rounded-xl border border-stone-200 bg-white p-1.5 shadow-[0_18px_38px_rgba(28,25,23,0.12)]"
                >
                  {publicNavigation.resources.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-stone-800 transition-colors hover:bg-emerald-50 hover:text-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className="text-emerald-700"
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden items-center gap-2 sm:gap-3 lg:flex">
          <LoginAction variant="ghost" />
          <Button href={publicCtaDestinations.getStarted}>
            Get Started
          </Button>
        </div>

        <button
          type="button"
          ref={mobileMenuTriggerRef}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={
            isOpen ? "Close navigation" : "Open navigation"
          }
          onClick={() => {
            setIsOpen((open) => !open);
            setOpenMobileSection(null);
          }}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-stone-900 transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 lg:hidden"
        >
          {isOpen ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={cn(
          "overflow-hidden border-stone-200 bg-[#fbfbf8] transition-[max-height] duration-300 lg:hidden",
          isOpen
            ? "max-h-[1100px] border-t"
            : "max-h-0",
        )}
      >
        <nav
          className="mx-auto flex max-w-[1440px] flex-col gap-1 px-5 py-4 sm:px-8 lg:px-12"
          aria-label="Mobile navigation"
        >
          <div>
            <button
              type="button"
              ref={productMobileTriggerRef}
              aria-expanded={openMobileSection === "product"}
              aria-controls="mobile-product-navigation"
              onClick={() =>
                setOpenMobileSection((current) =>
                  current === "product" ? null : "product",
                )
              }
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold text-stone-700 hover:bg-stone-100 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              Product
              <span
                aria-hidden="true"
                className="text-base text-stone-500"
              >
                {openMobileSection === "product" ? "−" : "+"}
              </span>
            </button>

            {openMobileSection === "product" ? (
              <div
                id="mobile-product-navigation"
                className="ml-3 border-l border-emerald-200 pl-2"
              >
                {publicNavigation.product.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <div>
            <button
              type="button"
              ref={solutionsMobileTriggerRef}
              aria-expanded={openMobileSection === "solutions"}
              aria-controls="mobile-solutions-navigation"
              onClick={() =>
                setOpenMobileSection((current) =>
                  current === "solutions" ? null : "solutions",
                )
              }
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold text-stone-700 hover:bg-stone-100 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              Solutions
              <span
                aria-hidden="true"
                className="text-base text-stone-500"
              >
                {openMobileSection === "solutions"
                  ? "−"
                  : "+"}
              </span>
            </button>

            {openMobileSection === "solutions" ? (
              <div
                id="mobile-solutions-navigation"
                className="ml-3 border-l border-emerald-200 pl-2"
              >
                {publicNavigation.solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <span
            aria-disabled="true"
            className="rounded-lg px-3 py-3 text-sm font-semibold text-stone-400"
          >
            Pricing
          </span>

          <div>
            <button
              type="button"
              ref={resourcesMobileTriggerRef}
              aria-expanded={openMobileSection === "resources"}
              aria-controls="mobile-resources-navigation"
              onClick={() =>
                setOpenMobileSection((current) =>
                  current === "resources" ? null : "resources",
                )
              }
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold text-stone-700 hover:bg-stone-100 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              Resources
              <span
                aria-hidden="true"
                className="text-base text-stone-500"
              >
                {openMobileSection === "resources"
                  ? "−"
                  : "+"}
              </span>
            </button>

            {openMobileSection === "resources" ? (
              <div
                id="mobile-resources-navigation"
                className="ml-3 border-l border-emerald-200 pl-2"
              >
                {publicNavigation.resources.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-stone-200 pt-4">
            <LoginAction variant="secondary" />
            <Button
              href={publicCtaDestinations.getStarted}
              onClick={closeMenu}
            >
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
