import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ThemeToggle from '../ui/ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "nav",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  });

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--panel-bg)] backdrop-blur-md border-b border-[var(--border-color)] py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-display font-bold tracking-tight text-[var(--text-color)]">
          A<span className="text-[var(--color-primary-base)]">.</span>A
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a 
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium border border-[var(--border-color)] rounded-full text-[var(--text-color)] hover:border-[var(--color-primary-base)] hover:text-[var(--color-primary-base)] transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-primary-base)] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_var(--color-primary-base)]" />
    </a>
  );
}

