"use client";

import React from "react";
import FadeIn from "./FadeIn";

const servicesList = [
  {
    number: "01",
    name: "Vision par Ordinateur",
    description:
      "Reconnaissance instantanée des marques de créateurs, coupes, matières et détails techniques à partir d’une simple photo smartphone.",
  },
  {
    number: "02",
    name: "Rédaction Persuasive",
    description:
      "Génération de titres viraux pour le moteur de recherche et de descriptions accrocheuses qui déclenchent l’achat immédiat.",
  },
  {
    number: "03",
    name: "Argus & Prix Optimal",
    description:
      "Algorithme prédictif calibré sur des millions de transactions pour fixer le prix exact qui vend rapidement au plus haut tarif.",
  },
  {
    number: "04",
    name: "Sécurité & Anti-Ban",
    description:
      "Filtrage proactif des termes sensibles pour respecter à 100% les conditions d’utilisation de Vinted et éviter tout blocage de compte.",
  },
  {
    number: "05",
    name: "Multi-Plateformes",
    description:
      "Basculez en 1 clic entre le format Vinted (hashtags viraux, filtres) et le format Leboncoin (remise en main propre et politesse).",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full bg-[#FFFFFF] text-[#0E0924] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        
        {/* Heading in Deep Midnight Violet */}
        <FadeIn delay={0} y={40} duration={0.8} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            className="text-[#0E0924] font-black uppercase leading-none tracking-tight"
          >
            Fonctions IA
          </h2>
        </FadeIn>

        {/* Vertical Services List */}
        <div className="w-full flex flex-col border-t border-[#7C5CFC]/20">
          {servicesList.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={30}
              duration={0.7}
              className="w-full border-b border-[#7C5CFC]/20"
            >
              <div className="w-full py-8 sm:py-10 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 group">
                
                {/* Number on the left in Vibrant Electric Violet */}
                <div
                  style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
                  className="font-black text-[#7C5CFC] leading-none select-none shrink-0 group-hover:scale-105 transition-transform duration-200"
                >
                  {service.number}
                </div>

                {/* Name + Description stacked on right */}
                <div className="flex flex-col gap-2 max-w-2xl">
                  <h3
                    style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                    className="font-medium uppercase text-[#0E0924] tracking-tight group-hover:text-[#7C5CFC] transition-colors duration-200"
                  >
                    {service.name}
                  </h3>
                  <p
                    style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                    className="font-light text-[#3A3160] leading-relaxed"
                  >
                    {service.description}
                  </p>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}