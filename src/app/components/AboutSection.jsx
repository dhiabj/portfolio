'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <div className="flex flex-wrap gap-4">
        <Image
          src="/images/tech/nodejs.png"
          width={50}
          height={50}
          alt="nodejs"
        />
        <Image
          src="/images/tech/javascript.png"
          width={50}
          height={50}
          alt="javascript"
        />
        <Image
          src="/images/tech/reactjs.png"
          width={50}
          height={50}
          alt="reactjs"
        />
        <Image
          src="/images/tech/redux.png"
          width={50}
          height={50}
          alt="redux"
        />
        <Image
          src="/images/tech/typescript.png"
          width={50}
          height={50}
          alt="typescript"
        />
        <Image
          src="/images/tech/tailwind.png"
          width={50}
          height={50}
          alt="tailwind"
        />
        <Image
          src="/images/tech/mongodb.png"
          width={50}
          height={50}
          alt="mongodb"
        />
        <Image src="/images/tech/html.png" width={50} height={50} alt="html" />
        <Image src="/images/tech/css.png" width={50} height={50} alt="css" />
        <Image
          src="/images/tech/angular.png"
          width={50}
          height={50}
          alt="angular"
        />
        <Image src="/images/tech/git.png" width={50} height={50} alt="git" />
        <Image
          src="/images/tech/mysql.png"
          width={50}
          height={50}
          alt="mysql"
        />
        <Image
          src="/images/tech/spring.png"
          width={50}
          height={50}
          alt="spring"
        />
        <Image
          src="/images/tech/firebase.png"
          width={50}
          height={50}
          alt="spring"
        />
        <Image
          src="/images/tech/symfony.png"
          width={50}
          height={50}
          alt="spring"
        />
      </div>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Private High School of Engineering and Technologies (ESPRIT)</li>
        <li>
          Higher Institute of Applied Sciences and Technology of Mateur (ISSATM)
        </li>
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
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about"
          priority
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, TypeScript, React, Redux, Node.js, Express,
            MongoDB, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}>
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}>
              {' '}
              Education{' '}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
