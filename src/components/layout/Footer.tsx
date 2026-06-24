import Link from "next/link";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-deep-black py-16 pb-24 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo size="lg" className="mb-0" />
            <p className="theme-text-muted mt-4 max-w-sm text-sm leading-relaxed">
              Agence digitale premium spécialisée en développement web, applications
              mobiles et solutions digitales sur mesure pour entreprises ambitieuses.
            </p>
          </div>

          <div>
            <h4 className="theme-text mb-4 font-display text-sm font-semibold uppercase tracking-wider">
              Liens rapides
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="theme-text-muted text-sm transition-colors hover:text-premium-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="theme-text mb-4 font-display text-sm font-semibold uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="theme-text-muted text-sm transition-colors hover:text-premium-orange"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="theme-text-muted text-sm transition-colors hover:text-premium-orange"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-text-muted text-sm transition-colors hover:text-premium-orange"
                >
                  {CONTACT.linkedinLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="theme-text-muted text-sm">
            © {year} Diamabar Digital. Tous droits réservés.
          </p>
          <p className="theme-text-muted text-sm">Conçu avec passion au Sénégal</p>
        </div>
      </div>
    </footer>
  );
}
