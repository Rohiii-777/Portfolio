// app/components/ExperienceTower.tsx

'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    year: '2023 - Present',
    company: 'Coalesceflow Pvt. Ltd.',
    role: 'Full Stack Developer',
    description:
      'Backend optimization, API development, database scaling. Worked with Yii2, Laravel, MySQL, AngularJS.',
    skills: ['Laravel', 'Yii2', 'MySQL', 'AngularJS'],
  },
  {
    year: '2023 (Internship)',
    company: 'Code Clause',
    role: 'Web Development Intern',
    description:
      'Built frontend and backend projects using JavaScript and PHP. Focused on system functionalities.',
    skills: ['PHP', 'JavaScript', 'HTML', 'CSS'],
  },
];

export default function ExperienceTower() {
  return (
    <section
      id="experience"
      className="min-h-screen w-full bg-black flex flex-col items-center justify-center p-6 md:p-20 relative"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-16">
        My Career Tower 🏢🚀
      </h2>

      <div className="relative w-1 bg-green-400 h-full rounded-full" />

      <div className="absolute flex flex-col gap-32 items-center">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gray-900 border border-green-400 rounded-2xl p-6 w-72 md:w-96 shadow-xl"
          >
            <div className="absolute -left-7 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-green-400 border-4 border-black" />

            <h3 className="text-xl font-bold mb-2 text-green-300">
              {exp.company}
            </h3>
            <h4 className="text-md font-semibold mb-1 text-gray-300">
              {exp.role}
            </h4>
            <p className="text-sm text-gray-400 mb-4">{exp.description}</p>

            {/* Skills Badges */}
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-green-600 text-black px-3 py-1 rounded-full text-xs font-bold shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
