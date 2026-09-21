"use client";

import { useEffect, useRef, useState } from "react";
import {
  Compass,
  Palette,
  Video,
  Rocket,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

export interface StepItem {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  deliverable: string;
  duration: string;
  icon: typeof Compass;
  align: "left" | "right";
  initialRotation: number; // en degrés
  swingDuration: string;   // durée du cycle pendulaire
  swingDelay: string;      // décalage de phase pour un balancement naturel
}

const STEPS: StepItem[] = [
  {
    id: "step-1",
    num: "01",
    title: "Cadrage & Vision",
    tagline: "Verrouiller l'objectif commercial et le brief.",
    description:
      "Immersion dans votre univers de marque, analyse des attentes de votre cible à Abidjan et cadrage des livrables. Nous définissons le calendrier garanti sous contrat.",
    deliverable: "Brief créatif validé & calendrier de production garanti",
    duration: "24h à 48h",
    icon: Compass,
    align: "right",
    initialRotation: 3.5,
    swingDuration: "4.4s",
    swingDelay: "0s",
  },
  {
    id: "step-2",
    num: "02",
    title: "Direction Artistique",
    tagline: "Donner corps à l'émotion avant de produire.",
    description:
      "Création des planches de tendances (moodboards), écriture des storyboards pour les tournages vidéo et premières ébauches graphiques haute fidélité soumises à votre validation.",
    deliverable: "Storyboards vidéo, moodboards & maquettes validés",
    duration: "48h à 72h",
    icon: Palette,
    align: "left",
    initialRotation: -4,
    swingDuration: "4.8s",
    swingDelay: "-1.2s",
  },
  {
    id: "step-3",
    num: "03",
    title: "Production & Tournage 4K",
    tagline: "L'artisanat cinéma : caméras, pixels et code.",
    description:
      "Captation multi-caméras 4K et prises de vue drone à Abidjan, composition vectorielle des affiches ou développement interactif du site web sous Next.js.",
    deliverable: "Rushes cinéma 4K, affiches HD & prototypes web",
    duration: "3 à 7 jours",
    icon: Video,
    align: "right",
    initialRotation: 4,
    swingDuration: "4.2s",
    swingDelay: "-2.4s",
  },
  {
    id: "step-4",
    num: "04",
    title: "Livraison & Diffusion HD",
    tagline: "Fichiers sources 100% cédés et mise en ligne.",
    description:
      "Étalonnage cinématographique, sound design immersif, exports tous formats (16:9 et 9:16) et déploiement du site prêt à convertir vos visiteurs en clients WhatsApp.",
    deliverable: "Pack complet fichiers sources HD & mise en ligne directe",
    duration: "Livraison finale",
    icon: Rocket,
    align: "left",
    initialRotation: -3.5,
    swingDuration: "5s",
    swingDelay: "-0.8s",
  },
];

export function ProcessFlow() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 1. Progression dans la section
      const totalHeight = rect.height;
      const currentScroll = windowHeight * 0.7 - rect.top;
      const progress = Math.min(Math.max(currentScroll / totalHeight, 0), 1);
      setScrollPercent(progress);

      // 2. Mesure de la vitesse de scroll pour accentuer le balancement
      const now = Date.now();
      const dt = Math.max(now - lastTime.current, 10);
      const dy = window.scrollY - lastScrollY.current;
      const speed = Math.min(Math.abs(dy / dt) * 3, 5); // amplifie l'angle jusqu'à 5°

      setScrollVelocity(dy > 0 ? speed : -speed);
      lastScrollY.current = window.scrollY;
      lastTime.current = now;

      // Amortissement du scroll après arrêt
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrollVelocity(0);
      }, 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="methode"
      className="relative py-28 lg:py-36 bg-slate-50/75 border-b border-lum-border overflow-visible scroll-mt-20"
    >
      {/* Styles CSS injectés pour le mouvement de balancement pendulaire */}
      <style jsx>{`
        @keyframes pendulumSwing {
          0% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(4deg);
          }
          100% {
            transform: rotate(-4deg);
          }
        }
        .hanging-frame-sway {
          transform-origin: top center;
          animation-name: pendulumSwing;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .hanging-frame-sway:hover {
          animation-play-state: paused !important;
          transform: rotate(0deg) scale(1.02) !important;
        }
      `}</style>

      {/* Arrière-plan grille graphique type papier millimétré de bureau d'architecte */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="max-w-2xl mx-auto text-center mb-24 lg:mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-lum-border text-xs font-semibold text-lum-midnight shadow-subtle mb-4">
            <Sparkles className="w-3.5 h-3.5 text-lum-electric" />
            <span>Notre Méthode de Création 360°</span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-lum-midnight tracking-tight leading-[1.15] mb-4">
            De l'idée brute au chef-d'œuvre livré : notre parcours en 4 étapes.
          </h2>

          <p className="font-inter text-xs sm:text-sm lg:text-base text-lum-slate max-w-xl mx-auto leading-relaxed">
            Comme des tableaux d'art suspendus à l'atelier : chaque étape est posée avec soin, rigueur et créativité.
          </p>
        </div>

        {/* Scène Principale : Ligne en S et les 4 Cadres Suspendus */}
        <div className="relative">
          {/* Tracé SVG courbe en S pour grand écran (Desktop) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 1850"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Ligne guide pointillée */}
              <path
                d="M 690 140 C 450 280, 260 400, 280 600 C 300 820, 730 840, 710 1060 C 690 1280, 260 1300, 280 1520 C 300 1660, 440 1720, 560 1740"
                stroke="#CBD5E1"
                strokeWidth="3"
                strokeDasharray="10 10"
              />

              {/* Fil conducteur lumineux actif au scroll */}
              <path
                d="M 690 140 C 450 280, 260 400, 280 600 C 300 820, 730 840, 710 1060 C 690 1280, 260 1300, 280 1520 C 300 1660, 440 1720, 560 1740"
                stroke="#2563EB"
                strokeWidth="4.5"
                strokeDasharray="10 10"
                style={{
                  strokeDashoffset: 2200 - scrollPercent * 2200,
                  transition: "stroke-dashoffset 0.15s ease-out",
                }}
              />
            </svg>
          </div>

          {/* Ligne pointillée verticale sur Mobile */}
          <div className="lg:hidden absolute left-4 sm:left-8 top-12 bottom-20 w-0.5 border-l-2 border-dashed border-slate-300 pointer-events-none" />

          {/* Liste des 4 Cadres Suspendus avec balancement pendulaire */}
          <div className="space-y-20 lg:space-y-40 relative z-10">
            {STEPS.map((step) => {
              const Icon = step.icon;
              const isRight = step.align === "right";

              return (
                <div
                  key={step.id}
                  className={`flex flex-col lg:flex-row items-center ${
                    isRight ? "lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  <div className="w-full lg:w-[490px] pl-10 sm:pl-16 lg:pl-0">
                    {/* Dispositif de Suspension : Clou métallique + Fil en V au-dessus du cadre */}
                    <div className="flex flex-col items-center mb-1">
                      {/* Le Clou métallique planté dans le mur */}
                      <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-slate-600 via-slate-800 to-slate-950 border-2 border-slate-300 shadow-md flex items-center justify-center relative z-20">
                        <div className="w-1 h-1 rounded-full bg-slate-400" />
                      </div>

                      {/* Les deux brins de fil en V qui descendent vers l'œillet du cadre */}
                      <svg
                        className="w-12 h-7 -mt-0.5 text-slate-400"
                        viewBox="0 0 48 28"
                        fill="none"
                      >
                        <path
                          d="M 24 2 L 6 28"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeDasharray="2 2"
                        />
                        <path
                          d="M 24 2 L 42 28"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeDasharray="2 2"
                        />
                      </svg>
                    </div>

                    {/* Cadre Photo / Tableau qui balance de gauche à droite */}
                    <div
                      className="hanging-frame-sway cursor-pointer group"
                      style={{
                        animationDuration: step.swingDuration,
                        animationDelay: step.swingDelay,
                      }}
                    >
                      <div className="relative bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-card group-hover:shadow-2xl group-hover:border-lum-electric/50 transition-all duration-300">
                        {/* L'œillet chromé sur le cadre où s'attache le fil */}
                        <div className="w-5 h-5 rounded-full bg-slate-200 border-2 border-slate-400 shadow-inner flex items-center justify-center mx-auto -mt-2 mb-6 group-hover:border-lum-electric transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-700 shadow-sm" />
                        </div>

                        {/* Numéro & Durée */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-lum-surface text-lum-electric border border-lum-border flex items-center justify-center text-xs font-bold shadow-sm group-hover:bg-lum-midnight group-hover:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="font-syne font-extrabold text-xs tracking-wider uppercase text-lum-muted">
                              Étape {step.num}
                            </span>
                          </div>

                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lum-surface border border-lum-border text-[11px] font-semibold text-lum-slate">
                            <Clock className="w-3 h-3 text-lum-electric" />
                            <span>{step.duration}</span>
                          </span>
                        </div>

                        {/* Titre & Slogan */}
                        <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-lum-midnight mb-1.5 tracking-tight group-hover:text-lum-electric transition-colors">
                          {step.title}
                        </h3>

                        <p className="text-xs sm:text-sm font-semibold text-lum-midnight/80 mb-3">
                          « {step.tagline} »
                        </p>

                        <p className="font-inter text-xs sm:text-sm text-lum-slate leading-relaxed mb-6 font-normal">
                          {step.description}
                        </p>

                        {/* Livrable Clé de l'étape */}
                        <div className="pt-4 border-t border-slate-100 flex items-start gap-2 text-xs text-lum-midnight font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-lum-midnight font-bold">Livrable :</strong>{" "}
                            {step.deliverable}
                          </span>
                        </div>

                        {/* Indication visuelle discrète au survol */}
                        <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity text-center font-medium">
                          ✨ Cadre stabilisé pour lecture confortable
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sceau / Annotation finale manuscrite à la fin du parcours */}
          <div className="mt-20 lg:mt-28 text-center lg:text-right max-w-md ml-auto mr-4 lg:mr-12">
            <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-lum-midnight text-white text-xs sm:text-sm font-extrabold shadow-card border-2 border-emerald-400 hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Ready to be delivered • Prêt à convertir !</span>
            </div>
            <p className="text-[11px] text-lum-muted mt-2 font-medium">
              Fichiers sources cédés • Formats 4K & réseaux sociaux inclus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
