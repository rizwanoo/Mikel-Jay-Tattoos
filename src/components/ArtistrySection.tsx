import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Feather, HeartHandshake } from 'lucide-react';

export const ArtistrySection: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-20 sm:py-32 bg-[#090909] overflow-hidden border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#A51F2B]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Screen Studio Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Studio Architecture & Private Atelier Suite Photography */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#141414] border border-white/10 shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/14242281/pexels-photo-14242281.jpeg"
                alt="Mikel & Jay Tattoos private atelier suite and studio interior in New York, NY"
                className="w-full h-full object-cover object-center filter brightness-[1.12] contrast-[1.1] saturate-[1.15] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/25 to-transparent opacity-90" />
              
              {/* Top Studio Tag Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 bg-black/85 backdrop-blur-md border border-white/15 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A51F2B] animate-pulse" />
                <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] font-bold text-white uppercase">
                  PRIVATE ATELIER · NEW YORK, NY
                </span>
              </div>

              {/* Secondary Floating Inset - The Needlecraft Close-up */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-24 sm:w-32 aspect-square border-2 border-white/20 overflow-hidden shadow-2xl hidden sm:block bg-black">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Tattooing_in_progress.jpg"
                  alt="Rotary needle inking skin precision close-up"
                  className="w-full h-full object-cover object-center filter brightness-[1.1] contrast-[1.2]"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black/80 py-0.5 text-center">
                  <span className="font-mono text-[8px] text-[#A51F2B] tracking-widest font-bold">PRECISION</span>
                </div>
              </div>

              {/* Studio Stamp Badge */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 sm:p-6 bg-black/85 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between text-xs tracking-[0.25em] text-[#8C8C8C] uppercase mb-1">
                  <span>ATELIER STATUS</span>
                  <span className="text-[#A51F2B] font-mono font-bold">NEW YORK, NY</span>
                </div>
                <p className="font-syne text-sm sm:text-base text-[#F4F0E8] font-bold tracking-wider mb-2">
                  MIKEL &amp; JAY TATTOOS · PRIVATE ATELIER SUITE
                </p>
                <div className="flex items-center gap-3 text-[11px] text-[#8C8C8C] font-mono border-t border-white/10 pt-2">
                  <span>MIKEL: REALISM</span>
                  <span className="text-[#A51F2B]">·</span>
                  <span>JAY: FINE LINE &amp; BLACKWORK</span>
                </div>
              </div>
            </div>

            {/* Accent Hairline */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-[#A51F2B]" />
          </motion.div>

          {/* Right: Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-[#A51F2B] font-mono font-bold block mb-2 sm:mb-3">
              ABOUT THE ATELIER
            </span>

            <h2 className="font-syne text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F4F0E8] leading-[1.08] mb-5 sm:mb-6">
              THE ARTISTRY OF <br />
              <span className="font-editorial italic font-light text-[#F4F0E8]/85">
                MIKEL&amp;JAY TATTOOS
              </span>
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#8C8C8C] font-light leading-relaxed mb-8">
              <p>
                Based in New York, NY, Mikel&amp;Jay Tattoos is dedicated to master needlecraft, anatomical precision, and permanent artistic expression.
              </p>
              <p>
                We do not copy internet templates or mass-produced flash. Every piece is hand-sketched and tailored to move harmoniously with the human body, muscular dynamics, and skin canvas.
              </p>
              <p>
                Our private New York studio provides a sterile, tranquil, one-on-one session environment with hospital-grade equipment, single-use cartridges, and premium vegan pigments.
              </p>
            </div>

            {/* Core Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6 border-t border-white/[0.08]">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#A51F2B] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-syne text-xs sm:text-sm text-[#F4F0E8] font-bold tracking-wider mb-1">
                    HOSPITAL-GRADE ASEPSIS
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#8C8C8C] leading-relaxed">
                    100% single-use medical cartridges and strict barrier film protocols.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Feather className="w-5 h-5 text-[#A51F2B] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-syne text-xs sm:text-sm text-[#F4F0E8] font-bold tracking-wider mb-1">
                    ANATOMICAL FLOW
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#8C8C8C] leading-relaxed">
                    Compositions shaped around natural muscle lines for lifetime movement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#A51F2B] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-syne text-xs sm:text-sm text-[#F4F0E8] font-bold tracking-wider mb-1">
                    BESPOKE INK DRAWINGS
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#8C8C8C] leading-relaxed">
                    Custom illustrative concepts tailored to each client's individual story.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#A51F2B] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-syne text-xs sm:text-sm text-[#F4F0E8] font-bold tracking-wider mb-1">
                    AFTERCARE GUIDANCE
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#8C8C8C] leading-relaxed">
                    Comprehensive healing protocol and lifetime touch-up commitment.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
