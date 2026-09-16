import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, Package, ArrowRight, ShieldCheck, Inbox } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, productSlug?: string) => void;
  onRequestQuote: (productName?: string) => void;
  onOpenInquiryViewer: () => void;
  inquiryCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onRequestQuote,
  onOpenInquiryViewer,
  inquiryCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'solutions', label: 'Packaging Solutions' },
    { id: 'why-us', label: 'Why Choose Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* Top Industrial Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-6 sm:px-10 lg:px-16 xl:px-20 border-b border-slate-800">
        <div className="w-full max-w-[1720px] mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-slate-200 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Vasai, Palghar, Maharashtra, India</span>
            </span>
            <span className="hidden md:inline-block text-slate-500">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>GST: {COMPANY_INFO.gstNo}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              id="header-phone-link"
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <button
              id="header-inquiries-badge-btn"
              onClick={onOpenInquiryViewer}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-0.5 rounded transition-colors text-xs"
              title="View submitted inquiries & dispatch log"
            >
              <Inbox className="w-3 h-3 text-sky-400" />
              <span className="hidden sm:inline">Inquiries</span>
              {inquiryCount > 0 && (
                <span className="bg-sky-500 text-white font-bold px-1.5 py-0.2 rounded-full text-[10px]">
                  {inquiryCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left focus:outline-none group cursor-pointer"
        >
          <BrandLogo variant="dark" size="md" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-amber-700 bg-amber-50/80 font-semibold'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            id="nav-cta-quote-btn"
            onClick={() => onRequestQuote()}
            className="hidden sm:inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-4.5 py-2.5 rounded-md shadow-xs transition-colors"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile hamburger button */}
          <button
            id="nav-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-4 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'text-amber-700 bg-amber-50 font-semibold'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-150 space-y-2.5">
            <button
              id="mobile-nav-quote-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 px-4 rounded-md text-sm"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              id="mobile-nav-phone-call"
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 border border-slate-300 text-slate-800 hover:bg-slate-50 font-medium py-2 px-4 rounded-md text-sm"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call Direct: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
