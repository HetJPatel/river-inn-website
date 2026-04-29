"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const STAYFLEXI_URL = "https://bookingengine.stayflexi.com/?hotel_id=36119";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Amenities", href: "#amenities" },
    { name: "Rooms", href: "#rooms" },
    { name: "Location", href: "#location" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/images/logo.png" 
              alt="River Inn Logo" 
              width={40} 
              height={40} 
              className="object-contain" 
            />
            <span className="text-2xl font-bold tracking-tighter text-slate-900">
              River Inn
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-brand-indigo text-slate-600"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={STAYFLEXI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-indigo hover:bg-brand-indigo-dark text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-md"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-slate-900" />
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-50 flex flex-col bg-white"
          >
            <div className="flex justify-between items-center p-4 sm:px-6 py-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <Image 
                  src="/images/logo.png" 
                  alt="River Inn Logo" 
                  width={32} 
                  height={32} 
                  className="object-contain" 
                />
                <span className="text-2xl font-bold tracking-tighter text-slate-900">
                  River Inn
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 text-slate-500 hover:text-slate-900"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-700 hover:text-brand-indigo transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-slate-100">
                <a
                  href={STAYFLEXI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center bg-brand-indigo hover:bg-brand-indigo-dark text-white px-6 py-4 rounded-xl font-medium transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
