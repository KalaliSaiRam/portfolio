"use client";

import { motion } from "framer-motion";
import { Brain, Code, Server } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export const About = () => {
  return (
    <section id="about" className="py-24 relative w-full border-t border-white/5 bg-black/50">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:flex justify-between items-end"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-sora">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">Journey</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-outfit">
              I am a B.Tech Computer Science and Engineering (Data Science) student at B V Raju Institute of Technology, Narsapur, Telangana, India. I focus on building real-world applications at the intersection of Artificial Intelligence and Full Stack Development.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Brain className="text-indigo-400 mb-4" size={32} />,
              title: "AI & ML",
              desc: "Engineering custom CNN-Transformer architectures, visual localization (GradCAM), and orchestrating multimodal LLM agents."
            },
            {
              icon: <Code className="text-blue-400 mb-4" size={32} />,
              title: "Frontend",
              desc: "Building highly responsive, animated, and state-driven monolithic UI experiences using React, Next.js, and Tailwind."
            },
            {
              icon: <Server className="text-cyan-400 mb-4" size={32} />,
              title: "Backend",
              desc: "Structuring clean JWT-based secure auth flows and rapid data persistence layers over PostgreSQL and Express.js APIs."
            }
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: idx * 0.1 }}
            >
              <TiltCard className="aurora-card p-8 flex flex-col items-start text-left h-full">
                <div className="text-fuchsia-400 mb-2">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-sora mt-2">{card.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm font-outfit">
                  {card.desc}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
