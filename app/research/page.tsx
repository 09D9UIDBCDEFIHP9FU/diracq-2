"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaArrowRight } from "react-icons/fa";

const RESEARCH = [
  {
    id: "explainable-ai",
    title: "Explainable AI for Decisioning",
    summary:
      "Techniques to make model predictions transparent for business users.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
    category: "AI & ML",
  },
  {
    id: "streaming-analytics",
    title: "Streaming Analytics at Scale",
    summary:
      "Low-latency pipelines for real-time insights and anomaly detection.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    category: "Data Engineering",
  },
  {
    id: "privacy-preserving-ml",
    title: "Privacy-Preserving ML",
    summary:
      "Federated learning and differential privacy experiments.",
    img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200&q=80",
    category: "Security & Privacy",
  },
];

const ITEMS_PER_PAGE = 6;

export default function Research() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  /* ================= CATEGORIES ================= */

  const categories = useMemo(() => {
    const cats = RESEARCH.map(
      (item) => item.category || "General"
    );

    return ["All", ...Array.from(new Set(cats))];
  }, []);

  /* ================= FILTER ================= */

  const filteredItems = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    return RESEARCH.filter((item) => {
      const title = item.title.toLowerCase();
      const summary = item.summary.toLowerCase();

      const matchesSearch =
        !search ||
        title.includes(search) ||
        summary.includes(search);

      const matchesCategory =
        selectedCategory === "All" ||
        (item.category || "General") === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  /* ================= PAGINATION ================= */

  const visibleItems = filteredItems.slice(0, visibleCount);

  const hasMore =
    visibleCount < filteredItems.length;

  const loadMore = () => {
    setVisibleCount((prev) =>
      Math.min(
        prev + ITEMS_PER_PAGE,
        filteredItems.length
      )
    );
  };

  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(e.target.value);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  /* ================= ANIMATIONS ================= */

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  /* ================= UI ================= */

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0F1E] px-4 pt-36 pb-20">

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[150px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-12 text-center"
        >

          <span className="mb-5 inline-block rounded-full border border-cyan-400/30 px-5 py-2 text-xs font-medium uppercase tracking-[4px] text-cyan-400">
            Research & Innovation
          </span>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">

            Our{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Research
            </span>{" "}

            Projects

          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
            Exploring the frontiers of AI, data engineering,
            and privacy-preserving machine learning.
          </p>

        </motion.div>

        {/* ================= SEARCH + FILTER ================= */}

        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center">

          {/* Search */}

          <div className="relative flex-1">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

            <input
              type="text"
              placeholder="Search research projects..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-14 w-full rounded-xl border border-white/10 bg-[#1E293B] pl-12 pr-5 text-white outline-none transition-all placeholder:text-gray-500 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30"
            />

          </div>

          {/* Categories */}

          <div className="flex flex-wrap gap-2 lg:max-w-[560px] lg:justify-end">

            {categories.map((cat) => (

              <button
                key={cat}
                onClick={() =>
                  handleFilterChange(cat)
                }
                className={`rounded-full px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? "border border-cyan-400/60 bg-cyan-500/15 text-cyan-400 shadow-lg shadow-cyan-500/10"
                    : "border border-white/10 bg-[#1E293B] text-gray-400 hover:border-cyan-400/40 hover:text-cyan-300"
                }`}
              >
                {cat}
              </button>

            ))}

          </div>

        </div>

        {/* ================= PROJECTS ================= */}

        {filteredItems.length === 0 ? (

          <div className="rounded-2xl border border-white/10 bg-[#1E293B]/70 py-20 text-center">

            <p className="text-lg text-gray-400">
              No research projects found
              matching your criteria.
            </p>

          </div>

        ) : (

          <>

            <motion.div
              key={`${selectedCategory}-${searchTerm}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >

              <AnimatePresence mode="popLayout">

                {visibleItems.map((project) => (

                  <motion.article
                    key={project.id}
                    variants={itemVariants}
                    layout
                    whileHover={{
                      y: -6,
                    }}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-[#1E293B] transition-all duration-300 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10"
                  >

                    <Link
                      href={`/research/${project.id}`}
                      className="block h-full"
                    >

                      {/* ================= IMAGE ================= */}

                      <div className="relative h-56 w-full overflow-hidden bg-[#172033]">

                        <Image
                          src={project.img}
                          alt={project.title}
                          fill
                          unoptimized
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {/* Image Overlay */}

                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/70 via-transparent to-transparent" />

                        {/* Category Badge */}

                        <div className="absolute left-4 top-4 rounded-lg border border-cyan-400/30 bg-[#0A0F1E]/70 px-3 py-1.5 backdrop-blur-md">

                          <span className="text-xs font-medium text-cyan-300">
                            {project.category}
                          </span>

                        </div>

                      </div>

                      {/* ================= CONTENT ================= */}

                      <div className="flex min-h-[250px] flex-col p-6">

                        <h3 className="mb-3 line-clamp-2 text-xl font-semibold leading-7 text-white transition-colors duration-300 group-hover:text-cyan-400">
                          {project.title}
                        </h3>

                        <p className="line-clamp-3 text-sm leading-6 text-gray-400 transition-colors group-hover:text-gray-300">
                          {project.summary}
                        </p>

                        <div className="mt-auto flex items-center justify-between pt-6">

                          <span className="text-xs text-gray-500">
                            Research
                          </span>

                          <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-transform duration-300 group-hover:translate-x-1">

                            Read More

                            <FaArrowRight className="text-xs" />

                          </span>

                        </div>

                      </div>

                    </Link>

                  </motion.article>

                ))}

              </AnimatePresence>

            </motion.div>

            {/* ================= LOAD MORE ================= */}

            {hasMore && (

              <div className="mt-12 flex justify-center">

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={loadMore}
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:shadow-cyan-500/40"
                >
                  Load More
                </motion.button>

              </div>

            )}

            {/* ================= COUNT ================= */}

          
          </>

        )}

      </div>

    </section>
  );
}
