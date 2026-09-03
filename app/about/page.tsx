"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  FaMicrochip,
  FaBolt,
  FaCogs,
  FaProjectDiagram,
  FaRocket,
  FaBrain,
  FaChartLine,
  FaCloud,
  FaMicroscope,
  FaFlask,
  FaAtom,
  FaRadiation,
  FaGlobe,
  FaShieldAlt,
  FaAward,
} from "react-icons/fa";

// --- STATIC DATA ---

const STORY_TIMELINE = [
  {
    year: "2024",
    title: "Founded",
    desc: "Started with a vision to advance photon detection technologies for quantum applications",
  },
  {
    year: "2025",
    title: "First Prototype",
    desc: "Developed first SPAD detector module with high detection efficiency",
  },
  {
    year: "2026",
    title: "Global Reach",
    desc: "Collaborating with research institutions worldwide",
  },
];

const STATS = [
  { number: "50+", label: "Research Labs" },
  { number: "98%", label: "Detection Efficiency" },
  { number: "15+", label: "Research Projects" },
  { number: "24/7", label: "Technical Support" },
];

const CORE_VALUES = [
  {
    icon: "🔬",
    title: "Innovation First",
    desc: "Continuously pushing boundaries in photon detection and quantum technologies",
  },
  {
    icon: "🤝",
    title: "Research Excellence",
    desc: "Committed to advancing quantum science through rigorous research and development",
  },
  {
    icon: "🔒",
    title: "Precision & Reliability",
    desc: "Delivering high-performance photon detection systems with unmatched precision",
  },
];

const TECH_STACK = [
  "TCAD Simulation", "Device Physics", "Semiconductor Design",
  "Avalanche Photodiodes", "Quantum Optics", "SPAD Technology",
  "Photon Counting", "Quenching Circuits", "Cryogenics", "Fiber Optics"
];

// --- TRUST & RELIABILITY DATA ---
const TRUST_STATS = [
  { number: "50+", label: "Research Labs", icon: "🏢" },
  { number: "20+", label: "Countries", icon: "🌍" },
  { number: "100+", label: "Quantum Projects", icon: "⚛️" },
  { number: "99.9%", label: "Detection Accuracy", icon: "⭐" },
];

// Shared container class – used everywhere so content is perfectly centered
const CONTAINER = "w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12";

// --- RESEARCH FOCUS AREAS ---
const RESEARCH_AREAS = [
  {
    icon: <FaMicrochip className="text-3xl" />,
    title: "Semiconductor Device Physics",
    desc: "Optimizing semiconductor junction profiles for high-sensitivity photon detection",
  },
  {
    icon: <FaBolt className="text-3xl" />,
    title: "Avalanche Dynamics",
    desc: "Controlling carrier multiplication for precise single-photon detection",
  },
  {
    icon: <FaCogs className="text-3xl" />,
    title: "Quenching Architecture",
    desc: "Rapid avalanche suppression and detector reset for reliable photon counting",
  },
  {
    icon: <FaAtom className="text-3xl" />,
    title: "Quantum Communication",
    desc: "Developing detectors for quantum key distribution and secure communications",
  },
];

// --- APPLICATIONS ---
const APPLICATIONS = [
  {
    icon: <FaCloud className="text-3xl" />,
    title: "Quantum Communication",
    desc: "Single photon detectors for QKD systems enabling secure quantum communication",
  },
  {
    icon: <FaMicroscope className="text-3xl" />,
    title: "LiDAR & TOF",
    desc: "Photon-counting LiDAR for high-resolution 3D mapping and autonomous systems",
  },
  {
    icon: <FaFlask className="text-3xl" />,
    title: "Scientific Research",
    desc: "High-sensitivity detectors for quantum optics and TCSPC applications",
  },
];

// --- HERO COMPONENT ---

function AboutHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Particle Network Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasEl = canvas;
    const ctx2 = ctx;

    let animationFrameId: number | null = null;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvasEl.width = window.innerWidth;
      canvasEl.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvasEl.width;
        this.y = Math.random() * canvasEl.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvasEl.width) this.x = 0;
        if (this.x < 0) this.x = canvasEl.width;
        if (this.y > canvasEl.height) this.y = 0;
        if (this.y < 0) this.y = canvasEl.height;
      }

      draw() {
        ctx2.beginPath();
        ctx2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx2.fillStyle = `rgba(6, 182, 212, ${this.opacity})`;
        ctx2.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const count = Math.min(120, (canvasEl.width * canvasEl.height) / 15000);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx2.clearRect(0, 0, canvasEl.width, canvasEl.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Floating shapes
  const floatingShapes = [
    { icon: "⚛", delay: 0, x: "10%", y: "20%" },
    { icon: "🔬", delay: 0.3, x: "85%", y: "30%" },
    { icon: "💡", delay: 0.6, x: "15%", y: "70%" },
    { icon: "⚡", delay: 0.9, x: "90%", y: "75%" },
    { icon: "✦", delay: 0.2, x: "5%", y: "50%" },
    { icon: "⊹", delay: 0.7, x: "95%", y: "55%" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const easeOut = [0.22, 1, 0.36, 1] as const;
  const easeInOut = [0.42, 0, 0.58, 1] as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-[#0B1020] overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Gradient Orbs */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: easeOut }}
        className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-[150px] rounded-full -top-20 -left-20"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: easeOut, delay: 0.3 }}
        className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full -bottom-20 -right-10"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 1.5, ease: easeOut, delay: 0.6 }}
        className="absolute w-[300px] h-[300px] bg-purple-500/20 blur-[150px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Floating Tech Icons */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{
            opacity: 0.15,
            scale: 1,
            rotate: 0,
            y: [0, -20, 0, 20, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.5 + shape.delay },
            scale: { duration: 0.8, delay: 0.5 + shape.delay },
            rotate: { duration: 0.8, delay: 0.5 + shape.delay },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: easeInOut,
              delay: shape.delay,
            },
          }}
          className="absolute hidden sm:block text-3xl md:text-4xl lg:text-5xl text-cyan-500/30"
          style={{
            left: shape.x,
            top: shape.y,
            filter: "blur(1px)",
          }}
        >
          {shape.icon}
        </motion.div>
      ))}

      {/* Grid Lines Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className={`relative ${CONTAINER} grid lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10`}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <span className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-xs font-mono tracking-wider">
              ABOUT DIRACQ
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white"
          >
            Building the
            <br />
            Future of
            <br />
            <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Photon Detection
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-sm md:text-base max-w-xl leading-relaxed"
          >
            DIRACQ develops next‑generation photon detection technologies for
            quantum sensing, communication, and scientific instrumentation through
            semiconductor physics, electronics, and photonics engineering.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap gap-3 pt-1"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="relative flex items-center justify-center w-full sm:w-48 h-10 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm"
            >
              <span className="relative z-10">Explore Technology</span>
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center w-full sm:w-40 h-10 rounded-full border border-white/20 text-white font-semibold text-sm transition-all duration-300"
            >
              Request Brief
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, ease: easeOut }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: easeInOut }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl" />

            <div className="relative w-full rounded-xl border border-white/10 shadow-2xl overflow-hidden bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10">
              <Image
                src="/logo/ChatGPT%20Image%20Aug%2018%2C%202026%2C%2003_51_13%20PM.png"
                alt="DIRACQ - Photon Detection Technology"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-lg" />
            <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-lg" />
            <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-lg" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-cyan-400/50 rounded-br-lg" />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-3 -right-3 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-lg px-2 py-1"
            >
              <span className="text-[10px] text-cyan-300 font-mono">Quantum Ready</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute -bottom-3 -left-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-lg px-2 py-1"
            >
              <span className="text-[10px] text-blue-300 font-mono">SPAD Technology</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// --- MAIN COMPONENT ---

export default function AboutPage() {
  return (
    <div className="w-full bg-[#0B1020]">
      <AboutHero />

      {/* ===== COMPANY STORY ===== */}
      <section className="py-20 bg-[#0F172A] rounded-3xl w-full flex justify-center">
        <div className={CONTAINER}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-cyan-400 uppercase tracking-[4px] text-sm font-medium mb-3">
              Our Journey
            </span>
            <h2 className="text-4xl font-bold text-white">
              Advancing Photon Detection
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mt-3">
              From a vision to revolutionize quantum technologies to developing
              cutting-edge photon detection systems for research and industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {STORY_TIMELINE.map((item, i) => (
              <div
                key={i}
                className="bg-[#1E293B]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:-translate-y-1"
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {item.year}
                </div>
                <h3 className="text-xl font-semibold text-white mt-3">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-20 bg-[#0B1020] w-full flex justify-center">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-3xl p-10 text-center backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-3">🎯</div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed mt-3">
                To develop next-generation photon detection technologies that
                enable breakthrough discoveries in quantum science and
                applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-3xl p-10 text-center backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-3">👁️</div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed mt-3">
                A quantum-enabled world where precise photon detection drives
                innovation in communication, sensing, and scientific discovery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== RESEARCH FOCUS AREAS ===== */}
      <section className="py-20 bg-[#0F172A] rounded-3xl w-full flex justify-center">
        <div className={CONTAINER}>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="inline-block text-cyan-400 uppercase tracking-[4px] text-sm font-medium mb-3">
              Research Focus
            </span>
            <h2 className="text-4xl font-bold text-white">
              Our Core Technologies
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mt-3">
              Combining semiconductor device physics, avalanche dynamics, and
              advanced quenching circuits for precision photon detection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {RESEARCH_AREAS.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1E293B]/30 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 group"
              >
                <div className="text-cyan-400 mb-3">{area.icon}</div>
                <h3 className="text-lg font-semibold text-white">{area.title}</h3>
                <p className="text-gray-400 mt-2 leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATISTICS ===== */}
      <section className="py-20 bg-[#0B1020] w-full flex justify-center">
        <div className={CONTAINER}>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="inline-block text-cyan-400 uppercase tracking-[4px] text-sm font-medium mb-3">
              By the Numbers
            </span>
            <h2 className="text-4xl font-bold text-white">
              Impact in Photonics
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-[#1E293B]/30 border border-white/5 hover:border-cyan-500/30 transition-all hover:transform hover:-translate-y-1"
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {stat.number}
                </div>
                <p className="text-gray-400 mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPLICATIONS ===== */}
      <section className="py-20 bg-[#0F172A] rounded-3xl w-full flex justify-center">
        <div className={CONTAINER}>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="inline-block text-cyan-400 uppercase tracking-[4px] text-sm font-medium mb-3">
              Applications
            </span>
            <h2 className="text-4xl font-bold text-white">
              Where We Make an Impact
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mt-3">
              DIRACQ photon detection technologies enable advanced scientific and
              industrial applications where precision and accuracy are paramount.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {APPLICATIONS.map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1E293B]/30 backdrop-blur-sm border border-white/5 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="text-cyan-400 mb-3 flex justify-center">{app.icon}</div>
                <h3 className="text-lg font-semibold text-white">{app.title}</h3>
                <p className="text-gray-400 mt-2 leading-relaxed">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="py-20 bg-[#0B1020] w-full flex justify-center">
        <div className={CONTAINER}>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="inline-block text-cyan-400 uppercase tracking-[4px] text-sm font-medium mb-3">
              Core Values
            </span>
            <h2 className="text-4xl font-bold text-white">
              What Drives Our Innovation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {CORE_VALUES.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group bg-[#1E293B]/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 text-center hover:border-cyan-500/50 hover:bg-[#1E293B]/50 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="text-6xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                <p className="text-gray-400 mt-2 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST & RELIABILITY ===== */}
      <section className="py-20 bg-[#0F172A] rounded-3xl w-full flex justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>

        <div className={CONTAINER}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 uppercase tracking-[4px] text-xs font-semibold mb-3">
              Trust &amp; Reliability
            </span>
            <h2 className="text-4xl font-bold text-white">
              Trusted by Research Labs Worldwide
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mt-3">
              Join 50+ research institutions using DIRACQ photon detection systems
              for quantum research and advanced photonics applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {TRUST_STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#1E293B]/40 backdrop-blur-sm border border-white/5 rounded-2xl p-6 text-center hover:border-cyan-500/40 hover:bg-[#1E293B]/60 transition-all duration-300 hover:transform hover:-translate-y-1.5 hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {stat.number}
                </div>
                <p className="text-gray-400 mt-2 text-sm font-medium tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGIES ===== */}
      <section className="py-20 bg-[#0B1020] w-full flex justify-center">
        <div className={CONTAINER}>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="inline-block text-cyan-400 uppercase tracking-[4px] text-sm font-medium mb-3">
              Technology Stack
            </span>
            <h2 className="text-4xl font-bold text-white">
              Powered by Advanced Photonics
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mt-3">
              Combining semiconductor physics, electronics design, and quantum
              optics for precision photon detection.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
            {TECH_STACK.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-[#1E293B]/50 border border-white/10 rounded-full text-white text-sm font-medium hover:border-cyan-500/50 hover:bg-[#1E293B] hover:transform hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20 bg-[#0F172A] rounded-3xl w-full flex justify-center">
        <div className={CONTAINER}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20 border border-white/5 rounded-3xl p-10 md:p-14 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Ready to Advance Your Research?
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mt-3">
              Partner with DIRACQ for precision photon detection solutions
              tailored to your quantum research needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                Request Technical Brief
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.97 }}
                className="border border-white/20 hover:border-white/40 hover:bg-white/5 px-8 py-3 rounded-full font-semibold text-white transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}