
import React from 'react';
import { personalInfo, Icons } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-neutral-900 text-neutral-200 border-t border-neutral-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
          <div 
            className="space-y-6"
          >
            <h3 className="text-4xl font-black text-white tracking-tighter">{personalInfo.name}</h3>
            <p className="text-neutral-400 max-w-xs mx-auto md:mx-0 leading-relaxed text-lg">
                Building secure, scalable, and efficient infrastructure for the modern enterprise.
            </p>
          </div>
          
          <div 
            className="space-y-8"
          >
            <h4 className="text-sm font-black text-primary tracking-[0.3em] uppercase">Contact</h4>
            <div className="flex flex-col gap-6 items-center md:items-start">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                    <Icons.Email className="w-6 h-6 text-neutral-400 group-hover:text-white" />
                </div>
                <a href={`mailto:${personalInfo.email}`} className="text-neutral-300 hover:text-white transition-colors font-bold">{personalInfo.email}</a>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                    <Icons.Phone className="w-6 h-6 text-neutral-400 group-hover:text-white" />
                </div>
                <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="text-neutral-300 hover:text-white transition-colors font-bold">{personalInfo.phone}</a>
              </div>
               <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                    <Icons.Location className="w-6 h-6 text-neutral-400 group-hover:text-white" />
                </div>
                <span className="text-neutral-300 font-bold">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div 
            className="space-y-8"
          >
            <h4 className="text-sm font-black text-primary tracking-[0.3em] uppercase">Connect</h4>
            <div className="flex justify-center md:justify-start gap-6">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 bg-neutral-800 rounded-2xl flex items-center justify-center hover:bg-primary transition-all duration-300 shadow-xl"
              >
                <Icons.LinkedIn className="w-8 h-8" />
              </a>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 bg-neutral-800 rounded-2xl flex items-center justify-center hover:bg-primary transition-all duration-300 shadow-xl"
              >
                <Icons.GitHub className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 border-t border-neutral-800 pt-10 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm gap-8">
                 <p className="font-medium tracking-wide">&copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>
                 <Icons.Signature className="text-neutral-700 w-48 opacity-50 hover:opacity-100 transition-opacity" />
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
