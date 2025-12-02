import { motion } from 'motion/react';
import { Palette, Code, Layout, Figma, Smartphone, Zap } from 'lucide-react';
import { useState } from 'react';

const skills = [
  {
    icon: Palette,
    title: 'Visual Design',
    description: 'Creating stunning visuals with attention to color, typography, and composition.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Designing intuitive user interfaces and seamless user experiences.',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building responsive websites with modern technologies and best practices.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Figma,
    title: 'Prototyping',
    description: 'Rapid prototyping and design systems using industry-standard tools.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Design',
    description: 'Crafting beautiful and functional mobile-first experiences.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Zap,
    title: 'Brand Identity',
    description: 'Developing cohesive brand identities that tell compelling stories.',
    color: 'from-red-500 to-pink-500',
  },
];

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-hover relative"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotateY: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="p-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black hover:border-gray-700 transition-all duration-300 relative overflow-hidden"
        style={{ perspective: '1000px' }}
      >
        {/* Animated gradient background on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <div className="relative z-10">
          <motion.div
            className={`mb-6 inline-block p-4 bg-gradient-to-br ${skill.color} rounded-xl`}
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="text-white" size={28} />
          </motion.div>
          <motion.h3
            className="text-white mb-3"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {skill.title}
          </motion.h3>
          <p className="text-gray-400">{skill.description}</p>
        </div>

        {/* Animated corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A diverse skill set combining creativity, technical proficiency, and strategic thinking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}