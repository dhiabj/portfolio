'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'CodeSensei',
    description:
      "Code Sensei is an intelligent code review application that helps developers improve their code quality through AI-powered analysis. Built with modern web technologies, it supports multiple programming languages and provides actionable feedback using Deepseek's AI capabilities.",
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
      'Nodemailer',
      'Deepseek API',
      'Tailwind CSS',
      'Pinia',
      'JavaScript',
      'Express.js',
      'MongoDB',
      'Vercel',
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
    skills: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'OpenWeather API',
      'Vercel',
      'Git',
    ],
  },
  {
    id: 3,
    title: 'Campside',
    description:
      'Campside is a social network for those who enjoy camping. The platform attempts to make sharing and finding camping locations easier. On the site, users can interact with each other and exchange experiences. Campside offers a social hub for campers, encouraging a community built around outdoor adventures.',
    image: '/images/projects/3.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/dhiabj/campside.git',
    previewUrl: 'https://campside-auym.vercel.app/',
    skills: [
      'Mongodb',
      'Express.js',
      'Node.js',
      'React.js',
      'JavaScript',
      'Bootstrap',
      'Git',
    ],
  },
  {
    id: 4,
    title: 'Eco-Volunteers',
    description:
      'Ecovolunteers is a social network dedicated to charities, allowing volunteers to communicate, to meet and to share their accomplishments and experiences. Features including live chat, sharing moments with reactions, donating, and managing clubs and various events. It also incorporated advanced functionalities like an AI chatbot for interaction and a speech recognition bot for hands-free assistance.',
    image: '/images/projects/4.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/dhiabj/Ecovolunteers.git',
    skills: [
      'Mongodb',
      'Express.js',
      'Node.js',
      'React.js',
      'JavaScript',
      'Bootstrap',
      'Redux',
      'Material UI',
      'Git',
    ],
  },
  {
    id: 5,
    title: '4You',
    description:
      '4You is a Web, Desktop and mobile application for a restaurant that offers customers a delivery service and customization for any type of diet. Features including the ability for customers to rate dishes and leave detailed reviews.',
    image: '/images/projects/5.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/dhiabj/4You.git',
    skills: [
      'JavaFx',
      'Java',
      'Symfony',
      'Php',
      'Twig',
      'Bootstrap',
      'Codename One',
      'Git',
    ],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

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
