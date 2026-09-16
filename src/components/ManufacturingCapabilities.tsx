import React, { useState, useMemo } from 'react';
import {
  Layers,
  Settings,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Calculator,
  CheckCircle2,
  Phone,
  Ruler,
  Package,
  Sparkles,
  FileText,
  Boxes
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface ManufacturingCapabilitiesProps {
  onRequestCustomQuote: (details?: string) => void;
  onExploreFullCatalog: () => void;
}

export const ManufacturingCapabilities: React.FC<ManufacturingCapabilitiesProps> = ({
  onRequestCustomQuote,
  onExploreFullCatalog,
}) => {
  // Configurator state
  const [boxStyle, setBoxStyle] = useState<'rsc' | 'diecut' | 'fol' | 'telescopic'>('rsc');
  const [plyType, setPlyType] = useState<'3ply' | '5ply' | '7ply'>('3ply');
  const [unit, setUnit] = useState<'inch' | 'mm'>('inch');
  const [length, setLength] = useState<number>(12);
  const [width, setWidth] = useState<number>(10);
  const [height, setHeight] = useState<number>(8);
  const [quantity, setQuantity] = useState<number>(1000);
  const [printing, setPrinting] = useState<'plain' | 'single' | 'multicolor'>('single');
  const [activeTab, setActiveTab] = useState<'configurator' | 'flutes' | 'testing'>('configurator');

  // Box styles details
  const boxStyles = [
    {
      id: 'rsc',
      name: 'Regular Slotted Carton (RSC)',
      code: 'FEFCO 0201',
      desc: 'Industry standard shipping carton. All flaps meet at the center. Highest strength-to-cost ratio for bulk warehousing and courier logistics.',
      suitableFor: 'FMCG, general cargo, ecommerce dispatch, bulk shipping',
    },
    {
      id: 'diecut',
      name: 'Die-Cut Self Locking Mailer',
      code: 'FEFCO 0427',
      desc: 'Precision die-cut with integrated roll-over locking ears. No adhesive tape required on closure. Delivers a clean unboxing experience.',
      suitableFor: 'Electronics, cosmetics, subscription kits, apparel',
    },
    {
      id: 'fol',
      name: 'Full Overlap Carton (FOL)',
      code: 'FEFCO 0203',
      desc: 'Outer flaps overlap fully across the box width. Provides double-cushioned top and bottom surfaces resistant to rough handling.',
      suitableFor: 'Heavy hardware, metal parts, long/narrow products',
    },
    {
      id: 'telescopic',
      name: 'Telescopic Box (Cap & Tray)',
      code: 'FEFCO 0301',
      desc: 'Two-piece separate lid and bottom design. Offers rapid filling, easy top inspection, and superior side rim compression resistance.',
      suitableFor: 'Fresh fruits (mangoes/apples), footwear, presentation trays',
    },
  ];

  // Ply details
  const plyOptions = [
    {
      id: '3ply',
      name: '3 Ply (Single Wall)',
      thickness: '3.0 mm – 4.0 mm',
      capacity: 'Up to 15–18 kg',
      flutes: 'B Flute / C Flute',
      ideal: 'Standard lightweight dispatch, apparel, food boxes, retail shipping',
      tag: 'Most Popular',
    },
    {
      id: '5ply',
      name: '5 Ply (Double Wall)',
      thickness: '6.5 mm – 7.2 mm',
      capacity: 'Up to 40–50 kg',
      flutes: 'AB Flute / BC Flute',
      ideal: 'Industrial components, electronics, auto ancillaries, export transport',
      tag: 'Heavy Duty',
    },
    {
      id: '7ply',
      name: '7 Ply (Triple Wall)',
      thickness: '11.0 mm – 13.5 mm',
      capacity: 'Up to 100–120 kg',
      flutes: 'AAA / BBC Flute',
      ideal: 'Heavy machinery parts, industrial pumps, bulk chemicals, sea freight',
      tag: 'Extreme Duty',
    },
  ];

  // Calculate volume
  const volumeDetails = useMemo(() => {
    let l = length;
    let w = width;
    let h = height;

    if (unit === 'mm') {
      l = l / 25.4;
      w = w / 25.4;
      h = h / 25.4;
    }

    const cubicInches = l * w * h;
    const cubicFeet = cubicInches / 1728;
    const liters = cubicInches * 0.0163871;

    return {
      cuFt: cubicFeet.toFixed(2),
      liters: liters.toFixed(1),
    };
  }, [length, width, height, unit]);

  const handleLaunchQuote = () => {
    const selectedStyleObj = boxStyles.find((s) => s.id === boxStyle);
    const selectedPlyObj = plyOptions.find((p) => p.id === plyType);
    const printDesc =
      printing === 'plain'
        ? 'Plain Kraft (Unprinted)'
        : printing === 'single'
        ? 'Single-Color Brand Print'
        : 'Multi-Color Graphics Print';

    const details = `Custom ${selectedPlyObj?.name} ${selectedStyleObj?.name} - Size: ${length}x${width}x${height} ${unit} - Qty: ${quantity} units - Printing: ${printDesc}`;
    onRequestCustomQuote(details);
  };

  return (
    <section id="manufacturing-capabilities-section" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-semibold rounded-md uppercase tracking-wider mb-3">
              <Settings className="w-3.5 h-3.5 text-amber-700" />
              <span>Vasai Manufacturing Plant Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Custom Corrugated Box Engineering
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              We engineer packaging directly to your product weight, shipping mode, and branding specs in our Vasai facility. Calculate dimensions or inspect technical flute standards below.
            </p>
          </div>

          {/* Quick Nav to full 17 products */}
          <div className="shrink-0">
            <button
              onClick={onExploreFullCatalog}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 hover:text-slate-900 text-sm font-semibold rounded-lg shadow-2xs hover:shadow-xs transition-all"
            >
              <Boxes className="w-4 h-4 text-amber-600" />
              <span>Browse Full 17-Product Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 mb-8 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('configurator')}
            className={`flex items-center gap-2 px-5 py-3 border-b-2 font-semibold text-sm transition-all whitespace-nowrap ${
              activeTab === 'configurator'
                ? 'border-amber-600 text-amber-900 bg-amber-50/50 rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-t-lg'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Interactive Custom Box Estimator</span>
          </button>
          <button
            onClick={() => setActiveTab('flutes')}
            className={`flex items-center gap-2 px-5 py-3 border-b-2 font-semibold text-sm transition-all whitespace-nowrap ${
              activeTab === 'flutes'
                ? 'border-amber-600 text-amber-900 bg-amber-50/50 rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-t-lg'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Flute Architecture & Ply Ratings</span>
          </button>
          <button
            onClick={() => setActiveTab('testing')}
            className={`flex items-center gap-2 px-5 py-3 border-b-2 font-semibold text-sm transition-all whitespace-nowrap ${
              activeTab === 'testing'
                ? 'border-amber-600 text-amber-900 bg-amber-50/50 rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-t-lg'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Quality Testing & Compression Standards</span>
          </button>
        </div>

        {/* Tab 1: Interactive Configurator */}
        {activeTab === 'configurator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Controls (8 cols) */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-7">
              {/* Step 1: Box Style */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Step 1: Select Box Style
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {boxStyles.map((style) => {
                    const active = boxStyle === style.id;
                    return (
                      <button
                        key={style.id}
                        type="button"
                        onClick={() => setBoxStyle(style.id as any)}
                        className={`text-left p-4 rounded-xl border transition-all ${
                          active
                            ? 'border-amber-500 bg-amber-50/60 ring-2 ring-amber-500/20 shadow-xs'
                            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-bold text-sm text-slate-900">{style.name}</span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                            {style.code}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{style.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Ply Construction */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Step 2: Choose Ply Construction & Load Requirement
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {plyOptions.map((ply) => {
                    const active = plyType === ply.id;
                    return (
                      <button
                        key={ply.id}
                        type="button"
                        onClick={() => setPlyType(ply.id as any)}
                        className={`text-left p-4 rounded-xl border transition-all relative ${
                          active
                            ? 'border-amber-500 bg-amber-50/60 ring-2 ring-amber-500/20 shadow-xs'
                            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <span className="inline-block px-2 py-0.5 bg-slate-900 text-white text-[10px] font-semibold rounded mb-2">
                          {ply.tag}
                        </span>
                        <div className="font-bold text-sm text-slate-900 mb-1">{ply.name}</div>
                        <div className="text-xs text-amber-700 font-medium mb-1">Payload: {ply.capacity}</div>
                        <div className="text-[11px] text-slate-500">{ply.flutes} • {ply.thickness}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Dimensions */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Step 3: Specify Dimensions (L × W × H)
                  </label>
                  <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-0.5 text-xs font-medium">
                    <button
                      type="button"
                      onClick={() => setUnit('inch')}
                      className={`px-3 py-1 rounded-md transition-all ${
                        unit === 'inch' ? 'bg-white text-slate-900 shadow-2xs font-bold' : 'text-slate-600'
                      }`}
                    >
                      Inches (in)
                    </button>
                    <button
                      type="button"
                      onClick={() => setUnit('mm')}
                      className={`px-3 py-1 rounded-md transition-all ${
                        unit === 'mm' ? 'bg-white text-slate-900 shadow-2xs font-bold' : 'text-slate-600'
                      }`}
                    >
                      Millimeters (mm)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <span className="block text-xs text-slate-600 mb-1 font-medium">Length ({unit})</span>
                    <input
                      type="number"
                      min={unit === 'inch' ? 4 : 100}
                      max={unit === 'inch' ? 60 : 1500}
                      value={length}
                      onChange={(e) => setLength(Math.max(1, Number(e.target.value)))}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-600 mb-1 font-medium">Width ({unit})</span>
                    <input
                      type="number"
                      min={unit === 'inch' ? 4 : 100}
                      max={unit === 'inch' ? 48 : 1200}
                      value={width}
                      onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-600 mb-1 font-medium">Height ({unit})</span>
                    <input
                      type="number"
                      min={unit === 'inch' ? 3 : 75}
                      max={unit === 'inch' ? 48 : 1200}
                      value={height}
                      onChange={(e) => setHeight(Math.max(1, Number(e.target.value)))}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4: Printing & Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Printing & Branding
                  </label>
                  <select
                    value={printing}
                    onChange={(e) => setPrinting(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="plain">Plain Kraft (Unprinted / Economy)</option>
                    <option value="single">Single-Color Brand Logo / Handling Marks</option>
                    <option value="multicolor">Multi-Color High-Resolution Flexo Graphics</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Estimated Batch Quantity
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value={500}>500 boxes (Trial / Prototype)</option>
                    <option value={1000}>1,000 boxes (Standard batch)</option>
                    <option value={2500}>2,500 boxes (Wholesale tier)</option>
                    <option value={5000}>5,000 boxes (High-volume discount)</option>
                    <option value={10000}>10,000+ boxes (Enterprise contract)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right Summary Card (4 cols) */}
            <div className="lg:col-span-4 bg-slate-900 text-white p-6 sm:p-7 rounded-2xl shadow-lg border border-slate-800 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Ruler className="w-4 h-4" />
                  <span>Specification Summary</span>
                </div>
                <h3 className="text-xl font-bold text-white">Configured Box Order</h3>
                <p className="text-xs text-slate-400 mt-1">Vasai Factory direct pricing calculated on confirmation.</p>
              </div>

              {/* Specs Breakdown */}
              <div className="space-y-3 bg-slate-800/80 p-4 rounded-xl border border-slate-700 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-700/60">
                  <span className="text-slate-400">Style:</span>
                  <span className="font-semibold text-slate-200 text-right">
                    {boxStyles.find((s) => s.id === boxStyle)?.name}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-700/60">
                  <span className="text-slate-400">Construction:</span>
                  <span className="font-semibold text-amber-300">
                    {plyOptions.find((p) => p.id === plyType)?.name}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-700/60">
                  <span className="text-slate-400">Dimensions:</span>
                  <span className="font-semibold text-slate-200">
                    {length} × {width} × {height} {unit}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-700/60">
                  <span className="text-slate-400">Calculated Volume:</span>
                  <span className="font-semibold text-slate-200">
                    {volumeDetails.cuFt} cu.ft ({volumeDetails.liters} L)
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-700/60">
                  <span className="text-slate-400">Printing:</span>
                  <span className="font-semibold text-slate-200">
                    {printing === 'plain'
                      ? 'Plain Kraft'
                      : printing === 'single'
                      ? '1-Color Flexo'
                      : 'Multi-Color Graphics'}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Target Quantity:</span>
                  <span className="font-bold text-amber-400">{quantity.toLocaleString()} units</span>
                </div>
              </div>

              {/* Value Guarantees */}
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Virgin kraft or recycled board options</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Vasai industrial corridor dispatch across Mumbai & MH</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Direct manufacturer pricing without middlemen</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleLaunchQuote}
                  className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Factory Quote</span>
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium rounded-xl text-xs transition-colors flex items-center justify-center gap-2 border border-slate-700"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Vasai Plant: {COMPANY_INFO.displayPhone}</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Flute Architecture & Ply Ratings */}
        {activeTab === 'flutes' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-slate-900">A Flute</span>
                  <span className="text-xs font-semibold px-2 py-0.5 bg-amber-100 text-amber-800 rounded">
                    4.8 mm
                  </span>
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  Approx. 33 flutes / linear foot. Thickest standard single flute profile.
                </p>
                <div className="text-xs font-medium text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="text-slate-500 block text-[11px]">Primary Benefit:</span>
                  Maximum vertical compression & stacking strength for heavy goods.
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-slate-900">B Flute</span>
                  <span className="text-xs font-semibold px-2 py-0.5 bg-amber-100 text-amber-800 rounded">
                    3.2 mm
                  </span>
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  Approx. 47 flutes / linear foot. Dense fluting structure with flat liner contact.
                </p>
                <div className="text-xs font-medium text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="text-slate-500 block text-[11px]">Primary Benefit:</span>
                  Superior puncture resistance & smooth surface for crisp print quality.
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-slate-900">C Flute</span>
                  <span className="text-xs font-semibold px-2 py-0.5 bg-amber-100 text-amber-800 rounded">
                    4.0 mm
                  </span>
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  Approx. 39 flutes / linear foot. The universal global standard for corrugated shipping.
                </p>
                <div className="text-xs font-medium text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="text-slate-500 block text-[11px]">Primary Benefit:</span>
                  Optimal balance between vertical crush load and cushioning energy absorption.
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-slate-900">E Flute</span>
                  <span className="text-xs font-semibold px-2 py-0.5 bg-amber-100 text-amber-800 rounded">
                    1.6 mm
                  </span>
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  Approx. 90 flutes / linear foot. Micro-flute with ultra-thin profile.
                </p>
                <div className="text-xs font-medium text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="text-slate-500 block text-[11px]">Primary Benefit:</span>
                  Replaces solid paperboard for luxury cosmetic, pastry, and electronics retail boxes.
                </div>
              </div>
            </div>

            {/* Ply Construction Comparison */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="p-6 bg-slate-900 text-white">
                <h3 className="text-lg font-bold">Ply Layer Configuration Matrix</h3>
                <p className="text-xs text-slate-400 mt-1">
                  How our Vasai manufacturing line combines liners and fluted mediums for different load tiers.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 text-slate-700 uppercase tracking-wider text-[11px] font-bold border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Ply Tier</th>
                      <th className="py-3 px-4">Layer Structure</th>
                      <th className="py-3 px-4">Burst Factor (BF)</th>
                      <th className="py-3 px-4">Recommended Payload</th>
                      <th className="py-3 px-4">Target Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-800">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">3 Ply (Single Wall)</td>
                      <td className="py-3.5 px-4 text-slate-600">Outer Liner + 1 Flute + Inner Liner</td>
                      <td className="py-3.5 px-4 font-semibold text-amber-700">14 – 18 BF</td>
                      <td className="py-3.5 px-4 font-semibold">Up to 15 kg</td>
                      <td className="py-3.5 px-4 text-slate-600">Ecommerce, apparel, lightweight FMCG, food takeaway</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-amber-50/20">
                      <td className="py-3.5 px-4 font-bold text-slate-900">5 Ply (Double Wall)</td>
                      <td className="py-3.5 px-4 text-slate-600">Outer + Flute 1 + Center Liner + Flute 2 + Inner</td>
                      <td className="py-3.5 px-4 font-semibold text-amber-700">18 – 24 BF</td>
                      <td className="py-3.5 px-4 font-semibold">15 – 45 kg</td>
                      <td className="py-3.5 px-4 text-slate-600">Industrial components, electronics, fruit exports, automotive</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">7 Ply (Triple Wall)</td>
                      <td className="py-3.5 px-4 text-slate-600">3 Fluted Mediums separated by 4 Linerboards</td>
                      <td className="py-3.5 px-4 font-semibold text-amber-700">24 – 32+ BF</td>
                      <td className="py-3.5 px-4 font-semibold">45 – 120 kg+</td>
                      <td className="py-3.5 px-4 text-slate-600">Heavy machinery, engineering goods, export freight pallets</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Testing & Quality Standards */}
        {activeTab === 'testing' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 font-bold">
                BF
              </div>
              <h4 className="font-bold text-base text-slate-900">Bursting Strength (Mullen Test)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Measures the hydraulic pressure in kg/cm² needed to rupture the corrugated board. We supply 14 BF, 16 BF, 18 BF, 20 BF, and 24+ BF grades depending on client duty demands.
              </p>
              <div className="text-[11px] text-amber-800 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                Guarantees puncture safety against pointed items and rough parcel handling.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center text-sky-800 font-bold">
                ECT
              </div>
              <h4 className="font-bold text-base text-slate-900">Edge Crush Test (ECT)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Measures the vertical compressive strength along the fluting edge. Directly governs how many filled boxes can be safely palletized and stacked in warehouses without collapsing.
              </p>
              <div className="text-[11px] text-sky-800 bg-sky-50 p-2.5 rounded-lg border border-sky-200">
                Prevents warehouse stack failures and crushed bottom cartons.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold">
                COBB
              </div>
              <h4 className="font-bold text-base text-slate-900">Cobb Water Sizing & Moisture Barrier</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evaluates paper water absorption over time. Critical for agricultural produce (mangoes, greens) and cold storage transit where high ambient humidity threatens box rigidity.
              </p>
              <div className="text-[11px] text-emerald-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                Protects seasonal fruit harvests and chilled food freight.
              </div>
            </div>
          </div>
        )}

        {/* Bottom Banner to Browse Full 17 Products */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Need Standard Ready Box Formats?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Browse our complete catalog of 17 manufactured box formats—including 3 Ply, 7 Ply, Cake Boxes, Fruit Boxes, and Printed Cartons—with complete technical specifications.
            </p>
          </div>
          <button
            onClick={onExploreFullCatalog}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl shadow-xs transition-colors shrink-0 cursor-pointer"
          >
            <span>Explore 17-Product Catalog</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
