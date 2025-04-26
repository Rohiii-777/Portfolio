// app/components/TerminalAboutMe.tsx

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const terminalLines = [
  '> whoami',
  'Rohit Saundarmal - Full Stack Developer 🚀',
  '',
  '> skills --list',
  '- React.js, Laravel, Flask, MongoDB, Docker, AWS',
  '',
  '> education',
  'BSc Computer Science, Haribhai V. Desai College, Pune',
  '',
  '> motto',
  '"Build. Solve. Grow."',
  '',
  '> fetch-profile',
  'Loading profile... ✅',
];

export default function TerminalAboutMe() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, terminalLines[currentLineIndex]]);
        setCurrentLineIndex((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex]);

  return (
    <section
      id="about"
      className="min-h-screen bg-black text-green-400 flex items-center justify-center p-6 md:p-20"
    >
      <div className="w-full max-w-4xl bg-black border border-green-400 rounded-lg p-8 font-mono text-sm md:text-base shadow-2xl">
        {displayedLines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="whitespace-pre-wrap"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
