'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, Briefcase, Film } from 'lucide-react';
import Navigation from '../components/Navigation';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.message) {
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      // Submit to API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Open email client with pre-filled email
        if (data.mailto) {
          window.location.href = data.mailto;
        }
        
        // Show success message
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-graphclic-light">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-graphclic-red text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-5 leading-[1.1] sm:leading-tight px-2 sm:px-4"
            >
              Let&apos;s Tell Your Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto px-3 sm:px-4 leading-[1.6] sm:leading-relaxed mt-2 sm:mt-3"
            >
              Ready to create compelling video content that drives results? Let&apos;s discuss your project.
            </motion.p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4">
            <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-graphclic-black leading-[1.2] sm:leading-tight">Get in Touch</h2>
                <p className="text-base sm:text-lg text-graphclic-grey mb-4 sm:mb-5 leading-[1.7] sm:leading-relaxed">
                  Whether you need corporate video production or impact documentary filmmaking, we&apos;re here to help bring your vision to life.
                </p>

                {/* Contact Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-graphclic-red rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-graphclic-black">Email</h3>
                      <a href="mailto:team@graphclicgroup.com" className="text-graphclic-grey hover:text-graphclic-red transition-colors">
                        team@graphclicgroup.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-graphclic-red rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-graphclic-black">Location</h3>
                      <p className="text-graphclic-grey">
                        Washington DC Metro Area<br />
                        DMV Region
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Options */}
                <div className="mt-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-graphclic-black">What We Offer</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-graphclic-light p-6 rounded-lg border-2 border-transparent hover:border-graphclic-red transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Briefcase className="text-graphclic-red" size={24} />
                        <h4 className="font-bold text-lg text-graphclic-black">Corporate Services</h4>
                      </div>
                      <p className="text-graphclic-grey text-sm">
                        B2B video production for brands
                      </p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-graphclic-light p-6 rounded-lg border-2 border-transparent hover:border-graphclic-gold transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Film className="text-graphclic-gold" size={24} />
                        <h4 className="font-bold text-lg text-graphclic-black">Documentary Films</h4>
                      </div>
                      <p className="text-graphclic-grey text-sm">
                        Impact documentaries that drive change
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-10 rounded-2xl shadow-2xl border-2 border-gray-200"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-5 text-graphclic-black px-2 sm:px-4 leading-[1.2] sm:leading-tight">Send Us a Message</h2>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="text-green-600" size={20} />
                    <div>
                      <p className="text-green-800 font-semibold">Thank you for your message!</p>
                      <p className="text-green-700 text-sm mt-1">Your email client should open shortly. If it doesn&apos;t, please email us directly at team@graphclicgroup.com</p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <p className="text-red-800 font-semibold">There was an error submitting your form.</p>
                    <p className="text-red-700 text-sm mt-1">Please try again or email us directly at <a href="mailto:team@graphclicgroup.com" className="underline">team@graphclicgroup.com</a></p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-graphclic-black">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-graphclic-red focus:ring-2 focus:ring-graphclic-red/20 outline-none transition-all text-gray-900 bg-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-graphclic-black">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-graphclic-red focus:ring-2 focus:ring-graphclic-red/20 outline-none transition-all text-gray-900 bg-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2 text-graphclic-black">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-graphclic-red focus:ring-2 focus:ring-graphclic-red/20 outline-none transition-all text-gray-900 bg-white"
                        placeholder="Company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-graphclic-black">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-graphclic-red focus:ring-2 focus:ring-graphclic-red/20 outline-none transition-all text-gray-900 bg-white"
                        placeholder="(202) 555-1234"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold mb-2 text-graphclic-black">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-graphclic-red focus:ring-2 focus:ring-graphclic-red/20 outline-none transition-all bg-white text-gray-900"
                    >
                      <option value="">Select a service</option>
                      <option value="Corporate Video Production">Corporate Video Production</option>
                      <option value="Documentary Filmmaking">Documentary Filmmaking</option>
                      <option value="Brand Story Videos">Brand Story Videos</option>
                      <option value="Product Explainers">Product Explainers</option>
                      <option value="Customer Testimonials">Customer Testimonials</option>
                      <option value="Executive Thought Leadership">Executive Thought Leadership</option>
                      <option value="Impact Documentaries">Impact Documentaries</option>
                      <option value="USA-Africa Partnership Stories">USA-Africa Partnership Stories</option>
                      <option value="Monthly Retainer Partnership">Monthly Retainer Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-graphclic-black">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-graphclic-red focus:ring-2 focus:ring-graphclic-red/20 outline-none transition-all resize-none text-gray-900 bg-white"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-graphclic-red hover:bg-graphclic-red-dark text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-graphclic-red to-graphclic-red-dark text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4"
            >
              Ready to Get In Touch?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl mb-6 text-gray-200"
            >
              Explore our work or learn more about our services
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link href="/our-work" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-graphclic-red hover:bg-gray-100 px-10 py-5 rounded-lg text-lg font-semibold transition-all shadow-lg"
                >
                  View Our Work
                </motion.button>
              </Link>
              <Link href="/services" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-white hover:bg-white hover:text-graphclic-red px-10 py-5 rounded-lg text-lg font-semibold transition-all"
                >
                  Explore Services
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
