import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Clock, ArrowUpRight, Send, Check } from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [formSent, setFormSent] = useState(false);
  const [msgData, setMsgData] = useState({ name: '', email: '', message: '' });

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (msgData.name && msgData.email && msgData.message) {
      setFormSent(true);
    }
  };

  return (
    <section id="contact" className="relative w-full py-20 sm:py-32 md:py-40 bg-[#090909] overflow-hidden border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#A51F2B]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-24 max-w-3xl"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[#A51F2B] font-mono font-bold block mb-2 sm:mb-3">
            NEW YORK ATELIER · CONTACT
          </span>
          <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F0E8] leading-[1.08]">
            LET'S CREATE <br />
            <span className="font-editorial italic font-light text-[#F4F0E8]/85">
              SOMETHING PERSONAL.
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-xs sm:text-base text-[#8C8C8C] font-light leading-relaxed max-w-xl">
            We work exclusively by private appointment to give every piece our full, undivided artistic dedication. Reach out to schedule a consultation or discuss a custom concept.
          </p>
        </motion.div>

        {/* Fluid Asymmetrical 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Direct Atelier Details & Facebook Bridge */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-10">
            <div>
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#8C8C8C] uppercase block mb-2">
                PRIMARY BRANDING &amp; LOCATION
              </span>
              <h3 className="font-syne text-xl text-[#F4F0E8] font-bold tracking-wider mb-1">
                MIKEL&amp;JAY TATTOOS
              </h3>
              <p className="text-sm text-[#F4F0E8]/90 font-light flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#A51F2B]" />
                <span>New York, NY, United States</span>
              </p>
            </div>

            {/* Direct Official Facebook Page Block */}
            <div className="p-5 sm:p-6 bg-[#141414] border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#A51F2B]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#1877F2]/20 flex items-center justify-center text-[#1877F2] shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-syne text-sm text-[#F4F0E8] font-bold">
                    Official Facebook Page
                  </h4>
                  <span className="text-[11px] text-[#8C8C8C]">Direct Studio Messenger &amp; Updates</span>
                </div>
              </div>

              <p className="text-xs text-[#8C8C8C] font-light leading-relaxed mb-4">
                View our ongoing studio pieces, flash drops, and message us directly on our official Facebook profile.
              </p>

              <a
                href="https://www.facebook.com/profile.php?id=61593804397138"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#F4F0E8] hover:text-[#A51F2B] transition-colors"
              >
                <span>Visit Facebook Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Studio Hours & Protocol */}
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#A51F2B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#F4F0E8] font-medium block">Studio Hours</span>
                  <span className="text-[#8C8C8C]">Tuesday – Sunday: 12:00 PM – 8:00 PM (By Appointment)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#A51F2B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#F4F0E8] font-medium block">Consultation Inquiries</span>
                  <span className="text-[#8C8C8C]">mikeljaytattoos@gmail.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#A51F2B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#F4F0E8] font-medium block">Direct Studio Line</span>
                  <span className="text-[#8C8C8C]">+1 (212) 555-INK8 (NYC)</span>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full bg-[#A51F2B] hover:bg-[#C92635] text-[#F4F0E8] py-3.5 sm:py-4 px-6 text-xs font-bold tracking-[0.22em] uppercase transition-all duration-300 shadow-xl shadow-[#A51F2B]/20 text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Launch 5-Step Booking Experience</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Quick Contact Form */}
          <div className="lg:col-span-7 bg-[#141414]/50 p-5 sm:p-8 lg:p-10 border border-white/[0.06]">
            <h3 className="font-syne text-lg sm:text-xl text-[#F4F0E8] font-bold tracking-wider mb-2">
              QUICK STUDIO INQUIRY
            </h3>
            <p className="text-xs text-[#8C8C8C] font-light mb-6 sm:mb-8">
              For general questions, aftercare guidance, or guest spot inquiries in New York.
            </p>

            {formSent ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#A51F2B]/15 flex items-center justify-center text-[#A51F2B]">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-syne text-lg text-[#F4F0E8] font-bold">
                  MESSAGE DISPATCHED
                </h4>
                <p className="text-xs text-[#8C8C8C] max-w-sm mx-auto">
                  Thank you for reaching out. A studio representative from Mikel&amp;Jay Tattoos will respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormSent(false);
                    setMsgData({ name: '', email: '', message: '' });
                  }}
                  className="text-xs uppercase tracking-widest text-[#A51F2B] hover:underline pt-2 inline-block cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleMessageSubmit} className="space-y-5">
                <div>
                  <label className="block text-[11px] font-mono tracking-wider uppercase text-[#8C8C8C] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={msgData.name}
                    onChange={(e) => setMsgData({ ...msgData, name: e.target.value })}
                    placeholder="e.g. Julian Thorne"
                    className="w-full bg-[#090909] border border-white/10 px-4 py-3 text-xs text-[#F4F0E8] placeholder:text-[#8C8C8C]/40 focus:border-[#A51F2B] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono tracking-wider uppercase text-[#8C8C8C] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={msgData.email}
                    onChange={(e) => setMsgData({ ...msgData, email: e.target.value })}
                    placeholder="julian@example.com"
                    className="w-full bg-[#090909] border border-white/10 px-4 py-3 text-xs text-[#F4F0E8] placeholder:text-[#8C8C8C]/40 focus:border-[#A51F2B] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono tracking-wider uppercase text-[#8C8C8C] mb-2">
                    Your Question or Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={msgData.message}
                    onChange={(e) => setMsgData({ ...msgData, message: e.target.value })}
                    placeholder="How can Mikel&Jay Tattoos assist with your vision?..."
                    className="w-full bg-[#090909] border border-white/10 p-4 text-xs text-[#F4F0E8] placeholder:text-[#8C8C8C]/40 focus:border-[#A51F2B] focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto border border-white/20 hover:border-[#A51F2B] hover:bg-[#A51F2B] text-[#F4F0E8] px-8 py-3.5 text-xs font-bold tracking-[0.22em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
