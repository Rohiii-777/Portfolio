// app/components/AboutSection.tsx

'use client';

import TerminalAboutMe from './TerminalAboutMe';
import TimelineAboutMe from './TimelineAboutMe';
import { useState } from 'react';
import AboutCard from './AboutCard';
import ChatAboutMe from './ChatAboutMe';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const [showCard, setShowCard] = useState(false);
  const [showChat, setShowChat] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-start"
    >
      {/* Terminal CLI About Me */}
      <TerminalAboutMe />

      {/* Smooth Scroll Transition */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full"
      >
        {/* Timeline Journey */}
        <TimelineAboutMe />
      </motion.div>

      {/* Interactive Buttons */}
      <div className="flex gap-6 my-10">
        <button
          onClick={() => setShowCard(!showCard)}
          className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-lg transition"
        >
          {showCard ? 'Hide Card' : 'View 3D Card'}
        </button>

        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-blue-400 hover:bg-blue-500 text-black font-bold py-2 px-4 rounded-lg transition"
        >
          {showChat ? 'Hide Chat' : 'Chat with Rohit'}
        </button>
      </div>

      {/* Conditionally Render Card */}
      {showCard && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="my-10"
        >
          <AboutCard />
        </motion.div>
      )}

      {/* Conditionally Render Chat Simulation */}
      {showChat && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="my-10"
        >
          <ChatAboutMe />
        </motion.div>
      )}
    </section>
  );
}
