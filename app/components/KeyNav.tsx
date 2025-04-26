// app/components/KeyNav.tsx

'use client';

import { useEffect } from 'react';

const keyToSection: { [key: string]: string } = {
  '1': 'about',
  '2': 'projects',
  '3': 'experience',
  '4': 'tech',
  '5': 'contact',
};

export default function KeyNav() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const sectionId = keyToSection[e.key];
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null; // No UI needed — pure logic
}
