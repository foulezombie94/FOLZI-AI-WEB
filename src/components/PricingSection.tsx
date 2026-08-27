"use client";

import React, { useState } from "react";
import { Check, Sparkles, Star, Crown, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { PRICING_TIERS } from "@/data/content";

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly");

  return (
    <section id="pricing" className="py-24 bg-canvas relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute pointer-events-none w-[500px] h-[500px] -bottom-32 right-1/4 bg-brand-500/15 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 font-extrabold text-xs uppercase tracking-wider font-mono">
            <Zap className="w-4 h-4 text-brand-500" />
            <span>Tarifs Simples & Transparents</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink tracking-tight">
            Rentabilisé dès <span className="gradient-purple-text">votre première vente</span>.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Commencez gratuitement sans carte bancaire, puis passez à la vitesse supérieure quand vos ventes décollent.
          </p>
        </div>

        {/* 3D Billing Period Toggle (Monthly vs Yearly) */}
        <div className="flex items-center justify-center mb-16">
          <div className="inline-flex items-center p-2 rounded-2xl bg-slate-200/80 border border-slate-300/60 shadow-inner gap-2">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all ${
                billingPeriod === "monthly"
                  ? "btn-secondary-3d bg-white text-ink"
                  : "text-slate-600 hover:text-ink"
              }`}
            >
              Paiement Mensuel
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all ${
                billingPeriod === "yearly"
                  ? "btn-3d bg-brand-500 text-white"
                  : "text-slate-600 hover:text-ink"
              }`}
            >
              <span>Paiement Annuel</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-400 text-slate-950 font-black text-[10px] uppercase font-mono">
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
                className={`relative rounded-[36px] p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? "bg-white border-2 border-brand-500 shadow-2xl shadow-brand-500/15 lg:-translate-y-3"
                    : "bg-white border border-slate-200 shadow-sm hover:border-brand-200"
                }`}
              >
                {/* Popular Badge */}
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-brand-500 text-white font-extrabold text-xs shadow-md shadow-brand-500/30 uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{tier.badge}</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Title & Subtitle */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-ink">{tier.name}</h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed">
                      {tier.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-3 border-y border-slate-100 space-y-1">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-black font-mono text-ink tracking-tight">
                        {isFree ? "0 €" : `${price.toFixed(2).replace(".", ",")} €`}
                      </span>
                      {!isFree && (
                        <span className="text-xs font-bold text-slate-500">
                          / mois
                        </span>
                      )}
                    </div>
                    {!isFree && billingPeriod === "yearly" && (
                      <div className="text-[11px] font-bold text-emerald-600 font-mono">
                        Facturé {tier.yearlyTotal} € / an (Économisez 35%)
                      </div>
                    )}
                    {isFree && (
                      <div className="text-[11px] font-bold text-brand-600 font-mono">
                        Sans carte bancaire requise
                      </div>
                    )}
                  </div>

                  {/* Credits Highlight Pill */}
                  <div className="p-3.5 rounded-2xl bg-brand-50 text-brand-700 font-mono font-black text-xs text-center border border-brand-100">
                    ⚡ {tier.credits}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-black uppercase tracking-wider text-slate-400 font-mono">
                      Ce qui est inclus :
                    </div>
                    <ul className="space-y-2.5 text-xs text-slate-700 font-semibold">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 3D Action Button */}
                <div className="pt-8 mt-6 border-t border-slate-100">
                  <a
                    href="#download"
                    className={`w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all ${
                      tier.popular
                        ? "btn-3d bg-brand-500 text-white"
                        : "btn-secondary-3d bg-white border border-slate-200 text-slate-800"
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
        <div className="mt-12 text-center text-xs font-bold text-slate-500 flex items-center justify-center gap-6">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-500" />
            Paiement 100% sécurisé via App Store & Google Play
          </span>
          <span className="hidden sm:inline-block">·</span>
          <span>Annulation à tout moment en 1 clic</span>
        </div>

      </div>
    </section>
  );
}