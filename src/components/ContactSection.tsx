import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS } from '../data/products';
import { Phone, Mail, MapPin, User, ShieldCheck, Send, CheckCircle2, AlertCircle, Loader2, Navigation } from 'lucide-react';

interface ContactSectionProps {
  onInquirySubmitted?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onInquirySubmitted }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    mobileNumber: '',
    emailAddress: '',
    product: PRODUCTS[0].name,
    requiredQuantity: '',
    requiredBoxSize: '',
    customizationRequirements: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.fullName.trim()) {
      setErrorMessage('Full Name is required.');
      return;
    }
    if (!formData.mobileNumber.trim() || formData.mobileNumber.trim().length < 7) {
      setErrorMessage('Valid Mobile Number is required.');
      return;
    }
    if (!formData.emailAddress.trim() || !/^\S+@\S+\.\S+$/.test(formData.emailAddress.trim())) {
      setErrorMessage('Valid Email Address is required.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setReferenceId(data.inquiryId);
        if (onInquirySubmitted) onInquirySubmitted();
      } else {
        setErrorMessage(data.error || 'Failed to submit inquiry. Please call 07942557202.');
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage('Network error. Please call 07942557202 directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Title */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold rounded-md uppercase tracking-wider">
            Direct Contact & Quotations
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Contact S Packaging
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Get in touch with our Vasai packaging manufacturing team for pricing inquiries, custom size development, or production batch orders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Official Contact Details & Location Map Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800 shadow-lg">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">S Packaging</h3>
                <p className="text-xs text-slate-300">
                  Packaging Box Manufacturer • Proprietorship
                </p>
              </div>

              {/* Verified Specs */}
              <div className="space-y-4 text-xs sm:text-sm border-t border-slate-800 pt-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-semibold text-white">Manufacturing Address:</span>
                    <p className="text-slate-300 leading-relaxed">
                      Unit No. 1–2,<br />
                      Bilalpad, K. T. Spark-3,<br />
                      Opposite Pani Tanki,<br />
                      Bilal Pada,<br />
                      Vasai – 401204,<br />
                      Palghar, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Phone / WhatsApp:</span>
                    <p>
                      <a
                        id="contact-phone-link"
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="text-amber-400 font-bold hover:underline text-sm"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Proprietor:</span>
                    <p className="text-slate-300">{COMPANY_INFO.proprietor}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">GST Identification No:</span>
                    <p className="font-mono text-slate-200">{COMPANY_INFO.gstNo}</p>
                  </div>
                </div>
              </div>

              {/* Direct Maps Action */}
              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Bilal+Pada+Vasai+Palghar+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 py-2.5 px-4 rounded-md text-xs font-semibold transition-colors"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>Open Vasai Plant in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Industrial Plant Visual Map / Area Card */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800 uppercase tracking-wider">
                <span>Location Pinpoint: Bilal Pada, Vasai</span>
                <span className="text-amber-700 font-semibold">PIN: 401204</span>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-16/9 bg-slate-200">
                <iframe
                  title="S Packaging Location Map"
                  src="https://maps.google.com/maps?q=Bilal%20Pada,%20Vasai,%20Palghar,%20Maharashtra%20401204&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Situated in the Vasai East industrial hub (Bilal Pada, opposite Pani Tanki), with convenient connectivity to the Western Express Highway and Greater Mumbai industrial distribution lines.
              </p>
            </div>
          </div>

          {/* Right Column: "Request a Quote" Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="border-b border-slate-150 pb-4 mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Request a Quote
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill out your packaging requirements below. The inquiry will be delivered directly to the business proprietor.
                </p>
              </div>

              {submitSuccess ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Thank you. Your inquiry has been received.
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Our team will contact you shortly.
                  </p>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-700 max-w-sm mx-auto">
                    Reference ID: <strong className="font-mono">{referenceId}</strong>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        mobileNumber: '',
                        emailAddress: '',
                        product: PRODUCTS[0].name,
                        requiredQuantity: '',
                        requiredBoxSize: '',
                        customizationRequirements: '',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800 underline pt-2"
                  >
                    Submit another requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-xs text-red-700 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Your company / brand"
                        className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  {/* Mobile & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        required
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="e.g. 09820000000"
                        className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="emailAddress"
                        required
                        value={formData.emailAddress}
                        onChange={handleChange}
                        placeholder="purchase@company.com"
                        className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  {/* Product */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Product <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                    >
                      {PRODUCTS.map((prod) => (
                        <option key={prod.id} value={prod.name}>
                          {prod.name}
                        </option>
                      ))}
                      <option value="Custom Packaging Solution">
                        Custom Packaging Solution (Bespoke Box)
                      </option>
                    </select>
                  </div>

                  {/* Quantity & Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Required Quantity
                      </label>
                      <input
                        type="text"
                        name="requiredQuantity"
                        value={formData.requiredQuantity}
                        onChange={handleChange}
                        placeholder="e.g. 1000 units"
                        className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Required Box Size
                      </label>
                      <input
                        type="text"
                        name="requiredBoxSize"
                        value={formData.requiredBoxSize}
                        onChange={handleChange}
                        placeholder="e.g. 14x10x8 in"
                        className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  {/* Customization Requirements */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Customization Requirements
                    </label>
                    <textarea
                      name="customizationRequirements"
                      rows={2}
                      value={formData.customizationRequirements}
                      onChange={handleChange}
                      placeholder="Printing details, ply preference, special lining or partitions..."
                      className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any additional details or delivery requirements..."
                      className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-md text-sm sm:text-base shadow-xs transition-colors disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Submitting Quotation Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
