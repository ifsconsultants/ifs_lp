import React from 'react';

export default function ProblemSection({ onOpenModal }) {
  const painPoints = [
    {
      title: "Which country is right for me?",
      desc: "Each destination has different post-study work rules, permanent residency policies, language requirements, and job markets. How do you pick without second-guessing?",
      solution: "Objective country-by-country career alignment"
    },
    {
      title: "Which course gives me better career opportunities?",
      desc: "A trendy course title might not have STEM designation or high employer demand. Will this specific curriculum actually lead to high-income employment?",
      solution: "Industry employability and STEM syllabus mapping"
    },
    {
      title: "Can I afford studying abroad?",
      desc: "Tuition is only half the expense. Living costs, blocked accounts, health insurance, and currency conversion can create stressful financial surprises.",
      solution: "Transparent total-cost-of-education modeling in INR"
    },
    {
      title: "Can I get a scholarship?",
      desc: "Thousands of students miss university scholarships simply because they applied too late or did not know about departmental and early-bird funding criteria.",
      solution: "Early scholarship matching before deadlines lapse"
    },
    {
      title: "Do I need IELTS, GRE, PTE or another test?",
      desc: "Students waste months studying for tests they might not need, or take the wrong test that their preferred university or embassy rejects.",
      solution: "Test waiver assessment & score target planning"
    },
    {
      title: "What if my visa gets rejected?",
      desc: "The single biggest fear of Indian families. Incomplete documentation, unclear fund trails, and generic SOPs lead to heartbreaking visa refusals.",
      solution: "Multi-point document review & mock visa drills"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden" id="problem-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/80 px-3 py-1 rounded-full mb-3">
            The Real Challenge
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B3765] tracking-tight font-heading">
            Too Many Countries. Too Many Universities.<br className="hidden sm:inline" />
            Too Much Conflicting Advice?
          </h2>
          <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-slate-700 font-medium">
              "The problem isn't that you don't have enough information.<br />
              <span className="font-bold text-[#0B3765]">You have too much information — without knowing what actually applies to your profile."</span>
            </p>
          </div>
        </div>

        {/* 6 Pain Points Cards + 7th Feature Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {painPoints.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-[#0B3765]">
                IFS solution: {item.solution}
              </div>
            </div>
          ))}

          {/* Pain Point 7: Wide Card */}
          <div className="p-6 rounded-2xl bg-white border-2 border-[#0B3765]/20 shadow-soft md:col-span-2 lg:col-span-3 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 font-heading">Is this university actually worth the investment?</h3>
                <p className="text-sm text-slate-600 max-w-2xl">
                  Will spending ₹25L–₹50L give you the career ROI and global work rights you expect, or leave you burdened with debt? You need real data, not sales pitches.
                </p>
              </div>
            </div>
            <button onClick={onOpenModal} className="bg-[#F9B900] text-[#0B3765] hover:bg-[#e5aa00] py-3 px-6 rounded-xl text-sm font-bold whitespace-nowrap shadow-md flex-shrink-0 cursor-pointer">
              Evaluate My Options Free
            </button>
          </div>
        </div>

        {/* Transition */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-base sm:text-lg font-semibold text-slate-800">
            "Your study abroad decision should not be based on YouTube videos, rankings or what worked for somebody else."
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Every student's GPA, work history, family budget, and career vision is unique. What sent your friend to Canada might be the wrong strategy for your master's.
          </p>
        </div>

      </div>
    </section>
  );
}
