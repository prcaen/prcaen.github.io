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
          <h2 className="font-display text-4xl md:text-5xl text-charcoal dark:text-cream mt-4">
            Projects & <span className="text-accent">Apps</span>
          </h2>
          <p className="text-charcoal/60 dark:text-cream/60 mt-4 max-w-2xl mx-auto">
            Android apps, websites, and open-source projects I've built.
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
                  ? 'bg-charcoal dark:bg-cream text-cream dark:text-charcoal'
                  : 'bg-charcoal/5 dark:bg-cream/10 text-charcoal dark:text-cream hover:bg-charcoal/10 dark:hover:bg-cream/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            if (project.category === 'android-app') {
              return <AppCard key={project.id} project={project} />;
            }
            if (project.category === 'website') {
              return <WebsiteCard key={project.id} project={project} />;
            }
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
}

// Get primary link for a project
function getPrimaryLink(project: typeof projects[0]): string | undefined {
  return project.links.playStore || project.links.website || project.links.github || project.links.demo || project.links.article;
}

// Special card for Android apps with screenshot
function AppCard({ project }: { project: typeof projects[0] }) {
  const primaryLink = getPrimaryLink(project);
  const hasLink = !!primaryLink;

  const CardWrapper = hasLink ? 'a' : 'div';
  const cardProps = hasLink ? {
    href: primaryLink,
    target: "_blank",
    rel: "noopener noreferrer",
  } : {};

  return (
    <CardWrapper
      {...cardProps}
      className={`group block relative rounded-3xl bg-gradient-to-br from-charcoal to-charcoal-light overflow-hidden border border-charcoal/10 transition-all ${hasLink ? 'hover:border-accent/30 hover:-translate-y-1 cursor-pointer' : ''}`}
    >
      {/* Screenshot area */}
      <div className="relative h-96 md:h-[450px] overflow-hidden bg-gradient-to-br from-charcoal-light to-charcoal">
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl opacity-20">📱</span>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        
        {/* App icon */}
        {project.icon && (
          <div className="absolute top-4 left-4 w-14 h-14 rounded-2xl bg-white shadow-lg p-2 flex items-center justify-center" style={{ backgroundColor: project.iconBackgroundColor }}>
            <img
              src={project.icon}
              alt={`${project.title} icon`}
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {/* Play Store badge */}
        {project.links.playStore && (
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-charcoal group-hover:bg-accent group-hover:text-white transition-colors flex items-center gap-1.5">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a2.272 2.272 0 0 1-.96-1.852V3.666c0-.724.343-1.37.96-1.852zm.682-.632L15.627 9.14l-3.018 3.017L4.29 1.182zm-.682 21.636l8.32-10.977 3.017 3.018-10.376 7.959zm15.304-13.04l2.537 1.384a1.89 1.89 0 0 1 0 3.276l-2.537 1.384-3.54-3.022 3.54-3.022z"/>
            </svg>
            Play Store
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-cream mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-cream/60 text-sm line-clamp-2">
          {project.description}
        </p>
        
        {/* Downloads and Rating */}
        {(project.downloads || project.rating) && (
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-cream/10">
            {project.downloads && (
              <div className="flex items-center gap-1.5 text-cream/70 text-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>{project.downloads}</span>
              </div>
            )}
            {project.rating && (
              <div className="flex items-center gap-1.5 text-cream/70 text-sm">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{project.rating.toFixed(1)}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </CardWrapper>
  );
}

// Website card with screenshot
function WebsiteCard({ project }: { project: typeof projects[0] }) {
  const primaryLink = getPrimaryLink(project);
  const hasLink = !!primaryLink;

  const CardWrapper = hasLink ? 'a' : 'div';
  const cardProps = hasLink ? {
    href: primaryLink,
    target: "_blank",
    rel: "noopener noreferrer",
  } : {};

  return (
    <CardWrapper
      {...cardProps}
      className={`group block relative rounded-3xl bg-gradient-to-br from-cream-dark to-cream dark:from-charcoal-light dark:to-charcoal overflow-hidden border border-charcoal/10 dark:border-cream/10 transition-all ${hasLink ? 'hover:border-accent/30 hover:-translate-y-1 cursor-pointer' : ''}`}
    >
      {/* Screenshot area */}
      <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-cream-dark to-cream dark:from-charcoal-light dark:to-charcoal">
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-charcoal/5 dark:bg-cream/5">
            <span className="text-6xl opacity-20">🌐</span>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cream dark:from-charcoal via-cream/30 dark:via-charcoal/30 to-transparent" />

        {/* Website badge */}
        {project.links.website && (
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-charcoal/90 backdrop-blur-sm rounded-full text-xs font-semibold text-cream group-hover:bg-accent transition-colors flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            Visit
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-charcoal dark:text-cream mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-charcoal/60 dark:text-cream/60 text-sm line-clamp-2">
          {project.description}
        </p>
      </div>
    </CardWrapper>
  );
}

// Regular project card (open-source, tools)
function ProjectCard({ project }: { project: typeof projects[0] }) {
  const primaryLink = getPrimaryLink(project);
  const hasLink = !!primaryLink;

  const CardWrapper = hasLink ? 'a' : 'div';
  const cardProps = hasLink ? {
    href: primaryLink,
    target: "_blank",
    rel: "noopener noreferrer",
  } : {};

  return (
    <CardWrapper
      {...cardProps}
      className={`group block relative rounded-3xl bg-gradient-to-br from-cream-dark/80 to-cream-dark/30 dark:from-charcoal-light/80 dark:to-charcoal-light/30 p-6 md:p-8 border border-charcoal/5 dark:border-cream/5 transition-all ${hasLink ? 'hover:border-accent/20 hover:-translate-y-1 cursor-pointer' : ''}`}
    >
      {/* Category badge */}
      <div className="flex items-center justify-between mb-6">
        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-charcoal/5 dark:bg-cream/10 text-charcoal/60 dark:text-cream/60 rounded-full">
          {project.category.replace('-', ' ')}
        </span>
        {project.links.github && (
          <span className="flex items-center gap-1.5 text-xs text-charcoal/50 dark:text-cream/50 font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </span>
        )}
      </div>

      {/* Project content */}
      <h3 className="text-xl md:text-2xl font-bold text-charcoal dark:text-cream mb-3 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-charcoal/60 dark:text-cream/60 leading-relaxed">
        {project.description}
      </p>

      {/* Hover effect */}
      {hasLink && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all -z-10" />
      )}
    </CardWrapper>
  );
}
