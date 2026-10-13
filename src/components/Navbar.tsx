import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Artists', href: '#artists' },
    { label: 'Booking', href: '#booking' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-none ${
        isScrolled
          ? 'bg-[#090909]/92 backdrop-blur-md py-3 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-black/85 via-black/35 to-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Official Logo Avatar + Brand Name */}
        <a
          href="#"
          className="group flex items-center gap-3 focus-visible:outline-none"
          aria-label="Mikel&Jay Tattoos Home"
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full p-[1.5px] bg-gradient-to-b from-[#F4F0E8]/50 via-transparent to-[#A51F2B] transition-transform duration-300 group-hover:scale-105 shrink-0 shadow-lg shadow-black/50">
            <div className="w-full h-full rounded-full bg-[#141414] overflow-hidden flex items-center justify-center">
              <img
                src="/official-logo.jpg"
                alt="Mikel&Jay Tattoos Official Brand Logo"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#A51F2B] ring-2 ring-[#090909]" />
          </div>

          <div className="flex flex-col">
            <span className="font-syne text-sm sm:text-lg font-extrabold tracking-[0.16em] text-[#F4F0E8] transition-colors group-hover:text-white">
              MIKEL&amp;JAY
            </span>
            <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] tracking-[0.25em] text-[#8C8C8C] uppercase font-semibold">
              <span>TATTOOS</span>
              <span className="text-[#A51F2B] font-bold">·</span>
              <span>NEW YORK, NY</span>
            </div>
          </div>
        </a>

        {/* Center: Clean Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs tracking-[0.22em] uppercase font-bold text-[#8C8C8C]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors hover:text-[#F4F0E8] group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#A51F2B] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right: Facebook Social + Primary CTA (Volume removed as requested) */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-6">
          {/* Official Facebook Link */}
          <a
            href="https://www.facebook.com/profile.php?id=61593804397138"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mikel&Jay Tattoos Official Facebook"
            className="text-[#8C8C8C] hover:text-[#F4F0E8] p-2 transition-colors flex items-center gap-1.5 group text-xs tracking-wider"
            title="Official Facebook Page"
          >
            <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="hidden xl:inline text-[11px] font-medium text-[#8C8C8C] group-hover:text-white">FB</span>
          </a>

          {/* Primary CTA Button */}
          <button
            onClick={onOpenBooking}
            className="relative overflow-hidden group bg-[#A51F2B] hover:bg-[#C92635] text-[#F4F0E8] text-xs font-bold tracking-[0.2em] uppercase px-5 py-2.5 transition-all duration-300 shadow-lg shadow-[#A51F2B]/20 active:scale-[0.98] cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <span>Book A Session</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#F4F0E8] focus-visible:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#090909]/98 border-b border-white/10 px-6 py-6 backdrop-blur-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4 text-xs tracking-[0.2em] uppercase font-bold text-[#8C8C8C]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#F4F0E8] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://www.facebook.com/profile.php?id=61593804397138"
              target="_blank"
              rel="noopener noreferrer"
              className="py-1.5 flex items-center gap-2 text-[#8C8C8C] hover:text-[#F4F0E8]"
            >
              <span>Facebook Page</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <div className="pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#A51F2B] hover:bg-[#C92635] text-[#F4F0E8] text-xs font-bold tracking-[0.2em] uppercase py-3.5 text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book A Session</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
