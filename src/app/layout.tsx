import type {
  Metadata,
  Viewport,
} from "next";
import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import { SiteStructuredData } from "@/components/marketing/site-structured-data";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteConfig.siteUrl
    ? new URL(siteConfig.siteUrl)
    : undefined,

  title: siteConfig.title,

  description: siteConfig.description,

  applicationName: siteConfig.name,

  authors: [
    {
      name: "TINDIO",
    },
  ],

  creator: "TINDIO",

  publisher: "TINDIO",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    ...(siteConfig.siteUrl
      ? {
          url: siteConfig.siteUrl,
        }
      : {}),
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#047857",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <SiteStructuredData />
        {children}
      </body>
    </html>
  );
}
