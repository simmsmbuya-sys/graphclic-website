'use client';

import { motion } from 'framer-motion';
import { MapPin, Award, Users, Film, Briefcase, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] md:h-[60vh] md:min-h-[500px] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-graphclic-red/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.2] sm:leading-[1.15] md:leading-tight text-white mb-4 sm:mb-6 px-2 sm:px-4"
          >
            Where Strategic Vision
            <br />
            <span className="text-graphclic-gold">Meets Cinematic Craft</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-xl text-white/90 max-w-3xl mx-auto px-4 sm:px-6 leading-[1.7] sm:leading-relaxed mt-4 sm:mt-5"
          >
            <strong className="text-white font-bold">GraphClic</strong> brings two decades of experience. Two divisions. One mission: Tell stories that drive results.
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-graphclic-red-dark py-8 sm:py-10 md:py-12 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-graphclic-gold mb-2">30+</div>
              <div className="text-white/80 text-xs sm:text-sm md:text-base">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-graphclic-gold mb-2">2</div>
              <div className="text-white/80 text-xs sm:text-sm md:text-base">Divisions</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-graphclic-gold mb-2">1</div>
              <div className="text-white/80 text-xs sm:text-sm md:text-base">Mission</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Award className="w-12 h-12 mx-auto mb-2 text-graphclic-gold" />
              <div className="text-white/80 text-sm md:text-base">Award-Winning</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-3 sm:mb-5 text-center px-3 sm:px-4 leading-[1.2] sm:leading-tight"
          >
            Our Story
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none text-gray-700"
          >
            <p className="text-base sm:text-lg leading-[1.7] sm:leading-relaxed mb-3 sm:mb-4 text-gray-700">
              GraphClic was founded on a simple belief: every story deserves to be told with cinematic excellence, whether it&apos;s driving business results or inspiring social change.
            </p>
            <p className="text-base sm:text-lg leading-[1.7] sm:leading-relaxed mb-3 sm:mb-4 text-gray-700">
              With over 30 years of combined experience, our team has produced award-winning content for Fortune 500 companies, non-profits, foundations, and cultural institutions across the DMV region and beyond.
            </p>
            <p className="text-base sm:text-lg leading-[1.7] sm:leading-relaxed text-gray-700">
              Today, we operate two distinct divisions—GraphClic Studios for strategic B2B video production and GraphClic Films for impact-driven documentary filmmaking—united by our commitment to storytelling excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two Divisions Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 sm:mb-10 md:mb-12 text-center leading-[1.2] sm:leading-tight"
          >
            Two Divisions. One Mission.
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {/* GraphClic Studios */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800"
            >
              <Briefcase className="w-12 h-12 text-graphclic-red mb-4" />
              <h3 className="text-2xl sm:text-3xl font-black text-graphclic-red mb-3 sm:mb-4">GraphClic Studios</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 leading-[1.7] sm:leading-relaxed text-sm sm:text-base">
                Strategic B2B video production that drives business results. We create content that educates stakeholders, builds brand equity, and converts viewers into customers.
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 text-graphclic-red font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight size={20} />
              </Link>
            </motion.div>

            {/* GraphClic Films */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800"
            >
              <Film className="w-12 h-12 text-graphclic-gold mb-4" />
              <h3 className="text-2xl sm:text-3xl font-black text-graphclic-gold mb-3 sm:mb-4">GraphClic Films</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 leading-[1.7] sm:leading-relaxed text-sm sm:text-base">
                Impact-driven documentary filmmaking that bridges cultures, amplifies underrepresented voices, and drives social change through authentic storytelling.
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 text-graphclic-gold font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-graphclic-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 px-4"
          >
            Ready to Tell Your Story?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-6"
          >
            Whether it&apos;s corporate video or documentary film, let&apos;s bring your vision to life.
          </motion.p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-graphclic-red px-10 py-5 text-lg font-bold rounded-lg hover:bg-gray-100 transition-all"
            >
              Get In Touch
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  );
}

