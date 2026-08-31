"use client";

import React, { useState } from "react";
import { XCircle, CheckCircle2, TrendingUp, Clock, Eye, Heart, Sparkles, ArrowRight } from "lucide-react";

export default function BeforeAfter() {
  return (
    <section id="before-after" className="py-24 bg-[#090614] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            La différence entre <span className="text-slate-500">attendre des mois</span> et <span className="gradient-purple-text">vendre en 24h</span>.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            90% des annonces sur Vinted et Leboncoin sont mal rédigées et invisibles. Découvrez comment Folzi AI propulse vos articles en tête des résultats.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: The Amateur Listing (Without Folzi AI) */}
          <div className="rounded-3xl bg-white/[0.03] border border-rose-500/30 p-6 sm:p-8 shadow-2xl shadow-black/60 space-y-6 relative overflow-hidden backdrop-blur-xl">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-rose-500/70" />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <XCircle className="w-5 h-5 text-rose-500" />
                <span>Annonce classique (Sans IA)</span>
              </div>
              <span className="text-xs font-mono font-bold text-slate-500">Bloqué +45j</span>
            </div>

            {/* Simulated Amateur Listing */}
            <div className="space-y-3 p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-xs">
              <div className="space-y-1">
                <div className="font-bold text-slate-200 text-sm">
                  vends veste kaki bon etat taille m
                </div>
                <div className="text-slate-400 font-mono">Prix : 25 €</div>
              </div>
              <div className="text-slate-400 leading-relaxed italic">
                &ldquo;veste en bon etat peu portee taille m couleur kaki pas d&apos;echange merci.&rdquo;
              </div>
              <div className="text-slate-500 text-[11px]">0 hashtag · 0 mesure · 0 détail matière</div>
            </div>

            {/* Amateur Metrics */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-center">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-slate-400">Vues</div>
                <div className="text-base font-bold text-slate-300">14 vues</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-slate-400">Favoris</div>
                <div className="text-base font-bold text-slate-300">1 like</div>
              </div>
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                <div className="text-xs">Délai</div>
                <div className="text-base font-bold">+45 jours</div>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-white/10">
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

          {/* Card 2: The Folzi AI Listing (Optimized) */}
          <div className="rounded-3xl bg-[#0E0A21]/90 border-2 border-[#7C5CFC] p-6 sm:p-8 shadow-2xl shadow-purple-950/40 space-y-6 relative overflow-hidden backdrop-blur-xl">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#7C5CFC] to-[#A88BFF]" />
            
            {/* Top Badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#C2B3FF] font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#34D399]" />
                <span>Optimisée avec Folzi AI</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#34D399]/20 text-[#6EE7B7] text-xs font-bold font-mono border border-[#34D399]/30">
                Vendu en 24h
              </span>
            </div>

            {/* Simulated AI Listing */}
            <div className="space-y-3 p-4 rounded-2xl bg-[#7C5CFC]/10 border border-[#A88BFF]/30 text-xs">
              <div className="space-y-1">
                <div className="font-bold text-white text-sm">
                  Veste Workwear Vintage Kaki Carhartt WIP - Coupe Boxy M
                </div>
                <div className="text-[#34D399] font-bold font-mono">Prix conseillé : 48 € (+23 € de gain)</div>
              </div>
              <div className="text-slate-300 leading-relaxed">
                Toile de coton épaisse haute qualité, fermeture à boutons siglés, poches utilitaires plaquées. Pièce authentique sans accroc.
              </div>
              <div className="text-[#C2B3FF] font-mono text-[11px]">
                #carhartt #workwear #vintage #streetwear #oversize
              </div>
            </div>

            {/* Folzi AI Metrics */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-center">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="text-xs text-slate-400">Vues</div>
                <div className="text-base font-bold text-[#C2B3FF] font-mono">482 vues</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="text-xs text-slate-400">Favoris</div>
                <div className="text-base font-bold text-[#C2B3FF] font-mono">37 likes</div>
              </div>
              <div className="p-3 rounded-xl bg-[#34D399]/15 border border-[#34D399]/30 text-[#6EE7B7]">
                <div className="text-xs">Délai</div>
                <div className="text-base font-bold font-mono">18 heures</div>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-white/10">
              <li className="flex items-center gap-2">
                <span className="text-[#34D399] font-bold">✓</span> Indexé en 1ère position de recherche
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#34D399] font-bold">✓</span> +92% de marge nette sur la vente
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#34D399] font-bold">✓</span> Achat direct au prix fort sans négocier
              </li>
            </ul>
          </div>

        </div>

        {/* Global Performance Comparison Table */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-2 sm:p-4">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="p-4 text-slate-400 font-semibold">Fonctionnalité &amp; Résultat</th>
                  <th className="p-4 text-rose-400 font-semibold">Rédaction Manuelle</th>
                  <th className="p-4 text-[#5BE3EB] font-bold">Avec Folzi AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-4 text-slate-200 font-medium">Temps moyen par annonce</td>
                  <td className="p-4 text-slate-400">10 à 15 minutes</td>
                  <td className="p-4 text-[#5BE3EB] font-bold">1,8 seconde ⚡</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200 font-medium">Hashtags &amp; Visibilité Algorithmique</td>
                  <td className="p-4 text-slate-400">Oubliés ou génériques</td>
                  <td className="p-4 text-[#5BE3EB] font-bold">5 à 7 tags viraux ciblés (#Y2K, #QuietLuxury)</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200 font-medium">Précision de l&apos;Argus de Prix</td>
                  <td className="p-4 text-slate-400">Au hasard / sous-évalué (-40%)</td>
                  <td className="p-4 text-[#5BE3EB] font-bold">Optimisé sur 2 400+ ventes réelles</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200 font-medium">Litiges &amp; Questions d&apos;Acheteurs</td>
                  <td className="p-4 text-slate-400">Fréquents (manque de mesures)</td>
                  <td className="p-4 text-[#5BE3EB] font-bold">0 litige (mesures aisselle à aisselle incluses)</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200 font-medium">Délai moyen de vente</td>
                  <td className="p-4 text-slate-400">14 à 45 jours</td>
                  <td className="p-4 text-[#5BE3EB] font-bold">Moins de 24 à 48 heures</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
