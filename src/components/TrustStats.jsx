import React from 'react';

export default function TrustStats() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="why-ifs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0B3765] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3 shadow-xs">
            Proven Track Record Since 1999
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3765] tracking-tight font-heading">
            Why Students Choose IFS Consultants
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Student-first guidance focused on your profile, career goals and budget. Support from initial profile evaluation through application, visa preparation and pre-departure planning.
          </p>
        </div>

        {/* 4 Prominent Trust Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-soft">
            <div className="text-4xl sm:text-5xl font-black text-[#0B3765] font-heading mb-2">25+</div>
            <div className="text-sm sm:text-base font-bold text-slate-800">Years of Experience</div>
            <p className="text-xs text-slate-500 mt-2">Guiding Indian aspirants continuously since 1999.</p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-soft">
            <div className="text-4xl sm:text-5xl font-black text-[#F9B900] font-heading mb-2">15,000+</div>
            <div className="text-sm sm:text-base font-bold text-slate-800">Student Journeys Guided</div>
            <p className="text-xs text-slate-500 mt-2">Personalised roadmaps built for diverse profiles.</p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-soft">
            <div className="text-4xl sm:text-5xl font-black text-[#0B3765] font-heading mb-2">22</div>
            <div className="text-sm sm:text-base font-bold text-slate-800">Study Destinations</div>
            <p className="text-xs text-slate-500 mt-2">Deep expertise across major and emerging study hubs.</p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-soft">
            <div className="text-3xl sm:text-4xl font-black text-emerald-700 font-heading mb-2">End-to-End</div>
            <div className="text-sm sm:text-base font-bold text-slate-800">Comprehensive Support</div>
            <p className="text-xs text-slate-500 mt-2">Profile shortlisting to post-arrival orientation.</p>
          </div>
        </div>

        {/* Trust Pillars */}
        <div className="mt-12 p-8 rounded-3xl bg-[#0B3765] text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#F9B900] flex items-center justify-center font-bold mb-3">01</div>
              <h3 className="text-base font-bold text-white mb-1">Student-First Ethics</h3>
              <p className="text-xs sm:text-sm text-slate-300">We do not push universities to hit quotas. Every recommendation is chosen strictly for your career fit and budget.</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#F9B900] flex items-center justify-center font-bold mb-3">02</div>
              <h3 className="text-base font-bold text-white mb-1">Transparent Realities</h3>
              <p className="text-xs sm:text-sm text-slate-300">We openly explain cost of living, visa timelines, and job market realities so your family can plan with confidence.</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#F9B900] flex items-center justify-center font-bold mb-3">03</div>
              <h3 className="text-base font-bold text-white mb-1">Direct Mentorship</h3>
              <p className="text-xs sm:text-sm text-slate-300">You work directly with experienced counsellors, including senior mentors with decades of overseas education expertise.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
