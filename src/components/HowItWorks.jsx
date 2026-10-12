import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Book Your Free Consultation",
      desc: "Submit the 60-second consultation form or message our WhatsApp helpline. We’ll schedule your 1-on-1 session at your preferred time.",
      tag: "Takes less than 1 minute"
    },
    {
      num: "02",
      title: "Get Your Profile Evaluated",
      desc: "A senior counsellor analyzes your marks, backlog history, work experience, test preparedness, and family budget to establish your baseline.",
      tag: "Honest, realistic eligibility assessment"
    },
    {
      num: "03",
      title: "Shortlist Countries, Courses & Universities",
      desc: "Compare destinations across 22 countries. Filter programs by tuition cost, post-study work visa rights, and long-term career outcomes.",
      tag: "Curated Dream, Reach & Safe tiers"
    },
    {
      num: "04",
      title: "Build Your Admission + Visa Roadmap",
      desc: "Receive a clear chronological timeline for test preparation, SOP/LOR drafting, loan sanctions, university applications, and visa documentation.",
      tag: "Ready-to-execute roadmap",
      highlight: true
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0B3765] bg-white border border-slate-200 px-3 py-1 rounded-full mb-3 shadow-xs">
            Clear, Structured Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3765] tracking-tight font-heading">
            How It Works
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Four simple steps from your first inquiry to a confident study abroad roadmap.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-blue-200 via-amber-200 to-blue-200 -translate-y-8 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl p-6 border shadow-soft flex flex-col justify-between ${
                  step.highlight ? 'border-2 border-amber-300 bg-amber-50/20' : 'border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className={`w-12 h-12 rounded-2xl font-black text-lg flex items-center justify-center shadow-md ${
                      step.highlight ? 'bg-[#F9B900] text-[#0B3765]' : 'bg-[#0B3765] text-[#F9B900]'
                    }`}>
                      {step.num}
                    </span>
                    <span className={`text-xs font-bold uppercase tracking-wider ${
                      step.highlight ? 'text-amber-700' : 'text-slate-400'
                    }`}>
                      Step {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </div>
                <div className={`mt-5 pt-3 border-t border-slate-100 text-xs font-medium ${
                  step.highlight ? 'text-[#0B3765] font-bold' : 'text-slate-500'
                }`}>
                  {step.tag}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
