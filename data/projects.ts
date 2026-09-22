export type ProjectCategory = "all" | "affiches" | "videos" | "web";

export interface Project {
  id: string;
  title: string;
  category: "affiches" | "videos" | "web";
  categoryLabel: string;
  client: string;
  location: string;
  image: string;
  badge: string;
  description: string;
  results: string;
  deliverables: string[];
  whatsappMessage: string;
}

export const PROJECTS: Project[] = [
  {
    id: "abidjan-nocturne",
    title: "Campagne & Affiche Officielle « Abidjan Nocturne »",
    category: "affiches",
    categoryLabel: "Affiches & Graphisme",
    client: "Festival des Arts Africains",
    location: "Palais de la Culture, Abidjan",
    image: "/images/portfolio-affiche.jpg",
    badge: "Campagne Urbaine 4x3",
    description:
      "Direction artistique globale et conception de l'affiche événementielle grand format, associant typographie contemporaine, motifs géométriques et dorures cinématographiques.",
    results: "+35 000 festivaliers mobilisés et visuels relayés par les artistes majeurs de la scène.",
    deliverables: [
      "Affiches publicitaires grand format 4x3 & abribus",
      "Packs réseaux sociaux (stories, carrousels, teasers vidéo)",
      "Badges VIP et signalétique événementielle au Palais de la Culture",
    ],
    whatsappMessage:
      "Bonjour Light Studio ! J'ai vu votre affiche pour Abidjan Nocturne et je souhaite une direction artistique similaire pour mon événement.",
  },
  {
    id: "spot-laguna-rooftop",
    title: "Spot Cinématographique « Sunset sur la Lagune »",
    category: "videos",
    categoryLabel: "Vidéos Cinématiques",
    client: "Groupe Hôtelier Laguna",
    location: "Le Plateau, Abidjan",
    image: "/images/portfolio-video.jpg",
    badge: "Spot Marque 4K & Reels",
    description:
      "Production vidéo de prestige capturée à l'heure dorée avec optiques cinématographiques. Mise en valeur de l'ambiance rooftop et du panorama sur la skyline du Plateau.",
    results: "+280 000 vues organiques sur Instagram & TikTok avec un taux d'engagement de 8.4%.",
    deliverables: [
      "Spot principal cinématique 60s en ultra haute définition 4K",
      "3 capsules courtes dynamiques (format 9:16) optimisées pour Reels & TikTok",
      "Étalonnage couleur sur-mesure et création de l'atmosphère sonore",
    ],
    whatsappMessage:
      "Bonjour Light Studio ! J'ai adoré votre spot vidéo sur le Plateau d'Abidjan et je souhaite un tournage cinématique pour mon établissement.",
  },
  {
    id: "kunga-luxury-collection",
    title: "Plateforme Vitrine « Kunga Luxury Collection »",
    category: "web",
    categoryLabel: "Vitrines Web & Digital",
    client: "Résidences Hôtelières Kunga",
    location: "Assinie & Cocody, Abidjan",
    image: "/images/portfolio-web.jpg",
    badge: "Site Web Next.js & Réservations",
    description:
      "Conception d'une plateforme vitrine sur-mesure alliant élégance éditoriale, rapidité d'affichage et intégration d'un tunnel de réservation direct connecté à WhatsApp.",
    results: "+140% de réservations directes enregistrées sans commission intermédiaire en 60 jours.",
    deliverables: [
      "Design d'interface UI/UX personnalisé et responsive mobile",
      "Tunnel de réservation directe automatisé vers WhatsApp",
      "Optimisation SEO complète pour le référencement à Abidjan",
    ],
    whatsappMessage:
      "Bonjour Light Studio ! Je souhaite concevoir un site web haut de gamme dans le style de Kunga Luxury Collection.",
  },
  {
    id: "sofa-lounge-abidjan",
    title: "Direction Visuelle & Menus « Sofa Lounge Abidjan »",
    category: "affiches",
    categoryLabel: "Affiches & Graphisme",
    client: "Sofa Lounge & Cocktail Bar",
    location: "Zone 4, Marcory",
    image: "/images/hero-cinematic.jpg",
    badge: "Branding & Signalétique",
    description:
      "Création complète du branding visuel, des cartes de cocktails dorées et de la campagne d'affichage urbain pour le lancement du nouvel établissement gastronomique.",
    results: "+450 réservations enregistrées lors de la semaine d'inauguration.",
    deliverables: [
      "Menus de restaurant & cartes de cocktails imprimés sur papier soft-touch",
      "Direction photographique des plats & signatures cocktails",
      "Déclinaisons d'affiches rétroéclairées pour l'établissement",
    ],
    whatsappMessage:
      "Bonjour Light Studio ! Je souhaite retravailler le branding et la direction visuelle de mon bar/restaurant.",
  },
  {
    id: "yopougon-fashion-week",
    title: "Aftermovie & Teaser « Abidjan Fashion Week »",
    category: "videos",
    categoryLabel: "Vidéos Cinématiques",
    client: "Comité de la Mode Ivoirienne",
    location: "Sofitel Hôtel Ivoire, Abidjan",
    image: "/images/studio-team.jpg",
    badge: "Aftermovie Fashion & Reels",
    description:
      "Captation vidéo dynamique des défilés de haute couture, interviews en coulisses et montage rythmé au son des rythmes afro-house contemporains.",
    results: "+500 000 vues cumulées sur les réseaux sociaux et couverture médiatique régionale.",
    deliverables: [
      "Film Aftermovie officiel de 3 minutes en résolution 4K",
      "5 teasers verticaux pour les stylistes participants",
      "Sound design exclusif rythmé pour la communication événementielle",
    ],
    whatsappMessage:
      "Bonjour Light Studio ! Je recherche une équipe vidéo pour la captation de mon événement de mode ou spectacle.",
  },
  {
    id: "bambou-resort-assinie",
    title: "Site Éco-Resort « Bambou Resort Assinie »",
    category: "web",
    categoryLabel: "Vitrines Web & Digital",
    client: "Bambou Resort & Spa",
    location: "Assinie Mafia",
    image: "/images/studio-workspace.jpg",
    badge: "Site Vitrine & Galerie photo",
    description:
      "Plateforme web immersive présentant les bungalows en bord de mer, les forfaits bien-être et le formulaire de demande de disponibilité rapide.",
    results: "Temps de chargement inférieur à 1 seconde et hausse de +85% des demandes de week-end.",
    deliverables: [
      "Site web responsive 100% optimisé pour smartphones",
      "Galerie photo interactive haute définition",
      "Système de contact rapide WhatsApp intégré à chaque villa",
    ],
    whatsappMessage:
      "Bonjour Light Studio ! Je souhaite créer un site vitrine avec réservation rapide pour mon hôtel/resort.",
  },
  {
    id: "ebene-cosmetics",
    title: "Identité Visuelle & Packaging « Ébène Cosmetics »",
    category: "affiches",
    categoryLabel: "Affiches & Graphisme",
    client: "Ébène Soins Naturels",
    location: "Cocody Ambassades, Abidjan",
    image: "/images/portfolio-affiche.jpg",
    badge: "Packaging & Identité",
    description:
      "Conception de la charte graphique globale, des étiquettes flacons et des visuels d'affichage publicitaire pour une gamme de soins capillaires haut de gamme.",
    results: "Présence dans plus de 20 instituts de beauté d'Abidjan dès le premier mois.",
    deliverables: [
      "Charte graphique complète (logo, typographies, palette de couleurs)",
      "Design de packaging & fichiers d'impression vectoriels",
      "Affiches PLV pour salons de coiffure et boutiques partenaires",
    ],
    whatsappMessage:
      "Bonjour Light Studio ! Je souhaite concevoir un packaging d'exception pour ma marque de cosmétiques.",
  },
  {
    id: "baoule-gastronomie",
    title: "Spot TV & Reels « Baoulé Gastronomie »",
    category: "videos",
    categoryLabel: "Vidéos Cinématiques",
    client: "Maison Baoulé",
    location: "Angré 8ème Tranche, Abidjan",
    image: "/images/portfolio-video.jpg",
    badge: "Spot TV 4K & Réseaux",
    description:
      "Production vidéo culinaire de haute précision capturant la préparation des spécialités ivoiriennes traditionnelles sublimées par un éclairage studio cinématique.",
    results: "+180 000 vues sur TikTok et augmentation de +40% du chiffre d'affaires traiteur.",
    deliverables: [
      "Spot publicitaire 30s calibré pour la télévision et la diffusion web",
      "4 capsules gourmandes au format vertical 9:16",
      "Correction colorimétrique chaleureuse et appétissante",
    ],
    whatsappMessage:
      "Bonjour Light Studio ! Je souhaite réaliser une vidéo culinaire à fort impact pour mon restaurant/traiteur.",
  },
  {
    id: "ivoire-fintech-app",
    title: "Landing Page Vitrine « Ivoire Fintech »",
    category: "web",
    categoryLabel: "Vitrines Web & Digital",
    client: "Ivoire Pay Technologies",
    location: "Le Plateau, Abidjan",
    image: "/images/portfolio-web.jpg",
    badge: "Landing Page SaaS",
    description:
      "Conception d'une landing page moderne et rassurante présentant l'application de transfert d'argent avec animations fluides et tableaux comparatifs de tarifs.",
    results: "+12 000 pré-inscriptions enregistrées avant le lancement officiel de l'application.",
    deliverables: [
      "Landing page interactive conçue sur Next.js & TailwindCSS",
      "Animations SVG personnalisées et mockups 3D de l'application",
      "Formulaire d'inscription rapide connecté à la base de données",
    ],
    whatsappMessage:
      "Bonjour Light Studio ! Je souhaite concevoir une landing page percutante pour ma startup/application.",
  },
];
