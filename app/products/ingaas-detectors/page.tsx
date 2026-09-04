"use client";

import Link from "next/link";
import Image from "next/image";
import { FaClock, FaChartLine, FaShieldAlt } from "react-icons/fa";

export default function InGaAsDetectorsPage() {
  return (
    <>
      <main className="min-h-screen bg-[#0A0F1E] text-white pt-24 overflow-hidden">

        {/* ===== HERO SECTION ===== */}
        <section className="relative overflow-hidden py-10 md:py-12 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,200,255,0.08),transparent_40%)]" />
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]" />

          <div className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-12 px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-10 lg:gap-16 lg:px-10">
            {/* Left Content */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-[5px] text-cyan-400">
                DIRACQ PRODUCTS
              </span>

              <h1 className="mt-4 text-4xl font-bold leading-[0.98] md:text-5xl lg:text-6xl xl:text-7xl">
                InGaAs
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Detectors
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
                High-performance indium gallium arsenide detectors engineered
                for sensitive near-infrared photon detection and advanced
                quantum photonics applications.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-4 font-semibold transition hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Contact Us
                </Link>

                <Link
                  href="/products"
                  className="rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:border-cyan-400/50 hover:bg-white/5"
                >
                  All Products
                </Link>
              </div>

            </div>

            {/* Right - Image */}
            <div className="relative mt-2 md:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
                <Image
                  src="/images/ingaas-detector-chip.jpg"
                  alt="Semiconductor detector chip used in InGaAs photon detection systems"
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                  unoptimized
                />

                {/* Floating Badges */}
                <div className="absolute -top-3 -right-3 rounded-lg bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 px-3 py-1.5">
                  <span className="text-xs text-cyan-300 font-mono">Near-IR</span>
                </div>

                <div className="absolute -bottom-3 -left-3 rounded-lg bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-3 py-1.5">
                  <span className="text-xs text-blue-300 font-mono">High Sensitivity</span>
                </div>
              </div>

              <div className="absolute -top-1 -left-1 h-8 w-8 rounded-tl-lg border-t-2 border-l-2 border-cyan-400/50" />
              <div className="absolute -top-1 -right-1 h-8 w-8 rounded-tr-lg border-t-2 border-r-2 border-cyan-400/50" />
              <div className="absolute -bottom-1 -left-1 h-8 w-8 rounded-bl-lg border-b-2 border-l-2 border-cyan-400/50" />
              <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-br-lg border-b-2 border-r-2 border-cyan-400/50" />
            </div>
          </div>
        </section>

        {/* ===== KEY CAPABILITIES ===== */}
        <section className="border-t border-white/5 py-20">
          <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
            <span className="text-sm uppercase tracking-[4px] text-cyan-400">
              Key Capabilities
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Near-infrared photon
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                detection technology
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-gray-400">
              Our InGaAs detectors are engineered for reliable near-infrared
              photon counting, combining high sensitivity with low noise and
              precise timing performance.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: <FaClock className="text-2xl" />,
                  title: "Near-IR Response",
                  desc: "Optimized sensitivity across the near-infrared spectrum for demanding photon-counting systems.",
                },
                {
                  icon: <FaChartLine className="text-2xl" />,
                  title: "High Sensitivity",
                  desc: "Reliable detection performance for weak optical signals in quantum and sensing applications.",
                },
                {
                  icon: <FaShieldAlt className="text-2xl" />,
                  title: "Low Noise",
                  desc: "Low-noise operation improves signal quality and supports accurate photon measurements.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-[#1E293B]/30 p-8 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1"
                >
                  <div className="text-cyan-400">{item.icon}</div>

                  <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className="border-t border-white/5 py-20 bg-[#0F172A] rounded-t-3xl">
          <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
            <span className="text-sm uppercase tracking-[4px] text-cyan-400">
              Features
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Why choose our
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                InGaAs Detectors
              </span>
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Near-Infrared Wavelengths",
                  desc: "Designed for 900-1700 nm applications including fiber optics, quantum communication, and sensing.",
                },
                {
                  title: "High Sensitivity",
                  desc: "Sensitive response to weak optical signals for dependable single-photon detection.",
                },
                {
                  title: "Low Noise",
                  desc: "Low-noise performance helps preserve measurement accuracy in low-light conditions.",
                },
                {
                  title: "Fast Timing",
                  desc: "Fast response supports precise photon arrival detection and time-correlated measurements.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-[#1E293B]/30 p-6 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== APPLICATIONS ===== */}
        <section className="border-t border-white/5 py-20">
          <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
            <span className="text-sm uppercase tracking-[4px] text-cyan-400">
              Applications
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Where our InGaAs detectors
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                make an impact
              </span>
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Quantum Communication",
                  desc: "Near-infrared single-photon detection for quantum key distribution and secure optical links.",
                },
                {
                  title: "Fiber-Optic Networks",
                  desc: "Sensitive optical monitoring and signal analysis across modern fiber communication systems.",
                },
                {
                  title: "Scientific Research",
                  desc: "Time-correlated single-photon counting and quantum optics experiments in the infrared.",
                },
              ].map((app) => (
                <div
                  key={app.title}
                  className="rounded-2xl border border-white/10 bg-[#1E293B]/30 p-6 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">{app.title}</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20 p-12 text-center md:p-16">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Ready to advance your research?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                Contact our team to learn more about InGaAs detector options
                and configurations for your application.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 font-semibold transition hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Contact Us
                </Link>
                <Link
                  href="/products"
                  className="rounded-full border border-white/20 px-8 py-3 font-semibold transition hover:border-cyan-400/50 hover:bg-white/5"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}