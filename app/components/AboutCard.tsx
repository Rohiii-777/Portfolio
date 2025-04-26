// app/components/AboutCard.tsx

'use client';

import { motion } from 'framer-motion';

export default function AboutCard() {
  return (
    <section
      id="about-card"
      className="min-h-screen flex items-center justify-center bg-black p-6 md:p-20"
    >
      <div className="group w-80 md:w-96 h-96 perspective">
        <motion.div
          className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 0 }}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full bg-gradient-to-br from-green-400 to-blue-600 text-black rounded-2xl p-6 flex flex-col justify-center items-center backface-hidden shadow-xl">
            <h2 className="text-3xl font-bold mb-4">{"Rohit Saundarmal"}</h2>
            <p className="text-center font-semibold">
              {"Full-Stack Developer | API Specialist | Problem Solver"}
            </p>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full bg-black text-green-400 rounded-2xl p-6 flex flex-col justify-center items-center rotate-y-180 backface-hidden shadow-xl">
            <h3 className="text-2xl font-bold mb-2">{"Skills"}</h3>
            <p className="text-center text-sm mb-4">
             {" React.js, Laravel, Flask, MongoDB, Docker, AWS"}
            </p>

            <h3 className="text-2xl font-bold mb-2">{"Education"}</h3>
            <p className="text-center text-sm mb-4">
             {" BSc Computer Science, Pune"}
            </p>

            <h3 className="text-2xl font-bold mb-2">{"Motto"}</h3>
            <p className="italic text-center text-sm">{"Build. Solve. Grow."}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
