import { siteConfig, getWhatsAppUrl } from "@/config/site";
import {
  Palette,
  Video,
  Globe,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export interface Department {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  icon: typeof Palette;
  deliverables: string[];
  ctaText: string;
  whatsappMessage: string;
}

export const DEPARTMENTS: Department[] = [
  {
    id: "graphisme",
    num: "01",
    title: "Graphisme & Direction Visuelle",
    tagline: "L'image de marque qui capte le regard et impose le respect.",
    description:
      "Conception d'affiches publicitaires grand format, identités de marque mémorables, visuels promotionnels pour réseaux sociaux et déclinaisons print haut de gamme.",
    badge: "Affiches & Branding",
    icon: Palette,
    deliverables: [
      "Affiches publicitaires grand format (4x3, abribus, kakemonos)",
      "Packs de visuels réseaux sociaux (stories, carrousels, bannières)",
      "Identités visuelles complètes (logo vectoriel, charte, typographies)",
      "Fichiers vectoriels prêts pour impression pro & diffusion HD",
    ],
    ctaText: "Devis Graphisme",
    whatsappMessage:
      "Bonjour Light Studio ! Je souhaite obtenir un devis pour un projet de Graphisme (affiches / identité visuelle).",
  },
  {
    id: "video",
    num: "02",
    title: "Vidéo Cinématique & Spots",
    tagline: "La puissance narrative du cinéma au service de vos ventes.",
    description:
      "Tournages de spots publicitaires percutants, reels/TikTok à haute rétention, captation d'événements prestigieux et fictions promotionnelles en 4K.",
    badge: "Caméras Cinéma & Drone 4K",
    icon: Video,
    deliverables: [
      "Captation caméra cinéma & prises de vue aériennes par drone",
      "Étalonnage couleur cinématique & mixage sound design immersif",
      "Montage dynamique adapté aux algorithmes (Reels, Shorts, TikTok)",
      "Déclinaisons aux formats 16:9 (écrans) et 9:16 (smartphones)",
    ],
    ctaText: "Réserver un Tournage",
    whatsappMessage:
      "Bonjour Light Studio ! Je souhaite échanger sur une production vidéo / tournage cinématique à Abidjan.",
  },
  {
    id: "web",
    num: "03",
    title: "Vitrines Web & Digital",
    tagline: "Des sites web rapides et modernes conçus pour convertir.",
    description:
      "Développement de sites vitrines interactifs, plateformes de présentation haut de gamme et pages de vente optimisées pour transformer les visiteurs en clients.",
    badge: "Next.js & Performance",
    icon: Globe,
    deliverables: [
      "Design sur-mesure responsive (ultra-fluide sur smartphone)",
      "Boutons de commande WhatsApp intégrés & formulaires directs",
      "Vitesse de chargement instantanée & optimisation pour Google (SEO)",
      "Nom de domaine, certificat de sécurité SSL & hébergement sécurisé",
    ],
    ctaText: "Créer mon Site Web",
    whatsappMessage:
      "Bonjour Light Studio ! Je souhaite concevoir un site web professionnel et moderne pour mon entreprise.",
  },
  {
    id: "strategie",
    num: "04",
    title: "Stratégie Digitale & Campagnes",
    tagline: "L'orchestration créative globale pour dominer votre marché.",
    description:
      "Accompagnement 360° pour les lancements de produits, direction de création de campagnes publicitaires et déploiement de concepts visuels forts à Abidjan.",
    badge: "Accompagnement 360°",
    icon: TrendingUp,
    deliverables: [
      "Direction artistique globale & angles créatifs de marque",
      "Planning de campagne & scénarisation de contenus multi-canaux",
      "Casting, supervision de tournage & cohérence graphique totale",
      "Analyse des performances & optimisation du taux de conversion",
    ],
    ctaText: "Planifier une Campagne",
    whatsappMessage:
      "Bonjour Light Studio ! Je souhaite échanger sur une stratégie de campagne / lancement de produit à Abidjan.",
  },
];

export function Departments() {
  return (
    <section id="departements" className="py-20 lg:py-28 bg-lum-surface/60 border-y border-lum-border/60 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lum-electric/10 text-lum-electric text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pôles de Savoir-Faire</span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-lum-midnight tracking-tight leading-tight mb-4">
            4 expertises intégrées pour propulser votre notoriété.
          </h2>

          <p className="font-inter text-base sm:text-lg text-lum-slate max-w-2xl mx-auto">
            Chez Light Studio, pas de sous-traitance opaque : nos directeurs artistiques, réalisateurs et développeurs
            travaillent en synergie directe à Abidjan.
          </p>
        </div>

        {/* Grille des 4 Départements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {DEPARTMENTS.map((dept) => {
            const Icon = dept.icon;
            return (
              <div
                key={dept.id}
                className="group relative rounded-3xl bg-white border border-lum-border p-7 sm:p-9 shadow-subtle hover:shadow-card hover:border-lum-slate/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* En-tête de la carte */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-lum-surface border border-lum-border group-hover:bg-lum-midnight group-hover:text-white group-hover:border-lum-midnight text-lum-electric flex items-center justify-center transition-colors duration-300 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-syne font-extrabold text-2xl text-lum-slate/30 group-hover:text-lum-electric transition-colors">
                        {dept.num}
                      </span>
                    </div>

                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-lum-surface border border-lum-border text-[11px] font-semibold text-lum-slate">
                      {dept.badge}
                    </span>
                  </div>

                  <h3 className="font-syne font-bold text-xl sm:text-2xl text-lum-midnight mb-2 group-hover:text-lum-electric transition-colors duration-200">
                    {dept.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-lum-midnight/80 mb-3">
                    « {dept.tagline} »
                  </p>

                  <p className="text-xs sm:text-sm text-lum-slate leading-relaxed mb-6 font-normal">
                    {dept.description}
                  </p>

                  {/* Liste des livrables concrets */}
                  <div className="pt-5 border-t border-lum-border/60 mb-8">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-lum-muted block mb-3">
                      Ce que nous livrons concrètement :
                    </span>
                    <ul className="space-y-2">
                      {dept.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-lum-slate">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bouton d'action direct vers WhatsApp avec message pré-formaté */}
                <div className="pt-4 border-t border-lum-border/60 flex items-center justify-between gap-4">
                  <a
                    href={getWhatsAppUrl(dept.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-5 rounded-full bg-lum-surface hover:bg-lum-midnight text-lum-midnight hover:text-white border border-lum-border hover:border-lum-midnight text-xs sm:text-sm font-semibold transition-all duration-200 shadow-subtle group/btn active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600 group-hover/btn:text-emerald-400" />
                    <span>{dept.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-lum-muted group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
