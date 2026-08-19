"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Box, Grid, History, BookOpen } from "lucide-react";
import { navLinks } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case "architecture":
        return <Box className="w-5 h-5" />;
      case "grid_view":
        return <Grid className="w-5 h-5" />;
      case "history":
        return <History className="w-5 h-5" />;
      case "menu_book":
        return <BookOpen className="w-5 h-5" />;
      default:
        return <Box className="w-5 h-5" />;
    }
  };

  return (
    <>
      <div
        className={`md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`md:hidden fixed top-0 left-0 w-72 h-full bg-[#FAF9F9] border-r border-outline-variant/30 z-50 flex flex-col transform transition-transform duration-300 ease-out shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile Navigation Drawer"
      >
        <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center">
          <div className="font-syne text-xl font-black text-primary">
            LEGO ÉLAN
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close mobile menu"
            className="p-2 text-primary hover:bg-black/5 rounded-sm"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-grow py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="px-6 py-4 font-jetbrains text-xs uppercase tracking-widest text-on-surface-variant hover:bg-surface-container hover:text-primary flex items-center gap-4 transition-colors"
            >
              {getIcon(link.icon)}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-outline-variant/20">
          <p className="font-jetbrains text-[11px] uppercase tracking-widest text-[#747878]">
            TACTILE ESSENCE DESIGN
          </p>
        </div>
      </aside>
    </>
  );
}
