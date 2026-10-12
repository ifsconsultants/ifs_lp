import React from 'react';

export default function ServicesGrid({ onOpenModal }) {
  const services = [
    {
      step: "01 • Discovery",
      title: "Profile Evaluation",
      desc: "Comprehensive analysis of your academic GPA, backlogs, technical projects, and career history.",
      benefit: "understand your realistic university admission bandwidth before spending money on random applications."
    },
    {
      step: "02 • Strategy",
      title: "Country Selection",
      desc: "Objective comparison of post-study work rights, immigration rules, living expenses, and climate across 22 countries.",
      benefit: "choose a destination that directly matches your long-term residency and global career goals."
    },
    {
      step: "03 • Academics",
      title: "Course & Career Mapping",
      desc: "Matching your graduation background with market-demanded master's specializations and STEM programs.",
      benefit: "don't graduate into a saturated field and instead secure high-demand employability abroad."
    },
    {
      step: "04 • Targeting",
      title: "University Shortlisting",
      desc: "Curating a strategic blend of Dream, Reach, and Safe institutions based on your test scores and budget.",
      benefit: "don't waste thousands in application fees applying to universities unlikely to offer admission."
    },
    {
      step: "05 • Finance",
      title: "Scholarship & Funding Guidance",
      desc: "Identifying merit-based, early-bird, and departmental scholarships and preparing targeted motivation essays.",
      benefit: "maximize opportunities to reduce your overall tuition fees and family financial burden."
    },
    {
      step: "06 • Testing",
      title: "IELTS / Test Guidance",
      desc: "Personalized advice on required exam scores, waiver options (MOI), and mock testing support.",
      benefit: "avoid taking expensive tests you don't need or retaking exams due to avoidable preparation mistakes."
    },
    {
      step: "07 • Documentation",
      title: "SOP & Application Support",
      desc: "Professional structure, proofreading, and editing support for Statements of Purpose, CVs, and LORs.",
      benefit: "submit authentic, compelling applications that stand out in competitive admission rounds."
    },
    {
      step: "08 • Funding",
      title: "Education Loan Assistance",
      desc: "End-to-end guidance for securing competitive collateral and non-collateral study loans via trusted banking partners.",
      benefit: "obtain fast loan sanctions and save up to ₹60,000 on processing costs."
    },
    {
      step: "09 • Compliance",
      title: "Visa Preparation",
      desc: "Meticulous financial dossier checks, visa file compilation, and 1-on-1 mock interview coaching.",
      benefit: "face your visa appointment with complete clarity, proper funds documentation, and zero nervousness."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0B3765] bg-white border border-slate-200 px-3 py-1 rounded-full mb-3 shadow-xs">
            End-to-End Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3765] tracking-tight font-heading">
            Everything You Need to Move From Confusion to a Clear Study Abroad Plan
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From profile evaluation to your first day on campus, every service is designed with a specific outcome in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{s.step}</div>
                <h3 className="text-lg font-bold text-[#0B3765] mb-2 font-heading">{s.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{s.desc}</p>
              </div>
              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-xs font-semibold text-[#0B3765]">
                &rarr; <span className="font-bold">so that you</span> {s.benefit}
              </div>
            </div>
          ))}

          {/* Service 10 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft flex flex-col justify-between md:col-span-2 lg:col-span-3">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">10 • Relocation</div>
                <h3 className="text-lg font-bold text-[#0B3765] mb-1 font-heading">Pre-Departure Guidance</h3>
                <p className="text-sm text-slate-600 max-w-2xl">
                  Comprehensive orientation on student forex cards, SIM cards, international student health insurance, luggage regulations, and airport transition.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-900 whitespace-nowrap">
                &rarr; so that you land in your new country prepared, safe, and stress-free.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={onOpenModal} 
            className="bg-[#F9B900] text-[#0B3765] hover:bg-[#e5aa00] py-4 px-8 rounded-xl text-base font-extrabold inline-flex items-center gap-2 shadow-lg cursor-pointer"
          >
            <span>Book My FREE Study Abroad Consultation</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
