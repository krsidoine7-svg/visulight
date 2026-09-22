"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { MapPin } from "lucide-react";

const values = [
  {
    num: "01",
    title: "L'Excellence Créative",
    description:
      "Chaque projet est traité comme une œuvre. Nous n'acceptons que le résultat qui dépasse les attentes.",
  },
  {
    num: "02",
    title: "La Vision Cinématique",
    description:
      "Nos créations racontent une histoire. Du storyboard au rendu final, chaque détail est pensé pour émouvoir.",
  },
  {
    num: "03",
    title: "L'Identité Africaine",
    description:
      "Abidjan est notre terreau créatif. Nous célébrons l'énergie, les couleurs et l'audace de l'Afrique moderne.",
  },
  {
    num: "04",
    title: "L'Ambition Internationale",
    description:
      "Des standards mondiaux, ancrés localement. Vos visuels rivalisent avec les meilleures productions mondiales.",
  },
];

const milestones = [
  { year: "T1 2025", label: "Fondation du studio à Cocody, Abidjan & lancement des offres 360°" },
  { year: "T2 2025", label: "Déploiement des visuels grand format & spots publicitaires 4K" },
  { year: "T3 2025", label: "+150 visuels et projets créatifs livrés pour marques et créateurs" },
];

export function About() {
  return (
    <section
      id="studio"
      className="py-20 lg:py-28 bg-lum-midnight scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── En-tête ── */}
        <ScrollReveal variant="up">
          <div className="mb-14 lg:mb-18">
            <div className="flex items-center gap-2 mb-5">
              <MapPin className="w-3.5 h-3.5 text-lum-electric shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-widest text-lum-electric">
                Abidjan, Cocody — Côte d'Ivoire
              </span>
            </div>
            <h2 className="font-syne font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05] max-w-3xl">
              Né de la lumière.{" "}
              <span className="text-lum-electric">
                Construit pour l'impact.
              </span>
            </h2>
            <p className="mt-6 text-base text-white/60 leading-relaxed max-w-2xl">
              Light Studio n'est pas une agence ordinaire. C'est un collectif de créatifs passionnés,
              basé au cœur d'Abidjan, qui transforme les ambitions de marques ivoiriennes et africaines
              en visuels qui arrêtent le scroll, déclenchent l'émotion, et font vendre.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Image + Citation ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <ScrollReveal variant="left">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/studio-team.jpg"
                alt="L'équipe créative de Light Studio à Abidjan"
                width={700}
                height={470}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span className="text-white text-xs font-medium">
                    L'équipe Light Studio · Abidjan Cocody
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <div className="flex flex-col gap-8">
              {/* Citation */}
              <blockquote className="pl-5 border-l-2 border-lum-electric">
                <p className="font-syne text-xl sm:text-2xl text-white font-semibold leading-snug">
                  "Chaque marque mérite une image à la hauteur de ses ambitions.
                  Nous ne faisons pas du joli — nous faisons du puissant."
                </p>
                <footer className="mt-4 text-white/40 text-sm">
                  — La Fondatrice de Light Studio
                </footer>
              </blockquote>

              {/* Histoire */}
              <p className="text-white/60 text-base leading-relaxed">
                Fondé en 2025 à Cocody, Light Studio est né d'un constat simple :
                les entreprises ivoiriennes méritaient des productions créatives de
                niveau international, accessibles localement. Depuis, nous avons
                réalisé plus de{" "}
                <strong className="text-white">150 projets</strong> pour
                des PME, des artistes, des restaurants, des startups et des grandes
                marques à travers la sous-région.
              </p>

              {/* Image workspace */}
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/studio-workspace.jpg"
                  alt="Espace de création Light Studio"
                  width={600}
                  height={300}
                  className="w-full h-44 object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Timeline ── */}
        <ScrollReveal variant="up">
          <div className="mb-20">
            <h3 className="font-syne font-bold text-2xl text-white mb-10">
              Notre parcours
            </h3>
            <div className="relative pl-6 sm:pl-0">
              {/* Ligne verticale */}
              <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-white/15" />
              <div className="flex flex-col gap-0">
                {milestones.map((m, index) => (
                  <div key={`${m.year}-${index}`} className="flex gap-6 sm:gap-10 items-start group py-5 border-b border-white/8 last:border-0">
                    <div className="relative shrink-0">
                      <div className="w-3 h-3 rounded-full bg-lum-electric mt-1.5 absolute -left-7 sm:-left-1" />
                      <span className="font-syne font-bold text-xl text-lum-electric sm:w-16 block">
                        {m.year}
                      </span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Valeurs — Liste, pas cartes ── */}
        <ScrollReveal variant="up">
          <h3 className="font-syne font-bold text-2xl text-white mb-8">
            Ce qui nous anime
          </h3>
          <div className="grid sm:grid-cols-2 gap-0 border-t border-white/10">
            {values.map((v) => (
              <div
                key={v.num}
                className="py-7 pr-8 border-b border-white/10 sm:odd:border-r sm:odd:pr-10"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-syne font-bold text-sm text-lum-electric">{v.num}</span>
                  <h4 className="font-syne font-bold text-white text-base">{v.title}</h4>
                </div>
                <p className="text-white/50 text-sm leading-relaxed pl-7">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
