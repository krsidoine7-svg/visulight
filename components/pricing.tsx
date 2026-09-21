"use client";

import { useState, useEffect } from "react";
import { siteConfig, getWhatsAppUrl, formatPricing } from "@/config/site";
import {
  Sparkles,
  Check,
  MessageCircle,
  ArrowRight,
  Zap,
  Star,
  Clock,
  ShieldCheck,
  Tag,
  Boxes,
  Pause,
  Play,
} from "lucide-react";

export type PricingTab = "packs" | "carte";

export function Pricing() {
  const [activeTab, setActiveTab] = useState<PricingTab>("packs");
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  // Swipe automatique continu toutes les 4 secondes (avec jauge de progression fluide)
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 40; // mise à jour toutes les 40ms
    const totalDuration = 4000; // 4 secondes
    const step = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((current) => {
            const next = current === "packs" ? "carte" : "packs";
            setDirection(next === "carte" ? "right" : "left");
            return next;
          });
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleTabChange = (tab: PricingTab) => {
    if (tab === activeTab) return;
    setDirection(tab === "carte" ? "right" : "left");
    setActiveTab(tab);
    setProgress(0);
  };


  const carteOffers = [
    {
      id: "affiche-unitaire",
      title: "Affiche Pro Grand Format",
      category: "Graphisme & Print",
      priceXof: 45000,
      deliveryTime: "48h chrono",
      description: "Conception graphique d'impact pour événements, lancements de produits ou campagnes commerciales.",
      features: [
        "2 propositions de concepts graphiques",
        "Déclinaison Story (9:16) & Réseaux (1:1)",
        "Fichier PDF HD prêt pour impression grand format (4x3, bâche)",
        "Révisions incluses jusqu'à satisfaction",
      ],
      whatsappMessage:
        "Bonjour Light Studio ! Je souhaite commander une Affiche Pro Grand Format (45 000 FCFA).",
    },
    {
      id: "pack-reels-tiktok",
      title: "Pack 4 Reels / TikTok",
      category: "Vidéo Courte Cadence",
      priceXof: 85000,
      deliveryTime: "3 à 5 jours",
      description: "Montage dynamique de 4 vidéos courtes captivantes conçues pour maximiser la rétention et les partages.",
      features: [
        "Dérushage & rythme calibré pour les algorithmes",
        "Sous-titres dynamiques stylisés et animés",
        "Sound design & musiques tendance sous licence",
        "Export optimisé 1080x1920 (Qualité studio)",
      ],
      whatsappMessage:
        "Bonjour Light Studio ! Je souhaite commander le Pack 4 Reels/TikTok (85 000 FCFA).",
    },
    {
      id: "captation-4k",
      title: "Captation Événement 4K",
      category: "Tournage & Vidéo",
      priceXof: 120000,
      deliveryTime: "Demi-journée (4h)",
      description: "Présence d'un cadreur professionnel sur votre événement, séminaire ou inauguration à Abidjan.",
      features: [
        "Matériel cinéma 4K & micros sans fil pro",
        "Teaser récapitulatif 60s rythmé livré en 72h",
        "Sélection des 15 meilleures photos clés en HD",
        "Déplacement inclus sur Abidjan (Cocody, Plateau, etc.)",
      ],
      whatsappMessage:
        "Bonjour Light Studio ! Je souhaite réserver une Captation Événementielle 4K (120 000 FCFA).",
    },
    {
      id: "landing-express",
      title: "Page Web Vitrine Express",
      category: "Digital & Web",
      priceXof: 150000,
      deliveryTime: "5 à 7 jours",
      description: "Une page web d'atterrissage élégante et mobile-first pour convertir vos visiteurs directement sur WhatsApp.",
      features: [
        "Design sur-mesure aux couleurs de votre marque",
        "Boutons de contact WhatsApp pré-configurés",
        "Hébergement ultra-rapide sécurisé SSL",
        "Optimisation affichage smartphone garantie",
      ],
      whatsappMessage:
        "Bonjour Light Studio ! Je souhaite créer une Page Web Vitrine Express (150 000 FCFA).",
    },
  ];

  const packOffers = [
    {
      id: "pack-starter",
      name: "Pack Starter Visibilité",
      tagline: "L'essentiel pour crédibiliser votre marque et démarrer fort.",
      priceXof: 180000,
      badge: "Lancement de Marque",
      popular: false,
      features: [
        "Identité visuelle express (Logo vectoriel + charte couleurs)",
        "3 affiches publicitaires HD (campagne de lancement)",
        "2 vidéos courtes (Reels/TikTok) avec sous-titres animés",
        "Optimisation de votre présence WhatsApp Business & Google",
        "Délai de livraison : 7 jours ouvrés",
      ],
      whatsappMessage:
        "Bonjour Light Studio ! Je souhaite commander le Pack Starter Visibilité (180 000 FCFA).",
    },
    {
      id: "pack-croissance",
      name: "Pack Croissance 360°",
      tagline: "La solution la plus plébiscitée par les PME et créateurs d'Abidjan.",
      priceXof: 390000,
      badge: "Recommandé Studio",
      popular: true,
      features: [
        "Direction artistique complète & kit de marque complet",
        "6 visuels & affiches publicitaires multi-formats",
        "1 spot vidéo cinématique (tournage Abidjan inclus) + 4 déclinaisons Reels",
        "Site web vitrine moderne Next.js avec liaison WhatsApp directe",
        "Planification éditoriale & conseils d'angles publicitaires",
        "Accompagnement prioritaire pendant 30 jours",
      ],
      whatsappMessage:
        "Bonjour Light Studio ! Je souhaite commander le Pack Croissance 360° (390 000 FCFA).",
    },
    {
      id: "pack-signature",
      name: "Production Signature",
      tagline: "L'arsenal d'élite pour marques établies et lancements d'envergure.",
      priceXof: 850000,
      badge: "Prestige & Grand Compte",
      popular: false,
      features: [
        "Production film publicitaire cinéma (Caméras cinéma + drone 4K)",
        "Casting comédiens, repérage lieux & voix off studio professionnelle",
        "Campagne d'affichage complète (urbain 4x3 + digital complet)",
        "Plateforme web sur-mesure multi-pages avec SEO de pointe",
        "Shooting photo corporate de votre équipe & locaux à Abidjan",
        "Chef de projet dédié & disponibilité 7j/7",
      ],
      whatsappMessage:
        "Bonjour Light Studio ! Je souhaite échanger sur la formule Production Signature (850 000 FCFA).",
    },
  ];

  return (
    <section id="offres" className="py-20 lg:py-28 bg-lum-surface/60 border-y border-lum-border/60 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lum-electric/10 text-lum-electric text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tarifs Clairs & Sans Surprise</span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-lum-midnight tracking-tight leading-tight mb-4">
            Choisissez la formule adaptée à votre ambition.
          </h2>

          <p className="font-inter text-base sm:text-lg text-lum-slate max-w-2xl mx-auto mb-8">
            Besoin d’une prestation ponctuelle ou d’un pack complet 360° ? Tout est calibré pour un retour sur investissement rapide.
          </p>

          {/* Sélecteur à bascule avec Swipe Automatique Continu */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="inline-flex flex-col items-center"
          >
            {/* Conteneur sélecteur avec capsule glissante physique */}
            <div className="relative inline-flex items-center p-1.5 rounded-full bg-slate-100/90 border border-lum-border/80 shadow-inner w-[340px] sm:w-[480px] max-w-full select-none">
              {/* Capsule noire qui glisse physiquement d'un bouton à l'autre */}
              <div
                className="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] rounded-full bg-lum-midnight shadow-card transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform:
                    activeTab === "packs"
                      ? "translateX(0%)"
                      : "translateX(100%)",
                }}
              >
                {/* Jauge lumineuse animée intégrée à la capsule active */}
                <div className="absolute bottom-1 left-4 right-4 h-0.5 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-75 ${
                      activeTab === "packs" ? "bg-emerald-400" : "bg-lum-electric"
                    }`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Bouton Onglet Packs */}
              <button
                type="button"
                onClick={() => handleTabChange("packs")}
                className={`relative z-10 w-1/2 flex items-center justify-center gap-1.5 sm:gap-2 py-3 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 ${
                  activeTab === "packs"
                    ? "text-white"
                    : "text-lum-slate hover:text-lum-midnight"
                }`}
              >
                <Boxes
                  className={`w-4 h-4 transition-colors duration-300 ${
                    activeTab === "packs" ? "text-emerald-400" : "text-emerald-600"
                  }`}
                />
                <span>Packs Clés en Main</span>
                <span
                  className={`hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold transition-colors duration-300 ${
                    activeTab === "packs"
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  Économique
                </span>
              </button>

              {/* Bouton Onglet Services à la carte */}
              <button
                type="button"
                onClick={() => handleTabChange("carte")}
                className={`relative z-10 w-1/2 flex items-center justify-center gap-1.5 sm:gap-2 py-3 rounded-full text-xs sm:text-sm font-bold transition-colors duration-300 ${
                  activeTab === "carte"
                    ? "text-white"
                    : "text-lum-slate hover:text-lum-midnight"
                }`}
              >
                <Tag
                  className={`w-4 h-4 transition-colors duration-300 ${
                    activeTab === "carte" ? "text-lum-electric" : "text-lum-muted"
                  }`}
                />
                <span>Services à la Carte</span>
                <span
                  className={`hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold transition-colors duration-300 ${
                    activeTab === "carte"
                      ? "bg-blue-500/20 text-blue-300"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  Unitaire
                </span>
              </button>
            </div>

            {/* Indicateur d'état du swipe automatique */}
            <div className="mt-2.5 flex items-center gap-2 text-[11px] font-semibold text-lum-muted">
              {isPaused ? (
                <button
                  type="button"
                  onClick={() => setIsPaused(false)}
                  className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60 hover:bg-amber-100 transition-colors"
                >
                  <Pause className="w-3 h-3 text-amber-600" />
                  <span>En pause pour lecture • Cliquez pour relancer</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsPaused(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-lum-surface text-lum-slate border border-lum-border hover:bg-slate-100 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>Swipe automatique continu (4s) • Pause au survol</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* CONTENEUR AVEC TRANSITION SWIPE LATÉRALE & PAUSE AU SURVOL */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative min-h-[560px]"
        >
          <div
            key={activeTab}
            className={
              direction === "right"
                ? "animate-slide-in-right"
                : "animate-slide-in-left"
            }
          >
            {/* CONTENU : Onglet Packs Clés en Main */}
            {activeTab === "packs" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                {packOffers.map((pack) => {
                  const pricing = formatPricing(pack.priceXof);
                  return (
                    <div
                      key={pack.id}
                      className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                        pack.popular
                          ? "bg-lum-midnight text-white shadow-card scale-105 border-2 border-lum-electric"
                          : "bg-white text-lum-midnight border border-lum-border shadow-subtle hover:shadow-card"
                      }`}
                    >
                      {/* Badge Populaire / Best-seller */}
                      {pack.popular && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-lum-electric text-white text-xs font-bold shadow-md">
                            <Star className="w-3.5 h-3.5 fill-white" />
                            <span>Formule Recommandée</span>
                          </span>
                        </div>
                      )}

                      <div>
                        {/* Badge de catégorie */}
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                              pack.popular
                                ? "bg-white/10 text-emerald-400 border border-white/10"
                                : "bg-lum-surface text-lum-slate border border-lum-border"
                            }`}
                          >
                            {pack.badge}
                          </span>
                        </div>

                        <h3
                          className={`font-syne font-bold text-2xl mb-2 ${
                            pack.popular ? "text-white" : "text-lum-midnight"
                          }`}
                        >
                          {pack.name}
                        </h3>

                        <p
                          className={`text-xs sm:text-sm leading-relaxed mb-6 font-normal ${
                            pack.popular ? "text-white/80" : "text-lum-slate"
                          }`}
                        >
                          {pack.tagline}
                        </p>

                        {/* Bloc Prix avec double affichage FCFA / EUR */}
                        <div className="py-4 border-y border-lum-border/40 mb-6">
                          <div className="flex items-baseline gap-2">
                            <span
                              className={`font-syne font-extrabold text-3xl sm:text-4xl tracking-tight ${
                                pack.popular ? "text-white" : "text-lum-midnight"
                              }`}
                            >
                              {pricing.xof}
                            </span>
                            <span
                              className={`text-sm font-semibold ${
                                pack.popular ? "text-white/60" : "text-lum-muted"
                              }`}
                            >
                              ({pricing.eur})
                            </span>
                          </div>
                          <span
                            className={`text-[11px] mt-1 block ${
                              pack.popular ? "text-white/60" : "text-lum-muted"
                            }`}
                          >
                            Paiement par étapes • Facture d'entreprise disponible
                          </span>
                        </div>

                        {/* Liste des prestations incluses */}
                        <div className="mb-8">
                          <span
                            className={`text-xs font-bold uppercase tracking-wider block mb-3 ${
                              pack.popular ? "text-white/80" : "text-lum-midnight"
                            }`}
                          >
                            Tout ce qui est inclus :
                          </span>
                          <ul className="space-y-2.5">
                            {pack.features.map((feat, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                                <Check
                                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                                    pack.popular ? "text-emerald-400" : "text-emerald-600"
                                  }`}
                                />
                                <span className={pack.popular ? "text-white/90" : "text-lum-slate"}>
                                  {feat}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Bouton de commande WhatsApp */}
                      <a
                        href={getWhatsAppUrl(pack.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full font-bold text-sm transition-all duration-200 active:scale-95 shadow-sm ${
                          pack.popular
                            ? "bg-lum-electric hover:bg-lum-electric-hover text-white shadow-card"
                            : "bg-lum-midnight hover:bg-lum-navy text-white"
                        }`}
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-300" />
                        <span>Commander ce pack sur WhatsApp</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  );
                })}
              </div>
            )}

            {/* CONTENU : Onglet Services à la Carte */}
            {activeTab === "carte" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {carteOffers.map((item) => {
                  const pricing = formatPricing(item.priceXof);
                  return (
                    <div
                      key={item.id}
                      className="rounded-3xl bg-white border border-lum-border p-7 sm:p-8 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-lum-surface text-lum-electric border border-lum-border">
                            {item.category}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs text-lum-muted font-medium">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{item.deliveryTime}</span>
                          </span>
                        </div>

                        <h3 className="font-syne font-bold text-xl sm:text-2xl text-lum-midnight mb-2">
                          {item.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-lum-slate leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Prix */}
                        <div className="flex items-baseline gap-2 pb-4 mb-4 border-b border-lum-border/60">
                          <span className="font-syne font-extrabold text-2xl sm:text-3xl text-lum-midnight">
                            {pricing.xof}
                          </span>
                          <span className="text-xs font-semibold text-lum-muted">
                            ({pricing.eur})
                          </span>
                        </div>

                        {/* Caractéristiques */}
                        <ul className="space-y-2 mb-6">
                          {item.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-lum-slate">
                              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={getWhatsAppUrl(item.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-lum-surface hover:bg-lum-midnight text-lum-midnight hover:text-white border border-lum-border hover:border-lum-midnight text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 shadow-subtle group"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-600 group-hover:text-emerald-400" />
                        <span>Commander ce service</span>
                        <ArrowRight className="w-4 h-4 text-lum-muted group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </a>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Bannière de réassurance sous les tarifs */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-lum-border shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-syne font-bold text-sm text-lum-midnight block">
                Besoin d'un devis spécifique pour un grand projet ?
              </span>
              <span className="text-xs text-lum-muted">
                Devis détaillé sous 24h avec plan d'action personnalisé.
              </span>
            </div>
          </div>

          <a
            href={getWhatsAppUrl(
              "Bonjour Light Studio ! J'ai un projet spécifique à Abidjan et je souhaite un devis personnalisé sur-mesure."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lum-midnight text-white text-xs font-semibold hover:bg-lum-navy transition-all shrink-0"
          >
            <span>Demander un devis sur-mesure</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
