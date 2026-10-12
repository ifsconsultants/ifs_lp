import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-block p-2 bg-white rounded-2xl shadow-md border border-white/20">
              <img src="/assets/images/ifs-logo.png" alt="IFS Consultants Pvt Ltd Logo" className="h-14 sm:h-16 w-auto object-contain" />
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              IFS Consultants Pvt Ltd is a premier overseas education consultancy providing personalized profile evaluation, university shortlisting, and visa guidance for Indian graduates and working professionals.
            </p>
            <div className="pt-2 text-xs text-amber-400 font-semibold">
              ESTABLISHED 1999 &bull; OVER TWO DECADES OF TRUST
            </div>
          </div>

          {/* Contact & Phone */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Direct Contact</h3>
            <p className="text-sm text-slate-300 flex items-center gap-2">
              <svg className="w-4 h-4 text-[#F9B900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <a href="tel:+917036319256" className="hover:text-white transition font-bold text-white text-base">70363 19256</a>
            </p>
            <p className="text-xs text-slate-400">
              Available Monday to Saturday: 9:30 AM – 6:30 PM IST
            </p>
            <div className="pt-2">
              <a href="https://wa.me/917036319256?text=Hi%20IFS%20Consultants,%20I%20have%20an%20enquiry." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition">
                <span>Chat on WhatsApp: 70363 19256</span>
                &rarr;
              </a>
            </div>
          </div>

          {/* Office Address */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Registered Office</h3>
            <address className="text-xs sm:text-sm text-slate-400 not-italic leading-relaxed">
              <strong className="text-slate-200">IFS Consultants Pvt Ltd</strong><br />
              #10-4-1, GF102, Sri Srinivasa Towers,<br />
              Opp GVMC Out Gate, Ram Nagar,<br />
              Visakhapatnam, Andhra Pradesh — 530002
            </address>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-400">
              <a href="#why-ifs" className="hover:text-white transition">About IFS</a>
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#book-consultation" className="hover:text-white transition">Contact</a>
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms &amp; Conditions</a>
            </div>
          </div>

        </div>

        {/* Statutory Disclaimer */}
        <div className="pt-8 text-xs text-slate-500 leading-relaxed text-center sm:text-left space-y-3">
          <p>
            <strong>Statutory Disclaimer:</strong> University admissions, scholarships and visas are subject to the rules and decisions of the respective universities, institutions and government authorities. IFS Consultants does not guarantee admission or visa approval.
          </p>
          <p className="text-slate-600">
            &copy; 2026 IFS Consultants Pvt Ltd. All rights reserved. Designed for high conversion &amp; genuine student guidance.
          </p>
        </div>

      </div>
    </footer>
  );
}
