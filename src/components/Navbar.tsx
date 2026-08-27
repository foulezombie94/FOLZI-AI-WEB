"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowRight, Smartphone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/85 backdrop-blur-xl border-b border-brand-500/10 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center text-white shadow-md shadow-brand-500/25 group-hover:scale-105 transition-transform duration-200 -rotate-3">
              <Sparkles className="w-5 h-5 fill-white/20" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-ink flex items-center gap-1.5 font-sans">
                VendMoi
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-brand-50 text-brand-600 border border-brand-100">
                  IA Studio
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-extrabold text-slate-600">
            <a href="#how-it-works" className="hover:text-brand-500 transition-colors">
              Comment ça marche
            </a>
            <a href="#demo" className="hover:text-brand-500 transition-colors">
              Simulateur IA
            </a>
            <a href="#calculator" className="hover:text-brand-500 transition-colors">
              Calculateur
            </a>
            <a href="#features" className="hover:text-brand-500 transition-colors">
              Fonctionnalités
            </a>
            <a href="#pricing" className="hover:text-brand-500 transition-colors">
              Tarifs
            </a>
            <a href="#faq" className="hover:text-brand-500 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Desktop 3D CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#download"
              className="btn-3d inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-brand-500 text-white font-extrabold text-sm"
            >
              <Smartphone className="w-4 h-4" />
              <span>Télécharger l’App</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-brand-50 focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-white/95 backdrop-blur-2xl border-b border-slate-100 shadow-xl space-y-3">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-extrabold text-slate-800 hover:bg-brand-50 hover:text-brand-500"
          >
            Comment ça marche
          </a>
          <a
            href="#demo"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-extrabold text-slate-800 hover:bg-brand-50 hover:text-brand-500"
          >
            Simulateur IA
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-extrabold text-slate-800 hover:bg-brand-50 hover:text-brand-500"
          >
            Calculateur de dressing
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-extrabold text-slate-800 hover:bg-brand-50 hover:text-brand-500"
          >
            Tarifs
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-extrabold text-slate-800 hover:bg-brand-50 hover:text-brand-500"
          >
            FAQ
          </a>
          <div className="pt-2">
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-3d w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-brand-500 text-white font-extrabold text-base"
            >
              <Smartphone className="w-5 h-5" />
              <span>Télécharger l’Application</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}