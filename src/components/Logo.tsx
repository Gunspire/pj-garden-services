import { cn } from "../lib/cn";
import { SITE } from "../lib/site";

type LogoProps = {
  className?: string;
  alt?: string;
  variant?: "default" | "inverse";
};

export function Logo({ className, alt = SITE.companyName, variant = "default" }: LogoProps) {
  const inverse = variant === "inverse";
  return (
    <img
      src="/8f7121be-6412-4256-99c3-fe4d10ac.png"
      alt={alt}
      className={cn(
        "h-12 w-auto",
        inverse ? "drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]" : undefined,
        className
      )}
      loading="eager"
      decoding="async"
    />
  );
}


