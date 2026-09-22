import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Politique de Confidentialité — ${siteConfig.name}`,
  description: "Politique de confidentialité et traitement des données personnelles — Light Studio Abidjan.",
  robots: { index: false },
};

export default function ConfidentialitePage() {
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
            Politique de Confidentialité
          </h1>
          <p className="text-lum-muted text-sm">
            Dernière mise à jour : Septembre 2026
          </p>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">

        {/* Intro */}
        <section>
          <p className="text-lum-slate text-sm leading-relaxed">
            Light Studio (ci-après « nous » ou « le Studio ») accorde une grande importance à la protection de vos données personnelles. La présente politique explique quelles données nous collectons, pourquoi nous les collectons, comment nous les utilisons et quels sont vos droits.
          </p>
          <p className="text-lum-slate text-sm leading-relaxed mt-4">
            En naviguant sur ce site ou en nous contactant, vous acceptez les pratiques décrites dans ce document.
          </p>
        </section>

        {/* 1. Responsable */}
        <section>
          <h2 className="font-syne font-bold text-xl text-lum-midnight mb-4 pb-3 border-b border-lum-border">
            1. Responsable du traitement
          </h2>
          <div className="space-y-2 text-lum-slate text-sm leading-relaxed">
            <p><strong className="text-lum-midnight">Responsable :</strong> Light Studio</p>
            <p><strong className="text-lum-midnight">Adresse :</strong> Cocody, Abidjan, Côte d'Ivoire</p>
            <p><strong className="text-lum-midnight">Contact :</strong>{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-lum-electric hover:underline">
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </section>

        {/* 2. Données collectées */}
        <section>
          <h2 className="font-syne font-bold text-xl text-lum-midnight mb-4 pb-3 border-b border-lum-border">
            2. Données collectées
          </h2>
          <p className="text-lum-slate text-sm leading-relaxed mb-4">
            Nous collectons uniquement les données strictement nécessaires à nos activités :
          </p>
          <ul className="space-y-3">
            {[
              { titre: "Données de contact", detail: "Nom, prénom, adresse email, numéro de téléphone — collectés lorsque vous nous contactez via WhatsApp, par email ou via un formulaire." },
              { titre: "Données de navigation", detail: "Adresse IP, type de navigateur, pages visitées, durée de visite — collectés automatiquement via nos outils d'analyse (ex : Google Analytics si actif)." },
              { titre: "Données de projet", detail: "Informations relatives à votre projet créatif (brief, budget indicatif, calendrier) partagées volontairement lors d'échanges commerciaux." },
            ].map((item) => (
              <li key={item.titre} className="flex gap-3 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-lum-electric mt-2 shrink-0" />
                <div>
                  <strong className="text-lum-midnight">{item.titre} : </strong>
                  <span className="text-lum-slate">{item.detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 3. Finalités */}
        <section>
          <h2 className="font-syne font-bold text-xl text-lum-midnight mb-4 pb-3 border-b border-lum-border">
            3. Finalités du traitement
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-lum-border">
                  <th className="text-left py-3 pr-4 font-semibold text-lum-midnight text-xs uppercase tracking-wide">Finalité</th>
                  <th className="text-left py-3 pr-4 font-semibold text-lum-midnight text-xs uppercase tracking-wide">Base légale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-lum-border">
                {[
                  ["Répondre à vos demandes de devis", "Intérêt légitime / Consentement"],
                  ["Gestion de la relation client et suivi de projet", "Exécution d'un contrat"],
                  ["Envoi d'informations sur nos services", "Consentement"],
                  ["Amélioration du site (statistiques de navigation)", "Intérêt légitime"],
                  ["Respect des obligations légales", "Obligation légale"],
                ].map(([finalite, base]) => (
                  <tr key={finalite}>
                    <td className="py-3 pr-4 text-lum-slate">{finalite}</td>
                    <td className="py-3 text-lum-muted">{base}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Conservation */}
        <section>
          <h2 className="font-syne font-bold text-xl text-lum-midnight mb-4 pb-3 border-b border-lum-border">
            4. Durée de conservation
          </h2>
          <p className="text-lum-slate text-sm leading-relaxed">
            Vos données sont conservées pour la durée strictement nécessaire aux finalités décrites :
          </p>
          <ul className="mt-4 space-y-2 text-sm text-lum-slate">
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-lum-electric mt-2 shrink-0" />
              <span><strong className="text-lum-midnight">Données client actif :</strong> durée de la relation commerciale + 3 ans</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-lum-electric mt-2 shrink-0" />
              <span><strong className="text-lum-midnight">Prospects (sans suite) :</strong> 1 an après le dernier contact</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-lum-electric mt-2 shrink-0" />
              <span><strong className="text-lum-midnight">Données de navigation :</strong> 13 mois maximum</span>
            </li>
          </ul>
        </section>

        {/* 5. Vos droits */}
        <section>
          <h2 className="font-syne font-bold text-xl text-lum-midnight mb-4 pb-3 border-b border-lum-border">
            5. Vos droits
          </h2>
          <p className="text-lum-slate text-sm leading-relaxed mb-4">
            Conformément à la réglementation applicable, vous disposez des droits suivants :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { droit: "Droit d'accès", detail: "Obtenir une copie de vos données" },
              { droit: "Droit de rectification", detail: "Corriger des données inexactes" },
              { droit: "Droit à l'effacement", detail: "Demander la suppression de vos données" },
              { droit: "Droit d'opposition", detail: "Vous opposer au traitement de vos données" },
              { droit: "Droit à la portabilité", detail: "Récupérer vos données dans un format lisible" },
              { droit: "Droit de retirer le consentement", detail: "À tout moment pour les traitements basés sur le consentement" },
            ].map((item) => (
              <div key={item.droit} className="p-4 border border-lum-border rounded-lg">
                <p className="font-semibold text-lum-midnight text-sm">{item.droit}</p>
                <p className="text-lum-muted text-xs mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-lum-slate text-sm leading-relaxed mt-6">
            Pour exercer ces droits, contactez-nous à :{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-lum-electric hover:underline font-medium">
              {siteConfig.contact.email}
            </a>
          </p>
        </section>

        {/* 6. Cookies */}
        <section>
          <h2 className="font-syne font-bold text-xl text-lum-midnight mb-4 pb-3 border-b border-lum-border">
            6. Cookies et traceurs
          </h2>
          <p className="text-lum-slate text-sm leading-relaxed">
            Ce site utilise des cookies techniques nécessaires au bon fonctionnement des pages. Aucun cookie publicitaire tiers n'est déposé sans votre consentement explicite.
          </p>
          <p className="text-lum-slate text-sm leading-relaxed mt-4">
            Vous pouvez configurer votre navigateur pour refuser les cookies. Cela peut cependant affecter certaines fonctionnalités du site.
          </p>
        </section>

        {/* 7. Sécurité */}
        <section>
          <h2 className="font-syne font-bold text-xl text-lum-midnight mb-4 pb-3 border-b border-lum-border">
            7. Sécurité des données
          </h2>
          <p className="text-lum-slate text-sm leading-relaxed">
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Le site est hébergé sur une infrastructure sécurisée avec chiffrement SSL/TLS.
          </p>
        </section>

        {/* 8. Modifications */}
        <section>
          <h2 className="font-syne font-bold text-xl text-lum-midnight mb-4 pb-3 border-b border-lum-border">
            8. Modifications de cette politique
          </h2>
          <p className="text-lum-slate text-sm leading-relaxed">
            Light Studio se réserve le droit de modifier la présente politique à tout moment. La date de dernière mise à jour est indiquée en haut de ce document. Nous vous encourageons à consulter régulièrement cette page.
          </p>
        </section>

        {/* Note légale */}
        <div className="pt-8 border-t border-lum-border">
          <p className="text-xs text-lum-muted leading-relaxed">
            <strong>Note :</strong> Ce document est un modèle rédigé à titre informatif. Il ne constitue pas un avis juridique. Light Studio vous recommande de le faire valider par un juriste spécialisé en droit ivoirien et en protection des données avant toute publication définitive.
          </p>
          <p className="text-xs text-lum-muted mt-2">
            Voir aussi :{" "}
            <Link href="/mentions-legales" className="text-lum-electric hover:underline">Mentions légales</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
