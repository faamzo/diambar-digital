"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function VideoSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-night-blue/50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Présentation"
          title="Découvrez l'univers Diamabar Digital"
          subtitle="Plongez dans notre vision, notre méthode et notre passion pour le digital."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl"
        >
          <motion.div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-premium-orange/25 to-electric-blue/25 blur-3xl animate-pulse-glow" />
          <div className="relative overflow-hidden rounded-2xl glass glow-orange">
            <div className="relative aspect-video bg-deep-black">
              <video
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/diambar-digital.mp4" type="video/mp4" />
                Votre navigateur ne prend pas en charge la lecture vidéo.
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
