'use client'

import { motion, Variants } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, ExternalLink, Sparkles, Download } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import ParticleBackground from './ParticleBackground'
import { personalInfo, stats } from '../data/mock'

const HeroSection = () => {
  const { isDark } = useTheme()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  }

  return (
    <section
      id="about"
      className={`relative min-h-screen flex items-center overflow-hidden ${isDark ? 'bg-[#0a0f1c]' : 'bg-[#fafafa]'
        }`}
    >
      <ParticleBackground />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00d4ff]/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff6b6b]/10 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-widest ${isDark
                  ? 'bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20'
                  : 'bg-[#0a0f1c]/5 text-[#0a0f1c] border border-[#0a0f1c]/10'
                  }`}
              >
                <Sparkles size={14} className="animate-pulse" />
                {personalInfo.heroBadge}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight ${isDark ? 'text-white' : 'text-[#0a0f1c]'
                }`}
            >
              {personalInfo.name.split(' ')[0]}
              <br />
              <span className="text-[#00d4ff]">{personalInfo.name.split(' ')[1]}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`text-xl md:text-2xl leading-relaxed max-w-xl ${isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
            >
              {personalInfo.heroStatement}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`text-base leading-relaxed max-w-xl ${isDark ? 'text-gray-500' : 'text-gray-500'
                }`}
            >
              {personalInfo.heroSubtext}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00d4ff] text-[#0a0f1c] rounded-full font-mono text-sm uppercase tracking-wider font-semibold hover:bg-[#00b8e0] transition-all shadow-lg shadow-[#00d4ff]/25"
              >
                View Projects
                <ExternalLink size={16} />
              </motion.a>
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00d4ff] text-[#0a0f1c] rounded-full font-mono text-sm uppercase tracking-wider font-semibold hover:bg-[#00b8e0] transition-all shadow-lg shadow-[#00d4ff]/25"
              >
                Download Resume
                <Download size={16} />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm uppercase tracking-wider font-semibold transition-all ${isDark
                  ? 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                  : 'bg-[#0a0f1c]/5 text-[#0a0f1c] hover:bg-[#0a0f1c]/10 border border-[#0a0f1c]/10'
                  }`}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div
              className={`relative rounded-2xl overflow-hidden ${isDark
                ? 'bg-[#1a1f2e] border border-white/10'
                : 'bg-white border border-black/10 shadow-2xl'
                }`}
            >
              {/* Editor Header */}
              <div
                className={`flex items-center gap-2 px-4 py-3 ${isDark ? 'bg-[#0d1117] border-b border-white/5' : 'bg-gray-50 border-b border-gray-200'
                  }`}
              >
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
                </div>
                <span
                  className={`ml-4 font-mono text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'
                    }`}
                >
                  portfolio.tsx
                </span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                <div className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span className="text-[#ff6b6b]">const</span>{' '}
                  <span className="text-[#00d4ff]">developer</span>{' ='}
                </div>
                <pre className={`whitespace-pre-wrap ${isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                  <TypeAnimation
                    sequence={[
                      `{
  name: "${personalInfo.name}",
  role: "${personalInfo.title}",
  location: "${personalInfo.location}",
  skills: ["React", "Next.js", "Angular", "Node.js", "AI"],
  passion: "Building seamless UX",
  status: "Open to opportunities"
};`,
                      2000,
                      '',
                      500,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </pre>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-6 rounded-2xl text-center transition-all ${isDark
                ? 'bg-white/5 border border-white/10 hover:border-[#00d4ff]/30'
                : 'bg-white border border-black/5 shadow-lg hover:shadow-xl'
                }`}
            >
              <div className="text-4xl font-display font-bold text-[#00d4ff] mb-2">
                {stat.value}
              </div>
              <div
                className={`font-mono text-xs uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
              >
                {stat.label}
              </div>
              <div
                className={`text-xs mt-1 ${isDark ? 'text-gray-600' : 'text-gray-400'
                  }`}
              >
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`flex flex-col items-center gap-2 ${isDark ? 'text-gray-500' : 'text-gray-400'
              }`}
          >
            <span className="font-mono text-xs uppercase tracking-wider">Scroll</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
