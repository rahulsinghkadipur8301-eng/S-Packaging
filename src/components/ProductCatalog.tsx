import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from './ProductCard';
import { Search, SlidersHorizontal, Info, ShieldCheck } from 'lucide-react';

interface ProductCatalogProps {
  onViewProduct: (product: Product) => void;
  onSendInquiry: (product: Product) => void;
  onRequestCustomQuote: () => void;
  initialCategory?: string;
  isHomepageSection?: boolean;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onViewProduct,
  onSendInquiry,
  onRequestCustomQuote,
  initialCategory = 'All Products',
  isHomepageSection = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All Products' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.specifications.productType.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="product-catalog-section"
      className={`py-16 ${isHomepageSection ? 'bg-slate-50' : 'bg-white'}`}
    >
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold rounded-md uppercase tracking-wider mb-2">
              Complete Manufacturing Catalog
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              {isHomepageSection ? 'Featured Packaging Products' : 'All Packaging Products & Boxes'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Manufactured in Vasai, Palghar. Choose from standard configurations or specify custom dimensions, ply layers, and brand printing.
            </p>
          </div>

          {/* Pricing Note */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-3 text-xs text-amber-900 max-w-md flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              <strong>Custom B2B Quotations:</strong> Pricing depends on order quantity, dimensions, flute/ply, material liner, and printing requirements.
            </p>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs mb-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  id={`cat-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                    active
                      ? 'bg-slate-900 text-white shadow-2xs font-semibold'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="product-catalog-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 17 packaging box formats..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-md text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewProduct={onViewProduct}
                onSendInquiry={onSendInquiry}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-xl border border-slate-200 p-8">
            <p className="text-slate-600 font-medium mb-3">No packaging boxes matched "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Products');
              }}
              className="text-amber-700 hover:text-amber-800 text-sm font-semibold underline"
            >
              Reset filters and view all 17 products
            </button>
          </div>
        )}

        {/* Bottom Banner for Custom Requirement */}
        <div className="mt-14 bg-slate-900 text-white rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold">Need a specific box size, ply or custom logo print?</h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              S Packaging produces custom sizes, heavy-duty configurations, and tailored box formats according to your exact product dimensions.
            </p>
          </div>

          <button
            id="catalog-custom-quote-btn"
            onClick={onRequestCustomQuote}
            className="whitespace-nowrap px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm rounded-md transition-colors shadow-xs"
          >
            Discuss Custom Requirement
          </button>
        </div>
      </div>
    </section>
  );
};
