"use client";

import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check whether menu item is active
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  };

  // Desktop menu classes
  const navLinkClass = (path: string) => {
    return isActive(path)
      ? "relative text-[16px] xl:text-[18px] font-medium text-cyan-400"
      : "text-[16px] xl:text-[18px] font-medium text-white hover:text-cyan-400 transition duration-300";
  };

  // Mobile menu classes
  const mobileLinkClass = (path: string) => {
    return isActive(path)
      ? "text-cyan-400 font-medium"
      : "text-white hover:text-cyan-400 transition font-medium";
  };

  return (
    <header className="fixed top-0 left-0 w-full h-24 z-50">
      {/* Full Width Glass Background */}
      <div className="absolute inset-0 bg-[#08111f]/65 backdrop-blur-2xl border-b border-cyan-500/10" />

      <div className="relative max-w-7xl mx-auto h-full flex items-center justify-between px-6 lg:px-8">

        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link href="/" className="flex items-center shrink-0">
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

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 xl:gap-14">

            {/* HOME */}
            <li>
              <Link
                href="/"
                className={navLinkClass("/")}
              >
                Home

                {isActive("/") && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] rounded-full bg-cyan-400" />
                )}
              </Link>
            </li>

            {/* ABOUT */}
            <li>
              <Link
                href="/about"
                className={navLinkClass("/about")}
              >
                About

                {isActive("/about") && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] rounded-full bg-cyan-400" />
                )}
              </Link>
            </li>

            {/* =================================================
                PRODUCTS DROPDOWN
            ================================================= */}

            <li className="relative group">

              <button
                type="button"
                className={`flex items-center gap-2 ${
                  isActive("/products")
                    ? "text-cyan-400"
                    : "text-white hover:text-cyan-400"
                } text-[16px] xl:text-[18px] font-medium transition duration-300`}
              >
                Products

                <FaChevronDown
                  size={13}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>

              {/* Products Dropdown */}

              <div className="absolute top-10 left-0 w-64 rounded-2xl bg-[#111827]/95 backdrop-blur-xl border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">

                <Link
                  href="/products/analytics"
                  className="block px-6 py-4 text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition"
                >
                  Analytics Platform
                </Link>

                <Link
                  href="/products/dashboard"
                  className="block px-6 py-4 text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition"
                >
                  Dashboard
                </Link>

                <Link
                  href="/products/ai"
                  className="block px-6 py-4 text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition"
                >
                  AI Solutions
                </Link>

                <Link
                  href="/products/cloud"
                  className="block px-6 py-4 text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition"
                >
                  Cloud Services
                </Link>

              </div>

              {/* Products Active Underline */}

              {isActive("/products") && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] rounded-full bg-cyan-400" />
              )}

            </li>

            {/* NEWS */}
            <li>
              <Link
                href="/news"
                className={navLinkClass("/news")}
              >
                News

                {isActive("/news") && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] rounded-full bg-cyan-400" />
                )}
              </Link>
            </li>

            {/* RESEARCH */}
            <li>
              <Link
                href="/research"
                className={navLinkClass("/research")}
              >
                Research

                {isActive("/research") && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] rounded-full bg-cyan-400" />
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
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white text-2xl p-2 hover:text-cyan-400 transition z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        <div
          className={`lg:hidden fixed inset-0 top-24 bg-[#08111f]/95 backdrop-blur-xl transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }`}
        >
          <nav className="h-full flex items-center justify-center">

            <ul className="flex flex-col items-center gap-8 text-xl">

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

            </ul>

          </nav>
        </div>

      </div>
    </header>
  );
}