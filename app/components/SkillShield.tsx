// app/components/SkillShield.tsx

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

export default function SkillShield() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const icons = containerRef.current.querySelectorAll('.skill-icon');

    icons.forEach((icon, index) => {
      gsap.to(icon, {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: 'linear',
        transformOrigin: 'center center',
        delay: index * 2,
      });
    });
  }, []);

  return (
    <section
      id="tech-shield"
      className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center p-6 md:p-20 overflow-hidden"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-12">
        Skill Shield 🛡️
      </h2>

      <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-tr from-green-400/20 to-blue-500/20 backdrop-blur-md border-4 border-green-400 shadow-2xl flex items-center justify-center">
        {/* Center Core */}
        <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-green-400 flex items-center justify-center text-black font-bold text-center text-sm md:text-base shadow-md">
          Rohit
        </div>

        {/* Skill Icons Around */}
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * (2 * Math.PI);
          const radius = 200;

          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={index}
              className="skill-icon absolute w-16 h-16 bg-black border border-green-400 rounded-full flex flex-col items-center justify-center p-2 shadow-md hover:bg-green-500/20 cursor-pointer"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
