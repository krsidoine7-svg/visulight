import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-lum-white">
      <h1 className="font-syne font-extrabold text-6xl text-lum-midnight mb-4">404</h1>
      <h2 className="font-syne font-bold text-2xl text-lum-midnight mb-2">Page introuvable</h2>
      <p className="text-lum-slate max-w-md mb-8">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-lum-midnight text-white font-medium hover:bg-lum-navy transition"
      >
        Retour à l'accueil {siteConfig.name}
      </Link>
    </div>
  );
}
