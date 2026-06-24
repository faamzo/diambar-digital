"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            label="Portfolio"
            title="Nos réalisations"
            subtitle="Découvrez une sélection de projets qui illustrent notre expertise et notre créativité."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1} direction="up">
              <motion.article
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-deep-black">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-deep-black/90 via-deep-black/40 to-transparent p-6 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                    <span className="mb-1 text-xs font-medium uppercase tracking-wider text-premium-orange">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-bold theme-text">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="glass-light border-t border-white/5 p-4 lg:hidden">
                  <span className="text-xs text-premium-orange">{project.category}</span>
                  <h3 className="font-display font-semibold theme-text">
                    {project.title}
                  </h3>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
