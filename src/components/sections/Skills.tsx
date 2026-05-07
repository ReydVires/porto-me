import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../../data';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Marquee animation
    gsap.to(".marquee-content", {
      xPercent: -50,
      ease: "none",
      duration: 30,
      repeat: -1,
    });

    gsap.from(".skill-chip", {
      scrollTrigger: {
        trigger: ".skills-grid",
        start: "top 80%",
      },
      y: 20,
      opacity: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: "back.out(1.5)"
    });
  }, { scope: containerRef });

  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.technologies
  ];

  return (
    <section id="skills" ref={containerRef} className="py-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-primary-base)] opacity-5 via-transparent to-transparent pointer-events-none" />
      
      {/* Skill Marquee */}
      <div className="flex whitespace-nowrap overflow-hidden py-12 mb-20 border-y border-[var(--border-color)] bg-[var(--panel-bg)]">
        <div className="marquee-content inline-flex gap-8 items-center px-4">
          {[...allSkills, ...allSkills, ...allSkills].map((skill, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-4xl md:text-6xl font-display font-light text-[var(--text-muted)] opacity-50 uppercase tracking-tight">
                {skill}
              </span>
              <span className="w-3 h-3 bg-[var(--color-primary-base)] opacity-30 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 skills-grid">
          <div>
            <h4 className="text-[var(--text-color)] font-display font-medium text-xl mb-6 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--color-primary-base)]" />
              Languages
            </h4>
            <div className="space-y-3">
              {skills.languages.map((skill, i) => (
                <div key={i} className="skill-chip block text-[var(--text-muted)] group relative pl-4 hover:text-[var(--text-color)] transition-colors duration-300">
                   <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[var(--color-primary-base)] opacity-50 group-hover:opacity-100 transition-colors rounded-full" />
                   {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[var(--text-color)] font-display font-medium text-xl mb-6 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--color-primary-base)]" />
              Frameworks
            </h4>
            <div className="space-y-3 flex flex-wrap gap-x-8 gap-y-3">
              {skills.frameworks.map((skill, i) => (
                <div key={i} className="skill-chip block w-[calc(50%-1rem)] text-[var(--text-muted)] group relative pl-4 hover:text-[var(--text-color)] transition-colors duration-300">
                   <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[var(--color-primary-base)] opacity-50 group-hover:opacity-100 transition-colors rounded-full" />
                   {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[var(--text-color)] font-display font-medium text-xl mb-6 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--color-primary-base)]" />
              Technologies
            </h4>
            <div className="space-y-3">
              {skills.technologies.map((skill, i) => (
                <div key={i} className="skill-chip block text-[var(--text-muted)] group relative pl-4 hover:text-[var(--text-color)] transition-colors duration-300">
                   <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[var(--color-primary-base)] opacity-50 group-hover:opacity-100 transition-colors rounded-full" />
                   {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
