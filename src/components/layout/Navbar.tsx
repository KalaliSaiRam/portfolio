"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";
import clsx from "clsx";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Honors", href: "#achievements" },
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
    <>
      {/* Desktop / Core Navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 inset-x-4 md:inset-x-0 md:top-6 z-50 flex justify-center pointer-events-none"
      >
        <div 
          className={clsx(
            "pointer-events-auto flex items-center justify-between w-full md:w-auto px-6 py-3 rounded-full backdrop-blur-2xl border transition-all duration-500",
            isScrolled 
              ? "bg-[#0a0514]/80 border-white/10 shadow-[0_10px_30px_rgba(217,70,239,0.15)]" 
              : "bg-[#0a0514]/40 border-white/5"
          )}
        >
          {/* Logo */}
          <Link href="#hero" className="text-xl md:text-2xl font-sora font-extrabold tracking-tighter cursor-pointer mr-8">
            <span className="text-white">KSR</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">.</span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Magnetic key={item.name} strength={15}>
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-semibold text-zinc-300 hover:text-white transition-colors relative group block font-outfit"
                >
                  {item.name}
                  {/* Hover Glow Underline */}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-fuchsia-400 to-cyan-400 transition-all duration-300 group-hover:w-1/2 opacity-0 group-hover:opacity-100 rounded-full" />
                </Link>
              </Magnetic>
            ))}
            
            {/* Desktop Resume Button */}
            <div className="ml-4 pl-4 border-l border-white/10">
              <Magnetic strength={20}>
                <a
                  href="/Resume.pdf"
                  download="Kalali_Sai_Ram_Goud_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 text-sm font-bold text-white border border-fuchsia-500/30 rounded-full hover:bg-fuchsia-500/20 hover:border-fuchsia-400 transition-all shadow-[0_0_15px_rgba(217,70,239,0.1)] group font-sora"
                >
                  Resume
                  <Download size={14} className="group-hover:translate-y-0.5 transition-transform text-fuchsia-300" />
                </a>
              </Magnetic>
            </div>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden flex items-center justify-center p-2 text-zinc-300 hover:text-white transition-colors bg-white/5 rounded-full border border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} className="text-fuchsia-400" /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-[#0a0514]/90 md:hidden flex flex-col justify-center items-center h-screen w-screen"
          >
            <nav className="flex flex-col items-center gap-6 w-full px-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-bold font-sora text-zinc-400 hover:text-white transition-colors block text-center"
                  >
                     {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-8 pt-8 border-t border-white/10 w-full flex justify-center"
              >
                <a
                  href="/Resume.pdf"
                  download="Kalali_Sai_Ram_Goud_Resume.pdf"
                  className="aurora-btn flex items-center justify-center gap-3 w-full max-w-xs py-4 rounded-xl text-lg font-bold font-sora text-white shadow-[0_4px_30px_rgba(217,70,239,0.3)]"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
