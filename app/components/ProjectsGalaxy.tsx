// app/components/ProjectsGalaxy.tsx

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    name: 'COMB Tech',
    tech: 'AngularJS, Yii2, Laravel',
    description:
      'Maintained and extended a Salon Management Billing App. Built APIs, new modules, and optimized performance.',
  },
  {
    name: 'Tracker',
    tech: 'React.js, Flask, Laravel',
    description:
      'Project Management Software for tasks, team collaboration, with scalable backend microservices.',
  },
  {
    name: 'SIESMS',
    tech: 'AngularJS, React.js, Laravel',
    description:
      'Built scalable School Management System for student/staff management, attendance tracking, and performance reports.',
  },
  {
    name: 'iQuiiz',
    tech: 'PHP, Ajax, MySQL',
    description:
      'Created dynamic, responsive online quiz app with real-time scoring and user tracking.',
  },
  {
    name: 'Mini Projects',
    tech: 'CRUD Apps, Stopwatch, URL Shortener',
    description:
      'Various small projects showcasing functionality like CRUD, timers, converters, and URL shortening.',
  },
];

export default function ProjectsGalaxy() {
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[0]
  >(null);

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center p-6 md:p-20 relative overflow-hidden"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-12">
        My Projects Galaxy 🌌
      </h2>

      <div className="relative w-full max-w-4xl h-[500px] flex items-center justify-center">
        {/* Center Planet */}
        <div className="absolute w-20 h-20 bg-green-400 rounded-full blur-xl animate-pulse" />

        {/* Orbiting Projects */}
        {projects.map((project, index) => {
          const angle = (index / projects.length) * 360;
          const x = 200 * Math.cos((angle * Math.PI) / 180);
          const y = 200 * Math.sin((angle * Math.PI) / 180);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ x, y }}
              transition={{ duration: 2, type: 'spring' }}
              className="absolute flex flex-col items-center justify-center bg-black border border-green-400 rounded-full p-4 w-32 h-32 text-center hover:bg-green-500 hover:text-black cursor-pointer shadow-lg"
              onClick={() => setSelectedProject(project)}
            >
              <p className="text-xs font-bold">{project.name}</p>
              <p className="text-[10px] mt-2">{project.tech}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-gray-900 text-green-400 p-8 rounded-xl max-w-md w-full relative">
              <h3 className="text-2xl font-bold mb-4">
                {selectedProject.name}
              </h3>
              <p className="text-sm mb-2">
                <span className="font-semibold">Technologies:</span>{' '}
                {selectedProject.tech}
              </p>
              <p className="text-sm">{selectedProject.description}</p>

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-green-400 hover:bg-green-500 text-black font-bold py-1 px-3 rounded-lg transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
