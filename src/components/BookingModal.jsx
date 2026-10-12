import React, { useState, useEffect } from 'react';

export default function BookingModal({ isOpen, onClose, initialCountry = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    qualification: '',
    preferredCountry: initialCountry || '',
    preferredCourse: ''
  });

  useEffect(() => {
    if (initialCountry) {
      setFormData(prev => ({ ...prev, preferredCountry: initialCountry }));
    }
  }, [initialCountry]);

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

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
      newErrors.preferredCourse = 'Please enter your preferred course';
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
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl my-8 border border-slate-200">
        
        {/* Close Button */}
        <button 
          type="button" 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition cursor-pointer"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        {submitted ? (
          <div className="py-8 px-4 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-[#0B3765] mb-2 font-heading">Consultation Booked!</h4>
            <p className="text-slate-600 mb-6 text-sm">
              Thank you, <strong>{formData.fullName}</strong>. A senior IFS counsellor will contact you on <strong>{formData.phone}</strong>.
            </p>
            <a 
              href={waUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition shadow-md text-sm"
            >
              Chat on WhatsApp Directly
            </a>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full mb-1">
                FAST 1-ON-1 APPOINTMENT
              </span>
              <h3 id="modal-title" className="text-2xl font-black text-[#0B3765] font-heading">
                Book My FREE Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Speak with a senior IFS overseas counsellor. No fees. Zero obligation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Rahul Sharma" 
                  className={`w-full px-3.5 py-2.5 rounded-xl border ${errors.fullName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'} focus:border-[#0B3765] focus:ring-2 focus:ring-amber-400 text-sm transition`}
                />
                {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-xs font-bold text-slate-500 pointer-events-none">+91</span>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="98765 43210" 
                      maxLength={10}
                      className={`w-full pl-11 pr-3.5 py-2.5 rounded-xl border ${errors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-300'} focus:border-[#0B3765] focus:ring-2 focus:ring-amber-400 text-sm transition`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rahul@example.com" 
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-300'} focus:border-[#0B3765] focus:ring-2 focus:ring-amber-400 text-sm transition`}
                  />
                  {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Qualification <span className="text-red-500">*</span>
                  </label>
                  <select 
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${errors.qualification ? 'border-red-500' : 'border-slate-300'} focus:border-[#0B3765] focus:ring-2 focus:ring-amber-400 text-sm transition bg-white`}
                  >
                    <option value="">Select qualification</option>
                    <option value="B.Tech / B.E">B.Tech / B.E</option>
                    <option value="B.Com / BBA">B.Com / BBA</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="BCA / MCA">BCA / MCA</option>
                    <option value="Final Year Student">Final Year Student</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.qualification && <p className="text-red-600 text-xs mt-1">{errors.qualification}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Preferred Country <span className="text-red-500">*</span>
                  </label>
                  <select 
                    name="preferredCountry"
                    value={formData.preferredCountry}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${errors.preferredCountry ? 'border-red-500' : 'border-slate-300'} focus:border-[#0B3765] focus:ring-2 focus:ring-amber-400 text-sm transition bg-white`}
                  >
                    <option value="">Select country</option>
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
                    <option value="Other">Other / Undecided</option>
                  </select>
                  {errors.preferredCountry && <p className="text-red-600 text-xs mt-1">{errors.preferredCountry}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Preferred Course / Area <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="preferredCourse"
                  value={formData.preferredCourse}
                  onChange={handleChange}
                  placeholder="e.g. Master's in CS / MBA / Finance" 
                  className={`w-full px-3.5 py-2.5 rounded-xl border ${errors.preferredCourse ? 'border-red-500 bg-red-50/50' : 'border-slate-300'} focus:border-[#0B3765] focus:ring-2 focus:ring-amber-400 text-sm transition`}
                />
                {errors.preferredCourse && <p className="text-red-600 text-xs mt-1">{errors.preferredCourse}</p>}
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={submitting}
                  className="bg-[#F9B900] text-[#0B3765] hover:bg-[#e5aa00] w-full py-3.5 px-6 rounded-xl text-base font-extrabold flex items-center justify-center gap-2 shadow-md cursor-pointer transition"
                >
                  {submitting ? 'Confirming...' : 'Confirm My Free Consultation'}
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-500">
                Your information is used only to contact you about your study abroad enquiry.
              </p>
            </form>
          </>
        )}

      </div>
    </div>
  );
}
