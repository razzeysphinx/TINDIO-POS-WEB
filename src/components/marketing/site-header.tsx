"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { TindioMark } from "@/components/brand/tindio-mark";
import { LoginAction } from "@/components/marketing/login-action";
import { Button } from "@/components/ui/button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { publicCtaDestinations, publicNavigation, publicRoutes } from "@/lib/public-navigation";
import { cn } from "@/lib/utils";

type OpenDesktopMenu = "product" | "resources" | null;
type OpenMobileSection = "product" | "resources" | null;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<OpenDesktopMenu>(null);
  const [openMobileSection, setOpenMobileSection] = useState<OpenMobileSection>(null);
  const productDesktopTriggerRef = useRef<HTMLButtonElement>(null);
  const resourcesDesktopTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuTriggerRef = useRef<HTMLButtonElement>(null);
  const productMobileTriggerRef = useRef<HTMLButtonElement>(null);
  const resourcesMobileTriggerRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDesktopMenu(null);
    setOpenMobileSection(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      if (openDesktopMenu === "product") productDesktopTriggerRef.current?.focus();
      if (openDesktopMenu === "resources") resourcesDesktopTriggerRef.current?.focus();
      if (isOpen && openMobileSection === "product") productMobileTriggerRef.current?.focus();
      if (isOpen && openMobileSection === "resources") resourcesMobileTriggerRef.current?.focus();
      if (isOpen && !openMobileSection) mobileMenuTriggerRef.current?.focus();
      setIsOpen(false);
      setOpenDesktopMenu(null);
      setOpenMobileSection(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, openDesktopMenu, openMobileSection]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#fbfbf8]/90 backdrop-blur-lg">
      <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href={publicRoutes.homeTop} aria-label="TINDIO home" onClick={closeMenu}>
          <TindioMark size="header" />
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
          <div className="relative">
            <button
              type="button"
              ref={productDesktopTriggerRef}
              aria-expanded={openDesktopMenu === "product"}
              aria-controls="product-navigation"
              className="inline-flex items-center gap-1.5 rounded-md px-3.5 py-2.5 text-[15px] font-medium text-stone-600 transition-colors hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              onClick={() => setOpenDesktopMenu((menu) => menu === "product" ? null : "product")}
            >
              Product <span aria-hidden="true" className="text-xs">⌄</span>
            </button>
            {openDesktopMenu === "product" ? (
              <div id="product-navigation" className="absolute left-0 top-[calc(100%+8px)] w-52 rounded-xl border border-stone-200 bg-white p-1.5 shadow-[0_18px_38px_rgba(28,25,23,0.12)]">
                {publicNavigation.product.map((item) => (
                  <Link key={item.href} href={item.href} onClick={closeMenu} className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-stone-800 transition-colors hover:bg-emerald-50 hover:text-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">
                    {item.label} <span aria-hidden="true" className="text-emerald-700">→</span>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <span aria-disabled="true" className="rounded-md px-3.5 py-2.5 text-[15px] font-medium text-stone-400" title="Solutions pages are coming soon">Solutions</span>
          <span aria-disabled="true" className="rounded-md px-3.5 py-2.5 text-[15px] font-medium text-stone-400" title="Pricing is coming soon">Pricing</span>
          <div className="relative">
            <button ref={resourcesDesktopTriggerRef} type="button" aria-expanded={openDesktopMenu === "resources"} aria-controls="resources-navigation" className="inline-flex items-center gap-1.5 rounded-md px-3.5 py-2.5 text-[15px] font-medium text-stone-600 transition-colors hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700" onClick={() => setOpenDesktopMenu((menu) => menu === "resources" ? null : "resources")}>Resources <span aria-hidden="true" className="text-xs">⌄</span></button>
            {openDesktopMenu === "resources" ? <div id="resources-navigation" className="absolute left-0 top-[calc(100%+8px)] w-52 rounded-xl border border-stone-200 bg-white p-1.5 shadow-[0_18px_38px_rgba(28,25,23,0.12)]">{publicNavigation.resources.map((item) => <Link key={item.href} href={item.href} onClick={closeMenu} className="flex rounded-lg px-3 py-2.5 text-sm font-semibold text-stone-800 transition-colors hover:bg-emerald-50 hover:text-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">{item.label}</Link>)}</div> : null}
          </div>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LoginAction variant="ghost" />
          <Button href={publicCtaDestinations.getStarted}>Get Started</Button>
        </div>

        <button
          type="button"
          ref={mobileMenuTriggerRef}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-stone-900 transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => { setIsOpen((open) => !open); setOpenMobileSection(null); }}
        >
          {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      <div id="mobile-navigation" aria-hidden={!isOpen} inert={!isOpen} className={cn("overflow-hidden border-stone-200 bg-[#fbfbf8] transition-[max-height] duration-300 md:hidden", isOpen ? "max-h-[900px] border-t" : "max-h-0")}>
        <nav className="mx-auto flex max-w-[1440px] flex-col gap-1 px-5 py-4 sm:px-8 lg:px-12" aria-label="Mobile navigation">
          <div>
            <button
              type="button"
              ref={productMobileTriggerRef}
              aria-expanded={openMobileSection === "product"}
              aria-controls="mobile-product-navigation"
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold text-stone-700 hover:bg-stone-100 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              onClick={() => setOpenMobileSection((section) => section === "product" ? null : "product")}
            >
              Product <span aria-hidden="true" className="text-base text-stone-500">{openMobileSection === "product" ? "−" : "+"}</span>
            </button>
            {openMobileSection === "product" ? (
              <div id="mobile-product-navigation" className="ml-3 border-l border-emerald-200 pl-2">
                {publicNavigation.product.map((item) => <Link key={item.href} href={item.href} onClick={closeMenu} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">{item.label}</Link>)}
              </div>
            ) : null}
          </div>
          <span aria-disabled="true" className="rounded-lg px-3 py-3 text-sm font-semibold text-stone-400">Solutions</span>
          <span aria-disabled="true" className="rounded-lg px-3 py-3 text-sm font-semibold text-stone-400">Pricing</span>
          <div>
            <button ref={resourcesMobileTriggerRef} type="button" aria-expanded={openMobileSection === "resources"} aria-controls="mobile-resources-navigation" className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold text-stone-700 hover:bg-stone-100 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700" onClick={() => setOpenMobileSection((section) => section === "resources" ? null : "resources")}>Resources <span aria-hidden="true" className="text-base text-stone-500">{openMobileSection === "resources" ? "−" : "+"}</span></button>
            {openMobileSection === "resources" ? <div id="mobile-resources-navigation" className="ml-3 border-l border-emerald-200 pl-2">{publicNavigation.resources.map((item) => <Link key={item.href} href={item.href} onClick={closeMenu} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">{item.label}</Link>)}</div> : null}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-stone-200 pt-4">
            <LoginAction variant="secondary" />
            <Button href={publicCtaDestinations.getStarted} onClick={closeMenu}>Get Started</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
