import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative pt-4 pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Contenu éditorial centré ── */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">

          {/* Indicateur de statut — sobre, textuel */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-xs font-semibold text-lum-muted uppercase tracking-widest">
              Studio Créatif 360° · Abidjan, Côte d'Ivoire
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-syne font-bold text-4xl sm:text-5xl lg:text-6xl text-lum-midnight tracking-tight leading-[1.1] mb-6 text-balance">
            Donnez à votre marque l'impact{" "}
            <span className="text-lum-electric">cinématographique</span>{" "}
            qu'elle mérite.
          </h1>

          {/* Sous-titre */}
          <p className="text-base sm:text-lg text-lum-slate leading-relaxed max-w-2xl mx-auto mb-8">
            De l'affiche publicitaire percutante au tournage vidéo 4K et au site web vitrine —
            Light Studio propulse l'image des PME et créateurs ambitieux à Abidjan.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl(
                "Bonjour Light Studio ! Je souhaite lancer un projet créatif."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-lum-midnight text-white font-semibold text-sm hover:bg-lum-navy transition-colors duration-150 group"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              <span>Lancer mon projet sur WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
            </a>

            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-white border border-lum-border text-lum-midnight font-semibold text-sm hover:border-lum-border-strong hover:bg-lum-surface transition-colors duration-150"
            >
              Explorer nos réalisations
            </a>
          </div>

          {/* Métriques — typographiques, sans cartes */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 pt-8 border-t border-lum-border">
            <div className="text-center">
              <p className="font-syne font-bold text-2xl text-lum-midnight">+150</p>
              <p className="text-xs text-lum-muted font-medium mt-0.5">Projets livrés</p>
            </div>
            <div className="w-px h-8 bg-lum-border hidden sm:block" />
            <div className="text-center">
              <p className="font-syne font-bold text-2xl text-lum-midnight">48h</p>
              <p className="text-xs text-lum-muted font-medium mt-0.5">Premier rendu</p>
            </div>
            <div className="w-px h-8 bg-lum-border hidden sm:block" />
            <div className="text-center">
              <p className="font-syne font-bold text-2xl text-lum-midnight">98%</p>
              <p className="text-xs text-lum-muted font-medium mt-0.5">Satisfaction client</p>
            </div>
          </div>
        </div>

        {/* ── Image showreel ── */}
        <div className="relative max-w-5xl mx-auto w-full">
          <div className="relative rounded-2xl overflow-hidden border border-lum-border bg-lum-midnight aspect-[16/9]">
            {/* Vidéo de présentation — autoplay, loop, muet */}
            <video
              src="/hero-video-prensentation.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dégradé bas pour lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Légende bas de cadre */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-white/60 font-semibold mb-1">
                  Excellence Visuelle · Abidjan
                </p>
                <p className="font-syne font-bold text-base sm:text-lg text-white leading-snug max-w-sm">
                  Captation 4K · Direction Graphique · Expériences Web
                </p>
              </div>
              <a
                href="#portfolio"
                className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-lum-midnight text-xs font-bold hover:bg-lum-surface transition-colors shrink-0"
              >
                Voir les réalisations
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
