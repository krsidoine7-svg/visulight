"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Maximize2,
  ArrowRight,
  Layers,
  Film,
  Globe,
  Award,
  ChevronDown,
} from "lucide-react";
import { PROJECTS, Project, ProjectCategory } from "@/data/projects";

const INITIAL_PROJECT_COUNT = 6;
const PROJECT_INCREMENT = 6;

const CATEGORIES: { key: ProjectCategory; label: string; icon: typeof Layers }[] = [
  { key: "all", label: "Tous les projets", icon: Layers },
  { key: "affiches", label: "Affiches & Graphisme", icon: Layers },
  { key: "videos", label: "Vidéos Cinématiques", icon: Film },
  { key: "web", label: "Vitrines Web", icon: Globe },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_PROJECT_COUNT);

  // Filtrage par catégorie
  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  // Tranche de projets affichés (6 par défaut)
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const remainingCount = filteredProjects.length - visibleCount;

  // Changement de catégorie : réinitialisation à 6
  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    setVisibleCount(INITIAL_PROJECT_COUNT);
  };

  // Charger 6 projets supplémentaires
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PROJECT_INCREMENT);
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-lum-surface/60 border-y border-lum-border scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lum-midnight text-white text-xs font-semibold uppercase tracking-widest mb-4">
            <span>Showcase Réalisations</span>
          </div>

          <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl text-lum-midnight tracking-tight leading-tight mb-4">
            Nos productions parlent pour nous.
          </h2>

          <p className="font-inter text-base sm:text-lg text-lum-slate max-w-2xl mx-auto">
            Découvrez une sélection de projets réalisés à Abidjan : de la direction visuelle aux tournages
            et expériences numériques.
          </p>
        </div>

        {/* Filtres par Onglets */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => handleCategoryChange(cat.key)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-lum-midnight text-white shadow-card scale-105"
                    : "bg-white text-lum-slate hover:text-lum-midnight hover:bg-lum-surface border border-lum-border"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-emerald-400" : "text-lum-muted"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grille des Projets (6 visibles par défaut) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-white border border-lum-border overflow-hidden shadow-subtle hover:shadow-card hover:border-lum-midnight/30 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Overlay — Lien vers page dédiée */}
              <Link
                href={`/portfolio/${project.id}`}
                className="relative aspect-[16/10] w-full overflow-hidden bg-lum-midnight block"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Badge Catégorie sobre */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white">
                    {project.badge}
                  </span>
                </div>

                {/* Indication au survol */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-lum-midnight text-xs font-bold shadow-card">
                    <Maximize2 className="w-3.5 h-3.5 text-lum-electric" />
                    <span>Découvrir l'étude complète</span>
                  </span>
                </div>
              </Link>

              {/* Contenu de la Carte */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Client & Localisation */}
                  <div className="flex items-center justify-between text-xs font-semibold text-lum-electric mb-2.5">
                    <span className="truncate pr-2">{project.client}</span>
                    <span className="text-[11px] text-lum-muted font-normal shrink-0">{project.location}</span>
                  </div>

                  {/* Titre — Lien vers la page dédiée */}
                  <h3 className="font-syne font-bold text-lg text-lum-midnight mb-3 hover:text-lum-electric transition-colors leading-snug">
                    <Link href={`/portfolio/${project.id}`}>
                      {project.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-lum-slate leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Métrique d'impact & Bouton vers la page projet */}
                <div>
                  {/* Badge Résultat commercial */}
                  <div className="mb-5 p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/60 flex items-start gap-2.5 text-xs text-emerald-950 font-medium leading-tight">
                    <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{project.results}</span>
                  </div>

                  {/* Bouton d'action principal ouvrant la page dédiée */}
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-lum-midnight text-white text-xs font-bold hover:bg-lum-navy transition-all duration-200 shadow-sm group-hover:shadow-md"
                  >
                    <span>Voir l'étude de cas</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton "Charger plus de réalisations" si plus de 6 projets */}
        {remainingCount > 0 && (
          <div className="text-center pt-4">
            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-lum-midnight text-white text-xs sm:text-sm font-bold hover:bg-lum-navy transition-all duration-200 shadow-card hover:scale-105"
            >
              <span>Charger plus de réalisations ({remainingCount} restantes)</span>
              <ChevronDown className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
