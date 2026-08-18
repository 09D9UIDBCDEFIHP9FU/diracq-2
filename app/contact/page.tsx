"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FormEvent } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  // Animation variants
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
    <section className="min-h-screen bg-[#0A0F1E] py-20 px-4 relative overflow-hidden">
      {/* Gradient Orbs */}
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
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-medium border border-cyan-400/20 px-4 py-1.5 rounded-full inline-block mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Let’s{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Questions, partnerships, or demos — we’d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.section
            variants={itemVariants}
            className="bg-[#1E293B] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Get in touch</h2>
            <form
              className="space-y-4"
              onSubmit={(e: FormEvent) => {
                e.preventDefault();
                // Handle form submission
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
              <motion.div variants={formFieldVariants} className="pt-2">
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

            {/* Contact details */}
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
                <span>+1 (555) 123-4567</span>
              </p>
            </motion.div>
          </motion.section>

          {/* Office Info */}
          <motion.aside
            variants={itemVariants}
            className="bg-[#1E293B] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
          >
            <div className="relative h-64 w-full">
              <Image
                src="https://images.unsplash.com/photo-1520975661367-6a1d25f2d0b1?w=1200&q=80"
                alt="Office"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <FaMapMarkerAlt className="text-cyan-400" />
                Visit our office
              </h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                123 Innovation Way, Suite 400
                <br />
                San Francisco, CA
              </p>
              <div className="mt-4 text-sm text-gray-400">
                <span className="text-cyan-400">●</span> Mon–Fri, 9:00–18:00
              </div>
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}