"use client";

import React from "react";
import { Star, Quote, CheckCircle2, Heart } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="py-24 bg-canvas relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 font-bold text-xs uppercase tracking-wider">
            <Heart className="w-4 h-4 text-brand-500 fill-brand-500" />
            <span>Retours Vendeurs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink tracking-tight">
            Plébiscité par plus de <span className="gradient-purple-text">15 000 vendeurs</span>.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Découvrez comment VendMoi a transformé le quotidien des revendeurs passionnés et des utilisateurs qui vident leur dressing.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm leading-relaxed font-normal">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-brand-100 shadow-sm"
                />
                <div>
                  <div className="font-extrabold text-ink text-sm flex items-center gap-1.5">
                    <span>{testimonial.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
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
