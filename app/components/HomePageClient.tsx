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

      {/* What Sets Us Apart - Credibility Section */}
      <section className="relative bg-[#FAFAFA] py-20 sm:py-24 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 tracking-tight">
              What Sets Us Apart
            </h2>
            <div className="w-24 h-[1px] bg-graphclic-gold mx-auto"></div>
          </motion.div>

          {/* Credibility Cards */}
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
            {/* Card 1: Broadcast Pedigree */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative bg-white p-8 sm:p-10 md:p-12 group"
            >
              {/* Number Badge */}
              <div className="absolute top-6 right-6 text-[120px] sm:text-[150px] font-light text-gray-100 leading-none -z-0">
                01
              </div>
              {/* Image */}
              <div className="relative h-[250px] mb-6 overflow-hidden">
                <Image
                  src="/images/hero/image2.jpg"
                  alt="Broadcast video production team GraphClic"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-light text-black mb-4 tracking-tight">
                  Broadcast Pedigree, Business Results
                </h3>
                <p className="text-gray-700 font-light leading-relaxed text-base sm:text-lg mb-6">
                  Our team has produced for CNN, National Geographic, ESPN, and NBC. We bring broadcast-level storytelling to B2B brands who need to stand out in crowded markets.
                </p>
                {/* Credential Badges */}
                <div className="flex flex-wrap gap-3 text-xs text-gray-500 uppercase tracking-widest">
                  <span className="px-3 py-1 border border-gray-300">Emmy Award</span>
                  <span className="px-3 py-1 border border-gray-300">CNN</span>
                  <span className="px-3 py-1 border border-gray-300">Nat Geo</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Documentary Craft */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-white p-8 sm:p-10 md:p-12 group"
            >
              {/* Number Badge */}
              <div className="absolute top-6 right-6 text-[120px] sm:text-[150px] font-light text-gray-100 leading-none -z-0">
                02
              </div>
              {/* Image */}
              <div className="relative h-[250px] mb-6 overflow-hidden">
                <Image
                  src="/images/hero/image4.jpg"
                  alt="Documentary filmmaking craft GraphClic"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-light text-black mb-4 tracking-tight">
                  Documentary Craft Meets Corporate Discipline
                </h3>
                <p className="text-gray-700 font-light leading-relaxed text-base sm:text-lg mb-6">
                  We don&apos;t just execute your brief—we challenge it. Our documentary background means we find the authentic story, not the safe one. Then we deliver it on time and on budget.
                </p>
                {/* Credential Badges */}
                <div className="flex flex-wrap gap-3 text-xs text-gray-500 uppercase tracking-widest">
                  <span className="px-3 py-1 border border-gray-300">On Time</span>
                  <span className="px-3 py-1 border border-gray-300">On Budget</span>
                  <span className="px-3 py-1 border border-gray-300">Authentic</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Cultural Intelligence */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative bg-white p-8 sm:p-10 md:p-12 group"
            >
              {/* Number Badge */}
              <div className="absolute top-6 right-6 text-[120px] sm:text-[150px] font-light text-gray-100 leading-none -z-0">
                03
              </div>
              {/* Image */}
              <div className="relative h-[250px] mb-6 overflow-hidden">
                <Image
                  src="/images/hero/image5.jpg"
                  alt="Global cultural storytelling GraphClic"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-light text-black mb-4 tracking-tight">
                  Cultural Intelligence, Global Impact
                </h3>
                <p className="text-gray-700 font-light leading-relaxed text-base sm:text-lg mb-6">
                  From boardrooms in Tysons to communities in East Africa, we tell stories that bridge cultures and drive measurable change. It&apos;s not just video. It&apos;s strategic communication.
                </p>
                {/* Credential Badges */}
                <div className="flex flex-wrap gap-3 text-xs text-gray-500 uppercase tracking-widest">
                  <span className="px-3 py-1 border border-gray-300">USA-Africa</span>
                  <span className="px-3 py-1 border border-gray-300">Global Impact</span>
                  <span className="px-3 py-1 border border-gray-300">Cultural Bridge</span>
                </div>
              </div>
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
