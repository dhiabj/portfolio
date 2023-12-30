'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Campside',
    description:
      'Campside is a social network dedicated to camping enthusiasts. The platform aims to simplify the process of sharing and discovering camping spots. Users can communicate, share experiences, and contribute to forums on the platform. Campside provides a space for campers to connect, fostering a community centered around outdoor experiences. The focus is on creating a user-friendly environment for individuals who share a passion for camping to interact and exchange information.',
    image: '/images/projects/1.png',
    tag: ['All', 'Web'],
  },
  {
    id: 2,
    title: 'Eco-Volunteers',
    description:
      'EcoVolunteers is a social network designed to facilitate communication among volunteers involved in charitable activities. The platform provides a space for volunteers to connect, meet, and share their experiences and achievements. Through forums, members can engage in discussions related to their charitable work, fostering a community focused on making a positive impact. EcoVolunteers aims to enhance collaboration and communication within the charitable sector, creating a supportive environment for those dedicated to giving back.',
    image: '/images/projects/2.png',
    tag: ['All', 'Web'],
  },
  {
    id: 3,
    title: 'Client portal redesign',
    description:
      'Front Row, a prominent player in the Technology, Information, and Internet industry, has been a key partner for leading brands since its inception in 2011. During my internship with the company, I spearheaded the redesign of our client portal page. Through a thorough analysis of the existing design, collaboration with the development team, and solicitation of user feedback, I successfully delivered a revamped portal. The result was a more user-friendly and visually appealing interface, contributing significantly to an enhanced online experience for our clients.',
    image: '/images/projects/3.png',
    tag: ['All', 'Web'],
  },
  {
    id: 4,
    title: '4You',
    description:
      "4You is a cross-platform project designed for a restaurant, focusing on providing customers with a delivery service and the ability to customize orders according to different dietary preferences. My involvement in the project included contributing to its development, aiming to create a seamless and integrated system for users. The emphasis is on functionality and flexibility, allowing customers to enjoy the restaurant's offerings in a way that suits their individual dietary requirements.",
    image: '/images/projects/4.png',
    tag: ['All', 'Mobile'],
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
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
