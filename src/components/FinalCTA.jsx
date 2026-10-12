import React from 'react';

export default function FinalCTA({ onOpenModal }) {
  const checklist = [
    "Which country?",
    "Which course?",
    "Which universities?",
    "What budget?",
    "What tests?",
    "What scholarships?",
    "What application strategy?",
    "What visa preparation?"
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-[#0B3765] to-[#072545] text-white relative overflow-hidden" id="final-cta">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#F9B900] bg-white/10 px-3.5 py-1 rounded-full mb-4">
          MAKE YOUR STUDY ABROAD DREAM A REALITY
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-heading max-w-3xl mx-auto leading-tight">
          Your Study Abroad Journey Should Start With the Right Decision.
        </h2>

        <div className="mt-6 text-base sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto space-y-2">
          <p>You may have thousands of universities and hundreds of courses to choose from.</p>
          <p className="font-bold text-white">You only need to find the options that make sense for your profile, career and budget.</p>
        </div>

        {/* 8-Point Checklist */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-md max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-bold text-[#F9B900] uppercase tracking-wider mb-5">
            Get Clear Answers On Every Crucial Step:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm font-semibold text-slate-200 text-left">
            {checklist.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-[#F9B900] font-black text-base">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onOpenModal} 
            className="bg-[#F9B900] text-[#0B3765] hover:bg-[#e5aa00] py-4 px-8 rounded-xl text-base sm:text-lg font-black flex items-center justify-center gap-2.5 shadow-2xl w-full sm:w-auto cursor-pointer"
          >
            <span>Book My FREE Study Abroad Consultation</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>

          <a 
            href="https://wa.me/917036319256?text=Hi%20IFS%20Consultants,%20I%20would%20like%20to%20consult%20an%20expert." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="py-4 px-6 rounded-xl text-base font-bold bg-white/10 hover:bg-white/20 text-white border border-white/30 transition flex items-center justify-center gap-2.5 w-full sm:w-auto"
          >
            <svg className="w-5 h-5 fill-emerald-400" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>WhatsApp IFS Consultants</span>
          </a>
        </div>

        <p className="mt-8 text-xs sm:text-sm text-slate-300 font-semibold tracking-wide">
          25+ Years &bull; 15,000+ Student Journeys &bull; 22 Study Destinations
        </p>

      </div>
    </section>
  );
}
