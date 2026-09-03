"use client";

import { motion } from "framer-motion";
import { FormEvent } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const formFieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="min-h-screen bg-[#0A0F1E] pt-52 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[150px] rounded-full -top-40 -left-40" />
        <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full -bottom-40 -right-20" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[150px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-medium border border-cyan-400/20 px-4 py-1.5 rounded-full inline-block mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Let&rsquo;s{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Questions, partnerships, or demos — we&rsquo;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* LEFT CARD: Form */}
          <motion.section
            variants={itemVariants}
            className="h-full bg-[#1E293B] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Get in touch</h2>
            <form
              className="space-y-4 flex-grow flex flex-col"
              onSubmit={(e: FormEvent) => {
                e.preventDefault();
              }}
            >
              <motion.div variants={formFieldVariants}>
                <label className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 block w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </motion.div>
              <motion.div variants={formFieldVariants}>
                <label className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="mt-1 block w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </motion.div>
              <motion.div variants={formFieldVariants}>
                <label className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we help?"
                  className="mt-1 block w-full bg-[#0A0F1E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </motion.div>
              <motion.div variants={formFieldVariants} className="pt-2 mt-auto">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-cyan-500/30 transition-shadow"
                >
                  Send message
                </motion.button>
              </motion.div>
            </form>

            <motion.div
              variants={formFieldVariants}
              className="mt-6 pt-6 border-t border-white/10 text-sm text-gray-400 space-y-2"
            >
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-cyan-400" />
                <a href="mailto:hello@diracq.ai" className="hover:text-cyan-400 transition-colors">
                  hello@diracq.ai
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-cyan-400" />
                <span>+91 98765 43210</span>
              </p>
            </motion.div>
          </motion.section>

          {/* RIGHT CARD: Map + Contact Related Info */}
          <motion.aside
            variants={itemVariants}
            className="h-full bg-[#1E293B] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col"
          >
            {/* Map */}
            <div className="relative h-64 w-full bg-[#0A0F1E] flex-shrink-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8121625656263!2d77.36794041508353!3d28.627269382416397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce54f2d0b6de3%3A0x8ba6e5b7db40a4e1!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Noida Sector 62 Map"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <FaMapMarkerAlt className="text-cyan-400" />
                  Visit our office
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  Sector 62, Noida,
                  <br />
                  Uttar Pradesh, India
                </p>
                
                <div className="mt-4 text-sm text-gray-400">
                  <span className="text-cyan-400">●</span> Mon–Fri, 9:00–18:00
                </div>
              </div>

              {/* Extra Info Boxes to Fill Empty Space */}
              <div className="mt-6 space-y-4">
                <div className="bg-[#0A0F1E] border border-white/5 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-cyan-400 flex items-center gap-2 mb-2">
                    <FaClock className="text-xs" /> Emergency Support
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Need urgent technical assistance? Our support desk is available 24/7 for critical issues.
                  </p>
                </div>

                <div className="bg-[#0A0F1E] border border-white/5 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-cyan-400 flex items-center gap-2 mb-2">
                    <FaGlobe className="text-xs" /> Quick Links
                  </h4>
                  <div className="flex flex-col gap-1 text-xs text-gray-400">
                    <a href="mailto:hello@diracq.ai" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                      <FaEnvelope className="text-cyan-400" /> hello@diracq.ai
                    </a>
                    <a href="tel:+919876543210" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                      <FaPhone className="text-cyan-400" /> +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-center gap-3 pt-2">
                  <a href="#" className="w-10 h-10 rounded-full bg-[#0A0F1E] border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#0A0F1E] border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}