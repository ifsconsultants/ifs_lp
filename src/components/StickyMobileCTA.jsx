import React from 'react';

export default function StickyMobileCTA({ onOpenModal }) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-2xl md:hidden">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a 
          href="tel:+917036319256" 
          className="p-3 rounded-xl border border-slate-300 bg-slate-50 text-[#0B3765] flex items-center justify-center hover:bg-slate-100 transition shadow-xs" 
          aria-label="Call IFS Helpline"
        >
          <svg className="w-5 h-5 text-[#0B3765]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
        </a>

        <a 
          href="https://wa.me/917036319256?text=Hi%20IFS%20Consultants,%20I%20want%20to%20book%20a%20FREE%20Consultation." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-3 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-700 flex items-center justify-center hover:bg-emerald-100 transition shadow-xs" 
          aria-label="WhatsApp IFS Counsellor"
        >
          <svg className="w-5 h-5 fill-emerald-600" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
        </a>

        <button 
          onClick={onOpenModal} 
          className="bg-[#F9B900] text-[#0B3765] hover:bg-[#e5aa00] flex-1 py-3 px-4 rounded-xl text-center font-black text-sm flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
        >
          <span>Book FREE Consultation</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
