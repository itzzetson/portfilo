import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { SectionHeader, ZipReveal } from '../components/MotionPrimitives';
import { ProjectVisual } from '../components/ProjectVisuals';

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="section-container">
        <SectionHeader
          eyebrow="Projects"
          title="Featured Portfolio Work"
          subtitle="Applied projects spanning artificial intelligence, predictive modeling, interactive dashboards, and mobile development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {PROJECTS.map((project, index) => {
            const hasLinks = Boolean(project.githubUrl || project.liveUrl);

            return (
              <ZipReveal
                key={project.id}
                direction="up"
                delay={index * 0.08}
              >
                <article className="glass-card group rounded-2xl overflow-hidden h-full flex flex-col hover:-translate-y-1.5">
                  <ProjectVisual type={project.visualType} />

                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#B7A5F5]">
                          <Layers className="h-3.5 w-3.5 text-[#55A6FF]" />
                          {project.subtitle}
                        </span>
                        <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#55A6FF] transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-white/75">
                      {project.description}
                    </p>

                    {project.highlights && project.highlights.length > 0 && (
                      <ul className="mt-4 space-y-1.5">
                        {project.highlights.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#55A6FF]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Technology Badges */}
                    <div className="mt-5 pt-5 border-t border-[#55A6FF]/15 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[#55A6FF]/25 bg-[#111D3A]/85 px-2.5 py-1 text-xs font-medium text-white/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Render links only when actual URLs are available */}
                    {hasLinks && (
                      <div className="mt-5 flex flex-wrap items-center gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold"
                          >
                            <Github className="h-3.5 w-3.5 text-[#55A6FF]" />
                            <span>GitHub</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              </ZipReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
