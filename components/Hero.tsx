import React from 'react';
import { personalInfo } from '../constants';
import Background3D from './Background3D';
import { MapPin, Mail, Download, Linkedin, Github, Instagram, Facebook, Twitter, ShieldCheck, Terminal, Server } from 'lucide-react';

const Hero: React.FC = () => {
  const dcWallpaperUrl = "https://files.conzex.com/api/files/public/dbd64ac7-a903-4097-b16f-70e32c2e6eaa/DC-Wallpaper.jpg";

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-20 md:py-36 relative overflow-hidden bg-neutral-100 text-neutral-900">
      
      {/* 1. Visible Data Center Wallpaper Background Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-35 filter saturate-75 contrast-110 pointer-events-none transition-opacity duration-700"
        style={{ backgroundImage: `url("${dcWallpaperUrl}")` }}
        aria-hidden="true"
      />

      {/* 2. Soft Light Overlay ensuring 100% readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/75 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/90 z-0 pointer-events-none" />

      {/* 3. Subtle Warm/Primary Ambient Accents */}
      <div className="absolute -top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      {/* 4. Interactive Particle Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Background3D />
      </div>

      {/* 5. Main Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14">
          
          {/* Left Column: Text & Actions */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 backdrop-blur-xs border border-neutral-200 rounded-full text-xs font-semibold text-neutral-700 mb-5 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-semibold text-neutral-800">Available for Senior DevOps & Infra Roles</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-neutral-900 leading-tight mb-3 tracking-tight">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary font-bold mb-5 tracking-tight">
              {personalInfo.title}
            </h2>
            
            {/* Bio Paragraph in simple, clear English */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-700 mb-7 max-w-2xl mx-auto md:mx-0 leading-relaxed font-normal text-center md:text-left">
              I specialize in managing hybrid cloud infrastructure, data-center virtualization (VMware vSphere, Proxmox, OpenStack), server security operations, and automating repetitive tasks with PowerShell and PowerCLI.
            </p>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-neutral-700 mb-8 justify-center md:justify-start">
              <div className="flex items-center gap-2 px-3.5 py-2 bg-white/95 backdrop-blur-xs rounded-xl border border-neutral-200 shadow-xs">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="font-medium text-xs sm:text-sm text-neutral-800">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 bg-white/95 backdrop-blur-xs rounded-xl border border-neutral-200 shadow-xs">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="font-medium text-xs sm:text-sm hover:text-primary transition-colors text-neutral-800">{personalInfo.email}</a>
              </div>
            </div>

            {/* Primary Actions: Download CV + Social Icons with EQUAL HEIGHT (h-11) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 justify-center md:justify-start">
              <a
                href={personalInfo.cvUrl}
                download="Sumit_Kumawat_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 inline-flex items-center justify-center gap-2 px-6 bg-primary text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-primary/25 hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 border border-primary/20 shrink-0"
                title="Download Sumit Kumawat CV (PDF)"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
              
              {/* Social Channels */}
              <div className="flex items-center gap-2 sm:gap-2.5">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 rounded-xl bg-white hover:bg-primary text-neutral-700 hover:text-white flex items-center justify-center border border-neutral-200 hover:border-primary shadow-xs transition-all duration-200"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 rounded-xl bg-white hover:bg-primary text-neutral-700 hover:text-white flex items-center justify-center border border-neutral-200 hover:border-primary shadow-xs transition-all duration-200"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href={personalInfo.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 rounded-xl bg-white hover:bg-primary text-neutral-700 hover:text-white flex items-center justify-center border border-neutral-200 hover:border-primary shadow-xs transition-all duration-200"
                  aria-label="Twitter / X"
                  title="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href={personalInfo.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 rounded-xl bg-white hover:bg-primary text-neutral-700 hover:text-white flex items-center justify-center border border-neutral-200 hover:border-primary shadow-xs transition-all duration-200"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href={personalInfo.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 rounded-xl bg-white hover:bg-primary text-neutral-700 hover:text-white flex items-center justify-center border border-neutral-200 hover:border-primary shadow-xs transition-all duration-200"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Micro Highlights in Hero */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2 text-xs text-neutral-600 font-medium">
              <span className="inline-flex items-center gap-1.5 bg-white/95 px-3 py-1.5 rounded-lg border border-neutral-200 shadow-xs">
                <Server className="w-3.5 h-3.5 text-primary" />
                <span>DC & Virtualization</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/95 px-3 py-1.5 rounded-lg border border-neutral-200 shadow-xs">
                <Terminal className="w-3.5 h-3.5 text-primary" />
                <span>PowerCLI Automation</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/95 px-3 py-1.5 rounded-lg border border-neutral-200 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span>Security Operations & CEH</span>
              </span>
            </div>

          </div>
          
          {/* Right Column: Profile Image */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 lg:w-96 lg:h-96 group">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary/30 via-transparent to-primary/20 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src={personalInfo.imageUrl} 
                alt={personalInfo.name} 
                className="relative w-full h-full object-cover rounded-3xl shadow-xl border-4 border-white transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
