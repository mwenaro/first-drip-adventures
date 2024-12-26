"use client"
import React, { useState, useEffect, useState as useClientState } from "react";
import { Link } from "react-scroll";
import { default as NextLink } from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { XCircleIcon } from "lucide-react";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [routerPath, setRouterPath] = useClientState("");

  useEffect(() => {
    // Ensure this only runs on the client side
    if (typeof window !== "undefined") {
      setRouterPath(window.location.pathname);
    }
  }, [setRouterPath]);

  return (
    <nav className="bg-blue-600 text-white fixed top-0 left-0 w-full z-10 shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <NextLink href="/" className="flex items-center">
          <Image
            width={100}
            height={100}
            src="/favicon/aburayyan-logo.png"
            alt="Logo"
            className="h-12 w-12 mr-2"
          />{" "}
          {/* Replace with your logo path */}
        </NextLink>

        {/* Mobile Menu Button */}
        <div className="ml-auto md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <XCircleIcon className="h-6 w-6 text-white" /> // Close icon
            ) : (
              <HamburgerMenuIcon className="h-6 w-6 text-white" /> // Hamburger menu icon
            )}
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 items-center w-full md:w-auto`}
        >
          {/* show normal nav */}
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 items-center">
            {routerPath.includes("/ict")
              ? [
                  "About",
                  "Program Details",
                  "Curriculum",
                  "Testimonials",
                  "Outcomes",
                  "FAQ",
                  "Register",
                ].map((section) => (
                  <li key={section}>
                    <Link
                      to={section.toLowerCase().replace(" ", "")}
                      smooth={true}
                      duration={500}
                      className="block cursor-pointer hover:underline"
                      onClick={() => setIsOpen(false)} // Close the menu when a link is clicked (for mobile)
                    >
                      {section}
                    </Link>
                  </li>
                ))
              : ["Home", "About", "Contact"].map((link: string, indx: number) => (
                  <li key={indx}>
                    <NextLink
                      href={`/${
                        link.includes("Home") ? "" : link.toLocaleLowerCase()
                      }`}
                    >
                      {link}
                    </NextLink>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
