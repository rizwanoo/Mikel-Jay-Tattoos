import React, { useRef, useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

interface CinematicHeroProps {
  onOpenBooking: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({ onOpenBooking }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Requested Pexels tattoo video URL showing tattoo artist inking
  const localVideo = "https://www.pexels.com/download/video/4125835/";
  const posterImg = "/hero-poster.jpg";

  return (
    <section className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-[#080808]">
      {/* Background Video Layer - VIBRANT & BRIGHT TATTOO ARTIST INKING (Zero-delay local MP4) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden will-change-transform">
        <video
          ref={videoRef}
          src={localVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={posterImg}
          onLoadedData={() => setVideoLoaded(true)}
          onCanPlay={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover object-center transition-opacity duration-700 scale-[1.01] filter brightness-[1.18] contrast-[1.12] saturate-[1.2] ${
            videoLoaded ? 'opacity-100' : 'opacity-90'
          }`}
        >
          <source src={localVideo} type="video/mp4" />
        </video>

        {/* Ultra-light subtle vignettes: Kept transparent so the video is completely bright and clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-black/15 to-black/25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />
        
        {/* Subtle Warm Crimson Studio Glow */}
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-[#A51F2B]/20 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Floating Animated Tattoo Rotary Pen */}
      <div className="absolute right-4 sm:right-10 lg:right-20 top-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:block">
        <div className="relative animate-float-pen filter drop-shadow-[0_15px_30px_rgba(165,31,43,0.4)]">
          <svg width="130" height="320" viewBox="0 0 140 340" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Battery Top */}
            <rect x="52" y="15" width="36" height="55" rx="6" fill="#181818" stroke="#333333" strokeWidth="1.5" />
            <circle cx="70" cy="32" r="3" fill="#A51F2B" className="animate-ping" />
            <line x1="56" y1="52" x2="84" y2="52" stroke="#555" strokeWidth="1" />
            <text x="70" y="62" fill="#888888" fontSize="7" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">10.5V</text>

            {/* Aluminum Pen Body */}
            <rect x="48" y="70" width="44" height="110" rx="4" fill="url(#penMetalGrad)" stroke="#2b2b2b" strokeWidth="1.5" />
            <rect x="46" y="112" width="48" height="6" fill="#A51F2B" rx="1" />
            <rect x="48" y="125" width="44" height="2" fill="#333" />
            <rect x="48" y="132" width="44" height="2" fill="#333" />
            <text x="70" y="156" fill="#F4F0E8" fontSize="6.5" fontFamily="'Syne', sans-serif" fontWeight="bold" textAnchor="middle" letterSpacing="2">M&amp;J NYC</text>

            {/* Knurled Grip */}
            <path d="M 44,180 L 96,180 L 88,245 L 52,245 Z" fill="url(#gripGrad)" stroke="#222" strokeWidth="1.2" />
            <line x1="47" y1="195" x2="93" y2="195" stroke="#444" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="50" y1="210" x2="90" y2="210" stroke="#444" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="52" y1="225" x2="88" y2="225" stroke="#444" strokeWidth="1" strokeDasharray="2,2" />

            {/* Transparent Cartridge */}
            <polygon points="54,245 86,245 76,285 64,285" fill="#F4F0E8" fillOpacity="0.18" stroke="#666" strokeWidth="1" />
            <rect x="67" y="248" width="6" height="30" fill="#A51F2B" fillOpacity="0.8" />

            {/* Vibrating Needle Tip */}
            <g className="animate-needle-vibe">
              <line x1="70" y1="285" x2="70" y2="308" stroke="#F4F0E8" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="70" cy="308" r="2.5" fill="#A51F2B" />
              <circle cx="70" cy="308" r="5" fill="#A51F2B" fillOpacity="0.4" className="animate-pulse" />
            </g>

            <defs>
              <linearGradient id="penMetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#222222" />
                <stop offset="50%" stopColor="#141414" />
                <stop offset="100%" stopColor="#0d0d0d" />
              </linearGradient>
              <linearGradient id="gripGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1a1a1a" />
                <stop offset="50%" stopColor="#2d2d2d" />
                <stop offset="100%" stopColor="#151515" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
            <span className="text-[9px] font-mono tracking-[0.2em] text-[#A51F2B] font-bold uppercase bg-black/90 px-2.5 py-0.5 border border-[#A51F2B]/40">
              ROTARY NEEDLECRAFT
            </span>
          </div>
        </div>
      </div>

      {/* Hero Content - Clean & High Impact */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 flex flex-col justify-between h-full pb-8 sm:pb-12">
        
        {/* Top Tag */}
        <div className="flex items-center gap-2 pt-2">
          <span className="w-2 h-2 rounded-full bg-[#A51F2B] animate-ping" />
          <span className="font-mono text-xs tracking-[0.2em] font-semibold text-white uppercase">
            MIKEL&amp;JAY TATTOOS · NEW YORK, NY
          </span>
        </div>

        {/* Headline & CTAs */}
        <div className="my-auto max-w-2xl py-4 sm:py-6">
          <h1 className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.01] text-white drop-shadow-2xl mb-4 sm:mb-6">
            YOUR STORY. <br />
            <span className="italic font-editorial font-light text-[#F4F0E8] tracking-normal">
              ETCHED IN INK.
            </span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#888888] font-light leading-relaxed mb-8 max-w-lg">
            Art that lives on skin. Handcrafted realism, fine line ornament, and custom blackwork created by master resident artists in New York.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center bg-[#A51F2B] hover:bg-[#C92635] text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-2xl shadow-[#A51F2B]/40 active:scale-[0.98] cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <span>Book A Session</span>
                <Sparkles className="w-4 h-4 text-white" />
              </span>
            </button>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center border border-white/20 hover:border-white bg-black/50 hover:bg-black/80 backdrop-blur-md text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
            >
              <span>View Portfolio</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-end justify-between border-t border-white/[0.08] pt-4 text-xs text-[#888888]">
          <div className="flex items-center gap-6 sm:gap-10">
            <div>
              <span className="text-[10px] tracking-widest uppercase text-[#666]">ATELIER</span>
              <p className="font-syne text-xs text-white font-bold">NEW YORK, USA</p>
            </div>
            <div>
              <span className="text-[10px] tracking-widest uppercase text-[#666]">SPECIALTY</span>
              <p className="font-syne text-xs text-white font-bold">BLACK &amp; GREY REALISM</p>
            </div>
          </div>

          <a
            href="#portfolio"
            aria-label="Scroll down to portfolio"
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#888888] hover:text-white transition-colors"
          >
            <span className="hidden sm:inline font-mono">Explore</span>
            <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:border-[#A51F2B]">
              <ArrowDown className="w-3.5 h-3.5 text-white" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
