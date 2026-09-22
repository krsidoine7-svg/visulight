import Image from "next/image";
import Link from "next/link";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import {
  Mail,
  MapPin,
  Clock,
  Instagram,
  Youtube,
  Linkedin,
  ArrowUp,
  CheckCircle,
} from "lucide-react";
import { WhatsAppIcon, TikTokIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer id="contact" className="bg-lum-midnight text-white border-t border-lum-navy">
      {/* Zone Principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Colonne 1 : Identité & Réseaux */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5 min-w-0">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-light.png"
                alt="Light Studio Logo"
                width={180}
                height={50}
                className="h-10 w-auto object-contain brightness-0 invert"
                priority
              />
            </Link>

            <p className="font-inter text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Studio créatif 360° basé à Abidjan. Nous combinons direction artistique de prestige, captation cinéma et solutions web modernes pour convertir votre audience en clients fidèles.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Suivre nos créations :
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white hover:text-lum-midnight text-white flex items-center justify-center transition-all"
                  aria-label="Instagram Light Studio"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white hover:text-lum-midnight text-white flex items-center justify-center transition-all font-bold text-xs"
                  aria-label="TikTok Light Studio"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white hover:text-lum-midnight text-white flex items-center justify-center transition-all"
                  aria-label="YouTube Light Studio"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white hover:text-lum-midnight text-white flex items-center justify-center transition-all"
                  aria-label="LinkedIn Light Studio"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Colonne 2 : Navigation Rapide */}
          <div className="lg:col-span-3 min-w-0">
            <span className="font-syne font-bold text-base text-white block mb-5">
              Navigation Rapide
            </span>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-medium">
              <li>
                <a href="#departements" className="hover:text-lum-electric transition-colors flex items-center gap-2">
                  <span className="text-slate-500">›</span> Nos 4 Pôles Créatifs
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-lum-electric transition-colors flex items-center gap-2">
                  <span className="text-slate-500">›</span> Portfolio & Réalisations
                </a>
              </li>
              <li>
                <a href="#offres" className="hover:text-lum-electric transition-colors flex items-center gap-2">
                  <span className="text-slate-500">›</span> Offres à la Carte & Packs
                </a>
              </li>
              <li>
                <a href="#commande" className="hover:text-lum-electric transition-colors flex items-center gap-2">
                  <span className="text-slate-500">›</span> Configurateur Express WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl("Bonjour Light Studio ! Je souhaite planifier un appel téléphonique de cadrage.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2 font-semibold"
                >
                  <span className="text-emerald-500">›</span> Planifier un Échange Direct
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Studio & Coordonnées Abidjan */}
          <div className="lg:col-span-3 space-y-4 min-w-0">
            <span className="font-syne font-bold text-base text-white block mb-5">
              Studio Abidjan
            </span>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-lum-electric shrink-0 mt-0.5" />
                <span>{siteConfig.location.address}, {siteConfig.location.city}, {siteConfig.location.country}</span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-lum-electric shrink-0 mt-0.5" />
                <div>
                  <p>Lun - Ven : 08h30 - 18h30</p>
                  <p className="text-slate-400 text-xs">Samedi : Sur rendez-vous</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-lum-electric shrink-0 mt-0.5" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Bonjour Light Studio ! Je souhaite vous joindre directement par téléphone/WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-lum-midnight text-xs font-semibold transition-all border border-white/10"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Colonne 4 : Réassurance & Statut */}
          <div className="lg:col-span-2 space-y-4 min-w-0">
            <span className="font-syne font-bold text-base text-white block mb-5">
              Disponibilité du Studio
            </span>

            {/* Statut de disponibilité en direct */}
            <div className="p-4 rounded-lg border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span className="text-xs font-bold text-emerald-400">
                  Planning Ouvert
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tournages et projets graphiques acceptés pour ce mois à Abidjan et en région.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Devis transparents sous 24h</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Facturation d'entreprise avec RCCM</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Fichiers sources 100% cédés</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre Inférieure de Copyright */}
      <div className="border-t border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>Studio de Création & Vidéo Cinématique à Abidjan</span>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
            <Link
              href="/mentions-legales"
              className="text-slate-400 hover:text-white transition-colors text-[11px]"
            >
              Mentions légales
            </Link>
            <span className="text-slate-600">·</span>
            <Link
              href="/confidentialite"
              className="text-slate-400 hover:text-white transition-colors text-[11px]"
            >
              Confidentialité
            </Link>
            <span className="text-slate-600">·</span>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-all text-[11px]"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
