import React from 'react';
import { COMPANY_INFO } from '../data/company';
import {
  Factory,
  ShieldCheck,
  User,
  Calendar,
  IndianRupee,
  FileText,
  ArrowRight,
  Layers,
  Sparkles,
  Utensils,
  Box,
  Phone,
  MapPin,
  Clock,
  Truck,
  CheckCircle2,
  Boxes
} from 'lucide-react';

interface AboutPageProps {
  onRequestQuote: () => void;
  onExploreProducts: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onRequestQuote,
  onExploreProducts,
}) => {
  return (
    <div className="bg-white min-h-screen py-12 md:py-20">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-16">
        
        {/* Full-Width Page Hero Header Filling Left & Right Space */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Headline & Description */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold rounded-md uppercase tracking-wider">
                <Factory className="w-4 h-4 text-amber-400" />
                <span>About The Manufacturing Company</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                S Packaging
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed">
                Manufacturer of Corrugated Boxes, Printed Cartons & Custom Industrial Packaging Solutions in Vasai, Palghar, Maharashtra.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onRequestQuote}
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm sm:text-base transition-colors shadow-md"
                >
                  <span>Request Factory Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold px-6 py-3 rounded-xl text-sm sm:text-base border border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {COMPANY_INFO.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* Right: Key Verified Executive Stats Grid Filling the Space */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700/80 space-y-1">
                <div className="text-amber-400 font-extrabold text-2xl sm:text-3xl">2019</div>
                <div className="text-xs sm:text-sm font-bold text-white">Established</div>
                <div className="text-[11px] text-slate-400">GST Reg: 22-05-2019</div>
              </div>

              <div className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700/80 space-y-1">
                <div className="text-emerald-400 font-extrabold text-2xl sm:text-3xl">₹1.5–5 Cr</div>
                <div className="text-xs sm:text-sm font-bold text-white">Annual Turnover</div>
                <div className="text-[11px] text-slate-400">Commercial scale</div>
              </div>

              <div className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700/80 space-y-1">
                <div className="text-amber-400 font-extrabold text-2xl sm:text-3xl">Vasai</div>
                <div className="text-xs sm:text-sm font-bold text-white">Plant Hub</div>
                <div className="text-[11px] text-slate-400">K. T. Spark-3, Bilalpad</div>
              </div>

              <div className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700/80 space-y-1">
                <div className="text-sky-400 font-extrabold text-2xl sm:text-3xl">17+</div>
                <div className="text-xs sm:text-sm font-bold text-white">Box Formats</div>
                <div className="text-[11px] text-slate-400">Corrugated & custom</div>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column: Company Narrative & Complete Information Details - Zero Empty Space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Narrative Details with Enlarged Typography */}
          <div className="lg:col-span-7 space-y-8 text-slate-800 leading-relaxed">
            <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Company Background & Operations
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                “S Packaging is a packaging box manufacturer based in Vasai, Palghar, Maharashtra. The company manufactures and supplies a wide range of packaging solutions for businesses across different industries. Its product range includes corrugated boxes, printed packaging boxes, gift boxes, electronics packaging, food packaging and other customized packaging solutions.”
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-600" />
                <span>Manufacturing Activity & Production Setup</span>
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                From our manufacturing facility at Unit No. 1–2, Bilalpad, K. T. Spark-3 in Bilal Pada, Vasai, we convert and produce corrugated sheets and premium paperboards into durable packaging containers. Our plant setup supports single-wall (3 ply), heavy-duty double wall (5 ply), and export-grade triple-wall (7 ply), alongside plain brown shipping boxes and high-precision branded flexographic printing.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <Boxes className="w-5 h-5 text-amber-600" />
                <span>Our Business Approach</span>
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                The company focuses on producing lightweight, durable and practical packaging solutions according to customer requirements. S Packaging works with businesses requiring reliable packaging for storage, transportation, product protection and presentation. Every box is crafted with strict dimensional tolerance to ensure hassle-free taping, stacking, and shipping.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <span>Custom Requirements & Client Adaptability</span>
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Rather than forcing clients into rigid pre-made inventory, we discuss packaging solutions according to required size, quantity and specific product applications. Whether you need specialized venting for mangoes, protective partitioning for glass bottles, or precise flatware dimensions for electronic components, our manufacturing process adapts to your requirements.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap gap-4 border-t border-slate-200">
              <button
                id="about-quote-cta"
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded-xl text-base transition-colors shadow-sm cursor-pointer"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="about-catalog-cta"
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold px-6 py-3 rounded-xl text-base transition-colors cursor-pointer"
              >
                <span>Browse Full Product Catalog</span>
              </button>
            </div>
          </div>

          {/* Right Column: Complete Main Info Card + Facility Specs - Filling All Empty Space */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Verified Company Information Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-lg space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Statutory Registration & Credentials
                </div>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Company Information Card
                </h3>
              </div>

              {/* Data Table with Large Fonts and Crisp Contrast */}
              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start justify-between py-2 border-b border-slate-800 gap-3">
                  <span className="text-slate-400 font-medium text-xs sm:text-sm">Company Name:</span>
                  <span className="font-extrabold text-white text-right">{COMPANY_INFO.name}</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800 gap-3">
                  <span className="text-slate-400 font-medium text-xs sm:text-sm">Nature of Business:</span>
                  <span className="font-bold text-amber-300 text-right">{COMPANY_INFO.businessType}</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800 gap-3">
                  <span className="text-slate-400 font-medium text-xs sm:text-sm">Legal Status:</span>
                  <span className="font-bold text-slate-200 text-right">{COMPANY_INFO.legalStatus}</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800 gap-3">
                  <span className="text-slate-400 font-medium text-xs sm:text-sm">Proprietor:</span>
                  <span className="font-bold text-white text-right flex items-center gap-1.5">
                    <User className="w-4 h-4 text-amber-400" />
                    {COMPANY_INFO.proprietor}
                  </span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800 gap-3">
                  <span className="text-slate-400 font-medium text-xs sm:text-sm">GST Number:</span>
                  <span className="font-mono font-bold text-amber-300 bg-slate-800 px-2.5 py-0.5 rounded border border-slate-700 text-xs sm:text-sm">
                    {COMPANY_INFO.gstNo}
                  </span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800 gap-3">
                  <span className="text-slate-400 font-medium text-xs sm:text-sm">GST Registration:</span>
                  <span className="font-semibold text-slate-200 text-right flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    {COMPANY_INFO.gstRegistrationDate}
                  </span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800 gap-3">
                  <span className="text-slate-400 font-medium text-xs sm:text-sm">Annual Turnover:</span>
                  <span className="font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded text-xs sm:text-sm">
                    {COMPANY_INFO.annualTurnover}
                  </span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800 gap-3">
                  <span className="text-slate-400 font-medium text-xs sm:text-sm">Factory Telephone:</span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="font-bold text-amber-400 hover:text-amber-300 text-right flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4" />
                    {COMPANY_INFO.displayPhone}
                  </a>
                </div>
              </div>

              {/* Manufacturing Location Address */}
              <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-slate-300 space-y-2">
                <div className="flex items-center gap-2 font-bold text-white">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Registered Manufacturing Plant Address:</span>
                </div>
                <p className="leading-relaxed text-slate-300">
                  {COMPANY_INFO.address.fullAddress}
                </p>
                <div className="text-[11px] text-slate-400 pt-1">
                  Landmark: Opposite Pani Tanki, Bilal Pada, Vasai East
                </div>
              </div>
            </div>

            {/* Additional Plant Capabilities Card Filling the Space on the Right */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base sm:text-lg">
                <Truck className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Vasai Logistics & Dispatch Capabilities</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Direct truck dispatches across Vasai, Palghar, Thane, Mumbai & MMR.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pan-India freight coordination for bulk container shipments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Turnaround within 3–7 working days for customized die-cut orders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Direct contact with proprietor Saurav Singh for commercial negotiations.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Manufacturing Categories Grid */}
        <div className="pt-10 border-t border-slate-200 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Core Manufactured Box Categories</h2>
            <p className="text-sm sm:text-base text-slate-600">
              Engineered with practical durability, high bursting factor, and lightweight structural integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Corrugated Boxes</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Single and multi-wall cartons (3-ply, 5-ply, 7-ply) for heavy load-bearing and transit safety.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-800 font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Printed Packaging</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Kraft and coated printed cartons communicating brand identity, barcodes, and handling marks.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Food Packaging</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Hygienic bakery, cake, pastry, and agricultural farm produce and seasonal mango ventilation boxes.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-800 font-bold">
                <Box className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Specialized Packaging</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Electronics flat boxes, long-format cartons, presentation gift hampers, and bottle packaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
