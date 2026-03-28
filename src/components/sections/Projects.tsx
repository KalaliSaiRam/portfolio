"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MoveUpRight, Code, X } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  fullDetails: string;
};

const projects: Project[] = [
  {
    id: "brain-tumor",
    title: "AI-Powered Brain Tumour MRI Analysis Platform",
    description: "Built a full-stack AI system for automated brain tumour classification from MRI scans using a hybrid CNN–Transformer model.",
    fullDetails: "Built a full-stack AI system for automated brain tumour classification from MRI scans using a hybrid CNN–Transformer model. Integrated real-time prediction with a React + FastAPI interface and added Grad-CAM for explainable visual outputs. Demonstrates strong expertise in deep learning and production-level AI deployment.",
    tech: ["Python", "PyTorch", "FastAPI", "React"],
    github: "https://github.com/KalaliSaiRam/Brain-Tumour-Platform",
    live: "https://github.com/KalaliSaiRam",
    image: "/img/project_brain.png",
  },
  {
    id: "quiz-gen",
    title: "Multimodal AI Quiz Generator",
    description: "Developed a multimodal AI application that generates MCQs from PDFs and images using OCR, NLP, and LLM-based reasoning.",
    fullDetails: "Developed a multimodal AI application that generates MCQs from PDFs and images using OCR, NLP, and LLM-based reasoning. Implemented a complete pipeline from text extraction to context-aware question generation with an interactive quiz interface. Highlights ability to combine multiple AI techniques into a practical system.",
    tech: ["FastAPI", "React", "OCR", "LLM"],
    github: "https://github.com/KalaliSaiRam/AI-Quiz-Generator",
    live: "https://github.com/KalaliSaiRam",
    image: "/img/project_quiz.png",
  },
  {
    id: "payroll",
    title: "Employee Payroll & Leave Management System",
    description: "Engineered a full-stack payroll and leave management system with JWT-based authentication and role-based access control.",
    fullDetails: "Engineered a full-stack payroll and leave management system with JWT-based authentication and role-based access control. Implemented leave workflows, quota validation, and automated payroll with LOP deduction. Showcases strong backend architecture and real-world business logic implementation.",
    tech: ["React.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/KalaliSaiRam/Payroll-Management",
    live: "https://github.com/KalaliSaiRam",
    image: "/img/project_payroll.png",
  },
  {
    id: "edulearning",
    title: "EduLearning Platform",
    description: "Developed EduLearning, a web-based platform for delivering and managing digital educational content with an interactive user interface.",
    fullDetails: "Developed EduLearning, a web-based platform for delivering and managing digital educational content with an interactive user interface. Implemented features for structured content access, user engagement, and dynamic content rendering using a responsive frontend and efficient backend integration. Focused on usability, smooth navigation, and performance to enhance the overall learning experience. Demonstrates the ability to build scalable, user-centric web applications for real-world educational use cases.",
    tech: ["React.js", "Node.js", "PostgreSQL"],
    github: "https://github.com/KalaliSaiRam/EduLearning",
    live: "https://github.com/KalaliSaiRam",
    image: "/img/project_edu.png",
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative w-full bg-black/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:flex justify-between items-end"
        >
          <div className="text-center mb-16 mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-sora">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">Works</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-outfit">
              A selection of my best projects in AI engineering and full stack development.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: idx * 0.1 }}
            >
              <TiltCard
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer aurora-card flex flex-col overflow-hidden h-full"
              >
              {/* Image Thumbnail Area */}
               <div className="h-48 w-full bg-[#111] border-b border-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"/>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>

              <div className="p-6 flex flex-col flex-1 relative z-20 bg-[#0a0514]/50">
                 <h3 className="text-xl font-bold text-white mb-2 font-sora group-hover:text-fuchsia-400 transition-colors line-clamp-1">
                   {project.title}
                 </h3>
                 <p className="text-zinc-400 text-sm mb-6 leading-relaxed font-outfit line-clamp-2">
                   {project.description}
                 </p>
   
                 <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                   {project.tech.map((t) => (
                     <span key={t} className="px-2 py-1 text-xs font-semibold text-cyan-200 bg-cyan-900/30 border border-cyan-500/20 rounded-md">
                       {t}
                     </span>
                   ))}
                 </div>
   
                 <div className="flex items-center gap-1 text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                   View Project <MoveUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-fuchsia-400" />
                 </div>
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] grid place-items-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              layoutId={selectedProject.id}
              onClick={(e) => e.stopPropagation()}
              className="aurora-card w-[95vw] max-w-5xl max-h-[90vh] relative flex flex-col overflow-hidden"
            >
              
              {/* Sticky Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-white/10 transition-colors border border-white/20 z-[60] text-white"
              >
                <X size={20} />
              </button>

              {/* Internal Scrollable Content Wrapper */}
              <div className="w-full overflow-y-auto overflow-x-hidden custom-scrollbar flex-1 pb-10">
                {/* Modal Banner Image */}
                <div className="w-full h-64 md:h-96 relative shrink-0">
                   <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#0a0514]/40 to-transparent pointer-events-none" />
                </div>

              <div className="p-6 md:p-8 -mt-12 relative z-10">
                <h2 className="text-3xl font-bold mb-4 font-sora">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-2 mb-6 border-b border-white/10 pb-6">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-sm font-semibold text-fuchsia-300 bg-fuchsia-500/20 rounded-lg border border-fuchsia-500/30">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-zinc-300 leading-relaxed mb-8 font-outfit text-lg">
                  {selectedProject.fullDetails}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                   <a 
                     href={selectedProject.live} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex-1 flex justify-center items-center gap-2 py-3.5 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold font-sora rounded-xl shadow-[0_4px_20px_rgba(217,70,239,0.4)] transition-colors"
                   >
                     Live Preview
                     <MoveUpRight size={18} className="translate-y-[1px]" />
                   </a>
                   <a 
                     href={selectedProject.github} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex-1 flex justify-center items-center gap-2 py-3.5 bg-zinc-800 border-2 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-500 transition-colors font-bold font-sora text-white rounded-xl"
                   >
                     <Code size={20} />
                     Source Code
                   </a>
                </div>
              </div>
              
              </div> {/* Close internal scrollable wrapper */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
