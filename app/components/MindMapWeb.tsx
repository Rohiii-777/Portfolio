// app/components/MindMapWeb.tsx

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

export default function MindMapWeb() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const nodes = containerRef.current.querySelectorAll('.node');

    nodes.forEach((node) => {
      gsap.to(node, {
        x: 'random(-20, 20)',
        y: 'random(-20, 20)',
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
      id="tech-mindmap"
      className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center p-6 md:p-20 relative overflow-hidden"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-12">
        My Tech Mind Map 🧠
      </h2>

      <div ref={containerRef} className="relative w-[350px] h-[350px] md:w-[600px] md:h-[600px] flex items-center justify-center">

        {/* Central Node (You) */}
        <div className="absolute w-20 h-20 md:w-28 md:h-28 bg-green-400 rounded-full flex items-center justify-center text-black font-bold shadow-xl">
          Rohit
        </div>

        {/* Skill Nodes */}
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * (2 * Math.PI);
          const radius = 220;

          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={index}
              className="node absolute w-16 h-16 bg-white/5 border border-green-400 rounded-full flex flex-col items-center justify-center p-2 shadow-md hover:bg-green-400 hover:text-black transition-transform cursor-pointer"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
              {/* Optional: <p className="text-xs font-bold">{skill.name}</p> */}
            </div>
          );
        })}

        {/* Optional: connecting lines (Advanced SVG later if needed) */}

      </div>
    </section>
  );
}
