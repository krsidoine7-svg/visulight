import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Mentions Légales — ${siteConfig.name}`,
  description: "Mentions légales du site Light Studio, agence créative à Abidjan.",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* En-tête */}
      <div className="border-b border-lum-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-lum-muted hover:text-lum-midnight transition-colors mb-8 font-medium"
          >
            ← Retour au site
          </Link>
          <p className="text-xs uppercase tracking-widest font-bold text-lum-electric mb-3">
            Document légal
          </p>
          <h1 className="font-syne font-bold text-3xl sm:text-4xl text-lum-midnight mb-4">
            Mentions Légales
          </h1>
          <p className="text-lum-muted text-sm">
            Dernière mise à jour : Septembre 2026
          </p>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">

        {/* 1. Éditeur */}
        <section>
          <h2 className="font-syne font-bold text-xl text-lum-midnight mb-4 pb-3 border-b border-lum-border">
            1. Éditeur du site
          </h2>
          <div className="space-y-2 text-lum-slate text-sm leading-relaxed">
            <p><strong className="text-lum-midnight">Raison sociale :</strong> Light Studio</p>
            <p><strong className="text-lum-midnight">Forme juridique :</strong> [SARL / EI / Auto-entreprise — à compléter]</p>
            <p><strong className="text-lum-midnight">RCCM / Registre :</strong> [N° d'immatriculation — à compléter]</p>
            <p><strong className="text-lum-midnight">Adresse :</strong> Cocody, Abidjan, Côte d'Ivoire</p>
            <p><strong className="text-lum-midnight">Téléphone :</strong> {siteConfig.contact.phoneDisplay}</p>
            <p><strong className="text-lum-midnight">Email :</strong> {siteConfig.contact.email}</p>
            <p><strong className="text-lum-midnight">Directeur de la publication :</strong> [Nom du responsable — à compléter]</p>
          </div>
        </section>

        {/* 2. Hébergement */}
        <section>
          <h2 className="font-syne font-bold text-xl text-lum-midnight mb-4 pb-3 border-b border-lum-border">
            2. Hébergement
          </h2>
          <div className="space-y-2 text-lum-slate text-sm leading-relaxed">
            <p><strong className="text-lum-midnight">Hébergeur :</strong> Vercel Inc.</p>
            <p><strong className="text-lum-midnight">Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, USA</p>
            <p><strong className="text-lum-midnight">Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-lum-electric hover:underline">vercel.com</a></p>
          </div>
        </section>

        {/* 3. Propriété intellectuelle */}
        <section>
          <h2 className="font-syne font-bold text-xl text-lum-midnight mb-4 pb-3 border-b border-lum-border">
            3. Propriété intellectuelle
          </h2>
          <p className="text-lum-slate text-sm leading-relaxed">
            L'ensemble des contenus présents sur ce site (textes, images, photographies, vidéos, logos, graphismes, charte graphique et code source) est la propriété exclusive de Light Studio ou de ses partenaires, et est protégé par les lois en vigueur relatives à la propriété intellectuelle en Côte d'Ivoire.
          </p>
          <p className="text-lum-slate text-sm leading-relaxed mt-4">
            Toute reproduction, représentation, modification, publication, transmission ou utilisation de tout ou partie des éléments de ce site, sans autorisation écrite préalable de Light Studio, est strictement interdite.
          </p>
        </section>

        {/* 4. Responsabilité */}
        <section>
          <h2 className="font-syne font-bold text-xl text-lum-midnight mb-4 pb-3 border-b border-lum-border">
            4. Limitation de responsabilité
          </h2>
          <p className="text-lum-slate text-sm leading-relaxed">
            Light Studio s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, Light Studio ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées. En conséquence, Light Studio décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
          </p>
          <p className="text-lum-slate text-sm leading-relaxed mt-4">
            Light Studio ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès au site ou de l'utilisation de ses contenus.
          </p>
        </section>

        {/* 5. Liens hypertextes */}
        <section>
          <h2 className="font-syne font-bold text-xl text-lum-midnight mb-4 pb-3 border-b border-lum-border">
            5. Liens hypertextes
          </h2>
          <p className="text-lum-slate text-sm leading-relaxed">
            Ce site peut contenir des liens vers des sites tiers. Light Studio n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leur politique de confidentialité ou leurs pratiques.
          </p>
        </section>

        {/* 6. Droit applicable */}
        <section>
          <h2 className="font-syne font-bold text-xl text-lum-midnight mb-4 pb-3 border-b border-lum-border">
            6. Droit applicable et juridiction compétente
          </h2>
          <p className="text-lum-slate text-sm leading-relaxed">
            Les présentes mentions légales sont régies par le droit ivoirien. En cas de litige, les parties s'efforceront de trouver un accord amiable avant tout recours judiciaire. À défaut, les tribunaux compétents d'Abidjan seront seuls compétents.
          </p>
        </section>

        {/* 7. Contact */}
        <section>
          <h2 className="font-syne font-bold text-xl text-lum-midnight mb-4 pb-3 border-b border-lum-border">
            7. Contact
          </h2>
          <p className="text-lum-slate text-sm leading-relaxed">
            Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <p className="text-lum-slate">
              Par email :{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-lum-electric hover:underline font-medium">
                {siteConfig.contact.email}
              </a>
            </p>
            <p className="text-lum-slate">
              Par téléphone : <span className="font-medium text-lum-midnight">{siteConfig.contact.phoneDisplay}</span>
            </p>
          </div>
        </section>

        {/* Note légale */}
        <div className="pt-8 border-t border-lum-border">
          <p className="text-xs text-lum-muted leading-relaxed">
            <strong>Note :</strong> Ce document est un modèle. Les champs entre crochets [  ] doivent être complétés avec les informations réelles de Light Studio avant toute mise en ligne définitive. Nous vous recommandons de faire valider ce document par un juriste.
          </p>
          <p className="text-xs text-lum-muted mt-2">
            Voir aussi :{" "}
            <Link href="/confidentialite" className="text-lum-electric hover:underline">Politique de confidentialité</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
