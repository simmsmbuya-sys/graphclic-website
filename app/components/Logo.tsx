"use client";

import Link from "next/link";

export default function Logo({ className = "", showTagline = true }: { className?: string; showTagline?: boolean }) {
  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Logo Container - Horizontal Layout */}
      <div className="flex items-center gap-1">
        {/* Left: Stylized "G" with film reel motif */}
        <div className="relative">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:scale-110 transition-transform duration-200"
          >
            {/* G shape outline in dark red */}
            <path
              d="M28 6C16.402 6 7 15.402 7 27C7 38.598 16.402 48 28 48C32.651 48 36.9 46.371 40.143 43.626L33.283 36.717C31.046 38.954 27.9 40 28 40C21.373 40 16 34.627 16 28C16 21.373 21.373 16 28 16C31.3137 16 34.3137 17.6863 36.364 20.243L31.758 24.758C30.641 23.641 29.183 23 28 23C25.239 23 23 25.239 23 28C23 30.761 25.239 33 28 33C29.105 33 30 32.105 30 31H28V25H34C34 28.866 30.866 32 27 32H28"
              stroke="#991B1E"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Film reel perforations (sprocket holes) - outer edge - more perforations */}
            {[
              { cx: 28, cy: 14 },
              { cx: 42, cy: 28 },
              { cx: 28, cy: 42 },
              { cx: 14, cy: 28 },
              { cx: 38, cy: 20 },
              { cx: 38, cy: 36 },
              { cx: 18, cy: 36 },
              { cx: 18, cy: 20 },
            ].map((pos, i) => (
              <circle key={`outer-${i}`} cx={pos.cx} cy={pos.cy} r="2" fill="#D4AF37" />
            ))}
            
            {/* Film reel perforations - inner edge */}
            {[
              { cx: 28, cy: 18 },
              { cx: 38, cy: 28 },
              { cx: 28, cy: 38 },
              { cx: 18, cy: 28 },
            ].map((pos, i) => (
              <circle key={`inner-${i}`} cx={pos.cx} cy={pos.cy} r="1.5" fill="#D4AF37" />
            ))}
            
            {/* Gold play button triangle in center */}
            <path
              d="M23 20L23 36L37 28L23 20Z"
              fill="#D4AF37"
            />
          </svg>
        </div>

        {/* Right: "clic" text with TV outline for the "c" */}
        <div className="relative -ml-2">
          <svg
            width="52"
            height="56"
            viewBox="0 0 52 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:scale-105 transition-transform duration-200"
          >
            {/* TV outline forming the "c" */}
            <path
              d="M14 12C14 8.68629 16.6863 6 20 6H32C35.3137 6 38 8.68629 38 12V44C38 47.3137 35.3137 50 32 50H20C16.6863 50 14 47.3137 14 44V12Z"
              stroke="#991B1E"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* TV screen inner frame */}
            <rect
              x="18"
              y="16"
              width="18"
              height="24"
              rx="2"
              stroke="#991B1E"
              strokeWidth="2.5"
              fill="none"
            />
            
            {/* TV control knobs on right side */}
            <circle cx="42" cy="24" r="2.5" fill="#991B1E" />
            <circle cx="42" cy="32" r="2.5" fill="#991B1E" />
            
            {/* "c" opening curves */}
            <path
              d="M20 24C20 22 20 18 24 18"
              stroke="#991B1E"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M20 32C20 34 20 38 24 38"
              stroke="#991B1E"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* "li" text */}
            <text x="44" y="32" fill="#991B1E" fontSize="22" fontFamily="Arial, sans-serif" fontWeight="bold" letterSpacing="0">li</text>
            
            {/* Gold dot on "i" */}
            <circle cx="48" cy="24" r="2.5" fill="#D4AF37" />
          </svg>
        </div>
      </div>

      {/* Tagline and brand text */}
      {showTagline && (
        <div className="flex flex-col gap-0.5">
          <span className="text-xl lg:text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
            Graph<span className="text-[#D4AF37]">Clic</span>
          </span>
          <span className="text-[10px] lg:text-[11px] uppercase tracking-wider text-[#D4AF37] font-bold leading-tight">
            MEDIA PRODUCTION & MARKETING
          </span>
        </div>
      )}

      {/* Simple text version when tagline hidden (for footer) */}
      {!showTagline && (
        <span className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
          Graph<span className="text-[#D4AF37]">Clic</span>
        </span>
      )}
    </Link>
  );
}
