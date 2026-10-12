import React, { useState } from 'react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    qualification: '',
    workExperience: 'Fresh graduate / 0 yrs',
    preferredCountry: '',
    preferredCourse: '',
    targetIntake: 'Fall 2026 (Aug/Sep 2026)'
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.qualification) {
      newErrors.qualification = 'Please select your qualification';
    }

    if (!formData.preferredCountry) {
      newErrors.preferredCountry = 'Please select your preferred country';
    }

    if (!formData.preferredCourse.trim()) {
      newErrors.preferredCourse = 'Please enter your preferred course or study area';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 750);
  };

  const waUrl = `https://wa.me/917036319256?text=Hi%20IFS%20Consultants,%20I%20just%20submitted%20my%20enquiry%20for%20a%20FREE%20Consultation.%20My%20name%20is%20${encodeURIComponent(formData.fullName)},%20interested%20in%20${encodeURIComponent(formData.preferredCourse)}%20in%20${encodeURIComponent(formData.preferredCountry)}.`;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white" id="book-consultation">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-slate-200 shadow-2xl relative">
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-[#0B3765] bg-amber-100 px-3 py-1 rounded-full mb-2">
              FAST 60-SECOND PROFILE EVALUATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3765] font-heading">
              Get Your FREE Study Abroad Consultation
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Tell us about your background and target countries. An IFS senior overseas advisor will connect with you with tailored options.
            </p>
          </div>

          {submitted ? (
            <div className="py-8 px-6 text-center animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-[#0B3765] mb-2 font-heading">Consultation Request Confirmed!</h4>
              <p className="text-slate-600 mb-6 text-sm sm:text-base max-w-md mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. An IFS senior overseas education counsellor will contact you shortly on <strong>{formData.phone}</strong>.
              </p>
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6 text-left max-w-md mx-auto">
                <p className="text-xs font-semibold text-amber-900 uppercase tracking-wider mb-1">Want an instant answer?</p>
                <p className="text-xs text-amber-800">You can also connect directly with counsellor Mohan sir right now via WhatsApp.</p>
              </div>
              <a 
                href={waUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 w-full max-w-md py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition shadow-md"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma" 
                    className={`w-full px-4 py-3 rounded-xl border ${errors.fullName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'} focus:border-[#0B3765] focus:ring-2 focus:ring-amber-400 text-sm transition`}
                  />
                  {errors.fullName && <p className="text-red-600 text-xs mt-1 font-medium">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                    Mobile Number (WhatsApp) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-xs font-bold text-slate-500 pointer-events-none">
                      +91
                    </span>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="98765 43210" 
                      maxLength={10}
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-300'} focus:border-[#0B3765] focus:ring-2 focus:ring-amber-400 text-sm transition`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-600 text-xs mt-1 font-medium">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rahul@example.com" 
                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-300'} focus:border-[#0B3765] focus:ring-2 focus:ring-amber-400 text-sm transition`}
                  />
                  {errors.email && <p className="text-red-600 text-xs mt-1 font-medium">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                    Current Qualification <span className="text-red-500">*</span>
                  </label>
                  <select 
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.qualification ? 'border-red-500' : 'border-slate-300'} focus:border-[#0B3765] focus:ring-2 focus:ring-amber-400 text-sm transition bg-white`}
                  >
                    <option value="">Select your qualification</option>
                    <option value="B.Tech / B.E">B.Tech / B.E</option>
                    <option value="B.Com / BBA">B.Com / BBA</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="BCA / MCA">BCA / MCA</option>
                    <option value="Final Year Student">Final Year College Student</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Other">Other Graduate Program</option>
                  </select>
                  {errors.qualification && <p className="text-red-600 text-xs mt-1 font-medium">{errors.qualification}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                    Work Experience <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <select 
                    name="workExperience"
                    value={formData.workExperience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0B3765] focus:ring-2 focus:ring-amber-400 text-sm transition bg-white"
                  >
                    <option value="Fresh graduate / 0 yrs">Fresh graduate (0 years)</option>
                    <option value="1-2 years">1 – 2 years</option>
                    <option value="3-5 years">3 – 5 years</option>
                    <option value="5+ years">5+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                    Preferred Country <span className="text-red-500">*</span>
                  </label>
                  <select 
                    name="preferredCountry"
                    value={formData.preferredCountry}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.preferredCountry ? 'border-red-500' : 'border-slate-300'} focus:border-[#0B3765] focus:ring-2 focus:ring-amber-400 text-sm transition bg-white`}
                  >
                    <option value="">Select study destination</option>
                    <option value="USA">USA</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Germany">Germany</option>
                    <option value="Canada">Canada</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Australia">Australia</option>
                    <option value="France">France</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Italy">Italy</option>
                    <option value="Dubai (UAE)">Dubai (UAE)</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Poland">Poland</option>
                    <option value="Spain">Spain</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Finland">Finland</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Other / Not Decided">Other / Need Counsellor's Advice</option>
                  </select>
                  {errors.preferredCountry && <p className="text-red-600 text-xs mt-1 font-medium">{errors.preferredCountry}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                    Preferred Course / Study Area <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="preferredCourse"
                    value={formData.preferredCourse}
                    onChange={handleChange}
                    placeholder="e.g. MS in Data Science / MBA / Cyber Security" 
                    className={`w-full px-4 py-3 rounded-xl border ${errors.preferredCourse ? 'border-red-500 bg-red-50/50' : 'border-slate-300'} focus:border-[#0B3765] focus:ring-2 focus:ring-amber-400 text-sm transition`}
                  />
                  {errors.preferredCourse && <p className="text-red-600 text-xs mt-1 font-medium">{errors.preferredCourse}</p>}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                    Target Intake <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <select 
                    name="targetIntake"
                    value={formData.targetIntake}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0B3765] focus:ring-2 focus:ring-amber-400 text-sm transition bg-white"
                  >
                    <option value="Fall 2026 (Aug/Sep 2026)">Fall 2026 (Aug/Sep 2026)</option>
                    <option value="Spring 2027 (Jan/Feb 2027)">Spring 2027 (Jan/Feb 2027)</option>
                    <option value="Fall 2027">Fall 2027</option>
                    <option value="Undecided">Undecided / Exploring</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={submitting}
                  className="bg-[#F9B900] text-[#0B3765] hover:bg-[#e5aa00] w-full py-4 px-6 rounded-xl text-base sm:text-lg font-black flex items-center justify-center gap-2 shadow-lg transition cursor-pointer"
                >
                  {submitting ? (
                    <span>Reserving Your Consultation Slot...</span>
                  ) : (
                    <>
                      <span>Get My FREE Consultation</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                      </svg>
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-xs text-slate-500 font-medium">
                Your information is used only to contact you about your study abroad enquiry.
              </p>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
