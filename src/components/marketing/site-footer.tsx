import Link from "next/link";

import { TindioMark } from "@/components/brand/tindio-mark";
import { publicNavigation } from "@/lib/public-navigation";

type FooterGroup = {
  title: string;
  links?: readonly {
    label: string;
    href: string;
  }[];
  details?: readonly string[];
};

const footerGroups: FooterGroup[] = [
  {
    title: "Product",
    links: publicNavigation.product,
  },
  {
    title: "Solutions",
    links: publicNavigation.solutions,
  },
  {
    title: "Resources",
    links: publicNavigation.resources,
  },
  {
    title: "Company",
    links: publicNavigation.company,
    details: [publicNavigation.planned.contact],
  },
  {
    title: "Legal",
    details: publicNavigation.planned.legal,
  },
];

export function SiteFooter() {
  return (
    <footer
      id="resources"
      className="border-t border-stone-200 bg-[#f4f4f0]"
    >
      <div className="mx-auto max-w-[1440px] px-5 pb-7 pt-14 sm:px-8 lg:px-12 lg:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_3fr] lg:gap-16">
          <div>
            <TindioMark />
            <p className="mt-4 max-w-[28ch] text-sm leading-6 text-stone-600">
              Connected tools for selling, stock, stores, employees, customers,
              and the everyday work around them.
            </p>

            <p className="mt-5 max-w-[30ch] text-xs leading-5 text-stone-500">
              Pricing, contact channels, login destinations, and formal
              compliance claims are published only when verified and ready.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-5">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-xs font-bold uppercase tracking-[0.09em] text-stone-950">
                  {group.title}
                </h2>

                <ul className="mt-4 space-y-3">
                  {group.links?.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-stone-600 transition-colors hover:text-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}

                  {group.details?.map((detail) => (
                    <li
                      key={detail}
                      className="text-sm leading-6 text-stone-400"
                      title={`${detail} is not connected yet`}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-stone-200 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {"\u00A9"} {new Date().getFullYear()} TINDIO. All rights reserved.
          </p>
          <p>Built for the everyday business.</p>
        </div>
      </div>
    </footer>
  );
}
