import type { ReactNode } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type AppFrameProps = {
  children?: ReactNode;
  className?: string;
  title: string;
  screenshotSrc?: string;
  screenshotAlt?: string;
  screenshotHeight?: number;
  screenshotWidth?: number;
  priority?: boolean;
};

/**
 * Screenshot-ready product shell. Pass `screenshotSrc` once approved TINDIO
 * product imagery is available, or compose the preview with children for now.
 */
export function AppFrame({
  children,
  className,
  title,
  screenshotSrc,
  screenshotAlt,
  screenshotHeight = 900,
  screenshotWidth = 1600,
  priority = false,
}: AppFrameProps) {
  return (
    <div className={cn("overflow-hidden rounded-[14px] border border-stone-300/80 bg-white shadow-[0_24px_60px_rgba(28,25,23,0.15)]", className)}>
      <div className="flex h-9 items-center gap-1.5 border-b border-stone-200 bg-stone-50 px-3.5">
        <span className="h-2 w-2 rounded-full bg-stone-300" />
        <span className="h-2 w-2 rounded-full bg-stone-300" />
        <span className="h-2 w-2 rounded-full bg-stone-300" />
        <span className="ml-2 truncate text-[10px] font-medium text-stone-500">{title}</span>
      </div>
      {screenshotSrc ? (
        <Image
          src={screenshotSrc}
          alt={screenshotAlt ?? title}
          width={screenshotWidth}
          height={screenshotHeight}
          priority={priority}
          sizes={priority ? "(min-width: 1280px) 1380px, (min-width: 768px) 92vw, 100vw" : "(min-width: 1024px) 760px, (min-width: 640px) 90vw, 100vw"}
          className="block h-auto w-full"
        />
      ) : children}
    </div>
  );
}

export function BackOfficePreview() {
  return (
    <div className="screenshot-surface screenshot-surface--backoffice min-h-[300px] sm:min-h-[430px] lg:min-h-[560px]" aria-hidden="true">
      <span className="absolute -left-[10%] top-[16%] h-[46%] w-[42%] rounded-full bg-emerald-200/55 blur-3xl" />
      <span className="absolute right-[6%] top-[10%] h-[25%] w-[25%] rounded-full bg-emerald-100 blur-3xl" />
      <span className="absolute bottom-[-14%] left-[32%] h-[46%] w-[45%] rounded-full bg-stone-200/90 blur-3xl" />
    </div>
  );
}

export function PosPreview() {
  return (
    <div className="screenshot-surface screenshot-surface--pos min-h-[152px] sm:min-h-[220px]" aria-hidden="true">
      <span className="absolute left-[9%] top-[16%] h-[57%] w-[50%] rounded-full bg-emerald-200/70 blur-3xl" />
      <span className="absolute bottom-[-20%] right-[0%] h-[65%] w-[60%] rounded-full bg-stone-200 blur-3xl" />
    </div>
  );
}
