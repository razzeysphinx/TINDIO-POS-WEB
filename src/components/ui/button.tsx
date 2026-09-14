import type {
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "href"
> & {
  href: string;
  children: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "ghost"
    | "dark"
    | "emeraldOutline";
  size?: "default" | "sm" | "lg";
};

const variants = {
  primary:
    "bg-emerald-700 text-white shadow-[0_12px_25px_rgba(4,120,87,0.18)] hover:bg-emerald-800 hover:shadow-[0_16px_34px_rgba(4,120,87,0.22)]",
  secondary:
    "border border-stone-300 bg-white text-stone-950 shadow-sm hover:border-stone-400 hover:bg-stone-50 hover:shadow-md",
  ghost:
    "text-stone-700 hover:bg-stone-100 hover:text-stone-950",
  dark:
    "bg-stone-950 text-white shadow-[0_12px_28px_rgba(28,25,23,0.16)] hover:bg-stone-800 hover:shadow-[0_16px_34px_rgba(28,25,23,0.2)]",
  emeraldOutline:
    "border border-emerald-300 bg-transparent text-white shadow-none hover:border-emerald-100 hover:bg-emerald-700",
};

const sizes = {
  default: "h-11 px-5 text-sm",
  sm: "h-9 px-3.5 text-sm",
  lg: "h-12 px-6 text-sm",
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-[transform,background-color,border-color,color,box-shadow] duration-200 ease-out hover:-translate-y-px active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 [&>svg]:transition-transform [&>svg]:duration-200 hover:[&>svg]:translate-x-0.5",
    variants[variant],
    sizes[size],
    className,
  );

  const isInternal =
    href.startsWith("/") && !href.startsWith("//");

  if (isInternal) {
    return (
      <Link
        href={href}
        className={classes}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...props}
    >
      {children}
    </a>
  );
}
