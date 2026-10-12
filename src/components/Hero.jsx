import React from 'react';

export default function Hero({ onOpenModal }) {
  return (
    <section className="relative bg-gradient-to-b from-[#F2F7FC] via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-slate-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Direct Response Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-white border border-amber-300 shadow-xs text-xs font-bold text-[#0B3765]">
              <span className="w-2 h-2 rounded-full bg-[#F9B900] animate-pulse"></span>
              <span className="tracking-wide uppercase">FREE STUDY ABROAD CONSULTATION</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-medium">Graduates &amp; Professionals</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.9rem] font-extrabold text-[#0B3765] leading-[1.18] tracking-tight font-heading">
              Planning to Study Abroad?<br />
              Find the Right{' '}
              <span className="relative inline-block text-[#0B3765]">
                <span className="relative z-10 underline decoration-[#F9B900] decoration-4 md:decoration-6 underline-offset-6">
                  Country, Course &amp; University
                </span>
              </span>{' '}
              Before You Spend Lakhs.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
              Get personalised study abroad guidance based on your profile, career goals and budget — with support across <strong>22 study destinations</strong>.
            </p>

            {/* Trust Line */}
            <div className="flex items-center gap-2 py-2 px-3.5 rounded-lg bg-blue-50/80 border border-blue-100/80 w-fit text-xs sm:text-sm font-semibold text-[#0B3765]">
              <svg className="w-4 h-4 text-[#F9B900] fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span>25+ Years of Experience &bull; 15,000+ Student Journeys Guided</span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button 
                onClick={onOpenModal} 
                className="bg-[#F9B900] text-[#0B3765] hover:bg-[#e5aa00] py-4 px-7 rounded-xl text-base sm:text-lg font-extrabold text-center flex items-center justify-center gap-2.5 shadow-lg group cursor-pointer"
              >
                <span>Book My FREE Consultation</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>

              <a 
                href="https://wa.me/917036319256?text=Hi%20IFS%20Consultants,%20I%20would%20like%20to%20book%20my%20FREE%20Study%20Abroad%20Consultation." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="py-4 px-6 rounded-xl text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-emerald-500 hover:text-emerald-700 transition flex items-center justify-center gap-2.5 shadow-xs"
              >
                <svg className="w-5 h-5 fill-emerald-600" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>WhatsApp an IFS Counsellor</span>
              </a>
            </div>

            {/* Microcopy Guarantee */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
              <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>No consultation fee. No obligation. 100% confidential.</span>
            </div>

            {/* 3 Compact Benefit Chips */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0B3765] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#0B3765]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800">Personalised Shortlisting</span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800">Scholarship Guidance</span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800">Visa Roadmap</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white">
                <img 
                  src="/assets/images/hero-student.jpg" 
                  alt="Indian graduate holding prospectus on international campus" 
                  className="w-full h-[420px] sm:h-[480px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3765]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#0B3765] text-[#F9B900] flex items-center justify-center font-black text-sm">
                        22
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Global Study Hubs</p>
                        <p className="text-sm font-extrabold text-[#0B3765]">US &bull; UK &bull; Germany &bull; Canada &bull; Ireland</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                      Est. 1999
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
