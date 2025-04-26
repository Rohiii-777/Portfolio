// app/components/TopNav.tsx

'use client';

import { motion } from 'framer-motion';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Tech', id: 'tech' },
  { label: 'Contact', id: 'contact' },
];

export default function TopNav() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 flex justify-center items-center h-16 px-4">
      <div className="flex gap-6">
        {navLinks.map((link, index) => (
          <motion.button
            key={index}
            onClick={() => handleScroll(link.id)}
            className="text-gray-300 hover:text-green-400 transition font-semibold text-sm md:text-base"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.label}
          </motion.button>
        ))}
      </div>
    </nav>
  );
}
