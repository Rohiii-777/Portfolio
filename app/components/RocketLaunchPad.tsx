// app/components/RocketLaunchPad.tsx

'use client';

import { motion } from 'framer-motion';

const rockets = [
  { name: 'React.js', icon: '/images/React.svg' },
  { name: 'Laravel', icon: '/images/Laravel.svg' },
  { name: 'Flask', icon: '/images/Flask.svg' },
  { name: 'MongoDB', icon: '/images/MongoDB.svg' },
  { name: 'Docker', icon: '/images/Docker.svg' },
  { name: 'AWS', icon: '/images/AWS.svg' },
  { name: 'Node.js', icon: '/images/Node.js.svg' },
  { name: 'PostgreSQL', icon: '/images/PostgresSQL.svg' },
];

export default function RocketLaunchPad() {
  return (
    <section
      id="tech-rocket"
      className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center p-6 md:p-20 overflow-hidden"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-12">
        Tech Launch Pad 🚀
      </h2>

      <div className="relative w-full max-w-6xl flex flex-wrap justify-center items-end gap-12">
        {rockets.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ y: 20 }}
            animate={{ y: [20, 0, 20] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: 'easeInOut',
              delay: index * 0.2,
            }}
            whileHover={{ scale: 1.3, y: -20 }}
            className="flex flex-col items-center justify-end cursor-pointer"
          >
            {/* Rocket Flame */}
            <div className="w-2 h-6 bg-orange-400 rounded-full blur-md mb-1 animate-pulse" />

            {/* Rocket Body */}
            <div className="w-20 h-20 bg-white/5 backdrop-blur-md border border-green-400 rounded-full flex items-center justify-center p-3 hover:bg-green-500/20 transition shadow-2xl">
              <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
            </div>

            {/* Label */}
            <p className="mt-2 text-green-300 text-xs font-bold">{tech.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Launchpad Platform */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-green-400/20 via-transparent to-transparent blur-md" />
    </section>
  );
}
