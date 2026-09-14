import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TINDIO | Sell simple. Grow smarter.",
  description: "TINDIO brings sales, inventory, employees and stores together in one place.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
