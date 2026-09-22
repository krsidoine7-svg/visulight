import { siteConfig, getWhatsAppUrl } from "@/config/site";
import {
  Palette,
  Video,
  Globe,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export interface Department {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
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
      "Conception d'affiches publicitaires grand format, identités de marque mémorables, visuels pour réseaux sociaux et déclinaisons print haut de gamme.",
    icon: Palette,
    deliverables: [
      "Affiches grand format (4x3, abribus, kakemonos)",
      "Packs visuels réseaux sociaux (stories, carrousels, bannières)",
      "Identités visuelles complètes (logo vectoriel, charte, typographies)",
      "Fichiers vectoriels prêts pour impression et diffusion HD",
    ],
    ctaText: "Devis Graphisme",
    whatsappMessage:
      "Bonjour Light Studio ! Je souhaite un devis pour un projet de Graphisme (affiches / identité visuelle).",
  },
  {
    id: "video",
    num: "02",
    title: "Vidéo Cinématique & Spots",
    tagline: "La puissance narrative du cinéma au service de vos ventes.",
    description:
      "Tournages de spots publicitaires percutants, reels/TikTok à haute rétention, captation d'événements prestigieux et fictions promotionnelles en 4K.",
    icon: Video,
    deliverables: [
      "Captation caméra cinéma & prises de vue aériennes par drone",
      "Étalonnage couleur cinématique & mixage sound design immersif",
      "Montage dynamique adapté aux algorithmes (Reels, Shorts, TikTok)",
      "Déclinaisons 16:9 (écrans) et 9:16 (smartphones)",
    ],
    ctaText: "Réserver un Tournage",
    whatsappMessage:
      "Bonjour Light Studio ! Je souhaite échanger sur une production vidéo / tournage cinématique.",
  },
  {
    id: "web",
    num: "03",
    title: "Vitrines Web & Digital",
    tagline: "Des sites web rapides et modernes conçus pour convertir.",
    description:
      "Développement de sites vitrines interactifs, plateformes de présentation haut de gamme et pages de vente optimisées pour transformer les visiteurs en clients.",
    icon: Globe,
    deliverables: [
      "Design sur-mesure responsive ultra-fluide sur smartphone",
      "Boutons de commande WhatsApp intégrés & formulaires directs",
      "Vitesse de chargement instantanée & optimisation SEO Google",
      "Nom de domaine, certificat SSL & hébergement sécurisé inclus",
    ],
    ctaText: "Créer mon Site Web",
    whatsappMessage:
      "Bonjour Light Studio ! Je souhaite concevoir un site web professionnel pour mon entreprise.",
  },
  {
    id: "strategie",
    num: "04",
    title: "Stratégie Digitale & Campagnes",
    tagline: "L'orchestration créative globale pour dominer votre marché.",
    description:
      "Accompagnement 360° pour les lancements de produits, direction de création de campagnes publicitaires et déploiement de concepts visuels forts à Abidjan.",
    icon: TrendingUp,
    deliverables: [
      "Direction artistique globale & angles créatifs de marque",
      "Planning de campagne & scénarisation de contenus multi-canaux",
      "Casting, supervision de tournage & cohérence graphique totale",
      "Analyse des performances & optimisation du taux de conversion",
    ],
    ctaText: "Planifier une Campagne",
    whatsappMessage:
      "Bonjour Light Studio ! Je souhaite échanger sur une stratégie de campagne / lancement de produit.",
  },
];

export function Departments() {
  return (
    <section id="departements" className="py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── En-tête éditorial ── */}
        <div className="mb-14 lg:mb-18">
          <p className="text-xs font-semibold uppercase tracking-widest text-lum-electric mb-4">
            Pôles de savoir-faire
          </p>
          <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl text-lum-midnight tracking-tight leading-tight max-w-2xl">
            4 expertises intégrées pour propulser votre notoriété.
          </h2>
          <p className="mt-4 text-base text-lum-slate max-w-xl leading-relaxed">
            Chez Light Studio, pas de sous-traitance opaque : directeurs artistiques, réalisateurs et développeurs travaillent en synergie directe à Abidjan.
          </p>
        </div>

        {/* ── Liste éditoriale — style magazine ── */}
        <div className="divide-y divide-lum-border border-t border-lum-border">
          {DEPARTMENTS.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <div
                key={dept.id}
                className="group py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
              >
                {/* Numéro + icône */}
                <div className="lg:col-span-1 flex items-center gap-3 lg:flex-col lg:items-start lg:gap-2">
                  <span className="font-syne font-bold text-3xl text-lum-electric leading-none">
                    {dept.num}
                  </span>
                  <Icon className="w-5 h-5 text-lum-muted shrink-0" />
                </div>

                {/* Titre + tagline */}
                <div className="lg:col-span-4">
                  <h3 className="font-syne font-bold text-xl sm:text-2xl text-lum-midnight leading-tight mb-2 group-hover:text-lum-electric transition-colors duration-200">
                    {dept.title}
                  </h3>
                  <p className="text-sm text-lum-muted italic leading-relaxed">
                    « {dept.tagline} »
                  </p>
                </div>

                {/* Description + livrables */}
                <div className="lg:col-span-5">
                  <p className="text-sm text-lum-slate leading-relaxed mb-5">
                    {dept.description}
                  </p>
                  <ul className="space-y-2">
                    {dept.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-lum-slate">
                        <span className="text-lum-electric font-bold mt-0.5 shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="lg:col-span-2 flex lg:justify-end">
                  <a
                    href={getWhatsAppUrl(dept.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-lum-electric hover:text-lum-electric-hover transition-colors duration-150 group/cta"
                  >
                    <span>{dept.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform duration-150" />
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
