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
      <StarzHero />

      {/* Why GraphClic Section */}
      <section className="relative h-screen w-full overflow-hidden group why-graphclic">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 w-full h-full image-container" style={{ transform: 'scale(1.05)' }}>
            <div className="absolute inset-0 w-full h-full image-wrapper">
              <Image
                src="/images/hero/image2.jpg"
                alt="B2B video production equipment GraphClic Washington DC"
                fill
                priority
                className="object-contain sm:object-cover object-center"
                quality={90}
                sizes="100vw"
              />
            </div>
          </div>
          <div 
            className="absolute inset-0 w-full h-full overlay-gradient"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4))'
            }}
          />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              className="space-y-4 md:space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] sm:leading-tight tracking-tight px-2"
              >
                B2B Video Production & Documentary Films in Washington DC
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-4xl mx-auto leading-[1.6] sm:leading-relaxed font-normal px-3 sm:px-4 mt-3 sm:mt-4"
              >
                Leading B2B video production DC company specializing in corporate video marketing DMV, brand storytelling video production, SaaS product video production, and customer testimonial video services.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.8 }}
                className="flex justify-center pt-4"
              >
                <div className="w-24 h-1 bg-graphclic-gold"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative h-screen w-full overflow-hidden group ready-story">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 w-full h-full image-container" style={{ transform: 'scale(1.05)' }}>
            <div className="absolute inset-0 w-full h-full image-wrapper">
              <Image
                src="/images/hero/image5.jpg"
                alt="Corporate video production studio GraphClic DMV"
                fill
                priority
                className="object-contain sm:object-cover object-center"
                quality={90}
                sizes="100vw"
              />
            </div>
          </div>
          <div 
            className="absolute inset-0 w-full h-full overlay-gradient"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4))'
            }}
          />
        </div>

        <div className="relative z-10 h-full flex items-start justify-center pt-12 md:pt-16 lg:pt-20">
          <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              className="space-y-4 md:space-y-6"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] sm:leading-tight tracking-tight px-2 sm:px-4"
              >
                Ready to Tell Your Story?
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.8 }}
                className="flex justify-center pt-4"
              >
                <div className="w-24 h-1 bg-graphclic-gold"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-6 md:pt-8"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-5 bg-graphclic-red hover:bg-graphclic-red-dark text-white text-lg font-bold transition-all shadow-2xl flex items-center justify-center gap-3 rounded-lg"
                  >
                    Get In Touch
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
                <Link href="/our-work">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-5 border-2 border-white hover:bg-white hover:text-black text-white text-lg font-bold transition-all flex items-center justify-center gap-3 rounded-lg"
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
