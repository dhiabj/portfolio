import './globals.css';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/siteConfig';

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
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
