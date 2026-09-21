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
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

// ─── Chiffres clés animés ───
const stats = [
  { value: 150, suffix: "+", label: "Projets livrés", sub: "depuis 2021" },
  { value: 98, suffix: "%", label: "Clients satisfaits", sub: "sur 5 étoiles" },
  { value: 48, suffix: "h", label: "Délai moyen", sub: "sur affiche & visuel" },
  { value: 4, suffix: " pays", label: "Rayonnement", sub: "Afrique de l'Ouest" },
];

// ─── Garanties ───
const guarantees = [
  {
    icon: Clock,
    title: "Délais Garantis",
    description:
      "Chaque devis inclut une date de livraison contractuelle. Nous la respectons, ou nous vous offrons une révision supplémentaire gratuite.",
    color: "text-amber-400",
    glow: "shadow-amber-500/20",
    border: "border-amber-500/30",
  },
  {
    icon: ShieldCheck,
    title: "Qualité Studio Certifiée",
    description:
      "Nos fichiers sont livrés en résolution maximale, prêts pour l'impression grand format, la diffusion web et les écrans 4K.",
    color: "text-emerald-400",
    glow: "shadow-emerald-500/20",
    border: "border-emerald-500/30",
  },
  {
    icon: RefreshCcw,
    title: "Révisions Incluses",
    description:
      "Pas de surfacturation surprise. Chaque projet inclut des rounds de retouches jusqu'à votre validation complète.",
    color: "text-blue-400",
    glow: "shadow-blue-500/20",
    border: "border-blue-500/30",
  },
  {
    icon: Headphones,
    title: "Suivi WhatsApp Direct",
    description:
      "Un interlocuteur dédié, joignable sur WhatsApp, répond à chaque étape. Pas de boîte mail, pas de ticket — une vraie relation.",
    color: "text-purple-400",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/30",
  },
  {
    icon: Zap,
    title: "Réactivité Maximale",
    description:
      "Besoin d'un visuel pour demain ? Notre équipe gère les urgences créatives avec la même exigence qu'un projet planifié.",
    color: "text-rose-400",
    glow: "shadow-rose-500/20",
    border: "border-rose-500/30",
  },
  {
    icon: Star,
    title: "Satisfaction ou Reprise",
    description:
      "Si le résultat ne vous convient pas totalement à la livraison, nous reprenons la production sans frais supplémentaires.",
    color: "text-cyan-400",
    glow: "shadow-cyan-500/20",
    border: "border-cyan-500/30",
  },
];

// ─── Témoignages ───
const testimonials = [
  {
    name: "Koffi Assouman",
    role: "Directeur, Restaurant Le Palmier",
    city: "Abidjan, Plateau",
    text: "Light Studio a transformé l'image de notre restaurant. Les visuels pour nos réseaux sociaux ont multiplié nos réservations par trois en deux mois. Un travail d'une qualité exceptionnelle.",
    rating: 5,
    initials: "KA",
    color: "bg-amber-500",
  },
  {
    name: "Mariame Coulibaly",
    role: "Fondatrice, Beauté Naturelle CI",
    city: "Abidjan, Cocody",
    text: "J'avais besoin d'un site web et d'une identité visuelle complète pour ma marque de cosmétiques. Light Studio a tout compris dès la première réunion. Le résultat est magnifique et très professionnel.",
    rating: 5,
    initials: "MC",
    color: "bg-rose-500",
  },
  {
    name: "Ibrahim Sanogo",
    role: "Organisateur d'Événements",
    city: "Bouaké / Abidjan",
    text: "Le film de 3 minutes qu'ils ont réalisé pour notre festival a été partagé plus de 50 000 fois sur les réseaux. C'est du cinéma, pas juste une vidéo. Je les recommande les yeux fermés.",
    rating: 5,
    initials: "IS",
    color: "bg-blue-500",
  },
  {
    name: "Adjoua Traoré",
    role: "CEO, Traoré Immobilier",
    city: "Abidjan, Marcory",
    text: "Les affiches de nos programmes immobiliers ont une classe internationale. Nos clients les remarquent à chaque fois. Light Studio est notre partenaire créatif depuis maintenant 2 ans.",
    rating: 5,
    initials: "AT",
    color: "bg-emerald-500",
  },
];

// ─── Composant compteur animé ───
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
          const duration = 1800;
          const steps = 60;
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
    <div ref={ref} className="font-syne font-extrabold text-5xl sm:text-6xl text-white">
      {count}
      <span className="text-lum-electric">{suffix}</span>
    </div>
  );
}

export function Reassurance() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const prev = () =>
    setActiveTestimonial((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setActiveTestimonial((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[activeTestimonial];

  return (
    <section
      id="confiance"
      className="py-20 lg:py-28 bg-white scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── En-tête ─── */}
        <ScrollReveal variant="up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lum-electric/10 text-lum-electric text-xs font-semibold uppercase tracking-wider mb-5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Pourquoi Light Studio ?</span>
            </div>
            <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-lum-midnight tracking-tight leading-tight mb-5">
              La confiance se construit par les actes, pas les promesses.
            </h2>
            <p className="font-inter text-lg text-lum-slate max-w-2xl mx-auto">
              Voici ce que nous garantissons concrètement à chaque client — et les
              résultats que ça produit.
            </p>
          </div>
        </ScrollReveal>

        {/* ─── Chiffres clés animés ─── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} variant="scale" delay={(i * 100) as 0 | 100 | 200 | 300 | 400 | 500}>
              <div className="rounded-3xl bg-lum-surface border border-lum-border p-6 text-center flex flex-col items-center gap-2">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
                <p className="font-syne font-bold text-lum-midnight text-sm mt-1">
                  {s.label}
                </p>
                <p className="text-lum-muted text-xs">{s.sub}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ─── Grille des 6 Garanties ─── */}
        <ScrollReveal variant="up">
          <h3 className="font-syne font-bold text-2xl text-lum-midnight text-center mb-8">
            Nos 6 Engagements Concrets
          </h3>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {guarantees.map((g, i) => (
            <ScrollReveal key={g.title} variant="up" delay={(i % 3 * 100) as 0 | 100 | 200 | 300 | 400 | 500}>
              <div
                className={`group rounded-2xl p-6 bg-white border ${g.border} hover:shadow-lg ${g.glow} transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-lum-surface flex items-center justify-center shrink-0">
                    <g.icon className={`w-5 h-5 ${g.color}`} />
                  </div>
                  <div>
                    <h4 className="font-syne font-bold text-lum-midnight text-base mb-2">
                      {g.title}
                    </h4>
                    <p className="text-lum-slate text-sm font-inter leading-relaxed">
                      {g.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ─── Carrousel de témoignages ─── */}
        <ScrollReveal variant="up">
          <h3 className="font-syne font-bold text-2xl text-lum-midnight text-center mb-8">
            Ce que disent nos clients
          </h3>

          <div className="max-w-3xl mx-auto">
            {/* Card témoignage active */}
            <div
              key={activeTestimonial}
              className="relative rounded-3xl bg-lum-midnight p-8 sm:p-10 mb-5"
              style={{ animation: "fadeSlideIn 0.4s cubic-bezier(0.22,1,0.36,1)" }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-lum-electric/30 fill-lum-electric/20" />

              {/* Étoiles */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="font-inter text-white/80 text-lg leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <div
                  className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center font-syne font-bold text-white text-sm`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-syne font-bold text-white text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role} · {t.city}</p>
                </div>
              </div>
            </div>

            {/* Contrôles */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeTestimonial
                        ? "w-6 h-2 bg-lum-electric"
                        : "w-2 h-2 bg-lum-border hover:bg-lum-muted"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-9 h-9 rounded-full border border-lum-border flex items-center justify-center hover:bg-lum-midnight hover:text-white hover:border-lum-midnight transition-all duration-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-9 h-9 rounded-full border border-lum-border flex items-center justify-center hover:bg-lum-midnight hover:text-white hover:border-lum-midnight transition-all duration-200"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ─── CTA final ─── */}
        <ScrollReveal variant="scale">
          <div className="mt-16 rounded-3xl bg-gradient-to-br from-lum-electric to-blue-700 p-8 sm:p-12 text-center">
            <h3 className="font-syne font-extrabold text-3xl sm:text-4xl text-white mb-4">
              Prêt à passer à l'action ?
            </h3>
            <p className="text-white/70 font-inter text-lg mb-8 max-w-xl mx-auto">
              Décrivez votre projet en quelques lignes sur WhatsApp. Notre équipe
              vous répond avec un devis clair en moins de 24h.
            </p>
            <a
              href={getWhatsAppUrl(
                "Bonjour Light Studio ! J'ai vu votre site et je souhaite discuter d'un projet créatif."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-lum-electric font-bold text-sm sm:text-base hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Démarrer mon projet sur WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
