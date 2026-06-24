"use client";

import { motion } from "framer-motion";
import {
  Gem,
  Zap,
  Headphones,
  Rocket,
  Shield,
  Users,
  type LucideIcon,
} from "lucide-react";
import { WHY_US, STATS } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  Gem,
  Zap,
  Headphones,
  Rocket,
  Shield,
  Users,
};

export function WhyUs() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-night-blue via-deep-black to-slate-dark" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(245,158,11,0.1), transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(37,99,235,0.15), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            label="Pourquoi nous"
            title="Pourquoi choisir Diamabar Digital ?"
            subtitle="Une approche premium, des technologies de pointe et un accompagnement dédié."
          />
        </ScrollReveal>

        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Gem;
            const isOrange = i % 2 === 0;
            return (
              <ScrollReveal key={item.title} delay={i * 0.08} direction="up">
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass flex gap-4 rounded-2xl p-6 card-hover-glow transition-all duration-300 cursor-pointer"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all ${
                      isOrange
                        ? "bg-premium-orange/15 text-premium-orange"
                        : "bg-electric-blue/15 text-electric-blue"
                    }`}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold theme-text">{item.title}</h3>
                    <p className="theme-text-muted mt-1 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={0.3 + i * 0.05} direction="up">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
