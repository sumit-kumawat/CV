
import React from 'react';
import Section from './Section';
import { certifications } from '../constants';
import { Icons8Certificate, Icons8Badge } from './SkillIcons';

const Certifications: React.FC = () => {
  return (
    <Section id="certifications" title="Certifications" className="bg-neutral-50 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="group relative bg-white/40 backdrop-blur-xl p-10 rounded-[3rem] border border-white/30 shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden perspective-1000"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-15 transition-all duration-700 transform group-hover:scale-125 group-hover:rotate-12">
                <Icons8Certificate className="w-48 h-48" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
                <div 
                  className="w-20 h-20 mb-8 p-4 bg-white rounded-3xl shadow-xl border border-neutral-100 flex items-center justify-center group-hover:border-primary/30 transition-all duration-300"
                >
                    <Icons8Badge className="w-full h-full object-contain filter drop-shadow-md" />
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4 leading-tight group-hover:text-primary transition-colors duration-300 tracking-tight">
                    {cert.title}
                </h3>
                
                <div className="mt-auto pt-6 border-t border-neutral-100/50">
                    <p className="text-primary font-bold text-lg mb-2">{cert.issuer}</p>
                    <div className="flex items-center gap-3 text-sm text-neutral-500 font-medium">
                         <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(255,116,93,0.5)]"></span>
                         <span>Issued: {cert.year}</span>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
