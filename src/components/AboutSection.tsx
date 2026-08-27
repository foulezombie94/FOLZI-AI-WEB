"use client";

import React from "react";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";

export default function AboutSection() {
  const aboutText =
    "Entraînée sur plus de 2,4 millions de transactions réelles, notre intelligence artificielle analyse chaque vêtement en 1 seconde : elle rédige le titre le plus cliqué, compose une description irrésistible et estime le juste prix pour vendre en moins de 24h.";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0E0924] px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Ambient Violet Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7C5CFC]/15 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* 4 Corner Decorative 3D Elements */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="IA 3D Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-[0_10px_30px_rgba(124,92,252,0.4)]"
            draggable={false}
          />
        </FadeIn>
      </div>

      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Object"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain drop-shadow-[0_10px_30px_rgba(124,92,252,0.4)]"
            draggable={false}
          />
        </FadeIn>
      </div>

      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-[0_10px_30px_rgba(124,92,252,0.4)]"
            draggable={false}
          />
        </FadeIn>
      </div>

      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Group"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain drop-shadow-[0_10px_30px_rgba(124,92,252,0.4)]"
            draggable={false}
          />
        </FadeIn>
      </div>

      {/* Main Center Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        
        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            className="hero-heading font-black uppercase leading-none tracking-tight"
          >
            VendMoi IA
          </h2>
        </FadeIn>

        {/* Gap between heading and text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated Character-by-Character Paragraph */}
        <AnimatedText
          text={aboutText}
          className="text-white font-medium text-center leading-relaxed max-w-[580px] px-4 text-base sm:text-lg"
        />

        {/* Gap between text and button */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact / Download Button */}
        <FadeIn delay={0.2} y={30} duration={0.7}>
          <ContactButton label="Tester l'App Gratuitement" />
        </FadeIn>

      </div>

    </section>
  );
}