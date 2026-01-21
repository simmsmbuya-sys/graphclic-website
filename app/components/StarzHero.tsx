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
                  alt={`${currentSlideData.headline} - B2B video production Washington DC GraphClic`}
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

            {/* Dark Gradient Overlays - Lighter for better visibility */}
            {/* Left-to-right gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none" />
            {/* Top-to-bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Headline */}
                <motion.h1
                  initial={false}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-white"
                  style={{
                    textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)',
                  }}
                >
                  {currentSlideData.headline}
                </motion.h1>

                {/* Subtitle - Gold */}
                <motion.h2
                  initial={false}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-graphclic-gold"
                  style={{
                    textShadow: '0 4px 20px rgba(212,175,55,0.6), 0 2px 8px rgba(0,0,0,0.6)',
                  }}
                >
                  {currentSlideData.subtitle}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={false}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mt-6"
                  style={{
                    textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                  }}
                >
                  {currentSlideData.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 mt-8"
                >
                  {/* Primary Button - Red */}
                  <Link href={currentSlideData.primaryButton.href || '#'} passHref>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-graphclic-red hover:bg-graphclic-red-dark text-white text-lg font-semibold rounded-lg transition-all flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(153,27,30,0.5)] hover:shadow-[0_6px_30px_rgba(153,27,30,0.7)]"
                    >
                      {currentSlideData.primaryButton.text}
                      <ArrowRight size={20} />
                    </motion.button>
                  </Link>

                  {/* Secondary Button - Glass morphism */}
                  <Link href={currentSlideData.secondaryButton.href || '#'} passHref>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white/30 text-white text-lg font-semibold rounded-lg transition-all flex items-center justify-center gap-3"
                      style={{
                        textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                      }}
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
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#FFD700] scale-125 w-8'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Bottom Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-8 z-30"
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
    </section>
  );
}
