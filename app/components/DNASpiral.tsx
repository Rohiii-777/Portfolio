// app/components/DNASpiral.tsx

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

export default function RealDNASpiral() {
  const spiralRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!spiralRef.current) return;

    const items = gsap.utils.toArray<HTMLDivElement>('.dna-real-item');
    const total = items.length;

    gsap.to(items, {
      yPercent: -100 * total,
      ease: 'none',
      repeat: -1,
      duration: 60,
      modifiers: {
        yPercent: gsap.utils.wrap(-100 * total, 0),
      },
    });

    items.forEach((item, i) => {
      const angle = (i / total) * Math.PI * 2;
      const x = Math.sin(angle) * 100;
      const z = Math.cos(angle) * 100;

      gsap.set(item, {
        x,
        z,
        scale: () => 1 + z / 200,
        opacity: () => 0.5 + z / 200,
      });

      gsap.to(item, {
        rotation: 360,
        repeat: -1,
        duration: 60,
        ease: 'none',
      });
    });
  }, []);

  return (
    <section
      id="tech-dna-real"
      className="min-h-screen bg-black flex flex-col items-center justify-center p-6 overflow-hidden"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-16">
        My DNA of Tech (Real 3D Version) 🧬
      </h2>

      <div
        ref={spiralRef}
        className="relative w-80 h-[600px] md:w-[500px] md:h-[800px]"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="dna-real-item absolute w-20 h-20 bg-white/5 backdrop-blur-md border border-green-400 rounded-full flex items-center justify-center shadow-xl text-xs font-bold text-green-300"
          >
            <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
          </div>
        ))}
      </div>
    </section>
  );
}
