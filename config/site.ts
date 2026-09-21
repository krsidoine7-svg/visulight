export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  location: {
    city: string;
    country: string;
    address: string;
    zone: string;
  };
  contact: {
    phoneDisplay: string;
    whatsappNumber: string; // Format international sans '+' pour lien wa.me
    email: string;
  };
  currency: {
    primary: "XOF";
    primarySymbol: "FCFA";
    secondary: "EUR";
    secondarySymbol: "€";
    rateToEur: number; // 655.957 FCFA = 1 EUR
  };
  social: {
    instagram: string;
    tiktok: string;
    youtube: string;
    linkedin: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Light Studio",
  shortName: "Light Studio",
  tagline: "Studio Créatif 360° • Graphisme, Vidéo Cinématique & Web",
  description:
    "Agence créative et studio multimédia basé à Abidjan. Conception d'affiches percutantes, production vidéo cinématique et création de sites web haut de gamme pour PME et créateurs ambitieux.",
  location: {
    city: "Abidjan",
    country: "Côte d'Ivoire",
    address: "Cocody / Deux-Plateaux",
    zone: "Abidjan, Côte d'Ivoire",
  },
  contact: {
    phoneDisplay: "+225 07 00 00 00 00",
    whatsappNumber: "2250700000000", // Modifiable en une ligne quand le numéro officiel sera fourni
    email: "contact@lightstudio-abidjan.com",
  },
  currency: {
    primary: "XOF",
    primarySymbol: "FCFA",
    secondary: "EUR",
    secondarySymbol: "€",
    rateToEur: 655.957,
  },
  social: {
    instagram: "https://instagram.com/lightstudio",
    tiktok: "https://tiktok.com/@lightstudio",
    youtube: "https://youtube.com/@lightstudio",
    linkedin: "https://linkedin.com/company/lightstudio",
  },
};

/**
 * Générateur de lien direct WhatsApp avec message pré-formaté
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg =
    "Bonjour Light Studio ! J'ai découvert votre site web et je souhaite échanger au sujet d'un projet créatif.";
  const msg = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${msg}`;
}

/**
 * Formateur de double prix FCFA / EUR
 */
export function formatPricing(amountXof: number): { xof: string; eur: string } {
  const xofFormatted = new Intl.NumberFormat("fr-FR").format(amountXof) + " FCFA";
  const eurCalculated = Math.round(amountXof / siteConfig.currency.rateToEur);
  const eurFormatted = `~${eurCalculated} €`;
  return {
    xof: xofFormatted,
    eur: eurFormatted,
  };
}
