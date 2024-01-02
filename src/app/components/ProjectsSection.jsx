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
      'A social network called Campside is devoted to those who enjoy camping. The platform attempts to make sharing and finding camping locations easier. On the site, users can interact with each other, exchange experiences, and post in forums. Campside offers a social hub for campers, encouraging a community built around outdoor adventures. The goal is to establish a user-friendly space where people who are passionate about camping can communicate and share knowledge.',
    image: '/images/projects/1.png',
    tag: ['All', 'Web'],
  },
  {
    id: 2,
    title: 'Eco-Volunteers',
    description:
      'A social network called EcoVolunteers was created to let volunteers engaged in humanitarian action communicate with one another. The platform gives volunteers a place to meet, communicate, and exchange accomplishments and experiences. Members can converse about their charity endeavors in forums, creating a community that is committed to having a beneficial influence. With the goal of fostering a positive atmosphere for individuals committed to giving back, EcoVolunteers seeks to improve cooperation and communication within the nonprofit sector.',
    image: '/images/projects/2.png',
    tag: ['All', 'Web'],
  },
  {
    id: 3,
    title: 'Client portal redesign',
    description:
      "Since its founding in 2011, Front Row, a well-known participant in the technology, information, and internet sector, has been a crucial business partner for well-known companies. I was in charge of the company's client portal page makeover during my internship. I was able to deliver a redesigned portal by carefully examining the current design, working with the development team, and getting user feedback. The end result was an interface that was easier to use and more aesthetically pleasing, which greatly improved our clients' online experiences.",
    image: '/images/projects/3.png',
    tag: ['All', 'Web'],
  },
  {
    id: 4,
    title: '4You',
    description:
      "The goal of the cross-platform project 4You, which was created for a restaurant, is to provide patrons the option to customize their orders based on various dietary requirements and receive a delivery service. As part of my role in the project, I helped build it with the goal of giving users a smooth, integrated experience. Functionality and adaptability are prioritized so that patrons can take advantage of the restaurant's offerings in a way that best meets their unique dietary needs.",
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
