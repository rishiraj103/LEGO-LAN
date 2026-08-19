import { ScentNote, ScentSelection, ScentProfile } from "@/types/scent";

export const scentOptions: {
  top: ScentNote[];
  heart: ScentNote[];
  base: ScentNote[];
} = {
  top: [
    {
      id: "bergamot",
      name: "Bergamot",
      category: "top",
      color: "#F5D76E",
      dotColor: "#FACC15",
      bgClass: "bg-yellow-100",
      borderClass: "border-yellow-200",
      description: "Crisp Calabrian citrus with effervescent, sunlit brilliance.",
      intensity: 85,
    },
    {
      id: "pink-pepper",
      name: "Pink Pepper",
      category: "top",
      color: "#FB923C",
      dotColor: "#F97316",
      bgClass: "bg-orange-100",
      borderClass: "border-orange-200",
      description: "Vibrant piquant spice with sparkling rosy undertones.",
      intensity: 75,
    },
  ],
  heart: [
    {
      id: "concrete-rose",
      name: "Concrete Rose",
      category: "heart",
      color: "#EF4444",
      dotColor: "#EF4444",
      bgClass: "bg-red-100",
      borderClass: "border-red-200",
      description: "Architectural May rose suspended in mineral concrete mist.",
      intensity: 90,
    },
    {
      id: "cardamom",
      name: "Cardamom",
      category: "heart",
      color: "#A8A29E",
      dotColor: "#78716C",
      bgClass: "bg-stone-200",
      borderClass: "border-stone-300",
      description: "Aromatic green spice layered with subtle herbal warmth.",
      intensity: 80,
    },
  ],
  base: [
    {
      id: "sandalwood",
      name: "Sandalwood",
      category: "base",
      color: "#D97706",
      dotColor: "#D97706",
      bgClass: "bg-amber-100",
      borderClass: "border-amber-200",
      description: "Creamy Mysore sandalwood with velvety tactile depth.",
      intensity: 95,
    },
    {
      id: "amber-resin",
      name: "Amber Resin",
      category: "base",
      color: "#6B7280",
      dotColor: "#6B7280",
      bgClass: "bg-gray-200",
      borderClass: "border-gray-300",
      description: "Fossilized golden resin with rich balsamic resonance.",
      intensity: 90,
    },
  ],
};

export const defaultScentSelection: ScentSelection = {
  top: "bergamot",
  heart: "concrete-rose",
  base: "sandalwood",
};

export function calculateScentProfile(selection: ScentSelection): ScentProfile {
  const { top, heart, base } = selection;

  if (top === "bergamot" && heart === "concrete-rose" && base === "sandalwood") {
    return {
      name: "SILK",
      family: "Solar Floral Chypres",
      descriptor: "Radiant citrus crown meeting deep architectural rose and creamy woods.",
      primaryTone: "#FACC15",
      secondaryTone: "#EF4444",
      baseTone: "#D97706",
      auraIntensity: 0.9,
    };
  }

  if (top === "bergamot" && heart === "concrete-rose" && base === "amber-resin") {
    return {
      name: "VELVET",
      family: "Amber Floral",
      descriptor: "Luminous bergamot balancing dark mineral petals and balsamic warmth.",
      primaryTone: "#FACC15",
      secondaryTone: "#EF4444",
      baseTone: "#6B7280",
      auraIntensity: 0.85,
    };
  }

  if (top === "pink-pepper" && heart === "concrete-rose" && base === "sandalwood") {
    return {
      name: "AURORA",
      family: "Spicy Floral Wood",
      descriptor: "Spicy rose ignition anchored by smooth sculptural sandalwood.",
      primaryTone: "#F97316",
      secondaryTone: "#EF4444",
      baseTone: "#D97706",
      auraIntensity: 0.95,
    };
  }

  if (top === "pink-pepper" && heart === "cardamom" && base === "sandalwood") {
    return {
      name: "PRISM",
      family: "Aromatic Spice Matrix",
      descriptor: "Sharp kinetic spices suspended in rich geometric sandalwood.",
      primaryTone: "#F97316",
      secondaryTone: "#78716C",
      baseTone: "#D97706",
      auraIntensity: 0.8,
    };
  }

  if (top === "bergamot" && heart === "cardamom" && base === "amber-resin") {
    return {
      name: "MONOLITH",
      family: "Mineral Amber",
      descriptor: "Crisp architectural citrus melting into ancient resin and quiet spice.",
      primaryTone: "#FACC15",
      secondaryTone: "#78716C",
      baseTone: "#6B7280",
      auraIntensity: 0.75,
    };
  }

  return {
    name: "NOCTURNE",
    family: "Architectural Oriental",
    descriptor: "Tactile spicy resins woven with glowing mineral facets.",
    primaryTone: "#F97316",
    secondaryTone: "#78716C",
    baseTone: "#6B7280",
    auraIntensity: 0.88,
  };
}
