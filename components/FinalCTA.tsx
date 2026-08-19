"use client";

import Image from "next/image";

export default function FinalCTA() {
  const scrollToBuilder = () => {
    const builderSection = document.getElementById("builder");
    if (builderSection) {
      builderSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden border-t border-outline-variant/20 py-20">
      <Image
        src="/images/final-climax.png"
        alt="LEGO ÉLAN Masterpiece Studio Environment"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-90"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6]/90 via-[#FAF9F6]/30 to-transparent" />

      <div className="relative z-10 text-center max-w-3xl mx-4 sm:mx-6 glass-panel p-8 sm:p-12 md:p-16 shadow-2xl rounded-sm border border-outline-variant/40 mt-20 md:mt-32">
        <div className="font-jetbrains text-xs text-[#444748] tracking-[0.3em] uppercase mb-4 md:mb-6 font-medium">
          THE MASTERPIECE
        </div>

        <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 md:mb-8 leading-tight tracking-tight">
          THE FINAL PIECE IS YOU.
        </h2>

        <p className="font-hanken text-base sm:text-lg md:text-xl text-[#444748] mb-8 md:mb-12 font-light max-w-xl mx-auto leading-relaxed">
          Bring your signature essence to life today. Sculpted by design, assembled by your desire.
        </p>

        <button
          type="button"
          onClick={scrollToBuilder}
          className="bg-primary text-on-primary px-8 sm:px-12 py-4 sm:py-5 font-jetbrains text-xs uppercase tracking-widest hover:bg-[#444748] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 rounded-sm"
        >
          Compose Your Signature
        </button>
      </div>
    </section>
  );
}
