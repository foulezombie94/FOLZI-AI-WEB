"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { FAQS } from "@/data/content";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#090614] relative overflow-hidden border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C5CFC]/20 border border-[#A88BFF]/40 text-[#D4C9FF] font-bold text-xs uppercase tracking-wider font-mono">
            <HelpCircle className="w-4 h-4 text-[#A88BFF]" />
            <span>Questions Fréquentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Tout ce que vous devez savoir.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Une question sur le fonctionnement de l’IA, les crédits ou la compatibilité ? Les réponses sont ici.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden backdrop-blur-xl ${
                  isOpen
                    ? "bg-[#0E0A21]/90 border-[#7C5CFC] shadow-xl shadow-purple-950/40"
                    : "bg-white/[0.03] border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span className={`font-bold text-base sm:text-lg ${
                    isOpen ? "text-[#C2B3FF]" : "text-white"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-[#7C5CFC] text-white" : "bg-white/10 text-slate-300"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-sm text-slate-400">
          Vous avez une autre question ? Notre équipe vous répond à{" "}
          <a href="mailto:contact@folzi-ai.com" className="text-[#C2B3FF] font-bold hover:underline font-mono">
            contact@folzi-ai.com
          </a>
        </div>

      </div>
    </section>
  );
}
