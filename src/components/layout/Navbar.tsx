"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { Magnetic } from "@/components/ui/Magnetic";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 font-sora",
        isScrolled ? "bg-[#0a0514]/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-lg shadow-fuchsia-900/10" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-2xl font-montserrat font-bold tracking-tighter hover:text-blue-500 transition-colors cursor-pointer">
          KSR<span className="text-blue-600">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Magnetic key={item.name} strength={15}>
              <Link
                href={item.href}
                className="px-4 py-2 text-sm font-bold text-zinc-400 hover:text-white transition-colors relative group block"
              >
                {item.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-fuchsia-400 to-cyan-400 transition-all duration-300 group-hover:w-1/2"></span>
              </Link>
            </Magnetic>
          ))}
          <div className="ml-4">
            <Magnetic strength={25}>
              <a
                href="/Resume.pdf"
                download="Kalali_Sai_Ram_Goud_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-5 py-2 text-sm font-bold text-white border border-fuchsia-500/50 rounded-full hover:bg-fuchsia-500/20 transition-colors shadow-[0_0_15px_rgba(217,70,239,0.2)]"
              >
                Resume
              </a>
            </Magnetic>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-zinc-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#0a0514]/95 backdrop-blur-2xl border-b border-white/5"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-zinc-400 hover:text-fuchsia-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/Resume.pdf"
                download="Kalali_Sai_Ram_Goud_Resume.pdf"
                className="mt-4 inline-block w-max px-6 py-2.5 text-sm font-bold text-white aurora-btn"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
