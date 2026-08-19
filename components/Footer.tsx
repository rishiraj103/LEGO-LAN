import Link from "next/link";
import { footerLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#FAF9F6] border-t border-outline-variant/30 px-6 sm:px-8 md:px-margin-desktop py-16 md:py-unit-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-gutter w-full max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-2">
          <div className="font-syne text-3xl md:text-4xl font-extrabold text-primary mb-3 tracking-tight">
            LEGO ÉLAN
          </div>
          <p className="font-jetbrains text-xs uppercase text-[#444748] mb-6 tracking-widest font-medium">
            TACTILE ESSENCE DESIGN.
          </p>
          <p className="font-hanken text-sm text-[#747878] max-w-sm font-light leading-relaxed">
            Reimagining the tactile joy of modular construction into an uncompromising luxury perfumery experience.
          </p>
        </div>

        <div className="col-span-1 flex flex-col gap-3">
          <span className="font-jetbrains text-xs uppercase tracking-widest text-[#747878] mb-1">
            INFORMATION
          </span>
          {footerLinks.column1.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-jetbrains text-xs uppercase text-primary hover:text-[#747878] transition-colors tracking-wider py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="col-span-1 flex flex-col gap-3">
          <span className="font-jetbrains text-xs uppercase tracking-widest text-[#747878] mb-1">
            SERVICE
          </span>
          {footerLinks.column2.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-jetbrains text-xs uppercase text-primary hover:text-[#747878] transition-colors tracking-wider py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full border-t border-outline-variant/30 mt-12 pt-8 text-center max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-jetbrains text-[11px] uppercase text-[#747878] tracking-widest">
          © {new Date().getFullYear()} LEGO ÉLAN. ALL RIGHTS RESERVED.
        </p>
        <p className="font-jetbrains text-[10px] text-[#747878] tracking-wider uppercase">
          DESIGNED WITH ARCHITECTURAL PRECISION
        </p>
      </div>
    </footer>
  );
}
