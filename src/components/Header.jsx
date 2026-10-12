import React, { useState } from 'react';

export default function Header({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Utility Announcement */}
      <aside aria-label="Announcement" className="bg-[#0B3765] text-white text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-[#F9B900] text-[#0B3765]">
              2026–2027 INTAKES OPEN
            </span>
            <span className="text-slate-200">Personalised Counselling for 22 Destinations • Free 1-on-1 Profile Evaluation</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a href="tel:+917036319256" className="hover:text-white transition flex items-center gap-1.5 font-semibold text-amber-300">
              <svg className="w-3.5 h-3.5 text-[#F9B900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call: 70363 19256
            </a>
            <span className="text-slate-500 hidden md:inline">|</span>
            <span className="text-slate-300 text-[11px] hidden md:inline">Visakhapatnam &bull; Hyderabad &bull; Online Across India</span>
          </div>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 transition-all duration-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-hidden focus:ring-2 focus:ring-amber-500 rounded-lg p-1" aria-label="IFS Consultants Home">
            <img src="/assets/images/ifs-logo.png" alt="IFS Consultants Logo" className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105" />
          </a>

          {/* Desktop Navigation Anchors */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700" aria-label="Main Navigation">
            <a href="#why-ifs" className="hover:text-[#0B3765] transition py-1 border-b-2 border-transparent hover:border-[#F9B900]">Why IFS</a>
            <a href="#country-explorer" className="hover:text-[#0B3765] transition py-1 border-b-2 border-transparent hover:border-[#F9B900]">Destinations</a>
            <a href="#benefits" className="hover:text-[#0B3765] transition py-1 border-b-2 border-transparent hover:border-[#F9B900]">Benefits</a>
            <a href="#how-it-works" className="hover:text-[#0B3765] transition py-1 border-b-2 border-transparent hover:border-[#F9B900]">How It Works</a>
            <a href="#services" className="hover:text-[#0B3765] transition py-1 border-b-2 border-transparent hover:border-[#F9B900]">Services</a>
            <a href="#testimonials" className="hover:text-[#0B3765] transition py-1 border-b-2 border-transparent hover:border-[#F9B900]">Testimonials</a>
            <a href="#faq" className="hover:text-[#0B3765] transition py-1 border-b-2 border-transparent hover:border-[#F9B900]">FAQ</a>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a href="tel:+917036319256" className="flex items-center gap-2 text-sm font-bold text-[#0B3765] hover:text-[#164e8a] transition px-2 py-1.5 rounded-lg group" title="Call IFS Consultants">
              <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0B3765] flex items-center justify-center group-hover:bg-amber-100 transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </span>
              <span className="tracking-tight">70363 19256</span>
            </a>

            <button 
              onClick={onOpenModal} 
              className="bg-[#F9B900] text-[#0B3765] hover:bg-[#e5aa00] transition py-2.5 px-5 rounded-full text-sm font-bold flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span>Book FREE Consultation</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a href="tel:+917036319256" className="p-2 text-[#0B3765] rounded-lg hover:bg-slate-100 sm:hidden" aria-label="Call IFS">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </a>
            <button 
              type="button" 
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-slate-700 hover:text-[#0B3765] rounded-lg focus:outline-hidden"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end">
            <div className="w-5/6 max-w-sm bg-white h-full shadow-2xl flex flex-col p-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <img src="/assets/images/ifs-logo.png" alt="IFS Consultants" className="h-12 w-auto object-contain" />
                <button 
                  type="button" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-900 rounded-lg"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-4 py-6 text-base font-semibold text-slate-700">
                <a href="#why-ifs" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0B3765] py-1.5 border-b border-slate-100">Why IFS</a>
                <a href="#country-explorer" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0B3765] py-1.5 border-b border-slate-100">Destinations (22 Countries)</a>
                <a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0B3765] py-1.5 border-b border-slate-100">Exclusive Benefits</a>
                <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0B3765] py-1.5 border-b border-slate-100">How It Works</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0B3765] py-1.5 border-b border-slate-100">Services</a>
                <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0B3765] py-1.5 border-b border-slate-100">Student Stories</a>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0B3765] py-1.5 border-b border-slate-100">FAQ</a>
              </nav>

              <div className="mt-auto space-y-3 pt-4 border-t border-slate-200">
                <a href="tel:+917036319256" className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border-2 border-[#0B3765] text-[#0B3765] font-bold text-sm">
                  Call: 70363 19256
                </a>
                <a 
                  href="#book-consultation" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="bg-[#F9B900] text-[#0B3765] flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-center font-bold text-sm shadow-md"
                >
                  Book FREE Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
