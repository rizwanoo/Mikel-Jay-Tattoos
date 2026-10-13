import React from 'react';
import { motion } from 'motion/react';
import { Quote, ArrowRight } from 'lucide-react';

interface MeetTheArtistsProps {
  onSelectArtist: (artistName: string) => void;
}

export const MeetTheArtists: React.FC<MeetTheArtistsProps> = ({ onSelectArtist }) => {
  const artists = [
    {
      id: 'mikel-ross',
      name: 'Mikel',
      fullName: 'Mikel Ross',
      title: 'Realism & Dark Sculptural',
      image: 'https://images.pexels.com/photos/28991534/pexels-photo-28991534.jpeg',
      quote: '“In black and grey realism, every single needle pass defines whether a shadow breathes with life. There are no eraser strokes on skin.”',
      accent: 'Realism Master'
    },
    {
      id: 'jay-vance',
      name: 'Jay',
      fullName: 'Jay Vance',
      title: 'Fine Line & Dark Surrealism',
      image: 'https://images.pexels.com/photos/17875609/pexels-photo-17875609.jpeg',
      quote: '“A great tattoo must flow with the muscle fibers when you walk, stretch, and breathe. It belongs to the living anatomy.”',
      accent: 'Fine Line Specialist'
    }
  ];

  return (
    <section id="artists" className="relative w-full py-20 sm:py-32 bg-[#090909] overflow-hidden border-t border-white/[0.08]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#A51F2B]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Clean, No 'RESIDENT MASTERS' banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-white/[0.08] pb-6 sm:pb-8"
        >
          <div>
            <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              MEET THE ARTISTS
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#999999] font-light leading-relaxed">
            The resident visionaries behind Mikel&amp;Jay Tattoos. Bespoke ink craftsmanship, sterile precision, and anatomical elegance.
          </p>
        </motion.div>

        {/* 2-Column Artists Showcase: High-Fashion Aesthetic, Photos + Quotes In Front */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group bg-[#111111] border border-white/10 hover:border-[#A51F2B]/60 transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Main Artist Photo with Dark Gradient & Dramatic Lighting */}
              <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full overflow-hidden bg-black">
                <img
                  src={artist.image}
                  alt={`${artist.fullName} - Tattoo Artist at Mikel&Jay NYC`}
                  className="w-full h-full object-cover object-center filter brightness-[1.05] contrast-[1.12] saturate-[1.1] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Vignettes for Quote Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-95" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge: Artist Identity */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-[#A51F2B] animate-pulse" />
                  <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] font-bold text-white uppercase">
                    {artist.accent}
                  </span>
                </div>

                {/* Prominent Aesthetic Quote Display in Front of the Photo */}
                <div className="absolute inset-x-4 sm:inset-x-8 bottom-6 sm:bottom-8 z-10">
                  <div className="p-5 sm:p-7 bg-black/85 backdrop-blur-md border-l-2 border-[#A51F2B] border-y border-r border-white/10 shadow-2xl transition-all duration-300 group-hover:border-l-[#C92635] group-hover:bg-black/90">
                    <Quote className="w-5 h-5 text-[#A51F2B] mb-2 sm:mb-3 opacity-90" />
                    
                    <p className="font-editorial italic text-base sm:text-lg lg:text-xl text-[#F4F0E8] leading-relaxed mb-4">
                      {artist.quote}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div>
                        <h3 className="font-syne text-xl sm:text-2xl font-extrabold text-white tracking-wide">
                          {artist.fullName}
                        </h3>
                        <span className="text-xs text-[#A51F2B] font-mono tracking-wider uppercase block">
                          {artist.title}
                        </span>
                      </div>

                      <button
                        onClick={() => onSelectArtist(artist.fullName)}
                        className="bg-[#A51F2B] hover:bg-[#C92635] text-white px-4 sm:px-5 py-2.5 text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#A51F2B]/30 cursor-pointer active:scale-95"
                      >
                        <span>Book With {artist.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
