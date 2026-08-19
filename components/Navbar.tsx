"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, User, Menu } from "lucide-react";
import { navLinks } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 hidden lg:flex justify-between items-center px-8 lg:px-margin-desktop py-4 mx-auto border-b ${
          isScrolled
            ? "bg-[#FAF9F9]/90 backdrop-blur-2xl border-outline-variant/30 shadow-sm"
            : "bg-[#FAF9F9]/70 backdrop-blur-xl border-outline-variant/20"
        }`}
      >
        <Link
          href="#"
          className="font-syne text-2xl lg:text-3xl font-extrabold text-primary tracking-tight hover:opacity-80 transition-opacity"
        >
          LEGO ÉLAN
        </Link>

        <nav className="flex gap-8 lg:gap-12" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-syne text-[15px] lg:text-[16px] font-bold uppercase tracking-widest text-[#444748] hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-primary">
          <button
            type="button"
            aria-label="Open Shopping Bag"
            className="p-2 hover:text-[#FA3434] transition-colors rounded-sm hover:bg-black/5"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="User Account Profile"
            className="p-2 hover:text-[#FA3434] transition-colors rounded-sm hover:bg-black/5"
          >
            <User className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div
        className={`lg:hidden fixed top-0 w-full z-40 p-4 flex justify-between items-center border-b transition-all duration-200 ${
          isScrolled
            ? "bg-[#FAF9F9]/95 backdrop-blur-2xl border-outline-variant/30 shadow-sm"
            : "bg-[#FAF9F9]/85 backdrop-blur-xl border-outline-variant/20"
        }`}
      >
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Mobile Menu"
          aria-expanded={mobileMenuOpen}
          className="p-2 text-primary hover:bg-black/5 rounded-sm"
        >
          <Menu className="w-6 h-6" />
        </button>

        <Link
          href="#"
          className="font-syne text-xl font-extrabold text-primary tracking-tight"
        >
          LEGO ÉLAN
        </Link>

        <button
          type="button"
          aria-label="Shopping Bag"
          className="p-2 text-primary hover:bg-black/5 rounded-sm"
        >
          <ShoppingBag className="w-5 h-5" />
        </button>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
