import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import { SITE_URL, SITE_DESCRIPTION, SOCIAL_LINKS } from '@/lib/siteConfig';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dhia Bejaoui',
  url: SITE_URL,
  image: `${SITE_URL}/images/hero-image.png`,
  jobTitle: 'Fullstack & Systems Engineer',
  description: SITE_DESCRIPTION,
  sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />
      <div className="container mx-auto flex-1 px-6 pt-14 lg:px-12">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
