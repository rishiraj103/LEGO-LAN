"use client";

import { ScentProfile } from "@/types/scent";

interface ScentDNAProps {
  profile: ScentProfile;
}

export default function ScentDNA({ profile }: ScentDNAProps) {
  return (
    <div className="relative w-64 h-64 mx-auto lg:mx-0 flex items-center justify-center">
      <div
        className="absolute w-full h-full rounded-full border border-dashed transition-all duration-700 animate-[spin_24s_linear_infinite]"
        style={{ borderColor: `${profile.primaryTone}55` }}
      >
        <div
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full transition-all duration-700"
          style={{
            backgroundColor: profile.primaryTone,
            boxShadow: `0 0 16px ${profile.primaryTone}99`,
          }}
        />
      </div>

      <div
        className="absolute w-4/5 h-4/5 rounded-full border border-solid transition-all duration-700 animate-[spin_18s_linear_infinite_reverse]"
        style={{ borderColor: `${profile.secondaryTone}55` }}
      >
        <div
          className="absolute bottom-3 left-2 w-4 h-4 rounded-full transition-all duration-700"
          style={{
            backgroundColor: profile.secondaryTone,
            boxShadow: `0 0 16px ${profile.secondaryTone}99`,
          }}
        />
      </div>

      <div
        className="absolute w-3/5 h-3/5 rounded-full border border-dotted transition-all duration-700 animate-[spin_12s_linear_infinite]"
        style={{ borderColor: `${profile.baseTone}55` }}
      >
        <div
          className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-700"
          style={{
            backgroundColor: profile.baseTone,
            boxShadow: `0 0 16px ${profile.baseTone}99`,
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center p-3 bg-white/70 backdrop-blur-md rounded-full w-28 h-28 border border-outline-variant/30 shadow-inner">
        <span className="font-jetbrains text-[9px] uppercase tracking-widest text-[#747878] mb-0.5">
          ESSENCE
        </span>
        <span className="font-syne text-xl font-extrabold text-primary tracking-wider transition-all duration-300">
          {profile.name}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1 animate-pulse" />
      </div>
    </div>
  );
}
