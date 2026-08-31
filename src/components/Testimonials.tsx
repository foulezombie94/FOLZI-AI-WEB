"use client";

import React from "react";
import { Star, Quote, CheckCircle2, Heart } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#06040A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Plébiscité par plus de <span className="gradient-purple-text">15 000 vendeurs</span>.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Découvrez comment Folzi AI a transformé le quotidien des revendeurs passionnés et des utilisateurs qui vident leur dressing.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#A88BFF]/40 p-8 shadow-xl shadow-black/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-6 backdrop-blur-xl"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-sm leading-relaxed font-normal">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3.5">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#7C5CFC]/40 shadow-sm"
                />
                <div>
                  <div className="font-bold text-white text-sm flex items-center gap-1.5">
                    <span>{testimonial.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
