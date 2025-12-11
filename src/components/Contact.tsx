import { personalInfo } from '../data/personal';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal text-cream">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-accent font-semibold tracking-wider uppercase text-sm">
          Get in Touch
        </span>
        <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6">
          Let's work <span className="text-accent">together</span>
        </h2>
        <p className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Whether you have a project in mind, want to collaborate, 
          or just want to say hi, feel free to reach out!
        </p>

        {/* Contact options */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-16">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center gap-4 p-6 rounded-2xl bg-charcoal-light border border-cream/10 hover:border-accent/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-cream transition-all">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-left">
              <span className="block text-sm text-cream/50">Email me at</span>
              <span className="font-medium group-hover:text-accent transition-colors">
                {personalInfo.email}
              </span>
            </div>
          </a>

          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 rounded-2xl bg-charcoal-light border border-cream/10 hover:border-accent/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-cream transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div className="text-left">
              <span className="block text-sm text-cream/50">Connect on</span>
              <span className="font-medium group-hover:text-accent transition-colors">
                LinkedIn
              </span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}


