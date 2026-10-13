import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#090909] border-t border-white/[0.08] text-[#8C8C8C] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Brand & Official Emblem */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 pb-10 sm:pb-14 border-b border-white/[0.06]">
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-[#141414] border border-white/10 p-0.5 shrink-0 shadow-xl">
              <img
                src="/official-logo.jpg"
                alt="Mikel&Jay Tattoos Official Seal"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-syne text-base sm:text-xl font-bold tracking-[0.18em] text-[#F4F0E8] block">
                MIKEL&amp;JAY TATTOOS
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#8C8C8C]">
                USA, NEW YORK · BESPOKE INK ATELIER
              </span>
            </div>
          </div>

          {/* Social Links including explicit Facebook Profile */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs tracking-[0.18em] uppercase font-semibold">
            <a
              href="https://www.facebook.com/profile.php?id=61593804397138"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F4F0E8] hover:text-[#A51F2B] transition-colors flex items-center gap-1.5"
            >
              <span>Facebook</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <span className="text-white/20">/</span>

            <a
              href="#portfolio"
              className="hover:text-[#F4F0E8] transition-colors"
            >
              Portfolio Archive
            </a>

            <span className="text-white/20">/</span>

            <a
              href="#about"
              className="hover:text-[#F4F0E8] transition-colors"
            >
              About Atelier
            </a>

            <span className="text-white/20">/</span>

            <a
              href="#contact"
              className="hover:text-[#F4F0E8] transition-colors"
            >
              Location &amp; Hours
            </a>
          </div>
        </div>

        {/* Bottom Row: Legal & Health Certification */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-light text-[#8C8C8C]/80">
          <div>
            <p>
              © {currentYear} Mikel&amp;Jay Tattoos. All Rights Reserved. Crafted with precision in New York, NY, USA.
            </p>
            <p className="text-[11px] text-[#8C8C8C]/50 mt-1">
              Compliant with New York State Department of Health Infection Control and Sterilization Protocols.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[11px] tracking-wider uppercase">
            <span>By Appointment Only</span>
            <span>·</span>
            <span>Hospital-Grade Asepsis</span>
            <span>·</span>
            <span>Vegan Pigments</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
