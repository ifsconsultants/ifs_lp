import React from 'react';

export default function RoadmapSection({ onOpenModal }) {
  const factors = [
    "Academic Background & GPA",
    "Work Experience & Projects",
    "Long-term Career Goals",
    "Realistic Family Budget (INR)",
    "Preferred Countries & Climates",
    "Specific Study Interests",
    "Test Scores (IELTS/PTE/GRE)",
    "Education Loan / Funding Needs",
    "Target Intake (Fall / Spring)",
    "Embassy & Visa Considerations"
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden" id="solution-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0B3765] bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full mb-3">
            The IFS Approach
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3765] tracking-tight font-heading">
            Get a Study Abroad Roadmap Built Around You
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            The goal is simple: identify the right <strong>country + course + university combination</strong> and create a clear path from your current profile to admission and visa preparation.
          </p>
        </div>

        {/* 10-Factor Matrix Card */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B3765] mb-4 font-heading flex items-center gap-2">
                <svg className="w-6 h-6 text-[#F9B900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012 2"/>
                </svg>
                What IFS Senior Counsellors Review With You:
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Before suggesting a single university, we evaluate 10 crucial pillars of your student profile to ensure you only apply where you have a genuine advantage.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {factors.map((factor, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#0B3765] text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{factor}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button 
                  onClick={onOpenModal} 
                  className="bg-[#0B3765] hover:bg-[#072545] text-white py-3.5 px-6 rounded-xl text-sm sm:text-base font-bold inline-flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Create My FREE Study Abroad Roadmap</span>
                  <svg className="w-4 h-4 text-[#F9B900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Visual Output Mockup */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 border-2 border-[#0B3765]/15 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-extrabold text-[#0B3765] uppercase tracking-wider">IFS Profile Blueprint</span>
                  </div>
                  <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full">
                    FREE Personalized Output
                  </span>
                </div>

                <div className="space-y-4 py-4 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex justify-between items-center text-slate-500 font-semibold mb-1">
                      <span>STEP 1: Shortlist Categorization</span>
                      <span className="text-emerald-600 font-bold">Dream • Reach • Safe</span>
                    </div>
                    <p className="text-slate-800 font-bold">Balanced 5–8 University Portfolio across 22 Countries</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex justify-between items-center text-slate-500 font-semibold mb-1">
                      <span>STEP 2: Financial Assessment</span>
                      <span className="text-[#0B3765] font-bold">Budget &amp; Loan</span>
                    </div>
                    <p className="text-slate-800 font-bold">Full Expense Projection in ₹ + Scholarship Timelines</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex justify-between items-center text-slate-500 font-semibold mb-1">
                      <span>STEP 3: Visa Readiness</span>
                      <span className="text-blue-600 font-bold">Embassy Clear</span>
                    </div>
                    <p className="text-slate-800 font-bold">Custom Document &amp; Financial Proof Checklist</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Tailored in your 1-on-1 consultation</span>
                  <span className="font-bold text-[#0B3765]">Zero Fee</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
