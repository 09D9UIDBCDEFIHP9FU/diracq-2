"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { FaClock, FaChartLine, FaShieldAlt } from "react-icons/fa";

export default function SPADModulesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0A0F1E] text-white pt-24 overflow-hidden">

        {/* ===== HERO SECTION ===== */}
        <section className="relative overflow-hidden py-24 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,200,255,0.08),transparent_40%)]" />
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]" />

          <div className="relative z-10 mx-auto w-full max-w-[1400px] items-center gap-16 px-6 lg:grid lg:grid-cols-2 lg:px-10">
            {/* Left Content */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-[5px] text-cyan-400">
                DIRACQ PRODUCTS
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl xl:text-7xl">
                SPAD
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Modules
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
                Silicon-based single photon avalanche diode modules optimized for
                visible wavelengths, offering low dark count rates and high timing
                precision for photon counting applications.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-4 font-semibold transition hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Request Quote
                </Link>

                <Link
                  href="/products"
                  className="rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:border-cyan-400/50 hover:bg-white/5"
                >
                  All Products
                </Link>
              </div>

              {/* Key Specs */}
              <div className="mt-10 flex flex-wrap gap-6">
                <div>
                  <p className="text-2xl font-bold text-cyan-400">400-1100 nm</p>
                  <p className="text-sm text-gray-500">Wavelength Range</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-cyan-400">85%</p>
                  <p className="text-sm text-gray-500">Photon Detection Efficiency</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-cyan-400">50 cps</p>
                  <p className="text-sm text-gray-500">Dark Count Rate</p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative mt-10 lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
                <Image
                  src="https://images.unsplash.com/photo-1581092335875-2c4a4fa1ae6c?w=800&h=600&fit=crop&crop=center"
                  alt="SPAD Modules - DIRACQ"
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                  unoptimized
                />

                {/* Floating Badges */}
                <div className="absolute -top-3 -right-3 rounded-lg bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 px-3 py-1.5">
                  <span className="text-xs text-cyan-300 font-mono">Visible</span>
                </div>

                <div className="absolute -bottom-3 -left-3 rounded-lg bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-3 py-1.5">
                  <span className="text-xs text-blue-300 font-mono">High Precision</span>
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
              Visible wavelength photon
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                detection technology
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-gray-400">
              Our SPAD modules are engineered for high-precision photon counting
              in visible wavelengths, offering exceptional timing resolution and
              low noise performance.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: <FaClock className="text-2xl" />,
                  title: "Picosecond Timing",
                  desc: "Excellent timing resolution for accurate photon arrival detection in TCSPC applications.",
                },
                {
                  icon: <FaChartLine className="text-2xl" />,
                  title: "High Detection Efficiency",
                  desc: "85% photon detection efficiency at peak wavelengths for reliable single-photon counting.",
                },
                {
                  icon: <FaShieldAlt className="text-2xl" />,
                  title: "Low Dark Count Rate",
                  desc: "Minimal dark count rates (<50 cps) ensuring high signal-to-noise ratio.",
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
                SPAD Modules
              </span>
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Visible Wavelengths",
                  desc: "Optimized for 400–1100 nm wavelength range for visible photon counting applications.",
                },
                {
                  title: "High PDE",
                  desc: "85% photon detection efficiency at peak wavelengths for reliable single-photon detection.",
                },
                {
                  title: "Low DCR",
                  desc: "Dark count rates as low as 50 cps for accurate photon counting in low-light conditions.",
                },
                {
                  title: "Picosecond Resolution",
                  desc: "Excellent timing jitter performance for precise photon arrival detection.",
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
              Where our SPAD modules
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                make an impact
              </span>
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Quantum Communication",
                  desc: "Single photon detection for quantum key distribution (QKD) systems.",
                },
                {
                  title: "LiDAR & Sensing",
                  desc: "Photon-counting LiDAR for high-resolution 3D mapping and autonomous systems.",
                },
                {
                  title: "Scientific Research",
                  desc: "Time-correlated single photon counting (TCSPC) and quantum optics research.",
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
                Contact our team for more information about our SPAD modules
                and custom configurations for your application.
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