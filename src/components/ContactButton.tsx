"use client";

import React from "react";

interface ContactButtonProps {
  className?: string;
  onClick?: () => void;
  label?: string;
}

export default function ContactButton({ className = "", onClick, label = "Contact Me" }: ContactButtonProps) {
  return (
    <a
      href="#contact"
      onClick={onClick}
      style={{
        background: "linear-gradient(135deg, #7C5CFC 0%, #9D7BFF 45%, #6038FF 100%)",
        boxShadow: "0px 6px 20px rgba(124, 92, 252, 0.5), inset 2px 2px 8px rgba(255, 255, 255, 0.4)",
        outline: "2px solid #FFFFFF",
        outlineOffset: "-3px",
      }}
      className={`inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base hover:scale-105 hover:shadow-violet-500/60 active:scale-95 transition-all duration-200 cursor-pointer select-none ${className}`}
    >
      <span>{label}</span>
    </a>
  );
}