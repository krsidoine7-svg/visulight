"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getWhatsAppUrl } from "@/config/site";
import {
  ShieldCheck,
  Clock,
  Star,
  Headphones,
  RefreshCcw,
  Zap,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";

// ─── Données ───
const stats = [
  { value: 150, suffix: "+", label: "Projets livrés", sub: "depuis 2025" },
  { value: 98, suffix: "%", label: "Clients satisfaits", sub: "sur 5 étoiles" },
  { value: 48, suffix: "h", label: "Délai moyen", sub: "sur affiche & visuel" },
  { value: 4, suffix: " pays", label: "Rayonnement", sub: "Afrique de l'Ouest" },
];

const guarantees = [
  {
    icon: Clock,
    title: "Délais garantis",
    description:
      "Chaque devis inclut une date de livraison contractuelle. Nous la respectons, ou vous obtenez une révision gratuite.",
  },
  {
    icon: ShieldCheck,
    title: "Qualité studio certifiée",
    description:
      "Fichiers livrés en résolution maximale, prêts pour l'impression grand format, la diffusion web et les écrans 4K.",
  },
  {
    icon: RefreshCcw,
    title: "Révisions incluses",
    description:
      "Pas de surfacturation surprise. Chaque projet inclut des rounds de retouches jusqu'à votre validation complète.",
  },
  {
    icon: Headphones,
    title: "Suivi WhatsApp direct",
    description:
      "Un interlocuteur dédié, joignable sur WhatsApp, répond à chaque étape — pas de ticket, une vraie relation.",
  },
  {
    icon: Zap,
    title: "Réactivité maximale",
    description:
      "Besoin d'un visuel pour demain ? Notre équipe gère les urgences créatives avec la même exigence.",
  },
  {
    icon: Star,
    title: "Satisfaction ou reprise",
    description:
      "Si le résultat ne vous convient pas à la livraison, nous reprenons la production sans frais supplémentaires.",
  },
];

const testimonials = [
  {
    name: "Koffi Assouman",
    role: "Directeur, Restaurant Le Palmier",
    city: "Abidjan, Plateau",
    text: "Light Studio a transformé l'image de notre restaurant. Les visuels pour nos réseaux sociaux ont multiplié nos réservations par trois en deux mois. Un travail d'une qualité exceptionnelle.",
    initials: "KA",
  },
  {
    name: "Mariame Coulibaly",
    role: "Fondatrice, Beauté Naturelle CI",
    city: "Abidjan, Cocody",
    text: "J'avais besoin d'un site web et d'une identité visuelle complète. Light Studio a tout compris dès la première réunion. Le résultat est magnifique et très professionnel.",
    initials: "MC",
  },
  {
    name: "Ibrahim Sanogo",
    role: "Organisateur d'Événements",
    city: "Bouaké / Abidjan",
    text: "Le film de 3 minutes qu'ils ont réalisé pour notre festival a été partagé plus de 50 000 fois sur les réseaux. C'est du cinéma, pas juste une vidéo.",
    initials: "IS",
  },
  {
    name: "Adjoua Traoré",
    role: "CEO, Traoré Immobilier",
    city: "Abidjan, Marcory",
    text: "Les affiches de nos programmes immobiliers ont une classe internationale. Nos clients les remarquent à chaque fois. Light Studio est notre partenaire créatif depuis 2 ans.",
    initials: "AT",
  },
];

// ─── Compteur animé ───
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const steps = 50;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="font-syne font-bold text-4xl sm:text-5xl text-lum-midnight">
      {count}
      <span className="text-lum-electric">{suffix}</span>
    </div>
  );
}

export function Reassurance() {
  return (
    <section
      id="confiance"
      className="py-20 lg:py-28 bg-lum-surface scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── En-tête ── */}
        <ScrollReveal variant="up">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-lum-electric mb-4">
              Pourquoi Light Studio ?
            </p>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl text-lum-midnight tracking-tight leading-tight max-w-2xl">
              La confiance se construit par les actes, pas les promesses.
            </h2>
            <p className="mt-4 text-base text-lum-slate max-w-xl leading-relaxed">
              Voici ce que nous garantissons concrètement à chaque client — et les résultats que ça produit.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Chiffres clés — typographiques, sans cartes ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 mb-16 border-t border-lum-border border-b">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} variant="up" delay={(i * 100) as 0 | 100 | 200 | 300 | 400 | 500}>
              <div className="py-8 px-4 text-center border-r border-lum-border last:border-r-0">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
                <p className="font-semibold text-lum-midnight text-sm mt-2">
                  {s.label}
                </p>
                <p className="text-lum-muted text-xs mt-0.5">{s.sub}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Garanties — liste, sans cartes multiples ── */}
        <ScrollReveal variant="up">
          <h3 className="font-syne font-bold text-2xl text-lum-midnight mb-8">
            Nos 6 engagements concrets
          </h3>
        </ScrollReveal>
        <div className="divide-y divide-lum-border border-t border-lum-border mb-20">
          {guarantees.map((g, i) => {
            const Icon = g.icon;
            return (
              <ScrollReveal key={g.title} variant="up" delay={((i % 3) * 100) as 0 | 100 | 200 | 300 | 400 | 500}>
                <div className="flex items-start gap-5 py-6 group">
                  <div className="w-9 h-9 rounded-lg border border-lum-border flex items-center justify-center shrink-0 bg-white group-hover:border-lum-electric transition-colors duration-150">
                    <Icon className="w-4 h-4 text-lum-electric" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h4 className="font-syne font-bold text-lum-midnight text-base">
                        {g.title}
                      </h4>
                      <span className="text-xs font-bold text-lum-electric uppercase tracking-wide hidden sm:block">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-lum-slate text-sm leading-relaxed mt-1">
                      {g.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ── Témoignages — texte pur, fond sombre sobre ── */}
        <ScrollReveal variant="up">
          <div className="bg-lum-dark rounded-xl overflow-hidden">
            <div className="px-6 sm:px-10 py-10 border-b border-white/10">
              <p className="text-xs font-semibold uppercase tracking-widest text-lum-electric mb-3">
                Ils nous font confiance
              </p>
              <h3 className="font-syne font-bold text-2xl sm:text-3xl text-white">
                Ce que disent nos clients
              </h3>
            </div>

            <div className="divide-y divide-white/8">
              {testimonials.map((t) => (
                <div key={t.name} className="px-6 sm:px-10 py-8 flex gap-5 sm:gap-8 items-start">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-lum-electric flex items-center justify-center font-syne font-bold text-white text-sm shrink-0">
                    {t.initials}
                  </div>
                  {/* Contenu */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <span className="font-syne font-bold text-white text-sm">{t.name}</span>
                      <span className="text-white/30 text-xs">·</span>
                      <span className="text-white/40 text-xs">{t.role}</span>
                      <span className="text-white/20 text-xs">·</span>
                      <span className="text-white/30 text-xs">{t.city}</span>
                    </div>
                    <p className="text-white/65 text-sm leading-relaxed">
                      "{t.text}"
                    </p>
                    {/* Étoiles */}
                    <div className="flex gap-0.5 mt-3">
                      {[0, 1, 2, 3, 4].map((j) => (
                        <Star key={j} className="w-3 h-3 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Score global */}
            <div className="px-6 sm:px-10 py-6 border-t border-white/10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="font-syne font-bold text-2xl text-white">5.0</span>
                <div className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
              <span className="text-white/30 text-xs">·</span>
              <span className="text-white/50 text-sm">
                <strong className="text-white">98%</strong> de clients satisfaits
              </span>
              <span className="text-white/30 text-xs">·</span>
              <span className="text-white/50 text-sm">
                <strong className="text-white">150+</strong> projets livrés depuis 2025
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* ── CTA final — sobre ── */}
        <ScrollReveal variant="up">
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-lum-border">
            <div>
              <h3 className="font-syne font-bold text-2xl text-lum-midnight">
                Prêt à passer à l'action ?
              </h3>
              <p className="text-lum-slate text-base mt-2 max-w-md">
                Décrivez votre projet sur WhatsApp. Notre équipe vous répond avec un devis clair en moins de 24h.
              </p>
            </div>
            <a
              href={getWhatsAppUrl(
                "Bonjour Light Studio ! J'ai vu votre site et je souhaite discuter d'un projet créatif."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-lum-midnight text-white font-semibold text-sm rounded-md hover:bg-lum-navy transition-colors duration-150 shrink-0 group"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              Démarrer mon projet
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
