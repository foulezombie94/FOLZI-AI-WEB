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
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 font-bold text-xs uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-brand-500" />
            <span>Questions Fréquentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink tracking-tight">
            Tout ce que vous devez savoir.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
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
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-brand-50/40 border-brand-300 shadow-md shadow-brand-500/5"
                    : "bg-slate-50/70 border-slate-200/80 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span className={`font-extrabold text-base sm:text-lg ${
                    isOpen ? "text-brand-600" : "text-ink"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-brand-500 text-white" : "bg-white text-slate-500"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-brand-100/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-canvas border border-slate-200 text-sm text-slate-600">
          Vous avez une autre question ? Notre équipe vous répond en moins de 2h à{" "}
          <a href="mailto:support@vendmoi.app" className="text-brand-600 font-bold hover:underline">
            support@vendmoi.app
          </a>
        </div>

      </div>
    </section>
  );
}
