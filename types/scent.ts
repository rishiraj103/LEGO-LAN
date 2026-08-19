export interface ScentNote {
  id: string;
  name: string;
  category: "top" | "heart" | "base";
  color: string;
  dotColor: string;
  bgClass: string;
  borderClass: string;
  description: string;
  intensity: number;
}

export interface ScentSelection {
  top: string;
  heart: string;
  base: string;
}

export interface ScentProfile {
  name: string;
  family: string;
  descriptor: string;
  primaryTone: string;
  secondaryTone: string;
  baseTone: string;
  auraIntensity: number;
}
