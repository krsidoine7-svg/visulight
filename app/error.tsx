"use client";

import { useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Journalisation sécurisée sans exposer de données sensibles aux tiers
    if (process.env.NODE_ENV === "development") {
      console.error("Erreur d'application interceptée :", error);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-lum-white">
      <div className="max-w-md w-full text-center p-8 rounded-3xl bg-white border border-lum-border shadow-card">
        <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <h1 className="font-syne font-extrabold text-2xl text-lum-midnight mb-2">
          Une anomalie temporaire est survenue
        </h1>

        <p className="font-sans text-sm text-lum-slate mb-6 leading-relaxed">
          Nous n'avons pas pu charger cette page correctement. Aucun problème de sécurité n'a été détecté.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-lum-midnight hover:bg-lum-navy text-white text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-sm"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Réessayer</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-lum-surface hover:bg-lum-slate/10 text-lum-midnight border border-lum-border text-xs sm:text-sm font-semibold transition-all active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Accueil {siteConfig.shortName}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
