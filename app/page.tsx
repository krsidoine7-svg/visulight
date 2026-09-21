import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Reassurance } from "@/components/reassurance";
import { Departments } from "@/components/departments";
import { ProcessFlow } from "@/components/process-flow";
import { Portfolio } from "@/components/portfolio";
import { Pricing } from "@/components/pricing";
import { OrderConfigurator } from "@/components/order-configurator";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Module M02 : Hero Section Cinématique — visible dès le chargement */}
      <Hero />

      {/* Module M07 : Qui est Light Studio ? (MVP2) */}
      <ScrollReveal variant="up">
        <About />
      </ScrollReveal>

      {/* Module M08 : Réassurance & Garanties (MVP2) */}
      <ScrollReveal variant="up">
        <Reassurance />
      </ScrollReveal>

      {/* Module M03 : Grille des 4 Départements Créatifs */}
      <ScrollReveal variant="up">
        <Departments />
      </ScrollReveal>

      {/* Module M03-B : Processus de Création Scroll-Driven (4 Étapes) */}
      <ScrollReveal variant="up" delay={100}>
        <ProcessFlow />
      </ScrollReveal>

      {/* Module M04 : Portfolio Showcase Interactif */}
      <ScrollReveal variant="scale">
        <Portfolio />
      </ScrollReveal>

      {/* Module M05 : Catalogue des Offres à Double Entrée */}
      <ScrollReveal variant="up">
        <Pricing />
      </ScrollReveal>

      {/* Module M06 : Formulaire de Commande Express & Liaison WhatsApp */}
      <ScrollReveal variant="up" delay={100}>
        <OrderConfigurator />
      </ScrollReveal>
    </main>
  );
}


