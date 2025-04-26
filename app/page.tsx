// app/page.tsx

import TerminalHero from "./components/TerminalHero";
import FloatingNav from "./components/FloatingNav";
import TopNav from "./components/TopNav";
import KeyNav from "./components/KeyNav";
import TerminalAboutMe from "./components/TerminalAboutMe";
// import AboutSection from './components/AboutSection';
// import AboutSection1 from './components/AboutSection1';
// import TimelineAboutMe from './components/TimelineAboutMe';
// import AboutCard from './components/AboutCard';
// import ChatAboutMe from './components/ChatAboutMe';
// import ProjectsGalaxy from './components/ProjectsGalaxy';
// import ExperienceTower from './components/ExperienceTower';
// import TechOrbit from './components/TechOrbit';
// import RocketLaunchPad from './components/RocketLaunchPad';
// import DNASpiral from './components/DNASpiral';
// import TechFloatingSkills from './components/TechFloatingSkills';
// import SkillShield from './components/SkillShield';
// import MindMapWeb from './components/MindMapWeb';
import ContactSection from './components/ContactSection';

export const metadata = {
  title: "Rohit Saundarmal | Full Stack Developer Portfolio",
  description: "Official portfolio of Rohit Saundarmal, a dedicated Full Stack Developer skilled in React.js, Laravel, Flask, and more. Let's build something great together!",
  openGraph: {
    title: "Rohit Saundarmal | Full Stack Developer",
    description: "Explore my professional journey, projects, and technical skills. Let's connect!",
    url: "https://your-final-vercel-url.vercel.app/",
    siteName: "Rohit's Portfolio",
    images: [
      {
        url: "/og-image.png", // Make sure this file exists in /public
        width: 1200,
        height: 630,
        alt: "Rohit Saundarmal Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Saundarmal | Full Stack Developer",
    description: "Building impactful applications with a passion for backend and systems.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <main className="relative">
      {/* <TopNav /> */}
      <TerminalHero />
      {/* <FloatingNav /> */}
      {/* <KeyNav /> */}
      {/* <AboutSection /> */}
      {/* <AboutSection1 /> */}
      {/* <TerminalAboutMe /> */}
      {/* <TimelineAboutMe />
      <AboutCard />
      <ChatAboutMe /> */}
      {/* <ProjectsGalaxy /> */}
      {/* <ExperienceTower /> */}
      {/* <TechFloatingSkills /> */}
      {/* <SkillShield /> */}
      {/* <MindMapWeb /> */}
      {/* <TechOrbit /> */}
      {/* <RocketLaunchPad /> */}
      {/* <ContactSection /> */}
    </main>
  );
}
