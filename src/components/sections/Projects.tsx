import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects, achievements } from '../../data';
import { ArrowUpRight, Award } from 'lucide-react';
import Card from '../ui/Card';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const achieveRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          }
        }
      );
    });

    if (achieveRef.current) {
      gsap.fromTo(
        achieveRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: achieveRef.current,
            start: "top 85%",
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section id="projects" ref={containerRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        
        <div className="mb-20">
          <h2 className="text-sm font-mono text-[var(--color-primary-base)] uppercase tracking-widest mb-4">Work</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-[var(--text-color)]">Selected Projects</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {projects.map((project, idx) => (
            <div key={idx} ref={el => { if (el) cardsRef.current[idx] = el; }} className="h-full">
              <Card className="group hover:border-[var(--color-primary-base)] transition-all duration-300 relative overflow-hidden flex flex-col h-full !p-8">
                <div className="flex justify-between items-start mb-8">
                  <h4 className="text-2xl font-display font-medium text-[var(--text-color)] max-w-[80%] leading-tight group-hover:text-[var(--color-primary-base)] transition-colors">
                    {project.name}
                  </h4>
                  <div className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:bg-[var(--color-primary-base)] group-hover:border-[var(--color-primary-base)] group-hover:text-white transition-all text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-[var(--text-muted)] flex items-start text-sm">
                      <span className="mr-3 text-[var(--color-primary-base)] opacity-80 block mt-1">-</span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-[var(--border-color)]">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-full border border-[var(--border-color)] text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-color)] opacity-70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        {achievements.length > 0 && (
          <div ref={achieveRef} className="p-8 rounded-2xl neon-panel border border-[var(--color-primary-base)] relative overflow-hidden flex flex-col md:flex-row items-center gap-8 justify-between shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-base)] opacity-10 rounded-full blur-[80px] pointer-events-none" />
            <div className="flex-1 z-10">
              <h2 className="text-sm font-mono text-[var(--color-primary-base)] uppercase tracking-widest mb-4 flex items-center gap-2">
                <Award size={16} /> Achievement
              </h2>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-[var(--text-color)] mb-2">
                {achievements[0].title}
              </h3>
              <p className="text-[var(--text-muted)] max-w-2xl text-lg">
                {achievements[0].description}
              </p>
            </div>
            <div className="flex-shrink-0 text-right z-10">
              <p className="text-[var(--color-primary-base)] font-mono text-sm mb-1">{achievements[0].event}</p>
              <p className="text-[var(--text-muted)] text-sm">{achievements[0].location}</p>
              <p className="text-[var(--text-muted)] font-mono text-sm mt-1">{achievements[0].date}</p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
