"use client";

import React, { useState } from "react";
import { Smartphone, Download, QrCode, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function DownloadCta() {
  const [showQr, setShowQr] = useState(false);

  return (
    <section id="download" className="py-24 bg-[#06040A] text-white relative overflow-hidden border-t border-white/10">
      {/* Absolute Ambient Background Glows */}
      <div className="absolute pointer-events-none w-[600px] h-[600px] top-0 right-0 bg-[#7C5CFC]/20 rounded-full blur-[140px] -z-0" />
      <div className="absolute pointer-events-none w-[500px] h-[500px] bottom-0 left-0 bg-[#9D7BFF]/15 rounded-full blur-[140px] -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C5CFC]/20 border border-[#A88BFF]/40 text-[#D4C9FF] font-bold text-xs uppercase tracking-wider font-mono">
              <Sparkles className="w-4 h-4 text-[#A88BFF]" />
              <span>Disponible dès aujourd’hui</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Prêt à vendre <span className="gradient-purple-text">plus vite et plus cher</span> ?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Téléchargez Folzi AI gratuitement. Vos 4 premiers crédits IA sont offerts immédiatement, sans carte bancaire requise.
            </p>

            {/* 3D Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="/folzi-ai.apk"
                download="Folzi-AI.apk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#7C5CFC] to-[#5B2FFF] text-white font-bold text-base hover:scale-105 active:scale-95 transition-all shadow-xl shadow-purple-600/30 border border-white/20"
              >
                <Download className="w-5 h-5" />
                <span>Télécharger l&apos;application (APK)</span>
              </a>

              <button
                onClick={() => setShowQr(!showQr)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-slate-200 font-bold text-base border border-white/15 backdrop-blur-xl transition-all"
              >
                <QrCode className="w-5 h-5 text-[#A88BFF]" />
                <span>{showQr ? "Masquer le QR Code" : "Scanner le QR Code"}</span>
              </button>
            </div>

            {/* Guarantees */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-xs font-bold text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                <span>Installation directe en 30s</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#A88BFF]" />
                <span>Données 100% privées & sécurisées</span>
              </div>
            </div>

          </div>

          {/* Right: Interactive QR Code Display Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="p-8 sm:p-10 rounded-[36px] bg-[#0E0A21]/90 border border-white/15 backdrop-blur-xl shadow-2xl text-center space-y-6 max-w-sm w-full">
              
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A88BFF] font-mono">
                  Installation Mobile Instantanée
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Ouvrez l’appareil photo
                </h3>
              </div>

              {/* QR Code Frame */}
              <div className="relative aspect-square w-52 mx-auto rounded-2xl p-4 bg-white shadow-xl flex items-center justify-center border-4 border-[#7C5CFC]/40">
                <svg viewBox="0 0 100 100" className="w-full h-full text-slate-950 fill-current">
                  <path d="M0 0h30v30H0zm5 5h20v20H5zm35-5h30v30H40zm5 5h20v20H45zM0 40h30v30H0zm5 5h20v20H5zm45-5h10v10H50zm15 0h15v10H65zm15 0h20v20H80zm0 25h10v15H80zm-40 0h15v10H40zm20 0h15v15H60zm-60 5h10v15H0zm15 0h15v15H15zm60-40h10v10H75zM10 10h10v10H10zm40 0h10v10H50zM10 50h10v10H10z" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-xl bg-[#7C5CFC] text-white flex items-center justify-center shadow-lg">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Pointez votre smartphone vers ce code pour lancer immédiatement l’application Folzi AI.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}