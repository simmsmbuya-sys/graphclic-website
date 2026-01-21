'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  autoPlayInterval?: number;
}

export default function ImageCarousel({ images, autoPlayInterval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate slideshow
  useEffect(() => {
    if (isPaused || isHovered || images.length === 0) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, isPaused, isHovered, images.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div
      className="relative w-full h-full rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images Container with Ken Burns Effect */}
      <AnimatePresence mode="wait">
        {images.map((image, index) => {
          if (index !== currentIndex) return null;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              {/* Ken Burns Effect - Slow zoom and pan */}
              <motion.div
                animate={{
                  scale: [1, 1.1],
                  x: [0, 20],
                  y: [0, 15],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear',
                }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  priority={index === 0}
                />
              </motion.div>

              {/* Subtle dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

              {/* Film grain overlay texture */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMTAwIiBudW1PY3RhdmVzPSI0Ii8+PC9maWx0ZXI+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')`,
                mixBlendMode: 'overlay'
              }} />
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Navigation Arrows - appear on hover */}
      <AnimatePresence>
        {isHovered && images.length > 1 && (
          <>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Navigation Dots - always visible */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-graphclic-gold w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
