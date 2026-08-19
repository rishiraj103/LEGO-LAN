import Image from "next/image";
import { Sparkles, Heart, Anchor } from "lucide-react";
import { fragranceLayers } from "@/lib/constants";

export default function FragranceAnatomy() {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "flare":
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case "favorite":
        return <Heart className="w-5 h-5 text-red-500" />;
      case "foundation":
        return <Anchor className="w-5 h-5 text-stone-600" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="composition"
      className="py-20 md:py-unit-12 px-6 md:px-margin-desktop bg-transparent blueprint-lines relative"
    >
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <div className="font-jetbrains text-xs text-on-surface-variant mb-3 tracking-[0.25em] uppercase font-medium">
          02 // ANATOMY OF A SIGNATURE
        </div>
        <h2 className="font-syne text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
          THE COMPOSITION
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
        {fragranceLayers.map((layer) => (
          <div
            key={layer.step}
            className={`bg-[#FAF9F6]/60 backdrop-blur-md border border-outline-variant hover:border-primary transition-colors duration-500 group relative overflow-hidden flex flex-col shadow-sm rounded-sm ${layer.delayOffset}`}
          >
            <div className="h-64 w-full overflow-hidden p-6 flex items-center justify-center bg-white/50 relative border-b border-outline-variant/20">
              <div className="relative w-full h-full">
                <Image
                  src={layer.imageSrc}
                  alt={layer.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-xl"
                />
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="font-jetbrains text-xs text-on-surface-variant mb-6 flex justify-between items-center tracking-wider">
                  <span className="font-medium">{layer.tag}</span>
                  {renderIcon(layer.icon)}
                </div>

                <h3 className="font-syne text-2xl lg:text-3xl font-bold mb-4 text-primary">
                  {layer.title}
                </h3>

                <p className="font-hanken text-base text-on-surface-variant leading-relaxed font-light">
                  {layer.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
