"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import FadeIn from "./FadeIn";
import LiveProjectButton from "./LiveProjectButton";

interface ProjectData {
  number: string;
  name: string;
  category: string;
  priceTag: string;
  liveUrl?: string;
  images: {
    col1Top: string;
    col1Bottom: string;
    col2: string;
  };
}

const projectsList: ProjectData[] = [
  {
    number: "01",
    name: "Carhartt WIP Detroit Jacket",
    category: "Vinted · Vendu en 14h",
    priceTag: "52 € encaissés",
    liveUrl: "#demo",
    images: {
      col1Top:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
      col1Bottom:
        "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      col2:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
    },
  },
  {
    number: "02",
    name: "New Balance 530 White Silver",
    category: "Vinted · Vendu en 6h",
    priceTag: "78 € encaissés",
    liveUrl: "#demo",
    images: {
      col1Top:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
      col1Bottom:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      col2:
        "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
    },
  },
  {
    number: "03",
    name: "Lampe Space Age Vintage 70s",
    category: "Leboncoin · Vendu en 24h",
    priceTag: "110 € encaissés",
    liveUrl: "#demo",
    images: {
      col1Top:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      col1Bottom:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
      col2:
        "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=80",
    },
  },
];

function Card({
  project,
  index,
  totalCards,
  progress,
  range,
  targetScale,
}: {
  project: ProjectData;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32"
    >
      <motion.div
        style={{
          scale,
          top: `calc(${index * 28}px)`,
        }}
        className="w-full relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#7C5CFC]/70 bg-[#130D32] p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-6 sm:gap-8 shadow-[0_20px_50px_rgba(124,92,252,0.25)] backdrop-blur-md"
      >
        {/* Top Row: Number, Category & Name, Price Tag Badge */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-6 sm:gap-8">
            <span
              style={{ fontSize: "clamp(2.5rem, 8vw, 110px)" }}
              className="font-black text-[#7C5CFC] leading-none select-none drop-shadow-[0_4px_12px_rgba(124,92,252,0.4)]"
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#C2B3FF]">
                {project.category}
              </span>
              <h3
                style={{ fontSize: "clamp(1.1rem, 2.6vw, 2.2rem)" }}
                className="font-black uppercase text-white tracking-tight"
              >
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono font-black text-sm">
              {project.priceTag}
            </span>
            <LiveProjectButton label="Voir l'Annonce" href={project.liveUrl} />
          </div>
        </div>

        {/* Bottom Row: 2-Column Image Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          
          {/* Left Column (40% width on md+): 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            <div
              style={{ height: "clamp(130px, 16vw, 230px)" }}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#1A123D] border border-[#7C5CFC]/30 shadow-md"
            >
              <img
                src={project.images.col1Top}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              />
            </div>

            <div
              style={{ height: "clamp(160px, 22vw, 340px)" }}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#1A123D] border border-[#7C5CFC]/30 shadow-md"
            >
              <img
                src={project.images.col1Bottom}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              />
            </div>
          </div>

          {/* Right Column (60% width on md+): 1 tall image */}
          <div className="md:col-span-7 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#1A123D] border border-[#7C5CFC]/30 shadow-md min-h-[280px] md:min-h-full">
            <img
              src={project.images.col2}
              alt={`${project.name} preview large`}
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>

        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative z-10 w-full bg-[#0E0924] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Heading */}
        <FadeIn delay={0} y={40} duration={0.8} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            className="hero-heading font-black uppercase leading-none tracking-tight"
          >
            Ventes Réelles
          </h2>
        </FadeIn>

        {/* 3 Stacking Cards */}
        <div className="w-full relative">
          {projectsList.map((project, index) => {
            const targetScale = 1 - (projectsList.length - 1 - index) * 0.03;
            const range: [number, number] = [index * 0.25, 1];

            return (
              <Card
                key={project.number}
                project={project}
                index={index}
                totalCards={projectsList.length}
                progress={scrollYProgress}
                range={range}
                targetScale={targetScale}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}