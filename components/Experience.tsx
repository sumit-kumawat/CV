
import React from 'react';
import Section from './Section';
import { experience } from '../constants';
import { Icons8Work } from './SkillIcons';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Professional Experience" className="bg-neutral-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20 md:transform md:-translate-x-1/2"></div>
          
          <div className="space-y-20">
            {experience.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full group`}>
                
                {/* Timeline Icon Marker */}
                <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-white border-4 border-neutral-50 rounded-full shadow-lg flex items-center justify-center transform -translate-x-1/2 md:translate-x-[-50%] z-10 group-hover:scale-110 transition-transform duration-300">
                    <Icons8Work className="w-6 h-6" />
                </div>

                {/* Date/Location Tag - Mobile: Top, Desktop: Opposite side */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 md:px-12 mb-4 md:mb-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                    <div className={`hidden md:block text-sm font-semibold tracking-wider text-primary uppercase ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                        {item.period}
                    </div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-12">
                   <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-white/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1">
                      {/* Decorative gradient blob */}
                      <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>

                      <div className="md:hidden text-xs font-bold text-primary uppercase tracking-widest mb-2">{item.period}</div>
                      
                      <h3 className="text-2xl font-bold text-neutral-800 mb-1">{item.role}</h3>
                      <div className="flex items-center gap-2 mb-6">
                        <span className="text-lg font-medium text-neutral-600">{item.company}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
                        <span className="text-sm text-neutral-500">{item.location}</span>
                      </div>
                      
                      <ul className="space-y-4">
                        {item.points.map((point, pIndex) => (
                          <li key={pIndex} className="flex items-start gap-3 text-neutral-600 leading-relaxed text-sm">
                            <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 bg-primary rounded-full ring-2 ring-primary/20"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
