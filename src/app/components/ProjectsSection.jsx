'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'CodeSensei',
    description:
      "Code Sensei is an intelligent code review application that helps developers improve their code quality through AI-powered analysis. Built with modern web technologies, it supports multiple programming languages and provides actionable feedback using Google Gemini's AI capabilities.",
    image: '/images/projects/1.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/dhiabj/CodeSensei.git',
    previewUrl: 'https://code-sensei-five.vercel.app/',
    skills: [
      'Vue.js 3',
      'TypeScript',
      'Vue Router',
      'CodeMirror 6',
      'Vee-Validate/Yup',
      'Axios',
      'Node.js',
      'JWT',
      'Passport.js',
      'Brevo',
      'Google Gemini API',
      'Tailwind CSS',
      'Pinia',
      'JavaScript',
      'NestJS',
      'MongoDB',
      'Git',
    ],
  },
  {
    id: 2,
    title: 'Weather App',
    description:
      'A simple single-page responsive weather app developed using Nextjs, TypeScript, and Tailwind CSS that displays current weather information for any location worldwide. The app utilizes the OpenWeather API for weather data and features dynamic backgrounds, search history, and unit conversion.',
    image: '/images/projects/2.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/dhiabj/weather-app.git',
    previewUrl: 'https://weather-app-beryl-seven-94.vercel.app/',
    skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenWeather API', 'Git'],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              skills={project.skills}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
