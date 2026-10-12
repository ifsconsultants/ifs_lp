import React from 'react';

export default function ComparisonSection({ onOpenModal }) {
  return (
    <section className="py-16 sm:py-24 bg-white" id="comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0B3765] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3 shadow-xs">
            The Deciding Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3765] tracking-tight font-heading">
            Don't Just Ask: "Which University Can I Get Into?"
          </h2>
          <p className="mt-3 text-base text-slate-600">
            The difference between shooting in the dark and applying with a strategic roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* LEFT: Random Application Approach */}
          <div className="rounded-3xl p-8 bg-slate-50 border border-slate-200 shadow-sm relative">
            <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600">The Risky Way</span>
                <h3 className="text-xl font-bold text-slate-800 font-heading">Random Application Approach</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                ✕
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold text-base">&times;</span>
                <span><strong>Follow trends:</strong> Pick countries based on internet hype rather than actual career fit.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold text-base">&times;</span>
                <span><strong>Rankings-only choices:</strong> Apply solely by brand rank, ignoring cost, location, and syllabus.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold text-base">&times;</span>
                <span><strong>No budget planning:</strong> Apply without analyzing living costs, currency shifts, or loan feasibility.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold text-base">&times;</span>
                <span><strong>Ignore career fit:</strong> Choose generic degrees with limited post-study employment prospects.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold text-base">&times;</span>
                <span><strong>Discover visa issues late:</strong> Uncover documentation or financial gaps after admission arrives.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold text-base">&times;</span>
                <span><strong>Waste application fees:</strong> Spend ₹50,000–₹1,00,000 blindly submitting unstrategic applications.</span>
              </li>
            </ul>
          </div>

          {/* RIGHT: IFS Guided Approach */}
          <div className="rounded-3xl p-8 bg-gradient-to-b from-blue-50/70 to-white border-2 border-[#0B3765] shadow-xl relative">
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full text-xs font-black bg-[#F9B900] text-[#0B3765] shadow-sm uppercase tracking-wider">
              RECOMMENDED STRATEGY
            </div>

            <div className="flex items-center justify-between pb-6 border-b border-blue-100 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B3765]">The Strategic Way</span>
                <h3 className="text-xl font-bold text-[#0B3765] font-heading">IFS Guided Approach</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                ✓
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-800">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-base">✓</span>
                <span><strong>Evaluate your profile first:</strong> Assess academic GPA, test scores, work history, and backlogs upfront.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-base">✓</span>
                <span><strong>Compare destinations:</strong> Objective evaluation across 22 countries for visa rights and job markets.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-base">✓</span>
                <span><strong>Match courses with career goals:</strong> Target specific curriculum specializations with strong ROI.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-base">✓</span>
                <span><strong>Understand budget and funding:</strong> Clear projection of tuition, living expenses, loans, and scholarships in INR.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-base">✓</span>
                <span><strong>Build a strategic shortlist:</strong> Balanced mix of Dream, Reach, and Safe universities to maximize offers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-base">✓</span>
                <span><strong>Prepare for admission &amp; visa:</strong> Professional SOP review, fund verification, and mock interview practice.</span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <button 
                onClick={onOpenModal} 
                className="bg-[#F9B900] text-[#0B3765] hover:bg-[#e5aa00] py-3.5 px-6 rounded-xl text-sm font-extrabold flex items-center justify-center gap-2 shadow-md w-full cursor-pointer"
              >
                <span>Experience The IFS Guided Approach</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
