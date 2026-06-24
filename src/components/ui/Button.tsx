"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent)] text-white shadow-lg shadow-[color-mix(in_srgb,var(--accent)_35%,transparent)] hover:bg-[var(--accent-hover)] hover:shadow-[color-mix(in_srgb,var(--accent-hover)_35%,transparent)]",
  secondary:
    "border border-[color-mix(in_srgb,var(--fg)_20%,transparent)] bg-[color-mix(in_srgb,var(--fg)_5%,transparent)] theme-text backdrop-blur-sm hover:border-[color-mix(in_srgb,var(--fg)_35%,transparent)] hover:bg-[color-mix(in_srgb,var(--fg)_10%,transparent)]",
  ghost: "theme-text hover:bg-[color-mix(in_srgb,var(--fg)_8%,transparent)]",
  outline:
    "border border-[color-mix(in_srgb,var(--fg)_25%,transparent)] bg-transparent theme-text backdrop-blur-sm hover:border-[color-mix(in_srgb,var(--accent)_50%,transparent)] hover:bg-[color-mix(in_srgb,var(--fg)_8%,transparent)]",
};

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 sm:px-8 sm:py-3.5 sm:text-base disabled:cursor-not-allowed disabled:opacity-60";

  const classes = `${base} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes} onClick={onClick}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      {...(disabled ? {} : motionProps)}
    >
      {children}
    </motion.button>
  );
}
