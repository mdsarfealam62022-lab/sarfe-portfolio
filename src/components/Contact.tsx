import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/sarfe-alam-92a213300/", color: "hover:text-blue-400" },
    { name: "GitHub", icon: <Github className="w-6 h-6" />, href: "https://github.com/mdsarfealam62022-lab", color: "hover:text-white" },
    { name: "Email", icon: <Mail className="w-6 h-6" />, href: "mailto:bhawanipurmauje@gmail.com", color: "hover:text-neon-cyan" }
  ];

  return (
    <footer id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
              Let's Build the <span className="text-neon-cyan">Future</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-xl mb-12 leading-relaxed tracking-wide">
              Open for collaborations, research opportunities, and discussions on the intersection of AI and Civil Engineering.
            </p>

            <div className="flex flex-col gap-6">
              <a
                href="mailto:mdsarfe7970@gmail.com"
                className="group flex items-center gap-6 p-6 glass rounded-2xl border border-white/5 hover:border-neon-cyan/30 transition-all w-fit"
              >
                <div className="p-4 rounded-xl bg-neon-cyan/10 group-hover:bg-neon-cyan/20 transition-colors">
                  <Mail className="w-8 h-8 text-neon-cyan" />
                </div>
                <div>
                  <span className="text-sm text-slate-500 uppercase tracking-widest block mb-1">Email Me</span>
                  <span className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">Bhawanipurmauje@gmail.com</span>
                </div>
                <ArrowUpRight className="w-6 h-6 text-slate-700 group-hover:text-neon-cyan transition-all" />
              </a>

              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={link.href}
                    target="_blank"
                    className={`p-5 rounded-2xl glass border border-white/5 transition-all text-slate-400 ${link.color}`}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Quick Contact Form (Visual) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-10 rounded-3xl border border-white/10 relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-10 blur-xl rounded-3xl -z-10" />

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Name</label>
                  <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl bg-slate-900/50 border border-white/5 focus:border-neon-cyan/50 focus:outline-none transition-all text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email</label>
                  <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl bg-slate-900/50 border border-white/5 focus:border-neon-cyan/50 focus:outline-none transition-all text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                <textarea rows={4} placeholder="How can we collaborate?" className="w-full p-4 rounded-xl bg-slate-900/50 border border-white/5 focus:border-neon-cyan/50 focus:outline-none transition-all text-white resize-none" />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-neon-cyan text-slate-950 font-bold rounded-xl shadow-lg shadow-neon-cyan/20 flex items-center justify-center gap-3 group"
              >
                Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-2xl font-bold tracking-tighter">Sarfe <span className="text-neon-cyan">Alam</span></span>
          <p className="text-slate-500 text-sm tracking-widest uppercase">© 2026 All Rights Reserved</p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-neon-cyan transition-colors">Privacy</a>
            <a href="#" className="hover:text-neon-cyan transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
