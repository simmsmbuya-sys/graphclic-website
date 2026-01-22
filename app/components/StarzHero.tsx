'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react';

interface Slide {
  headline: string;
  subtitle: string;
  description: string;
  primaryButton: { text: string; href?: string };
  secondaryButton: { text: string; href?: string };
  imageSrc: string;
}

const slides: Slide[] = [
  {
    headline: 'Stories That Drive Business.',
    subtitle: 'Films That Drive Change.',
    description: 'B2B Video Production + Impact Documentary Filmmaking in Washington DC',
    primaryButton: { text: 'Watch Reel', href: '/our-work' },
    secondaryButton: { text: 'Get In Touch', href: '/contact' },
    imageSrc: '/images/hero/image1.jpg',
  },
  {
    headline: 'Strategic Storytelling.',
    subtitle: 'Measurable Results.',
    description: 'We develop narrative strategies that make your message stick',
    primaryButton: { text: 'Our Services', href: '/services' },
    secondaryButton: { text: 'View Portfolio', href: '/our-work' },
    imageSrc: '/images/hero/image2.jpg',
  },
  {
    headline: 'Corporate Excellence.',
    subtitle: 'Cinematic Quality.',
    description: 'Documentary-grade storytelling for B2B brands',
    primaryButton: { text: 'Corporate Services', href: '/services' },
    secondaryButton: { text: 'Learn More', href: '/about' },
    imageSrc: '/images/hero/image3.jpg',
  },
  {
    headline: 'Impact Documentaries.',
    subtitle: 'Global Stories.',
    description: 'USA-Africa partnerships and social impact films',
    primaryButton: { text: 'Documentary Films', href: '/services' },
    secondaryButton: { text: 'View Work', href: '/our-work' },
    imageSrc: '/images/hero/image4.jpg',
  },
  {
    headline: 'Your Vision.',
    subtitle: 'Our Expertise.',
    description: 'Create compelling stories that deliver results',
    primaryButton: { text: 'Get In Touch', href: '/contact' },
    secondaryButton: { text: 'Contact Us', href: '/contact' },
    imageSrc: '/images/hero/image5.jpg',
  },
];

export default function StarzHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // Auto-rotate slideshow every 6 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000); // Resume after 8 seconds
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const currentSlideData = slides[currentSlide];

  // Debug logging
  useEffect(() => {
    console.log('🎬 StarzHero initialized with', slides.length, 'slides');
    console.log('📸 Current slide:', currentSlide, currentSlideData.imageSrc);
  }, [currentSlide, currentSlideData]);

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images Slideshow */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Ken Burns Effect - Slow zoom */}
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 8, ease: 'linear' }}
              className="absolute inset-0 w-full h-full"
            >
              {!imageErrors[currentSlide] ? (
                <Image
                  src={currentSlideData.imageSrc}
                  alt={`${currentSlideData.headline} ${currentSlideData.subtitle} - B2B video production and documentary filmmaking Washington DC GraphClic`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={currentSlide === 0}
                  quality={90}
                  onError={() => {
                    console.error('❌ Image failed to load:', currentSlideData.imageSrc);
                    setImageErrors((prev) => ({ ...prev, [currentSlide]: true }));
                  }}
                  onLoad={() => {
                    console.log('✅ Image loaded successfully:', currentSlideData.imageSrc);
                  }}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <p className="text-xl">Loading...</p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Dark Gradient Overlays - Deeper, more dramatic */}
            {/* Left-to-right gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none" />
            {/* Top-to-bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/50 pointer-events-none" />
            {/* Film Grain Texture Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.05]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                backgroundSize: '200px 200px',
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex items-center pt-20 sm:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-4 sm:space-y-6"
              >
                {/* Headline - Cinematic Typography */}
                <motion.h1
                  initial={false}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.15] sm:leading-[1.1] text-white px-4 sm:px-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {currentSlideData.headline}
                </motion.h1>

                {/* Subtitle - Gold, Larger, More Prominent */}
                <motion.h2
                  initial={false}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-black leading-[1.1] text-graphclic-gold px-4 sm:px-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {currentSlideData.subtitle}
                </motion.h2>

                {/* Description - Lighter Weight, More Breathing Room */}
                <motion.p
                  initial={false}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mt-6 sm:mt-8 px-4 sm:px-6 leading-[1.8] sm:leading-relaxed font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                >
                  {currentSlideData.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-col gap-4 mt-6 sm:mt-8 px-4 sm:px-6"
                >
                  {/* Primary Button - Red */}
                  <Link href={currentSlideData.primaryButton.href || '#'} className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto px-8 py-4 sm:py-4 bg-graphclic-red hover:bg-graphclic-red-dark text-white text-base sm:text-lg font-semibold rounded-lg transition-all flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(153,27,30,0.5)] hover:shadow-[0_6px_30px_rgba(153,27,30,0.7)] min-h-[44px]"
                    >
                      {currentSlideData.primaryButton.text}
                      <ArrowRight size={20} />
                    </motion.button>
                  </Link>

                  {/* Secondary Button - Glass morphism */}
                  <Link href={currentSlideData.secondaryButton.href || '#'} className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto px-8 py-4 sm:py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white/30 text-white text-base sm:text-lg font-semibold rounded-lg transition-all flex items-center justify-center gap-3 min-h-[44px]"
                    >
                      <Play size={20} fill="currentColor" />
                      {currentSlideData.secondaryButton.text}
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <AnimatePresence>
        {isPaused && (
          <>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all border border-white/30"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all border border-white/30"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 sm:h-3 rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center ${
              index === currentSlide
                ? 'bg-[#FFD700] scale-125 w-8 sm:w-8'
                : 'bg-white/40 hover:bg-white/60 w-2 sm:w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Bottom Left - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="hidden sm:block absolute bottom-10 left-8 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-3 bg-white rounded-full"
            />
          </div>
          <p className="text-white/70 text-xs font-medium">Scroll</p>
        </motion.div>
      </motion.div>

      {/* Trust Indicators - Below Hero */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-black/80 backdrop-blur-sm border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12 text-white/70 text-xs sm:text-sm font-light uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <span className="text-graphclic-gold">★</span>
              Emmy Award-Winning Team
            </span>
            <span className="hidden sm:inline">•</span>
            <span>30+ Years Experience</span>
            <span className="hidden sm:inline">•</span>
            <span>Fortune 500 Clients</span>
            <span className="hidden sm:inline">•</span>
            <span>DMV&apos;s Premier Studio</span>
          </div>
        </div>
      </div>
    </section>
  );
}
