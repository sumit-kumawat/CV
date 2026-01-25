
import React from 'react';
import { personalInfo, Icons } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-50 transform skew-x-12 translate-x-1/2 -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="md:w-3/5 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-tight mb-4">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-medium mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Specializing in virtualization, cloud solutions, and enterprise security. 
              Dedicated to mitigating risk and implementing robust, scalable infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-neutral-500 mb-8 justify-center md:justify-start">
                <div className="flex items-center gap-2 px-4 py-2 bg-neutral-50 rounded-lg">
                    <Icons.Location className="text-primary" />
                    <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-neutral-50 rounded-lg">
                    <Icons.Email className="text-primary" />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">{personalInfo.email}</a>
                </div>
            </div>

            <div className="flex justify-center md:justify-start space-x-6">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-400 hover:text-[#0077b5] hover:bg-blue-50 rounded-full transition-all duration-300">
                    <Icons.LinkedIn className="h-8 w-8" />
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-400 hover:text-[#333] hover:bg-gray-50 rounded-full transition-all duration-300">
                    <Icons.GitHub className="h-8 w-8" />
                </a>
            </div>
          </div>
          
          <div className="md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary rounded-full opacity-10 animate-pulse"></div>
              <img 
                src={personalInfo.imageUrl} 
                alt={personalInfo.name} 
                className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
