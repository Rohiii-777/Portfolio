// app/components/FloatingNav.tsx

'use client';

import { motion } from 'framer-motion';

const sections = ['about', 'projects', 'experience', 'tech', 'contact'];

export default function FloatingNav() {
  const handleScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map((section, index) => (
        <motion.button
          key={index}
          onClick={() => handleScroll(section)}
          className="w-4 h-4 rounded-full bg-gray-400 hover:bg-green-400 transition"
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
        />
      ))}
    </div>
  );
}
