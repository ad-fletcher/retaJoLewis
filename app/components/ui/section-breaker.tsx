import { cn } from "@/lib/utils";

interface SectionBreakerProps {
  title: string;
  variant?: "default" | "quote";
  className?: string;
}

export function SectionBreaker({ title, variant = "default", className }: SectionBreakerProps) {
  if (variant === "quote") {
    return (
      <div className={cn("w-full py-16 md:py-20 bg-[#720e1e]", className)}>
        <div className="max-w-screen-lg mx-auto px-6 md:px-12 text-center">
          <p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed mb-4">
            "{title}"
          </p>
          <p className="text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
            Martin Luther King Jr.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-4 py-12", className)}>
      <div className="flex-1 h-px bg-[#d4af37]"></div>
      <div className="bg-[#720e1e] px-6 py-2">
        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white uppercase whitespace-nowrap">
          {title}
        </span>
      </div>
      <div className="flex-1 h-px bg-[#d4af37]"></div>
    </div>
  );
}
