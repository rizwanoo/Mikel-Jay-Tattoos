import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';

export const PortfolioGallery: React.FC = () => {
  return (
    <section id="portfolio" className="relative w-full py-16 sm:py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Minimalist Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 border-b border-white/[0.08] pb-6"
        >
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A51F2B] font-bold block mb-1">
              SELECTED WORKS
            </span>
            <h2 className="font-syne text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              PORTFOLIO
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#888888] font-light max-w-xs sm:text-right">
            Mikel&amp;Jay Tattoos · New York Studio Archive
          </p>
        </motion.div>

        {/* Pure Image Grid - No captions beneath, no popup, pure visual impact */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {PORTFOLIO_ITEMS.map((item, index) => {
            // Asymmetric aspect ratio accents for editorial flow
            const aspectClass =
              index % 5 === 0
                ? 'aspect-[3/4] col-span-2 md:col-span-1 row-span-1'
                : index % 3 === 0
                ? 'aspect-[4/5]'
                : 'aspect-square';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: (index % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden group bg-[#111111] ${aspectClass}`}
              >
                <img
                  src={item.image}
                  alt={`Mikel&Jay Tattoos Artwork ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center filter contrast-[1.08] transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle hover gradient and crimson bottom hairline */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#A51F2B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
