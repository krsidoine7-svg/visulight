"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";

const NAV_LINKS = [
  { label: "Le Studio", href: "#studio" },
  { label: "Départements", href: "#departements" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Offres & Packs", href: "#offres" },
  { label: "Confiance", href: "#confiance" },
  { label: "Agenda", href: "#agenda" },
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

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white border-b border-lum-border shadow-xs py-3"
          : "bg-white/98 border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo Officiel */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={handleLinkClick}
          >
            <Image
              src="/images/logo-light.png"
              alt="Light Studio Logo"
              width={160}
              height={45}
              className="h-8 sm:h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation Bureau */}
          <nav className="hidden md:flex items-center gap-0">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-lum-slate hover:text-lum-midnight transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Bureau */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getWhatsAppUrl(
                "Bonjour Light Studio ! Je souhaite échanger sur un projet créatif."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-lum-midnight text-white text-sm font-semibold rounded-md hover:bg-lum-navy transition-colors duration-150"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              <span>Devis WhatsApp</span>
            </a>
          </div>

          {/* Hamburger Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-lum-border text-lum-midnight hover:bg-lum-surface transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-lum-border bg-white px-4 pt-2 pb-5 mt-2">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="py-3 text-base font-medium text-lum-midnight border-b border-lum-border/50 last:border-0 hover:text-lum-electric transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4">
            <a
              href={getWhatsAppUrl(
                "Bonjour Light Studio ! Je souhaite un devis rapide."
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-lum-midnight text-white font-semibold text-sm rounded-md"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              <span>Demander un devis WhatsApp</span>
            </a>
            <p className="text-center text-xs text-lum-muted mt-3">
              {siteConfig.location.zone} · {siteConfig.contact.phoneDisplay}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
