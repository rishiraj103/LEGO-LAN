export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

export const navLinks: NavLink[] = [
  { label: "Discover", href: "#discover", icon: "architecture" },
  { label: "Composition", href: "#composition", icon: "grid_view" },
  { label: "Essence", href: "#essence", icon: "history" },
  { label: "Journal", href: "#journal", icon: "menu_book" },
];

export interface FragranceLayer {
  step: string;
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: string;
  delayOffset: string;
}

export const fragranceLayers: FragranceLayer[] = [
  {
    step: "01",
    tag: "TOP NOTE",
    title: "The Crown",
    description: "The initial impact. Crisp, ethereal, designed to seamlessly connect with the deeper essence below.",
    imageSrc: "/images/top-note.png",
    imageAlt: "Top Note - The Crown",
    icon: "flare",
    delayOffset: "md:mt-0",
  },
  {
    step: "02",
    tag: "HEART NOTE",
    title: "The Core",
    description: "The main body of the composition. Florals, spices, the narrative center that holds the essence together.",
    imageSrc: "/images/heart-note.png",
    imageAlt: "Heart Note - The Core",
    icon: "favorite",
    delayOffset: "md:mt-12",
  },
  {
    step: "03",
    tag: "BASE NOTE",
    title: "The Foundation",
    description: "The grounding elements. Woods, musks, ambers. The lasting impression that anchors the entire composition.",
    imageSrc: "/images/base-note.png",
    imageAlt: "Base Note - The Foundation",
    icon: "foundation",
    delayOffset: "md:mt-24",
  },
];

export interface CollectionItem {
  id: string;
  name: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

export const collectionItems: CollectionItem[] = [
  {
    id: "first-light",
    name: "First Light",
    subtitle: "Calabrian Bergamot & Sunlit Amber",
    imageSrc: "/images/first-light.png",
    imageAlt: "First Light luxury fragrance module",
  },
  {
    id: "after-dark",
    name: "After Dark",
    subtitle: "Smoked Vetiver & Obsidian Rose",
    imageSrc: "/images/after-dark.png",
    imageAlt: "After Dark architectural landscape",
  },
  {
    id: "cloud",
    name: "Cloud",
    subtitle: "Frosted Musk & Ethereal Orris",
    imageSrc: "/images/cloud.png",
    imageAlt: "Cloud frosted fragrance sculpture",
  },
  {
    id: "raw",
    name: "Raw",
    subtitle: "Concrete Cedar & Mineral Patchouli",
    imageSrc: "/images/raw.png",
    imageAlt: "Raw architectural fragrance block",
  },
];

export const footerLinks = {
  column1: [
    { label: "Sustainability", href: "#" },
    { label: "Legal", href: "#" },
    { label: "Press", href: "#" },
  ],
  column2: [
    { label: "Contact", href: "#" },
    { label: "Shipping", href: "#" },
    { label: "Stockists", href: "#" },
  ],
};
