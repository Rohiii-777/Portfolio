// app/components/AboutSection.tsx

'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-20"
    >
      {/* Left side: Bio */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-6">
          About Me
        </h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Dedicated and results-driven Full-Stack Developer with 1.6+ years of
          hands-on experience. Specialized in designing scalable web
          applications, API development, and database optimization. Passionate
          about solving complex problems and building impactful products.
        </p>
        <p className="text-gray-400 text-sm italic">
          "Dynamic IT graduate with strong technical skills and a passion for
          innovation and problem-solving."
        </p>
      </motion.div>

      {/* Right side: Animated Element */}
      <motion.div
        className="flex-1 flex justify-center items-center"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 flex justify-center items-center shadow-lg">
          <span className="text-4xl font-bold text-black">RS</span>
        </div>
      </motion.div>
    </section>
  );
}
