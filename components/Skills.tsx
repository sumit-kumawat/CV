
import React from 'react';
import { skillCategories } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A diverse arsenal of industry-standard technologies and official applications I employ to optimize infrastructure, reduce risk, and drive operational improvements.
          </p>
        </div>

        <div className="space-y-16">
            {skillCategories.map((category) => (
              <div key={category.title} className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-8 md:p-10">
                <div className="mb-8 border-l-4 border-primary pl-4">
                  <h3 className="text-2xl font-bold text-neutral-800 mb-2">{category.title}</h3>
                  <p className="text-neutral-500">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group flex flex-col items-center p-4 rounded-xl hover:bg-neutral-50 transition-colors duration-300">
                      <div className="w-14 h-14 mb-3 flex items-center justify-center text-neutral-500 group-hover:text-neutral-900 transition-transform duration-300 group-hover:scale-110">
                         <skill.icon className="w-full h-full object-contain" />
                      </div>
                      <span className="font-medium text-neutral-700 text-sm text-center">
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
