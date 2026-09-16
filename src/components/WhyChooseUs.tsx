import React from 'react';
import { Factory, LayoutGrid, Settings2, Feather, Building2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface WhyChooseUsProps {
  onRequestQuote: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onRequestQuote }) => {
  const points = [
    {
      title: 'Manufacturing Expertise',
      description: 'Dedicated to manufacturing packaging boxes for diverse business requirements.',
      icon: Factory,
    },
    {
      title: 'Wide Product Range',
      description: 'Multiple packaging formats for different applications.',
      icon: LayoutGrid,
    },
    {
      title: 'Custom Requirements',
      description: 'Packaging solutions can be discussed according to size, quantity and application.',
      icon: Settings2,
    },
    {
      title: 'Durable & Lightweight Packaging',
      description: 'Products are positioned around practical packaging characteristics including durability and lightweight construction.',
      icon: Feather,
    },
    {
      title: 'B2B Focus',
      description: 'Solutions designed for businesses requiring packaging for transportation, storage and presentation.',
      icon: Building2,
    },
  ];

  return (
    <section id="why-choose-us-section" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold rounded-md uppercase tracking-wider">
            Why S Packaging
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            A Trusted Partner for Commercial Packaging
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Operating from our manufacturing facility in Vasai, Palghar, Maharashtra, we build dependable packaging solutions for businesses that value consistency and practical utility.
          </p>
        </div>

        {/* 5 Authentic Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-lg bg-amber-50 border border-amber-200/80 text-amber-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {pt.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    “{pt.description}”
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center text-[11px] font-semibold text-slate-400">
                  <span>S PACKAGING • VASAI</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Direct Connect CTA Card */}
          <div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Direct Communication
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Have a Packaging Query?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Speak directly with Saurav Singh or our Vasai production desk to evaluate your requirements and receive a timely quotation.
              </p>
            </div>

            <button
              id="why-us-request-quote-btn"
              onClick={onRequestQuote}
              className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 px-4 rounded-md text-xs sm:text-sm transition-colors"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Authentic Business Profile Summary */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">Entity:</span>
            <span>{COMPANY_INFO.name} ({COMPANY_INFO.legalStatus})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">GST Registration:</span>
            <span>{COMPANY_INFO.gstNo} (Dated: 22-05-2019)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">Turnover:</span>
            <span>{COMPANY_INFO.annualTurnover}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">Proprietor:</span>
            <span>{COMPANY_INFO.proprietor}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
