'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const SKILL_BADGES = [
  {
    label: 'Next.js',
    className: 'bg-zinc-900 text-zinc-100',
  },
  {
    label: 'Node.js',
    className: 'bg-emerald-900 text-emerald-100',
  },
  {
    label: 'JavaScript',
    className: 'bg-blue-200 text-blue-700',
  },
  {
    label: 'React',
    className: 'bg-teal-200 text-teal-800',
  },
  {
    label: 'Vue.js',
    className: 'bg-purple-200 text-purple-700',
  },
  {
    label: 'Redux',
    className: 'bg-cyan-200 text-cyan-800',
  },
  {
    label: 'Pinia',
    className: 'bg-lime-200 text-lime-900',
  },
  {
    label: 'TypeScript',
    className: 'bg-emerald-200 text-emerald-900',
  },
  {
    label: 'Tailwind CSS',
    className: 'bg-rose-200 text-rose-800',
  },
  {
    label: 'MongoDB',
    className: 'bg-amber-200 text-amber-800',
  },
  {
    label: 'HTML5',
    className: 'bg-orange-200 text-orange-800',
  },
  {
    label: 'CSS3',
    className: 'bg-sky-200 text-sky-800',
  },
  {
    label: 'Git',
    className: 'bg-red-200 text-red-800',
  },
  {
    label: 'MySQL',
    className: 'bg-indigo-200 text-indigo-800',
  },
  {
    label: 'PostgreSQL',
    className: 'bg-blue-300 text-blue-900',
  },
  {
    label: 'Firebase',
    className: 'bg-yellow-200 text-yellow-900',
  },
  {
    label: 'PHP',
    className: 'bg-violet-200 text-violet-800',
  },
  {
    label: 'NestJS',
    className: 'bg-pink-200 text-pink-800',
  },
  {
    label: 'Symfony',
    className: 'bg-slate-300 text-slate-900',
  },
];

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <div className="flex flex-wrap gap-4">
        {SKILL_BADGES.map((badge) => (
          <span
            key={badge.label}
            className={`${badge.className} rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:shadow-md`}>
            {badge.label}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Private High School of Engineering and Technologies (ESPRIT)</li>
        <li>Higher Institute of Applied Sciences and Technology of Mateur (ISSATM)</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="about" priority />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full-stack developer with a passion for creating interactive and responsive web
            applications. I have experience working with JavaScript, TypeScript, React, React
            Native, Redux, Node.js, Symfony, MongoDB, HTML, CSS, Tailwind CSS, and Git. I am a quick
            learner, always looking to expand my knowledge and skill set. As a team player, I am
            excited to collaborate with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
              {' '}
              Education{' '}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
