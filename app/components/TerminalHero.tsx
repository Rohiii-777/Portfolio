// app/components/TerminalHero.tsx

'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const typingText = [
  'Hello, I am Rohit Saundarmal',
  'Full-Stack Developer',
  'Backend Specialist | API Lover',
  'Welcome to my Portfolio 🚀',
];

export default function TerminalHero() {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typingText[textIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentText.substring(0, prev.length - 1)
          : currentText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typingText.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <section className="h-screen w-full bg-black flex flex-col justify-center items-center text-green-400 p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-2xl md:text-4xl font-mono text-center"
      >
        <span>$ </span>
        {displayedText}
        <span className="animate-pulse">|</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-6 text-gray-500 text-sm md:text-base text-center"
      >
        {/* Subtitle or small instruction */}
        Press [ ↓ ] to explore more
      </motion.div>
    </section>
  );
}
