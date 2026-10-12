import React from 'react';

export default function TestimonialSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full mb-3 shadow-xs">
            Student Voices
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3765] tracking-tight font-heading">
            Real Guidance. Real Student Journeys.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Hear from students who trusted IFS to navigate their overseas education decisions.
          </p>
        </div>

        {/* Verified Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl p-8 sm:p-12 bg-white border-2 border-[#0B3765]/15 shadow-xl relative">
            <svg className="w-12 h-12 text-[#F9B900]/40 absolute top-6 right-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>

            <blockquote className="text-lg sm:text-2xl font-bold text-[#0B3765] leading-relaxed mb-6 font-heading">
              "Mohan sir guided me like a mentor through every step — from SOPs to visa. I couldn't have done this without him!"
            </blockquote>

            <div className="flex items-center justify-between pt-6 border-t border-slate-100 flex-wrap gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#0B3765] text-[#F9B900] flex items-center justify-center font-black text-base shadow-sm">
                  JS
                </div>
                <div>
                  <p className="text-base font-extrabold text-slate-900">Jyoshna SS</p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1 text-[#0B3765] font-bold">
                      🇩🇪 Studying in Germany
                    </span>
                    <span>&bull;</span>
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      Verified IFS Alumnus
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700">
                Personalised Mentorship
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-slate-500 mt-6">
            *We showcase only genuine, verified feedback from enrolled IFS students.
          </p>
        </div>

      </div>
    </section>
  );
}
