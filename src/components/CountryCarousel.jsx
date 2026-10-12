import React, { useState, useEffect, useRef } from 'react';

export const COUNTRIES_DATA = [
  {
    id: 'usa',
    name: 'USA',
    fullName: 'United States of America',
    flag: '🇺🇸',
    region: 'north-america',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=800&q=80',
    workVisa: 'Up to 3 Yrs OPT (STEM)',
    tuition: '₹22L – ₹42L / year',
    topCourses: 'MS Computer Science, AI, MBA, Data Analytics',
    badge: 'World #1 STEM Hub'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    fullName: 'United Kingdom',
    flag: '🇬🇧',
    region: 'europe',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    workVisa: '2 Yrs Graduate Route',
    tuition: '₹18L – ₹32L / year',
    topCourses: '1-Year Master\'s, Finance, Business Analytics, Computing',
    badge: '1-Year Fast Master\'s'
  },
  {
    id: 'germany',
    name: 'Germany',
    fullName: 'Federal Republic of Germany',
    flag: '🇩🇪',
    region: 'europe',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
    workVisa: '18 Months Jobseeker + EU Blue Card',
    tuition: 'Free / Low Public Tuition',
    topCourses: 'Automotive, Mechanical, Data Engg, CS',
    badge: 'Zero / Low Tuition'
  },
  {
    id: 'canada',
    name: 'Canada',
    fullName: 'Canada',
    flag: '🇨🇦',
    region: 'north-america',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
    workVisa: 'Up to 3 Yrs PGWP',
    tuition: '₹18L – ₹30L / year',
    topCourses: 'Software Engg, Healthcare, Project Mgmt, MBA',
    badge: 'High Quality of Life'
  },
  {
    id: 'ireland',
    name: 'Ireland',
    fullName: 'Republic of Ireland',
    flag: '🇮🇪',
    region: 'europe',
    image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=800&q=80',
    workVisa: '2 Yrs Post-Study Work Permit',
    tuition: '₹16L – ₹28L / year',
    topCourses: 'Cloud Computing, FinTech, Data Science, Pharma',
    badge: 'European Silicon Valley'
  },
  {
    id: 'australia',
    name: 'Australia',
    fullName: 'Commonwealth of Australia',
    flag: '🇦🇺',
    region: 'oceania',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
    workVisa: '2 – 4 Yrs Post-Study Work Visa',
    tuition: '₹22L – ₹38L / year',
    topCourses: 'Cyber Security, IT, Civil Engg, Accounting',
    badge: 'Top Global Salaries'
  },
  {
    id: 'france',
    name: 'France',
    fullName: 'French Republic',
    flag: '🇫🇷',
    region: 'europe',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    workVisa: '2 Yrs APS + 5-Yr Schengen Alumni Visa',
    tuition: '₹12L – ₹24L / year',
    topCourses: 'MIM, Luxury Brand Mgmt, Aerospace, Data',
    badge: 'Eiffel Scholarships'
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    fullName: 'New Zealand',
    flag: '🇳🇿',
    region: 'oceania',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    workVisa: 'Up to 3 Yrs Post-Study Work',
    tuition: '₹18L – ₹28L / year',
    topCourses: 'AgriTech, Environmental Science, Software',
    badge: 'Safe & Scenic'
  },
  {
    id: 'singapore',
    name: 'Singapore',
    fullName: 'Republic of Singapore',
    flag: '🇸🇬',
    region: 'asia',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    workVisa: 'Asian Financial HQ Opportunities',
    tuition: '₹20L – ₹35L / year',
    topCourses: 'FinTech, Supply Chain, AI, Global MBA',
    badge: 'Asia\'s Tech Capital'
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    fullName: 'Kingdom of the Netherlands',
    flag: '🇳🇱',
    region: 'europe',
    image: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=80',
    workVisa: '1-Yr "Zoekjaar" Orientation Visa',
    tuition: '₹15L – ₹25L / year',
    topCourses: 'High-Tech Systems, Water Tech, Logistics, CS',
    badge: '95% English Speaking'
  },
  {
    id: 'sweden',
    name: 'Sweden',
    fullName: 'Kingdom of Sweden',
    flag: '🇸🇪',
    region: 'europe',
    image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80',
    workVisa: '1 Year Job Search Extension',
    tuition: '₹14L – ₹24L / year',
    topCourses: 'Sustainability, Telecom, Software Engineering',
    badge: 'Innovation Leader'
  },
  {
    id: 'italy',
    name: 'Italy',
    fullName: 'Italian Republic',
    flag: '🇮🇹',
    region: 'europe',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
    workVisa: '1 Year Post-Study Stay',
    tuition: '₹6L – ₹14L / year',
    topCourses: 'Architecture, Automotive, Fashion, Engg',
    badge: 'DSU Scholarships'
  },
  {
    id: 'dubai',
    name: 'Dubai (UAE)',
    fullName: 'United Arab Emirates',
    flag: '🇦🇪',
    region: 'asia',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    workVisa: '5–10 Year Green & Golden Visas',
    tuition: '₹14L – ₹26L / year',
    topCourses: 'International Business, Hospitality, Finance, AI',
    badge: 'Tax-Free Career Hub'
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    fullName: 'Swiss Confederation',
    flag: '🇨🇭',
    region: 'europe',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    workVisa: '6 Months Job Search Permit',
    tuition: '₹18L – ₹36L / year',
    topCourses: 'Hospitality Management, Banking, Precision Engg',
    badge: 'Highest Starting Pay'
  },
  {
    id: 'poland',
    name: 'Poland',
    fullName: 'Republic of Poland',
    flag: '🇵🇱',
    region: 'europe',
    image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=800&q=80',
    workVisa: '9 Months Post-Graduation Extension',
    tuition: '₹6L – ₹12L / year',
    topCourses: 'IT & Software, Medicine, General Engg',
    badge: 'Central EU Tech Hub'
  },
  {
    id: 'spain',
    name: 'Spain',
    fullName: 'Kingdom of Spain',
    flag: '🇪🇸',
    region: 'europe',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80',
    workVisa: '1 Year Job Search Permit',
    tuition: '₹10L – ₹20L / year',
    topCourses: 'Top Ranked MBA, Renewable Energy, Tourism',
    badge: 'Top 10 B-Schools'
  },
  {
    id: 'hungary',
    name: 'Hungary',
    fullName: 'Hungary',
    flag: '🇭🇺',
    region: 'europe',
    image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80',
    workVisa: '9 Months Study-to-Work Permit',
    tuition: '₹5L – ₹10L / year',
    topCourses: 'Stipendium Hungaricum, Medicine, Engineering',
    badge: 'Full Scholarship Scope'
  },
  {
    id: 'finland',
    name: 'Finland',
    fullName: 'Republic of Finland',
    flag: '🇫🇮',
    region: 'europe',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80',
    workVisa: '2 Yrs Post-Graduation Work Permit',
    tuition: '₹10L – ₹18L / year',
    topCourses: 'CleanTech, AI, Software, Gaming',
    badge: '#1 Happiest Country'
  },
  {
    id: 'lithuania',
    name: 'Lithuania',
    fullName: 'Republic of Lithuania',
    flag: '🇱🇹',
    region: 'europe',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
    workVisa: '15 Months Jobseeker Permit',
    tuition: '₹5L – ₹11L / year',
    topCourses: 'FinTech, Cyber Security, Biotech',
    badge: 'EU FinTech Hub'
  },
  {
    id: 'latvia',
    name: 'Latvia',
    fullName: 'Republic of Latvia',
    flag: '🇱🇻',
    region: 'europe',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80',
    workVisa: '9 Months Job Search in Schengen',
    tuition: '₹4.5L – ₹9L / year',
    topCourses: 'Aviation, IT, Telecommunications',
    badge: 'Low Living Expenses'
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    fullName: 'Malaysia',
    flag: '🇲🇾',
    region: 'asia',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80',
    workVisa: 'UK/Australia Branch Campuses',
    tuition: '₹6L – ₹12L / year',
    topCourses: 'Twin Degree Programs, Engg, Business',
    badge: '50% Lower Tuition'
  },
  {
    id: 'cyprus',
    name: 'Cyprus',
    fullName: 'Republic of Cyprus',
    flag: '🇨🇾',
    region: 'europe',
    image: 'https://images.unsplash.com/photo-1580974852861-c381510bc98a?auto=format&fit=crop&w=800&q=80',
    workVisa: 'European Island Economy',
    tuition: '₹5L – ₹10L / year',
    topCourses: 'Hospitality & Tourism, MBA, IT',
    badge: 'Fast Visa Processing'
  }
];

export default function CountryCarousel({ onOpenModal }) {
  const [activeRegion, setActiveRegion] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const filteredCountries = activeRegion === 'all' 
    ? COUNTRIES_DATA 
    : COUNTRIES_DATA.filter(c => c.region === activeRegion);

  const total = filteredCountries.length;

  // Auto-play interval
  useEffect(() => {
    if (isAutoPlaying && total > 0) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % total);
      }, 3500);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handleCountrySelect = (countryName) => {
    if (onOpenModal) {
      onOpenModal(countryName);
    }
  };

  // Helper to compute 3D curved transformation for card at relative offset
  const getCardStyle = (offset) => {
    // Distance from center
    const absOffset = Math.abs(offset);
    
    // Scale down cards as they move away from center
    const scale = Math.max(0.72, 1 - absOffset * 0.12);
    
    // 3D rotation angle in Y axis to form a curved cylindrical wall
    const rotateY = offset * -18;
    
    // Translate in X to space cards along the horizontal arc
    const translateX = offset * 260;
    
    // Translate in Z for depth (push back sides)
    const translateZ = -Math.pow(absOffset, 1.4) * 90;
    
    // Opacity fade for distant cards
    const opacity = absOffset > 3 ? 0 : Math.max(0.2, 1 - absOffset * 0.28);
    const zIndex = 30 - absOffset * 5;

    return {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: '-215px',
      marginLeft: '-160px',
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
      pointerEvents: absOffset > 2 ? 'none' : 'auto',
      transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
    };
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden relative" id="country-explorer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-[#0B3765] bg-amber-100 border border-amber-300 px-3.5 py-1 rounded-full mb-3 shadow-xs">
            EXPLORE GLOBAL DESTINATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B3765] tracking-tight font-heading">
            Curious What Country Fits Your Profile?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            IFS Consultants guides students across <strong>22 study destinations</strong>. Explore post-study work rights, living costs, and top specializations.
          </p>

          {/* Region Filter Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All 22 Countries' },
              { id: 'europe', label: 'Europe (14)' },
              { id: 'north-america', label: 'North America (2)' },
              { id: 'oceania', label: 'Australia & NZ (2)' },
              { id: 'asia', label: 'Asia & Gulf (4)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveRegion(tab.id);
                  setCurrentIndex(0);
                }}
                className={`py-2 px-4 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeRegion === tab.id
                    ? 'bg-[#0B3765] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Perspective Curved Carousel Container */}
        <div 
          className="relative py-12 my-4 select-none min-h-[460px] sm:min-h-[520px] flex items-center justify-center"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          style={{ perspective: '1200px' }}
        >
          <div className="relative w-full h-[420px] sm:h-[460px] flex items-center justify-center">
            {filteredCountries.map((country, idx) => {
              // Calculate circular offset
              let offset = idx - currentIndex;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              // Only render cards within reasonable distance to optimize performance
              if (Math.abs(offset) > 3) return null;

              const isCenter = offset === 0;

              return (
                <div
                  key={country.id}
                  onClick={() => {
                    if (isCenter) {
                      handleCountrySelect(country.name);
                    } else {
                      setCurrentIndex(idx);
                    }
                  }}
                  className={`absolute w-[280px] sm:w-[320px] h-[390px] sm:h-[430px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer bg-white border-2 transition-all ${
                    isCenter ? 'border-[#F9B900] ring-4 ring-amber-400/20' : 'border-slate-200'
                  }`}
                  style={getCardStyle(offset)}
                >
                  {/* Card Background Image with Overlay */}
                  <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-900">
                    <img 
                      src={country.image} 
                      alt={country.name} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-2xl drop-shadow-md">{country.flag}</span>
                      <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[#0B3765] shadow-xs">
                        {country.badge}
                      </span>
                    </div>

                    {/* Country Title */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-xl sm:text-2xl font-black text-white font-heading tracking-tight drop-shadow-md">
                        {country.name}
                      </h3>
                      <p className="text-[11px] text-slate-300 font-medium">
                        {country.fullName}
                      </p>
                    </div>
                  </div>

                  {/* Card Body Info */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between h-[200px] sm:h-[220px] text-xs">
                    <div className="space-y-2.5">
                      {/* Work Visa Badge */}
                      <div className="p-2 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-between">
                        <span className="text-slate-500 font-semibold">Post-Study Visa:</span>
                        <span className="font-extrabold text-[#0B3765]">{country.workVisa}</span>
                      </div>

                      {/* Tuition Projection */}
                      <div className="flex items-center justify-between px-1">
                        <span className="text-slate-500 font-medium">Avg Tuition:</span>
                        <span className="font-bold text-slate-800">{country.tuition}</span>
                      </div>

                      {/* Top Courses */}
                      <div className="px-1">
                        <span className="text-slate-400 font-medium block mb-0.5">Popular Courses:</span>
                        <span className="text-slate-700 font-semibold line-clamp-2 leading-relaxed">
                          {country.topCourses}
                        </span>
                      </div>
                    </div>

                    {/* Explore CTA Button on Card */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCountrySelect(country.name);
                      }}
                      className="mt-3 w-full py-2.5 px-3 rounded-xl bg-[#F9B900] hover:bg-[#e5aa00] text-[#0B3765] font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
                    >
                      <span>Explore Options in {country.name}</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prev / Next Carousel Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[#0B3765] shadow-xl flex items-center justify-center hover:bg-[#0B3765] hover:text-white transition cursor-pointer"
            aria-label="Previous Country"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[#0B3765] shadow-xl flex items-center justify-center hover:bg-[#0B3765] hover:text-white transition cursor-pointer"
            aria-label="Next Country"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 py-4">
          {filteredCountries.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-[#F9B900]' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* 4 Steps Indicators Matching User's Reference Layout */}
        <div className="mt-10 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-xs font-black text-amber-600 uppercase tracking-widest block mb-1">#01</span>
            <h4 className="text-sm font-bold text-[#0B3765] mb-0.5">Country Matching</h4>
            <p className="text-[11px] text-slate-500">Based on budget &amp; post-study visa goals</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-xs font-black text-amber-600 uppercase tracking-widest block mb-1">#02</span>
            <h4 className="text-sm font-bold text-[#0B3765] mb-0.5">University Screening</h4>
            <p className="text-[11px] text-slate-500">Dream, Reach &amp; Safe tiers</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-xs font-black text-amber-600 uppercase tracking-widest block mb-1">#03</span>
            <h4 className="text-sm font-bold text-[#0B3765] mb-0.5">Test &amp; Waiver Check</h4>
            <p className="text-[11px] text-slate-500">IELTS, PTE, GRE or MOI waivers</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-xs font-black text-amber-600 uppercase tracking-widest block mb-1">#04</span>
            <h4 className="text-sm font-bold text-[#0B3765] mb-0.5">Visa &amp; Travel Prep</h4>
            <p className="text-[11px] text-slate-500">End-to-end embassy file clearance</p>
          </div>
        </div>

      </div>
    </section>
  );
}
