import React from 'react';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  // Dimensions based on size
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
  };

  const titleSizes = {
    sm: 'text-base font-extrabold tracking-tight',
    md: 'text-xl font-extrabold tracking-tight',
    lg: 'text-2xl font-extrabold tracking-tight',
  };

  const subtitleSizes = {
    sm: 'text-[9px] font-bold tracking-wider',
    md: 'text-[11px] font-bold tracking-wider',
    lg: 'text-xs font-bold tracking-wider',
  };

  const isLight = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* 3D Isometric Corrugated Carton Icon Emblem */}
      <div
        className={`${iconSizes[size]} relative shrink-0 rounded-xl overflow-hidden shadow-sm flex items-center justify-center`}
      >
        <svg
          viewBox="0 0 64 64"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`gradTop-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id={`gradLeft-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#B45309" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <linearGradient id={`gradRight-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
            <linearGradient id={`gradS-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#FEF3C7" />
            </linearGradient>
          </defs>

          {/* Background Squircle */}
          <rect width="64" height="64" rx="14" fill="#0F172A" />
          <rect
            width="62"
            height="62"
            x="1"
            y="1"
            rx="13"
            fill="none"
            stroke={isLight ? '#475569' : '#334155'}
            strokeWidth="1.5"
          />

          <g transform="translate(0, 1)">
            {/* Top Face of Corrugated Box */}
            <polygon points="32,11 51,21.5 32,32 13,21.5" fill={`url(#gradTop-${variant})`} />
            
            {/* Left Face */}
            <polygon points="13,21.5 32,32 32,53 13,42.5" fill={`url(#gradLeft-${variant})`} />
            
            {/* Right Face */}
            <polygon points="32,32 51,21.5 51,42.5 32,53" fill={`url(#gradRight-${variant})`} />

            {/* Subtle box tape seam */}
            <line x1="32" y1="11" x2="32" y2="32" stroke="#92400E" strokeWidth="1" strokeDasharray="2,1" />

            {/* Embossed S Ribbon Monogram */}
            <path
              d="M 38.5,20.5 C 36,18 33,17.5 30,18.5 C 26.5,20 25,23 27.5,26 C 29,28 33.5,30 34,32.5 C 34.5,35.5 31.5,38 28,38.5 C 24.5,39 22,37.5 21,35"
              fill="none"
              stroke={`url(#gradS-${variant})`}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center text-left">
        <span
          className={`${titleSizes[size]} leading-none ${
            isLight ? 'text-white' : 'text-slate-900'
          }`}
        >
          S PACKAGING
        </span>
        {showSubtitle && (
          <span
            className={`${subtitleSizes[size]} uppercase leading-tight mt-1 ${
              isLight ? 'text-amber-400' : 'text-amber-700'
            }`}
          >
            Box Manufacturer • Vasai
          </span>
        )}
      </div>
    </div>
  );
};
