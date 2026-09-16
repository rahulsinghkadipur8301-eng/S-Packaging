import React from 'react';
import { Layers, Sparkles, Utensils, Box, Settings, ArrowRight, Check } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface PackagingSolutionsProps {
  onSelectProductBySlug: (slug: string) => void;
  onRequestCustomQuote: () => void;
  onExploreCategory: (category: string) => void;
}

export const PackagingSolutions: React.FC<PackagingSolutionsProps> = ({
  onSelectProductBySlug,
  onRequestCustomQuote,
  onExploreCategory,
}) => {
  const categories = [
    {
      title: 'Corrugated Packaging',
      description: 'Engineered multi-wall and single-wall corrugated shipping boxes built for stackability, compression endurance, and heavy payload transit.',
      icon: Layers,
      accent: 'amber',
      items: [
        { name: '3 Ply Corrugated Box', slug: '3-ply-corrugated-box' },
        { name: '7 Ply Corrugated Box', slug: '7-ply-corrugated-box' },
        { name: 'Plain Packaging Boxes', slug: 'plain-packaging-boxes' },
        { name: 'Packaging Box', slug: 'packaging-box' },
      ],
      image: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Printed Packaging',
      description: 'Brand-focused printed packaging cartons delivering crisp logos, handling directions, and barcodes on virgin kraft and coated boards.',
      icon: Sparkles,
      accent: 'orange',
      items: [
        { name: 'Kraft Printed Corrugated Boxes', slug: 'kraft-printed-corrugated-boxes' },
        { name: 'Printed Packaging Box', slug: 'printed-packaging-box' },
        { name: 'Printed Corrugated Box', slug: 'printed-corrugated-box' },
      ],
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Food Packaging',
      description: 'Hygienic, moisture-tolerant and aerated boxes designed for bakeries, confectionery, agricultural produce, and seasonal fruits.',
      icon: Utensils,
      accent: 'emerald',
      items: [
        { name: 'Food Packaging Box', slug: 'food-packaging-box' },
        { name: 'Pastry Printed Box', slug: 'pastry-printed-box' },
        { name: 'Cake Box', slug: 'cake-box' },
        { name: 'Fruit & Vegetable Packaging Boxes', slug: 'fruit-and-vegetable-packaging-boxes' },
        { name: 'Fruit Packaging Box', slug: 'fruit-packaging-box' },
        { name: 'Mango Packing Box', slug: 'mango-packing-box' },
      ],
      image: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Specialized Packaging',
      description: 'Form-factor engineered packaging for electronics flatware, elongated profiles, presentation gift hampers, and fragile bottles.',
      icon: Box,
      accent: 'sky',
      items: [
        { name: 'Electronics Flat Boxes', slug: 'electronics-flat-boxes' },
        { name: 'Long Packaging Box', slug: 'long-packaging-box' },
        { name: 'Printed Gift Box', slug: 'printed-gift-box' },
        { name: 'Liquor Packaging Boxes', slug: 'liquor-packaging-boxes' },
      ],
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section id="packaging-solutions-section" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 space-y-3">
          <div className="inline-block px-3.5 py-1.5 bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-bold rounded-lg uppercase tracking-wider">
            Industrial Packaging Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Packaging Solutions by Application
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            S Packaging manufactures targeted formats tailored to protect products during storage, transportation, and presentation across diverse industrial sectors.
          </p>
        </div>

        {/* 4 Core Visual Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 transition-all shadow-xs"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-200">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-amber-600/95 backdrop-blur-xs text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold">{cat.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Included Box Formats:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cat.items.map((item, itemIdx) => (
                        <button
                          key={itemIdx}
                          id={`sol-link-${item.slug}`}
                          onClick={() => onSelectProductBySlug(item.slug)}
                          className="flex items-center gap-2 text-left text-xs font-medium text-slate-800 hover:text-amber-700 bg-white p-2 rounded-md border border-slate-200/80 hover:border-amber-300 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                          <span className="truncate">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between">
                    <button
                      onClick={() => onExploreCategory(cat.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      <span>Explore {cat.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CUSTOM PACKAGING SECTION */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-600/30 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
                <Settings className="w-3.5 h-3.5" />
                <span>Custom Packaging Facility</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Bespoke Packaging Solutions Engineered to Your Needs
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Have specific carton dimensions, custom logo graphics, special flute configurations, or partition inserts? S Packaging produces customized packaging boxes tailored directly to your supply chain requirements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Custom Outer Dimensions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Tailored Single / Multi-wall Ply</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Brand Logo & Warning Prints</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <button
                id="solutions-discuss-requirement-btn"
                onClick={onRequestCustomQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 px-6 rounded-md text-sm sm:text-base shadow-sm transition-colors cursor-pointer"
              >
                <span>Discuss Your Packaging Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-slate-400 mt-2">
                Fast response from Vasai production team
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
