import React from 'react';
import { Code, Database, Wind, PenTool, Terminal, GitMerge } from 'lucide-react';
import Timeline from './Timeline';
import { motion } from 'framer-motion';

const skills = [
  {
    icon: <Code size={32} className="text-emerald-500" />,
    title: 'Frontend Development',
    description: 'Crafting responsive and performant user interfaces with React, Next.js, and modern CSS frameworks like Tailwind CSS.',
  },
  {
    icon: <Database size={32} className="text-emerald-500" />,
    title: 'Backend Development',
    description: 'Building scalable and secure server-side applications with Node.js, Express, and integrating with databases like MongoDB.',
  },
  {
    icon: <Wind size={32} className="text-emerald-500" />,
    title: '3D & WebGL',
    description: 'Bringing websites to life with immersive 3D graphics and animations using Three.js, React Three Fiber, and GLSL shaders.',
  },
  {
    icon: <PenTool size={32} className="text-emerald-500" />,
    title: 'UI/UX Design',
    description: 'Focusing on user-centric design principles to create intuitive, accessible, and engaging digital experiences.',
  },
  {
    icon: <Terminal size={32} className="text-emerald-500" />,
    title: 'DevOps & Deployment',
    description: 'Implementing CI/CD pipelines and deploying scalable applications on platforms like Vercel, Netlify, and AWS.',
  },
  {
    icon: <GitMerge size={32} className="text-emerald-500" />,
    title: 'Version Control',
    description: 'Proficient with Git and collaborative workflows, managing codebases effectively on platforms like GitHub.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const About = () => {
  return (
    <section className="min-h-screen flex items-center py-20 px-4 md:px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          A passionate developer driven by the challenge of merging complex technology with beautiful design to create unique digital experiences.
        </p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-gray-800">My Philosophy</h3>
            <p className="text-gray-700 leading-relaxed">
              I believe the web is more than just a series of pages; it's a canvas for storytelling and interaction. My goal is to push the boundaries of what's possible in a browser, moving beyond static content to build dynamic, memorable worlds.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every line of code is an opportunity to create something efficient, scalable, and beautiful. I am dedicated to clean code practices and continuous learning to stay at the forefront of web technology.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For me, a successful project is not just about functionality; it's about the experience. Performance, accessibility, and intuitive design are non-negotiable pillars of my work, ensuring that the end product is not only powerful but also a joy to use for everyone.
            </p>
          </div>
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {skills.map((skill) => (
              <motion.div key={skill.title} variants={itemVariants} className="flex items-start gap-4">
                <div className="shrink-0 mt-1">{skill.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">{skill.title}</h4>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="mt-24">
            <h3 className="text-4xl font-bold text-center mb-12">My Journey</h3>
            <Timeline />
        </div>
      </div>
    </section>
  );
};

export default About;