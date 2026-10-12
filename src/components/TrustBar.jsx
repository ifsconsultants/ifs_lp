import React from 'react';

export default function TrustBar() {
  const destinations = [
    { name: 'USA', flag: '🇺🇸' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Ireland', flag: '🇮🇪' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Netherlands', flag: '🇳🇱' },
    { name: 'Singapore', flag: '🇸🇬' },
    { name: 'New Zealand', flag: '🇳🇿' },
  ];

  return (
    <section className="bg-white py-6 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-extrabold text-[#0B3765] flex-shrink-0">
            <svg className="w-4 h-4 text-[#F9B900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Exploring 22 Study Destinations:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 text-xs font-semibold text-slate-700">
            {destinations.map((d) => (
              <span key={d.name} className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 transition">
                {d.flag} {d.name}
              </span>
            ))}
            <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200 font-bold">
              + 12 More Countries
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
