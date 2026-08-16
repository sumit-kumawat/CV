import React, { useState } from 'react';
import Section from './Section';
import { education } from '../constants';
import { GraduationCap, MapPin, Calendar, Award, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  const edu = education[0];
  const [imageError, setImageError] = useState(false);

  const focusModules = [
    'Cloud Architecture & Virtualization',
    'Network Security & Threat Defense',
    'Enterprise Linux & Shell Scripting',
    'Information Security & Cryptography',
    'Database Systems & Web Technologies',
    'Systems Administration & Networking'
  ];

  return (
    <Section id="education" title="Education & Academic Background" className="bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 space-y-8">
        
        {/* Intro subtitle - Centered */}
        <div className="text-center">
          <p className="text-neutral-600 text-sm md:text-base max-w-2xl mx-auto text-center">
            Specialized undergraduate curriculum in cloud infrastructures, hypervisors, virtualization, and enterprise information security protocols.
          </p>
        </div>

        {/* Main Education Card */}
        <div className="group relative bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl border border-neutral-200 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-500 overflow-hidden">
          
          <div className="relative z-10 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
            
            {/* Campus Image with Proper Rounded Border */}
            <div className="lg:w-5/12 flex-shrink-0 flex flex-col">
              <div className="relative w-full h-64 sm:h-72 lg:h-full min-h-[260px] rounded-2xl overflow-hidden border-2 border-neutral-200 shadow-md group-hover:border-primary/40 group-hover:shadow-lg transition-all duration-500 bg-neutral-100">
                {!imageError ? (
                  <img
                    src="https://www.dypiu.ac.in/assets/images/home/banner.webp"
                    alt="D.Y. Patil International University Campus"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex flex-col items-center justify-center p-6 text-white text-center">
                    <GraduationCap className="w-16 h-16 mb-3 text-primary" />
                    <span className="font-bold text-lg">D.Y. Patil International University</span>
                    <span className="text-xs text-neutral-400 mt-1">Pune, India</span>
                  </div>
                )}
                
                {/* Campus Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 py-2 px-3.5 bg-neutral-900/80 backdrop-blur-md rounded-xl border border-white/20 text-white flex items-center justify-between text-xs">
                  <span className="font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    DYPIU Campus
                  </span>
                  <span className="text-neutral-300">Pune, MH</span>
                </div>
              </div>
            </div>

            {/* University & Degree Details */}
            <div className="lg:w-7/12 flex flex-col justify-between space-y-6">
              <div>
                {/* Degree Category Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-xs md:text-sm font-bold text-primary mb-4">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span className="tracking-wide uppercase">Bachelor Degree</span>
                </div>

                {/* University Name */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors duration-300 tracking-tight">
                  {edu.institution}
                </h3>

                {/* Major / Specialization */}
                <p className="text-lg md:text-xl text-neutral-700 font-semibold mb-4">
                  {edu.degree}
                </p>

                <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-6">
                  Completed specialized undergraduate curriculum focused on hybrid virtualization, public and private cloud architectures, enterprise network protocols, and cyber risk mitigation.
                </p>
              </div>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-5 bg-neutral-50 rounded-2xl border border-neutral-200">
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold mb-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-primary" />
                    Location
                  </span>
                  <span className="text-neutral-900 font-semibold text-xs sm:text-sm md:text-base truncate">{edu.location}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold mb-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-primary" />
                    Duration
                  </span>
                  <span className="text-neutral-900 font-semibold text-xs sm:text-sm md:text-base">{edu.period}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold mb-1 flex items-center gap-1">
                    <Award className="w-3 h-3 text-primary" />
                    CGPA
                  </span>
                  <span className="text-primary font-bold text-sm sm:text-base md:text-lg">{edu.cgpa} <span className="text-xs font-medium text-neutral-500">/ 10</span></span>
                </div>
              </div>

              {/* Coursework / Modules */}
              <div>
                <span className="text-xs uppercase tracking-wider text-neutral-500 font-bold mb-2.5 block">
                  Core Specializations & Laboratory Focus:
                </span>
                <div className="flex flex-wrap gap-2">
                  {focusModules.map((module, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white text-neutral-700 text-xs font-medium rounded-lg border border-neutral-200 shadow-sm"
                    >
                      {module}
                    </span>
                  ))}
                </div>
              </div>

              {/* University Link Action */}
              <div className="pt-2">
                <a
                  href="https://www.dypiu.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <span>Visit D.Y. Patil International University Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </Section>
  );
};

export default Education;
