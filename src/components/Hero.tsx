import React from 'react';
import { ArrowRight, FileText, CheckCircle2, Shield, MapPin, Box, Factory, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeroProps {
  onExploreProducts: () => void;
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onRequestQuote }) => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden py-14 sm:py-18 lg:py-24 border-b border-slate-800">
      {/* Subtle industrial grid texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#e2e8f0 1px, transparent 1px), radial-gradient(#e2e8f0 1px, #0f172a 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />

      <div className="relative w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* Left Column: Bold Display Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Authenticity Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/95 border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span>Direct Packaging Box Manufacturer • Vasai, Maharashtra</span>
            </div>

            {/* Main Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Reliable Packaging Solutions Built for Your Business
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl xl:text-2xl text-slate-200 leading-relaxed font-normal max-w-4xl">
              S Packaging manufactures durable, practical, and precision-cut packaging boxes in Vasai, Palghar. Supplying 3-Ply to 7-Ply corrugated cartons, printed brand packaging, and customized industrial solutions across Maharashtra and India.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-primary-cta"
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded-xl text-base sm:text-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onRequestQuote}
                className="inline-flex items-center justify-center gap-2.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold px-8 py-4 rounded-xl text-base sm:text-lg transition-colors cursor-pointer"
              >
                <FileText className="w-5 h-5 text-amber-400" />
                <span>Request a Quote</span>
              </button>
            </div>

            {/* Key Verified B2B Attributes */}
            <div className="pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm sm:text-base text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-bold text-base">Custom Tooling</div>
                  <div className="text-slate-400 text-sm">Ply, flutes & prints</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-bold text-base">Direct Manufacturer</div>
                  <div className="text-slate-400 text-sm">Proprietorship, Vasai plant</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-bold text-base">GST Registered</div>
                  <div className="text-slate-400 font-mono text-sm">{COMPANY_INFO.gstNo}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Full-Height Visual Grounded at Vasai Plant */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1400&auto=format&fit=crop"
                alt="Corrugated packaging boxes manufactured and stored at S Packaging facility"
                className="w-full h-[460px] sm:h-[540px] lg:h-[620px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-5 right-5 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-amber-300 flex items-center gap-2 shadow-lg">
                <Factory className="w-4 h-4 text-amber-400" />
                <span>Unit 1–2, Bilalpad, Vasai</span>
              </div>

              {/* In-image Bottom Details Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-slate-900/95 backdrop-blur-md border border-slate-700/90 p-5 sm:p-6 rounded-2xl text-sm text-slate-200 shadow-2xl space-y-3">
                <div className="flex items-center justify-between font-bold text-white">
                  <span className="flex items-center gap-2 text-amber-400 text-sm sm:text-base">
                    <Box className="w-5 h-5" />
                    Corrugated & Custom Packaging
                  </span>
                  <span className="text-xs sm:text-sm text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-3 py-1 rounded-md font-mono">
                    ₹1.5–5 Cr Turnover
                  </span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Single wall (3-ply), double wall (5-ply), triple wall (7-ply), printed cartons, food & electronics boxes manufactured to your exact business specifications.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs text-slate-400">
                  <span>Proprietor: <strong className="text-slate-200">Saurav Singh</strong></span>
                  <span>Direct Hotline: <strong className="text-amber-400 text-sm font-bold">{COMPANY_INFO.displayPhone}</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
