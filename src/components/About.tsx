import { personalInfo, getYearsOfExperience } from '../data/personal';

export function About() {
  const yearsOfExperience = getYearsOfExperience();
  
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-charcoal to-charcoal-light p-8 md:p-12">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <span className="text-cream/40 text-sm font-mono">// about.me</span>
                  <h3 className="font-display text-3xl md:text-4xl text-cream mt-4">
                    Crafting digital experiences with code
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-cream/80">
                    <span className="text-3xl">📍</span>
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-4 text-cream/80">
                    <span className="text-3xl">🎓</span>
                    <span>Computer Science background</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full -z-10" />
          </div>

          {/* Content side */}
          <div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-4 mb-8">
              Passionate about building
              <span className="text-accent"> great products</span>
            </h2>
            
            <div className="space-y-6 text-charcoal/70 text-lg">
              {personalInfo.about.long.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <StatCard number={`${yearsOfExperience}+`} label="Years of Experience" />
              <StatCard number="3" label="Top Tech Companies" />
              <StatCard number="50M+" label="Users Impacted" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center p-4 rounded-2xl bg-cream-dark/50">
      <span className="block text-3xl md:text-4xl font-bold text-accent">
        {number}
      </span>
      <span className="text-sm text-charcoal/60 mt-1 block">{label}</span>
    </div>
  );
}

