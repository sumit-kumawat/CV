
import React from 'react';
import Section from './Section';
import { projects } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div 
    className="group bg-white/40 backdrop-blur-md rounded-[2.5rem] p-8 shadow-xl border border-white/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col h-full relative overflow-hidden perspective-1000"
  >
    {/* Top colored accent */}
    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/40 via-primary to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="mb-8 flex items-start justify-between">
        <div className="w-20 h-20 bg-white rounded-3xl p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg border border-neutral-100 group-hover:border-primary/20">
            <project.icon className="w-full h-full object-contain filter drop-shadow-md" />
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
            <div className="p-3 bg-primary/10 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
        </div>
    </div>

    <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight">
        {project.title}
    </h3>
    
    <p className="text-neutral-600 text-base leading-relaxed mb-8 flex-grow">
        {project.description}
    </p>

    <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag, idx) => (
            <span key={idx} className="px-4 py-1.5 bg-white/50 text-neutral-600 text-xs font-semibold rounded-full border border-neutral-200 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300">
                {tag}
            </span>
        ))}
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Key Projects & Achievements" className="bg-neutral-50 relative overflow-hidden">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2 md:px-0 relative z-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
