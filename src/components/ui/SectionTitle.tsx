"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  label,
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-14 max-w-3xl ${alignClass}`}
    >
      {label && (
        <span className="mb-3 inline-block font-accent text-sm font-medium uppercase tracking-widest text-premium-orange">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight theme-text sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="theme-text-muted mt-4 font-accent text-base leading-relaxed sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
