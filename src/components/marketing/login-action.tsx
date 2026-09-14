import { publicCtaDestinations } from "@/lib/public-navigation";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

type LoginActionProps = {
  className?: string;
  size?: "default" | "sm" | "lg";
  variant?: "primary" | "secondary" | "ghost" | "dark" | "emeraldOutline";
};

const unavailableVariants = {
  primary: "bg-emerald-100 text-emerald-800",
  secondary: "border border-stone-200 bg-stone-100 text-stone-400",
  ghost: "text-stone-400",
  dark: "bg-stone-200 text-stone-500",
  emeraldOutline: "border border-emerald-300/50 bg-transparent text-emerald-100/70",
};

const sizes = {
  default: "h-11 px-5 text-sm",
  sm: "h-9 px-3.5 text-sm",
  lg: "h-12 px-6 text-sm",
};

export function LoginAction({ className, size = "default", variant = "ghost" }: LoginActionProps) {
  if (publicCtaDestinations.login) {
    return <Button href={publicCtaDestinations.login} className={className} size={size} variant={variant}>Log in</Button>;
  }

  return <span aria-disabled="true" className={cn("inline-flex cursor-not-allowed items-center justify-center rounded-lg font-semibold opacity-80", unavailableVariants[variant], sizes[size], className)} title="Login destination is not configured">Log in</span>;
}
