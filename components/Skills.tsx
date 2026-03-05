
import React from 'react';
import { skillCategories } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-neutral-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div 
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-4 tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A diverse arsenal of industry-standard technologies and official applications I employ to optimize infrastructure, reduce risk, and drive operational improvements.
          </p>
        </div>

        <div className="space-y-16">
            {skillCategories.map((category) => (
              <div 
                key={category.title}
                className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/20 p-8 md:p-12 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                
                <div className="mb-10 border-l-8 border-primary pl-6">
                  <h3 className="text-3xl font-bold text-neutral-800 mb-2">{category.title}</h3>
                  <p className="text-neutral-500 text-lg">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="group flex flex-col items-center p-6 rounded-3xl bg-neutral-50/50 border border-neutral-100/50 hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all duration-300 cursor-default"
                    >
                      <div className="w-16 h-16 mb-4 flex items-center justify-center filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300">
                         <skill.icon className="w-full h-full object-contain" />
                      </div>
                      <span className="font-semibold text-neutral-700 text-sm text-center group-hover:text-primary transition-colors">
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
