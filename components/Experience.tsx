
import React from 'react';
import Section from './Section';
import { experience } from '../constants';
import { Icons8Work } from './SkillIcons';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Professional Experience" className="bg-neutral-50/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-1 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 md:transform md:-translate-x-1/2"></div>
          
          <div className="space-y-24">
            {experience.map((item, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full group`}
              >
                
                {/* Timeline Icon Marker */}
                <div 
                  className="absolute left-8 md:left-1/2 w-16 h-16 bg-white border-4 border-primary/20 rounded-3xl shadow-2xl flex items-center justify-center transform -translate-x-1/2 md:translate-x-[-50%] z-20 group-hover:border-primary transition-colors duration-300"
                >
                    <Icons8Work className="w-8 h-8" />
                </div>

                {/* Date/Location Tag - Mobile: Top, Desktop: Opposite side */}
                <div className={`w-full md:w-1/2 pl-24 md:pl-0 md:px-16 mb-6 md:mb-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-left`}>
                    <div 
                      className={`inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-widest uppercase shadow-sm border border-primary/20`}
                    >
                        {item.period}
                    </div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-24 md:pl-0 md:px-16">
                   <div 
                     className="bg-white/40 backdrop-blur-xl p-8 md:p-10 rounded-[3rem] shadow-2xl border border-white/30 hover:shadow-primary/10 transition-all duration-500 relative overflow-hidden group-hover:border-primary/20"
                   >
                      {/* Decorative gradient blob */}
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>

                      <h3 className="text-3xl font-bold text-neutral-900 mb-2 tracking-tight">{item.role}</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-8">
                        <span className="text-xl font-semibold text-primary">{item.company}</span>
                        <span className="w-2 h-2 rounded-full bg-neutral-300 hidden sm:block"></span>
                        <span className="text-base text-neutral-500 font-medium">{item.location}</span>
                      </div>
                      
                      <ul className="space-y-5">
                        {item.points.map((point, pIndex) => (
                          <li key={pIndex} className="flex items-start gap-4 text-neutral-600 leading-relaxed text-base group/item">
                            <span className="flex-shrink-0 mt-2 w-2 h-2 bg-primary rounded-full ring-4 ring-primary/10 group-hover/item:scale-125 transition-transform"></span>
                            <span className="group-hover/item:text-neutral-900 transition-colors">{point}</span>
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
