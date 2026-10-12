import React, { useState } from 'react';

export default function FAQ({ onOpenModal }) {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "1. Is the consultation really free?",
      a: "Yes, completely free. There are no consultation fees, no upfront charges, and zero obligation to register. We believe in providing clear, honest profile assessment first so you can make an informed decision without financial pressure."
    },
    {
      q: "2. I don't know which country to choose. Can you help?",
      a: "That is exactly what our initial consultation solves. We compare countries like the US, UK, Germany, Ireland, and Canada against your academic profile, post-study work visa preferences, and budget to help you identify the best fit."
    },
    {
      q: "3. My grades are not excellent. Do I still have options?",
      a: "Yes. Different universities and destinations have varying admission criteria. Relevant work experience, strong SOPs, backlogs justification, and targeted university shortlisting open up quality options across Europe, North America, and Australia."
    },
    {
      q: "4. I'm already working. Is studying abroad suitable for me?",
      a: "Yes! Work experience is a major asset for master's programs in Europe, North America, and Australia. We help you highlight your professional accomplishments for admissions, scholarship eligibility, and visa officer evaluations."
    },
    {
      q: "5. Do I need IELTS?",
      a: "It depends on the country and university. While many require IELTS, PTE, or TOEFL, certain institutions accept Medium of Instruction (MOI) certificates from Indian universities or Duolingo English Tests (DET). In our session, we identify waiver opportunities based on your target universities."
    },
    {
      q: "6. Can I get scholarships?",
      a: "Eligible students can qualify for merit-based, early-application, and departmental scholarships ranging from partial tuition discounts to substantial fee waivers. We guide you on specific eligibility criteria and exact submission deadlines."
    },
    {
      q: "7. Can I get an education loan?",
      a: "Yes. IFS assists students in exploring both collateral and non-collateral education loan options with banking and NBFC partners, helping you save up to ₹60,000 on applicable processing costs and legal evaluation charges."
    },
    {
      q: "8. Do you guarantee admission?",
      a: "No ethical consultant can guarantee university admission. Final admission decisions are made by universities. IFS helps students create a stronger, better-informed application strategy.",
      highlight: true
    },
    {
      q: "9. Do you guarantee a visa?",
      a: "Visa decisions are made by the relevant immigration authorities. IFS can help students understand requirements, prepare documentation and practise for interviews where applicable.",
      highlight: true
    },
    {
      q: "10. What countries does IFS help with?",
      a: "IFS currently helps students explore study opportunities across 22 countries: USA, United Kingdom, Canada, Australia, Germany, Ireland, New Zealand, France, Singapore, Sweden, Netherlands, Italy, Dubai/UAE, Switzerland, Poland, Spain, Hungary, Finland, Lithuania, Latvia, Malaysia, and Cyprus."
    }
  ];

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0B3765] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3 shadow-xs">
            Clear Answers &bull; Zero Misleading Promises
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3765] tracking-tight font-heading">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Everything you need to know about our free consultation and overseas guidance.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`rounded-2xl border transition shadow-xs ${
                  faq.highlight ? 'border-[#0B3765]/30 bg-blue-50/30' : 'border-slate-200 bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg font-heading cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className={`text-slate-400 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <p className="text-sm sm:text-base text-slate-700 font-semibold mb-3">
            Have a specific profile question not listed above?
          </p>
          <button 
            onClick={onOpenModal} 
            className="bg-[#F9B900] text-[#0B3765] hover:bg-[#e5aa00] py-3 px-6 rounded-xl text-sm font-bold inline-flex items-center gap-2 shadow-sm cursor-pointer"
          >
            <span>Ask in Your Free Consultation</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
