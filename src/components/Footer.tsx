"use client";

import React from "react";
import { Sparkles, ShieldCheck, Heart, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-850">
          
          {/* Col 1: Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-brand-500 flex items-center justify-center text-white shadow-md shadow-brand-500/25">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                VendMoi
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Le premier studio d’intelligence artificielle conçu pour multiplier par 3 vos ventes de seconde main sur Vinted et Leboncoin.
            </p>
          </div>

          {/* Col 2: Produit */}
          <div className="space-y-3">
            <div className="font-extrabold text-white text-sm">Produit</div>
            <ul className="space-y-2">
              <li><a href="#demo" className="hover:text-white transition-colors">Simulateur IA en direct</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Vision par ordinateur</a></li>
              <li><a href="#before-after" className="hover:text-white transition-colors">Comparateur de ventes</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Tarifs & Abonnements</a></li>
              <li><a href="#download" className="hover:text-white transition-colors">Téléchargement Android / iOS</a></li>
            </ul>
          </div>

          {/* Col 3: Légal & Sécurité */}
          <div className="space-y-3">
            <div className="font-extrabold text-white text-sm">Légal & Confidentialité</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conditions Générales d’Utilisation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gestion des données RGPD</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
            </ul>
          </div>

          {/* Col 4: Sécurité & Avertissement */}
          <div className="space-y-3">
            <div className="font-extrabold text-white text-sm flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Indépendance & Sécurité</span>
            </div>
            <p className="text-slate-500 leading-relaxed text-[11px]">
              VendMoi est une application indépendante développée pour les vendeurs. Elle n’est ni affiliée, ni sponsorisée, ni approuvée par Vinted UAB ou Adevinta France (Leboncoin).
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © {new Date().getFullYear()} VendMoi (Folzi-AI). Tous droits réservés.
          </div>
          <div className="flex items-center gap-2">
            <span>Fait avec passion pour les passionnés de seconde main</span>
            <Heart className="w-3.5 h-3.5 text-brand-400 fill-brand-400" />
          </div>
        </div>

      </div>
    </footer>
  );
}
