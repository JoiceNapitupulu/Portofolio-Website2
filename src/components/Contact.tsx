import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email', color: 'from-red-500 to-orange-500' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'from-blue-500 to-cyan-500' },
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'from-gray-600 to-gray-800' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'from-sky-400 to-blue-500' },
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-white mb-4">
            Let's Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <label htmlFor="name" className="block text-gray-300 mb-3">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-xl focus:outline-none focus:border-purple-500 text-white transition-all duration-300 hover:border-gray-700 cursor-hover"
                placeholder="Your name"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label htmlFor="email" className="block text-gray-300 mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-xl focus:outline-none focus:border-purple-500 text-white transition-all duration-300 hover:border-gray-700 cursor-hover"
                placeholder="your@email.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="message" className="block text-gray-300 mb-3">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-xl focus:outline-none focus:border-purple-500 text-white resize-none transition-all duration-300 hover:border-gray-700 cursor-hover"
                placeholder="Tell me about your project..."
              />
            </motion.div>
            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2 group cursor-hover"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span>Send Message</span>
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-12">
              <motion.h3
                className="text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Get in Touch
              </motion.h3>
              <motion.p
                className="text-gray-400 mb-8 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </motion.p>
            </div>

            <div className="space-y-6">
              <motion.h4
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Connect with me
              </motion.h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group cursor-hover"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1, type: 'spring' }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onMouseEnter={() => setIsHovered(social.label)}
                      onMouseLeave={() => setIsHovered(null)}
                      aria-label={social.label}
                    >
                      <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 flex flex-col items-center gap-3">
                        <motion.div
                          className={`p-3 rounded-lg bg-gradient-to-br ${social.color} ${
                            isHovered === social.label ? 'opacity-100' : 'opacity-80'
                          } transition-opacity`}
                          animate={isHovered === social.label ? { rotate: [0, -10, 10, 0] } : {}}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon size={24} className="text-white" />
                        </motion.div>
                        <span className="text-gray-400 group-hover:text-white transition-colors">
                          {social.label}
                        </span>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <motion.div
              className="mt-16 pt-8 border-t border-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-gray-500 text-center">© 2025 Portfolio. All rights reserved.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}