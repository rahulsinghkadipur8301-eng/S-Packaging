/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyIntro } from './components/CompanyIntro';
import { PackagingSolutions } from './components/PackagingSolutions';
import { ManufacturingCapabilities } from './components/ManufacturingCapabilities';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductDetailPage } from './components/ProductDetailPage';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutPage } from './components/AboutPage';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { ProprietorInquiryViewer } from './components/ProprietorInquiryViewer';
import { PRODUCTS } from './data/products';
import { COMPANY_INFO } from './data/company';
import { Product } from './types';
import { Phone, ArrowUp } from 'lucide-react';

export default function App() {
  // Navigation views: 'home' | 'about' | 'products' | 'solutions' | 'why-us' | 'contact' | 'product-detail'
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState<boolean>(false);
  const [inquiryPreselect, setInquiryPreselect] = useState<string>('');
  const [inquiryViewerOpen, setInquiryViewerOpen] = useState<boolean>(false);
  const [inquiryCount, setInquiryCount] = useState<number>(1);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Initialize view from URL or pushState
  const syncRouteFromPath = () => {
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    if (path === '/' || path === '') {
      setCurrentView('home');
      setSelectedProduct(null);
      document.title =
        'S Packaging | Corrugated & Packaging Box Manufacturer in Vasai, Maharashtra';
    } else if (path === '/about') {
      setCurrentView('about');
      setSelectedProduct(null);
      document.title = 'About S Packaging | Box Manufacturer in Vasai, Maharashtra';
    } else if (path === '/products') {
      setCurrentView('products');
      setSelectedProduct(null);
      document.title = 'Product Catalog | S Packaging - Corrugated & Custom Packaging';
    } else if (path.startsWith('/products/')) {
      const slug = path.replace('/products/', '');
      const matched = PRODUCTS.find((p) => p.slug === slug);
      if (matched) {
        setSelectedProduct(matched);
        setCurrentView('product-detail');
        document.title = `${matched.name} | S Packaging Manufacturer Vasai`;
      } else {
        setCurrentView('products');
        document.title = 'Product Catalog | S Packaging';
      }
    } else if (path === '/solutions') {
      setCurrentView('solutions');
      setSelectedProduct(null);
      document.title = 'Packaging Solutions | S Packaging Vasai';
    } else if (path === '/why-us') {
      setCurrentView('why-us');
      setSelectedProduct(null);
      document.title = 'Why Choose S Packaging | Vasai Manufacturer';
    } else if (path === '/contact') {
      setCurrentView('contact');
      setSelectedProduct(null);
      document.title = 'Contact S Packaging | Vasai, Palghar, Maharashtra';
    }
  };

  useEffect(() => {
    syncRouteFromPath();
    window.addEventListener('popstate', syncRouteFromPath);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    // Initial fetch count
    fetch('/api/inquiries')
      .then((res) => res.json())
      .then((data) => {
        if (data.count !== undefined) {
          setInquiryCount(data.count);
        }
      })
      .catch(() => {});

    return () => {
      window.removeEventListener('popstate', syncRouteFromPath);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigateTo = (view: string, productSlug?: string) => {
    let url = '/';
    if (view === 'about') url = '/about';
    else if (view === 'products') url = '/products';
    else if (view === 'solutions') url = '/solutions';
    else if (view === 'why-us') url = '/why-us';
    else if (view === 'contact') url = '/contact';
    else if (view === 'product-detail' && productSlug) url = `/products/${productSlug}`;

    window.history.pushState({}, '', url);
    setCurrentView(view);
    if (view !== 'product-detail') {
      setSelectedProduct(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update document title
    if (view === 'home') {
      document.title =
        'S Packaging | Corrugated & Packaging Box Manufacturer in Vasai, Maharashtra';
    } else if (view === 'about') {
      document.title = 'About S Packaging | Box Manufacturer in Vasai, Maharashtra';
    } else if (view === 'products') {
      document.title = 'Product Catalog | S Packaging - Corrugated & Custom Packaging';
    } else if (view === 'solutions') {
      document.title = 'Packaging Solutions | S Packaging Vasai';
    } else if (view === 'why-us') {
      document.title = 'Why Choose S Packaging | Vasai Manufacturer';
    } else if (view === 'contact') {
      document.title = 'Contact S Packaging | Vasai, Palghar, Maharashtra';
    }
  };

  const handleOpenProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
    window.history.pushState({}, '', `/products/${product.slug}`);
    document.title = `${product.name} | S Packaging Manufacturer Vasai`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProductBySlug = (slug: string) => {
    const matched = PRODUCTS.find((p) => p.slug === slug);
    if (matched) {
      handleOpenProductDetail(matched);
    } else {
      navigateTo('products');
    }
  };

  const handleRequestQuote = (productName?: string) => {
    setInquiryPreselect(productName || (selectedProduct ? selectedProduct.name : PRODUCTS[0].name));
    setInquiryModalOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      {/* Sticky Header */}
      <Navbar
        currentView={currentView}
        onNavigate={navigateTo}
        onRequestQuote={handleRequestQuote}
        onOpenInquiryViewer={() => setInquiryViewerOpen(true)}
        inquiryCount={inquiryCount}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <Hero
              onExploreProducts={() => navigateTo('products')}
              onRequestQuote={() => handleRequestQuote()}
            />
            <CompanyIntro
              onLearnMore={() => navigateTo('about')}
              onRequestQuote={() => handleRequestQuote()}
            />
            <PackagingSolutions
              onSelectProductBySlug={handleOpenProductBySlug}
              onRequestCustomQuote={() => handleRequestQuote('Custom Packaging Solution')}
              onExploreCategory={() => navigateTo('products')}
            />
            <ManufacturingCapabilities
              onRequestCustomQuote={(details) => handleRequestQuote(details || 'Custom Box Specification')}
              onExploreFullCatalog={() => navigateTo('products')}
            />
            <WhyChooseUs onRequestQuote={() => handleRequestQuote()} />
            <ContactSection onInquirySubmitted={() => setInquiryCount((c) => c + 1)} />
          </>
        )}

        {currentView === 'products' && (
          <ProductCatalog
            onViewProduct={handleOpenProductDetail}
            onSendInquiry={(p) => handleRequestQuote(p.name)}
            onRequestCustomQuote={() => handleRequestQuote('Custom Packaging Solution')}
            isHomepageSection={false}
          />
        )}

        {currentView === 'product-detail' && selectedProduct && (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => navigateTo('products')}
            onRequestQuote={(name) => handleRequestQuote(name)}
            onSelectProduct={handleOpenProductDetail}
          />
        )}

        {currentView === 'solutions' && (
          <PackagingSolutions
            onSelectProductBySlug={handleOpenProductBySlug}
            onRequestCustomQuote={() => handleRequestQuote('Custom Packaging Solution')}
            onExploreCategory={() => navigateTo('products')}
          />
        )}

        {currentView === 'why-us' && (
          <WhyChooseUs onRequestQuote={() => handleRequestQuote()} />
        )}

        {currentView === 'about' && (
          <AboutPage
            onRequestQuote={() => handleRequestQuote()}
            onExploreProducts={() => navigateTo('products')}
          />
        )}

        {currentView === 'contact' && (
          <ContactSection onInquirySubmitted={() => setInquiryCount((c) => c + 1)} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onSelectCategory={() => navigateTo('products')}
        onRequestQuote={() => handleRequestQuote()}
        onOpenInquiryViewer={() => setInquiryViewerOpen(true)}
      />

      {/* Inquiry & Quotation Modal (Core Function) */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        preselectedProduct={inquiryPreselect}
        onInquirySubmitted={() => setInquiryCount((c) => c + 1)}
      />

      {/* Proprietor Inquiry Log Viewer */}
      <ProprietorInquiryViewer
        isOpen={inquiryViewerOpen}
        onClose={() => setInquiryViewerOpen(false)}
        onInquiryCountChange={(count) => setInquiryCount(count)}
      />

      {/* Floating Quick Action: Call Direct & Scroll Top */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2.5">
        <a
          id="floating-phone-call"
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-4 rounded-full shadow-lg border border-slate-700 text-xs font-bold transition-all hover:scale-102"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span className="hidden sm:inline">Call:</span>
          <span>{COMPANY_INFO.phone}</span>
        </a>

        {showScrollTop && (
          <button
            onClick={handleScrollToTop}
            className="p-2.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-full shadow-md transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
