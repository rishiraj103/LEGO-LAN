import Image from "next/image";

export default function LifestyleSection() {
  return (
    <section
      id="journal"
      className="relative w-full h-[65vh] md:h-[80vh] my-16 md:my-unit-12 border-y border-outline-variant/30 overflow-hidden"
    >
      <Image
        src="/images/lifestyle-gallery.png"
        alt="LEGO ÉLAN in Situ — Luxury dressing table interior gallery space"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

      <div className="absolute bottom-12 md:bottom-16 left-6 md:left-margin-desktop max-w-2xl text-on-primary">
        <div className="font-jetbrains text-xs mb-3 opacity-80 tracking-[0.25em] uppercase font-medium">
          04 // IN SITU
        </div>

        <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 font-bold leading-tight drop-shadow-md">
          Designed for the Gallery of the Self.
        </h2>

        <p className="font-hanken text-base md:text-xl opacity-90 font-light leading-relaxed max-w-xl drop-shadow">
          Every bottle is a display piece, a tactile sculpture engineered to elevate
          your personal sanctuary.
        </p>
      </div>
    </section>
  );
}
