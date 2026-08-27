"use client";

import React from "react";

interface LiveProjectButtonProps {
  className?: string;
  href?: string;
  label?: string;
}

export default function LiveProjectButton({ className = "", href = "#", label = "Live Project" }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full border-2 border-white text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none shadow-sm ${className}`}
    >
      <span>{label}</span>
    </a>
  );
}