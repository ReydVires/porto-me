import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { personalInfo } from '../../data';
import { Github, Linkedin, Mail } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Intro animation
    tl.fromTo(
      ".hero-text-element",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
    );
    
    tl.fromTo(
      ".hero-shape",
      { scale: 0, opacity: 0, rotation: -45 },
      { scale: 1, opacity: 0.8, rotation: 0, duration: 1.5, stagger: 0.2, ease: "back.out(1.5)" },
      "-=0.5"
    );

    // Mouse parallax for shapes
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      
      gsap.to(".hero-shape", {
        x: x,
        y: y,
        duration: 1,
        ease: "power2.out",
        stagger: 0.05
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="min-h-screen relative flex items-center pt-20 overflow-hidden"
      id="home"
    >
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-[var(--color-primary-base)] opacity-10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-primary-light-base)] opacity-10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left: Text Content */}
        <div ref={textRef} className="max-w-2xl">
          <p className="hero-text-element text-[var(--color-primary-base)] font-mono text-sm tracking-widest uppercase mb-4 pl-1">
            {personalInfo.location}
          </p>
          <h1 className="hero-text-element font-display text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-[var(--text-color)]">
            Hi, I'm <br />
            <span className="neon-text text-[var(--color-primary-base)]">Arsyel.</span>
          </h1>
          <h2 className="hero-text-element text-2xl md:text-3xl text-[var(--text-muted)] font-light mb-8">
            {personalInfo.role}
          </h2>
          <p className="hero-text-element text-[var(--text-muted)] leading-relaxed max-w-xl text-lg mb-10">
            {personalInfo.summary.split('. ')[0] + '.'} Building scalable web platforms with precision and code quality.
          </p>
          
          <div className="hero-text-element flex items-center gap-4">
            <a href="#contact">
              <Button variant="primary">Get in touch</Button>
            </a>
            <div className="flex gap-2 ml-4">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--color-primary-base)] hover:border-[var(--color-primary-base)] transition-all">
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--color-primary-base)] hover:border-[var(--color-primary-base)] transition-all">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--color-primary-base)] hover:border-[var(--color-primary-base)] transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Abstract Graphics */}
        <div ref={shapesRef} className="hidden lg:block relative h-[600px] w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Circle */}
            <div className="hero-shape absolute w-[300px] h-[300px] rounded-full border-[1px] border-[var(--color-primary-base)] opacity-50 shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
            
            {/* Square rotated */}
            <div className="hero-shape absolute w-[250px] h-[250px] border-[1px] border-[var(--color-primary-light-base)] opacity-30 rotate-12 shadow-[0_0_15px_rgba(147,197,253,0.3)]" />
            
            {/* Glass panel */}
            <div className="hero-shape absolute w-[280px] h-[320px] neon-panel rounded-2xl rotate-[-8deg] flex items-center justify-center p-8">
              <div className="text-left w-full">
                <div className="font-mono text-[var(--color-primary-base)] text-xs mb-2">{'<Code />'}</div>
                <div className="text-[var(--text-color)] font-display text-4xl font-bold">5+</div>
                <div className="text-[var(--text-muted)] text-sm mt-1">Years of<br />Experience</div>
              </div>
            </div>

            {/* Floating dots array */}
            <div className="hero-shape absolute w-32 h-32 right-10 top-20 grid grid-cols-4 gap-2 opacity-30">
               {Array.from({length: 16}).map((_, i) => (
                 <div key={i} className="w-1 h-1 bg-[var(--text-muted)] rounded-full" />
               ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
