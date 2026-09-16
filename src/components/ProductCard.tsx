import React from 'react';
import { Product } from '../types';
import { Eye, Send, ArrowUpRight, Tag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewProduct: (product: Product) => void;
  onSendInquiry: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewProduct,
  onSendInquiry,
}) => {
  return (
    <div
      id={`product-card-${product.slug}`}
      className="group flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all hover:border-slate-300"
    >
      {/* Product Image */}
      <div
        className="relative aspect-4/3 bg-slate-100 overflow-hidden cursor-pointer"
        onClick={() => onViewProduct(product)}
      >
        <img
          src={product.primaryImage}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2.5 py-1 text-[11px] font-semibold bg-white/95 text-slate-800 rounded-md shadow-xs backdrop-blur-xs border border-slate-200/80">
            {product.category}
          </span>
        </div>

        {/* Pricing Notice Pill */}
        <div className="absolute bottom-3 right-3">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium bg-slate-900/90 text-amber-300 rounded shadow-xs">
            <Tag className="w-3 h-3" />
            <span>Request Pricing</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3
            onClick={() => onViewProduct(product)}
            className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors cursor-pointer leading-snug"
          >
            {product.name}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Quick Spec Tags */}
          <div className="pt-1 flex flex-wrap gap-1.5 text-[11px] text-slate-600">
            {product.specifications.plyConstruction !== 'Available as per requirement' && (
              <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                {product.specifications.plyConstruction}
              </span>
            )}
            <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
              Custom Sizes Available
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
          <button
            id={`view-btn-${product.slug}`}
            onClick={() => onViewProduct(product)}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Product</span>
          </button>

          <button
            id={`inquire-btn-${product.slug}`}
            onClick={() => onSendInquiry(product)}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-md transition-colors shadow-2xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send Inquiry</span>
          </button>
        </div>
      </div>
    </div>
  );
};
