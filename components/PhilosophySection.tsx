import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PhilosophySection() {
  return (
    <section
      id="discover"
      className="py-16 md:py-unit-12 px-6 md:px-margin-desktop bg-transparent grid md:grid-cols-2 gap-12 lg:gap-gutter items-center border-b border-outline-variant/30 max-w-7xl mx-auto"
    >
      <div className="order-2 md:order-1 relative h-[420px] md:h-[580px] p-4 md:p-8 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src="/images/rose-modulaire.png"
            alt="Rose Modulaire"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain rounded-sm drop-shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
            priority
          />
        </div>

        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 glass-panel px-4 py-2.5 font-jetbrains text-xs md:text-sm text-primary flex items-center gap-2.5 rounded-sm shadow-md">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FA3434] inline-block animate-pulse" />
          <span className="font-medium tracking-wide">FIG. 01 - ROSE MODULAIRE</span>
        </div>
      </div>

      <div className="order-1 md:order-2 pl-0 md:pl-8 lg:pl-12">
        <div className="font-jetbrains text-xs text-on-surface-variant mb-4 tracking-[0.25em] uppercase font-medium">
          01 // THE CRAFT
        </div>

        <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-[1.15] text-primary">
          Why wear someone else&apos;s signature?
        </h2>

        <p className="font-hanken text-base md:text-lg text-on-surface-variant mb-8 leading-relaxed font-light">
          Build one as original as you are. The traditional luxury house dictates your
          scent. We provide the composition; you build the atmosphere. A tactile,
          physical connection to the ephemeral art of perfumery.
        </p>

        <div className="h-px w-24 bg-primary mb-8 opacity-60" />

        <Link
          href="#composition"
          className="inline-flex items-center gap-2 font-jetbrains text-xs uppercase tracking-widest text-primary hover:text-error transition-colors group font-medium"
        >
          <span>Discover the Craft</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
        </Link>
      </div>
    </section>
  );
}
