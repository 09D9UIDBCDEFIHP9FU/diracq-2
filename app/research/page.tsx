"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaArrowRight, FaCalendarAlt, FaChevronRight } from "react-icons/fa";

const RESEARCH = [
  {
    id: "spad-device-physics",
    title: "SPAD Device Physics & Optimization",
    summary: "Advanced semiconductor junction engineering for high-efficiency single-photon avalanche diodes with minimal dark count rates and picosecond timing resolution.",
    // 👇 DIFFERENT IMAGE FOR FIRST CARD - Semiconductor/Microchip image
    img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1200&q=80",
    category: "Device Physics",
    date: "2026",
  },
  {
    id: "avalanche-dynamics",
    title: "Avalanche Dynamics & Carrier Multiplication",
    summary: "Precise control of carrier multiplication in SPAD structures for fast avalanche buildup and accurate photon arrival detection.",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80",
    category: "Avalanche Dynamics",
    date: "2026",
  },
  {
    id: "quenching-circuits",
    title: "Advanced Quenching Circuit Architecture",
    summary: "Integrated passive and active quenching approaches for rapid avalanche suppression, detector reset, and reliable photon counting.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    category: "Quenching Architecture",
    date: "2025",
  },
  {
    id: "quantum-communication",
    title: "Quantum Key Distribution (QKD) Systems",
    summary: "Single photon detectors for secure quantum communication, enabling quantum key distribution with minimal noise and high detection efficiency.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
    category: "Quantum Communication",
    date: "2025",
  },
  {
    id: "lidar-sensing",
    title: "Photon-Counting LiDAR & TOF",
    summary: "High-resolution 3D mapping and long-range sensing using photon-counting LiDAR with Time-of-Flight techniques for autonomous navigation.",
    img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200&q=80",
    category: "LiDAR & Sensing",
    date: "2026",
  },
  {
    id: "tcad-simulation",
    title: "TCAD Simulation & Device Modelling",
    summary: "Comprehensive device physics modelling and TCAD simulation for optimizing photon detection efficiency, dark count rates, and timing resolution.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    category: "Device Physics",
    date: "2025",
  },
];

const ITEMS_PER_PAGE = 6;

export default function Research() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const categories = useMemo(() => {
    const cats = RESEARCH.map((item) => item.category || "General");
    return ["All", ...Array.from(new Set(cats))];
  }, []);

  const filteredItems = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();
    return RESEARCH.filter((item) => {
      const title = item.title.toLowerCase();
      const summary = item.summary.toLowerCase();
      const matchesSearch = !search || title.includes(search) || summary.includes(search);
      const matchesCategory = selectedCategory === "All" || (item.category || "General") === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filteredItems.length));
  };

  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070B15] px-4 pt-32 pb-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-cyan-500/[0.06] blur-[150px]" />
        <div className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-blue-600/[0.06] blur-[150px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.05] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] font-medium uppercase tracking-[3px] text-cyan-400">
              Research & Publications
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Advancing{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Photon Detection
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-gray-400">
            DIRACQ develops advanced photon detection systems through device
            physics modelling, TCAD simulation, and experimental validation for
            next‑generation quantum technologies.
          </p>
        </motion.div>

        {/* Search + Filter */}
        <div className="mb-12 space-y-4">
          {/* Search */}
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="Search research projects..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-12 w-full rounded-xl border border-white/5 bg-[#111827] pl-11 pr-4 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 shadow-[0_0_20px_-8px_rgba(34,211,238,0.15)]"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/5 border border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredItems.length === 0 ? (
          <div className="rounded-2xl border border-white/5 bg-[#111827]/50 py-20 text-center">
            <p className="text-gray-400">No research projects found matching your criteria.</p>
          </div>
        ) : (
          <>
            <motion.div
              key={`${selectedCategory}-${searchTerm}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {visibleItems.map((project) => (
                  <motion.article
                    key={project.id}
                    variants={itemVariants}
                    layout
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#111827] transition-all duration-300 hover:border-cyan-400/20 hover:shadow-[0_8px_40px_-12px_rgba(34,211,238,0.08)]"
                  >
                    <Link href={`/research/${project.id}`} className="block h-full">
                      {/* Image Section */}
                      <div className="relative h-52 w-full overflow-hidden bg-[#0F1629]">
                        <Image
                          src={project.img}
                          alt={project.title}
                          fill
                          unoptimized
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={visibleItems.indexOf(project) < 3}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#070B15] via-[#070B15]/20 to-transparent opacity-80" />
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#070B15] to-transparent" />

                        {/* Date Badge */}
                        <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-lg bg-[#070B15]/80 px-3 py-1.5 backdrop-blur-md border border-white/10 shadow-lg">
                          <FaCalendarAlt className="text-[10px] text-cyan-400" />
                          <span className="text-[11px] font-medium text-gray-200">
                            {project.date}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex min-h-[210px] flex-col p-5">
                        <h3 className="mb-2.5 line-clamp-2 text-base font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-cyan-400">
                          {project.title}
                        </h3>
                        <p className="line-clamp-3 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                          {project.summary}
                        </p>

                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                          <span className="text-[11px] text-gray-500">Research Article</span>
                          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 transition-all duration-300 group-hover:gap-2.5">
                            Read
                            <FaChevronRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Load More */}
            {hasMore && (
              <div className="mt-12 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={loadMore}
                  className="group relative overflow-hidden rounded-full px-8 py-3 text-sm font-medium text-white transition-all"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-90" />
                  <span className="relative z-10 flex items-center gap-2">
                    Load More
                    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-0.5" />
                  </span>
                </motion.button>
              </div>
            )}

            {/* Count */}
            <div className="mt-5 text-center text-xs text-gray-500 tracking-wide">
              Showing {visibleItems.length} of {filteredItems.length} research projects
            </div>
          </>
        )}
      </div>
    </section>
  );
}