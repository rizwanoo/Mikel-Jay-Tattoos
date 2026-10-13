/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CinematicHero } from './components/CinematicHero';
import { PortfolioGallery } from './components/PortfolioGallery';
import { MeetTheArtists } from './components/MeetTheArtists';
import { ArtistrySection } from './components/ArtistrySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingFlow } from './components/BookingFlow';

export default function App() {
  const [selectedArtistForBooking, setSelectedArtistForBooking] = useState<string | null>(null);

  const scrollToBooking = (artistName?: string) => {
    if (artistName) setSelectedArtistForBooking(artistName);

    const bookingElem = document.getElementById('booking');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectArtist = (artistName: string) => {
    scrollToBooking(artistName);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F4F0E8] relative selection:bg-[#A51F2B] selection:text-white">
      {/* Header */}
      <Navbar onOpenBooking={() => scrollToBooking()} />

      <main className="w-full">
        {/* Hero: Bright Fast Video of Male Artist Tattooing + Floating Rotary Pen */}
        <CinematicHero onOpenBooking={() => scrollToBooking()} />

        {/* Portfolio: Pure Images Only, No Captions Below, No Popups */}
        <PortfolioGallery />

        {/* Meet The Artists: Mikel Ross & Jay Vance */}
        <MeetTheArtists onSelectArtist={handleSelectArtist} />

        {/* Simple & Clean Booking Form (No multi-step complexity) */}
        <BookingFlow initialArtist={selectedArtistForBooking} />

        {/* Studio Philosophy */}
        <ArtistrySection />

        {/* Contact & Location */}
        <ContactSection onOpenBooking={() => scrollToBooking()} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
