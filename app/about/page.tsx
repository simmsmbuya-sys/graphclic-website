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
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-graphclic-red/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-white mb-6"
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)',
            }}
          >
            Where Strategic Vision
            <br />
            <span className="text-graphclic-gold">Meets Cinematic Craft</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
            }}
          >
            Two decades of experience. Two divisions. One mission: Tell stories that drive results.
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-graphclic-red-dark py-12 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl md:text-5xl font-black text-graphclic-gold mb-2">30+</div>
              <div className="text-white/80 text-sm md:text-base">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-black text-graphclic-gold mb-2">2</div>
              <div className="text-white/80 text-sm md:text-base">Divisions</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-black text-graphclic-gold mb-2">1</div>
              <div className="text-white/80 text-sm md:text-base">Mission</div>
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
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-black text-black mb-8 text-center"
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
            <p className="text-lg leading-relaxed mb-6">
              GraphClic was founded on a simple belief: every story deserves to be told with cinematic excellence, whether it's driving business results or inspiring social change.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              With over 30 years of combined experience, our team has produced award-winning content for Fortune 500 companies, non-profits, foundations, and cultural institutions across the DMV region and beyond.
            </p>
            <p className="text-lg leading-relaxed">
              Today, we operate two distinct divisions—GraphClic Studios for strategic B2B video production and GraphClic Films for impact-driven documentary filmmaking—united by our commitment to storytelling excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two Divisions Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-black text-white mb-16 text-center"
          >
            Two Divisions. One Mission.
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* GraphClic Studios */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800"
            >
              <Briefcase className="w-12 h-12 text-graphclic-red mb-4" />
              <h3 className="text-3xl font-black text-graphclic-red mb-4">GraphClic Studios</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
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
              <h3 className="text-3xl font-black text-graphclic-gold mb-4">GraphClic Films</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
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
      <section className="py-24 bg-graphclic-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-black text-white mb-8"
          >
            Ready to Tell Your Story?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Whether it's corporate video or documentary film, let's bring your vision to life.
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

