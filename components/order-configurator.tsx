"use client";

import { useState } from "react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Send,
  Building,
  User,
  CheckCircle2,
  HelpCircle,
  Zap,
} from "lucide-react";

export function OrderConfigurator() {
  const [service, setService] = useState("Pack Croissance 360°");
  const [budget, setBudget] = useState("300 000 à 800 000 FCFA (~450 € - 1 200 €)");
  const [timeline, setTimeline] = useState("D'ici 1 à 2 semaines");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("Abidjan");
  const [details, setDetails] = useState("");

  const servicesList = [
    "Affiche Pro & Graphisme",
    "Production Vidéo & Reels 4K",
    "Site Web Vitrine Moderne",
    "Pack Croissance 360° (Recommandé)",
    "Pack Starter Visibilité",
    "Production Signature (Grand Compte)",
    "Autre projet sur-mesure",
  ];

  const budgetList = [
    "Moins de 100 000 FCFA (~150 €)",
    "100 000 à 300 000 FCFA (~150 € - 450 €)",
    "300 000 à 800 000 FCFA (~450 € - 1 200 €)",
    "+800 000 FCFA (Production Prestige)",
    "À définir selon recommandation",
  ];

  const timelineList = [
    "Urgent (48h - 72h)",
    "D'ici 1 à 2 semaines",
    "Dans le mois",
    "En cours de cadrage",
  ];

  const generateMessage = () => {
    const clientName = name.trim() || "Un porteur de projet";
    const clientLocation = location.trim() || "Abidjan";
    const clientDetails = details.trim() || "À préciser de vive voix";

    return `🚀 *NOUVELLE DEMANDE DE PROJET - LIGHT STUDIO*
👤 *Client :* ${clientName} (${clientLocation})
🎯 *Prestation :* ${service}
💰 *Budget envisagé :* ${budget}
⏱️ *Délai souhaité :* ${timeline}
📝 *Précisions :* ${clientDetails}

Bonjour Light Studio ! Pouvons-nous échanger sur les disponibilités et la faisabilité de ce projet ?`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = generateMessage();
    const url = getWhatsAppUrl(formattedMsg);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="commande" className="py-20 lg:py-28 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lum-electric/10 text-lum-electric text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-lum-electric" />
            <span>Configurateur Express en 3 Étapes</span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-lum-midnight tracking-tight leading-tight mb-4">
            Configurez votre brief en 60 secondes.
          </h2>

          <p className="font-inter text-base sm:text-lg text-lum-slate max-w-2xl mx-auto">
            Sélectionnez vos critères pour générer un message structuré. Nous vous répondons sur WhatsApp
            avec une estimation précise et un calendrier d'exécution.
          </p>
        </div>

        {/* Formulaire & Carte de prévisualisation */}
        <div className="max-w-4xl mx-auto bg-lum-surface rounded-3xl border border-lum-border p-6 sm:p-10 lg:p-12 shadow-card">
          <form onSubmit={handleWhatsAppSubmit} className="space-y-8">
            {/* Étape 1 : Choix du Service */}
            <div>
              <label className="flex items-center gap-2 font-syne font-bold text-base text-lum-midnight mb-3">
                <span className="w-6 h-6 rounded-full bg-lum-midnight text-white text-xs flex items-center justify-center">1</span>
                <span>Quel est le cœur de votre besoin ?</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {servicesList.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setService(item)}
                    className={`p-3.5 rounded-2xl text-left text-xs font-semibold transition-all border ${
                      service === item
                        ? "bg-lum-midnight text-white border-lum-midnight shadow-sm"
                        : "bg-white text-lum-slate border-lum-border hover:border-lum-slate/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item}</span>
                      {service === item && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Étape 2 : Budget et Délais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-lum-border/60">
              <div>
                <label className="flex items-center gap-2 font-syne font-bold text-base text-lum-midnight mb-3">
                  <span className="w-6 h-6 rounded-full bg-lum-midnight text-white text-xs flex items-center justify-center">2</span>
                  <span>Fourchette de budget estimée</span>
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full p-3.5 rounded-2xl bg-white border border-lum-border text-xs sm:text-sm font-medium text-lum-midnight focus:outline-none focus:ring-2 focus:ring-lum-electric/20 focus:border-lum-electric"
                >
                  {budgetList.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 font-syne font-bold text-base text-lum-midnight mb-3">
                  <span className="w-6 h-6 rounded-full bg-lum-midnight text-white text-xs flex items-center justify-center">3</span>
                  <span>Délai de livraison souhaité</span>
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full p-3.5 rounded-2xl bg-white border border-lum-border text-xs sm:text-sm font-medium text-lum-midnight focus:outline-none focus:ring-2 focus:ring-lum-electric/20 focus:border-lum-electric"
                >
                  {timelineList.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Étape 3 : Coordonnées & Précisions */}
            <div className="pt-4 border-t border-lum-border/60 space-y-4">
              <span className="font-syne font-bold text-base text-lum-midnight block">
                Vos coordonnées et remarques utiles :
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-lum-slate block mb-1.5">
                    Votre nom ou nom de l'entreprise *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-lum-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: David Kouassi / Société Palm"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-lum-border text-xs sm:text-sm text-lum-midnight placeholder:text-lum-muted/60 focus:outline-none focus:ring-2 focus:ring-lum-electric/20 focus:border-lum-electric"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-lum-slate block mb-1.5">
                    Localisation / Commune à Abidjan
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-lum-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Ex: Cocody Angré, Marcory, Plateau..."
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-lum-border text-xs sm:text-sm text-lum-midnight placeholder:text-lum-muted/60 focus:outline-none focus:ring-2 focus:ring-lum-electric/20 focus:border-lum-electric"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-lum-slate block mb-1.5">
                  Quelques mots sur vos attentes ou vos objectifs (optionnel)
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Nous lançons notre nouvelle gamme le mois prochain et avons besoin d'un spot vidéo percutant pour les réseaux sociaux."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full p-3.5 rounded-2xl bg-white border border-lum-border text-xs sm:text-sm text-lum-midnight placeholder:text-lum-muted/60 focus:outline-none focus:ring-2 focus:ring-lum-electric/20 focus:border-lum-electric resize-none"
                />
              </div>
            </div>

            {/* Bouton de Soumission Directe vers WhatsApp */}
            <div className="pt-6 border-t border-lum-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-lum-muted text-center sm:text-left">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Réponse assurée sous 2h ouvrées à Abidjan.</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-lum-midnight text-white font-bold text-sm hover:bg-lum-navy transition-all duration-200 shadow-card hover:scale-[1.02] active:scale-[0.98] group"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Envoyer ma demande sur WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
