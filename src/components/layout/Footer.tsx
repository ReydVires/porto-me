import { personalInfo } from '../../data';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="pt-32 pb-12 relative border-t border-[var(--border-color)]">
      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-medium text-[var(--text-color)] tracking-tight mb-8">
               Let's build <br />
               <span className="text-[var(--text-muted)]">together.</span>
            </h2>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-4 text-2xl font-light text-[var(--color-primary-base)] hover:text-[var(--color-primary-dark-base)] transition-colors group"
            >
              {personalInfo.email}
              <div className="w-12 h-12 rounded-full border border-[var(--color-primary-base)] opacity-80 flex items-center justify-center group-hover:bg-[var(--color-primary-base)] group-hover:text-white transition-all shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                 <ArrowUpRight size={24} />
              </div>
            </a>
          </div>

          <div className="flex md:justify-end items-end">
            <div className="space-y-6 text-[var(--text-muted)]">
               <div>
                 <p className="text-[var(--text-color)] font-medium mb-1">Location</p>
                 <p className="font-mono text-sm">{personalInfo.location}</p>
               </div>
               <div className="flex gap-6 pt-4">
                 <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-[var(--color-primary-base)] transition-colors">
                   LinkedIn
                 </a>
                 <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-[var(--color-primary-base)] transition-colors">
                   GitHub
                 </a>
               </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-mono text-[var(--text-muted)] pt-8 border-t border-[var(--border-color)]">
          <p>© {new Date().getFullYear()} {personalInfo.name}</p>
        </div>

      </div>
    </footer>
  );
}
