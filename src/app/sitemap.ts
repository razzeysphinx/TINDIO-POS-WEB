import type { MetadataRoute } from "next";

import { absoluteSiteUrl } from "@/lib/site-config";

const publicPaths = [
  "/",
  "/pos",
  "/inventory",
  "/multi-store",
  "/reports",
  "/employee-access",
  "/offline",
  "/loyalty",
  "/smart-menu",
  "/solutions",
  "/solutions/retail",
  "/solutions/restaurant-cafe",
  "/solutions/grocery-convenience",
  "/solutions/multi-store",
  "/resources",
  "/faq",
  "/security",
  "/get-started",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.flatMap((pathname) => {
    const url = absoluteSiteUrl(pathname);

    if (!url) {
      return [];
    }

    return [
      {
        url,
        changeFrequency:
          pathname === "/"
            ? ("weekly" as const)
            : ("monthly" as const),
        priority:
          pathname === "/"
            ? 1
            : pathname === "/get-started"
              ? 0.9
              : 0.8,
      },
    ];
  });
}
