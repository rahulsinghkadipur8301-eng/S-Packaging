import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { Phone, MapPin, ShieldCheck, Mail, ArrowUpRight, Inbox } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
  onSelectCategory: (category: string) => void;
  onRequestQuote: () => void;
  onOpenInquiryViewer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectCategory,
  onRequestQuote,
  onOpenInquiryViewer,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      {/* Upper Footer */}
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-base shadow-xs">
                S
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">S PACKAGING</span>
                <p className="text-[11px] text-slate-400">Packaging Boxes Manufacturer</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              S Packaging manufactures durable and practical packaging boxes for businesses across multiple applications, with options for standard and customized requirements in Vasai, Palghar, Maharashtra.
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-slate-400">
              <div>
                <span className="text-slate-300 font-semibold">Proprietor:</span>{' '}
                {COMPANY_INFO.proprietor}
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  <strong className="text-slate-200">GST:</strong> {COMPANY_INFO.gstNo}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('solutions');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Packaging Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectCategory('Corrugated Packaging')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Corrugated Boxes (3 & 7 Ply)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Printed Packaging')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Printed Packaging
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Food Packaging')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Food Packaging (Bakery & Fruit)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Specialized Packaging')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Gift Boxes & Flatware
                </button>
              </li>
              <li>
                <button
                  onClick={() => onRequestQuote()}
                  className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
                >
                  Custom Packaging Solutions &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Contact & Plant
            </h4>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="font-bold text-white hover:text-amber-400 transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2 text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  Unit No. 1–2, Bilalpad, K. T. Spark-3,<br />
                  Opposite Pani Tanki, Bilal Pada,<br />
                  Vasai – 401204, Palghar, Maharashtra
                </address>
              </div>

              <div className="pt-3">
                <button
                  id="footer-quote-btn"
                  onClick={() => onRequestQuote()}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-3 rounded-md text-xs transition-colors shadow-xs"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Copyright Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-5 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="w-full max-w-[1720px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 S Packaging. All Rights Reserved. Vasai, Palghar, Maharashtra.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenInquiryViewer}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-400 text-[11px] transition-colors"
              title="Proprietor Inquiry Management Portal"
            >
              <Inbox className="w-3.5 h-3.5 text-sky-400" />
              <span>Inquiry Delivery Log</span>
            </button>
            <span>•</span>
            <span className="text-slate-400">GST: {COMPANY_INFO.gstNo}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
