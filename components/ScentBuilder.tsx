"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, Sparkles, X, ShieldCheck } from "lucide-react";
import { ScentSelection } from "@/types/scent";
import {
  scentOptions,
  defaultScentSelection,
  calculateScentProfile,
} from "@/lib/scents";
import ScentDNA from "./ScentDNA";

export default function ScentBuilder() {
  const [selection, setSelection] = useState<ScentSelection>(defaultScentSelection);
  const [isFinalized, setIsFinalized] = useState(false);
  const [copied, setCopied] = useState(false);

  const profile = calculateScentProfile(selection);

  const selectedTop = scentOptions.top.find((n) => n.id === selection.top);
  const selectedHeart = scentOptions.heart.find((n) => n.id === selection.heart);
  const selectedBase = scentOptions.base.find((n) => n.id === selection.base);

  const handleSelect = (category: "top" | "heart" | "base", id: string) => {
    setSelection((prev) => ({
      ...prev,
      [category]: id,
    }));
  };

  const handleCopyFormula = () => {
    const formulaText = `LEGO ÉLAN Bespoke Formula: ${profile.name} (${profile.family})\n- Crown Note: ${selectedTop?.name}\n- Core Note: ${selectedHeart?.name}\n- Foundation Note: ${selectedBase?.name}`;
    navigator.clipboard.writeText(formulaText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="builder" className="py-unit-12 px-margin-mobile md:px-margin-desktop bg-transparent relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-syne text-headline-lg-mobile md:text-headline-lg text-primary text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            COMPOSE YOURS
          </h2>
          <p className="font-hanken text-body-lg text-[#444748] mt-4">
            A tactile workspace to design your signature essence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center bg-[#faf9f6]/80 backdrop-blur-xl border border-outline-variant/40 shadow-2xl p-8 md:p-16 rounded-sm">
          
          <div className="space-y-10 order-2 lg:order-1">
            
            <div className="space-y-4">
              <h4 className="font-jetbrains text-xs text-[#444748] tracking-[0.2em] uppercase font-medium">
                01. CROWN NOTE
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {scentOptions.top.map((note) => {
                  const isSelected = selection.top === note.id;
                  return (
                    <button
                      key={note.id}
                      type="button"
                      onClick={() => handleSelect("top", note.id)}
                      className={`border p-4 flex flex-col items-center gap-3 transition-colors rounded-sm relative group text-left ${
                        isSelected
                          ? "border-primary bg-white shadow-sm"
                          : "border-outline-variant hover:border-primary bg-white/50"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-3.5 h-3.5 bg-primary text-white rounded-full flex items-center justify-center">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                      )}
                      <div
                        className={`w-8 h-8 rounded-sm ${note.bgClass} flex items-center justify-center border ${note.borderClass} group-hover:scale-110 transition-transform`}
                      >
                        <div
                          className="w-4 h-4 rounded-full shadow-inner"
                          style={{ backgroundColor: note.dotColor }}
                        />
                      </div>
                      <span className="font-jetbrains text-xs uppercase text-center font-medium">
                        {note.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-jetbrains text-xs text-[#444748] tracking-[0.2em] uppercase font-medium">
                02. CORE NOTE
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {scentOptions.heart.map((note) => {
                  const isSelected = selection.heart === note.id;
                  return (
                    <button
                      key={note.id}
                      type="button"
                      onClick={() => handleSelect("heart", note.id)}
                      className={`border p-4 flex flex-col items-center gap-3 transition-colors rounded-sm relative group text-left ${
                        isSelected
                          ? "border-primary bg-white shadow-sm"
                          : "border-outline-variant hover:border-primary bg-white/50"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-3.5 h-3.5 bg-primary text-white rounded-full flex items-center justify-center">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                      )}
                      <div
                        className={`w-8 h-8 rounded-sm ${note.bgClass} flex items-center justify-center border ${note.borderClass} group-hover:scale-110 transition-transform`}
                      >
                        <div
                          className="w-4 h-4 rounded-full shadow-inner"
                          style={{ backgroundColor: note.dotColor }}
                        />
                      </div>
                      <span className="font-jetbrains text-xs uppercase text-center font-medium">
                        {note.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-jetbrains text-xs text-[#444748] tracking-[0.2em] uppercase font-medium">
                03. FOUNDATION NOTE
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {scentOptions.base.map((note) => {
                  const isSelected = selection.base === note.id;
                  return (
                    <button
                      key={note.id}
                      type="button"
                      onClick={() => handleSelect("base", note.id)}
                      className={`border p-4 flex flex-col items-center gap-3 transition-colors rounded-sm relative group text-left ${
                        isSelected
                          ? "border-primary bg-white shadow-sm"
                          : "border-outline-variant hover:border-primary bg-white/50"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-3.5 h-3.5 bg-primary text-white rounded-full flex items-center justify-center">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                      )}
                      <div
                        className={`w-8 h-8 rounded-sm ${note.bgClass} flex items-center justify-center border ${note.borderClass} group-hover:scale-110 transition-transform`}
                      >
                        <div
                          className="w-4 h-4 rounded-full shadow-inner"
                          style={{ backgroundColor: note.dotColor }}
                        />
                      </div>
                      <span className="font-jetbrains text-xs uppercase text-center font-medium">
                        {note.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          <div className="order-1 lg:order-2 flex justify-center relative py-12">
            <div className="absolute w-[140%] h-[140%] bg-gradient-to-tr from-[#e5e2e1]/40 to-[#faf9f6]/40 rounded-full blur-3xl z-0 animate-pulse" />

            <Image
              src="/images/hero-bottle.png"
              alt="LEGO ÉLAN Custom Fragrance Bottle"
              width={420}
              height={520}
              className="relative z-10 w-full max-w-md object-contain drop-shadow-2xl hover:-translate-y-2 transition-transform duration-700"
              priority
            />
          </div>

          <div className="order-3 lg:order-3 h-full flex flex-col justify-center items-center md:items-start pl-0 lg:pl-12 border-t lg:border-t-0 lg:border-l border-outline-variant/30 pt-12 lg:pt-0">
            <h4 className="font-jetbrains text-xs text-[#444748] tracking-[0.2em] mb-12 w-full text-center lg:text-left uppercase font-medium">
              ESSENCE PROFILE
            </h4>

            <div className="relative w-64 h-64 mx-auto lg:mx-0 flex items-center justify-center mb-12">
              <div
                className="absolute w-full h-full rounded-full border transition-all duration-700 animate-[spin_10s_linear_infinite]"
                style={{ borderColor: `${profile.primaryTone}4d` }}
              >
                <div
                  className="absolute -top-2 left-1/2 w-4 h-4 rounded-full transition-colors duration-700"
                  style={{
                    backgroundColor: profile.primaryTone,
                    boxShadow: `0 0 15px ${profile.primaryTone}99`,
                  }}
                />
              </div>

              <div
                className="absolute w-4/5 h-4/5 rounded-full border transition-all duration-700 animate-[spin_15s_linear_infinite_reverse]"
                style={{ borderColor: `${profile.secondaryTone}4d` }}
              >
                <div
                  className="absolute bottom-4 -left-1 w-4 h-4 rounded-full transition-colors duration-700"
                  style={{
                    backgroundColor: profile.secondaryTone,
                    boxShadow: `0 0 15px ${profile.secondaryTone}99`,
                  }}
                />
              </div>

              <div
                className="absolute w-3/5 h-3/5 rounded-full border transition-all duration-700 animate-[spin_20s_linear_infinite]"
                style={{ borderColor: `${profile.baseTone}4d` }}
              >
                <div
                  className="absolute top-1/2 -right-2 w-4 h-4 rounded-full transition-colors duration-700"
                  style={{
                    backgroundColor: profile.baseTone,
                    boxShadow: `0 0 15px ${profile.baseTone}99`,
                  }}
                />
              </div>

              <div className="font-syne text-2xl text-primary font-bold tracking-wider">
                {profile.name}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsFinalized(true)}
              className="w-full bg-primary text-on-primary py-5 font-jetbrains text-xs uppercase tracking-widest hover:bg-[#444748] transition-colors flex justify-center items-center gap-3 rounded-sm group"
            >
              <span>Finalize Composition</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>

      {isFinalized && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsFinalized(false)}
        >
          <div
            className="bg-[#FAF9F9] border border-outline-variant/40 shadow-2xl rounded-sm max-w-lg w-full p-8 md:p-10 relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsFinalized(false)}
              aria-label="Close modal"
              className="absolute top-6 right-6 p-2 text-primary hover:bg-black/5 rounded-sm transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 font-jetbrains text-xs uppercase tracking-[0.25em] text-[#747878] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>COMPOSITION CALIBRATED</span>
            </div>

            <h3 className="font-syne text-3xl font-bold text-primary mb-1">
              {profile.name} // {profile.family}
            </h3>
            <p className="font-jetbrains text-xs text-[#747878] mb-6">
              SERIAL NO. ÉLAN-ARCH-{(Math.abs(selection.top.length * 1337 + selection.heart.length * 42 + selection.base.length * 7)).toString().padStart(4, "0")}
            </p>

            <div className="space-y-3 bg-white/70 border border-outline-variant/30 p-4 rounded-sm mb-6">
              <div className="flex justify-between items-center text-xs font-jetbrains">
                <span className="text-[#747878]">CROWN NOTE</span>
                <span className="font-semibold text-primary">{selectedTop?.name}</span>
              </div>
              <div className="h-px bg-outline-variant/20" />
              <div className="flex justify-between items-center text-xs font-jetbrains">
                <span className="text-[#747878]">CORE NOTE</span>
                <span className="font-semibold text-primary">{selectedHeart?.name}</span>
              </div>
              <div className="h-px bg-outline-variant/20" />
              <div className="flex justify-between items-center text-xs font-jetbrains">
                <span className="text-[#747878]">FOUNDATION NOTE</span>
                <span className="font-semibold text-primary">{selectedBase?.name}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#444748] mb-8 bg-surface-container-low p-3 rounded-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Custom bottled with 100ml modular refillable architectural glass.</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  alert(`Thank you for curating ${profile.name}! Your bespoke modular fragrance order has been initiated.`);
                  setIsFinalized(false);
                }}
                className="flex-1 bg-primary text-on-primary py-4 font-jetbrains text-xs uppercase tracking-widest hover:bg-[#444748] transition-colors rounded-sm text-center font-medium"
              >
                Order Bespoke Edition — $280
              </button>
              <button
                type="button"
                onClick={handleCopyFormula}
                className="px-6 py-4 border border-outline-variant font-jetbrains text-xs uppercase tracking-widest hover:bg-black/5 transition-colors rounded-sm text-center"
              >
                {copied ? "Copied!" : "Save Formula"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
