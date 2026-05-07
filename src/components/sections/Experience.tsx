import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experiences, education } from '../../data';
import { GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const eduRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    itemsRef.current.forEach((item) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });

    if (eduRef.current) {
       gsap.fromTo(
        eduRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: eduRef.current,
            start: "top 85%",
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section id="experience" ref={containerRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        
        <div className="mb-20">
          <h2 className="text-sm font-mono text-[var(--color-primary-base)] uppercase tracking-widest mb-4">Career</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-[var(--text-color)]">Experience</h3>
        </div>

        <div className="flex flex-col mb-16">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              ref={(el) => { if (el) itemsRef.current[idx] = el; }}
              className="group border-t border-[var(--border-color)] py-12 grid md:grid-cols-4 gap-8 hover:bg-[var(--panel-bg)] transition-all duration-300 rounded-lg px-4 -mx-4"
            >
              {/* Timeline Info */}
              <div className="md:col-span-1 md:pr-8">
                <p className="font-mono text-sm text-[var(--text-muted)] mb-2">{exp.period}</p>
                <p className="text-xl font-display font-medium text-[var(--text-color)] mb-1 group-hover:text-[var(--color-primary-base)] transition-colors">{exp.company}</p>
                <p className="text-sm text-[var(--text-muted)]">{exp.location}</p>
              </div>
              
              {/* Details */}
              <div className="md:col-span-3">
                <h4 className="text-2xl font-light text-[var(--text-color)] mb-6">{exp.role}</h4>
                <ul className="space-y-4">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start text-[var(--text-muted)]">
                      <span className="mr-4 text-[var(--color-primary-base)] opacity-80 block mt-1.5">•</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="border-t border-[var(--border-color)]" />
        </div>

        {/* Education Item */}
        <div ref={eduRef}>
          <div className="mb-10">
            <h2 className="text-sm font-mono text-[var(--color-primary-base)] uppercase tracking-widest mb-4 flex items-center gap-2">
              <GraduationCap size={16} /> Education
            </h2>
          </div>
          <div className="group border-t border-[var(--border-color)] py-12 grid md:grid-cols-4 gap-8 hover:bg-[var(--panel-bg)] transition-all duration-300 rounded-lg px-4 -mx-4">
             <div className="md:col-span-1 md:pr-8">
                <p className="font-mono text-sm text-[var(--text-muted)] mb-2">{education[0].period}</p>
                <p className="text-xl font-display font-medium text-[var(--text-color)] mb-1 group-hover:text-[var(--color-primary-base)] transition-colors">{education[0].institution}</p>
                <p className="text-sm text-[var(--text-muted)]">{education[0].location}</p>
             </div>
             <div className="md:col-span-3">
                <h4 className="text-2xl font-light text-[var(--text-color)]">{education[0].degree}</h4>
                <p className="text-[var(--text-muted)] mt-2">GPA {education[0].gpa}</p>
             </div>
          </div>
          <div className="border-t border-[var(--border-color)]" />
        </div>

      </div>
    </section>
  );
}
