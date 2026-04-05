import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Zap, Shield, Recycle } from 'lucide-react';

export const Vision: React.FC = () => {
  const visions = [
    {
      icon: <Zap className="w-8 h-8 text-neon-cyan" />,
      title: "AI in Construction",
      desc: "Revolutionizing site safety and progress monitoring through computer vision and autonomous drones."
    },
    {
      icon: <Shield className="w-8 h-8 text-neon-purple" />,
      title: "Smart Cities",
      desc: "Designing resilient urban environments that adapt to real-time data and environmental changes."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-neon-blue" />,
      title: "Autonomous Monitoring",
      desc: "Implementing predictive maintenance for bridges and tunnels using IoT and ML-driven structural health monitoring."
    },
    {
      icon: <Recycle className="w-8 h-8 text-emerald-400" />,
      title: "Sustainable Infrastructure",
      desc: "Optimizing material usage and carbon footprint through generative design and AI-powered lifecycle analysis."
    }
  ];

  return (
    <section id="vision" className="py-32 px-6 relative overflow-hidden bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Future <span className="text-neon-cyan">Vision</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto tracking-wide">My roadmap for the next decade of intelligent engineering.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visions.map((vision, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-10 rounded-3xl border border-white/5 hover:border-neon-cyan/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-neon-cyan/5 blur-3xl rounded-full group-hover:bg-neon-cyan/10 transition-all" />
              
              <div className="flex flex-col gap-6 relative z-10">
                <div className="p-4 rounded-2xl bg-slate-900 group-hover:bg-neon-cyan/10 transition-colors w-fit">
                  {vision.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{vision.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">{vision.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
