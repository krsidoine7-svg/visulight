import type { Metadata, Viewport } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A1128",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: [
    "Light Studio",
    "Studio créatif Abidjan",
    "Production vidéo cinématique Abidjan",
    "Affiches publicitaires Côte d'Ivoire",
    "Agence web Abidjan",
    "Graphisme professionnel Abidjan",
  ],
  authors: [{ name: "Light Studio" }],
  openGraph: {
    title: `${siteConfig.name} • ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "fr_CI",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" id="top" className={`${syne.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-lum-white text-lum-slate antialiased selection:bg-lum-electric selection:text-white flex flex-col">
        <Header />
        <div className="flex-1 pt-20 sm:pt-24">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
