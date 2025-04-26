// app/components/ChatAboutMe.tsx

'use client';

import { motion } from 'framer-motion';

const chatMessages = [
  { sender: 'rohit', text: "Hi! I'm Rohit, a Full-Stack Developer 🚀" },
  {
    sender: 'recruiter',
    text: 'Hey Rohit! Nice to meet you. What technologies do you love?',
  },
  {
    sender: 'rohit',
    text: 'React.js, Laravel, Flask, MongoDB, Docker, AWS 🔥',
  },
  { sender: 'recruiter', text: 'Awesome! Where did you study?' },
  {
    sender: 'rohit',
    text: 'BSc Computer Science, Haribhai V. Desai College, Pune.',
  },
  { sender: 'recruiter', text: "That's great! What's your motto?" },
  { sender: 'rohit', text: '"Build. Solve. Grow." 🌟' },
];

export default function ChatAboutMe() {
  return (
    <section
      id="about-chat"
      className="min-h-screen w-full bg-black flex flex-col items-center justify-center p-6 md:p-20"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-12">
        {"Let's Chat 📱"}
      </h2>

      <div className="w-full max-w-lg bg-gray-800 rounded-2xl p-6 shadow-2xl space-y-4">
        {chatMessages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex ${
              msg.sender === 'rohit' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                msg.sender === 'rohit'
                  ? 'bg-green-400 text-black'
                  : 'bg-gray-700 text-gray-200'
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
