/**
 * IFS Consultants Landing Page Scripts
 * Handles lead capture validation, modal controls, FAQ toggling,
 * mobile navigation, and interactive 3D Perspective Country Carousel for 22 destinations.
 */

// 22 Global Study Destinations Data
const COUNTRIES_DATA = [
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

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initBookingModal();
  initFormHandling();
  initFaqAccordion();
  initCountry3DCarousel();
  initMobileStickyBar();
  initPhoneCopy();
});

/* ----------------------------------------------------
 * 1. Mobile Navigation
 * ---------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const menu = document.getElementById('mobile-menu');
  const menuLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !menu) return;

  const openMenu = () => {
    menu.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    toggleBtn.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    menu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ----------------------------------------------------
 * 2. Consultation Booking Modal Controller
 * ---------------------------------------------------- */
function openBookingModal(preselectedCountry = '') {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('overflow-hidden');

  if (preselectedCountry) {
    const countrySelect = modal.querySelector('[name="preferredCountry"]');
    if (countrySelect) {
      for (let i = 0; i < countrySelect.options.length; i++) {
        const optVal = countrySelect.options[i].value.toLowerCase();
        const targetVal = preselectedCountry.toLowerCase();
        if (optVal.includes(targetVal) || targetVal.includes(optVal)) {
          countrySelect.selectedIndex = i;
          break;
        }
      }
    }
  }

  const firstInput = modal.querySelector('input:not([type="hidden"])');
  if (firstInput) setTimeout(() => firstInput.focus(), 100);
}

function initBookingModal() {
  const modal = document.getElementById('booking-modal');
  const openButtons = document.querySelectorAll('[data-open-modal]');
  const closeButtons = document.querySelectorAll('[data-close-modal]');

  if (!modal) return;

  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  };

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const country = btn.dataset.country || '';
      openBookingModal(country);
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
  });
}

/* ----------------------------------------------------
 * 3. Lead Form Handling & Live Validation
 * ---------------------------------------------------- */
function initFormHandling() {
  const forms = [
    document.getElementById('lead-form-inline'),
    document.getElementById('lead-form-modal')
  ].filter(Boolean);

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('[name="fullName"]');
      const phoneInput = form.querySelector('[name="phone"]');
      const emailInput = form.querySelector('[name="email"]');
      const countryInput = form.querySelector('[name="preferredCountry"]');
      const courseInput = form.querySelector('[name="preferredCourse"]');
      const submitBtn = form.querySelector('button[type="submit"]');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        showFieldError(nameInput, 'Please enter your full name');
        isValid = false;
      } else {
        clearFieldError(nameInput);
      }

      // Validate Phone (Indian 10-digit format)
      const cleanPhone = phoneInput.value.replace(/[^0-9]/g, '');
      if (cleanPhone.length < 10) {
        showFieldError(phoneInput, 'Please enter a valid 10-digit mobile number');
        isValid = false;
      } else {
        clearFieldError(phoneInput);
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        showFieldError(emailInput, 'Please enter a valid email address');
        isValid = false;
      } else {
        clearFieldError(emailInput);
      }

      if (!isValid) return;

      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-current inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Reserving Your Consultation Slot...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        const studentName = encodeURIComponent(nameInput.value.trim());
        const studentCountry = encodeURIComponent(countryInput ? countryInput.value : 'Overseas');
        const studentCourse = encodeURIComponent(courseInput ? courseInput.value : 'Masters');
        const waUrl = `https://wa.me/917036319256?text=Hi%20IFS%20Consultants,%20I%20just%20submitted%20my%20enquiry%20for%20a%20FREE%20Consultation.%20My%20name%20is%20${studentName},%20interested%20in%20${studentCourse}%20in%20${studentCountry}.`;

        form.innerHTML = `
          <div class="py-8 px-6 text-center animate-fade-in">
            <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h4 class="text-2xl font-bold text-[#0B3765] mb-2 font-heading">Consultation Request Confirmed!</h4>
            <p class="text-slate-600 mb-6 text-sm sm:text-base max-w-md mx-auto">
              Thank you, <strong>${escapeHtml(nameInput.value.trim())}</strong>. An IFS senior overseas education counsellor will contact you shortly on <strong>${escapeHtml(phoneInput.value.trim())}</strong>.
            </p>
            <div class="p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6 text-left max-w-md mx-auto">
              <p class="text-xs font-semibold text-amber-900 uppercase tracking-wider mb-1">Want an instant answer?</p>
              <p class="text-xs text-amber-800">You can also connect directly with counsellor Mohan sir right now via WhatsApp.</p>
            </div>
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 w-full max-w-md py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition shadow-md">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
              Chat on WhatsApp Now
            </a>
          </div>
        `;

        showToast("Consultation booked! We will call you within 24 hours.");
      }, 750);
    });
  });

  function showFieldError(input, message) {
    input.classList.add('border-red-500', 'bg-red-50/50');
    let errorElem = input.parentElement.querySelector('.field-error-msg');
    if (!errorElem) {
      errorElem = document.createElement('p');
      errorElem.className = 'field-error-msg text-red-600 text-xs mt-1 font-medium';
      input.parentElement.appendChild(errorElem);
    }
    errorElem.textContent = message;
  }

  function clearFieldError(input) {
    input.classList.remove('border-red-500', 'bg-red-50/50');
    const errorElem = input.parentElement.querySelector('.field-error-msg');
    if (errorElem) errorElem.remove();
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}

/* ----------------------------------------------------
 * 4. FAQ Accordion Behavior
 * ---------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const summary = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (!summary || !answer) return;

    summary.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('is-open')) {
          otherItem.classList.remove('is-open');
          const otherAns = otherItem.querySelector('.faq-answer');
          const otherIcon = otherItem.querySelector('.faq-icon');
          if (otherAns) otherAns.classList.add('hidden');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
      });

      if (isOpen) {
        item.classList.remove('is-open');
        answer.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
        summary.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('is-open');
        answer.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
        summary.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ----------------------------------------------------
 * 5. 3D Perspective Curved Country Carousel Engine
 * Inspired by user's reference cylindrical arch layout
 * ---------------------------------------------------- */
function initCountry3DCarousel() {
  const stage = document.getElementById('country-card-stage');
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');
  const dotsContainer = document.getElementById('carousel-dots-container');
  const regionTabs = document.querySelectorAll('.carousel-region-btn');
  const container = document.getElementById('country-carousel-container');

  if (!stage || !prevBtn || !nextBtn) return;

  let currentRegion = 'all';
  let activeList = COUNTRIES_DATA;
  let currentIndex = 0;
  let autoPlayTimer = null;
  let isHovered = false;

  function filterList(region) {
    currentRegion = region;
    activeList = region === 'all' 
      ? COUNTRIES_DATA 
      : COUNTRIES_DATA.filter(c => c.region === region);
    currentIndex = 0;
    renderCarousel();
  }

  function renderCarousel() {
    stage.innerHTML = '';
    const total = activeList.length;

    // Render Cards
    activeList.forEach((country, idx) => {
      let offset = idx - currentIndex;
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      // Card element
      const card = document.createElement('div');
      card.className = 'carousel-3d-card absolute w-[280px] sm:w-[320px] h-[390px] sm:h-[430px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer bg-white border-2 border-slate-200 select-none';
      card.dataset.index = idx;
      card.dataset.country = country.name;

      // Calculate 3D transformation values
      const absOffset = Math.abs(offset);
      const isCenter = offset === 0;

      if (isCenter) card.classList.add('is-center');

      // 3D Matrix Transform
      const scale = Math.max(0.72, 1 - absOffset * 0.12);
      const rotateY = offset * -18;
      const translateX = offset * 260;
      const translateZ = -Math.pow(absOffset, 1.4) * 90;
      const opacity = absOffset > 3 ? 0 : Math.max(0.15, 1 - absOffset * 0.28);
      const zIndex = 30 - absOffset * 5;

      card.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
      card.style.opacity = opacity;
      card.style.zIndex = zIndex;
      card.style.pointerEvents = absOffset > 2 ? 'none' : 'auto';

      card.innerHTML = `
        <div class="relative h-44 sm:h-48 overflow-hidden bg-slate-900 pointer-events-none">
          <img src="${country.image}" alt="${country.name}" class="w-full h-full object-cover" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span class="text-2xl drop-shadow-md">${country.flag}</span>
            <span class="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[#0B3765] shadow-xs">
              ${country.badge}
            </span>
          </div>
          <div class="absolute bottom-3 left-4 right-4">
            <h3 class="text-xl sm:text-2xl font-black text-white font-heading tracking-tight drop-shadow-md">
              ${country.name}
            </h3>
            <p class="text-[11px] text-slate-300 font-medium">${country.fullName}</p>
          </div>
        </div>
        <div class="p-4 sm:p-5 flex flex-col justify-between h-[200px] sm:h-[220px] text-xs">
          <div class="space-y-2">
            <div class="p-2 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-between">
              <span class="text-slate-500 font-semibold">Post-Study Visa:</span>
              <span class="font-extrabold text-[#0B3765]">${country.workVisa}</span>
            </div>
            <div class="flex items-center justify-between px-1">
              <span class="text-slate-500 font-medium">Avg Tuition:</span>
              <span class="font-bold text-slate-800">${country.tuition}</span>
            </div>
            <div class="px-1">
              <span class="text-slate-400 font-medium block mb-0.5">Popular Programs:</span>
              <span class="text-slate-700 font-semibold line-clamp-2 leading-relaxed">${country.topCourses}</span>
            </div>
          </div>
          <button type="button" class="explore-country-btn mt-3 w-full py-2.5 px-3 rounded-xl bg-[#F9B900] hover:bg-[#e5aa00] text-[#0B3765] font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm transition cursor-pointer">
            <span>Explore Options in ${country.name}</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (isCenter) {
          openBookingModal(country.name);
        } else {
          currentIndex = idx;
          updateCardTransforms();
        }
      });

      const cardBtn = card.querySelector('.explore-country-btn');
      if (cardBtn) {
        cardBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          openBookingModal(country.name);
        });
      }

      stage.appendChild(card);
    });

    renderDots();
  }

  function updateCardTransforms() {
    const cards = stage.querySelectorAll('.carousel-3d-card');
    const total = activeList.length;

    cards.forEach((card, idx) => {
      let offset = idx - currentIndex;
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      const absOffset = Math.abs(offset);
      const isCenter = offset === 0;

      if (isCenter) {
        card.classList.add('is-center');
      } else {
        card.classList.remove('is-center');
      }

      const scale = Math.max(0.72, 1 - absOffset * 0.12);
      const rotateY = offset * -18;
      const translateX = offset * 260;
      const translateZ = -Math.pow(absOffset, 1.4) * 90;
      const opacity = absOffset > 3 ? 0 : Math.max(0.15, 1 - absOffset * 0.28);
      const zIndex = 30 - absOffset * 5;

      card.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
      card.style.opacity = opacity;
      card.style.zIndex = zIndex;
      card.style.pointerEvents = absOffset > 2 ? 'none' : 'auto';
    });

    updateDots();
  }

  function renderDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    activeList.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `h-2 rounded-full transition-all cursor-pointer ${
        idx === currentIndex ? 'w-8 bg-[#F9B900]' : 'w-2 bg-slate-300 hover:bg-slate-400'
      }`;
      dot.setAttribute('aria-label', `Go to country ${idx + 1}`);
      dot.addEventListener('click', () => {
        currentIndex = idx;
        updateCardTransforms();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots() {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll('button');
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.className = 'h-2 w-8 bg-[#F9B900] rounded-full transition-all cursor-pointer';
      } else {
        dot.className = 'h-2 w-2 bg-slate-300 hover:bg-slate-400 rounded-full transition-all cursor-pointer';
      }
    });
  }

  function nextSlide() {
    if (activeList.length === 0) return;
    currentIndex = (currentIndex + 1) % activeList.length;
    updateCardTransforms();
  }

  function prevSlide() {
    if (activeList.length === 0) return;
    currentIndex = (currentIndex - 1 + activeList.length) % activeList.length;
    updateCardTransforms();
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Region Tab Switching
  regionTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      regionTabs.forEach(b => {
        b.classList.remove('bg-ifs-navy', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'text-slate-700', 'hover:bg-slate-100');
      });
      btn.classList.add('bg-ifs-navy', 'text-white', 'shadow-md');
      btn.classList.remove('bg-white', 'text-slate-700', 'hover:bg-slate-100');
      filterList(btn.dataset.region);
    });
  });

  // Auto-play timer
  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(() => {
      if (!isHovered) nextSlide();
    }, 3500);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) clearInterval(autoPlayTimer);
  }

  if (container) {
    container.addEventListener('mouseenter', () => { isHovered = true; });
    container.addEventListener('mouseleave', () => { isHovered = false; });

    // Touch swipe support
    let startX = 0;
    container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isHovered = true;
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
      isHovered = false;
    }, { passive: true });
  }

  // Initial render & autoplay trigger
  renderCarousel();
  startAutoPlay();
}

/* ----------------------------------------------------
 * 6. Mobile Sticky Bar Visibility Logic
 * ---------------------------------------------------- */
function initMobileStickyBar() {
  const stickyBar = document.getElementById('mobile-sticky-bar');
  const leadSection = document.getElementById('book-consultation');

  if (!stickyBar || !leadSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stickyBar.classList.add('translate-y-full');
      } else {
        stickyBar.classList.remove('translate-y-full');
      }
    });
  }, { threshold: 0.15 });

  observer.observe(leadSection);
}

/* ----------------------------------------------------
 * 7. Copy Phone Number Utility
 * ---------------------------------------------------- */
function initPhoneCopy() {
  const copyBtns = document.querySelectorAll('[data-copy-phone]');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const phone = "70363 19256";
      navigator.clipboard.writeText(phone.replace(/\s+/g, '')).then(() => {
        showToast("Phone number 70363 19256 copied to clipboard!");
      }).catch(() => {
        window.location.href = "tel:+917036319256";
      });
    });
  });
}

/* ----------------------------------------------------
 * 8. Toast Notification Helper
 * ---------------------------------------------------- */
function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 bg-[#0B3765] text-white px-5 py-3 rounded-full shadow-2xl text-sm font-semibold flex items-center gap-2.5 transition-all duration-300 opacity-0 translate-y-4 pointer-events-none border border-[#F9B900]/30';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-[#F9B900]"></span>
    <span>${message}</span>
  `;

  toast.classList.remove('opacity-0', 'translate-y-4');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-4');
  }, 3500);
}
