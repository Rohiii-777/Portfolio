// app/components/TechFloatingSkills.tsx

'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const skills = [
  { name: 'React.js', icon: '/images/React.svg' },
  { name: 'Laravel', icon: '/images/Laravel.svg' },
  { name: 'Flask', icon: '/images/Flask.svg' },
  { name: 'MongoDB', icon: '/images/MongoDB.svg' },
  { name: 'Docker', icon: '/images/Docker.svg' },
  { name: 'AWS', icon: '/images/AWS.svg' },
  { name: 'Node.js', icon: '/images/Node.js.svg' },
  { name: 'PostgreSQL', icon: '/images/PostgresSQL.svg' },
];

export default function TechFloatingSkills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const elements = containerRef.current.querySelectorAll('.skill-item');

    elements.forEach((el) => {
      gsap.to(el, {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 2,
      });
    });
  }, []);

  return (
    <section
      id="tech-floating"
      className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center p-6 md:p-20 overflow-hidden"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-12">
        My Floating Tech Stack 🌌
      </h2>

      <div
        ref={containerRef}
        className="relative w-full max-w-6xl flex flex-wrap justify-center items-center gap-16"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item w-24 h-24 md:w-32 md:h-32 bg-white/5 backdrop-blur-md border border-green-400 rounded-full flex flex-col items-center justify-center p-4 shadow-2xl hover:scale-110 transition-transform cursor-pointer"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 md:w-16 md:h-16"
            />
            <p className="mt-2 text-xs font-bold text-green-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
