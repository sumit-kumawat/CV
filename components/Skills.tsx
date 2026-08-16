import React from 'react';
import { skillCategories } from '../constants';
import { Layers } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-neutral-50/80 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-xs md:text-sm font-bold text-primary mb-4">
            <Layers className="w-4 h-4" />
            <span className="uppercase tracking-wider">Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Enterprise-grade technologies and platforms leveraged to design resilient virtualized environments, automate cloud workflows, and harden security postures.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12 max-w-7xl mx-auto">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Category Header with Accent */}
              <div className="mb-8 pb-4 border-b border-neutral-100 flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-neutral-500 text-xs sm:text-sm mt-1">
                    {category.description}
                  </p>
                </div>
                <div className="shrink-0 text-xs font-semibold text-neutral-400">
                  {category.skills.length} Technologies
                </div>
              </div>
              
              {/* Skills Tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="group flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-neutral-50/70 border border-neutral-200/70 hover:bg-white hover:border-primary/40 hover:shadow-md transition-all duration-200 cursor-default"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 flex items-center justify-center filter drop-shadow-sm group-hover:scale-110 transition-transform duration-200">
                      <skill.icon className="w-full h-full object-contain" />
                    </div>
                    <span className="font-semibold text-neutral-800 text-xs sm:text-[13px] text-center group-hover:text-primary transition-colors leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
