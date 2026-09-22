# FICHIER PROJET : LIGHT STUDIO
*Source de vérité unique du projet — Dernière mise à jour : 21/09/2026*

---

### 1. Vision et Objectif du Site
> Créer une vitrine web haut de gamme, moderne et interactive pour **Light Studio** (Abidjan), valorisant son savoir-faire créatif 360° (Graphisme, Vidéo cinématique, Web) et convertissant les PME et créateurs ivoiriens en clients grâce à des offres claires (à la carte et en packs) et un contact WhatsApp direct.

---

### 2. Niche, Secteur, Cible & Offre
* **Secteur :** Agence de communication et studio créatif multimédia (Abidjan, Côte d'Ivoire).
* **Cibles prioritaires :**
  1. *PME et Dirigeants locaux :* Besoin d'asseoir leur crédibilité, moderniser leur image et booster leurs ventes.
  2. *Créateurs, Artistes et Startups :* Besoin de formats vidéo percutants (cinématique, vlogs, reels) et de solutions web dynamiques.
* **Double structure d'offre :**
  * *Offre Libre / À la carte :* Affiches pro, création de contenus, montages vidéo, captation cinématique, site web (pour clients ayant déjà leur identité).
  * *Packs Clés en Main :* Formules complètes Starter, Croissance 360° et Production Signature.

---

### 3. Ton de Marque & Mini Design System Retenu : « Luminescence Studio »
* **Ambiance :** Éditoriale, lumineuse, cinématographique et haut de gamme. Espace et pureté célébrant la lumière créative de Light Studio.
* **Palette Chromatique (Conforme WCAG AA) :**
  * *Blanc Luminescence (Dominant 65%+) :* `#FFFFFF` (fonds principaux) et `#F8FAFC` (cartes et sections en relief doux).
  * *Bleu Nuit Royal (Secondaire 25%) :* `#0A1128` (titres H1/H2, boutons d'action majeurs, accents profonds) et `#1C2A4A` (survols et bordures actives). Ratio de contraste > 16:1.
  * *Noir Onyx (Tertiaire 10%) :* `#090A0F` (contrastes nets) et `#334155` (textes courants et paragraphes, lisibilité maximale sans éblouissement).
  * *Micro-accent Énergie :* `#2563EB` (bleu vibrant pour pastille active WhatsApp, focus formulaire et points d'attention).
* **Typographie (Google Fonts) :**
  * *Titres (Display & H1-H4) :* **Syne** (SemiBold / Bold / ExtraBold) — signature créative d'avant-garde.
  * *Corps de texte & données (Body & UI) :* **Inter** (Regular / Medium / SemiBold) — lisibilité chirurgicale sur smartphone.
* **Composants Standards :**
  * *Boutons :* Forme pilule (`rounded-full`), micro-animation d'échelle au survol (scale-102), transition fluide 200ms.
  * *Cartes & Conteneurs :* Coins arrondis modernes (`rounded-2xl` à `rounded-3xl`), bordure ultra-fine 1px `#E2E8F0`, ombre soyeuse diffuse (`shadow-sm`).
  * *Formulaires :* Champs épurés fond blanc satiné, bordure discrète avec halo bleu doux au focus.
  * *Whitespace :* Espacements verticaux généreux (80px à 112px sur ordinateur, 56px sur mobile) pour une sensation de luxe et de respiration.

---

### 4. Stack Technique et Justification
* **Next.js 15 + React 19 :** Framework moderne offrant rapidité de chargement, fluidité d'affichage et excellent référencement naturel (SEO).
* **Tailwind CSS & shadcn/ui :** Système de design sur-mesure garantissant une interface esthétique, propre et légère.
* **Lucide React :** Pack d'icônes vectorielles épurées.
* **Framer Motion / Scroll-Driven CSS :** Animations interactives sans surcharge pour le processeur des téléphones mobiles.

---

### 5. Liste des Modules
| ID | Nom du Module | Priorité | Dépendances | Rôle & Expérience Utilisateur |
| :--- | :--- | :--- | :--- | :--- |
| **M01** | **Header Flottant & Navigation Express** | Indispensable | Aucune | Logo Light Studio, menu mobile épuré, navigation fluide et bouton permanent « Devis WhatsApp ». |
| **M02** | **Hero Section Cinématique & Scroll-Driven** | Indispensable | M01 | Accroche puissante, arrière-plan vidéo/visuel immersif avec effet de défilement, doubles boutons d'action. |
| **M03** | **Grille des Départements Créatifs** | Indispensable | M02 | Présentation des 4 pôles : Graphisme, Vidéo Cinématique, Web/micro-SaaS, Stratégie Digitale. |
| **M03-B** | **Processus de Création Scroll-Driven** | Indispensable | M03 | Trajectoire en S avec étiquettes suspendues interactives animées au défilement (4 étapes de production). |
| **M04** | **Portfolio Showcase Interactif** | Indispensable | M03 | Galerie filtrable (Affiches, Vidéos/Vlogs, Sites web) avec modales d'aperçu plein écran. |
| **M05** | **Catalogue des Offres à Double Entrée** | Indispensable | M03 | Sélecteur à bascule : Onglet « Services à la carte » (besoin ciblé) vs Onglet « Packs Clés en main ». |
| **M06** | **Formulaire de Commande & Liaison WhatsApp** | Indispensable | M05 | Configurateur de demande rapide générant un message WhatsApp pré-formaté vers Light Studio. |
| **M07** | **Section Présentation (« Qui est Light Studio ? »)** | Important | M02 | Histoire, vision créative, ancrage à Abidjan et esprit de l'équipe pour humaniser la marque. |
| **M08** | **Réassurance & Garanties (« Pourquoi nous ? »)** | Important | M07 | Engagements (délais garantis, qualité studio, réactivité), chiffres clés et témoignages clients. |
| **M09** | **Agenda & Événements Prévus** | Bonus | M03 | Fil d'actualité des tournages, sorties de courts-métrages et événements organisés par le studio. |
| **M10** | **Footer Professionnel & Réseaux Sociaux** | Indispensable | M01 | Coordonnées Abidjan, réseaux (Instagram, TikTok, YouTube, LinkedIn), copyright et mentions. |

---

### 6. Roadmap MVP et Micro-Tâches

#### 🚀 MVP1 : Le Socle de Vente Essentiel (Prêt à convertir immédiatement)
Objectif : Mettre en ligne un site complet, moderne, mobile-first et vendeur pour présenter Light Studio et générer des commandes via WhatsApp dès le premier jour.
* **MVP1-T01 [TERMINÉ] :** Initialisation du projet Next.js 15, TypeScript, Tailwind CSS, Google Fonts (Syne + Inter), config centralisée et Design System Luminescence.
* **MVP1-T02 [TERMINÉ] :** Module M01 — Header Flottant & Navigation Responsive (avec bouton permanent WhatsApp).
* **MVP1-T03 [TERMINÉ] :** Module M02 — Hero Section Cinématique & Scroll-Driven (accroche puissante et arrière-plan immersif).
* **MVP1-T04 [TERMINÉ] :** Module M03 — Grille des 4 Départements Créatifs (cartes interactives et savoir-faire).
* **MVP1-T05 [TERMINÉ] :** Module M04 — Portfolio Showcase Interactif (galerie filtrable : Affiches, Vidéos, Sites Web + modales d'aperçu).
* **MVP1-T06 [TERMINÉ] :** Module M05 — Catalogue des Offres à Double Entrée (sélecteur : « Services à la carte » vs « Packs clés en main »).
* **MVP1-T07 [TERMINÉ] :** Module M06 — Formulaire de Commande & Liaison WhatsApp (générateur de message prêt à l'envoi).
* **MVP1-T08 [TERMINÉ] :** Module M10 — Footer Professionnel & Coordonnées d'Abidjan (réseaux sociaux et mentions).
* **MVP1-T09 [TERMINÉ] :** Revue globale du MVP1, vérification responsive mobile et validation du socle de vente.

> 🎉 **MILSTONE : MVP1 100% VALIDÉ & OPÉRATIONNEL** (Header M01, Hero M02, Pôles M03, Portfolio M04, Offres M05, Devis M06, Footer M10).

#### 🌟 MVP2 : Immersion, Autorité & Histoire de Marque
Objectif : Densifier le contenu institutionnel et maximiser la réassurance client.
* **Module M07 :** Section Présentation (« Qui est Light Studio ? », histoire, valeurs, équipe créative).
* **Module M08 :** Section Réassurance (« Pourquoi faire appel à nous ? », garanties de délais, chiffres clés et avis).
* **Enrichissement M04 :** Fiches projets détaillées pour le portfolio.

#### ⚡ MVP3 : Dynamisme, Événements & Interactions Avancées
Objectif : Montrer une agence vivante et animer la communauté.
* **Module M09 :** Espace Événements, sorties de courts-métrages et tournages en direct.
* Animations de défilement cinématiques avancées.

---

### 7. Journal des Décisions
* **21/09/2026 :** Validation de la charte de base (Blanc dominant + Bleu nuit + Noir).
* **21/09/2026 :** Validation du ciblage hybride (PME régionales + créateurs/startups).
* **21/09/2026 :** Intégration impérative de l'offre « À la carte » (services unitaires pour clients ayant déjà des éléments graphiques).
* **21/09/2026 :** Choix d'une architecture hybride (one-page vitrine rythmée + vues détaillées).
* **21/09/2026 :** Choix de la stack locale Next.js 15, React 19, Tailwind CSS et shadcn/ui.
* **21/09/2026 :** Création du support de présentation interactif Bento Slides (`Light_Studio_Presentation.bento.html`) pour la réunion d'alignement avec les fondateurs et collaborateurs (5 diapositives, style Luminescence épuré).
* **21/09/2026 :** Création du support Bento Slides détaillé écran par écran (`Light_Studio_Sections_Web.bento.html`) expliquant ce qu'il y a dans chaque section (M01 à M10) et pourquoi (objectifs psychologiques et conversion).
* **21/09/2026 :** Session d'alignement technique (/grill-me) : Next.js 15 App Router avec TypeScript, palette Luminescence intégrée dans Tailwind, médias HD sur-mesure structurés dans `public/`, liaison WhatsApp centralisée dans `config/site.ts`, double affichage tarifaire FCFA/EUR (M05) et déploiement Vercel.
* **21/09/2026 :** Finalisation et validation de l'intégralité du **MVP1** (Tâches MVP1-T01 à MVP1-T09 terminées). Le socle de vente est 100% opérationnel.
* **21/09/2026 :** Intégration du module **M03-B (Processus de Création Scroll-Driven)** inspiré de la maquette de référence : 4 étiquettes suspendues avec œillets métalliques, angles d'inclinaison organiques (-3.5° à +4°), arrière-plan en grille millimétrée, et ligne pointillée courbe en S animée en temps réel au défilement.
* **21/09/2026 :** Amélioration du sélecteur de tarifs (Module M05) avec **Swipe Automatique Continu (4s)** : capsule noire physique qui glisse de gauche à droite avec translation CSS fluide (`transform: translateX()`), jauge fine de progression intégrée, glissement latéral fluide des cartes avec fondu doux, et pause automatique au survol pour garantir le confort de lecture.
* **21/09/2026 :** Ajout du **Composant Scroll Reveal global** (`components/scroll-reveal.tsx`) : animation d'apparition fluide au défilement sur toutes les sections, accélération GPU (`will-change`), 4 variantes (haut, gauche, droite, zoom), déclenchement anticipé (`rootMargin -40px`), respect de l'accessibilité (`prefers-reduced-motion`).
* **22/09/2026 :** **Sécurisation Globale du Site (OWASP Top 10 & mandatory-secure-web-skills) :**
  - Élimination de la vulnérabilité dépendance PostCSS (GHSA-qx2v-qp2m-jg93) via `overrides: postcss ^8.5.28` (0 vulnérabilité `npm audit`).
  - Configuration d'en-têtes HTTP défensifs dans `next.config.ts` (CSP stricte, HSTS 2 ans, anti-clickjacking `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, suppression de `X-Powered-By`).
  - Assainissement strict (`sanitizeInput`), limitation de longueur (`maxLength`) sur le configurateur de devis (`components/order-configurator.tsx`), et assainissement du numéro WhatsApp (`config/site.ts`).
  - Création du composant d'erreur global Next.js (`app/error.tsx`) prévenant toute fuite de données techniques ou de traces d'exécution.


---

### 8. Glossaire & Acquis
* **Vibe coder :** Créateur qui réalise des applications modernes avec l'aide de l'IA sans devoir écrire tout le code à la main.
* **Scroll-driven :** Effet visuel où les éléments de la page réagissent au fur et à mesure que l'utilisateur fait défiler son écran.
* **IntersectionObserver :** Outil du navigateur qui détecte quand un élément entre dans la zone visible de l'écran, utilisé pour déclencher les animations au scroll.
* **will-change :** Instruction CSS qui dit au navigateur d'accélérer une animation via la carte graphique (GPU) pour qu'elle soit toujours fluide.
* **shadcn/ui :** Bibliothèque de blocs d'interface déjà stylisés et faciles à adapter (boutons, formulaires, tiroirs de contenu).
* **Next.js 15 :** Outil puissant qui prépare et affiche les pages web à la vitesse de l'éclair.
* **transform: translateX() :** Instruction CSS qui fait glisser un élément horizontalement — 100% géré par la carte graphique, jamais saccadé.

---

### 9. Points Ouverts
* ✅ Tous les points d'arbitrage MVP1 sont levés.
* 🔜 **MVP2 EN COURS** — Module M07 (Histoire de marque) et M08 (Réassurance & Garanties) à construire.
* 📸 Les photos de l'équipe et les témoignages clients réels (MVP2) seront à fournir par le studio pour remplacer les contenus de démonstration.
