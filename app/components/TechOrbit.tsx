// app/components/TechOrbit.tsx

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const techStacks = [
  { name: 'React.js', icon: '/images/React.svg' },
  { name: 'Laravel', icon: '/images/Laravel.svg' },
  { name: 'Flask', icon: '/images/Flask.svg' },
  { name: 'MongoDB', icon: '/images/MongoDB.svg' },
  { name: 'Docker', icon: '/images/Docker.svg' },
  { name: 'AWS', icon: '/images/AWS.svg' },
  { name: 'Node.js', icon: '/images/Node.js.svg' },
  { name: 'PostgreSQL', icon: '/images/PostgresSQL.svg' },
];
export default function TechOrbit() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section
      id="tech-holograms"
      className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center p-6 md:p-20 overflow-hidden"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-12">
        My Tech Holograms ✨
      </h2>

      <div className="relative w-full max-w-6xl h-[500px] flex flex-wrap justify-center items-center gap-12">
        {techStacks.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ duration: 0.8 }}
            className="w-28 h-28 bg-white/5 backdrop-blur-md border border-green-400 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-4 hover:bg-green-500/10 cursor-pointer"
          >
            <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
            <p className="text-green-300 text-xs font-bold">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
