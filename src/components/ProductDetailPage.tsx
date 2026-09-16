import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ArrowLeft, Send, FileText, CheckCircle2, Package, Shield, Phone, Tag } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onRequestQuote: (productName: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBack,
  onRequestQuote,
  onSelectProduct,
}) => {
  const [activeImage, setActiveImage] = useState<string>(product.primaryImage);

  useEffect(() => {
    setActiveImage(product.primaryImage);
  }, [product.id, product.primaryImage]);

  // Related products from same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6">
          <button
            id="product-detail-back-btn"
            onClick={onBack}
            className="flex items-center gap-1.5 text-slate-700 hover:text-amber-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </button>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="text-slate-900 font-semibold truncate max-w-xs">{product.name}</span>
        </div>

        {/* Main Product Container */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10">
            {/* Gallery Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-slate-900/90 text-white rounded-md shadow-xs">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              {product.galleryImages && product.galleryImages.length > 1 && (
                <div className="flex items-center gap-3">
                  {product.galleryImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImage === img
                          ? 'border-amber-600 ring-2 ring-amber-100'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Manufacturer Assurance Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <Package className="w-4 h-4 text-amber-600" />
                  <span>S Packaging Manufacturing Guarantee</span>
                </div>
                <p className="leading-relaxed">
                  Manufactured at our Vasai facility (Unit No. 1–2, Bilalpad). Every batch is checked for dimensional accuracy, proper scoring, and dependable transit protection.
                </p>
                <div className="text-[11px] text-slate-500">
                  GST: <strong>{COMPANY_INFO.gstNo}</strong> • Proprietorship: Saurav Singh
                </div>
              </div>
            </div>

            {/* Product Details & Actions Column */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold text-amber-700 tracking-wide uppercase">
                    Authentic Manufacturer Catalog
                  </span>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1">
                    {product.name}
                  </h1>
                </div>

                {/* Short Product Overview */}
                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-700 text-sm sm:text-base leading-relaxed">
                  {product.overview}
                </div>

                {/* Pricing Disclaimer */}
                <div className="flex items-center gap-2 text-xs text-slate-600 bg-amber-50/70 border border-amber-200/80 p-3 rounded-lg">
                  <Tag className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>
                    <strong>Commercial Pricing:</strong> Available via quotation based on requested quantity, dimensions, and custom printing specs.
                  </span>
                </div>

                {/* Primary CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    id="detail-request-quote-btn"
                    onClick={() => onRequestQuote(product.name)}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg text-sm shadow-xs transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Request a Quote</span>
                  </button>

                  <button
                    id="detail-send-inquiry-btn"
                    onClick={() => onRequestQuote(product.name)}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-lg text-sm transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </div>

                {/* Direct Telephone Access */}
                <div className="pt-1 flex items-center justify-between text-xs text-slate-500 border-t border-slate-150">
                  <span>Urgent wholesale or production requirement?</span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="font-semibold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {COMPANY_INFO.phone}</span>
                  </a>
                </div>
              </div>

              {/* Functional Attributes */}
              <div className="space-y-2 pt-4 border-t border-slate-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Key Features:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Information Section (Table) */}
          <div className="border-t border-slate-200 p-6 sm:p-10 bg-slate-50/50">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Product Information & Specifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-2xl">
              Specifications adhere to actual manufacturing parameters. Dimensional, ply, and material attributes are tailored to client orders.
            </p>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="w-1/3 py-3.5 px-5 font-semibold text-slate-700 bg-slate-50/75">
                      Product Type
                    </td>
                    <td className="py-3.5 px-5 text-slate-900 font-medium">
                      {product.specifications.productType}
                    </td>
                  </tr>

                  <tr className="border-b border-slate-100">
                    <td className="py-3.5 px-5 font-semibold text-slate-700 bg-slate-50/75">
                      Material
                    </td>
                    <td className="py-3.5 px-5 text-slate-800">
                      {product.specifications.material}
                    </td>
                  </tr>

                  <tr className="border-b border-slate-100">
                    <td className="py-3.5 px-5 font-semibold text-slate-700 bg-slate-50/75">
                      Ply / Construction
                    </td>
                    <td className="py-3.5 px-5 text-slate-800 font-medium">
                      {product.specifications.plyConstruction}
                    </td>
                  </tr>

                  <tr className="border-b border-slate-100">
                    <td className="py-3.5 px-5 font-semibold text-slate-700 bg-slate-50/75">
                      Application
                    </td>
                    <td className="py-3.5 px-5 text-slate-800">
                      {product.specifications.application}
                    </td>
                  </tr>

                  <tr className="border-b border-slate-100">
                    <td className="py-3.5 px-5 font-semibold text-slate-700 bg-slate-50/75">
                      Customization
                    </td>
                    <td className="py-3.5 px-5 text-slate-800">
                      {product.specifications.customization}
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-5 font-semibold text-slate-700 bg-slate-50/75">
                      Packaging Requirements
                    </td>
                    <td className="py-3.5 px-5 text-slate-800">
                      {product.specifications.packagingRequirements}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900">
              Related {product.category} Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    onSelectProduct(rel);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden p-4 flex gap-4 items-center hover:border-amber-400 cursor-pointer transition-all shadow-xs"
                >
                  <img
                    src={rel.primaryImage}
                    alt={rel.name}
                    className="w-20 h-20 rounded-lg object-cover bg-slate-100 shrink-0"
                  />
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm hover:text-amber-700 transition-colors">
                      {rel.name}
                    </h4>
                    <p className="text-slate-500 text-xs line-clamp-2">{rel.shortDescription}</p>
                    <span className="text-[11px] text-amber-700 font-semibold inline-block">
                      View Details &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
