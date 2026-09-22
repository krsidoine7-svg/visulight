import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lum: {
          // ── Palette épurée : neutre + 1 accent ──
          // Fonds
          white:   "#FFFFFF",
          surface: "#FAFAF9",   // blanc cassé chaud (pas blanc pur → plus luxueux)
          card:    "#F4F3F1",   // gris très clair pour zones de contenu secondaires

          // Textes (fort contraste WCAG AA garanti)
          midnight: "#0A0A0A",  // noir profond pour titres
          navy:     "#1A1A2E",  // presque noir avec trace de bleu nuit (hover boutons principaux)
          onyx:     "#0F0F0F",

          // Textes courants
          slate:    "#3D3D3D",  // corps de texte — ratio >9:1 sur blanc
          muted:    "#6B6B6B",  // texte secondaire/labels — ratio >4.5:1 WCAG AA
          subtle:   "#9A9A9A",  // placeholder, hint — limité aux cas justifiés

          // Bordures & séparateurs
          border:   "#E0DFDC",  // gris chaud léger
          "border-strong": "#C4C3C0", // bordure active / hover

          // Accent unique : bleu électrique
          electric: "#2563EB",
          "electric-hover": "#1D4ED8",
          "electric-light": "#EFF6FF",
          "electric-dark":  "#1E40AF",

          // Sections sombres (footer, hero-overlay)
          dark:     "#0A0A0A",
          "dark-2": "#141414",
          "dark-3": "#1F1F1F",
        },
      },
      fontFamily: {
        syne:  ["var(--font-syne)",  "sans-serif"],  // Titres uniquement
        inter: ["var(--font-inter)", "sans-serif"],  // Tout le reste
        sans:  ["var(--font-inter)", "sans-serif"],  // Défaut fallback
      },
      boxShadow: {
        // Ombres sobres — pas de diffusion excessive
        xs:     "0 1px 2px 0 rgba(0, 0, 0, 0.04)",
        sm:     "0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.04)",
        card:   "0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.04)",
        panel:  "0 8px 24px -4px rgba(0, 0, 0, 0.10)",
        // Supprimé : glow, halos, shadows énormes
      },
      borderRadius: {
        // Arrondis réduits — plus éditorial, moins "app générique"
        DEFAULT: "4px",
        sm:      "4px",
        md:      "6px",
        lg:      "8px",
        xl:      "10px",
        "2xl":   "12px",  // Maximum pour les cartes fonctionnelles
        "3xl":   "16px",  // Réservé aux images plein cadre uniquement
        full:    "9999px",
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],  // 11px
      },
    },
  },
  plugins: [],
};

export default config;
