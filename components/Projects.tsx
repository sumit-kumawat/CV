
import React from 'react';
import Section from './Section';
import { projects } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 hover:shadow-2xl hover:shadow-neutral-200/50 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative overflow-hidden">
    {/* Top colored accent */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-primary"></div>
    
    <div className="mb-8 flex items-start justify-between">
        <div className="w-16 h-16 bg-neutral-50 rounded-2xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-neutral-100 group-hover:border-primary/20 group-hover:bg-white">
            <project.icon className="w-full h-full object-contain drop-shadow-sm" />
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </div>
    </div>

    <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary transition-colors duration-300">
        {project.title}
    </h3>
    
    <p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow">
        {project.description}
    </p>

    <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 bg-neutral-50 text-neutral-500 text-xs font-medium rounded-full border border-neutral-100 group-hover:border-primary/20 group-hover:text-primary/80 transition-colors duration-300">
                {tag}
            </span>
        ))}
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Key Projects & Achievements" className="bg-white">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-0">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
