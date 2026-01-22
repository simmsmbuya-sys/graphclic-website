'use client';

import { useEffect } from 'react';
import Navigation from './Navigation';
import StarzHero from './StarzHero';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePageClient() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    const imageContainers = document.querySelectorAll('.why-graphclic .image-container, .ready-story .image-container');
    imageContainers.forEach((container) => observer.observe(container));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      {/* Hidden H1 for SEO - GraphClic brand name */}
      <h1 className="sr-only">GraphClic - B2B Video Production & Documentary Films Washington DC</h1>
      <StarzHero />

      {/* Why GraphClic Section */}
      <section className="relative min-h-[70vh] sm:min-h-[85vh] md:h-screen w-full overflow-hidden group why-graphclic">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 w-full h-full image-container" style={{ transform: 'scale(1.05)' }}>
            <div className="absolute inset-0 w-full h-full image-wrapper">
              <Image
                src="/images/hero/image2.jpg"
                alt="B2B video production equipment GraphClic Washington DC"
                fill
                priority
                className="object-cover object-center"
                quality={90}
                sizes="100vw"
              />
            </div>
          </div>
          <div 
            className="absolute inset-0 w-full h-full overlay-gradient"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.5))'
            }}
          />
        </div>

        <div className="relative z-10 min-h-[70vh] sm:min-h-[85vh] md:h-full flex items-center justify-center py-16 sm:py-20 md:py-0 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              className="space-y-4 sm:space-y-5 md:space-y-6"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.2] sm:leading-[1.15] md:leading-[1.1] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              >
                B2B Video Production & Documentary Films in Washington DC
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl lg:text-xl text-white/95 max-w-4xl mx-auto leading-[1.7] sm:leading-relaxed font-normal mt-4 sm:mt-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              >
                <strong className="font-bold text-white">GraphClic</strong> is the leading B2B video production DC company specializing in corporate video marketing DMV, brand storytelling video production, SaaS product video production, and customer testimonial video services.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.8 }}
                className="flex justify-center pt-4 sm:pt-5"
              >
                <div className="w-24 sm:w-32 md:w-40 h-1 bg-graphclic-gold"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative min-h-[70vh] sm:min-h-[85vh] md:h-screen w-full overflow-hidden group ready-story">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 w-full h-full image-container" style={{ transform: 'scale(1.05)' }}>
            <div className="absolute inset-0 w-full h-full image-wrapper">
              <Image
                src="/images/hero/image5.jpg"
                alt="Corporate video production studio GraphClic DMV"
                fill
                priority
                className="object-cover object-center"
                quality={90}
                sizes="100vw"
              />
            </div>
          </div>
          <div 
            className="absolute inset-0 w-full h-full overlay-gradient"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.5))'
            }}
          />
        </div>

        <div className="relative z-10 min-h-[70vh] sm:min-h-[85vh] md:h-full flex items-center justify-center py-16 sm:py-20 md:py-0 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              className="space-y-6 sm:space-y-8 md:space-y-10"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.2] sm:leading-[1.15] md:leading-[1.1] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              >
                Ready to Tell Your Story?
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.8 }}
                className="flex justify-center pt-4 sm:pt-5"
              >
                <div className="w-24 sm:w-32 md:w-40 h-1 bg-graphclic-gold"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6 sm:pt-8"
              >
                <Link href="/contact" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-graphclic-red hover:bg-graphclic-red-dark text-white text-base sm:text-lg font-bold transition-all shadow-2xl flex items-center justify-center gap-3 rounded-lg min-h-[44px]"
                  >
                    Get In Touch
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
                <Link href="/our-work" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-white hover:bg-white hover:text-black text-white text-base sm:text-lg font-bold transition-all flex items-center justify-center gap-3 rounded-lg min-h-[44px]"
                  >
                    View Our Portfolio
                    <PlayCircle size={20} />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
