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

      {/* HERO SECTION - Premium Header */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-light">OUR WORK</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black mb-6 tracking-tight leading-[1.1]">
              Two Divisions. One Standard of Excellence.
            </h1>
            <div className="w-24 h-[1px] bg-graphclic-gold mx-auto"></div>
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
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 text-graphclic-red font-bold text-xl sm:text-2xl hover:gap-4 transition-all group"
                >
                  Explore Services
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-sm text-gray-600">
                  Or <Link href="/" className="text-graphclic-red hover:underline font-semibold">return to homepage</Link> to learn more about GraphClic.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CARD 2 - GraphClic Films - Premium Layout (Reversed) */}
      <section className="relative bg-[#FAFAFA]">
        <div className="grid lg:grid-cols-[40%_60%] min-h-[80vh]">
          {/* LEFT 40%: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center px-8 sm:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24 bg-[#FAFAFA] order-2 lg:order-1"
          >
            <div className="relative w-full">
              {/* Number Badge - Large, Faded */}
              <div className="absolute -top-8 -right-4 text-[200px] sm:text-[250px] font-light text-gray-200 leading-none -z-0">
                02
              </div>
              
              {/* Division Badge */}
              <div className="text-xs uppercase tracking-widest text-graphclic-gold mb-6 font-light">
                FILMS
              </div>
              
              {/* Title - Light, Not Bold */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black mb-4 tracking-tight leading-[1.1] relative z-10">
                GraphClic Films
              </h2>
              
              {/* Tagline */}
              <h3 className="text-xl sm:text-2xl text-gray-700 mb-8 font-light leading-relaxed relative z-10">
                Stories That Drive Change
              </h3>
              
              {/* Description - Conversational */}
              <p className="text-gray-700 font-light leading-relaxed text-base sm:text-lg mb-10 relative z-10">
                We tell authentic stories that bridge cultures, amplify underrepresented voices, and drive social impact. From USA-Africa partnerships to community narratives, our documentaries inspire action and create lasting change. This isn&apos;t corporate video—it&apos;s strategic communication with purpose.
              </p>

              {/* Services List - Minimal */}
              <div className="space-y-3 mb-10 relative z-10">
                {[
                  'Social Impact Documentaries',
                  'USA-Africa Partnership Stories',
                  'Cultural Bridge Films',
                  'Foundation-Funded Projects',
                  'Film Festival Submissions',
                  'Educational Documentary Series',
                  'Community Story Projects',
                  'Advocacy & Awareness Films',
                ].map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <span className="text-graphclic-gold text-sm">—</span>
                    <span className="text-gray-700 font-light text-sm sm:text-base">{service}</span>
                  </div>
                ))}
              </div>

              {/* CTA - Minimal */}
              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 text-graphclic-gold font-light text-sm uppercase tracking-widest hover:gap-4 transition-all group relative z-10 border-b border-transparent hover:border-graphclic-gold pb-1"
              >
                View Our Documentary Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT 60%: Large Cinematic Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative h-[400px] sm:h-[500px] lg:h-full min-h-[600px] order-1 lg:order-2"
          >
            <Image
              src="/images/services/image7.jpg"
              alt="Documentary filmmaking team on set Washington DC GraphClic Films"
              fill
              className="object-cover"
              sizes="60vw"
            />
            {/* Gold Color Overlay - Multiply Blend */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundColor: 'rgba(212, 175, 55, 0.15)',
                mixBlendMode: 'multiply',
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* PROCESS/APPROACH SECTION - Premium, Minimal */}
      <section className="relative bg-white py-20 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-light">HOW WE WORK</div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-6 tracking-tight leading-[1.1]">
              Process, Not Promises
            </h2>
            <div className="w-24 h-[1px] bg-graphclic-gold mx-auto"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {[
              { 
                number: '01',
                title: 'Strategy',
                description: 'We don&apos;t start with cameras. We start with your business objectives. Every creative decision serves a strategic purpose.'
              },
              { 
                number: '02',
                title: 'Production',
                description: 'Broadcast-grade equipment. Emmy-winning talent. The same standards we bring to CNN and National Geographic.'
              },
              { 
                number: '03',
                title: 'Post-Production',
                description: 'Cinematic editing, color grading, and sound design. We craft every frame to tell your story with maximum impact.'
              },
              { 
                number: '04',
                title: 'Delivery',
                description: 'Optimized assets across all channels. Plus strategic guidance on distribution and measurement.'
              },
            ].map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-[100px] sm:text-[120px] font-light text-gray-100 mb-4 leading-none">
                  {principle.number}
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-black mb-4 tracking-tight relative z-10">
                  {principle.title}
                </h3>
                <p className="text-gray-700 font-light leading-relaxed text-sm sm:text-base relative z-10">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - Premium, Understated */}
      <section className="relative bg-black py-20 sm:py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6 tracking-tight leading-[1.1]">
              Ready to Tell Your Story?
            </h2>
            <p className="text-gray-400 font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how premium storytelling can drive your business forward.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border border-graphclic-gold text-graphclic-gold font-light text-sm uppercase tracking-widest hover:bg-graphclic-gold hover:text-black transition-all duration-300"
                >
                  Let&apos;s Talk
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
