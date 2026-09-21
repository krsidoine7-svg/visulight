"use client";

import { useEffect, useRef, ReactNode } from "react";

type RevealVariant = "up" | "left" | "right" | "scale";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number; // ms
  className?: string;
  threshold?: number;
}

// Styles initiaux (élément invisible, décalé) appliqués en JS pour éviter le flash
const initialStyles: Record<RevealVariant, Partial<CSSStyleDeclaration>> = {
  up: {
    opacity: "0",
    transform: "translateY(28px)",
    willChange: "opacity, transform",
  },
  left: {
    opacity: "0",
    transform: "translateX(-36px)",
    willChange: "opacity, transform",
  },
  right: {
    opacity: "0",
    transform: "translateX(36px)",
    willChange: "opacity, transform",
  },
  scale: {
    opacity: "0",
    transform: "scale(0.96)",
    willChange: "opacity, transform",
  },
};

export function ScrollReveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  threshold = 0.08,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Réduction de mouvement (accessibilité) : on n'anime pas si l'utilisateur le préfère
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    // Appliquer les styles initiaux (invisible) via JS
    const init = initialStyles[variant];
    Object.assign(el.style, init);

    // Transition CSS fluide, accélérée GPU
    el.style.transition = `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Revenir à l'état naturel = visible, en place
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.willChange = "auto";
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [variant, delay, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
