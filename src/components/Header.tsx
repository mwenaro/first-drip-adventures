"use client";

import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-blue-400"
        >
          First Drip Adventures
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400">
            About
          </Link>
          <Link href="/tours" className="hover:text-blue-400">
            Tours
          </Link>
          <Link href="/blog" className="hover:text-blue-400">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </nav>

        {/* Call-to-Action Button */}
        <Link
          href="/book"
          className="hidden md:inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => toggleMobileMenu()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobileMenu" className="hidden bg-blue-800 text-white">
        <nav className="flex flex-col space-y-4 py-4 px-6">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400">
            About
          </Link>
          <Link href="/tours" className="hover:text-blue-400">
            Tours
          </Link>
          <Link href="/blog" className="hover:text-blue-400">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-400">
            Contact
          </Link>
          <Link
            href="/book"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

// Mobile Menu Toggle Logic
const toggleMobileMenu = () => {
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
};
