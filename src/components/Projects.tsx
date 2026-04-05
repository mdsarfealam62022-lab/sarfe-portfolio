import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Brain,
  Building2,
  BarChart3
} from "lucide-react";

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Geopolymer Concrete Strength Predictor",
      tag: "Machine Learning",
      desc: "High-precision ML model (~97% accuracy) predicting compressive strength of geopolymer concrete for optimized structural design.",
      tech: ["Python", "FastAPI", "XGBoost"],
      icon: <Brain className="w-16 h-16 text-neon-cyan" />,
      github: "https://github.com/mdsarfealam62022-lab/Geopolymer-ML-Predictor",
      demo: "https://geopolymer-ml-predictor.onrender.com",
      featured: true
    },
    {
      title: "GeoFound_Pro",
      tag: "Engineering Tool",
      desc: "Advanced foundation engineering calculator for real-world structural analysis and geotechnical computations.",
      tech: ["Flutter", "Dart", "Riverpod"],
      icon: <Building2 className="w-16 h-16 text-neon-purple" />,
      github: "https://github.com/mdsarfealam62022-lab/GeoFound_Pro",
      demo: "",
      featured: false
    },
    {
      title: "Pile Foundation ML",
      tag: "Ongoing..",
      desc: "AI-driven optimization of pile foundation design considering soil variability and structural loads.",
      tech: ["Python", "ML", "Geotech"],
      icon: <BarChart3 className="w-16 h-16 text-green-400" />,
      github: "https://github.com",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4">
            Featured <span className="text-neon-purple">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Blending Civil Engineering with AI & Modern Development
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className={`relative group rounded-3xl p-[1px] 
                bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20
                hover:from-purple-500/40 hover:to-cyan-500/40 transition-all`}
            >

              <div className="bg-slate-950 rounded-3xl p-8 h-full flex flex-col justify-between">

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition">
                    {project.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <span className="text-xs uppercase text-neon-cyan tracking-widest">
                    {project.tag}
                  </span>

                  <h3 className="text-2xl font-bold text-white mt-2 mb-3 group-hover:text-neon-purple transition">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 mt-auto">

                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.github}
                    target="_blank"
                    className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan transition"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>

                  {project.demo && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.demo}
                      target="_blank"
                      className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl 
                      bg-gradient-to-r from-purple-500/20 to-cyan-500/20 
                      border border-white/10 hover:border-neon-purple transition text-sm font-semibold"
                    >
                      Live Demo <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};