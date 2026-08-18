"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // =========================================================
  // ACTIVE ROUTE CHECK
  // =========================================================
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  };

  // =========================================================
  // CLOSE MOBILE MENU WHEN ROUTE CHANGES
  // =========================================================
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // =========================================================
  // LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  // =========================================================
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // =========================================================
  // DESKTOP LINK CLASS
  // =========================================================
  const navLinkClass = (path: string) => `
    relative
    text-[16px]
    xl:text-[18px]
    font-medium
    transition-colors
    duration-300
    ${
      isActive(path)
        ? "text-cyan-400"
        : "text-white hover:text-cyan-400"
    }
  `;

  // =========================================================
  // MOBILE LINK CLASS
  // =========================================================
  const mobileLinkClass = (path: string) => `
    relative
    font-medium
    transition-colors
    duration-300
    ${
      isActive(path)
        ? "text-cyan-400"
        : "text-white hover:text-cyan-400"
    }
  `;

  return (
    <header className="fixed top-0 left-0 w-full h-24 z-[9999]">

      {/* =====================================================
          HEADER BACKGROUND
      ===================================================== */}
      <div
        className="
          absolute
          inset-0
          z-0
          bg-[#08111f]/95
          backdrop-blur-2xl
          border-b
          border-cyan-500/10
        "
      />

      {/* =====================================================
          HEADER CONTENT
      ===================================================== */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          h-full
          flex
          items-center
          justify-between
          px-6
          lg:px-8
        "
      >

        {/* =====================================================
            LOGO
        ===================================================== */}
        <Link
          href="/"
          className="relative z-20 flex items-center shrink-0"
          aria-label="DiracQ Home"
        >
          <Image
            src="/logo/d57cc0_adc62980ca7644c9a5291d88ee7bbb2a~mv2.png"
            alt="DiracQ"
            width={150}
            height={65}
            priority
            className="w-auto h-auto"
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}
        <nav className="relative z-20 hidden lg:block">
          <ul className="flex items-center gap-8 xl:gap-14">

            {/* ================= HOME ================= */}
            <li>
              <Link
                href="/"
                className={navLinkClass("/")}
                aria-current={isActive("/") ? "page" : undefined}
              >
                Home

                {isActive("/") && (
                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      w-full
                      h-[2px]
                      rounded-full
                      bg-cyan-400
                    "
                  />
                )}
              </Link>
            </li>

            {/* ================= ABOUT ================= */}
            <li>
              <Link
                href="/about"
                className={navLinkClass("/about")}
                aria-current={isActive("/about") ? "page" : undefined}
              >
                About

                {isActive("/about") && (
                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      w-full
                      h-[2px]
                      rounded-full
                      bg-cyan-400
                    "
                  />
                )}
              </Link>
            </li>

            {/* =================================================
                PRODUCTS DROPDOWN
            ================================================= */}
            <li className="relative group">

              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={isActive("/products")}
                className={`
                  relative
                  flex
                  items-center
                  gap-2
                  text-[16px]
                  xl:text-[18px]
                  font-medium
                  transition-colors
                  duration-300
                  ${
                    isActive("/products")
                      ? "text-cyan-400"
                      : "text-white hover:text-cyan-400"
                  }
                `}
              >
                Products

                <FaChevronDown
                  size={13}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-180
                  "
                />

                {isActive("/products") && (
                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      w-full
                      h-[2px]
                      rounded-full
                      bg-cyan-400
                    "
                  />
                )}
              </button>

              {/* ================= DROPDOWN ================= */}
              <div
                className="
                  absolute
                  top-10
                  left-0
                  z-[10000]
                  w-64
                  rounded-2xl
                  bg-[#111827]
                  backdrop-blur-xl
                  border
                  border-white/10
                  shadow-2xl
                  opacity-0
                  invisible
                  translate-y-2
                  group-hover:opacity-100
                  group-hover:visible
                  group-hover:translate-y-0
                  transition-all
                  duration-300
                  overflow-hidden
                "
              >
                <Link
                  href="/products/analytics"
                  className={`
                    block
                    px-6
                    py-4
                    transition-colors
                    duration-200
                    ${
                      isActive("/products/analytics")
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-white hover:bg-cyan-500/10 hover:text-cyan-400"
                    }
                  `}
                >
                  Analytics Platform
                </Link>

                <Link
                  href="/products/dashboard"
                  className={`
                    block
                    px-6
                    py-4
                    transition-colors
                    duration-200
                    ${
                      isActive("/products/dashboard")
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-white hover:bg-cyan-500/10 hover:text-cyan-400"
                    }
                  `}
                >
                  Dashboard
                </Link>

                <Link
                  href="/products/ai"
                  className={`
                    block
                    px-6
                    py-4
                    transition-colors
                    duration-200
                    ${
                      isActive("/products/ai")
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-white hover:bg-cyan-500/10 hover:text-cyan-400"
                    }
                  `}
                >
                  AI Solutions
                </Link>

                <Link
                  href="/products/cloud"
                  className={`
                    block
                    px-6
                    py-4
                    transition-colors
                    duration-200
                    ${
                      isActive("/products/cloud")
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-white hover:bg-cyan-500/10 hover:text-cyan-400"
                    }
                  `}
                >
                  Cloud Services
                </Link>
              </div>
            </li>

            {/* ================= NEWS ================= */}
            <li>
              <Link
                href="/news"
                className={navLinkClass("/news")}
                aria-current={isActive("/news") ? "page" : undefined}
              >
                News

                {isActive("/news") && (
                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      w-full
                      h-[2px]
                      rounded-full
                      bg-cyan-400
                    "
                  />
                )}
              </Link>
            </li>

            {/* ================= RESEARCH ================= */}
            <li>
              <Link
                href="/research"
                className={navLinkClass("/research")}
                aria-current={isActive("/research") ? "page" : undefined}
              >
                Research

                {isActive("/research") && (
                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      w-full
                      h-[2px]
                      rounded-full
                      bg-cyan-400
                    "
                  />
                )}
              </Link>
            </li>

          </ul>
        </nav>

        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="
            relative
            z-30
            lg:hidden
            text-white
            text-2xl
            p-2
            rounded-lg
            hover:text-cyan-400
            hover:bg-white/5
            transition-all
            duration-300
          "
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}
        <div
          id="mobile-navigation"
          className={`
            lg:hidden
            fixed
            inset-0
            top-24
            z-[9998]
            bg-[#08111f]
            backdrop-blur-2xl
            transition-all
            duration-300
            ${
              isMenuOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }
          `}
        >
          <nav className="h-full flex items-start justify-center pt-16">
            <ul className="flex flex-col items-center gap-8 text-xl">

              {/* HOME */}
              <li>
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileLinkClass("/")}
                  aria-current={isActive("/") ? "page" : undefined}
                >
                  Home

                  {isActive("/") && (
                    <span
                      className="
                        absolute
                        -bottom-2
                        left-0
                        w-full
                        h-[2px]
                        rounded-full
                        bg-cyan-400
                      "
                    />
                  )}
                </Link>
              </li>

              {/* ABOUT */}
              <li>
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileLinkClass("/about")}
                  aria-current={isActive("/about") ? "page" : undefined}
                >
                  About

                  {isActive("/about") && (
                    <span
                      className="
                        absolute
                        -bottom-2
                        left-0
                        w-full
                        h-[2px]
                        rounded-full
                        bg-cyan-400
                      "
                    />
                  )}
                </Link>
              </li>

              {/* PRODUCTS */}
              <li>
                <Link
                  href="/products"
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileLinkClass("/products")}
                  aria-current={isActive("/products") ? "page" : undefined}
                >
                  Products

                  {isActive("/products") && (
                    <span
                      className="
                        absolute
                        -bottom-2
                        left-0
                        w-full
                        h-[2px]
                        rounded-full
                        bg-cyan-400
                      "
                    />
                  )}
                </Link>
              </li>

              {/* NEWS */}
              <li>
                <Link
                  href="/news"
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileLinkClass("/news")}
                  aria-current={isActive("/news") ? "page" : undefined}
                >
                  News

                  {isActive("/news") && (
                    <span
                      className="
                        absolute
                        -bottom-2
                        left-0
                        w-full
                        h-[2px]
                        rounded-full
                        bg-cyan-400
                      "
                    />
                  )}
                </Link>
              </li>

              {/* RESEARCH */}
              <li>
                <Link
                  href="/research"
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileLinkClass("/research")}
                  aria-current={isActive("/research") ? "page" : undefined}
                >
                  Research

                  {isActive("/research") && (
                    <span
                      className="
                        absolute
                        -bottom-2
                        left-0
                        w-full
                        h-[2px]
                        rounded-full
                        bg-cyan-400
                      "
                    />
                  )}
                </Link>
              </li>

            </ul>
          </nav>
        </div>

      </div>
    </header>
  );
}