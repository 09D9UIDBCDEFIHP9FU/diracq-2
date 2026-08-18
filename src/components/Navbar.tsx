// src/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-24 z-50">
      {/* Full Width Glass Background */}
      <div className="absolute inset-0 bg-[#08111f]/65 backdrop-blur-2xl border-b border-cyan-500/10" />

      <div className="relative max-w-7xl mx-auto h-full flex items-center justify-between px-6 lg:px-8">
        {/* Logo - Fixed path: use a relative URL from the public folder */}
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

        {/* Desktop Navigation - unchanged */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 xl:gap-14">
            <li>
              <Link
                href="/"
                className="text-[16px] xl:text-[18px] font-medium text-white hover:text-cyan-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[16px] xl:text-[18px] font-medium text-white hover:text-cyan-400 transition duration-300"
              >
                About
              </Link>
            </li>
            {/* Products Dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-2 text-[16px] xl:text-[18px] font-medium text-white hover:text-cyan-400 transition duration-300">
                Products
                <FaChevronDown
                  size={13}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>
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
            </li>
            <li>
              <Link
                href="/news"
                className="relative text-[16px] xl:text-[18px] font-medium text-cyan-400"
              >
                News
                <span className="absolute -bottom-2 left-0 w-full h-[2px] rounded-full bg-cyan-400"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/research"
                className="text-[16px] xl:text-[18px] font-medium text-white hover:text-cyan-400 transition duration-300"
              >
                Research
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white text-2xl p-2 hover:text-cyan-400 transition z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 top-24 bg-[#08111f]/95 backdrop-blur-xl transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="h-full flex items-center justify-center">
            <ul className="flex flex-col items-center gap-8 text-xl">
              <li>
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-cyan-400 transition font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-cyan-400 transition font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/products/analytics"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-cyan-400 transition font-medium"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-cyan-400 font-medium"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-cyan-400 transition font-medium"
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