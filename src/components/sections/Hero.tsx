"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/effects/ParticlesBackground";
import { RotatingHeroText } from "@/components/ui/RotatingHeroText";
import { HERO_ROTATING_WORDS } from "@/lib/constants";
import { useCursorAnimation } from "@/hooks/useCursorAnimation";

export function Hero() {
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useCursorAnimation(titleRef, 0.8);
  useCursorAnimation(descriptionRef, 0.5);

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-24 sm:px-6 sm:pt-32"
    >
      <div className="hero-glow absolute inset-0 z-0" />
      <ParticlesBackground />

      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto w-full max-w-6xl text-center transition-transform"
      >
        <h1 className="theme-text">
          <span className="font-sans-hero block text-[clamp(2.25rem,6vw,96px)] leading-[clamp(2.25rem,6vw,96px)] lg:text-[96px] lg:leading-[96px]">
            Agence web &amp; digitale,
          </span>
          <span className="font-sans-hero block text-[clamp(2.25rem,6vw,96px)] leading-[clamp(2.25rem,6vw,96px)] lg:text-[96px] lg:leading-[96px]">
            créatrice de{" "}
            <span className="inline-flex flex-wrap items-baseline justify-center gap-x-[0.25em]">
              <RotatingHeroText words={HERO_ROTATING_WORDS} />
              <span className="font-serif-hero text-[var(--accent)]">sur</span>
            </span>
          </span>
          <span className="font-serif-hero block text-[clamp(2.25rem,6vw,96px)] leading-[clamp(2.25rem,6vw,96px)] text-[var(--accent)] lg:text-[96px] lg:leading-[96px]">
            mesure.
          </span>
        </h1>

        <motion.p
          ref={descriptionRef}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="theme-text-muted mx-auto mt-8 max-w-2xl font-accent text-base leading-relaxed transition-transform sm:mt-10 sm:text-lg md:text-xl"
        >
          Chez Diamabar Digital, nous créons des solutions digitales performantes,
          notamment des sites web, des applications et des services de branding,
          afin de renforcer votre présence en ligne et d&apos;accélérer durablement
          votre croissance.
        </motion.p>
      </motion.div>
    </section>
  );
}
