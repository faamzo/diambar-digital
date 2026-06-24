"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { CONTACT } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

const CONTACT_INFO = [
  { icon: Phone, label: "Téléphone", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: Mail, label: "Email", value: CONTACT.email, href: CONTACT.emailHref },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Diamabar Digital",
    href: CONTACT.linkedin,
  },
];

const SERVICE_OPTIONS = [
  "Développement Web",
  "Application Mobile",
  "UI/UX Design",
  "Maintenance",
  "Solution Digitale",
  "Branding",
  "Autre",
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          message: formData.get("message"),
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Une erreur est survenue.");
      }

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Impossible d'envoyer le message."
      );
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-28 py-24 pb-32 sm:py-32 sm:pb-24">
      <motion.div className="absolute inset-0 bg-gradient-to-t from-night-blue/80 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Contact"
          title="Démarrons votre projet"
          subtitle="Parlez-nous de votre vision. Nous vous répondons sous 24 heures."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ul className="space-y-6">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-4 transition-colors hover:text-premium-orange"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-premium-orange/15 text-premium-orange">
                      <Icon size={22} />
                    </span>
                    <div>
                      <p className="theme-text-muted text-sm">{label}</p>
                      <p className="theme-text font-medium group-hover:text-premium-orange">
                        {value}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="theme-text-muted mb-4 text-sm">Suivez-nous</p>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-light theme-text-muted inline-flex h-11 w-11 items-center justify-center rounded-full transition-all hover:border-premium-orange/40 hover:text-premium-orange"
                aria-label={CONTACT.linkedinLabel}
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="theme-text-muted mb-2 block text-sm">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="theme-text w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition-all focus:border-premium-orange/50 focus:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="theme-text-muted mb-2 block text-sm">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="theme-text w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition-all focus:border-premium-orange/50 focus:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                  placeholder="vous@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="theme-text-muted mb-2 block text-sm">
                  Téléphone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="theme-text w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition-all focus:border-premium-orange/50 focus:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                  placeholder="+221 ..."
                />
              </div>
              <div>
                <label htmlFor="service" className="theme-text-muted mb-2 block text-sm">
                  Service souhaité
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="theme-text w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition-all focus:border-premium-orange/50 focus:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                >
                  <option value="" className="bg-night-blue">
                    Sélectionner
                  </option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-night-blue">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="theme-text-muted mb-2 block text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="theme-text w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition-all focus:border-premium-orange/50 focus:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                  placeholder="Décrivez votre projet..."
                />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {status === "error" && (
                <p className="text-sm text-red-400">{errorMessage}</p>
              )}
              {status === "success" && (
                <p className="text-sm text-premium-orange">
                  Message envoyé ! Nous vous répondrons sous 24 h.
                </p>
              )}
              <Button
                type="submit"
                variant="primary"
                className="w-full sm:w-auto"
                disabled={status === "loading"}
              >
                <Send size={18} />
                {status === "loading"
                  ? "Envoi en cours..."
                  : status === "success"
                    ? "Message envoyé !"
                    : "Envoyer le message"}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
