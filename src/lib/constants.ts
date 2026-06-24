/** Mots animés dans le hero : « créatrice de [mot] sur mesure » */
export const HERO_ROTATING_WORDS = [
  "solutions",
  "sites web",
  "applications",
  "interfaces",
  "branding",
  "plateformes",
] as const;

export const CONTACT = {
  email: "diambardigital@gmail.com",
  phone: "+221 76 727 24 60",
  phoneHref: "tel:+221767272460",
  emailHref: "mailto:diambardigital@gmail.com",
  linkedin: "https://www.linkedin.com/in/diambar-digital-undefined-988032417",
  linkedinLabel: "LinkedIn",
} as const;

export const NAV_LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#apropos", label: "À propos" },
  { href: "#contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    icon: "Globe",
    title: "Développement Web",
    description:
      "Création de sites web modernes, rapides et responsives pour une présence en ligne impactante.",
  },
  {
    icon: "Smartphone",
    title: "Applications Mobiles",
    description:
      "Applications Android et iOS performantes, intuitives et adaptées à vos utilisateurs.",
  },
  {
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "Interfaces modernes et expérience utilisateur optimisée pour maximiser l'engagement.",
  },
  {
    icon: "Wrench",
    title: "Maintenance Informatique",
    description:
      "Support technique réactif et maintenance continue de vos systèmes digitaux.",
  },
  {
    icon: "Cpu",
    title: "Solutions Digitales",
    description:
      "Automatisation et plateformes sur mesure pour fluidifier vos opérations.",
  },
  {
    icon: "Sparkles",
    title: "Branding Digital",
    description:
      "Identité visuelle cohérente et présence digitale qui marque les esprits.",
  },
] as const;

export const WHY_US = [
  { icon: "Gem", title: "Design premium", description: "Interfaces élégantes et mémorables." },
  { icon: "Zap", title: "Technologies modernes", description: "Stack à la pointe de l'innovation." },
  { icon: "Headphones", title: "Support réactif", description: "Une équipe disponible quand vous en avez besoin." },
  { icon: "Rocket", title: "Solutions performantes", description: "Rapidité et fiabilité au cœur de chaque projet." },
  { icon: "Shield", title: "Sécurité optimisée", description: "Protection des données et bonnes pratiques." },
  { icon: "Users", title: "Accompagnement personnalisé", description: "Un partenaire dédié à votre réussite." },
] as const;

export const STATS = [
  { value: 10, suffix: "+", label: "Projets réalisés" },
  { value: 100, suffix: "%", label: "Responsive" },
  { value: 24, suffix: "/7", label: "Support" },
  { value: 98, suffix: "%", label: "Satisfaction client" },
] as const;

export const PORTFOLIO = [
  {
    title: "Site E-Commerce",
    category: "Site Web",
    image: "/site_e_commerce.png",
  },
  {
    title: "App Fitness",
    category: "Application Mobile",
    image: "/app_fitness.jfif",
  },
  {
    title: "Dashboard Analytic",
    category: "Solution Digitale",
    image: "/dashbord_analytic.jfif",
  },
  {
    title: "E-Link Galsen",
    category: "Site Web",
    image: "/e-linkgalsen.png",
  },
  {
    title: "App Livraison",
    category: "Application Mobile",
    image: "/app_livraison.jfif",
  },
  {
    title: "Site Corporate",
    category: "Site Web",
    image: "/site_corporate.jfif",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Analyse",
    description: "Compréhension approfondie de vos besoins, objectifs et contraintes.",
  },
  {
    step: "02",
    title: "Design",
    description: "Création des maquettes et interfaces validées avec vous.",
  },
  {
    step: "03",
    title: "Développement",
    description: "Développement agile des solutions avec points réguliers.",
  },
  {
    step: "04",
    title: "Livraison",
    description: "Tests rigoureux et mise en production accompagnée.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Amadou Diallo",
    role: "CEO, TechStart SN",
    text: "Diamabar Digital a transformé notre présence en ligne. Professionnalisme, créativité et résultats au rendez-vous.",
    rating: 5,
  },
  {
    name: "Fatou Sarr",
    role: "Directrice Marketing",
    text: "Une équipe à l'écoute qui livre des projets de qualité premium. Je recommande sans hésitation.",
    rating: 5,
  },
  {
    name: "Ibrahim Ndiaye",
    role: "Fondateur, InnovateLab",
    text: "Notre application mobile a dépassé toutes nos attentes. Support réactif et expertise technique remarquable.",
    rating: 5,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Combien coûte un site web ?",
    answer:
      "Le tarif dépend de la complexité, des fonctionnalités et du design. Nous proposons des devis personnalisés après un premier échange gratuit pour comprendre vos besoins.",
  },
  {
    question: "Combien de temps prend un projet ?",
    answer:
      "Un site vitrine prend généralement 3 à 6 semaines. Une application mobile ou une plateforme complexe peut nécessiter 2 à 4 mois. Nous établissons un planning précis dès le départ.",
  },
  {
    question: "Faites-vous des applications mobiles ?",
    answer:
      "Oui, nous développons des applications natives et cross-platform pour Android et iOS, avec des interfaces modernes et des performances optimales.",
  },
  {
    question: "Proposez-vous la maintenance ?",
    answer:
      "Absolument. Nous offrons des contrats de maintenance incluant mises à jour, support technique, sauvegardes et optimisations continues.",
  },
] as const;

export const ABOUT_POINTS = [
  "Innovation",
  "Performance",
  "Accompagnement",
  "Solutions sur mesure",
] as const;
