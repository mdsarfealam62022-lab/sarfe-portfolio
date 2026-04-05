import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2 } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certs = [
    { title: "AutoCAD Professional", issuer: "Autodesk", date: "2023" },
    { title: "NPTEL Certifications", issuer: "NPTEL", date: "2024" },
    { title: "Road & Highway Engineering", issuer: "Professional Body", date: "2024" },
    { title: "Cyber Security", issuer: "Cisco", date: "2023" }
  ];

  return (
    <section id="certifications" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Professional <span className="text-neon-purple">Certifications</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl tracking-wide">Validating expertise through industry-recognized credentials.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-neon-purple/30 transition-all group"
            >
              <div className="p-4 rounded-xl bg-neon-purple/10 w-fit mb-6 group-hover:bg-neon-purple/20 transition-colors">
                <Award className="w-8 h-8 text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">{cert.title}</h3>
              <div className="flex items-center justify-between text-sm text-slate-500 font-medium uppercase tracking-widest mt-4">
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
