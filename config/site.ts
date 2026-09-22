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
 * Fonction d'assainissement et de limitation de taille des chaînes utilisateurs
 */
export function sanitizeInput(input: string, maxLength = 200): string {
  if (!input) return "";
  return input
    .replace(/[\u0000-\u0008\u000B-\u001F\u007F-\u009F]/g, "")
    .trim()
    .slice(0, maxLength);
}

/**
 * Générateur sécurisé de lien direct WhatsApp avec numéro assaini et message encodé
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg =
    "Bonjour Light Studio ! J'ai découvert votre site web et je souhaite échanger au sujet d'un projet créatif.";
  const cleanNumber = siteConfig.contact.whatsappNumber.replace(/\D/g, "");
  const rawMsg = customMessage ? sanitizeInput(customMessage, 2000) : defaultMsg;
  const msg = encodeURIComponent(rawMsg);
  return `https://wa.me/${cleanNumber}?text=${msg}`;
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
