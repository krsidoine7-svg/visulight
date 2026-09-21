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
          white: "#FFFFFF",
          surface: "#F8FAFC",
          card: "#FFFFFF",
          midnight: "#0A1128",
          navy: "#1C2A4A",
          onyx: "#090A0F",
          slate: "#334155",
          muted: "#64748B",
          border: "#E2E8F0",
          electric: "#2563EB",
          "electric-hover": "#1D4ED8",
          "electric-light": "#EFF6FF",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(10, 17, 40, 0.05), 0 1px 2px -1px rgba(10, 17, 40, 0.05)",
        card: "0 10px 30px -10px rgba(10, 17, 40, 0.08)",
        glow: "0 0 25px -5px rgba(37, 99, 235, 0.3)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
