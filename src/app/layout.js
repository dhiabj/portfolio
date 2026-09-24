import './globals.css';
import { DM_Sans, IBM_Plex_Mono } from 'next/font/google';
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

// Direction contract, recorded at concept lock, seed key 7638c560.
// Authored directly in the root layout so it survives the production
// build as the literal first child of <body>. See CLAUDE.md / DESIGN.md.
const DIRECTION_CONTRACT = `<!--
THESIS: the portfolio is a literal systems diagram, not a page describing
systems; visitors read the mechanism directly instead of being told about it.
OWN-WORLD: paper-white graph-paper canvas, graphite ink linework, one indigo
accent for live status and action; DM Sans for reading, IBM Plex Mono for
every measured value; node-boxes with corner ID badges are the one repeating
container.
STORY: a recruiter or client sees the actual pipeline Dhia ships (schedule,
ingest, API, interface, with the retry/alert loop that keeps it running),
then each project's own real diagram, then reaches him with confidence.
FIRST VIEWPORT: headline, one-line bio and CTAs top-left, then the About
node (N01); the full-width animated pipeline diagram (fig. 1, legend beneath,
nodes labeled, edges drawing in on scroll) follows directly below it.
FORM: Systems Diagram (Data-Flow), candidate 1 of 7 grounded directions,
seed key 7638c560.
FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying
its provenance
-->`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${ibmPlexMono.variable} font-sans`}>
        <div
          style={{ display: 'none' }}
          dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }}
        />
        {children}
      </body>
    </html>
  );
}
