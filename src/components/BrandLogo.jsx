import React from 'react';

export default function BrandLogo({ size = "md", className = "" }) {
  // Sizes: sm (for compact/mobile), md (navbar default), lg (hero/footer)
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-2xl sm:text-3xl",
    lg: "text-4xl sm:text-5xl"
  };

  return (
    <div className={`relative inline-flex items-baseline select-none tracking-tight ${sizeClasses[size] || sizeClasses.md} ${className}`}>
      
      {/* "Bruh" in white with steam wisps over 'u' */}
      <span className="relative font-bold text-white font-['Kalam'] tracking-normal inline-block pr-0.5">
        Br
        <span className="relative inline-block">
          u
          {/* Animated Chai Steam Wisps directly above the 'u' */}
          <svg
            className="absolute -top-3 sm:-top-3.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 overflow-visible pointer-events-none"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left steam curl */}
            <path
              d="M4 14C3 10 7 8 5 3C4.2 1 3.5 0.5 4 0"
              stroke="#D46938"
              strokeWidth="1.6"
              strokeLinecap="round"
              className="animate-steam-1 opacity-90"
            />
            {/* Right steam curl */}
            <path
              d="M10 14C9 10 13 8 11 3C10.2 1 9.5 0.5 10 0"
              stroke="#D46938"
              strokeWidth="1.6"
              strokeLinecap="round"
              className="animate-steam-2 opacity-90"
            />
          </svg>
        </span>
        h
      </span>

      {/* "वेद:" in authentic Terracotta Devanagari Script with Diamond Visarga */}
      <span className="font-['Yatra_One'] text-[#D46938] tracking-normal font-normal inline-flex items-baseline ml-0.5">
        <span className="relative">
          वेद
        </span>
        {/* Diamond / Calligraphic Visarga ':' */}
        <span className="inline-flex flex-col justify-center items-center gap-[3px] ml-1 self-center pb-0.5">
          <span className="w-1.5 h-1.5 bg-[#D46938] rotate-45 transform rounded-[0.5px]"></span>
          <span className="w-1.5 h-1.5 bg-[#D46938] rotate-45 transform rounded-[0.5px]"></span>
        </span>
      </span>

    </div>
  );
}
