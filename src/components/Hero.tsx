import { personalInfo, getYearsOfExperience } from '../data/personal';

export function Hero() {
  const yearsOfExperience = getYearsOfExperience();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-12">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-[0.03]">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {personalInfo.availability.status === 'open' && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6 opacity-0 animate-fade-up">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-charcoal/80">
                  {personalInfo.availability.message}
                </span>
              </div>
            )}

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.1] mb-6 opacity-0 animate-fade-up stagger-1">
              Hi, I'm{' '}
              <span className="text-accent relative">
                {personalInfo.name.split(' ')[0]}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8.5C50 2.5 150 2.5 198 8.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="block mt-2 text-charcoal/60 text-3xl md:text-4xl lg:text-5xl">
                {personalInfo.title}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-charcoal/60 max-w-xl mx-auto lg:mx-0 mb-6 opacity-0 animate-fade-up stagger-2">
              {personalInfo.about.short}
            </p>

            {/* Quick info badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 opacity-0 animate-fade-up stagger-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal/5 rounded-full text-sm font-medium text-charcoal/70">
                <span>📍</span> {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal/5 rounded-full text-sm font-medium text-charcoal/70">
                <span>💼</span> {yearsOfExperience}+ years
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal/5 rounded-full text-sm font-medium text-charcoal/70">
                <span>🚀</span> 50M+ users impacted
              </span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-fade-up stagger-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-cream font-semibold rounded-full hover:bg-accent transition-all hover:scale-105 active:scale-95"
              >
                Get in touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-charcoal/20 text-charcoal font-semibold rounded-full hover:border-accent hover:text-accent transition-all"
              >
                View experience
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-10 justify-center lg:justify-start opacity-0 animate-fade-up stagger-4">
              {Object.entries(personalInfo.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-charcoal/5 hover:bg-accent hover:text-cream transition-all hover:scale-110"
                  aria-label={platform}
                >
                  <SocialIcon platform={platform} />
                </a>
              ))}
            </div>
          </div>

          {/* Avatar / Visual */}
          <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-fade-up">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 p-1">
                <div className="w-full h-full rounded-3xl bg-cream flex items-center justify-center overflow-hidden">
                  <img
                    src="/me.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-white rounded-xl shadow-lg animate-float">
                <span className="text-2xl">🤖</span>
                <span className="text-sm font-medium ml-2 inline-block">Android</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-white rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">⚡</span>
                <span className="text-sm font-medium ml-2">Kotlin</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center opacity-0 animate-fade-in stagger-6">
          <div className="flex flex-col items-center gap-2 text-charcoal/40">
            <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
            <div className="w-5 h-8 border-2 border-current rounded-full flex justify-center pt-1">
              <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center p-4 rounded-2xl bg-charcoal/5">
      <span className="block text-2xl md:text-3xl font-bold text-accent">
        {number}
      </span>
      <span className="text-xs md:text-sm text-charcoal/60 mt-1 block">{label}</span>
    </div>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  switch (platform) {
    case 'github':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'medium':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      );
    default:
      return null;
  }
}
