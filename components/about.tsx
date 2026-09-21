"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { MapPin, Lightbulb, Film, Palette, Globe, Quote } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "L'Excellence Créative",
    description:
      "Chaque projet est traité comme une œuvre. Nous n'acceptons que le résultat qui dépasse les attentes.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: Film,
    title: "La Vision Cinématique",
    description:
      "Nos créations racontent une histoire. Du storyboard au rendu final, chaque détail est pensé pour émouvoir.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Palette,
    title: "L'Identité Africaine",
    description:
      "Abidjan est notre terreau créatif. Nous célébrons l'énergie, les couleurs et l'audace de l'Afrique moderne.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: Globe,
    title: "L'Ambition Internationale",
    description:
      "Des standards mondiaux, ancrés localement. Vos visuels rivalisent avec les meilleures productions mondiales.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
];

const milestones = [
  { year: "2021", label: "Fondation du studio à Cocody, Abidjan" },
  { year: "2022", label: "Premier spot publicitaire cinématique 4K pour une marque nationale" },
  { year: "2023", label: "Expansion vers le web design et les campagnes digitales complètes" },
  { year: "2024", label: "+120 projets livrés, reconnaissance dans 4 pays d'Afrique de l'Ouest" },
  { year: "2025", label: "Lancement de la plateforme web et offre clés en main 360°" },
];

export function About() {
  return (
    <section
      id="studio"
      className="py-20 lg:py-28 bg-lum-midnight scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── En-tête ─── */}
        <ScrollReveal variant="up">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lum-electric/20 text-lum-electric text-xs font-semibold uppercase tracking-wider mb-5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Abidjan, Cocody — Côte d'Ivoire</span>
            </div>
            <h2 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05] mb-6">
              Né de la lumière.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lum-electric to-cyan-400">
                Construit pour l'impact.
              </span>
            </h2>
            <p className="font-inter text-lg text-white/60 leading-relaxed max-w-2xl">
              Light Studio n'est pas une agence ordinaire. C'est un collectif de créatifs passionnés,
              basé au cœur d'Abidjan, qui transforme les ambitions de marques ivoiriennes et africaines
              en visuels qui arrêtent le scroll, déclenchent l'émotion, et font vendre.
            </p>
          </div>
        </ScrollReveal>

        {/* ─── Bloc principal : Citation + Image équipe ─── */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <ScrollReveal variant="left">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-lum-electric/20 rounded-2xl blur-xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/images/studio-team.jpg"
                  alt="L'équipe créative de Light Studio à Abidjan"
                  width={700}
                  height={470}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-lum-midnight/80 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-white text-sm font-semibold">
                      L'équipe Light Studio · Abidjan Cocody
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <div className="flex flex-col gap-8">
              {/* Grande citation */}
              <div className="relative pl-6 border-l-2 border-lum-electric">
                <Quote className="absolute -left-3 -top-1 w-5 h-5 text-lum-electric fill-lum-electric" />
                <p className="font-syne text-2xl text-white font-semibold leading-snug">
                  "Chaque marque mérite une image à la hauteur de ses ambitions.
                  Nous ne faisons pas du joli — nous faisons du puissant."
                </p>
                <p className="mt-3 text-white/40 text-sm font-medium">
                  — La Fondatrice de Light Studio
                </p>
              </div>

              {/* Paragraphe histoire */}
              <p className="text-white/60 font-inter text-base leading-relaxed">
                Fondé en 2021 à Cocody, Light Studio est né d'un constat simple :
                les entreprises ivoiriennes méritaient des productions créatives de
                niveau international, accessibles localement. Depuis, nous avons
                réalisé plus de <strong className="text-white">150 projets</strong> pour
                des PME, des artistes, des restaurants, des startups et des grandes
                marques à travers la sous-région.
              </p>

              {/* Image workspace */}
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/studio-workspace.jpg"
                  alt="Espace de création Light Studio"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ─── Timeline / Milestones ─── */}
        <ScrollReveal variant="up">
          <div className="mb-20">
            <h3 className="font-syne font-bold text-2xl text-white mb-8 text-center">
              Notre Parcours
            </h3>
            <div className="relative">
              {/* Ligne verticale */}
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
              <div className="flex flex-col gap-8">
                {milestones.map((m, i) => (
                  <ScrollReveal key={m.year} variant="up" delay={i * 100 as 0 | 100 | 200 | 300 | 400 | 500}>
                    <div
                      className={`relative flex items-start gap-6 ${
                        i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                      } pl-12 sm:pl-0`}
                    >
                      {/* Nœud sur la ligne */}
                      <div className="absolute left-4 sm:left-1/2 top-1 w-3 h-3 rounded-full bg-lum-electric border-2 border-lum-midnight -translate-x-1/2 shadow-[0_0_12px_rgba(37,99,235,0.8)]" />
                      {/* Contenu */}
                      <div
                        className={`sm:w-[45%] ${
                          i % 2 === 0 ? "sm:text-right sm:pr-8" : "sm:text-left sm:pl-8 sm:ml-auto"
                        }`}
                      >
                        <span className="font-syne font-extrabold text-3xl text-lum-electric">
                          {m.year}
                        </span>
                        <p className="text-white/60 font-inter text-sm mt-1 leading-relaxed">
                          {m.label}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ─── Valeurs ─── */}
        <ScrollReveal variant="up">
          <h3 className="font-syne font-bold text-2xl text-white mb-8 text-center">
            Ce qui nous anime
          </h3>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} variant="up" delay={(i * 100) as 0 | 100 | 200 | 300 | 400 | 500}>
              <div className="group rounded-2xl p-6 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className={`w-10 h-10 rounded-xl ${v.bg} flex items-center justify-center mb-4`}>
                  <v.icon className={`w-5 h-5 ${v.color}`} />
                </div>
                <h4 className="font-syne font-bold text-white text-base mb-2">
                  {v.title}
                </h4>
                <p className="text-white/50 text-sm font-inter leading-relaxed">
                  {v.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
