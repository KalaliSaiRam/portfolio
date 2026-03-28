"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full flex items-center justify-center pt-24 overflow-visible">

      {/* Centered large aurora glow aura for background fallback */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-600/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center z-10">

        {/* Left: Text Area */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 w-fit">
            <span className="text-sm font-semibold text-fuchsia-400 tracking-wide uppercase">B.Tech CSE (Data Science)</span>
          </div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] font-sora"
          >
            {"Hi, I'm ".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, rotateX: -90 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", damping: 12, stiffness: 200 } }
                }}
                className="inline-block origin-bottom"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br />
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.8 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", damping: 10, stiffness: 100 } }
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 inline-block mt-2"
            >
              Kalali Sai Ram Goud
            </motion.span>
          </motion.h1>

          <p className="text-zinc-400 text-lg md:text-xl font-medium">
            AI-Focused Full Stack Developer
          </p>

          <p className="text-zinc-500 max-w-lg leading-relaxed text-base">
            I build intelligent, data-driven systems and scalable web applications, focusing on deploying research-grade AI models into real-world, user-centric products. Passionate about combining deep learning, backend engineering, and intuitive interfaces to deliver impactful solutions.
          </p>

          <div className="flex flex-wrap gap-6 mt-6">
            <Magnetic strength={40}>
              <a href="#projects" className="aurora-btn group flex items-center gap-2 px-8 py-3.5">
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Magnetic>
            <Magnetic strength={20}>
              <a href="/Resume.pdf" download="Kalali_Sai_Ram_Goud_Resume.pdf" className="group flex items-center gap-2 px-8 py-3.5 border border-white/20 hover:border-fuchsia-500/50 text-white font-semibold rounded-full bg-white/5 hover:bg-fuchsia-500/10 transition-colors active:scale-95 relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Resume <ExternalLink size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* Right: Circular Floating Avatar Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.2, type: "spring", bounce: 0.4 }}
          className="relative flex justify-center items-center h-full pt-12 md:pt-0 perspective-1000"
        >
          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full p-2 animate-float">
            {/* Dynamic rotating glowing ring */}
            <div className="absolute inset-0 rounded-full border border-fuchsia-500/30 shadow-[0_0_80px_rgba(217,70,239,0.3)] bg-gradient-to-tr from-cyan-600/10 via-fuchsia-600/10 to-transparent backdrop-blur-md" />

            {/* Deep inner container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-[#0a0a0a] bg-[#111]">
              <Image
                src="/pic.jpeg"
                alt="Kalali Sai Ram Goud"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
