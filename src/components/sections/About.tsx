"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ABOUT_POINTS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function About() {
  return (
    <section id="apropos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal direction="left">
            <motion.div
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-premium-orange/20 to-electric-blue/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl glass glow-orange">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/photo_team.jpeg"
                    alt="L'équipe Diamabar Digital"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          <div>
            <ScrollReveal direction="right" delay={0.2}>
              <SectionTitle
                label="À propos"
                title="Une agence pensée pour le futur."
                align="left"
              />
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.3}>
              <motion.p
                className="theme-text-muted mb-8 text-lg leading-relaxed"
              >
                Diamabar Digital accompagne les entreprises dans leur transformation
                numérique grâce à des solutions modernes, performantes et adaptées aux
                besoins actuels du marché.
              </motion.p>
            </ScrollReveal>

            <ul className="mb-10 grid grid-cols-2 gap-4">
              {ABOUT_POINTS.map((point, i) => (
                <ScrollReveal key={point} direction="right" delay={0.4 + i * 0.05}>
                  <motion.li
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3"
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all ${
                        i % 2 === 0
                          ? "bg-premium-orange/20 text-premium-orange"
                          : "bg-electric-blue/20 text-electric-blue"
                      }`}
                    >
                      <Check size={16} />
                    </span>
                    <span className="theme-text font-medium">{point}</span>
                  </motion.li>
                </ScrollReveal>
              ))}
            </ul>

            <ScrollReveal direction="right" delay={0.5}>
              <Button href="#contact" variant="secondary">
                Découvrir notre vision
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
