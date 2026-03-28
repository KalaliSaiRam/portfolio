"use client";

import { Code, Briefcase, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 relative z-10 bg-[#0a0514]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold font-sora tracking-tighter cursor-pointer text-white">
            KSR<span className="text-fuchsia-500">.</span>
          </h3>
          <p className="text-zinc-400 text-sm mt-2 font-outfit font-medium">
            Building Intelligent Systems & Scalable Web Apps
          </p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/KalaliSaiRam" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white hover:scale-110 transition-all duration-300">
            <Code size={22} />
          </a>
          <a href="https://linkedin.com/in/kalalisairamgoud" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#0A66C2] hover:scale-110 transition-all duration-300">
            <Briefcase size={22} />
          </a>
          <a href="mailto:23211a6745@gmail.com" className="text-zinc-500 hover:text-fuchsia-500 hover:scale-110 transition-all duration-300">
            <Mail size={22} />
          </a>
        </div>
      </div>
      <div className="text-center text-zinc-600 text-xs mt-12 font-outfit">
        <p>&copy; {new Date().getFullYear()} Kalali Sai Ram Goud. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
