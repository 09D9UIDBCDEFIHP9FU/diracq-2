"use client";



import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// --- STATIC DATA ---

const STORY_TIMELINE = [
  {
    year: "2024",
    title: "Founded",
    desc: "Started with a vision to democratize AI analytics",
  },
  {
    year: "2025",
    title: "First Product",
    desc: "Launched DiracQ Analytics platform",
  },
  {
    year: "2026",
    title: "Global Reach",
    desc: "Serving 500+ businesses worldwide",
  },
];

const STATS = [
  { number: "500+", label: "Clients Worldwide" },
  { number: "98%", label: "Satisfaction Rate" },
  { number: "10M+", label: "Data Points Processed" },
  { number: "24/7", label: "Customer Support" },
];

const CORE_VALUES = [
  {
    icon: "💡",
    title: "Innovation First",
    desc: "Constantly pushing boundaries of what's possible with AI",
  },
  {
    icon: "🤝",
    title: "Customer Obsession",
    desc: "Your success is our success - we're in this together",
  },
  {
    icon: "🔒",
    title: "Trust & Transparency",
    desc: "Ethical AI with complete data privacy and security",
  },
];

const TEAM = [
  {
    name: "Dr. Aarav Sharma",
    role: "CEO & Co-Founder",
    desc: "AI Research, MIT PhD",
  },
  {
    name: "Priya Patel",
    role: "CTO & Co-Founder",
    desc: "Ex-Google, ML Expert",
  },
  {
    name: "Vikram Singh",
    role: "Head of Product",
    desc: "Product Leader, Stanford MBA",
  },
];

const TECH_STACK = [
  "Next.js", "TypeScript", "Python", "TensorFlow",
  "PyTorch", "AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis"
];

// --- TRUST & RELIABILITY DATA ---
const TRUST_STATS = [
  { number: "50K+", label: "Active Users", icon: "👥" },
  { number: "120+", label: "Countries", icon: "🌍" },
  { number: "2,500+", label: "Enterprise Clients", icon: "🏢" },
  { number: "99.9%", label: "Satisfaction Rate", icon: "⭐" },
];

// Shared container class – used everywhere so content is perfectly centered
const CONTAINER = "w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12";

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

  // Floating geometric shapes animation
  const floatingShapes = [
    { icon: "⚡", delay: 0, x: "10%", y: "20%" },
    { icon: "⟳", delay: 0.3, x: "85%", y: "30%" },
    { icon: "◈", delay: 0.6, x: "15%", y: "70%" },
    { icon: "⌘", delay: 0.9, x: "90%", y: "75%" },
    { icon: "✦", delay: 0.2, x: "5%", y: "50%" },
    { icon: "⊹", delay: 0.7, x: "95%", y: "55%" },
    { icon: "▣", delay: 0.4, x: "50%", y: "10%" },
    { icon: "⬡", delay: 0.8, x: "50%", y: "90%" },
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
  const linearEase = [0, 0, 1, 1] as const;

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
    <section className="relative min-h-screen flex items-center justify-center bg-[#0B1020] overflow-hidden py-20 lg:py-28">

      {/* Animated Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Gradient Orbs */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: easeOut }}
        className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[150px] rounded-full -top-40 -left-40"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: easeOut, delay: 0.3 }}
        className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full -bottom-40 -right-20"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 1.5, ease: easeOut, delay: 0.6 }}
        className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[150px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
          className="absolute hidden sm:block text-4xl md:text-5xl lg:text-6xl text-cyan-500/30"
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

      {/* Scanning Line Effect */}
      <motion.div
        animate={{
          y: ["-100%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: linearEase,
        }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
        style={{ width: "100%" }}
      />

      <div className={`relative ${CONTAINER} grid lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10 pt-20 pb-16 lg:pt-24 lg:pb-20`}>

        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <span className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-sm font-mono tracking-wider">
              ABOUT DIRACQ
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white"
          >
            Transforming
            <br />
            Businesses
            <br />
            <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Through AI
              <br />
              Innovation
            </span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed"
          >
            We build intelligent analytics solutions that empower
            organizations to make smarter, faster and more confident
            business decisions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="relative flex items-center justify-center w-full sm:w-52 h-12 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-base"
            >
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400"
              />
              <span className="relative z-10">Explore Our Story</span>
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center w-full sm:w-52 h-12 rounded-full border border-white/20 text-white font-semibold text-base transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right - Image with Glow Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{
            duration: 1,
            ease: easeOut,
          }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: easeInOut,
            }}
            className="relative"
          >
            {/* Glow behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl" />

{/* Image Container */}
<div className="relative w-full rounded-xl border border-white/10 shadow-2xl overflow-hidden bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10">
  <Image
    src="/logo/ChatGPT%20Image%20Aug%2018%2C%202026%2C%2003_51_13%20PM.png"
    alt="Yathva Energy"
    width={800}
    height={600}
    className="w-full h-auto object-contain"
    priority
  />
</div>

            {/* Animated corner accents */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-lg" />
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-lg" />
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-lg" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50 rounded-br-lg" />

            {/* Floating data badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-4 -right-4 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-lg px-3 py-1.5"
            >
              {/* <span className="text-xs text-cyan-300 font-mono">AI Powered</span> */}
              <span className="ml-2 h-1.5 w-1.5 bg-green-400 rounded-full inline-block animate-pulse" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute -bottom-4 -left-4 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-lg px-3 py-1.5"
            >
              <span className="text-xs text-blue-300 font-mono">DiracQ</span>
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
      <section className="py-24 bg-[#0F172A] rounded-3xl w-full flex justify-center">
        <div className={CONTAINER}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-cyan-400 uppercase tracking-[4px] text-sm font-medium mb-4">
              OUR STORY
            </span>
            <h2 className="text-5xl font-bold text-white">
              Built for the Future of AI
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mt-4">
              Founded in 2024, DiracQ emerged from a simple belief:
              artificial intelligence should be accessible, powerful,
              and transformative for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {STORY_TIMELINE.map((item, i) => (
              <div
                key={i}
                className="bg-[#1E293B]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-10 text-center hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:-translate-y-1"
              >
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {item.year}
                </div>
                <h3 className="text-2xl font-semibold text-white mt-4">{item.title}</h3>
                <p className="text-gray-400 mt-2 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-24 bg-[#0B1020] w-full flex justify-center">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-3xl p-12 text-center backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                To empower every organization with AI-driven insights
                that drive growth, efficiency, and innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-3xl p-12 text-center backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-6xl mb-4">👁️</div>
              <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                A world where every business decision is powered by
                intelligent, ethical, and accessible AI.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATISTICS ===== */}
      <section className="py-24 bg-[#0F172A] rounded-3xl w-full flex justify-center">
        <div className={CONTAINER}>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block text-cyan-400 uppercase tracking-[4px] text-sm font-medium mb-4">
              By the Numbers
            </span>
            <h2 className="text-5xl font-bold text-white">
              Impact in Numbers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-[#1E293B]/30 border border-white/5 hover:border-cyan-500/30 transition-all hover:transform hover:-translate-y-1"
              >
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {stat.number}
                </div>
                <p className="text-gray-400 mt-2 text-lg font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="py-24 bg-[#0B1020] w-full flex justify-center">
        <div className={CONTAINER}>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block text-cyan-400 uppercase tracking-[4px] text-sm font-medium mb-4">
              Core Values
            </span>
            <h2 className="text-5xl font-bold text-white">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {CORE_VALUES.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group bg-[#1E293B]/30 backdrop-blur-sm border border-white/5 rounded-2xl p-10 text-center hover:border-cyan-500/50 hover:bg-[#1E293B]/50 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="text-7xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold text-white">{value.title}</h3>
                <p className="text-gray-400 mt-3 text-lg leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST & RELIABILITY ===== */}
      <section className="py-24 bg-[#0F172A] rounded-3xl w-full flex justify-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>

        <div className={CONTAINER}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 uppercase tracking-[4px] text-xs font-semibold mb-5">
              TRUST &amp; RELIABILITY
            </span>
            <h2 className="text-5xl font-bold text-white">
              Trusted by Global Organizations
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mt-4">
              Join 10,000+ companies worldwide using our platform to drive intelligent business growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {TRUST_STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#1E293B]/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 text-center hover:border-cyan-500/40 hover:bg-[#1E293B]/60 transition-all duration-300 hover:transform hover:-translate-y-1.5 hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {stat.number}
                </div>
                <p className="text-gray-400 mt-2 text-base font-medium tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP TEAM ===== */}
      <section className="py-24 bg-[#0B1020] w-full flex justify-center">
        <div className={CONTAINER}>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block text-cyan-400 uppercase tracking-[4px] text-sm font-medium mb-4">
              Leadership
            </span>
            <h2 className="text-5xl font-bold text-white">
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TEAM.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#1E293B]/30 backdrop-blur-sm border border-white/5 rounded-2xl p-10 text-center hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-white mt-6">{member.name}</h3>
                <p className="text-cyan-400 font-medium mt-1 text-lg">{member.role}</p>
                <p className="text-gray-400 mt-2">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGIES ===== */}
      <section className="py-24 bg-[#0F172A] rounded-3xl w-full flex justify-center">
        <div className={CONTAINER}>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block text-cyan-400 uppercase tracking-[4px] text-sm font-medium mb-4">
              Tech Stack
            </span>
            <h2 className="text-5xl font-bold text-white">
              Built with Cutting-Edge Tech
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {TECH_STACK.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-[#1E293B]/50 border border-white/10 rounded-full text-white text-base font-medium hover:border-cyan-500/50 hover:bg-[#1E293B] hover:transform hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-24 bg-[#0B1020] w-full flex justify-center">
        <div className={CONTAINER}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20 border border-white/5 rounded-3xl p-12 md:p-16 backdrop-blur-sm"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mt-4">
              Join 500+ companies already using DiracQ to make smarter decisions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-10 py-4 rounded-full font-semibold text-white transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                Get Started Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.97 }}
                className="border border-white/20 hover:border-white/40 hover:bg-white/5 px-10 py-4 rounded-full font-semibold text-white transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
}