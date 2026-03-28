"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star, Code, Target, ShieldCheck } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const certifications = [
  {
    title: "Salesforce Certified Agentforce Specialist",
    issuer: "Salesforce",
    date: "Dec 2025",
    icon: <ShieldCheck size={28} className="text-cyan-400" />
  },
  {
    title: "Data Structures and Algorithms using Java",
    issuer: "IIT Kharagpur",
    date: "Oct 2024",
    icon: <Award size={28} className="text-fuchsia-400" />
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    date: "Jul 2024",
    icon: <Trophy size={28} className="text-purple-400" />
  }
];

const stats = [
  {
    platform: "LeetCode",
    metric: "160+",
    label: "Problems Solved",
    rating: "Rating: 1634",
    icon: <Code size={24} className="text-[#FFA116]" />
  },
  {
    platform: "CodeChef",
    metric: "2-Star",
    label: "Competitor",
    rating: "Rating: 1411",
    icon: <Star size={24} className="text-[#5B4638]" />
  },
  {
    platform: "Codeforces",
    metric: "845",
    label: "Max Rating",
    rating: "Active Participant",
    icon: <Target size={24} className="text-[#1F8ACB]" />
  }
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative w-full bg-[#0a0514]/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:flex justify-between items-end text-center md:text-left"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-sora">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Achievements</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl text-lg font-outfit">
              A showcase of my formal technical certifications and competitive programming progression.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-16">

          {/* Certifications Row */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 font-sora flex items-center gap-3 justify-center md:justify-start">
              <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 15, delay: idx * 0.1 }}
                >
                  <TiltCard className="aurora-card p-6 h-full flex flex-col justify-between group">
                    <div>
                      <div className="w-14 h-14 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/[0.08] transition-all">
                        {cert.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white font-sora mb-2 group-hover:text-fuchsia-300 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-cyan-300 font-semibold font-outfit text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="mt-8 flex justify-end">
                      <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {cert.date}
                      </span>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Programming Stats Row */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 font-sora flex items-center gap-3 justify-center md:justify-start">
              <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-cyan-400" />
              Competitive Programming Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.platform}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 15, delay: idx * 0.1 + 0.3 }}
                >
                  <div className="aurora-card p-8 flex flex-col items-center text-center overflow-hidden group">
                    {/* Background Platform Accent */}
                    <div className="absolute -top-10 -right-10 opacity-10 blur-xl group-hover:opacity-20 transition-opacity scale-150">
                      {stat.icon}
                    </div>

                    <div className="relative z-10 w-full">
                      <div className="flex justify-center items-center gap-2 mb-2">
                        {stat.icon}
                        <span className="font-outfit font-bold text-lg text-zinc-200">
                          {stat.platform}
                        </span>
                      </div>

                      <h4 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 my-4 font-sora">
                        {stat.metric}
                      </h4>
                      <p className="text-fuchsia-400 font-semibold uppercase tracking-wider text-sm mb-1">
                        {stat.label}
                      </p>
                      <p className="text-cyan-200/80 text-xs font-outfit border-t border-white/10 pt-4 mt-6">
                        {stat.rating}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
