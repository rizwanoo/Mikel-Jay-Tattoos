import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PortfolioItem } from '../types';
import { CheckCircle2, MessageCircle, Send, Sparkles, RotateCcw } from 'lucide-react';

interface BookingFlowProps {
  initialItem?: PortfolioItem | null;
  initialArtist?: string | null;
}

export const BookingFlow: React.FC<BookingFlowProps> = ({ initialArtist }) => {
  const [submitted, setSubmitted] = useState(false);
  const [artist, setArtist] = useState<'Mikel Ross' | 'Jay Vance' | 'Any Available Master'>(
    (initialArtist as any) || 'Any Available Master'
  );
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [idea, setIdea] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialArtist) {
      setArtist(initialArtist as any);
    }
  }, [initialArtist]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !idea.trim()) {
      setError('Please fill in your name, contact, and tattoo idea.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setContact('');
    setIdea('');
    setDate('');
    setError('');
  };

  return (
    <section id="booking" className="relative w-full py-16 sm:py-24 bg-[#080808] border-t border-white/[0.08] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#A51F2B]/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10"
      >
        
        {/* Simple Section Header */}
        <div className="text-center mb-10">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A51F2B] font-bold block mb-1.5">
            PRIVATE APPOINTMENTS
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            BOOK YOUR SESSION
          </h2>
          <p className="text-xs sm:text-sm text-[#888888] font-light max-w-md mx-auto">
            Tell us about your tattoo idea. We will review availability and confirm your private appointment date.
          </p>
        </div>

        {/* Simple On-Page Form Container */}
        <div className="bg-[#111111] border border-white/10 p-6 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="text-center py-8 space-y-5 animate-in fade-in duration-300">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#A51F2B]/20 border border-[#A51F2B] flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-[#A51F2B]" />
              </div>

              <div>
                <h3 className="font-syne text-xl sm:text-2xl font-bold text-white mb-2">
                  Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#888888] max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-medium">{name}</span>. We will review your concept for <span className="text-[#A51F2B] font-bold">{artist}</span> and reach out to you via <span className="text-white font-medium">{contact}</span> within 24 hours.
                </p>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61593804397138"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#A51F2B] hover:bg-[#C92635] text-white px-6 py-3 text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect On Facebook</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 border border-white/20 hover:border-white text-white px-5 py-3 text-xs font-medium tracking-wider uppercase transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>New Request</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="p-3 bg-[#A51F2B]/15 border border-[#A51F2B]/50 text-[#F4F0E8] text-xs">
                  {error}
                </div>
              )}

              {/* Select Artist */}
              <div>
                <label className="block text-[11px] font-mono tracking-wider uppercase text-[#888888] mb-2 font-bold">
                  Choose Artist
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Mikel Ross', 'Jay Vance', 'Any Available Master'] as const).map((art) => (
                    <button
                      key={art}
                      type="button"
                      onClick={() => setArtist(art)}
                      className={`py-3 px-2 text-[11px] uppercase tracking-wider text-center border transition-all cursor-pointer ${
                        artist === art
                          ? 'border-[#A51F2B] bg-[#A51F2B]/20 text-white font-bold'
                          : 'border-white/10 text-[#888888] hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {art}
                    </button>
                  ))}
                </div>
              </div>

              {/* Client Name & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono tracking-wider uppercase text-[#888888] mb-2 font-bold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Julian Thorne"
                    className="w-full bg-[#080808] border border-white/10 px-3.5 py-3 text-xs text-white placeholder:text-[#555] focus:border-[#A51F2B] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono tracking-wider uppercase text-[#888888] mb-2 font-bold">
                    Phone or WhatsApp *
                  </label>
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="+1 (212) 555-0192"
                    className="w-full bg-[#080808] border border-white/10 px-3.5 py-3 text-xs text-white placeholder:text-[#555] focus:border-[#A51F2B] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Tattoo Idea & Placement */}
              <div>
                <label className="block text-[11px] font-mono tracking-wider uppercase text-[#888888] mb-2 font-bold">
                  Tattoo Concept &amp; Placement *
                </label>
                <textarea
                  rows={3}
                  required
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="Describe your design, placement (forearm, back, sleeve, etc.), and style preference..."
                  className="w-full bg-[#080808] border border-white/10 p-3.5 text-xs text-white placeholder:text-[#555] focus:border-[#A51F2B] focus:outline-none transition-colors"
                />
              </div>

              {/* Target Date */}
              <div>
                <label className="block text-[11px] font-mono tracking-wider uppercase text-[#888888] mb-2 font-bold">
                  Preferred Date (Optional)
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#080808] border border-white/10 px-3.5 py-3 text-xs text-white focus:border-[#A51F2B] focus:outline-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#A51F2B] hover:bg-[#C92635] text-white py-4 px-6 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl shadow-[#A51F2B]/30 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Submit Booking Request</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              <div className="pt-2 text-center">
                <a
                  href="https://www.facebook.com/profile.php?id=61593804397138"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#A51F2B] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Or message directly on Facebook Page</span>
                </a>
              </div>
            </form>
          )}
        </div>

      </motion.div>
    </section>
  );
};
