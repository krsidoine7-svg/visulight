import Image from "next/image";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import {
  MessageCircle,
  ArrowRight,
  Play,
  Sparkles,
  ShieldCheck,
  Zap,
  Award,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pb-24">
      {/* Lueur d'ambiance en arrière-plan (Luminescence subtle glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/60 via-transparent to-transparent -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenu textuel centré avec forte présence éditoriale */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          {/* Badge Studio officiel */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lum-surface border border-lum-border text-xs font-semibold text-lum-midnight shadow-subtle mb-6 animate-in fade-in duration-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-inter">Studio Créatif 360° • Abidjan, Côte d'Ivoire</span>
          </div>

          {/* H1 Signature Syne */}
          <h1 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-lum-midnight tracking-tight leading-[1.12] mb-6 text-balance">
            Donnez à votre marque l’impact{" "}
            <span className="relative inline-block text-lum-electric">
              cinématographique
            </span>{" "}
            qu’elle mérite.
          </h1>

          {/* Sous-titre persuasif */}
          <p className="font-inter text-base sm:text-lg lg:text-xl text-lum-slate max-w-2xl mx-auto leading-relaxed mb-8">
            De l’affiche publicitaire percutante au tournage vidéo cinématique et au site web vitrine :
            Light Studio propulse l'image des PME et créateurs ambitieux à Abidjan.
          </p>

          {/* Doubles Boutons d'Action (CTAs) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={getWhatsAppUrl(
                "Bonjour Light Studio ! Je souhaite échanger sur un projet créatif (graphisme, vidéo ou web)."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-lum-midnight text-white font-semibold text-sm hover:bg-lum-navy transition-all duration-200 shadow-card hover:scale-[1.02] active:scale-[0.98] group"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform duration-200" />
              <span>Lancer mon projet sur WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white border border-lum-border text-lum-midnight font-semibold text-sm hover:bg-lum-surface hover:border-lum-slate/30 transition-all duration-200 shadow-subtle hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play className="w-3.5 h-3.5 text-lum-electric fill-lum-electric" />
              <span>Explorer nos réalisations</span>
            </a>
          </div>

          {/* 3 Badges de réassurance immédiats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mt-10 pt-8 border-t border-lum-border/60 max-w-3xl mx-auto">
            <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-2xl bg-lum-surface/60 border border-lum-border/40">
              <div className="w-9 h-9 rounded-xl bg-white border border-lum-border flex items-center justify-center text-lum-electric shadow-sm shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="font-syne font-bold text-sm text-lum-midnight block">
                  +120 Projets Livrés
                </span>
                <span className="text-[11px] text-lum-muted">Marques & PME locales</span>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-2xl bg-lum-surface/60 border border-lum-border/40">
              <div className="w-9 h-9 rounded-xl bg-white border border-lum-border flex items-center justify-center text-lum-electric shadow-sm shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="font-syne font-bold text-sm text-lum-midnight block">
                  48h Premier Rendu
                </span>
                <span className="text-[11px] text-lum-muted">Réactivité garantie</span>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-2xl bg-lum-surface/60 border border-lum-border/40">
              <div className="w-9 h-9 rounded-xl bg-white border border-lum-border flex items-center justify-center text-lum-electric shadow-sm shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="font-syne font-bold text-sm text-lum-midnight block">
                  100% Studio Abidjan
                </span>
                <span className="text-[11px] text-lum-muted">Cocody / Deux-Plateaux</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vitrine Visuelle Cinématique (Showreel Showcase) */}
        <div className="relative max-w-5xl mx-auto group">
          {/* Cadre principal avec coins arrondis et ombre douce */}
          <div className="relative rounded-3xl overflow-hidden border border-lum-border bg-lum-midnight shadow-card aspect-[16/9] max-h-[540px]">
            <Image
              src="/images/hero-cinematic.jpg"
              alt="Light Studio - Production cinématique et création visuelle à Abidjan"
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />

            {/* Dégradé doux sur l'image pour valoriser les textes et badges */}
            <div className="absolute inset-0 bg-gradient-to-t from-lum-midnight/80 via-transparent to-black/20 pointer-events-none" />

            {/* Badge flottant supérieur droit */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lum-midnight/80 backdrop-blur-md text-white border border-white/20 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-lum-electric" />
                <span>Showreel 2026</span>
              </span>
            </div>

            {/* Légende et détails en bas de cadre */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="text-white max-w-md">
                <span className="text-[11px] uppercase tracking-widest text-white/70 font-semibold block mb-1">
                  Excellence Visuelle • Abidjan
                </span>
                <p className="font-syne font-bold text-lg sm:text-xl text-white drop-shadow-sm">
                  Captation Cinéma 4K, Direction Graphique & Expériences Web.
                </p>
              </div>

              {/* Bouton de lecture immersif */}
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2.5 rounded-full bg-white/95 text-lum-midnight hover:bg-white text-xs font-bold shadow-lg transition-transform duration-200 hover:scale-105"
              >
                <Play className="w-3.5 h-3.5 text-lum-electric fill-lum-electric" />
                <span>Voir les réalisations</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
