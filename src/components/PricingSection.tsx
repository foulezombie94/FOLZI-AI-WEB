"use client";

import React, { useState } from "react";
import { Check, Sparkles, Star, Crown, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { PRICING_TIERS } from "@/data/content";

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly");

  return (
    <section id="pricing" className="py-24 bg-[#090614] relative overflow-hidden border-t border-white/10">
      {/* Ambient background glow */}
      <div className="absolute pointer-events-none w-[500px] h-[500px] -bottom-32 right-1/4 bg-[#7C5CFC]/15 rounded-full blur-[140px] -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C5CFC]/20 border border-[#A88BFF]/40 text-[#D4C9FF] font-bold text-xs uppercase tracking-wider font-mono">
            <Zap className="w-4 h-4 text-[#A88BFF]" />
            <span>Tarifs Simples & Transparents</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Rentabilisé dès <span className="gradient-purple-text">votre première vente</span>.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal">
            Commencez gratuitement sans carte bancaire, puis passez à la vitesse supérieure quand vos ventes décollent.
          </p>
        </div>

        {/* 3D Billing Period Toggle (Monthly vs Yearly) */}
        <div className="flex items-center justify-center mb-16">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl gap-2">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                billingPeriod === "monthly"
                  ? "bg-white text-black shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Paiement Mensuel
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                billingPeriod === "yearly"
                  ? "bg-gradient-to-r from-[#7C5CFC] to-[#5B2FFF] text-white shadow-lg shadow-purple-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Paiement Annuel</span>
              <span className="px-2 py-0.5 rounded-full bg-[#34D399] text-slate-950 font-bold text-[10px] uppercase font-mono">
                -35%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_TIERS.map((tier) => {
            const price = billingPeriod === "yearly" ? tier.priceYearly : tier.priceMonthly;
            const isFree = tier.id === "free";

            return (
              <div
                key={tier.id}
                className={`relative rounded-[36px] p-8 flex flex-col justify-between transition-all duration-300 backdrop-blur-xl ${
                  tier.popular
                    ? "bg-[#0E0A21]/95 border-2 border-[#7C5CFC] shadow-2xl shadow-purple-950/50 lg:-translate-y-3"
                    : "bg-white/[0.03] border border-white/10 hover:border-white/25 shadow-xl shadow-black/40"
                }`}
              >
                {/* Popular Badge */}
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#7C5CFC] to-[#5B2FFF] text-white font-bold text-xs shadow-lg shadow-purple-600/30 uppercase tracking-wider font-mono flex items-center gap-1.5 border border-white/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{tier.badge}</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Title & Subtitle */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{tier.name}</h3>
                    <p className="text-xs text-slate-400 font-normal leading-relaxed">
                      {tier.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-3 border-y border-white/10 space-y-1">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-bold font-mono text-white tracking-tight">
                        {isFree ? "0 €" : `${price.toFixed(2).replace(".", ",")} €`}
                      </span>
                      {!isFree && (
                        <span className="text-xs font-bold text-slate-400">
                          / mois
                        </span>
                      )}
                    </div>

                    {!isFree && billingPeriod === "yearly" && (
                      <p className="text-[11px] text-[#A88BFF] font-mono font-bold">
                        Facturé {tier.yearlyTotal} € / an (-35% de réduction)
                      </p>
                    )}
                    {isFree && (
                      <p className="text-[11px] text-[#34D399] font-mono font-bold">
                        Sans carte bancaire · Démarrez en 30s
                      </p>
                    )}
                  </div>

                  {/* Credits Pill Highlight */}
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                    <span className="text-xs font-bold text-[#D4C9FF] font-mono">
                      ✨ {tier.credits}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 text-xs text-slate-300">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-8">
                  <a
                    href="/folzi-ai.apk"
                    download="Folzi-AI.apk"
                    className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm transition-all shadow-lg ${
                      tier.popular
                        ? "bg-gradient-to-r from-[#7C5CFC] to-[#5B2FFF] text-white hover:scale-105 shadow-purple-600/30 border border-white/20"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee */}
        <div className="mt-12 text-center text-xs font-bold text-slate-400 flex items-center justify-center gap-6">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#34D399]" />
            <span>Paiement 100% sécurisé via App Store & Google Play</span>
          </span>
          <span className="hidden sm:inline-block text-slate-600">·</span>
          <span className="text-slate-300">Annulation à tout moment en 1 clic</span>
        </div>

      </div>
    </section>
  );
}