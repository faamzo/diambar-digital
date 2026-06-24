# Diamabar Digital

Site vitrine premium pour l'agence **Diamabar Digital** — développement web, applications mobiles et solutions digitales.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion**
- **Lucide React**

## Démarrage

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Structure

| Section | Composant |
|---------|-----------|
| Hero + Navbar | `Hero.tsx`, `Navbar.tsx` |
| À propos | `About.tsx` |
| Services | `Services.tsx` |
| Pourquoi nous | `WhyUs.tsx` |
| Portfolio | `Portfolio.tsx` |
| Vidéo | `VideoSection.tsx` |
| Processus | `Process.tsx` |
| Témoignages | `Testimonials.tsx` |
| FAQ | `FAQ.tsx` |
| Contact | `Contact.tsx` |
| Footer | `Footer.tsx` |

## Personnalisation

- **Couleurs & typo** : `src/app/globals.css`
- **Contenus** : `src/lib/constants.ts`
- **Vidéo Canva** : remplacez l’URL dans `src/components/sections/VideoSection.tsx`
- **Contact** : modifiez téléphone, email et localisation dans `Contact.tsx`

## Déploiement

```bash
npm run build
```

Déployable sur [Vercel](https://vercel.com) en un clic.
