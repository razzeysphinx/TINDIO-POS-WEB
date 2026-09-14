import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark" | "emeraldOutline";
  size?: "default" | "sm" | "lg";
};

const variants = {
  primary: "bg-emerald-700 text-white shadow-[0_12px_25px_rgba(4,120,87,0.18)] hover:bg-emerald-800",
  secondary: "border border-stone-300 bg-white text-stone-950 shadow-sm hover:border-stone-400 hover:bg-stone-50",
  ghost: "text-stone-700 hover:bg-stone-100 hover:text-stone-950",
  dark: "bg-stone-950 text-white hover:bg-stone-800",
  emeraldOutline: "border border-emerald-300 bg-transparent text-white shadow-none hover:border-emerald-100 hover:bg-emerald-700",
};

const sizes = {
  default: "h-11 px-5 text-sm",
  sm: "h-9 px-3.5 text-sm",
  lg: "h-12 px-6 text-sm",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
