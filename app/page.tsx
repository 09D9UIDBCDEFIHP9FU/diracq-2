"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
// ADDED LINK IMPORT HERE
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaRocket,
  FaChartLine,
  FaShieldAlt,
  FaBrain,
  FaRobot,
  FaDatabase,
  FaCloud,
  FaProjectDiagram,
  FaChartPie,
  FaLock,
  FaIndustry,
  FaHeartbeat,
  FaShoppingCart,
  FaUniversity,
  FaTruck,
  FaMicrochip,
  FaArrowRight,
  FaFlask,
  FaMicroscope,
  FaCalendarAlt,
  FaCogs,
  FaBolt,
  FaLightbulb,
  FaRegLightbulb,
} from "react-icons/fa";

// ---------------------- Hero Component ----------------------
function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  const easeOut = [0.22, 1, 0.36, 1] as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section
      className="
        relative
        min-h-[85vh]
        w-full
        flex
        items-center
        justify-center
        bg-[#0A0F1E]
        overflow-hidden
        pt-24
        pb-8
        lg:pt-32
        xl:pt-30
        2xl:pt-40
        md:pt-28
        sm:pt-20
      "
    >
      <div className="absolute inset-0 bg-[#0A0F1E]" />
      <div className="absolute w-[300px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full -top-20 -left-20" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 lg:gap-8 items-center z-10 pt-2 pb-2">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-3"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-[1.1] text-white"
          >
            Enabling Precision
            <br />
            Photon Detection
            <br />
            <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              for the Quantum Era
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed"
          >
            High‑performance SPAD detector modules engineered for quantum
            communication, sensing, imaging and advanced photonics research.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-1">
            {/* FIXED: Request Technical Brief */}
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative flex items-center justify-center w-full sm:w-52 h-12 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-base cursor-pointer"
              >
                <span className="relative z-10">Request Technical Brief</span>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="relative"
        >
          <div className="relative w-full rounded-xl border border-white/10 shadow-2xl overflow-hidden bg-[#1A1F35]">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center"
              alt="Quantum Photon Detection Technology"
              className="w-full h-auto object-cover"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------- Our Technology Component ----------------------
function OurTechnology() {
  // ... (No changes needed in this section)
  const features = [
    {
      icon: <FaMicrochip />,
      title: "Device Physics",
      description:
        "Optimized semiconductor junction profiles for high-sensitivity photon detection.",
      color: "from-cyan-400 to-blue-400",
    },
    {
      icon: <FaBolt />,
      title: "Avalanche Dynamics",
      description:
        "Fast and controlled avalanche buildup for precise photon arrival detection.",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: <FaCogs />,
      title: "Quenching Architecture",
      description:
        "Rapid avalanche suppression and detector reset for reliable photon counting.",
      color: "from-orange-400 to-yellow-400",
    },
  ];

  const easeOut = [0.22, 1, 0.36, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-[#0A0F1E] overflow-hidden py-12 lg:py-16 xl:py-20">
      <div className="absolute inset-0 bg-[#0A0F1E]" />

      <div className="relative w-full max-w-7xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-4 lg:mb-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <span className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-medium">
              Our Technology
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1]"
          >
            Precision Photon
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Detection Technology
              </span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 mt-2 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
          >
            DIRACQ develops photon detection modules optimized for precise single‑photon
            measurements, achieving high photon detection efficiency, low dark count
            rates, and picosecond‑scale timing resolution.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-[#1E293B] border border-white/10 rounded-2xl p-5 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-xl text-white mb-3 shadow-lg flex-shrink-0`}
              >
                {feature.icon}
              </motion.div>
              <h3 className="relative z-10 text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="relative z-10 text-gray-400 leading-5 group-hover:text-gray-300 transition-colors duration-300 flex-grow text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------- Products Component ----------------------
function Products() {
  // FIXED: Added href to product objects
  const products = [
    {
      icon: <FaMicrochip />,
      title: "SPAD Modules",
      description:
        "Silicon-based single photon avalanche diode modules optimized for visible wavelengths, offering low dark count rates and high timing precision for photon counting applications.",
      color: "from-cyan-400 to-blue-400",
      href: "/products/spad-modules",
    },
    {
      icon: <FaRegLightbulb />,
      title: "InGaAs Detectors",
      description:
        "Near-infrared photon detectors designed for telecom wavelengths (1310–1550 nm), suitable for quantum communication and fiber-based photonics systems.",
      color: "from-purple-400 to-pink-400",
      href: "/products/ingaas-detectors",
    },
    {
      icon: <FaBolt />,
      title: "SNSPD Systems",
      description:
        "Superconducting nanowire single photon detectors providing ultra-low noise and high detection efficiency for advanced quantum optics experiments.",
      color: "from-orange-400 to-yellow-400",
      href: "/products/snspd-systems",
    },
    {
      icon: <FaLightbulb />,
      title: "Tunable Laser Sources",
      description:
        "Precision tunable laser systems for calibration, characterization, and controlled photon generation in photonics and quantum experiments.",
      color: "from-green-400 to-emerald-400",
      href: "/products/tunable-lasers",
    },
  ];

  const easeOut = [0.22, 1, 0.36, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-[#0A0F1E] overflow-hidden py-12 lg:py-16 xl:py-20">
      <div className="absolute inset-0 bg-[#0A0F1E]" />

      <div className="relative w-full max-w-7xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-4 lg:mb-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <span className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-medium">
              Products
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1]"
          >
            Photon Detection
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 mt-2 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
          >
            DIRACQ offers a comprehensive range of photon detection modules and
            systems designed for quantum communication, sensing, imaging, and
            advanced photonics research.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-[#1E293B] border border-white/10 rounded-2xl p-5 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center text-xl text-white mb-3 shadow-lg flex-shrink-0`}
              >
                {product.icon}
              </motion.div>
              <h3 className="relative z-10 text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {product.title}
              </h3>
              <p className="relative z-10 text-gray-400 leading-5 group-hover:text-gray-300 transition-colors duration-300 flex-grow text-sm">
                {product.description}
              </p>
              
              {/* FIXED: Learn More Link */}
              <Link href={product.href}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="relative z-10 mt-3 text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 group/btn text-sm cursor-pointer"
                >
                  <span>Learn More</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------- WhyChoose Component ----------------------
// ... (No changes needed in this section - no buttons)
function WhyChoose() {
  const features = [
    {
      icon: <FaProjectDiagram />,
      title: "End-to-End Design Expertise",
      description:
        "From semiconductor device physics and TCAD modelling to system-level integration, DIRACQ develops complete photon detection solutions with deep expertise across the entire stack.",
      color: "from-cyan-400 to-blue-400",
    },
    {
      icon: <FaRocket />,
      title: "High Performance & Scalability",
      description:
        "Our modules are engineered for high sensitivity and precision while remaining scalable for both advanced research environments and future commercial deployment.",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: <FaBrain />,
      title: "AI-Enhanced Signal Processing",
      description:
        "DIRACQ integrates intelligent signal processing techniques, including ANN-based models, to enhance signal discrimination, reduce noise, and improve photon detection reliability.",
      color: "from-orange-400 to-yellow-400",
    },
    {
      icon: <FaCogs />,
      title: "Customizable Architecture",
      description:
        "Detector configurations can be tailored for specific wavelength ranges, timing requirements, and application domains, ensuring optimal performance across diverse use cases.",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: <FaChartLine />,
      title: "Indigenous Technology",
      description:
        "Developed in India, DIRACQ promotes self-reliant innovation with cost-effective, high-performance photon detection systems tailored for domestic and global needs.",
      color: "from-indigo-400 to-purple-400",
    },
  ];

  const easeOut = [0.22, 1, 0.36, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-[#0A0F1E] overflow-hidden py-12 lg:py-16 xl:py-20">
      <div className="absolute inset-0 bg-[#0A0F1E]" />

      <div className="relative w-full max-w-7xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-4 lg:mb-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <span className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-medium">
              Why Choose DIRACQ
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1]"
          >
            Innovation in
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Photon Detection
              </span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 mt-2 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
          >
            DIRACQ combines indigenous innovation with advanced photonics engineering
            to deliver high-performance photon detection systems tailored for modern
            quantum and scientific applications.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-[#1E293B] border border-white/10 rounded-2xl p-5 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-xl text-white mb-3 shadow-lg flex-shrink-0`}
              >
                {feature.icon}
              </motion.div>
              <h3 className="relative z-10 text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="relative z-10 text-gray-400 leading-5 group-hover:text-gray-300 transition-colors duration-300 flex-grow text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------- Applications Component ----------------------
// ... (No changes needed in this section - no buttons)
function Applications() {
  const applications = [
    {
      icon: <FaCloud />,
      title: "Quantum Communication",
      description:
        "Single photon detectors are critical for quantum key distribution (QKD) systems where information is encoded in individual photons. DIRACQ detectors enable secure communication by reliably detecting quantum signals with minimal noise.",
      color: "from-cyan-400 to-blue-400",
    },
    {
      icon: <FaMicroscope />,
      title: "LiDAR & TOF",
      description:
        "Photon-counting LiDAR combined with Time-of-Flight (TOF) techniques enables precise distance measurement by capturing the arrival time of individual photons. DIRACQ detectors support high-resolution 3D mapping, long-range sensing, and next-generation autonomous navigation systems.",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: <FaFlask />,
      title: "Scientific Research",
      description:
        "DIRACQ detectors are widely applicable in experimental physics and photonics research, including quantum optics, time-correlated single photon counting (TCSPC), and low-light measurement systems. Their high sensitivity and timing precision make them ideal for laboratory and advanced instrumentation use.",
      color: "from-orange-400 to-yellow-400",
    },
  ];

  const easeOut = [0.22, 1, 0.36, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section className="relative min-h-[65vh] flex items-center justify-center bg-[#0A0F1E] overflow-hidden py-12 lg:py-16 xl:py-20">
      <div className="absolute inset-0 bg-[#0A0F1E]" />

      <div className="relative w-full max-w-7xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-4 lg:mb-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <span className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-medium">
              Applications
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1]"
          >
            Advanced Photonics
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Applications
              </span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 mt-2 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
          >
            DIRACQ photon detection technologies enable a wide range of advanced
            scientific and industrial systems where extremely low light levels
            must be measured with high precision and timing accuracy.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5"
        >
          {applications.map((app, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-[#1E293B] border border-white/10 rounded-2xl p-5 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center text-xl text-white mb-3 shadow-lg flex-shrink-0`}
              >
                {app.icon}
              </motion.div>
              <h3 className="relative z-10 text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {app.title}
              </h3>
              <p className="relative z-10 text-gray-400 leading-5 group-hover:text-gray-300 transition-colors duration-300 flex-grow text-sm">
                {app.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------- Research Component ----------------------
// ... (No changes needed in this section - no buttons)
function Research() {
  const easeOut = [0.22, 1, 0.36, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section className="relative min-h-[65vh] flex items-center justify-center bg-[#0A0F1E] overflow-hidden py-12 lg:py-16 xl:py-20">
      <div className="absolute inset-0 bg-[#0A0F1E]" />

      <div className="relative w-full max-w-7xl mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse" />
              <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-medium">
                Research & Publications
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1]"
            >
              Advancing
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Photon Detection
                  <br />
                  Technology
                </span>
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed"
            >
              DIRACQ develops advanced photon detection systems through device
              physics modelling, TCAD simulation, and experimental validation.
              Our research focuses on improving photon detection efficiency,
              minimizing dark count rates, and enhancing timing resolution for
              next‑generation quantum technologies.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 pt-1"
            >
              {[
                { value: "15+", label: "Research Projects", icon: <FaFlask /> },
                {
                  value: "98%",
                  label: "Detection Efficiency",
                  icon: <FaMicroscope />,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="group relative bg-[#1E293B] border border-white/10 rounded-2xl p-4 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="relative z-10">
                    <div className="text-2xl text-cyan-400 mb-1">{stat.icon}</div>
                    <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {stat.value}
                    </h3>
                    <p className="text-gray-400 mt-1 text-sm group-hover:text-gray-300 transition-colors">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#1A1F35]">
              <Image
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop&crop=center"
                alt="Research & Innovation"
                width={650}
                height={550}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------------------- News Component ----------------------
function News() {
  const news = [
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      date: "28 July 2026",
      title: "DIRACQ Founder Meets Quantum Technology Leaders",
      description:
        "The DIRACQ founding team recently met with leading researchers in quantum photonics to explore future collaborations in photon detection and quantum sensing technologies.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&crop=center",
      date: "20 July 2026",
      title: "Research Collaboration Announced",
      description:
        "DIRACQ has initiated a collaborative research effort with academic partners to advance SPAD device design and optimize avalanche detection performance through TCAD simulation and experimental validation.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      date: "12 July 2026",
      title: "Prototype Development Milestone",
      description:
        "The team has successfully completed the initial design phase of its next‑generation photon detection module, paving the way for prototype fabrication and system integration.",
    },
  ];

  const easeOut = [0.22, 1, 0.36, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section className="relative min-h-[65vh] flex items-center justify-center bg-[#0A0F1E] overflow-hidden py-8 lg:py-10 xl:py-12">
      <div className="absolute inset-0 bg-[#0A0F1E]" />

      <div className="relative w-full max-w-7xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-4 lg:mb-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <span className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-medium">
              Latest News
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1]"
          >
            News
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                & Updates
              </span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 mt-2 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
          >
            Stay updated with the latest news, research collaborations, and
            development milestones from DIRACQ.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5"
        >
          {news.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-[#1E293B] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="relative z-10 p-4 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                  <FaCalendarAlt className="text-cyan-400 text-xs" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-5 group-hover:text-gray-300 transition-colors duration-300 flex-grow line-clamp-3">
                  {item.description}
                </p>
                
                {/* FIXED: Read More Link */}
                <Link href="/news">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="relative z-10 mt-3 text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 group/btn text-sm cursor-pointer"
                  >
                    <span>Read More</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="inline-block"
                    >
                      <FaArrowRight />
                    </motion.span>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------- ContactCTA Component ----------------------
function ContactCTA() {
  const easeOut = [0.22, 1, 0.36, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section className="relative min-h-[40vh] flex items-center justify-center bg-[#0A0F1E] overflow-hidden py-6 lg:py-8 xl:py-10">
      <div className="absolute inset-0 bg-[#0A0F1E]" />
      <div className="absolute w-96 h-96 bg-cyan-500/5 blur-[150px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative w-full max-w-7xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="relative inline-block">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center gap-2 mb-3"
            >
              <span className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse" />
              <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-medium">
                Contact
              </span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">
              For collaborations, technical inquiries,
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                or partnership opportunities.
              </span>
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-3 mt-4"
            >
              
              {/* FIXED: Contact Us Link */}
              <Link href="/contact">
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(6, 182, 212, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 overflow-hidden text-sm md:text-base cursor-pointer inline-block"
                >
                  <span className="relative z-10">Contact Us</span>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------- Main Page (All Components) ----------------------
export default function HomePage() {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#0A0F1E]">
      <Hero />
      <OurTechnology />
      <Products />
      <WhyChoose />
      <Applications />
      <Research />
      <News />
      <ContactCTA />
    </main>
  );
}