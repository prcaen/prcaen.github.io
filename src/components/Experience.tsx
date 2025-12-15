import { experiences } from '../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-charcoal dark:bg-charcoal-light text-cream transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Career Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            Experience <span className="text-accent">Timeline</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cream/20 md:-translate-x-px" />

          {/* Experience cards */}
          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
  index
}: {
  experience: typeof experiences[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full md:-translate-x-1.5 z-10 ring-4 ring-charcoal dark:ring-charcoal-light" />

      {/* Date badge (mobile) */}
      <div className="md:hidden absolute left-10 top-0 text-sm text-cream/50">
        {experience.startDate} — {experience.endDate}
      </div>

      {/* Date badge (desktop) - positioned next to the timeline dot */}
      <div 
        className={`hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 text-sm font-medium text-cream/60 whitespace-nowrap ${
          isEven ? 'translate-x-4' : '-translate-x-full -ml-4'
        }`}
      >
        {experience.startDate} — {experience.endDate}
      </div>

      {/* Content */}
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
        <div className="group relative p-6 md:p-8 rounded-2xl bg-charcoal-light/50 border border-cream/10 hover:border-accent/30 transition-all">
          {/* Company logo */}
          <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-white flex items-center justify-center p-3 shadow-lg">
            {experience.logo ? (
              <img 
                src={experience.logo} 
                alt={`${experience.company} logo`}
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-2xl font-bold text-accent">{experience.company[0]}</span>
            )}
          </div>

          <div className="mb-4 mt-2 md:mt-0">
            <h3 className="text-xl md:text-2xl font-bold text-cream group-hover:text-accent transition-colors">
              {experience.title}
            </h3>
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-accent transition-colors"
            >
              {experience.company}
              <span className="text-cream/40"> · {experience.location}</span>
            </a>
          </div>

          <p className="text-cream/70 mb-6">{experience.description}</p>

          <ul className="space-y-3 mb-6">
            {experience.missions.map((mission, i) => (
              <li key={i} className="flex items-start gap-3 text-cream/60">
                <span className="text-accent mt-1">▹</span>
                <span>{mission}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block w-1/2" />
    </div>
  );
}

