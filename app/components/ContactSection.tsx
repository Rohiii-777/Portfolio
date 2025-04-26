// app/components/ContactSection.tsx

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle'
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // simulate API sending delay
      await new Promise((res) => setTimeout(res, 2000));
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center p-6 md:p-20 overflow-hidden"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-12">
        Connect With Me 📡
      </h2>

      {/* Terminal Box */}
      <form
        onSubmit={handleSubmit}
        className="bg-black border-2 border-green-400 rounded-2xl p-8 w-full max-w-lg flex flex-col gap-6 font-mono text-green-300 shadow-2xl"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <label htmlFor="name" className="text-xs">
            > Enter your name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-transparent border-b-2 border-green-400 p-2 w-full outline-none placeholder:text-gray-500"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <label htmlFor="email" className="text-xs">
            > Enter your email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-transparent border-b-2 border-green-400 p-2 w-full outline-none placeholder:text-gray-500"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <label htmlFor="message" className="text-xs">
            > Your message:
          </label>
          <textarea
            id="message"
            name="message"
            className="bg-transparent border-b-2 border-green-400 p-2 w-full outline-none placeholder:text-gray-500 resize-none"
            placeholder="Hey Rohit, I would like to collaborate!"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </motion.div>

        {/* Send Button */}
        <motion.button
          type="submit"
          className="bg-green-400 hover:bg-green-500 text-black font-bold p-2 rounded-lg mt-6 transition"
          whileHover={{ scale: 1.05 }}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Send Beacon 📡'}
        </motion.button>

        {/* Status Messages */}
        {status === 'sent' && (
          <p className="text-green-400 mt-4">
            > Message Delivered Successfully ✅
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-400 mt-4">> Error sending message ❌</p>
        )}
      </form>
    </section>
  );
}
