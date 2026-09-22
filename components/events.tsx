"use client";

import { useState } from "react";
import {
  Camera,
  Clapperboard,
  Globe,
  Palette,
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Radio,
  Film,
  MessageCircle,
} from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";

/* ─── Données ─── */
const EVENTS = [
  {
    id: "ev-01",
    type: "tournage",
    status: "live",
    label: "En cours",
    date: "22 – 24 Sept. 2026",
    title: "Tournage Cinématique — Lancement NOVA Coffee",
    description:
      "Captation 4K et réalisation complète de la campagne de lancement de la nouvelle marque de café premium ivoirienne. Drone, steady-cam, interviews fondateurs.",
    location: "Abidjan – Cocody, Zone 4",
    duration: "3 jours",
    tags: ["Vidéo 4K", "Drone", "Branding"],
    icon: Clapperboard,
  },
  {
    id: "ev-02",
    type: "evenement",
    status: "upcoming",
    label: "À venir",
    date: "05 Oct. 2026",
    title: "Avant-Première — Court-Métrage « Lumières d'Abidjan »",
    description:
      "Projection exclusive de notre court-métrage documentaire immersif sur les artisans et créateurs de la capitale économique de Côte d'Ivoire. Entrée sur invitation.",
    location: "Palais de la Culture, Abidjan",
    duration: "Soirée privée · 20h",
    tags: ["Cinéma", "Documentaire", "Invitation"],
    icon: Film,
  },
  {
    id: "ev-03",
    type: "formation",
    status: "upcoming",
    label: "Places limitées",
    date: "12 Oct. 2026",
    title: "Workshop — Identité Visuelle pour Entrepreneurs",
    description:
      "Masterclass intensive d'une journée pour apprendre à construire une charte graphique solide, choisir ses couleurs et typographies, et créer ses premiers visuels pro.",
    location: "Studio Light — Cocody, Abidjan",
    duration: "Full Day · 9h à 17h",
    tags: ["Formation", "Design", "8 places"],
    icon: Palette,
  },
  {
    id: "ev-04",
    type: "web",
    status: "upcoming",
    label: "Lancement",
    date: "18 Oct. 2026",
    title: "Mise en Ligne — Site E-commerce Kanga & Co.",
    description:
      "Livraison et mise en production du site marchand Next.js de la boutique de mode africaine contemporaine avec +120 références produit.",
    location: "En ligne",
    duration: "Livraison finale",
    tags: ["Next.js", "E-commerce", "Mode"],
    icon: Globe,
  },
  {
    id: "ev-05",
    type: "tournage",
    status: "upcoming",
    label: "À venir",
    date: "25 – 27 Oct. 2026",
    title: "Shooting Photo & Vidéo — Collection Automne",
    description:
      "Direction artistique complète du shooting de la nouvelle collection automne d'une marque de mode locale. Ambiance studio et extérieurs, retouches incluses.",
    location: "Studio Light + Plateau Akwaba",
    duration: "3 jours",
    tags: ["Photographie", "Mode", "Studio"],
    icon: Camera,
  },
  {
    id: "ev-06",
    type: "evenement",
    status: "upcoming",
    label: "Inscription ouverte",
    date: "08 Nov. 2026",
    title: "Conférence — Créer sa Marque en Afrique de l'Ouest",
    description:
      "Panel de discussions avec des entrepreneurs ivoiriens, ghanéens et sénégalais sur les défis et opportunités de construire une marque forte en Afrique.",
    location: "CCIA, Abidjan Plateau",
    duration: "Journée · 9h à 18h",
    tags: ["Business", "Branding", "Réseau"],
    icon: Globe,
  },
];

const FILTERS = [
  { label: "Tout", value: "all" },
  { label: "Tournages", value: "tournage" },
  { label: "Événements", value: "evenement" },
  { label: "Formations", value: "formation" },
  { label: "Lancements Web", value: "web" },
];

/* ─── Composant ─── */
export function Events() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? EVENTS
      : EVENTS.filter((e) => e.type === activeFilter);

  const liveEvent = EVENTS.find((e) => e.status === "live");

  return (
    <section id="agenda" className="py-20 lg:py-28 bg-lum-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── En-tête ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-lum-electric mb-4">
              Agenda du Studio
            </p>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Light Studio en action
            </h2>
            <p className="mt-3 text-base text-white/55 max-w-xl leading-relaxed">
              Tournages, avant-premières, formations et lancements — suivez l'actualité du studio.
            </p>
          </div>

          {/* Badge LIVE */}
          {liveEvent && (
            <div className="flex items-center gap-2.5 px-4 py-2.5 border border-white/15 rounded-lg shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0" />
              <div>
                <p className="text-red-400 font-bold text-xs uppercase tracking-wide flex items-center gap-1.5">
                  <Radio className="w-3 h-3" />
                  Tournage en direct
                </p>
                <p className="text-white/50 text-xs mt-0.5">{liveEvent.date}</p>
              </div>
            </div>
          )}
        </div>

        {/* ── Filtres — texte, pas pilules ── */}
        <div className="flex flex-wrap gap-0 mb-8 border-b border-white/10">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-3 text-sm font-medium transition-colors duration-150 border-b-2 ${
                activeFilter === f.value
                  ? "border-lum-electric text-white"
                  : "border-transparent text-white/40 hover:text-white/70"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ── Liste des événements ── */}
        <div className="divide-y divide-white/8 border-t border-white/8">
          {filtered.map((event) => {
            const Icon = event.icon;
            const isLive = event.status === "live";

            return (
              <div
                key={event.id}
                className="group py-7 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-start"
              >
                {/* Date + icône */}
                <div className="sm:col-span-3 flex items-center gap-3 sm:flex-col sm:items-start sm:gap-1.5">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-white/30 shrink-0" />
                    <span
                      className={`text-xs font-bold uppercase tracking-wide ${
                        isLive ? "text-red-400" : "text-white/40"
                      }`}
                    >
                      {isLive && (
                        <span className="inline-flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                        </span>
                      )}{" "}
                      {event.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/40 text-xs sm:mt-1">
                    <Calendar className="w-3 h-3 shrink-0" />
                    <span>{event.date}</span>
                  </div>
                </div>

                {/* Titre + description */}
                <div className="sm:col-span-6">
                  <h3 className="font-syne font-bold text-base sm:text-lg text-white mb-2 group-hover:text-lum-electric transition-colors duration-150">
                    {event.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-white/40 border border-white/10 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Lieu + durée */}
                <div className="sm:col-span-3 flex flex-col gap-2 sm:text-right">
                  <div className="flex items-center gap-1.5 text-white/40 text-xs sm:justify-end">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/40 text-xs sm:justify-end">
                    <Clock className="w-3 h-3 shrink-0" />
                    <span>{event.duration}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTAs ── */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <p className="text-white/40 text-sm">
            📍 Abidjan, Cocody — Interventions dans toute l'Afrique de l'Ouest
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={getWhatsAppUrl(
                "Bonjour Light Studio ! J'ai vu votre agenda et j'aimerais collaborer sur un prochain tournage ou événement."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-lum-midnight font-semibold text-sm rounded-md hover:bg-lum-surface transition-colors duration-150 group"
            >
              <MessageCircle className="w-4 h-4" />
              Collaborer sur un projet
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
            </a>
            <a
              href={getWhatsAppUrl(
                "Bonjour Light Studio ! Je souhaite m'inscrire à l'une de vos formations."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-medium text-sm rounded-md transition-colors duration-150"
            >
              S'inscrire à une formation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
