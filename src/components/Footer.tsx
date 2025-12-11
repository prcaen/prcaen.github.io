import { personalInfo } from '../data/personal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-cream/10 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-xl text-cream">
            {personalInfo.name.split(' ')[0]}
            <span className="text-accent">.</span>
          </span>

          <p className="text-cream/40 text-sm text-center">
            © {currentYear} {personalInfo.name}. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

