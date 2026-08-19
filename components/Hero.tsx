"use client";

import dynamic from "next/dynamic";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroBottleScene = dynamic(
  () => import("./three/HeroBottleScene"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    ),
  }
);

export default function Hero() {
  const scrollToBuilder = () => {
    const builderSection = document.getElementById("builder");
    if (builderSection) {
      builderSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <HeroBottleScene />
      </div>

      <div className="relative z-20 text-center px-4 md:px-margin-desktop mt-28 md:mt-0 pointer-events-none max-w-5xl mx-auto">
        <div className="inline-block px-3 py-1 mb-6 border border-outline-variant/40 bg-white/40 backdrop-blur-md rounded-sm font-jetbrains text-xs uppercase tracking-[0.25em] text-[#444748]">
          ARCHITECTURAL PERFUMERY // VOL. 01
        </div>

        <h1 className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold text-primary uppercase tracking-tight leading-[1.05] mb-6">
          DON&apos;T WEAR A SIGNATURE.<br />
          <span className="text-primary">BUILD ONE.</span>
        </h1>

        <p className="font-hanken text-lg md:text-xl text-[#444748] max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          Luxury fragrance redesigned as a tactile experience.
        </p>

        <button
          type="button"
          onClick={scrollToBuilder}
          className="pointer-events-auto inline-flex items-center gap-3 bg-primary text-on-primary px-8 md:px-10 py-4 md:py-5 font-jetbrains text-xs uppercase tracking-widest hover:bg-[#444748] transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-sm"
        >
          <span>Compose Your Signature</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-primary/60 pointer-events-none">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
