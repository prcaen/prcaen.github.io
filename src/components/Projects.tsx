import { useState } from 'react';
import { projects, categories } from '../data/projects';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-charcoal/60 mt-4 max-w-2xl mx-auto">
            A collection of projects I've built, from open-source tools to side experiments.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category.id
                  ? 'bg-charcoal text-cream'
                  : 'bg-charcoal/5 text-charcoal hover:bg-charcoal/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects grid - Bento style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={project.featured && index < 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured
}: {
  project: typeof projects[0];
  featured: boolean;
}) {
  return (
    <article
      className={`group relative rounded-3xl bg-gradient-to-br from-cream-dark/80 to-cream-dark/30 p-6 md:p-8 border border-charcoal/5 hover:border-accent/20 transition-all hover:-translate-y-1 ${
        featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {/* Category badge */}
      <div className="flex items-center justify-between mb-6">
        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-charcoal/5 text-charcoal/60 rounded-full">
          {project.category.replace('-', ' ')}
        </span>
        {project.featured && (
          <span className="flex items-center gap-1 text-xs text-accent font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Featured
          </span>
        )}
      </div>

      {/* Project content */}
      <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-charcoal/60 mb-6 leading-relaxed">
        {project.longDescription || project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs font-medium bg-charcoal/5 text-charcoal/70 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-auto">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-charcoal/70 hover:text-accent transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Code
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-charcoal/70 hover:text-accent transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Demo
          </a>
        )}
        {project.links.article && (
          <a
            href={project.links.article}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-charcoal/70 hover:text-accent transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Article
          </a>
        )}
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all -z-10" />
    </article>
  );
}

