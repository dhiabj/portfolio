import ToastProvider from './components/ToastProvider';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: '%s | Dhia Bejaoui Portfolio',
    default: 'Dhia Bejaoui Portfolio',
  },
  description:
    "Welcome to Dhia Bejaoui's portfolio. Explore projects, skills, and experiences in full-stack web development, including JavaScript, TypeScript, React, Redux, Node.js, Express.js, MongoDB, HTML, CSS, Git and more!.",
  metadataBase: new URL('https://www.dhiabejaoui.com/'),
  keywords: [
    'Next.js',
    'React.js',
    'JavaScript',
    'TypeScript',
    'JAVA',
    'HTML5',
    'CSS3',
    'SASS',
    'PHP',
    'SQL',
    'Symfony',
    'Redux',
    'React Native',
    'Tailwind CSS',
    'Angular',
    'Firebase',
    'Spring Boot',
    'MongoDB',
    'Express.js',
    'Node.js',
    'Git',
    'Portfolio',
    'Fullstack',
    'Web Developer',
    'Software Engineer',
    'Dhia Bejaoui',
  ],
  image: '/images/hero-image.png',
  url: 'https://www.dhiabejaoui.com/',
  siteName: 'Dhia Bejaoui Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
