
import React from 'react';
import { personalInfo, Icons } from '../constants';
import Background3D from './Background3D';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-24 md:py-32 bg-white relative overflow-hidden">
      <Background3D />
      
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-50 transform skew-x-12 translate-x-1/2 -z-10 opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="md:w-3/5 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-neutral-900 leading-tight mb-4 tracking-tighter">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-4xl text-primary font-medium mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Specializing in virtualization, cloud solutions, and enterprise security. 
              Dedicated to mitigating risk and implementing robust, scalable infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-neutral-600 mb-10 justify-center md:justify-start">
                <div className="flex items-center gap-3 px-5 py-3 bg-white/40 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl hover:border-primary/20 transition-all duration-300">
                    <Icons.Location className="w-6 h-6" />
                    <span className="font-medium">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 bg-white/40 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl hover:border-primary/20 transition-all duration-300">
                    <Icons.Email className="w-6 h-6" />
                    <a href={`mailto:${personalInfo.email}`} className="font-medium hover:text-primary transition-colors">{personalInfo.email}</a>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-10 justify-center md:justify-start">
                <a
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all"
                >
                  <Icons.Download className="w-5 h-5" />
                  Download CV
                </a>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                        <Icons.LinkedIn className="h-10 w-10" />
                    </a>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                        <Icons.GitHub className="h-10 w-10" />
                    </a>
                    <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                        <Icons.Instagram className="h-10 w-10" />
                    </a>
                    <a href={personalInfo.facebook} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                        <Icons.Facebook className="h-10 w-10" />
                    </a>
                    <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                        <Icons.Twitter className="h-10 w-10" />
                    </a>
                </div>
            </div>
          </div>
          
          <div className="md:w-2/5 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 group">
              <div className="absolute inset-0 bg-primary rounded-3xl opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-primary-light rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 animate-pulse"></div>
              <img 
                src={personalInfo.imageUrl} 
                alt={personalInfo.name} 
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl border-8 border-white/50 backdrop-blur-sm transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
