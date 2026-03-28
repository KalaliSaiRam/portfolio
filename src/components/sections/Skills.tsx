"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const skillsData = [
  {
    category: "Languages & Core",
    skills: ["Python", "Java", "C", "Data Structures", "Algorithms", "OOP", "DBMS"],
  },
  {
    category: "Frontend Development",
    skills: ["React.js", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Backend & Systems",
    skills: ["Node.js", "Express.js", "PostgreSQL", "MySQL", "MongoDB", "REST APIs", "Git", "Postman"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative w-full bg-black">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sora">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Expertise</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto font-outfit">
              A comprehensive breakdown of the technologies and frameworks I use to build scalable solutions.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: groupIdx * 0.15 }}
            >
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4 font-sora flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-gradient-to-r from-fuchsia-400 to-cyan-400"></span>
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3, delay: (groupIdx * 0.05) + (i * 0.03), type: "spring", stiffness: 400, damping: 17 }}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5 text-sm font-semibold text-zinc-300 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 hover:text-white transition-colors cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md font-outfit"
                    >
                      <CheckCircle2 size={14} className="text-fuchsia-500" />
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
