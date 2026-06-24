"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function AnimatedCounter({ value, suffix = "", label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [spring, suffix]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-light rounded-2xl p-6 text-center card-hover-glow"
    >
      <span
        ref={displayRef}
        className="font-display text-4xl font-bold gradient-text sm:text-5xl"
      >
        0{suffix}
      </span>
      <p className="theme-text-muted mt-2 text-sm">{label}</p>
    </motion.div>
  );
}
