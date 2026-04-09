import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [sent, setSent] = useState(false);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `👋 Hello Sarfe Alam!

📌 Name: ${formData.name}
📧 Email: ${formData.email}

💬 Message:
${formData.message}`;

    const encodedText = encodeURIComponent(text);

    const phoneNumber = "917970486041"; // ✅ Your WhatsApp number with country code

    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");

    setSent(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });

    // Hide success message after 3 sec
    setTimeout(() => setSent(false), 3000);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/sarfe-alam-92a213300/",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/mdsarfealam62022-lab",
      color: "hover:text-white"
    },
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:bhawanipurmauje@gmail.com",
      color: "hover:text-neon-cyan"
    }
  ];

  return (
    <footer id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Let's Build the <span className="text-neon-cyan">Future</span>
            </h2>

            <p className="text-xl text-slate-400 mb-12">
              Open for collaborations, research, and AI + Civil Engineering projects.
            </p>

            <div className="flex flex-col gap-6">
              <a
                href="mailto:mdsarfe7970@gmail.com"
                className="group flex items-center gap-6 p-6 glass rounded-2xl border border-white/5 hover:border-neon-cyan/30 transition-all w-fit"
              >
                <div className="p-4 rounded-xl bg-neon-cyan/10">
                  <Mail className="w-8 h-8 text-neon-cyan" />
                </div>

                <div>
                  <span className="text-sm text-slate-500 block">Email Me</span>
                  <span className="text-xl font-bold text-white">
                    mdsarfe7970@gmail.com
                  </span>
                </div>

                <ArrowUpRight className="w-6 h-6 text-slate-600" />
              </a>

              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -5, scale: 1.1 }}
                    href={link.href}
                    target="_blank"
                    className={`p-5 rounded-2xl glass border border-white/5 text-slate-400 ${link.color}`}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div className="glass p-10 rounded-3xl border border-white/10">
            <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>

              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="p-4 rounded-xl bg-slate-900 border border-white/5 text-white"
                />

                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="p-4 rounded-xl bg-slate-900 border border-white/5 text-white"
                />
              </div>

              <textarea
                rows={4}
                required
                placeholder="Your Message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-4 rounded-xl bg-slate-900 border border-white/5 text-white"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 bg-neon-cyan text-black font-bold rounded-xl flex justify-center items-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </motion.button>

              {/* SUCCESS MESSAGE */}
              {sent && (
                <p className="text-green-400 text-center text-sm">
                  ✅ Redirecting to WhatsApp...
                </p>
              )}
            </form>
          </motion.div>
        </div>

        {/* FOOTER */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Cursive Name */}
          <span
            className="text-sm"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Sarfe <span className="text-neon-cyan">Alam</span>
          </span>

          <p className="text-slate-500 text-xs">
            © 2026 All Rights Reserved
          </p>

          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};