"use client";

import React, { useState } from "react";
import { XCircle, CheckCircle2, TrendingUp, Clock, Eye, Heart, Sparkles, ArrowRight } from "lucide-react";

export default function BeforeAfter() {
  return (
    <section id="before-after" className="py-24 bg-canvas relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 font-bold text-xs uppercase tracking-wider">
            <TrendingUp className="w-4 h-4 text-brand-500" />
            <span>Impact Direct sur vos Ventes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink tracking-tight">
            La différence entre <span className="text-slate-400">attendre des mois</span> et <span className="gradient-purple-text">vendre en 24h</span>.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            90% des annonces sur Vinted et Leboncoin sont mal rédigées et invisibles. Découvrez comment VendMoi propulse vos articles en tête des résultats.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: The Amateur Listing (Without VendMoi) */}
          <div className="rounded-3xl bg-white border border-rose-100 p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-rose-400" />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-rose-600 font-extrabold text-sm">
                <XCircle className="w-5 h-5" />
                <span>Annonce classique (Sans VendMoi)</span>
              </div>
              <span className="text-xs font-bold text-slate-400">Résultat : Bloqué</span>
            </div>

            {/* Simulated Amateur Listing */}
            <div className="space-y-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
              <div className="space-y-1">
                <div className="font-extrabold text-slate-900 text-sm">
                  vends veste kaki bon etat taille m
                </div>
                <div className="text-slate-500">Prix : 25 €</div>
              </div>
              <div className="text-slate-600 leading-relaxed italic">
                &ldquo;veste en bon etat peu portee taille m couleur kaki pas d'echange merci.&rdquo;
              </div>
              <div className="text-slate-400">0 hashtag · 0 mesure · 0 détail matière</div>
            </div>

            {/* Amateur Metrics */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-center">
              <div className="p-3 rounded-xl bg-slate-50">
                <div className="text-xs text-slate-500 font-medium">Vues</div>
                <div className="text-base font-extrabold text-slate-700">14 vues</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50">
                <div className="text-xs text-slate-500 font-medium">Favoris</div>
                <div className="text-base font-extrabold text-slate-700">1 like</div>
              </div>
              <div className="p-3 rounded-xl bg-rose-50 text-rose-700">
                <div className="text-xs font-medium">Délai</div>
                <div className="text-base font-extrabold">+45 jours</div>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span> Titre invisible dans la recherche
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span> Prix sous-évalué (-40% de perte)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span> Négociations agressives d’acheteurs
              </li>
            </ul>
          </div>

          {/* Card 2: The VendMoi AI Listing (Optimized) */}
          <div className="rounded-3xl bg-white border-2 border-brand-500 p-6 sm:p-8 shadow-xl shadow-brand-500/10 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-brand-500" />
            
            {/* Top Badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-brand-600 font-extrabold text-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-500" />
                <span>Annonce optimisée avec VendMoi</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-black">
                Vendu en 24h
              </span>
            </div>

            {/* Simulated AI Listing */}
            <div className="space-y-4 p-4 rounded-2xl bg-brand-50/50 border border-brand-100 text-xs">
              <div className="space-y-1">
                <div className="font-extrabold text-ink text-sm flex items-center justify-between">
                  <span>Veste Workwear Vintage Kaki Carhartt WIP - Taille M</span>
                </div>
                <div className="text-brand-600 font-extrabold text-sm">Prix conseillé : 48 €</div>
              </div>
              <div className="text-slate-700 leading-relaxed font-medium">
                Veste workwear authentique en coton lourd. Coupe boxy vintage, poches utilitaires et boutons siglés. État irréprochable sans accroc.
              </div>
              <div className="text-brand-600 font-bold">
                #carhartt #workwear #vintage #streetwear #oversize
              </div>
            </div>

            {/* VendMoi Metrics */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-center">
              <div className="p-3 rounded-xl bg-brand-50 text-brand-900">
                <div className="text-xs text-brand-600 font-medium">Vues</div>
                <div className="text-base font-extrabold text-brand-600">+340 vues</div>
              </div>
              <div className="p-3 rounded-xl bg-brand-50 text-brand-900">
                <div className="text-xs text-brand-600 font-medium">Favoris</div>
                <div className="text-base font-extrabold text-brand-600">38 likes</div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700">
                <div className="text-xs font-medium">Délai</div>
                <div className="text-base font-extrabold">24 heures</div>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-slate-700 font-semibold pt-2 border-t border-brand-100">
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold">✓</span> Algorithme Vinted / LBC capté à 100%
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold">✓</span> +23 € de gain supplémentaire net
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold">✓</span> Vente directe sans négociation
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
