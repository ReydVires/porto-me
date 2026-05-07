/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Footer from './components/layout/Footer';
import { personalInfo } from './data';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <div className="min-h-screen font-sans selection:bg-[var(--color-primary-base)] selection:bg-opacity-30 selection:text-[var(--text-color)]">
          <Helmet>
            <title>{personalInfo.name} | {personalInfo.role}</title>
            <meta name="description" content={personalInfo.summary} />
            <meta name="keywords" content="Frontend Developer, React, Software Engineer, TypeScript, Logistics, Supply Chain, Jakarta" />
            <meta property="og:title" content={`${personalInfo.name} | ${personalInfo.role}`} />
            <meta property="og:description" content={personalInfo.summary} />
            <meta property="og:type" content="website" />
            <link rel="canonical" href="https://arsyel.dev" />
          </Helmet>

          <Navbar />
          <main>
            <Hero />
            <Experience />
            <Projects />
            <Skills />
          </main>
          <Footer />
        </div>
      </HelmetProvider>
    </ThemeProvider>
  );
}
