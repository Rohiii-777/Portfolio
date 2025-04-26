// app/components/TimelineAboutMe.tsx

'use client';

import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '2017',
    title: 'SSC (10th Grade)',
    description: 'Graduated from Yashwant Vidyalaya Jr. College with 76.20%.',
  },
  {
    year: '2019',
    title: 'HSC (12th Grade)',
    description: 'Completed Higher Secondary from Yashwant Vidyalaya with 50%.',
  },
  {
    year: '2022',
    title: 'BSc Computer Science',
    description:
      'Graduated from Haribhai V. Desai College, Pune with CGPA 7.6.',
  },
  {
    year: '2023',
    title: 'Web Development Internship',
    description:
      'Completed internship at Code Clause — Frontend and Backend Projects.',
  },
  {
    year: '2023-Present',
    title: 'Full Stack Developer',
    description:
      'Working at Coalesceflow Pvt. Ltd., Pune. Backend, API Development, Database Optimization.',
  },
];

export default function TimelineAboutMe() {
  return (
    <section
      id="about-timeline"
      className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center p-6 md:p-20"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-16">
        My Journey
      </h2>

      <div className="relative w-full max-w-3xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-400" />

        {/* Timeline Items */}
        <div className="flex flex-col gap-20">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Dot */}
              <div className="w-5 h-5 bg-green-400 rounded-full border-4 border-black z-10" />

              {/* Event Card */}
              <div className="mt-6 p-6 bg-black text-green-400 border border-green-400 rounded-xl shadow-md w-full md:w-2/3">
                <h3 className="text-xl font-bold mb-2">{event.year}</h3>
                <h4 className="text-lg font-semibold mb-1">{event.title}</h4>
                <p className="text-sm text-gray-400">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
