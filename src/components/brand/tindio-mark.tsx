import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type TindioMarkProps = HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "header";
};

export function TindioMark({ className, size = "default", ...props }: TindioMarkProps) {
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)} {...props}>
      <svg className={cn("text-emerald-700", size === "header" ? "h-8 w-8" : "h-7 w-7")} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6.5 7.5h19v5.25h-6.88V25H13.38V12.75H6.5V7.5Z" fill="currentColor" />
        <path d="M20.62 18.12H25.5V25h-4.88v-6.88Z" fill="currentColor" opacity=".55" />
      </svg>
      <span className={cn("font-extrabold tracking-[-0.07em] text-stone-950", size === "header" ? "text-[1.45rem]" : "text-[1.3rem]")}>TINDIO</span>
    </div>
  );
}
