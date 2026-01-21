'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlideshowProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  autoPlayInterval?: number;
  isPaused?: boolean;
  currentIndex: number;
  onNext: () => void;
  onPrevious: () => void;
  onNavigateToIndex: (index: number) => void;
  isHovered: boolean;
}

export default function HeroSlideshow({
  images,
  autoPlayInterval = 6000,
  isPaused = false,
  currentIndex,
  onNext,
  onPrevious,
  onNavigateToIndex,
  isHovered,
}: HeroSlideshowProps) {
  const [imageError, setImageError] = useState(false);

  // Auto-rotate slideshow
  useEffect(() => {
    if (isPaused || images.length === 0) return;

    const interval = setInterval(() => {
      onNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, images.length, autoPlayInterval, onNext]);

  // Reset error state when image changes
  useEffect(() => {
    setImageError(false);
  }, [currentIndex]);

  if (images.length === 0) {
    return (
      <div className="absolute inset-0 w-full h-full bg-black z-0">
        {/* Fallback dark background */}
      </div>
    );
  }

  const currentImage = images[currentIndex];

  // Debug logging - Detailed
  useEffect(() => {
    console.log('🎬 ===== HeroSlideshow Debug Info =====');
    console.log('📦 Images array:', images);
    console.log('📦 Images count:', images.length);
    console.log('📸 Current index:', currentIndex);
    console.log('📸 Current image object:', currentImage);
    console.log('📸 Current image src:', currentImage?.src);
    console.log('📸 Full image path:', currentImage ? `/images/hero/${currentImage.src.split('/').pop()}` : 'N/A');
    console.log('🔍 Testing image path:', currentImage?.src);
    console.log('====================================');
  }, [images.length, currentIndex, currentImage, images]);

  // Verify component is rendering
  useEffect(() => {
    console.log('🎭 HeroSlideshow component rendered!');
    console.log('🎭 Is component mounted?', true);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Fallback dark background if image fails to load */}
          {imageError && (
            <div className="absolute inset-0 w-full h-full bg-black z-0" />
          )}

          {/* Ken Burns Effect - Subtle zoom from 1.0 to 1.1 */}
          <motion.div
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.1 }}
            transition={{
              duration: 6,
              ease: 'linear',
            }}
            className="absolute inset-0 w-full h-full"
          >
            {!imageError && (
              <>
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={currentIndex === 0}
                  quality={90}
                  unoptimized={false}
                  onError={(e) => {
                    console.error('❌ ===== IMAGE LOAD ERROR =====');
                    console.error('Failed to load:', currentImage.src);
                    console.error('Expected path: /images/hero/' + currentImage.src.split('/').pop());
                    console.error('Full error:', e);
                    console.error('Image object:', currentImage);
                    console.error('Current index:', currentIndex);
                    console.error('================================');
                    setImageError(true);
                  }}
                  onLoad={(e) => {
                    console.log('✅ ===== IMAGE LOAD SUCCESS =====');
                    console.log('Successfully loaded:', currentImage.src);
                    console.log('Image element:', e.target);
                    console.log('Current index:', currentIndex);
                    console.log('==================================');
                    setImageError(false);
                  }}
                />
                {/* Fallback test with regular img tag - Comment out if Next Image works */}
                {/* <img 
                  src={currentImage.src} 
                  alt={currentImage.alt}
                  className="w-full h-full object-cover"
                  onError={() => console.error('❌ Regular img tag also failed:', currentImage.src)}
                  onLoad={() => console.log('✅ Regular img tag loaded:', currentImage.src)}
                /> */}
              </>
            )}
          </motion.div>

          {/* Gradient Overlays - Left gradient for text readability */}
          {/* Left gradient: black (70% opacity) to transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent pointer-events-none" />
          
          {/* Bottom gradient: transparent to black (30% opacity) */}
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

          {/* Vignette effect on corners */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.3) 100%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Show on hover */}
      <AnimatePresence>
        {isHovered && images.length > 1 && (
          <>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-transparent hover:bg-white/20 rounded-full text-white transition-all duration-200 backdrop-blur-sm border border-white/30"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-transparent hover:bg-white/20 rounded-full text-white transition-all duration-200 backdrop-blur-sm border border-white/30"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Carousel Dots - Bottom Center */}
      {images.length > 1 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => onNavigateToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#FFD700] scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
