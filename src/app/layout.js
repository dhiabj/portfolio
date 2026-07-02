import './globals.css';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: {
    template: '%s | Dhia Bejaoui',
    default: 'Dhia Bejaoui, Fullstack & Systems Engineer',
  },
  description:
    "Dhia Bejaoui is a fullstack and systems engineer in Tunis who builds live data infrastructure: scraping pipelines, scheduled jobs, and production web apps with Next.js, FastAPI, NestJS, TypeScript and more.",
  metadataBase: new URL('https://dhia-portfolio.vercel.app/'),
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
    'FastAPI',
    'NestJS',
    'Git',
    'Portfolio',
    'Fullstack',
    'Web Developer',
    'Software Engineer',
    'Systems Engineer',
    'Dhia Bejaoui',
  ],
  image: '/images/hero-image.png',
  url: 'https://dhia-portfolio.vercel.app/',
  siteName: 'Dhia Bejaoui',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
