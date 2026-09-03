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
  // ACTIVE ROUTE
  // =========================================================
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  };

  // =========================================================
  // CLOSE MOBILE MENU ON ROUTE CHANGE
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
  // DESKTOP NAV LINK
  // =========================================================
  const navLinkClass = (path: string) => `
    relative
    text-[16px]
    xl:text-[18px]
    font-medium
    whitespace-nowrap
    transition-colors
    duration-300
    ${
      isActive(path)
        ? "text-cyan-400"
        : "text-white hover:text-cyan-400"
    }
  `;

  // =========================================================
  // MOBILE NAV LINK
  // =========================================================
  const mobileLinkClass = (path: string) => `
    relative
    text-lg
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
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        h-24
        z-[9999]
      "
    >
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
          MAIN HEADER CONTAINER
      ===================================================== */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-[1400px]
          h-full
          mx-auto
          px-6
          lg:px-8
          flex
          items-center
          justify-between
        "
      >
        {/* ===================================================
            LOGO
        =================================================== */}
        <Link
          href="/"
          className="
            relative
            z-20
            flex
            items-center
            shrink-0
          "
          aria-label="DiracQ Home"
        >
          <Image
            src="/logo/d57cc0_adc62980ca7644c9a5291d88ee7bbb2a~mv2.png"
            alt="DiracQ Systems"
            width={150}
            height={65}
            priority
            className="w-auto h-auto"
          />
        </Link>

        {/* ===================================================
            DESKTOP NAVIGATION
        =================================================== */}
        <nav className="relative z-20 hidden lg:block">
          <ul
            className="
              flex
              items-center
              gap-7
              xl:gap-10
            "
          >
            {/* =================================================
                HOME
            ================================================= */}
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
                      left-0
                      -bottom-2
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
                ABOUT
            ================================================= */}
            <li>
              <Link
                href="/about"
                className={navLinkClass("/about")}
                aria-current={
                  isActive("/about") ? "page" : undefined
                }
              >
                About

                {isActive("/about") && (
                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
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
                className={`
                  relative
                  flex
                  items-center
                  gap-2
                  text-[16px]
                  xl:text-[18px]
                  font-medium
                  whitespace-nowrap
                  transition-colors
                  duration-300
                  ${
                    isActive("/products")
                      ? "text-cyan-400"
                      : "text-white hover:text-cyan-400"
                  }
                `}
                aria-haspopup="true"
                aria-expanded={isActive("/products")}
              >
                Products

                <FaChevronDown
                  size={12}
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
                      left-0
                      -bottom-2
                      w-full
                      h-[2px]
                      rounded-full
                      bg-cyan-400
                    "
                  />
                )}
              </button>

              {/* =================================================
                  PRODUCTS DROPDOWN MENU
              ================================================= */}
              <div
                className="
                  absolute
                  top-[calc(100%+18px)]
                  left-1/2
                  -translate-x-1/2
                  w-[200px]
                  rounded-xl
                  bg-[#111827]/98
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
                  z-[10000]
                "
              >
                {/* SPAD */}
                <Link
                  href="/products/spad-modules"
                  className="
                    block
                    px-5
                    py-3.5
                    text-[16px]
                    font-medium
                    text-white
                    hover:bg-cyan-500/10
                    hover:text-cyan-400
                    transition-colors
                  "
                >
                  SPAD Modules
                </Link>

                {/* InGaAs */}
                <Link
                  href="/products/ingaas-detectors"
                  className="
                    block
                    px-5
                    py-3.5
                    text-[16px]
                    font-medium
                    text-white
                    hover:bg-cyan-500/10
                    hover:text-cyan-400
                    transition-colors
                  "
                >
                  InGaAs Detectors
                </Link>

                {/* SNSPD */}
                <Link
                  href="/products/snspd-systems"
                  className="
                    block
                    px-5
                    py-3.5
                    text-[16px]
                    font-medium
                    text-white
                    hover:bg-cyan-500/10
                    hover:text-cyan-400
                    transition-colors
                  "
                >
                  SNSPD Systems
                </Link>

                {/* Tunable Lasers */}
                <Link
                  href="/products/tunable-lasers"
                  className="
                    block
                    px-5
                    py-3.5
                    text-[16px]
                    font-medium
                    text-white
                    hover:bg-cyan-500/10
                    hover:text-cyan-400
                    transition-colors
                  "
                >
                  Tunable Lasers
                </Link>
              </div>
            </li>

            {/* =================================================
                NEWS
            ================================================= */}
            <li>
              <Link
                href="/news"
                className={navLinkClass("/news")}
                aria-current={
                  isActive("/news") ? "page" : undefined
                }
              >
                News

                {isActive("/news") && (
                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
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
                RESEARCH
            ================================================= */}
            <li>
              <Link
                href="/research"
                className={navLinkClass("/research")}
                aria-current={
                  isActive("/research") ? "page" : undefined
                }
              >
                Research

                {isActive("/research") && (
                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
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
                CONTACT (Direct Link, No Dropdown)
            ================================================= */}
            <li>
              <Link
                href="/contact"
                className={navLinkClass("/contact")}
                aria-current={
                  isActive("/contact") ? "page" : undefined
                }
              >
                Contact

                {isActive("/contact") && (
                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
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
            p-2
            text-2xl
            text-white
            rounded-lg
            hover:text-cyan-400
            hover:bg-white/5
            transition-all
            duration-300
          "
          aria-label={
            isMenuOpen ? "Close navigation" : "Open navigation"
          }
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
            top-24
            left-0
            right-0
            bottom-0
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
          <nav className="flex justify-center pt-16">
            <ul
              className="
                flex
                flex-col
                items-center
                gap-8
              "
            >
              {/* HOME */}
              <li>
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileLinkClass("/")}
                >
                  Home
                </Link>
              </li>

              {/* ABOUT */}
              <li>
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileLinkClass("/about")}
                >
                  About
                </Link>
              </li>

              {/* PRODUCTS */}
              <li>
                <Link
                  href="/products"
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileLinkClass("/products")}
                >
                  Products
                </Link>
              </li>

              {/* NEWS */}
              <li>
                <Link
                  href="/news"
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileLinkClass("/news")}
                >
                  News
                </Link>
              </li>

              {/* RESEARCH */}
              <li>
                <Link
                  href="/research"
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileLinkClass("/research")}
                >
                  Research
                </Link>
              </li>

              {/* CONTACT */}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileLinkClass("/contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}