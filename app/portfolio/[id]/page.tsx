import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { getWhatsAppUrl } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  MapPin,
  Building2,
  Sparkles,
} from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Projet non trouvé | Light Studio",
    };
  }

  return {
    title: `${project.title} | Étude de Cas Light Studio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Autres projets suggérés
  const otherProjects = PROJECTS.filter((p) => p.id !== project.id);

  return (
    <main className="min-h-screen bg-white pb-20">

        {/* ── En-tête du Projet (Hero) ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lum-midnight text-white text-xs font-semibold uppercase tracking-widest mb-6">
              <span>{project.badge}</span>
            </div>

            <h1 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-lum-midnight tracking-tight leading-tight mb-6">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs text-lum-slate font-medium pt-4 border-t border-lum-border">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-lum-electric" />
                <span>
                  <strong className="text-lum-midnight font-bold">Client :</strong> {project.client}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-lum-electric" />
                <span>
                  <strong className="text-lum-midnight font-bold">Lieu :</strong> {project.location}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Bannière Image principale ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-lum-border bg-lum-midnight shadow-card">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </section>

        {/* ── Grille de Détails de l'Étude de cas ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Colonne Principale — Présentation & Livrables */}
            <div className="lg:col-span-2 space-y-10">
              {/* Le Défi & La Démarche */}
              <div>
                <h2 className="font-syne font-bold text-2xl text-lum-midnight mb-4">
                  Aperçu de la Réalisation
                </h2>
                <p className="text-base text-lum-slate leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Livrables & Compétences mobilisées */}
              <div className="p-8 rounded-2xl bg-lum-surface border border-lum-border shadow-subtle">
                <h3 className="font-syne font-bold text-xl text-lum-midnight mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-lum-electric" />
                  <span>Livrables & Expertises Déployées</span>
                </h3>
                <ul className="space-y-4">
                  {project.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-lum-midnight leading-snug">
                        {deliverable}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section WhatsApp dédiée */}
              <div className="p-8 rounded-2xl bg-lum-midnight text-white shadow-card flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-syne font-bold text-xl text-white mb-2">
                    Inspiré par ce projet ?
                  </h3>
                  <p className="text-xs text-white/70 max-w-md leading-relaxed">
                    Notre équipe est prête à concevoir une campagne sur-mesure de même niveau pour votre marque à Abidjan.
                  </p>
                </div>
                <a
                  href={getWhatsAppUrl(project.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-lum-midnight font-extrabold text-sm transition-all shrink-0 shadow-lg"
                >
                  <WhatsAppIcon className="w-5 h-5 text-lum-midnight" />
                  <span>Lancer sur WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Sidebar — Impact & Résultats */}
            <div className="space-y-6">
              {/* Carte Impact Commercial */}
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200/80">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-emerald-800 mb-3">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>Impact & Retombées</span>
                </div>
                <p className="text-base font-bold text-emerald-950 leading-snug mb-2">
                  {project.results}
                </p>
                <p className="text-xs text-emerald-800/80">
                  Performances mesurées et validées directement avec le client.
                </p>
              </div>

              {/* Fiche Technique Rapide */}
              <div className="p-6 rounded-2xl bg-white border border-lum-border shadow-subtle space-y-4 text-xs">
                <h4 className="font-syne font-bold text-sm text-lum-midnight border-b border-lum-border pb-3">
                  Fiche Technique
                </h4>
                <div className="flex justify-between text-lum-slate">
                  <span>Format :</span>
                  <strong className="text-lum-midnight">{project.badge}</strong>
                </div>
                <div className="flex justify-between text-lum-slate">
                  <span>Catégorie :</span>
                  <strong className="text-lum-midnight">{project.categoryLabel}</strong>
                </div>
                <div className="flex justify-between text-lum-slate">
                  <span>Localisation :</span>
                  <strong className="text-lum-midnight">{project.location}</strong>
                </div>
                <div className="flex justify-between text-lum-slate">
                  <span>Disponibilité :</span>
                  <span className="inline-flex items-center gap-1.5 font-bold text-emerald-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Projets similaires ouverts
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── Projets similaires ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-16 border-t border-lum-border">
          <h2 className="font-syne font-bold text-2xl text-lum-midnight mb-8">
            Autres Réalisations à Découvrir
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {otherProjects.map((item) => (
              <Link
                key={item.id}
                href={`/portfolio/${item.id}`}
                className="group rounded-2xl bg-lum-surface border border-lum-border p-5 hover:border-lum-midnight/30 hover:shadow-card transition-all flex items-center gap-5"
              >
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-lum-midnight">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-lum-electric block mb-1">
                    {item.badge}
                  </span>
                  <h3 className="font-syne font-bold text-sm text-lum-midnight group-hover:text-lum-electric transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs text-lum-slate font-semibold mt-2 group-hover:translate-x-1 transition-transform">
                    <span>Voir l'étude</span>
                    <ArrowRight className="w-3.5 h-3.5 text-lum-electric" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
  );
}
