"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  Wrench,
  Cpu,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Palette,
  Wrench,
  Cpu,
  Sparkles,
};

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-night-blue/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            label="Services"
            title="Des solutions digitales sur mesure"
            subtitle="De la conception à la livraison, nous couvrons l'ensemble de vos besoins digitaux."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="group glass-light card-hover-glow rounded-2xl p-8 transition-all duration-300"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-gradient-to-br from-premium-orange/20 to-electric-blue/20 p-3 text-premium-orange transition-all group-hover:text-electric-blue group-hover:shadow-lg group-hover:shadow-premium-orange/20">
                    <Icon size={28} className="transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="font-display text-xl font-bold theme-text">
                    {service.title}
                  </h3>
                  <p className="theme-text-muted mt-3 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
