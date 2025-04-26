// app/components/TerminalHero.tsx

'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const typingText = [
  'Hello, I am Rohit Saundarmal',
  'Full-Stack Developer',
  'Backend Specialist | API Enthusiast',
  'Welcome to my Universe 🚀',
];

export default function TerminalHero() {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typingText[textIndex];
    let typingSpeed = isDeleting ? 30 : 90;

    const type = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(current.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setDisplayedText(current.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typingText.length);
      }
    }, typingSpeed);

    return () => clearTimeout(type);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="relative h-screen w-full bg-black flex flex-col justify-center items-center overflow-hidden">
      {/* Deep Soft Nebula Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-black to-green-900 opacity-30 blur-3xl" />

      {/* Terminal Typing */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-green-400 text-2xl md:text-5xl font-mono text-center relative z-10 p-4"
      >
        <span className="text-green-400">$ </span>
        {displayedText}
        <motion.span
          className="inline-block w-2 h-6 bg-green-400 ml-1 align-middle"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      </motion.div>

      {/* Scroll Hint */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 2, duration: 2 }}
        className="mt-10 text-gray-400 text-sm md:text-base text-center z-10"
      >
        ↓ Scroll down to explore ↓
      </motion.div> */}
    </section>
  );
}
