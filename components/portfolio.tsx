"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import {
  Sparkles,
  Maximize2,
  X,
  Play,
  ArrowRight,
  MessageCircle,
  ExternalLink,
  Layers,
  Film,
  Globe,
  Award,
} from "lucide-react";

export type ProjectCategory = "all" | "affiches" | "videos" | "web";

export interface Project {
  id: string;
  title: string;
  category: "affiches" | "videos" | "web";
  categoryLabel: string;
  client: string;
  location: string;
  image: string;
  badge: string;
  description: string;
  results: string;
  deliverables: string[];
  whatsappMessage: string;
}

export const PROJECTS: Project[] = [
  {
    id: "abidjan-nocturne",
    title: "Campagne & Affiche Officielle « Abidjan Nocturne »",
    category: "affiches",
    categoryLabel: "Affiches & Graphisme",
    client: "Festival des Arts & Créativité Africaine",
    location: "Palais de la Culture, Abidjan",
    image: "/images/portfolio-affiche.jpg",
    badge: "Affiche 4x3 & Campagne Urbaine",
    description:
      "Direction artistique complète et création de l'affiche événementielle grand format, alliant typographie audacieuse, motifs géométriques ivoiriens et contrastes dorés chaleureux.",
    results: "+35 000 festivaliers mobilisés, visuels partagés par les plus grands artistes.",
    deliverables: [
      "Affiches publicitaires grand format 4x3 & abribus",
      "Packs complets pour réseaux sociaux (stories, carrousels, teasers)",
      "Badges VIP et signalétique événementielle au Palais de la Culture",
    ],
    whatsappMessage:
      "Bonjour Light Studio ! J'ai vu votre affiche pour Abidjan Nocturne et je souhaite une direction artistique similaire pour mon événement.",
  },
  {
    id: "spot-laguna-rooftop",
    title: "Spot Cinématographique « Sunset sur la Lagune »",
    category: "videos",
    categoryLabel: "Vidéos Cinématiques",
    client: "Groupe Hôtelier & Lounge Laguna",
    location: "Le Plateau, Abidjan",
    image: "/images/portfolio-video.jpg",
    badge: "Spot Marque 4K & Reels",
    description:
      "Production vidéo de prestige capturée à l'heure dorée avec objectif anamorphique. Mise en valeur de l'expérience rooftop et de la skyline majestueuse du Plateau.",
    results: "+280 000 vues organiques sur Instagram & TikTok, taux d'engagement record de 8.4%.",
    deliverables: [
      "Spot principal cinématique 60s en 4K (format 16:9)",
      "3 capsules courtes dynamiques (format vertical 9:16) pour Reels & TikTok",
      "Étalonnage couleur sur-mesure et sound design immersif",
    ],
    whatsappMessage:
      "Bonjour Light Studio ! J'ai adoré votre spot vidéo sur le Plateau d'Abidjan et je souhaite un tournage cinématique pour mon établissement.",
  },
  {
    id: "kunga-luxury-collection",
    title: "Plateforme Vitrine « Kunga Luxury Collection »",
    category: "web",
    categoryLabel: "Vitrines Web & Digital",
    client: "Résidences Hôtelières Kunga",
    location: "Assinie & Cocody, Abidjan",
    image: "/images/portfolio-web.jpg",
    badge: "Site Web Next.js & Réservations",
    description:
      "Conception d'un site vitrine haut de gamme combinant élégance éditoriale, rapidité de chargement absolue et intégration d'un tunnel de réservation direct par WhatsApp.",
    results: "+140% de réservations directes sans commission d'intermédiaire en 60 jours.",
    deliverables: [
      "Interface utilisateur (UI/UX) sur-mesure adaptée mobile-first",
      "Générateur de demande de séjour instantanée vers WhatsApp",
      "Optimisation SEO complète pour les recherches à Abidjan et en Côte d'Ivoire",
    ],
    whatsappMessage:
      "Bonjour Light Studio ! Je souhaite concevoir un site web haut de gamme dans le style de Kunga Luxury Collection.",
  },
];

const CATEGORIES: { key: ProjectCategory; label: string; icon: typeof Layers }[] = [
  { key: "all", label: "Tous les projets", icon: Layers },
  { key: "affiches", label: "Affiches & Graphisme", icon: Sparkles },
  { key: "videos", label: "Vidéos Cinématiques", icon: Film },
  { key: "web", label: "Vitrines Web", icon: Globe },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lum-electric/10 text-lum-electric text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showcase Réalisations</span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-lum-midnight tracking-tight leading-tight mb-4">
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
                onClick={() => setActiveCategory(cat.key)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-lum-midnight text-white shadow-card scale-105"
                    : "bg-lum-surface text-lum-slate hover:text-lum-midnight hover:bg-lum-border/50 border border-lum-border"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-emerald-400" : "text-lum-muted"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grille des Projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-lum-surface border border-lum-border overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              {/* Cadre Visuel avec bouton d'ouverture modal */}
              <div
                className="relative aspect-[4/3] w-full overflow-hidden bg-lum-midnight cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-lum-midnight/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Badge Catégorie flottant */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-lum-midnight/80 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white">
                    {project.badge}
                  </span>
                </div>

                {/* Bouton Aperçu Grand Écran */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-lum-midnight text-xs font-bold shadow-card">
                    <Maximize2 className="w-3.5 h-3.5 text-lum-electric" />
                    <span>Aperçu</span>
                  </span>
                </div>
              </div>

              {/* Détails du Projet */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-lum-muted font-medium mb-2">
                    <span>{project.client}</span>
                    <span>{project.location}</span>
                  </div>

                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="font-syne font-bold text-lg text-lum-midnight mb-3 hover:text-lum-electric cursor-pointer transition-colors duration-200 leading-snug"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-lum-slate leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Résultats chiffrés & CTA */}
                <div className="pt-4 border-t border-lum-border/60">
                  <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-emerald-600">
                    <Award className="w-4 h-4 shrink-0" />
                    <span className="line-clamp-1">{project.results}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white border border-lum-border hover:border-lum-midnight text-lum-midnight text-xs font-bold transition-all shadow-subtle hover:bg-lum-surface"
                    >
                      <span>Voir la fiche</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={getWhatsAppUrl(project.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2.5 rounded-full bg-lum-midnight text-white hover:bg-lum-navy transition-colors shadow-subtle"
                      aria-label="Contacter pour un projet similaire"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fenêtre Modale d'Aperçu Plein Écran */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-lum-midnight/70 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl bg-white border border-lum-border shadow-card overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton de Fermeture */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Fermer l'aperçu"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-lum-border text-lum-midnight hover:bg-white flex items-center justify-center shadow-card transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Agrandie */}
            <div className="relative aspect-[16/9] w-full bg-lum-midnight">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-lum-midnight/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                  {selectedProject.badge}
                </span>
              </div>
            </div>

            {/* Informations Détaillées */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1">
              <div className="flex items-center justify-between text-xs text-lum-muted font-medium mb-2">
                <span>Client : {selectedProject.client}</span>
                <span>{selectedProject.location}</span>
              </div>

              <h3 className="font-syne font-extrabold text-2xl text-lum-midnight mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-lum-slate leading-relaxed mb-6 font-normal">
                {selectedProject.description}
              </p>

              {/* Livrables */}
              <div className="p-4 rounded-2xl bg-lum-surface border border-lum-border mb-6">
                <span className="text-xs uppercase tracking-wider font-bold text-lum-midnight block mb-2">
                  Livrables & Expertises déployées :
                </span>
                <ul className="space-y-1.5">
                  {selectedProject.deliverables.map((item, i) => (
                    <li key={i} className="text-xs text-lum-slate flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-lum-electric mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact / Résultat */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/60 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 mb-1">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>Impact Commercial & Audience</span>
                </div>
                <p className="text-xs text-emerald-950 font-medium">
                  {selectedProject.results}
                </p>
              </div>

              {/* Bouton de commande pour un projet similaire */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-lum-border">
                <span className="text-xs text-lum-muted text-center sm:text-left">
                  Vous avez un projet similaire à Abidjan ?
                </span>

                <a
                  href={getWhatsAppUrl(selectedProject.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-lum-midnight text-white text-sm font-semibold hover:bg-lum-navy transition-all shadow-card"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Demander un devis pour ce format</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
