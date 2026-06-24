"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.12), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            label="Témoignages"
            title="Ce que disent nos clients"
            subtitle="La confiance de nos partenaires est notre plus belle récompense."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative mx-auto max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-3xl p-8 sm:p-12"
              >
                <Quote className="mb-6 text-premium-orange/70" size={40} />
                <p className="theme-text text-lg leading-relaxed sm:text-xl">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-premium-orange to-electric-blue font-display text-lg font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <cite className="theme-text not-italic font-display font-semibold">
                      {testimonial.name}
                    </cite>
                    <p className="theme-text-muted text-sm">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-8 flex justify-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <motion.button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-premium-orange"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
