'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  return (
    <footer className="bg-black border-t border-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-6">
            <Link href="/" className="inline-block group">
              {!logoError ? (
                <Image
                  src="/images/graphclic-logo.png"
                  alt="GraphClic - B2B Video Production & Documentary Films"
                  width={240}
                  height={120}
                  className="h-[120px] w-auto object-contain group-hover:opacity-90 transition-opacity mx-auto"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex items-center gap-1 justify-center">
                  <span className="text-white font-bold text-2xl group-hover:text-graphclic-gold transition-colors">Graph</span>
                  <span className="text-graphclic-gold font-bold text-2xl">Clic</span>
                </div>
              )}
            </Link>
          </div>

          {/* Tagline */}
          <p className="text-sm text-graphclic-gold uppercase tracking-wider font-semibold mb-6">
            Media Production & Marketing
          </p>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            <strong className="text-white font-semibold">GraphClic</strong> - Stories that drive business. Films that drive change. Crafting cinematic narratives that elevate brands and inspire action.
          </p>
        </div>
      </div>
    </footer>
  );
}
