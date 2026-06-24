"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { useTheme } from "@/components/providers/ThemeProvider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-8 ${
          scrolled ? "pt-3" : "pt-5"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
          }`}
        >
          <Logo size="sm" />

          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <motion.div className="glass-light flex items-center gap-1 rounded-full p-1">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-deep-black dark:text-deep-black"
                        : "theme-text-muted hover:text-[var(--fg)]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-off-white shadow-sm"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </motion.div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <div className="theme-text-muted hidden items-center gap-1 sm:flex">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 transition-colors hover:text-premium-orange"
                aria-label={CONTACT.linkedinLabel}
              >
                <Linkedin size={17} />
              </a>
              <a
                href="#"
                className="rounded-full p-2 transition-colors hover:text-premium-orange"
                aria-label="Instagram"
              >
                <Instagram size={17} />
              </a>
              <a
                href="#"
                className="rounded-full p-2 transition-colors hover:text-premium-orange"
                aria-label="Facebook"
              >
                <Facebook size={17} />
              </a>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="theme-text-muted hidden rounded-full p-2.5 transition-colors hover:text-premium-orange sm:flex"
              aria-label={theme === "dark" ? "Mode jour" : "Mode nuit"}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="hidden md:block">
              <Button href="#contact" variant="primary" className="!px-5 !py-2.5 !text-sm">
                Commencer un projet
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="theme-text rounded-full p-2.5 transition-colors hover:text-premium-orange lg:hidden"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--bg)]/95 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="flex h-full flex-col justify-center gap-2 px-8"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="theme-text block py-3 font-display text-2xl font-semibold hover:text-premium-orange"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-8"
              >
                <Button
                  href="#contact"
                  variant="primary"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Commencer un projet
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
