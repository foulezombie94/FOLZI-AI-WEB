"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ShieldCheck, Heart, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030206] text-slate-400 text-xs border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#7C5CFC] to-[#A88BFF] flex items-center justify-center text-white shadow-lg shadow-purple-600/30">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Folzi <span className="text-[#C2B3FF] font-mono text-sm">AI</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Le premier studio d’intelligence artificielle conçu pour multiplier par 3 vos ventes de seconde main sur Vinted, Leboncoin et les plateformes européennes.
            </p>
          </div>

          {/* Col 2: Produit & Silos */}
          <div className="space-y-3">
            <div className="font-bold text-white text-sm">Produit & Solutions</div>
            <ul className="space-y-2">
              <li><Link href="/vinted" className="hover:text-white transition-colors">IA Spéciale Vinted</Link></li>
              <li><Link href="/leboncoin" className="hover:text-white transition-colors">IA Spéciale Leboncoin</Link></li>
              <li><Link href="/estimation-prix" className="hover:text-white transition-colors">Argus de Prix & Estimation</Link></li>
              <li><a href="/#scanner" className="hover:text-white transition-colors">Simulateur IA en direct</a></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">Tarifs & 4 crédits offerts</a></li>
              <li><a href="/folzi-ai.apk" download="Folzi-AI.apk" className="hover:text-white transition-colors">Téléchargement Android (APK)</a></li>
            </ul>
          </div>

          {/* Col 3: Guides & Ressources */}
          <div className="space-y-3">
            <div className="font-bold text-white text-sm">Guides & Stratégies</div>
            <ul className="space-y-2">
              <li><Link href="/guides" className="hover:text-white transition-colors">Centre de ressources</Link></li>
              <li><Link href="/guides/comment-vendre-sur-vinted" className="hover:text-white transition-colors">Comment vendre sur Vinted</Link></li>
              <li><Link href="/guides/cote-argus-sneakers-vintage" className="hover:text-white transition-colors">Argus Sneakers & Vintage</Link></li>
            </ul>
          </div>

          {/* Col 4: Légal & Sécurité */}
          <div className="space-y-3">
            <div className="font-bold text-white text-sm">Légal & Confidentialité</div>
            <ul className="space-y-2">
              <li><Link href="/confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="/cgu" className="hover:text-white transition-colors">Conditions Générales (CGU)</Link></li>
              <li><Link href="/cgu" className="hover:text-white transition-colors">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Col 4: Sécurité & Avertissement */}
          <div className="space-y-3">
            <div className="font-bold text-white text-sm flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#34D399]" />
              <span>Sécurité & Indépendance</span>
            </div>
            <p className="text-slate-500 leading-relaxed text-[11px]">
              Folzi AI est une application indépendante développée pour les vendeurs. Elle n’est ni affiliée, ni sponsorisée, ni approuvée par Vinted UAB ou Adevinta France (Leboncoin).
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © {new Date().getFullYear()} Folzi AI. Tous droits réservés.
          </div>
          <div className="flex items-center gap-2">
            <span>Développé pour les passionnés de seconde main</span>
            <Heart className="w-3.5 h-3.5 text-[#A88BFF] fill-[#A88BFF]" />
          </div>
        </div>

      </div>
    </footer>
  );
}
