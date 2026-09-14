function normalizeSiteUrl(value: string | undefined) {
  const candidate = value?.trim();

  if (!candidate) {
    return null;
  }

  try {
    const url = new URL(candidate);

    if (url.protocol !== "https:" && url.protocol !== "http:") {
      return null;
    }

    return url.origin;
  } catch {
    return null;
  }
}

export const siteConfig = {
  name: "TINDIO",
  title: "TINDIO | Sell simple. Grow smarter.",
  description:
    "TINDIO brings sales, inventory, employees, stores, customers, and everyday business workflows together in one connected product experience.",
  siteUrl: normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL,
  ),
} as const;

export function absoluteSiteUrl(pathname = "/") {
  if (!siteConfig.siteUrl) {
    return null;
  }

  return new URL(pathname, siteConfig.siteUrl).toString();
}
