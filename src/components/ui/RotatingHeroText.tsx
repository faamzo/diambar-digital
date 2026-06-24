"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface RotatingHeroTextProps {
  words: readonly string[];
  intervalMs?: number;
}

export function RotatingHeroText({ words, intervalMs = 2800 }: RotatingHeroTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [words.length, intervalMs]);

  return (
    <span className="relative inline-block overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block whitespace-nowrap font-serif-hero text-[var(--accent)]"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
