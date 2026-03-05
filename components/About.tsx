
import React from 'react';
import Section from './Section';
import { personalInfo, Icons } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" className="bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div 
          className="bg-neutral-50/50 backdrop-blur-xl p-10 md:p-20 rounded-[4rem] border border-neutral-100 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="flex flex-col items-center text-center relative z-10">
            <p 
              className="text-xl md:text-2xl text-neutral-700 leading-relaxed font-medium mb-12"
            >
              {personalInfo.summary}
            </p>
            
            <div 
              className="relative"
            >
                <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full transform scale-150"></div>
                <Icons.Signature className="relative z-10 w-64 md:w-80 text-neutral-900 drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
