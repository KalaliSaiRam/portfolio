"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Convert form to mailto link for native functional operation
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    window.location.href = `mailto:23211a6745@gmail.com?subject=Portfolio Contact from ${name}&body=${message}%0D%0A%0D%0AReply to: ${email}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
      (e.target as HTMLFormElement).reset();
    }, 500);
  };

  return (
    <section id="contact" className="py-24 relative w-full pb-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="mb-16 md:text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sora">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">Touch</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto font-outfit">
            Whether you have a question, a project idea, or just want to say hi, my inbox is open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
           {/* Left Info Column */}
           <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 space-y-6"
           >
              {[
                { icon: <MapPin className="text-fuchsia-400" />, label: "Location", value: "Hyderabad, India" },
                { icon: <Mail className="text-fuchsia-400" />, label: "Email", value: "23211a6745@gmail.com" },
                { icon: <Phone className="text-fuchsia-400" />, label: "Phone", value: "+91 9963225803" }
              ].map((info) => (
                 <div key={info.label} className="aurora-card p-6 flex items-center gap-4 group">
                    <div className="p-4 bg-fuchsia-500/10 rounded-full border border-fuchsia-500/20 group-hover:scale-110 transition-transform duration-300">
                       {info.icon}
                    </div>
                    <div>
                       <p className="text-zinc-400 text-sm font-semibold uppercase tracking-wider mb-1 font-outfit">{info.label}</p>
                       <p className="text-white font-bold font-sora">{info.value}</p>
                    </div>
                 </div>
              ))}
           </motion.div>

           {/* Right Form Column */}
           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="md:col-span-3 aurora-card p-8 md:p-10"
           >
             <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-outfit text-sm text-zinc-300">
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="flex flex-col gap-2">
                      <label className="font-semibold ml-1">Name</label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-fuchsia-500 transition-colors placeholder-zinc-600"
                        placeholder="Your Name"
                      />
                   </div>
                   <div className="flex flex-col gap-2">
                      <label className="font-semibold ml-1">Email</label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-fuchsia-500 transition-colors placeholder-zinc-600"
                        placeholder="your.email@example.com"
                      />
                   </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-semibold ml-1">Message</label>
                  <textarea 
                    required
                    name="message"
                    rows={5}
                    className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-fuchsia-500 transition-colors resize-none placeholder-zinc-600"
                    placeholder="Hello Sai Ram, I would like to discuss..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="aurora-btn w-full py-4 text-white font-bold rounded-xl flex items-center justify-center gap-2 disabled:opacity-70 mt-4"
                >
                   {isSubmitting ? (
                     <span className="animate-pulse">Sending...</span>
                   ) : isSuccess ? (
                     <span>Message Sent! ✨</span>
                   ) : (
                     <>
                       Send Message <Send size={18} />
                     </>
                   )}
                </button>
             </form>
           </motion.div>
        </div>
      </div>
    </section>
  );
};
