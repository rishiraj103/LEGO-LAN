import Image from "next/image";
import { collectionItems } from "@/lib/constants";

export default function Collection() {
  return (
    <section
      id="essence"
      className="py-20 md:py-unit-12 px-6 md:px-margin-desktop bg-transparent max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <div className="font-jetbrains text-xs text-on-surface-variant mb-3 tracking-[0.25em] uppercase font-medium">
          03 // INSPIRATION
        </div>
        <h2 className="font-syne text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
          THE COLLECTION
        </h2>
        <p className="font-hanken text-base md:text-lg text-[#444748] mt-3 font-light">
          Four foundational architectural archetypes ready for curation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {collectionItems.map((item) => (
          <div
            key={item.id}
            tabIndex={0}
            role="button"
            aria-label={`Explore ${item.name} fragrance`}
            className="group relative aspect-square overflow-hidden cursor-pointer shadow-md rounded-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Image
              src={item.imageSrc}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-on-primary font-syne text-xl lg:text-2xl uppercase tracking-wider font-bold drop-shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {item.name}
              </span>
              <span className="text-white/80 font-jetbrains text-[11px] uppercase tracking-widest mt-1">
                {item.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
