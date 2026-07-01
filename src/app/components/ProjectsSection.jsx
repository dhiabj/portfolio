'use client';
import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 3,
    title: 'Sarrafli',
    kind: 'data platform',
    description:
      'A full-stack app aggregating live currency exchange rates from 13 Tunisian banks and the Central Bank of Tunisia. Trilingual (FR/EN/AR) RTL experience backed by an async scraping pipeline with scheduled jobs, automatic retries, and email alerts on failure.',
    image: '/images/projects/3.png',
    previewUrl: 'https://sarrafli.net/',
    skills: [
      'Next.js',
      'FastAPI',
      'MongoDB',
      'APScheduler',
      'next-intl',
      'Docker',
    ],
  },
  {
    id: 2,
    title: 'CodeSensei',
    kind: 'ai tooling',
    description:
      'An AI-powered code review app that gives developers actionable feedback on code quality across multiple languages, using Google Gemini. Auth, email, and analysis pipeline built on a NestJS + MongoDB backend with a Vue 3 front end.',
    image: '/images/projects/1.png',
    gitUrl: 'https://github.com/dhiabj/CodeSensei.git',
    previewUrl: 'https://code-sensei-five.vercel.app/',
    skills: ['Vue 3', 'NestJS', 'MongoDB', 'Gemini API', 'Pinia', 'JWT'],
  },
  {
    id: 1,
    title: 'Weather App',
    kind: 'web app',
    description:
      'A responsive single-page weather app showing current conditions for any location worldwide, with dynamic backgrounds, search history, and unit conversion. Built on the OpenWeather API.',
    image: '/images/projects/2.png',
    gitUrl: 'https://github.com/dhiabj/weather-app.git',
    previewUrl: 'https://weather-app-beryl-seven-94.vercel.app/',
    skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenWeather API'],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const cardVariants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-4">
            <span className="text-teal">{'//'}</span> selected work
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Systems currently in production.
          </h2>
        </div>
        <p className="font-mono text-xs text-faint">
          {projectsData.length} of {projectsData.length} · all deployed
        </p>
      </div>

      <ul ref={ref} className="flex flex-col gap-6 lg:gap-8">
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.4, delay: index * 0.12 }}>
            <ProjectCard
              index={index}
              title={project.title}
              kind={project.kind}
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
