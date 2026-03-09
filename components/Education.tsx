
import React from 'react';
import Section from './Section';
import { education } from '../constants';
import { Icons8University, Icons8Student } from './SkillIcons';

const Education: React.FC = () => {
  const edu = education[0];

  return (
    <Section id="education" title="Education" className="bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div 
          className="group relative bg-white/40 backdrop-blur-xl p-8 md:p-16 rounded-3xl border border-white/30 shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden perspective-1000"
        >
            
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16 text-center md:text-left">
                {/* Visual Icon */}
                <div 
                  className="flex-shrink-0 relative"
                >
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                    <Icons8Student className="w-40 h-40 md:w-56 md:h-56 relative z-10 drop-shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                     <div 
                       className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/80 rounded-full shadow-lg border border-white/50 text-sm font-bold text-primary mb-6"
                     >
                        <Icons8University className="w-6 h-6" />
                        <span className="tracking-widest uppercase">University Degree</span>
                     </div>
                    
                    <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight">
                        {edu.institution}
                    </h3>
                    
                    <div className="text-2xl text-neutral-600 font-semibold mb-8">
                        {edu.degree}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 border-t border-neutral-100 pt-8">
                        <div className="flex flex-col">
                            <span className="text-xs uppercase tracking-widest text-neutral-400 font-black mb-1">Location</span>
                            <span className="text-neutral-800 font-bold text-lg">{edu.location}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs uppercase tracking-widest text-neutral-400 font-black mb-1">Period</span>
                            <span className="text-neutral-800 font-bold text-lg">{edu.period}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs uppercase tracking-widest text-neutral-400 font-black mb-1">CGPA</span>
                            <span className="text-3xl font-black text-primary drop-shadow-sm">{edu.cgpa}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
