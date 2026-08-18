"use client";

import Link from "next/link";
import Image from "next/image";  // added for logo
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const socialLinks = [
    { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaFacebookF />, href: "#", label: "Facebook" },
    { icon: <FaGithub />, href: "#", label: "GitHub" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Research", href: "/research" },
    { label: "Contact", href: "/contact" },
  ];

  const solutions = [
    "AI Analytics",
    "Cloud Platform",
    "Machine Learning",
    "Automation",
    "Business Intelligence",
  ];

  return (
    <footer className="relative bg-[#0A0F1E] border-t border-white/5 overflow-hidden">
      
      {/* Smaller Gradient Orbs */}
      <div className="absolute w-[200px] h-[200px] bg-cyan-500/5 blur-[100px] rounded-full -bottom-10 -left-10" />
      <div className="absolute w-[200px] h-[200px] bg-blue-500/5 blur-[100px] rounded-full -top-10 -right-10" />

      <div className="relative w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 lg:py-8">
        
        {/* Main Footer Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {/* Company Section - with Logo */}
          <motion.div variants={itemVariants} className="space-y-1">
            {/* Logo - same as navbar */}
            <Link href="/" className="inline-block">
              <Image
                src="/logo/d57cc0_adc62980ca7644c9a5291d88ee7bbb2a~mv2.png"
                alt="DiracQ"
                width={120}
                height={40}
                priority
                className="w-auto h-auto"
              />
            </Link>

            <p className="text-gray-400 leading-relaxed text-xs">
              Empowering organizations with AI-powered analytics,
              automation, and intelligent decision-making.
            </p>

            {/* Social Links */}
            <div className="flex gap-2 pt-1">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ 
                    y: -2,
                    scale: 1.1,
                    boxShadow: "0 0 12px rgba(6, 182, 212, 0.3)"
                  }}
                  href={social.href}
                  aria-label={social.label}
                  className="w-7 h-7 rounded-full bg-[#1E293B] border border-white/10 hover:border-cyan-400/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 group"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300 text-xs">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-sm font-semibold mb-2">
              Quick Links
            </h3>

            <ul className="space-y-1">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 3 }}
                  className="group"
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1.5 text-xs"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaArrowRight className="text-cyan-400 text-[10px]" />
                    </span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-sm font-semibold mb-2">
              Solutions
            </h3>

            <ul className="space-y-1">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 3 }}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xs cursor-pointer flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 transition-colors duration-300 flex-shrink-0" />
                  {solution}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white text-sm font-semibold mb-2">
              Contact
            </h3>

            <div className="space-y-1.5">
              {[
                { icon: <FaMapMarkerAlt />, text: "Greater Noida, India" },
                { icon: <FaEnvelope />, text: "info@diracq.com" },
                { icon: <FaPhone />, text: "+91 98765 43210" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 3 }}
                  className="flex gap-2 group cursor-pointer"
                >
                  <div className="mt-0.5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 flex-shrink-0 text-xs">
                    {item.icon}
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-xs break-words">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/5 mt-6 lg:mt-8 pt-3 lg:pt-4 flex flex-col md:flex-row justify-between items-center gap-2 text-center"
        >
          <p className="text-gray-500 text-[10px]">
            © {new Date().getFullYear()} DiracQ. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] text-gray-500">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <span className="w-0.5 h-0.5 rounded-full bg-gray-600 hidden sm:inline-block" />
            <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300">
              Terms of Service
            </Link>
            <span className="w-0.5 h-0.5 rounded-full bg-gray-600 hidden sm:inline-block" />
            <Link href="/cookies" className="hover:text-cyan-400 transition-colors duration-300">
              Cookies
            </Link>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}