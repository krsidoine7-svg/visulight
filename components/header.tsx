"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { MessageCircle, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { label: "Le Studio", href: "#studio" },
  { label: "Départements", href: "#departements" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Offres & Packs", href: "#offres" },
  { label: "Confiance", href: "#confiance" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile lors d'un clic sur un lien
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-lum-border/80 shadow-subtle py-3.5"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Marque */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform duration-200 active:scale-95"
            onClick={handleLinkClick}
          >
            <div className="w-10 h-10 rounded-2xl bg-lum-midnight text-white flex items-center justify-center font-syne font-extrabold text-lg shadow-sm group-hover:bg-lum-navy transition-colors duration-200">
              <span>LS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-syne font-extrabold text-xl tracking-tight text-lum-midnight group-hover:text-lum-electric transition-colors duration-200 leading-none">
                LIGHT<span className="text-lum-electric">.</span>STUDIO
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-lum-muted mt-0.5 flex items-center gap-1">
                <span>{siteConfig.location.city}</span>
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                <span>Créatif 360°</span>
              </span>
            </div>
          </Link>

          {/* Navigation Bureau */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-lum-surface/80 border border-lum-border/60">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium text-lum-slate hover:text-lum-midnight hover:bg-white transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & WhatsApp CTA Bureau */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getWhatsAppUrl(
                "Bonjour Light Studio ! Je souhaite échanger avec vous pour un projet (affiches, vidéo ou site web)."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-full bg-lum-midnight text-white text-xs lg:text-sm font-semibold hover:bg-lum-navy active:scale-95 transition-all duration-200 shadow-sm hover:shadow-card group"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform duration-200" />
              <span>Devis WhatsApp</span>
            </a>
          </div>

          {/* Bouton Hamburger Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-lum-surface border border-lum-border text-lum-midnight hover:bg-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Déroulant Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-lum-border bg-white/98 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 shadow-card animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1 mb-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-lum-midnight hover:bg-lum-surface transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-lum-muted" />
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-lum-border space-y-3">
            <a
              href={getWhatsAppUrl(
                "Bonjour Light Studio ! Je souhaite échanger avec vous pour un devis direct."
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-lum-midnight text-white font-semibold text-sm shadow-card active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Demander un devis WhatsApp</span>
            </a>

            <div className="text-center">
              <span className="text-xs text-lum-muted">
                {siteConfig.location.zone} • {siteConfig.contact.phoneDisplay}
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
