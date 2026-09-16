import React from 'react';
import {
  ArrowRight,
  Factory,
  ShieldCheck,
  User,
  Calendar,
  IndianRupee,
  Phone,
  MapPin,
  FileText,
  Layers,
  Sparkles,
  Package,
  CheckCircle2,
  Boxes,
  Award,
  Truck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface CompanyIntroProps {
  onLearnMore: () => void;
  onRequestQuote: () => void;
}

export const CompanyIntro: React.FC<CompanyIntroProps> = ({ onLearnMore, onRequestQuote }) => {
  const capabilities = [
    {
      title: 'Corrugated Packaging',
      detail: '3 Ply, 5 Ply & 7 Ply heavy-duty industrial shipping cartons & multi-wall boxes.',
      icon: Layers,
    },
    {
      title: 'Branded Flexo Printing',
      detail: 'High-precision custom logo, barcode & international transit handling marks.',
      icon: Sparkles,
    },
    {
      title: 'Food & Produce Boxes',
      detail: 'Ventilated hygienic boxes for Alphonso mangoes, fresh fruits, bakery & confectionery.',
      icon: Package,
    },
    {
      title: 'Custom Die-Cut Tooling',
      detail: 'Bespoke box geometries, locks, and dimensions tailored to exact payload requirements.',
      icon: Boxes,
    },
  ];

  return (
    <section id="company-intro-section" className="py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Main 2-Column Split: Comprehensive Company Narrative + Verified Main Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">
          
          {/* Left Column (7 Cols): Bold Narrative, Mission & Core Manufacturing Capabilities */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-bold rounded-lg uppercase tracking-wider shadow-2xs">
              <Factory className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Vasai Packaging Box Manufacturer</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Packaging Made for Real Business Needs
            </h2>

            <p className="text-slate-800 text-xl sm:text-2xl font-medium leading-relaxed">
              S Packaging is an authentic packaging box manufacturer based in Vasai, Palghar, Maharashtra. The company manufactures and supplies a wide range of packaging solutions for businesses across different industries.
            </p>

            <p className="text-slate-600 text-base sm:text-lg xl:text-xl leading-relaxed">
              Its product range includes corrugated boxes, printed packaging boxes, gift boxes, electronics packaging, food packaging and other customized packaging solutions. The company focuses on producing lightweight, durable and practical packaging solutions according to customer requirements. S Packaging works with businesses requiring reliable packaging for storage, transportation, product protection and presentation.
            </p>

            {/* Core Capability Cards Filling Space */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {capabilities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-amber-400 hover:bg-amber-50/30 transition-all space-y-2 shadow-2xs"
                  >
                    <div className="flex items-center gap-3 font-bold text-slate-900 text-base sm:text-lg">
                      <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span>{item.title}</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-12">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="intro-know-more-btn"
                onClick={onLearnMore}
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl text-base sm:text-lg transition-all shadow-md cursor-pointer"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-5 h-5 text-amber-400" />
              </button>

              <button
                id="intro-quote-btn"
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold px-8 py-4 rounded-xl text-base sm:text-lg transition-colors cursor-pointer"
              >
                <span>Request Quotation</span>
              </button>
            </div>
          </div>

          {/* Right Column (5 Cols): Complete Main Info Card - High Contrast & Large Fonts, Zero Empty Space */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-7 sm:p-9 lg:p-10 border border-slate-800 shadow-2xl space-y-7">
              <div className="border-b border-slate-800 pb-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-amber-400" />
                    Verified B2B Manufacturer
                  </span>
                  <span className="text-xs font-bold bg-amber-500/20 text-amber-300 px-3 py-1 rounded-md border border-amber-500/30">
                    Active Plant
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                  Company Information & Credentials
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Official statutory registration and manufacturing facility profile.
                </p>
              </div>

              {/* Data Rows with Enlarged Font and High Legibility */}
              <div className="space-y-4 text-base sm:text-lg">
                <div className="flex items-start justify-between py-2.5 border-b border-slate-800/80 gap-3">
                  <span className="text-slate-400 font-medium text-sm sm:text-base">Company Name:</span>
                  <span className="font-extrabold text-white text-right">{COMPANY_INFO.name}</span>
                </div>

                <div className="flex items-start justify-between py-2.5 border-b border-slate-800/80 gap-3">
                  <span className="text-slate-400 font-medium text-sm sm:text-base">Business Type:</span>
                  <span className="font-bold text-amber-300 text-right">{COMPANY_INFO.businessType}</span>
                </div>

                <div className="flex items-start justify-between py-2.5 border-b border-slate-800/80 gap-3">
                  <span className="text-slate-400 font-medium text-sm sm:text-base">Legal Status:</span>
                  <span className="font-bold text-slate-200 text-right">{COMPANY_INFO.legalStatus}</span>
                </div>

                <div className="flex items-start justify-between py-2.5 border-b border-slate-800/80 gap-3">
                  <span className="text-slate-400 font-medium text-sm sm:text-base">Proprietor:</span>
                  <span className="font-bold text-white text-right flex items-center gap-2">
                    <User className="w-4 h-4 text-amber-400" />
                    {COMPANY_INFO.proprietor}
                  </span>
                </div>

                <div className="flex items-start justify-between py-2.5 border-b border-slate-800/80 gap-3">
                  <span className="text-slate-400 font-medium text-sm sm:text-base">GST Number:</span>
                  <span className="font-mono font-bold text-amber-300 bg-slate-800 px-3 py-1 rounded-md border border-slate-700 text-sm sm:text-base">
                    {COMPANY_INFO.gstNo}
                  </span>
                </div>

                <div className="flex items-start justify-between py-2.5 border-b border-slate-800/80 gap-3">
                  <span className="text-slate-400 font-medium text-sm sm:text-base">GST Reg. Date:</span>
                  <span className="font-semibold text-slate-200 text-right flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    {COMPANY_INFO.gstRegistrationDate} (5+ Years)
                  </span>
                </div>

                <div className="flex items-start justify-between py-2.5 border-b border-slate-800/80 gap-3">
                  <span className="text-slate-400 font-medium text-sm sm:text-base">Annual Turnover:</span>
                  <span className="font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/70 px-3 py-1 rounded-md text-sm sm:text-base">
                    {COMPANY_INFO.annualTurnover}
                  </span>
                </div>

                <div className="flex items-start justify-between py-2.5 border-b border-slate-800/80 gap-3">
                  <span className="text-slate-400 font-medium text-sm sm:text-base">Plant Telephone:</span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="font-bold text-amber-400 hover:text-amber-300 text-right flex items-center gap-2 text-base sm:text-lg"
                  >
                    <Phone className="w-4 h-4" />
                    {COMPANY_INFO.displayPhone}
                  </a>
                </div>
              </div>

              {/* Manufacturing Location Address Box */}
              <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-2.5 text-sm sm:text-base">
                <div className="flex items-center gap-2 font-bold text-amber-300">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span>Manufacturing Facility Address</span>
                </div>
                <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
                  {COMPANY_INFO.address.fullAddress}
                </p>
                <div className="pt-2 text-xs sm:text-sm text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Vasai Industrial Corridor • Direct truckload dispatches across Maharashtra</span>
                </div>
              </div>

              {/* Plant Photo Mini Preview Inside Right Column */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 group h-44 sm:h-52">
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000&auto=format&fit=crop"
                  alt="Manufactured corrugated boxes stacked at Vasai plant"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs sm:text-sm text-white">
                  <span className="font-semibold text-slate-100 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-amber-400" />
                    Vasai Box Storage & Dispatch Hub
                  </span>
                  <span className="text-amber-400 font-mono font-bold text-xs bg-slate-900/80 px-2 py-0.5 rounded">K. T. Spark-3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
