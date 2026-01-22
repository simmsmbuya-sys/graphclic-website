'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { href: '/services', label: 'SERVICES' },
    { href: '/our-work', label: 'OUR WORK' },
    { href: '/about', label: 'ABOUT' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md'
            : 'bg-black/30 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo - Elegant Serif */}
            <Link href="/" className="flex items-center group z-50">
              {!logoError ? (
                <Image
                  src="/images/graphclic-logo.png"
                  alt="GraphClic - B2B Video Production & Documentary Films"
                  width={170}
                  height={50}
                  className="w-[140px] sm:w-[170px] h-auto object-contain group-hover:opacity-90 transition-opacity"
                  priority
                  unoptimized={false}
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex items-center">
                  <span className="text-white text-2xl font-light tracking-wide group-hover:opacity-90 transition-opacity" style={{ fontFamily: 'serif' }}>Graph</span>
                  <span className="text-graphclic-gold text-2xl font-light tracking-wide" style={{ fontFamily: 'serif' }}>Clic</span>
                </div>
              )}
            </Link>

            {/* Desktop Menu - Premium, Understated */}
            <div className="hidden md:flex items-center gap-12">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-gray-300 font-light text-sm uppercase tracking-widest transition-all duration-300 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-graphclic-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              {/* CTA Button - Minimal Outlined */}
              <Link
                href="/contact"
                className="px-6 py-2 border border-graphclic-gold text-graphclic-gold font-light text-sm uppercase tracking-widest transition-all duration-300 hover:bg-graphclic-gold hover:text-black"
              >
                Let&apos;s Talk
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 z-50 relative"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Full Screen, Cinematic */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
              }}
            />
            {/* Menu Panel - Full Screen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="fixed inset-0 bg-black z-50 md:hidden flex flex-col items-center justify-center"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
              }}
            >
              {/* Close Button - Top Right */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-8 right-8 text-white p-2"
                aria-label="Close menu"
              >
                <X size={28} className="text-gray-400" />
              </button>
              {/* Menu Items - Large, Touchable */}
              <div className="flex flex-col gap-8 text-center">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white text-3xl font-light uppercase tracking-widest py-6 block hover:text-graphclic-gold transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-block mt-8 px-8 py-4 border border-graphclic-gold text-graphclic-gold text-xl font-light uppercase tracking-widest hover:bg-graphclic-gold hover:text-black transition-all duration-300"
                  >
                    Let&apos;s Talk
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
