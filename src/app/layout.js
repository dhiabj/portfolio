import './globals.css';
import { DM_Sans, IBM_Plex_Mono } from 'next/font/google';
import MotionProvider from './components/MotionProvider';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/siteConfig';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport = {
  themeColor: '#F6F7F9',
};

export const metadata = {
  title: {
    template: '%s | Dhia Bejaoui',
    default: 'Dhia Bejaoui, Fullstack & Systems Engineer',
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
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
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: SITE_NAME,
    title: 'Dhia Bejaoui, Fullstack & Systems Engineer',
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhia Bejaoui, Fullstack & Systems Engineer',
    description: SITE_DESCRIPTION,
    images: ['/images/og.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${ibmPlexMono.variable} font-sans`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
