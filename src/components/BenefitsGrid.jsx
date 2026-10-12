import React from 'react';

export default function BenefitsGrid({ onOpenModal }) {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Official Flyer Student Photo */}
        <div className="relative bg-gradient-to-br from-blue-50/80 via-white to-amber-50/40 rounded-3xl p-6 sm:p-10 border border-blue-100/80 shadow-soft mb-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Copy & Contact */}
            <div className="lg:col-span-8 text-left space-y-4">
              <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-white border border-amber-300 shadow-2xs text-xs font-bold text-amber-900">
                <span className="w-2 h-2 rounded-full bg-[#F9B900] animate-pulse"></span>
                <span className="uppercase tracking-wider">Exclusive Value &bull; Tangible Savings</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B3765] tracking-tight font-heading leading-tight">
                More Support. More Savings.<br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B3765] via-blue-800 to-amber-600">
                  A Smoother Study Abroad Journey.
                </span>
              </h2>
              
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Eligible IFS students can access exclusive benefits designed to reduce the cost and stress of studying abroad — from test vouchers to departure assistance and loan processing fee waivers.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a 
                  href="tel:7036319256" 
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-[#0B3765] hover:border-[#0B3765] hover:shadow-xs transition"
                >
                  <svg className="w-4 h-4 text-emerald-600 fill-current" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z"/>
                  </svg>
                  <span>For more info call: <strong>70363 19256</strong></span>
                </a>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Transparent eligibility &bull; Zero hidden charges
                </span>
              </div>
            </div>

            {/* Right: Authentic Graduate Student from Flyer */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative max-w-[260px] sm:max-w-[280px]">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#F9B900] to-blue-600 rounded-3xl opacity-20 blur-md"></div>
                <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white group">
                  <img 
                    src="assets/images/student-graduate-pointing.png" 
                    alt="IFS Graduate pointing forward in graduation cap" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 right-2 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xs text-center">
                    <p className="text-[11px] font-black text-[#0B3765] uppercase tracking-wider">*Exclusive Benefits for IFS Students</p>
                    <p className="text-[10px] text-amber-700 font-bold">More Support &bull; More Savings</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 7 Premium Benefit Cards Grid with Authentic Flyer Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* BENEFIT 1: Discount Vouchers */}
          <div className="rounded-2xl p-6 bg-white border border-slate-200/90 shadow-soft hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-2xl bg-gradient-to-br from-amber-50 to-blue-50/50 p-1.5 border border-amber-100 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <img src="assets/images/benefit-icon-voucher.png" alt="Discount Vouchers" className="w-full h-full object-contain" loading="lazy" />
                </div>
                <div className="flex-shrink-0">
                  <img src="assets/images/benefit-badge-voucher.png" alt="Special Discount up to 30% of Exam Fee" className="h-11 sm:h-12 w-auto object-contain rounded-xl shadow-2xs border border-amber-200/70" />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Benefit 01</span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-blue-100 text-[#0B3765]">
                  SAVE UP TO 30%
                </span>
              </div>
              
              <h3 className="text-xl font-extrabold text-[#0B3765] mb-1.5 font-heading group-hover:text-blue-800 transition-colors">
                Discount Vouchers
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-2">Up to 30% discount on eligible exam fees.</p>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                Direct fee vouchers and subsidized test slots to reduce your upfront test expenses before applying abroad.
              </p>
              
              <div className="flex flex-wrap gap-1.5 text-xs font-bold text-slate-700">
                <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200">IELTS</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200">TOEFL</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200">PTE</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200">Duolingo DET</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200">ETS GRE</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button onClick={() => onOpenModal && onOpenModal('')} className="text-xs font-bold text-[#0B3765] hover:text-amber-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer">
                <span>Check Voucher Eligibility</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
              </button>
              <span className="text-[11px] text-slate-400 font-medium">Eligible test-takers</span>
            </div>
          </div>

          {/* BENEFIT 2: Departure Support Program */}
          <div className="rounded-2xl p-6 bg-white border-2 border-amber-300 shadow-soft hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-2xl bg-gradient-to-br from-blue-50 to-amber-50/50 p-1.5 border border-blue-100 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <img src="assets/images/benefit-icon-flight.png" alt="Departure Support Flight" className="w-full h-full object-contain" loading="lazy" />
                </div>
                <div className="flex-shrink-0">
                  <img src="assets/images/benefit-badge-departure.png" alt="Reimbursement on Air Tickets / Accommodation" className="h-11 sm:h-12 w-auto object-contain rounded-xl shadow-2xs border border-amber-200/70" />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700">Benefit 02</span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-[#F9B900] text-[#0B3765]">
                  *₹25,000 – ₹50,000 PAID
                </span>
              </div>
              
              <h3 className="text-xl font-extrabold text-[#0B3765] mb-1.5 font-heading group-hover:text-blue-800 transition-colors">
                Departure Support Program
              </h3>
              <p className="text-sm font-semibold text-slate-800 mb-2">*₹25,000–₹50,000 paid on successful visa for eligible students.</p>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                Tangible reimbursement support directly credited toward your international flights and initial accommodation transition.
              </p>
              
              <div className="space-y-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Reimbursement on Air Tickets</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Initial Accommodation Assistance</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button onClick={() => onOpenModal && onOpenModal('')} className="text-xs font-bold text-[#0B3765] hover:text-amber-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer">
                <span>Check Departure Eligibility</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
              </button>
              <span className="text-[11px] text-amber-700 font-bold">On Visa Approval</span>
            </div>
          </div>

          {/* BENEFIT 3: 10 Full-Length Mock Tests */}
          <div className="rounded-2xl p-6 bg-white border border-slate-200/90 shadow-soft hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 p-1.5 border border-blue-100 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <img src="assets/images/benefit-icon-mocktest.png" alt="Mock Test Laptop" className="w-full h-full object-contain" loading="lazy" />
                </div>
                <div className="flex-shrink-0">
                  <img src="assets/images/benefit-badge-mocktest.png" alt="10 Mock Tests with Scoring" className="h-11 sm:h-12 w-auto object-contain rounded-xl shadow-2xs border border-amber-200/70" />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Benefit 03</span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-blue-100 text-[#0B3765]">
                  10 MOCKS INCLUDED
                </span>
              </div>
              
              <h3 className="text-xl font-extrabold text-[#0B3765] mb-1.5 font-heading group-hover:text-blue-800 transition-colors">
                10 Mock Tests with Scoring
              </h3>
              <p className="text-sm font-semibold text-slate-800 mb-2">Practice with scoring for GRE, TOEFL, IELTS, PTE, DET.</p>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                10 full-length mock tests simulating real computer-delivered exams with band evaluation and sectional diagnosis.
              </p>
              
              <div className="flex flex-wrap gap-1.5 text-xs font-bold text-slate-700">
                <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200">IELTS</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200">TOEFL</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200">PTE</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200">ETS GRE</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200">Duolingo DET</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button onClick={() => onOpenModal && onOpenModal('')} className="text-xs font-bold text-[#0B3765] hover:text-amber-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer">
                <span>Get Free Mock Access</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
              </button>
              <span className="text-[11px] text-slate-400 font-medium">Real Exam Simulator</span>
            </div>
          </div>

          {/* BENEFIT 4: Germany dMAT Preparation */}
          <div className="rounded-2xl p-6 bg-white border border-slate-200/90 shadow-soft hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-2xl bg-gradient-to-br from-amber-50 to-slate-50 p-1.5 border border-slate-200 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <img src="assets/images/benefit-icon-dmat.png" alt="dMAT Mock Test Germany" className="w-full h-full object-contain" loading="lazy" />
                </div>
                <div className="flex-shrink-0">
                  <img src="assets/images/benefit-badge-dmat.png" alt="5 dMAT Mock Exams" className="h-11 sm:h-12 w-auto object-contain rounded-xl shadow-2xs border border-amber-200/70" />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Benefit 04</span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-slate-200 text-slate-800">
                  GERMANY SPECIALIZED
                </span>
              </div>
              
              <h3 className="text-xl font-extrabold text-[#0B3765] mb-1.5 font-heading group-hover:text-blue-800 transition-colors">
                Germany dMAT Preparation
              </h3>
              <p className="text-sm font-semibold text-slate-800 mb-2">5 dedicated dMAT mock exams for Germany master's applications.</p>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                Specialized aptitude test preparation required for technical admissions into top German public universities and TU9 institutes.
              </p>
              
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-lg bg-slate-100 text-xs font-bold text-slate-700">
                <span>🇩🇪 German Public Universities &bull; Master's Ready</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button onClick={() => onOpenModal && onOpenModal('Germany')} className="text-xs font-bold text-[#0B3765] hover:text-amber-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer">
                <span>Check German dMAT Prep</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
              </button>
              <span className="text-[11px] text-slate-400 font-medium">5 Mocks Included</span>
            </div>
          </div>

          {/* BENEFIT 5: Education Loan Assistance */}
          <div className="rounded-2xl p-6 bg-white border border-slate-200/90 shadow-soft hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-2xl bg-gradient-to-br from-emerald-50 to-amber-50/50 p-1.5 border border-emerald-100 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <img src="assets/images/benefit-icon-loan.png" alt="Education Loan Assistance" className="w-full h-full object-contain" loading="lazy" />
                </div>
                <div className="flex-shrink-0">
                  <img src="assets/images/benefit-badge-loan.png" alt="Savings Up to ₹60,000" className="h-11 sm:h-12 w-auto object-contain rounded-xl shadow-2xs border border-amber-200/70" />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Benefit 05</span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-100 text-emerald-800">
                  SAVE UP TO ₹60,000
                </span>
              </div>
              
              <h3 className="text-xl font-extrabold text-[#0B3765] mb-1.5 font-heading group-hover:text-blue-800 transition-colors">
                Education Loan Assistance
              </h3>
              <p className="text-sm font-semibold text-slate-800 mb-2">Financial support with almost no processing fee.</p>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                Get financial support for your study abroad plans with potential savings of up to ₹60,000 on processing charges and fast sanction turnaround.
              </p>
              
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-lg bg-emerald-50 text-xs font-bold text-emerald-800 border border-emerald-200">
                <span>₹ Zero/Reduced Processing Fees &bull; Quick Sanction</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button onClick={() => onOpenModal && onOpenModal('')} className="text-xs font-bold text-[#0B3765] hover:text-amber-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer">
                <span>Calculate Loan Savings</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
              </button>
              <span className="text-[11px] text-emerald-700 font-bold">Save ₹60k</span>
            </div>
          </div>

          {/* BENEFIT 6: Professional SOP Support */}
          <div className="rounded-2xl p-6 bg-white border border-slate-200/90 shadow-soft hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 p-1.5 border border-blue-100 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <img src="assets/images/benefit-icon-sop.png" alt="SOP Statement of Purpose" className="w-full h-full object-contain" loading="lazy" />
                </div>
                <div className="flex-shrink-0">
                  <img src="assets/images/benefit-badge-sop.png" alt="Free SoP for Any Program" className="h-11 sm:h-12 w-auto object-contain rounded-xl shadow-2xs border border-amber-200/70" />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Benefit 06</span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-blue-100 text-[#0B3765]">
                  FREE FOR ANY PROGRAM
                </span>
              </div>
              
              <h3 className="text-xl font-extrabold text-[#0B3765] mb-1.5 font-heading group-hover:text-blue-800 transition-colors">
                Professional SOP Support
              </h3>
              <p className="text-sm font-semibold text-slate-800 mb-2">Get a professionally drafted Statement of Purpose from IFS.</p>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                Personalized SOP drafting tailored for any course or country to convincingly present your goals, achievements, and course fit.
              </p>
              
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-lg bg-blue-50 text-xs font-bold text-[#0B3765] border border-blue-100">
                <span>✍️ Tailored to University Admission Committees</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button onClick={() => onOpenModal && onOpenModal('')} className="text-xs font-bold text-[#0B3765] hover:text-amber-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer">
                <span>Request Free SOP Review</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
              </button>
              <span className="text-[11px] text-slate-400 font-medium">Any Course / Country</span>
            </div>
          </div>

          {/* BENEFIT 7: Service Charges Reimbursement (Full Width Featured Card) */}
          <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-white via-amber-50/25 to-blue-50/30 border-2 border-amber-300 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 md:col-span-2 group">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-5 flex-1">
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-2xl bg-white p-2 border border-amber-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <img src="assets/images/benefit-icon-reimbursement.png" alt="Service Charges Reimbursement" className="w-full h-full object-contain" loading="lazy" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700">Benefit 07</span>
                    <span className="px-3 py-0.5 rounded-full text-xs font-extrabold bg-[#F9B900] text-[#0B3765]">
                      100% VALUE BACK
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0B3765] mb-1.5 font-heading">
                    Service Charges Reimbursement
                  </h3>
                  <p className="text-base font-bold text-amber-800 mb-1">
                    Your investment in your global education journey, valued back!
                  </p>
                  <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                    Eligible students who enroll through IFS Consultants may qualify for applicable service-charge reimbursement — ensuring ethical, student-first guidance with zero financial burden.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full lg:w-auto justify-end">
                <img src="assets/images/benefit-badge-reimbursement.png" alt="Service Charges Reimbursement" className="h-12 sm:h-14 w-auto object-contain rounded-xl shadow-2xs border border-amber-200" />
                <button 
                  onClick={() => onOpenModal && onOpenModal('')} 
                  className="bg-[#F9B900] text-[#0B3765] hover:bg-[#e5aa00] py-3.5 px-7 rounded-xl text-sm font-extrabold shadow-md whitespace-nowrap text-center w-full sm:w-auto cursor-pointer transition"
                >
                  Check Which Benefits I Qualify For
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Brand Trust Pillars (From Official IFS Flyer Footer) */}
        <div className="mt-12 rounded-2xl bg-[#0B3765] text-white p-6 sm:p-8 shadow-xl border border-blue-900/40 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#F9B900]/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
            
            {/* Pillar 1 */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#F9B900] text-[#0B3765] flex items-center justify-center mb-3 shadow-md">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clip-rule="evenodd"/></svg>
              </div>
              <h4 className="text-sm sm:text-base font-extrabold text-white">Trusted Guidance</h4>
              <p className="text-xs text-blue-200 mt-0.5">25+ Years of ethical mentoring</p>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#F9B900] text-[#0B3765] flex items-center justify-center mb-3 shadow-md">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>
              </div>
              <h4 className="text-sm sm:text-base font-extrabold text-white">Student-Centric Support</h4>
              <p className="text-xs text-blue-200 mt-0.5">Profile-matched advice</p>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#F9B900] text-[#0B3765] flex items-center justify-center mb-3 shadow-md">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/></svg>
              </div>
              <h4 className="text-sm sm:text-base font-extrabold text-white">End-to-End Assistance</h4>
              <p className="text-xs text-blue-200 mt-0.5">SOP, visa &amp; pre-departure</p>
            </div>

            {/* Pillar 4 */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#F9B900] text-[#0B3765] flex items-center justify-center mb-3 shadow-md">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-.2c0-1.4-1.4-2.8-2.8-2.8H6a2 2 0 01-2-2v-.973zm8.683 5.438A7.962 7.962 0 0110 16a7.962 7.962 0 01-3.015-2.535C7.545 13.784 8.232 14 9 14h2a2 2 0 001.015-.465z" clip-rule="evenodd"/></svg>
              </div>
              <h4 className="text-sm sm:text-base font-extrabold text-white">For Your Global Journey</h4>
              <p className="text-xs text-blue-200 mt-0.5">Across 22 study destinations</p>
            </div>

          </div>
        </div>

        {/* Clear Footnote */}
        <div className="mt-8 p-4 rounded-xl bg-slate-100 border border-slate-200/90 text-center">
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            *T &amp; C Apply &bull; All discounts, reimbursements, savings and student benefits are subject to eligibility and IFS Consultants' applicable terms &amp; conditions.
          </p>
        </div>

      </div>
    </section>
  );
}
