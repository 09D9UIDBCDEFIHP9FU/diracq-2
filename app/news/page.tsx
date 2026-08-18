"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaSearch,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";
import newsData from "@/app/lib/newsData";

const ITEMS_PER_PAGE = 6;

export default function News() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // =========================================================
  // CATEGORIES
  // =========================================================

  const categories = useMemo(() => {
    const cats = newsData.map(
      (item) => item.category || "General"
    );

    return ["All", ...Array.from(new Set(cats))];
  }, []);

  // =========================================================
  // FILTER ARTICLES
  // =========================================================

  const filteredArticles = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    return newsData.filter((item) => {
      const title = item.title?.toLowerCase() || "";
      const content = item.content?.toLowerCase() || "";

      const matchesSearch =
        search === "" ||
        title.includes(search) ||
        content.includes(search);

      const matchesCategory =
        selectedCategory === "All" ||
        (item.category || "General") === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // =========================================================
  // PAGINATION
  // =========================================================

  const visibleArticles = filteredArticles.slice(
    0,
    visibleCount
  );

  const hasMore =
    visibleCount < filteredArticles.length;

  const loadMore = () => {
    setVisibleCount((prev) =>
      Math.min(
        prev + ITEMS_PER_PAGE,
        filteredArticles.length
      )
    );
  };

  // =========================================================
  // CATEGORY FILTER
  // =========================================================

  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  // =========================================================
  // SEARCH
  // =========================================================

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(e.target.value);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  // =========================================================
  // CLEAR FILTER
  // =========================================================

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setVisibleCount(ITEMS_PER_PAGE);
  };

  // =========================================================
  // ANIMATION
  // =========================================================

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

  // =========================================================
  // PAGE
  // =========================================================

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0F1E] px-4 pt-36 pb-20">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[150px]" />

      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ===================================================== */}

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

          {/* Badge */}

          <span className="mb-5 inline-block rounded-full border border-cyan-400/30 px-5 py-2 text-xs font-medium uppercase tracking-[4px] text-cyan-400">
            News & Insights
          </span>

          {/* Heading */}

          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Latest{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              News
            </span>{" "}
            & Resources
          </h1>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
            Stay updated with the latest trends in AI,
            analytics, and business intelligence.
          </p>

        </motion.div>

        {/* =====================================================
            SEARCH + FILTERS
        ===================================================== */}

        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center">

          {/* SEARCH */}

          <div className="relative flex-1">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-14 w-full rounded-xl border border-white/10 bg-[#1E293B] pl-12 pr-5 text-white outline-none transition-all placeholder:text-gray-500 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30"
            />

          </div>

          {/* CATEGORY BUTTONS */}

          <div className="flex flex-wrap gap-2 lg:max-w-[560px] lg:justify-end">

            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleFilterChange(cat)}
                className={
                  selectedCategory === cat
                    ? "rounded-full border border-cyan-400/60 bg-cyan-500/15 px-5 py-3 text-sm font-medium text-cyan-400 shadow-lg shadow-cyan-500/10 transition-all duration-300"
                    : "rounded-full border border-white/10 bg-[#1E293B] px-5 py-3 text-sm font-medium text-gray-400 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
                }
              >
                {cat}
              </button>
            ))}

          </div>

        </div>

        {/* =====================================================
            NO RESULTS
        ===================================================== */}

        {filteredArticles.length === 0 ? (

          <div className="rounded-2xl border border-white/10 bg-[#1E293B]/70 py-20 text-center">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10">
              <FaSearch className="text-xl text-cyan-400" />
            </div>

            <p className="text-lg text-gray-400">
              No articles found matching your criteria.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 rounded-full border border-cyan-400/30 px-5 py-2 text-sm text-cyan-400 transition hover:bg-cyan-400/10"
            >
              Clear Filters
            </button>

          </div>

        ) : (

          <>

            {/* =================================================
                ARTICLES GRID
            ================================================= */}

            <motion.div
              key={`${selectedCategory}-${searchTerm}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >

              <AnimatePresence mode="popLayout">

                {visibleArticles.map((article) => (

                  <motion.article
                    key={article.id}
                    variants={itemVariants}
                    layout
                    whileHover={{
                      y: -6,
                    }}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-[#1E293B] transition-all duration-300 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10"
                  >

                    <Link
                      href={`/news/${article.id}`}
                      className="block h-full"
                    >

                      {/* =========================================
                          IMAGE
                      ========================================= */}

                      <div className="relative h-56 w-full overflow-hidden bg-[#172033]">

                        {article.image ? (

                          <img
                            src={article.image}
                            alt={
                              article.title ||
                              "News image"
                            }
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />

                        ) : (

                          <div className="flex h-full w-full items-center justify-center bg-[#172033]">
                            <span className="text-sm text-gray-500">
                              DiracQ Systems
                            </span>
                          </div>

                        )}

                        {/* IMAGE OVERLAY */}

                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/70 via-transparent to-transparent" />

                        {/* CATEGORY */}

                        {article.category && (

                          <div className="absolute left-4 top-4 rounded-lg border border-cyan-400/30 bg-[#0A0F1E]/70 px-3 py-1.5 backdrop-blur-md">

                            <span className="text-xs font-medium text-cyan-300">
                              {article.category}
                            </span>

                          </div>

                        )}

                      </div>

                      {/* =========================================
                          CARD CONTENT
                      ========================================= */}

                      <div className="flex min-h-[280px] flex-col p-6">

                        {/* DATE */}

                        <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">

                          <FaCalendarAlt className="text-xs text-cyan-400" />

                          <span>
                            {article.date || "Recent"}
                          </span>

                        </div>

                        {/* TITLE */}

                        <h3 className="mb-3 line-clamp-2 text-xl font-semibold leading-7 text-white transition-colors duration-300 group-hover:text-cyan-400">
                          {article.title}
                        </h3>

                        {/* CONTENT */}

                        <p className="line-clamp-3 text-sm leading-6 text-gray-400 transition-colors group-hover:text-gray-300">
                          {article.content ||
                            "Read the latest updates from DiracQ Systems."}
                        </p>

                        {/* FOOTER */}

                        <div className="mt-auto flex items-center justify-between pt-6">

                          <span className="text-xs text-gray-500">
                            {article.author ||
                              "DiracQ Team"}
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

            {/* =================================================
                LOAD MORE
            ================================================= */}

            {hasMore && (

              <div className="mt-12 flex justify-center">

                <motion.button
                  type="button"
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

            {/* =================================================
                COUNT
            ================================================= */}

            <div className="mt-6 text-center text-sm text-gray-500">
              Showing {visibleArticles.length} of{" "}
              {filteredArticles.length} articles
            </div>

          </>

        )}

      </div>

    </section>
  );
}