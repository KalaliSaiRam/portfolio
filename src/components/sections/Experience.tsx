"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const experienceData = [
  {
    role: "B.Tech Computer Science (Data Science)",
    company: "B V Raju Institute of Technology",
    duration: "2023 - 2027",
    type: "Education",
    description: "Currently pursuing B.Tech with a CGPA of 8.57/10. Focused on Artificial Intelligence, Data Structures, and building scalable algorithms. Actively engaged in core computer science foundational concepts.",
    image: "/img/education.png"
  },
  {
    role: "Web Development Intern",
    company: "ApexPlanet Software Pvt. Ltd.",
    duration: "July 2025 - Aug 2025",
    type: "Internship",
    description: "Developed responsive web interfaces using HTML, CSS, and JS. Implemented interactive DOM components for enhanced user experience and delivered multiple front-end modules adhering to modern UI practices.",
    image: "/img/intern.png"
  },
  {
    role: "Research Publication: TriModel",
    company: "Under Review (SCI Q1, IF: 4.8)",
    duration: "2024 - Present",
    type: "Research & Development",
    description: "Authored 'An Explainable Transformer Architecture for Multi-Class Brain Tumour Classification from MRI Scans'. Proposed a hybrid CNN–Transformer achieving 99.54% accuracy. Incorporated explainable AI using Grad-CAM and Structured Explanation Cards (SEC).",
    image: "/img/research.png"
  }
];

export const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 relative w-full bg-[#0a0514]">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:flex justify-between items-end"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sora">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Experience</span>
            </h2>
            <p className="text-zinc-400 max-w-xl font-outfit">A timeline of my professional, educational, and competitive achievements.</p>
          </div>
        </motion.div>

        <div ref={ref} className="border-l border-white/5 md:ml-6 space-y-12 relative">
          {/* Animated Scroll Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-[-1.5px] top-0 w-[3px] h-full bg-gradient-to-b from-cyan-500 to-fuchsia-500 origin-top shadow-[0_0_20px_rgba(217,70,239,0.5)] z-10"
          />

          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-8 h-3 w-3 rounded-full bg-black border-[3px] border-cyan-400 z-20 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />


              <div className="aurora-card p-6 md:p-8 hover:border-cyan-400/30 transition-colors group flex flex-col md:flex-row gap-6 md:gap-8 items-start relative">
                {/* Premium 3D Image Icon */}
                <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white/[0.02] border border-white/10 p-2 shadow-inner shadow-fuchsia-500/10 flex items-center justify-center -mt-2 md:mt-0">
                  <img
                    src={item.image}
                    alt={item.role}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(217,70,239,0.3)] group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white font-sora group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-fuchsia-400 transition-all">{item.role}</h3>
                      <p className="text-fuchsia-400 font-medium font-outfit mt-1">{item.company}</p>
                    </div>
                    <span className="text-sm font-semibold text-cyan-200 bg-cyan-900/30 border border-cyan-500/20 px-3 py-1 rounded-full w-fit max-h-8 shrink-0">
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base font-outfit">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
