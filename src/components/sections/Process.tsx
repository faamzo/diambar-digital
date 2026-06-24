"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Process() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Processus"
          title="Notre méthode de travail"
          subtitle="Un processus structuré pour garantir qualité, transparence et résultats."
        />

        <div className="relative">
          {/* Timeline line — desktop */}
          <motion.div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-gradient-to-r from-transparent via-premium-orange/50 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative text-center lg:text-left"
              >
                <motion.div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl glass-light glow-orange lg:mx-0">
                  <span className="font-display text-3xl font-bold gradient-text">
                    {step.step}
                  </span>
                </motion.div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-premium-orange/50 to-transparent lg:hidden" />
                )}
                <h3 className="font-display text-xl font-bold theme-text">
                  {step.title}
                </h3>
                <p className="theme-text-muted mt-2 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
