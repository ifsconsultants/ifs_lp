import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import CountryCarousel from './components/CountryCarousel';
import ProblemSection from './components/ProblemSection';
import RoadmapSection from './components/RoadmapSection';
import HowItWorks from './components/HowItWorks';
import BenefitsGrid from './components/BenefitsGrid';
import ServicesGrid from './components/ServicesGrid';
import TrustStats from './components/TrustStats';
import TestimonialSection from './components/TestimonialSection';
import ComparisonSection from './components/ComparisonSection';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';
import BookingModal from './components/BookingModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleOpenModal = (country = '') => {
    setSelectedCountry(country);
    setModalOpen(true);
  };
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-amber-200 selection:text-[#0B3765] pb-20 md:pb-0">
      <Header onOpenModal={() => handleOpenModal()} />
      <main>
        <Hero onOpenModal={() => handleOpenModal()} />
        <TrustBar />
        <CountryCarousel onOpenModal={(c) => handleOpenModal(c)} />
        <ProblemSection onOpenModal={() => handleOpenModal()} />
        <RoadmapSection onOpenModal={handleOpenModal} />
        <HowItWorks />
        <BenefitsGrid onOpenModal={handleOpenModal} />
        <ServicesGrid onOpenModal={handleOpenModal} />
        <TrustStats />
        <TestimonialSection />
        <ComparisonSection onOpenModal={handleOpenModal} />
        
        {/* Free Consultation CTA Banner */}
        <section className="py-16 sm:py-20 bg-[#0B3765] text-white relative overflow-hidden" id="cta-block">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#F9B900] bg-white/10 px-3.5 py-1 rounded-full mb-4">
              Zero Risk &bull; Zero Pressure
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading mb-6">
              Start With Clarity — Without Paying a Consultation Fee
            </h2>
            <div className="space-y-2 text-base sm:text-xl text-blue-100 font-normal max-w-2xl mx-auto mb-8">
              <p>You don't need to know your exact university.</p>
              <p>You don't need to have your country finalised.</p>
              <p>You don't need to have every document ready.</p>
              <p className="font-bold text-[#F9B900] pt-2">Start with your questions. We'll help you understand your options.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={handleOpenModal} 
                className="bg-[#F9B900] text-[#0B3765] hover:bg-[#e5aa00] py-4 px-8 rounded-xl text-base sm:text-lg font-black flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto cursor-pointer"
              >
                <span>Book My FREE Consultation</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
              <a 
                href="https://wa.me/917036319256?text=Hi%20IFS%20Consultants,%20I%20would%20like%20to%20talk%20to%20a%20counsellor." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="py-4 px-6 rounded-xl text-base font-bold bg-white/10 hover:bg-white/20 text-white border border-white/30 transition flex items-center justify-center gap-2.5 w-full sm:w-auto"
              >
                <span>Talk to Us on WhatsApp</span>
              </a>
            </div>
            <p className="text-xs text-blue-200 mt-5 font-semibold">
              Free initial consultation &bull; No obligation &bull; 100% Confidential
            </p>
          </div>
        </section>

        <LeadForm />
        <FAQ onOpenModal={() => handleOpenModal()} />
        <FinalCTA onOpenModal={() => handleOpenModal()} />
      </main>
      <Footer />
      <StickyMobileCTA onOpenModal={() => handleOpenModal()} />
      <BookingModal isOpen={modalOpen} onClose={handleCloseModal} initialCountry={selectedCountry} />
    </div>
  );
}
