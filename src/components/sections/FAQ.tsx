"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            label="FAQ"
            title="Questions fréquentes"
            subtitle="Tout ce que vous devez savoir avant de démarrer votre projet."
          />
        </ScrollReveal>

        <div className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={item.question} delay={i * 0.05} direction="up">
                <motion.div
                  className="glass-light overflow-hidden rounded-2xl"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-white/5 sm:p-6"
                  >
                    <span className="font-display font-semibold theme-text">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 text-premium-orange"
                    >
                      <ChevronDown size={22} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="theme-text-muted border-t border-white/5 px-5 pb-5 text-sm leading-relaxed sm:px-6 sm:pb-6">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
