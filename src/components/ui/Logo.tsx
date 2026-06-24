"use client";

import Link from "next/link";
import { useTheme } from "@/components/providers/ThemeProvider";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
}

const heights = {
  sm: "h-9 sm:h-10",
  md: "h-10 sm:h-11",
  lg: "h-11 sm:h-12",
};

export function Logo({ size = "md", showWordmark = false, className = "" }: LogoProps) {
  const { theme } = useTheme();

  return (
    <Link
      href="#accueil"
      className={`flex shrink-0 items-center gap-2.5 ${className}`}
      aria-label="Diamabar Digital — Accueil"
    >
      {theme === "dark" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/logo-dark.svg"
          alt="Diamabar Digital"
          className={`${heights[size]} w-auto max-w-[200px] object-contain object-left sm:max-w-[220px]`}
        />
      ) : (
        <>
          <div
            className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent)] to-royal-blue ${
              size === "lg" ? "h-11 w-11" : "h-9 w-9 sm:h-10 sm:w-10"
            }`}
          >
            <span className="font-display text-lg font-bold text-white">D</span>
          </div>
          {showWordmark && (
            <div className="hidden sm:block">
              <span className="font-display text-sm font-semibold theme-text">diamabar</span>
              <span className="theme-text-muted block font-display text-[10px] font-bold uppercase tracking-widest">
                Digital
              </span>
            </div>
          )}
        </>
      )}
    </Link>
  );
}
