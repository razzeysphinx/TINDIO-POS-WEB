import { ArrowRightIcon } from "@/components/ui/icons";

type FeaturePlaceholderProps = {
  title: string;
  description: string;
  tone?: "light" | "emerald" | "dark";
};

export function FeaturePlaceholder({ title, description, tone = "light" }: FeaturePlaceholderProps) {
  const styles = {
    light: "border-stone-200 bg-white",
    emerald: "border-emerald-100 bg-emerald-50/60",
    dark: "border-stone-800 bg-stone-950 text-white",
  };

  return (
    <article className={`group flex min-h-[218px] flex-col justify-between rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7 ${styles[tone]}`}>
      <div>
        <div className={`mb-8 h-9 w-9 rounded-lg ${tone === "dark" ? "bg-emerald-400/20" : "bg-emerald-100"}`}>
          <div className={`m-3 h-3 w-3 rounded-sm ${tone === "dark" ? "bg-emerald-300" : "bg-emerald-700"}`} />
        </div>
        <h3 className="text-xl font-bold tracking-[-0.035em]">{title}</h3>
        <p className={`mt-3 max-w-[29ch] text-sm leading-6 ${tone === "dark" ? "text-stone-300" : "text-stone-600"}`}>{description}</p>
      </div>
      <span className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold ${tone === "dark" ? "text-emerald-300" : "text-emerald-800"}`}>
        Explore <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </article>
  );
}
