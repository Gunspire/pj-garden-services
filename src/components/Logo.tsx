import { cn } from "../lib/cn";
import { SITE } from "../lib/site";

type LogoProps = {
  className?: string;
  alt?: string;
  variant?: "default" | "inverse";
};

function LeafMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M20.5 3.5c-7.7.2-13.7 3.7-16.8 9.2C1.7 16.4 4 20.2 8 20.4c5.5.3 10.8-4.6 11.5-10.9.2-2 .2-4.1 1-6z"
        fill="currentColor"
        opacity="0.95"
      />
      <path
        d="M6 18c2.4-4.5 7.1-7.8 12.8-9.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.65"
      />
    </svg>
  );
}

export function Logo({ className, alt = SITE.companyName, variant = "default" }: LogoProps) {
  const inverse = variant === "inverse";
  return (
    <div
      aria-label={alt}
      className={cn("inline-flex items-center gap-3 select-none", className)}
      role="img"
    >
      <div
        className={cn(
          "h-11 w-11 rounded-2xl border flex items-center justify-center shrink-0",
          inverse ? "bg-white/10 border-white/15 text-emerald-200" : "bg-emerald-50 border-emerald-100 text-emerald-700"
        )}
      >
        <LeafMark className="h-6 w-6" />
      </div>
      <div className="leading-tight">
        <div className={cn("text-base sm:text-lg font-extrabold tracking-tight", inverse ? "text-white" : "text-slate-900")}>
          PJ <span className={cn(inverse ? "text-emerald-200" : "text-emerald-600")}>Garden</span>
        </div>
        <div className={cn("text-[11px] sm:text-xs font-semibold", inverse ? "text-white/70" : "text-slate-500")}>
          Services
        </div>
      </div>
    </div>
  );
}


