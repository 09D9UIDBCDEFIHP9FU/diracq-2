"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
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
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

// ---------------------- Hero Component ----------------------
function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0F1E] overflow-hidden py-20 lg:py-28">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

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
          style={{ left: shape.x, top: shape.y, filter: "blur(1px)" }}
        >
          {shape.icon}
        </motion.div>
      ))}

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: linearEase }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
        style={{ width: "100%" }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10 pt-20 pb-16 lg:pt-24 lg:pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white"
          >
            Dive Into the
            <br />
            New Age of
            <br />
            <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Accelerated
              <br />
              Analytics
            </span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            />
          </motion.h1>
          <br />
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed"
          >
            Empower your business with AI-driven analytics, real-time
            dashboards, predictive intelligence, and data automation.
          </motion.p>
          <br />
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
            <motion.button
              type="button"
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
              variants={{
                hover: { scale: 1.03, boxShadow: "0 0 30px rgba(6,182,212,0.3)" },
              }}
              className="relative flex items-center justify-center w-full sm:w-52 h-12 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-base"
            >
              <motion.div
                variants={{ initial: { x: "100%" }, hover: { x: 0 } }}
                transition={{ duration: 0.3, ease: easeInOut }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400"
              />
              <span className="relative z-10">Explore Platform</span>
            </motion.button>
          </motion.div>
        </motion.div>

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
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
                alt="Analytics Dashboard"
                className="w-full h-auto object-cover"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-sm pointer-events-none">
                <div className="text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <div>Analytics Dashboard</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-lg" />
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-lg" />
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-lg" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50 rounded-br-lg" />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-4 -right-4 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-lg px-3 py-1.5"
            >
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

// ---------------------- TrustedBy Component ----------------------
function TrustedBy() {
  const stats = [
    { label: "Active Users", value: 15000, suffix: "+" },
    { label: "Countries", value: 120, suffix: "+" },
    { label: "Enterprise Clients", value: 500, suffix: "+" },
    { label: "Satisfaction Rate", value: 98, suffix: "%" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const intervals = stats.map((stat, index) => {
        return setInterval(() => {
          setCounts((prev) => {
            const newCounts = [...prev];
            if (newCounts[index] < stat.value) {
              newCounts[index] = Math.min(
                newCounts[index] + Math.ceil(stat.value / 40),
                stat.value
              );
            }
            return newCounts;
          });
        }, 25);
      });
      return () => intervals.forEach((interval) => clearInterval(interval));
    }
  }, [isInView, hasAnimated]);

  const easeOut = [0.22, 1, 0.36, 1] as const;
  const easeInOut = [0.42, 0, 0.58, 1] as const;

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
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#1a1f35] to-[#0d1225]"
    >
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <br />
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="inline-block text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4 border border-blue-400/20 px-4 py-1.5 rounded-full">
            Trust & Reliability
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-1 tracking-tight">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Global Organizations
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto text-center">
            Join 10,000+ companies worldwide using our platform to drive
            intelligent business growth
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 text-center hover:bg-white/10 transition-all duration-500 hover:border-blue-400/30 hover:scale-105 hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-0.5">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <div className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <br />
        <br />
      </div>
    </section>
  );
}

// ---------------------- About Component ----------------------
function About() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
      canvasEl.width = canvasEl.offsetWidth;
      canvasEl.height = canvasEl.offsetHeight;
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
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
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
      const count = Math.min(60, (canvasEl.width * canvasEl.height) / 20000);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx2.clearRect(0, 0, canvasEl.width, canvasEl.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
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
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const floatingShapes = [
    { icon: "✦", delay: 0, x: "8%", y: "15%" },
    { icon: "◈", delay: 0.4, x: "92%", y: "20%" },
    { icon: "⌘", delay: 0.6, x: "10%", y: "80%" },
    { icon: "⬡", delay: 0.8, x: "90%", y: "85%" },
    { icon: "▣", delay: 0.2, x: "50%", y: "5%" },
    { icon: "⊹", delay: 0.5, x: "50%", y: "95%" },
  ];

  const features = [
    { icon: FaBrain, text: "AI-Powered Data Analytics" },
    { icon: FaChartLine, text: "Real-Time Dashboard" },
    { icon: FaRocket, text: "Predictive Intelligence" },
    { icon: FaShieldAlt, text: "Enterprise Grade Security" },
  ];

  const easeOut = [0.22, 1, 0.36, 1] as const;
  const easeInOut = [0.42, 0, 0.58, 1] as const;

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
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0F1E] overflow-hidden py-20 lg:py-28">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

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
          className="absolute text-4xl md:text-5xl lg:text-6xl text-cyan-500/30"
          style={{ left: shape.x, top: shape.y, filter: "blur(1px)" }}
        >
          {shape.icon}
        </motion.div>
      ))}

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: [0, 0, 1, 1] }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
        style={{ width: "100%" }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
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
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center"
                alt="About DiracQ"
                className="w-full h-auto object-cover"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-sm pointer-events-none">
                <div className="text-center">
                  <div className="text-6xl mb-2">🚀</div>
                  <div>Data Analytics Team</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-lg" />
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-lg" />
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-lg" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50 rounded-br-lg" />
          </motion.div>
        </motion.div>

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

          <motion.h3
            variants={itemVariants}
            className="text-3xl sm:text-2xl md:text-3xl lg:text-3xl font-bold leading-[1.1] text-white"
          >
            Accelerate Business
            <br />
            Growth Through{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Intelligent
                <br />
                Analytics
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              />
            </span>
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed"
          >
            DiracQ empowers organizations with AI-driven analytics, predictive
            insights, and real-time business intelligence. Our platform
            transforms complex data into clear, actionable decisions that help
            businesses innovate faster.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid sm:grid-cols-2 gap-4 pt-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <feature.icon className="text-cyan-400 text-lg" />
                </div>
                <span className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------- Services Component ----------------------
function Services() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
      canvasEl.width = canvasEl.offsetWidth;
      canvasEl.height = canvasEl.offsetHeight;
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
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
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
      const count = Math.min(60, (canvasEl.width * canvasEl.height) / 20000);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx2.clearRect(0, 0, canvasEl.width, canvasEl.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
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
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const services = [
    {
      icon: <FaChartLine />,
      title: "Business Analytics",
      description:
        "Transform raw data into meaningful insights through interactive dashboards.",
      color: "from-cyan-400 to-blue-400",
    },
    {
      icon: <FaRobot />,
      title: "AI Automation",
      description:
        "Automate repetitive workflows using advanced AI and machine learning.",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: <FaDatabase />,
      title: "Big Data Solutions",
      description: "Manage and process large-scale enterprise data efficiently.",
      color: "from-orange-400 to-yellow-400",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Integration",
      description: "Secure cloud connectivity with real-time synchronization.",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      description: "Enterprise-grade protection for your business-critical data.",
      color: "from-red-400 to-pink-400",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Digital Transformation",
      description: "Modernize business operations with AI-powered technologies.",
      color: "from-indigo-400 to-purple-400",
    },
  ];

  const floatingShapes = [
    { icon: "✦", delay: 0, x: "8%", y: "15%" },
    { icon: "◈", delay: 0.4, x: "92%", y: "20%" },
    { icon: "⌘", delay: 0.6, x: "10%", y: "80%" },
    { icon: "⬡", delay: 0.8, x: "90%", y: "85%" },
    { icon: "▣", delay: 0.2, x: "50%", y: "5%" },
    { icon: "⊹", delay: 0.5, x: "50%", y: "95%" },
  ];

  const easeOut = [0.22, 1, 0.36, 1] as const;
  const easeInOut = [0.42, 0, 0.58, 1] as const;

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
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0F1E] overflow-hidden py-20 lg:py-28">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

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
          className="absolute text-4xl md:text-5xl lg:text-6xl text-cyan-500/30"
          style={{ left: shape.x, top: shape.y, filter: "blur(1px)" }}
        >
          {shape.icon}
        </motion.div>
      ))}

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: [0, 0, 1, 1] }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
        style={{ width: "100%" }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-medium">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]"
          >
            Intelligent Services
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                for Every Business
              </span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 mt-6 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
          >
            Our services combine artificial intelligence, cloud technologies,
            automation, and enterprise analytics to accelerate business growth.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-[#1E293B] border border-white/10 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl text-white mb-6 shadow-lg flex-shrink-0`}
              >
                {service.icon}
              </motion.div>
              <h3 className="relative z-10 text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative z-10 text-gray-400 leading-7 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                {service.description}
              </p>
              <motion.button
                whileHover={{ x: 5 }}
                className="relative z-10 mt-6 text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 group/btn"
              >
                <span>Learn More</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="inline-block"
                >
                  →
                </motion.span>
              </motion.button>
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                style={{ transformOrigin: "center" }}
              />
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400/0 group-hover:border-cyan-400/30 rounded-tl-2xl transition-all duration-300" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400/30 rounded-tr-2xl transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400/0 group-hover:border-cyan-400/30 rounded-bl-2xl transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400/30 rounded-br-2xl transition-all duration-300" />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="absolute top-4 right-4 text-xs font-mono text-gray-600 group-hover:text-cyan-400 transition-colors duration-300"
              >
                {(index + 1).toString().padStart(2, "0")}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 lg:mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex flex-wrap items-center justify-center gap-4 bg-[#1E293B] border border-white/10 rounded-full px-6 py-3 hover:border-cyan-400/50 transition-all duration-300"
          >
            <span className="text-white font-medium text-sm md:text-base">
              Ready to transform your business?
            </span>
            <motion.button
              whileHover={{ x: 5 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded-full text-white font-semibold text-sm whitespace-nowrap"
            >
              Get Started →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------- WhyChoose Component ----------------------
function WhyChoose() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
      canvasEl.width = canvasEl.offsetWidth;
      canvasEl.height = canvasEl.offsetHeight;
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
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
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
      const count = Math.min(60, (canvasEl.width * canvasEl.height) / 20000);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx2.clearRect(0, 0, canvasEl.width, canvasEl.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
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
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const features = [
    {
      icon: <FaRobot />,
      title: "AI Automation",
      description:
        "Automate repetitive tasks with intelligent AI-powered workflows.",
      color: "from-cyan-400 to-blue-400",
      gradient: "from-cyan-500/30 to-blue-500/30",
      border: "border-cyan-400/30",
    },
    {
      icon: <FaChartPie />,
      title: "Real-Time Analytics",
      description:
        "Track business performance with interactive dashboards and live insights.",
      color: "from-purple-400 to-pink-400",
      gradient: "from-purple-500/30 to-pink-500/30",
      border: "border-purple-400/30",
    },
    {
      icon: <FaLock />,
      title: "Enterprise Security",
      description:
        "Protect your critical business data with advanced security standards.",
      color: "from-orange-400 to-yellow-400",
      gradient: "from-orange-500/30 to-yellow-500/30",
      border: "border-orange-400/30",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Platform",
      description: "Access your analytics securely from anywhere, anytime.",
      color: "from-green-400 to-emerald-400",
      gradient: "from-green-500/30 to-emerald-500/30",
      border: "border-green-400/30",
    },
  ];

  const floatingShapes = [
    { icon: "✦", delay: 0, x: "8%", y: "15%" },
    { icon: "◈", delay: 0.4, x: "92%", y: "20%" },
    { icon: "⌘", delay: 0.6, x: "10%", y: "80%" },
    { icon: "⬡", delay: 0.8, x: "90%", y: "85%" },
    { icon: "▣", delay: 0.2, x: "50%", y: "5%" },
    { icon: "⊹", delay: 0.5, x: "50%", y: "95%" },
  ];

  const easeOut = [0.22, 1, 0.36, 1] as const;
  const easeInOut = [0.42, 0, 0.58, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0F1E] overflow-hidden py-20 lg:py-28">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

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
          className="absolute text-4xl md:text-5xl lg:text-6xl text-cyan-500/30"
          style={{ left: shape.x, top: shape.y, filter: "blur(1px)" }}
        >
          {shape.icon}
        </motion.div>
      ))}

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: [0, 0, 1, 1] }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
        style={{ width: "100%" }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-medium">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]"
          >
            Built for
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Enterprise Growth
              </span>
            </span>
          </motion.h2>
        </motion.div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className={`absolute inset-0 rounded-full border-2 ${feature.border} opacity-30`}
                  style={{ width: "140px", height: "140px", margin: "0 auto" }}
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: [0, 0, 1, 1],
                  }}
                  className={`absolute inset-0 rounded-full border border-dashed ${feature.border} opacity-20`}
                  style={{
                    width: "160px",
                    height: "160px",
                    margin: "0 auto",
                    left: "-10px",
                    top: "-10px",
                  }}
                />
                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    boxShadow: "0 0 40px rgba(6, 182, 212, 0.3)",
                  }}
                  transition={{ duration: 0.6 }}
                  className={`relative w-32 h-32 rounded-full bg-gradient-to-br ${feature.gradient} border ${feature.border} flex items-center justify-center text-5xl text-white shadow-xl mx-auto`}
                >
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${feature.gradient} blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: [0, 0, 1, 1],
                    }}
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: [0, 0, 1, 1],
                    }}
                    className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50"
                  />
                </motion.div>
              </div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-2xl font-semibold text-white mt-6 mb-3 group-hover:text-cyan-400 transition-colors duration-300"
              >
                {feature.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-gray-400 leading-7 group-hover:text-gray-300 transition-colors duration-300 max-w-sm"
              >
                {feature.description}
              </motion.p>
              <br />
              <br />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className={`h-[2px] bg-gradient-to-r ${feature.color} rounded-full mt-4 group-hover:w-3/4 transition-all duration-300`}
              />
              <br />
              <br />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#1E293B] border border-white/10 flex items-center justify-center text-xs font-bold text-cyan-400"
              >
                0{index + 1}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------- Industries Component ----------------------
function Industries() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
      canvasEl.width = canvasEl.offsetWidth;
      canvasEl.height = canvasEl.offsetHeight;
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
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
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
      const count = Math.min(60, (canvasEl.width * canvasEl.height) / 20000);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx2.clearRect(0, 0, canvasEl.width, canvasEl.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
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
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const industries = [
    {
      icon: <FaIndustry />,
      title: "Manufacturing",
      description:
        "Optimize production, monitor operations, and reduce downtime with AI analytics.",
      color: "from-cyan-400 to-blue-400",
      bgColor: "group-hover:bg-cyan-500/10",
      borderColor: "group-hover:border-cyan-400",
    },
    {
      icon: <FaHeartbeat />,
      title: "Healthcare",
      description:
        "Improve patient care with predictive analytics and intelligent reporting.",
      color: "from-pink-400 to-rose-400",
      bgColor: "group-hover:bg-pink-500/10",
      borderColor: "group-hover:border-pink-400",
    },
    {
      icon: <FaShoppingCart />,
      title: "Retail",
      description:
        "Understand customer behavior and increase sales through real-time insights.",
      color: "from-orange-400 to-yellow-400",
      bgColor: "group-hover:bg-orange-500/10",
      borderColor: "group-hover:border-orange-400",
    },
    {
      icon: <FaUniversity />,
      title: "Finance",
      description:
        "Detect fraud, analyze risks, and improve financial performance.",
      color: "from-green-400 to-emerald-400",
      bgColor: "group-hover:bg-green-500/10",
      borderColor: "group-hover:border-green-400",
    },
    {
      icon: <FaTruck />,
      title: "Logistics",
      description:
        "Track fleets, optimize routes, and streamline supply chains.",
      color: "from-purple-400 to-indigo-400",
      bgColor: "group-hover:bg-purple-500/10",
      borderColor: "group-hover:border-purple-400",
    },
    {
      icon: <FaMicrochip />,
      title: "Technology",
      description:
        "Leverage AI to accelerate innovation and improve business decisions.",
      color: "from-red-400 to-pink-400",
      bgColor: "group-hover:bg-red-500/10",
      borderColor: "group-hover:border-red-400",
    },
  ];

  const easeOut = [0.22, 1, 0.36, 1] as const;
  const easeInOut = [0.42, 0, 0.58, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0F1E] overflow-hidden py-20 lg:py-28">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

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

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-medium">
              Industries
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]"
          >
            Industries
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                We Serve
              </span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              />
            </span>
          </motion.h2>
        </motion.div>
        <br />
        <br />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 },
              }}
              className={`group relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl p-8 border border-white/5 
                ${industry.bgColor} ${industry.borderColor} transition-all duration-500 
                hover:shadow-2xl hover:shadow-${industry.color.split(' ')[1]}/10 
                overflow-hidden cursor-pointer`}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${
                    industry.color.split(" ")[1]
                  }15, transparent 70%)`,
                }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `conic-gradient(from 0deg, transparent, ${
                    industry.color.split(" ")[1]
                  }40, transparent, ${industry.color.split(" ")[0]}40, transparent)`,
                  zIndex: -1,
                }}
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: easeInOut,
                  delay: index * 0.2,
                }}
                className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} 
                  flex items-center justify-center text-3xl text-white mb-6 shadow-lg 
                  group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
              >
                {industry.icon}
              </motion.div>
              <h3 className="relative z-10 text-2xl font-semibold text-white mb-4 inline-block">
                {industry.title}
                <motion.span
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                  className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${industry.color} rounded-full`}
                />
              </h3>
              <p className="relative z-10 text-gray-400 leading-7 group-hover:text-gray-200 transition-colors duration-300">
                {industry.description}
              </p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 mt-6 flex items-center gap-2 text-sm font-medium"
                style={{ color: industry.color.split(" ")[1] }}
              >
                <span>Learn More</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight className="text-xs" />
                </motion.span>
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${industry.color} shadow-lg`}
              />
              <div
                className={`absolute bottom-4 right-4 text-6xl font-bold opacity-5 
                  group-hover:opacity-10 transition-opacity duration-500 select-none`}
                style={{ color: industry.color.split(" ")[1] }}
              >
                {(index + 1).toString().padStart(2, "0")}
              </div>
              <motion.div
                whileHover={{ scale: 1.5 }}
                className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-2xl 
                  opacity-0 group-hover:opacity-20 transition-opacity duration-700 
                  bg-gradient-to-r ${industry.color}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------- Research Component ----------------------
function Research() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
      canvasEl.width = canvasEl.offsetWidth;
      canvasEl.height = canvasEl.offsetHeight;
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
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
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
      const count = Math.min(60, (canvasEl.width * canvasEl.height) / 20000);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx2.clearRect(0, 0, canvasEl.width, canvasEl.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
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
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const floatingShapes = [
    { icon: "✦", delay: 0, x: "8%", y: "15%" },
    { icon: "◈", delay: 0.4, x: "92%", y: "20%" },
    { icon: "⌘", delay: 0.6, x: "10%", y: "80%" },
    { icon: "⬡", delay: 0.8, x: "90%", y: "85%" },
    { icon: "▣", delay: 0.2, x: "50%", y: "5%" },
    { icon: "⊹", delay: 0.5, x: "50%", y: "95%" },
  ];

  const easeOut = [0.22, 1, 0.36, 1] as const;
  const easeInOut = [0.42, 0, 0.58, 1] as const;

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
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0F1E] overflow-hidden py-20 lg:py-28">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

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
          className="absolute text-4xl md:text-5xl lg:text-6xl text-cyan-500/30"
          style={{ left: shape.x, top: shape.y, filter: "blur(1px)" }}
        >
          {shape.icon}
        </motion.div>
      ))}

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: [0, 0, 1, 1] }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
        style={{ width: "100%" }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse" />
              <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-medium">
                Research & Innovation
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]"
            >
              Shaping the
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Future of AI
                  <br />
                  Analytics
                </span>
              </span>
            </motion.h2>
            <br />
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed"
            >
              Our research team continuously develops advanced AI models,
              predictive analytics, and intelligent automation to help
              organizations make smarter and faster business decisions.
            </motion.p>
            <br />
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-2"
            >
              {[
                { value: "15+", label: "Research Projects", icon: <FaFlask /> },
                {
                  value: "98%",
                  label: "Prediction Accuracy",
                  icon: <FaMicroscope />,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative bg-[#1E293B] border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
                  <div className="relative z-10">
                    <div className="text-3xl text-cyan-400 mb-2">{stat.icon}</div>
                    <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeOut }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: easeInOut }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10">
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
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-sm pointer-events-none">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🔬</div>
                    <div>Research Lab</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-lg" />
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-lg" />
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-lg" />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50 rounded-br-lg" />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-4 -right-4 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-lg px-3 py-1.5"
              >
                <span className="text-xs text-cyan-300 font-mono">🔬 AI RESEARCH</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------------------- News Component ----------------------
function News() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
      canvasEl.width = canvasEl.offsetWidth;
      canvasEl.height = canvasEl.offsetHeight;
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
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
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
      const count = Math.min(60, (canvasEl.width * canvasEl.height) / 20000);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx2.clearRect(0, 0, canvasEl.width, canvasEl.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
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
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const news = [
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      date: "28 July 2026",
      title: "How AI is Transforming Business Intelligence",
      description:
        "Discover how artificial intelligence is reshaping analytics and helping organizations make better decisions.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&crop=center",
      date: "20 July 2026",
      title: "Predictive Analytics for Modern Enterprises",
      description:
        "Learn how predictive models improve forecasting, reduce costs, and increase operational efficiency.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      date: "12 July 2026",
      title: "Cloud Analytics: The Future of Data",
      description:
        "Explore how cloud-native analytics platforms enable secure, scalable, and real-time business insights.",
    },
  ];

  const floatingShapes = [
    { icon: "✦", delay: 0, x: "8%", y: "15%" },
    { icon: "◈", delay: 0.4, x: "92%", y: "20%" },
    { icon: "⌘", delay: 0.6, x: "10%", y: "80%" },
    { icon: "⬡", delay: 0.8, x: "90%", y: "85%" },
    { icon: "▣", delay: 0.2, x: "50%", y: "5%" },
    { icon: "⊹", delay: 0.5, x: "50%", y: "95%" },
  ];

  const easeOut = [0.22, 1, 0.36, 1] as const;
  const easeInOut = [0.42, 0, 0.58, 1] as const;

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
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0F1E] overflow-hidden py-20 lg:py-28">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

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
          className="absolute text-4xl md:text-5xl lg:text-6xl text-cyan-500/30"
          style={{ left: shape.x, top: shape.y, filter: "blur(1px)" }}
        >
          {shape.icon}
        </motion.div>
      ))}

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: [0, 0, 1, 1] }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
        style={{ width: "100%" }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-4"
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]"
          >
            Insights
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                & Resources
              </span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              />
            </span>
          </motion.h2>
        </motion.div>
        <br />
        <br />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {news.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-[#1E293B] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="relative z-10 p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <FaCalendarAlt className="text-cyan-400 text-xs" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-7 group-hover:text-gray-300 transition-colors duration-300 flex-grow line-clamp-3">
                  {item.description}
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="relative z-10 mt-4 text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 group/btn text-sm"
                >
                  <span>Read More</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-block"
                  >
                    <FaArrowRight />
                  </motion.span>
                </motion.button>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                  style={{ transformOrigin: "center" }}
                />
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400/0 group-hover:border-cyan-400/30 rounded-tl-2xl transition-all duration-300" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400/30 rounded-tr-2xl transition-all duration-300" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400/0 group-hover:border-cyan-400/30 rounded-bl-2xl transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400/30 rounded-br-2xl transition-all duration-300" />
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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
      canvasEl.width = canvasEl.offsetWidth;
      canvasEl.height = canvasEl.offsetHeight;
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
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
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
      const count = Math.min(60, (canvasEl.width * canvasEl.height) / 20000);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx2.clearRect(0, 0, canvasEl.width, canvasEl.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
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
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const floatingShapes = [
    { icon: "✦", delay: 0, x: "8%", y: "15%" },
    { icon: "◈", delay: 0.4, x: "92%", y: "20%" },
    { icon: "⌘", delay: 0.6, x: "10%", y: "80%" },
    { icon: "⬡", delay: 0.8, x: "90%", y: "85%" },
    { icon: "▣", delay: 0.2, x: "50%", y: "5%" },
    { icon: "⊹", delay: 0.5, x: "50%", y: "95%" },
  ];

  const easeOut = [0.22, 1, 0.36, 1] as const;
  const easeInOut = [0.42, 0, 0.58, 1] as const;

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
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0F1E] overflow-hidden py-20 lg:py-28">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

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
          className="absolute text-4xl md:text-5xl lg:text-6xl text-cyan-500/30"
          style={{ left: shape.x, top: shape.y, filter: "blur(1px)" }}
        >
          {shape.icon}
        </motion.div>
      ))}

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: [0, 0, 1, 1] }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
        style={{ width: "100%" }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="relative inline-block">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
              Let's Build the <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Future with AI Together
              </span>
            </h2>
            <br />
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Ready to unlock the full potential of your business? Connect with
              our experts and discover how DiracQ can transform your data into
              actionable insights.
            </p>
            <br />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.button
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(6, 182, 212, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 overflow-hidden text-sm md:text-base"
              >
                <span className="relative z-10">Book a Demo</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05, borderColor: "#06B6D4" }}
                whileTap={{ scale: 0.95 }}
                className="relative group border border-white/20 hover:border-cyan-400 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 overflow-hidden text-sm md:text-base inline-flex items-center justify-center gap-3"
              >
                <span className="relative z-10">Contact Us</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  <FaArrowRight />
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-cyan-500/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------- Main Page (All Components) ----------------------
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <WhyChoose />
      <Industries />
      <Research />
      <News />
      <ContactCTA />
    </>
  );
}