import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Phone, Mail, Building, FileText, Loader2, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/company';
import { InquiryFormData } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
  onInquirySubmitted?: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct = '',
  onInquirySubmitted,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    companyName: '',
    mobileNumber: '',
    emailAddress: '',
    product: preselectedProduct || PRODUCTS[0].name,
    requiredQuantity: '',
    requiredBoxSize: '',
    customizationRequirements: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedProduct) {
      setFormData((prev) => ({ ...prev, product: preselectedProduct }));
    }
  }, [preselectedProduct]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitSuccess(false);
      setErrorMessage(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

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

    // Frontend validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your Full Name.');
      return;
    }
    if (!formData.mobileNumber.trim() || formData.mobileNumber.trim().length < 7) {
      setErrorMessage('Please enter a valid Mobile Number.');
      return;
    }
    if (!formData.emailAddress.trim() || !/^\S+@\S+\.\S+$/.test(formData.emailAddress.trim())) {
      setErrorMessage('Please enter a valid Email Address.');
      return;
    }
    if (!formData.product.trim()) {
      setErrorMessage('Please select a Product.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setReferenceId(data.inquiryId);
        if (onInquirySubmitted) onInquirySubmitted();
      } else {
        setErrorMessage(
          data.error || 'Failed to submit your inquiry. Please try again or call 07942557202.'
        );
      }
    } catch (err: any) {
      console.error('Inquiry submission error:', err);
      setErrorMessage(
        'Connection error while submitting. Please call 07942557202 directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
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
  };

  return (
    <div
      id="inquiry-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="inquiry-modal-container"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-amber-600 flex items-center justify-center font-bold text-sm">
              SP
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">Request a Quote / Send Inquiry</h2>
              <p className="text-xs text-slate-300">S Packaging • Vasai, Palghar, Maharashtra</p>
            </div>
          </div>

          <button
            id="inquiry-modal-close-btn"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors"
            aria-label="Close inquiry modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitSuccess ? (
            /* Success State as required by prompt */
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">
                  Thank you. Your inquiry has been received.
                </h3>
                <p className="text-slate-600 text-base max-w-lg mx-auto">
                  Our team will contact you shortly.
                </p>
              </div>

              {/* Inquiry Details Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left max-w-lg mx-auto space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Inquiry Reference ID:</span>
                  <span className="font-mono font-bold text-slate-900 text-sm bg-white px-2 py-0.5 rounded border border-slate-200">
                    {referenceId}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Selected Product:</span>
                  <span className="font-semibold text-slate-900">{formData.product}</span>
                </div>
                {formData.requiredQuantity && (
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Required Quantity:</span>
                    <span className="text-slate-800">{formData.requiredQuantity}</span>
                  </div>
                )}
                {formData.requiredBoxSize && (
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Box Dimensions:</span>
                    <span className="text-slate-800">{formData.requiredBoxSize}</span>
                  </div>
                )}
                <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-150">
                  A formal notification has been dispatched to the proprietor / business email for processing.
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  id="inquiry-submit-another-btn"
                  onClick={resetForm}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-xs sm:text-sm font-semibold transition-colors"
                >
                  Submit Another Inquiry
                </button>
                <button
                  id="inquiry-done-btn"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md text-xs sm:text-sm font-medium transition-colors"
                >
                  Close Window
                </button>
              </div>

              <div className="pt-4 border-t border-slate-150 text-xs text-slate-500 flex items-center justify-center gap-1.5">
                <span>Need immediate clarification? Call proprietor directly at</span>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-amber-700 font-bold hover:underline"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          ) : (
            /* Inquiry Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-lg p-3 text-xs text-amber-900">
                Packaging rates depend on ply, material liners, required box sizes, and printing specs. Please provide your requirement details below for an accurate quotation.
              </div>

              {errorMessage && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-xs text-red-700 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Row 1: Full Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="inquiry-fullName"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="inquiry-fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Saurav Singh / Ramesh"
                    className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiry-companyName"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="inquiry-companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Acme Logistics / Enterprise"
                    className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Row 2: Mobile Number & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="inquiry-mobileNumber"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="inquiry-mobileNumber"
                    name="mobileNumber"
                    required
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="e.g. 09820000000"
                    className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiry-emailAddress"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="inquiry-emailAddress"
                    name="emailAddress"
                    required
                    value={formData.emailAddress}
                    onChange={handleChange}
                    placeholder="e.g. purchase@company.com"
                    className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Row 3: Product (Select) */}
              <div>
                <label
                  htmlFor="inquiry-product"
                  className="block text-xs font-semibold text-slate-700 mb-1"
                >
                  Product <span className="text-red-500">*</span>
                </label>
                <select
                  id="inquiry-product"
                  name="product"
                  required
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-medium"
                >
                  {PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.name}>
                      {prod.name} ({prod.category})
                    </option>
                  ))}
                  <option value="Custom Packaging Solution">
                    Custom Packaging Solution (Bespoke Specs)
                  </option>
                </select>
              </div>

              {/* Row 4: Required Quantity & Box Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="inquiry-requiredQuantity"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Required Quantity
                  </label>
                  <input
                    type="text"
                    id="inquiry-requiredQuantity"
                    name="requiredQuantity"
                    value={formData.requiredQuantity}
                    onChange={handleChange}
                    placeholder="e.g. 500 pcs, 2,000 / month"
                    className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiry-requiredBoxSize"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Required Box Size
                  </label>
                  <input
                    type="text"
                    id="inquiry-requiredBoxSize"
                    name="requiredBoxSize"
                    value={formData.requiredBoxSize}
                    onChange={handleChange}
                    placeholder="e.g. 12x8x6 in or 300x200x150 mm"
                    className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Row 5: Customization Requirements */}
              <div>
                <label
                  htmlFor="inquiry-customizationRequirements"
                  className="block text-xs font-semibold text-slate-700 mb-1"
                >
                  Customization Requirements
                </label>
                <textarea
                  id="inquiry-customizationRequirements"
                  name="customizationRequirements"
                  rows={2}
                  value={formData.customizationRequirements}
                  onChange={handleChange}
                  placeholder="Specify custom printing (e.g. 1-color logo), flute type, handles, ventilation holes, or special liners..."
                  className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              {/* Row 6: Message */}
              <div>
                <label
                  htmlFor="inquiry-message"
                  className="block text-xs font-semibold text-slate-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="inquiry-message"
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Additional notes, delivery location, frequency or target dispatch dates..."
                  className="w-full px-3.5 py-2 rounded-md border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="inquiry-submit-btn"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-md text-sm sm:text-base shadow-xs transition-colors disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </div>

              {/* Privacy / Direct Contact note */}
              <p className="text-[11px] text-center text-slate-500">
                Your inquiry goes directly to S Packaging's management team. You can also reach out on{' '}
                <a href={`tel:${COMPANY_INFO.phone}`} className="font-semibold text-slate-700 underline">
                  {COMPANY_INFO.phone}
                </a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
