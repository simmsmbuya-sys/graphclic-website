'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function ServicesPageClient() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative py-12 md:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-[1400px] text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-graphclic-red mb-3 sm:mb-5 tracking-tight px-2 sm:px-4 leading-[1.1] sm:leading-tight">
              Our Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 max-w-[700px] mx-auto leading-[1.6] sm:leading-relaxed font-normal px-3 sm:px-4 mt-2 sm:mt-3">
              Two specialized divisions working in harmony to create powerful video content that drives business results and inspires social change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CARD 1 - GraphClic Studios */}
      <section className="relative py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* LEFT: Large Image - On top for mobile */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-1"
            >
              <Image
                src="/images/hero/image3.jpg"
                alt="B2B video production equipment GraphClic Studios Washington DC"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>

            {/* RIGHT: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="space-y-4 sm:space-y-5 order-2 lg:order-2 px-4 sm:px-6 lg:px-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-graphclic-red mb-2 sm:mb-3 tracking-tight leading-[1.1] sm:leading-tight">
                GraphClic Studios
              </h2>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl text-graphclic-red/90 mb-2 sm:mb-3 font-bold leading-[1.2] sm:leading-tight">
                B2B Video Production
              </h3>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-3 sm:mb-4 leading-[1.7] sm:leading-relaxed max-w-[600px] font-normal">
                Strategic video production that drives business results. We create content that educates stakeholders, builds brand equity, and converts viewers into customers. Every frame is crafted with your business goals in mind.
              </p>

              {/* Services List */}
              <div className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
                {[
                  'Brand Storytelling',
                  'Product Demonstrations',
                  'Customer Testimonials',
                  'Executive Thought Leadership',
                  'Event & Conference Coverage',
                  'Social Media Content',
                  'Training & Educational Videos',
                  'Video Marketing Strategy',
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-start gap-3 py-2"
                  >
                    <span className="text-graphclic-red text-lg sm:text-xl font-bold mt-1">—</span>
                    <span className="text-base sm:text-lg md:text-xl text-gray-900 font-semibold leading-relaxed">{service}</span>
                  </motion.div>
                ))}
              </div>

              {/* Link */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-graphclic-red font-bold text-xl sm:text-2xl hover:gap-4 transition-all group"
              >
                Explore Services
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CARD 2 - GraphClic Films (REVERSED) */}
      <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* LEFT: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-4 sm:space-y-5 order-1 px-4 sm:px-6 lg:px-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-graphclic-gold mb-2 sm:mb-3 tracking-tight leading-[1.1] sm:leading-tight">
                GraphClic Films
              </h2>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl text-graphclic-gold/90 mb-2 sm:mb-3 font-bold leading-[1.2] sm:leading-tight">
                Impact-Driven Documentary Filmmaking
              </h3>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-3 sm:mb-4 leading-[1.7] sm:leading-relaxed max-w-[600px] font-normal">
                We tell authentic stories that bridge cultures, amplify underrepresented voices, and drive social impact. From USA-Africa partnerships to community narratives, our documentaries inspire action and create lasting change.
              </p>

              {/* Services List */}
              <div className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
                {[
                  'Social Impact Documentaries',
                  'USA-Africa Partnership Stories',
                  'Cultural Bridge Films',
                  'Foundation-Funded Projects',
                  'Film Festival Submissions',
                  'Educational Documentary Series',
                  'Community Story Projects',
                  'Advocacy & Awareness Films',
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-start gap-3 py-2"
                  >
                    <span className="text-graphclic-gold text-lg sm:text-xl font-bold mt-1">—</span>
                    <span className="text-base sm:text-lg md:text-xl text-gray-900 font-semibold leading-relaxed">{service}</span>
                  </motion.div>
                ))}
              </div>

              {/* Link */}
              <Link
                href="/our-work"
                className="inline-flex items-center gap-3 text-graphclic-gold font-bold text-xl sm:text-2xl hover:gap-4 transition-all group"
              >
                View Work
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* RIGHT: Large Image - On top for mobile */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-2"
            >
              <Image
                src="/images/services/image7.jpg"
                alt="Documentary filming Washington DC GraphClic Films"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS/APPROACH SECTION */}
      <section className="relative bg-white py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-graphclic-red mb-4 sm:mb-5 md:mb-6 tracking-tight text-center leading-[1.2] sm:leading-[1.1]">
              Our Approach
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {[
              { 
                number: '01',
                title: 'Strategy',
                description: 'Understanding your goals and crafting a tailored approach that aligns with your vision and objectives.'
              },
              { 
                number: '02',
                title: 'Production',
                description: 'Expert execution with state-of-the-art equipment and an award-winning team.'
              },
              { 
                number: '03',
                title: 'Post-Production',
                description: 'Refined editing, color grading, and sound design that brings your vision to life.'
              },
              { 
                number: '04',
                title: 'Delivery',
                description: 'Final assets optimized and delivered across all your distribution channels.'
              },
            ].map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                className="space-y-4 sm:space-y-5 p-6 sm:p-8 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-300 mb-4 sm:mb-5">
                  {principle.number}
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-graphclic-red mb-4 sm:mb-5 leading-tight">
                  {principle.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-medium">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative bg-black py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tight leading-[1.2] sm:leading-[1.1]">
              Let&apos;s Create Together
            </h2>
            <Link href="/contact" className="inline-block">
              <motion.button
                whileHover={{ filter: 'brightness(1.1)' }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-graphclic-red to-graphclic-red-dark text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-medium rounded-lg transition-all shadow-lg hover:shadow-xl min-h-[44px] w-full sm:w-auto"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
