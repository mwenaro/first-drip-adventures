"use client"

import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">First Drip Adventures</h1>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/booking">Book Now</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};


