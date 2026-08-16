import React from 'react';
import Section from './Section';
import { experience } from '../constants';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, TrendingUp, ShieldCheck, Server, Sparkles, Activity } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Professional Experience" className="bg-neutral-50/60 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Intro subtitle - Centered */}
        <div className="mb-12 text-center">
          <p className="text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto text-center leading-relaxed font-normal">
            Track record of designing resilient data-center architectures, orchestrating hybrid cloud environments, and eliminating manual operational overhead through automation.
          </p>
        </div>

        {/* Live Animated Timeline Container */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 space-y-12">
          
          {/* Animated Vertical Line: Gradient background + Travelling pulse wave */}
          <div 
            className="absolute top-6 bottom-6 left-6 sm:left-10 md:left-12 w-1 -translate-x-1/2 bg-gradient-to-b from-primary via-primary/30 to-neutral-200 rounded-full" 
            aria-hidden="true"
          >
            {/* Travelling Light Ray / Animated Pulse */}
            <div className="w-full h-24 bg-gradient-to-b from-transparent via-primary to-transparent rounded-full animate-pulse opacity-80 shadow-xs" />
          </div>

          {experience.map((item, index) => {
            const isCurrent = index === 0;

            return (
              <div 
                key={index} 
                className="relative flex items-start group"
              >
                {/* Live Animated Node Marker on the Line */}
                <div 
                  className={`absolute -left-6 sm:-left-10 md:-left-12 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center -translate-x-1/2 z-20 transition-all duration-300 shadow-md ${
                    isCurrent 
                      ? 'bg-primary text-white ring-4 ring-primary/20 shadow-primary/30 scale-105' 
                      : 'bg-white text-neutral-600 border-2 border-neutral-300 group-hover:border-primary group-hover:text-primary group-hover:scale-105'
                  }`}
                >
                  {isCurrent ? (
                    <div className="relative flex items-center justify-center">
                      <Briefcase className="w-5 h-5 relative z-10" />
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
                      </span>
                    </div>
                  ) : (
                    <Building2 className="w-5 h-5" />
                  )}
                </div>

                {/* Experience Card */}
                <div className="w-full ml-6 sm:ml-8">
                  <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-9 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
                    
                    {/* Top Accent line */}
                    {isCurrent ? (
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-emerald-500 to-primary"></div>
                    ) : (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-200 group-hover:bg-primary/50 transition-colors"></div>
                    )}

                    {/* Header: Role, Company, Period, Location */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-neutral-100 mb-6">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5 mb-2">
                          <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
                            {item.role}
                          </h3>
                          {isCurrent && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-full border border-emerald-200 shadow-xs">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                              <span>Active Role</span>
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-neutral-600 text-sm">
                          <span className="font-bold text-primary flex items-center gap-1.5">
                            <Building2 className="w-4 h-4 text-primary" />
                            {item.company}
                          </span>
                          <span className="text-neutral-300 hidden sm:inline">•</span>
                          <span className="flex items-center gap-1 text-neutral-500 font-medium text-xs sm:text-sm">
                            <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Period Badge */}
                      <div className="shrink-0">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-100/80 text-neutral-800 text-xs sm:text-sm font-semibold rounded-xl border border-neutral-200">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Key Responsibilities */}
                    <div className="space-y-3.5">
                      <div className="text-xs uppercase tracking-wider text-neutral-400 font-bold flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-primary" />
                        <span>Core Deliverables & Operational Impact</span>
                      </div>

                      <ul className="space-y-2.5">
                        {item.points.map((point, pIndex) => (
                          <li key={pIndex} className="flex items-start gap-3 group/item">
                            <div className="mt-1 shrink-0">
                              <CheckCircle2 className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-neutral-700 text-sm sm:text-[15px] leading-relaxed group-hover/item:text-neutral-900 transition-colors">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metric Highlights Footer */}
                    <div className="mt-6 pt-5 border-t border-neutral-100 flex flex-wrap items-center gap-2.5">
                      {isCurrent ? (
                        <>
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary font-bold text-xs rounded-lg border border-primary/20">
                            <TrendingUp className="w-3.5 h-3.5" />
                            <span>50%+ Manual Effort Saved</span>
                          </div>
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary font-bold text-xs rounded-lg border border-primary/20">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>182+ Hardened Server Upgrades</span>
                          </div>
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 text-neutral-700 font-medium text-xs rounded-lg border border-neutral-200">
                            <Server className="w-3.5 h-3.5 text-neutral-500" />
                            <span>Hybrid Cloud & DC Scale</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 text-neutral-700 font-bold text-xs rounded-lg border border-neutral-200">
                            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                            <span>100% Patch Compliance</span>
                          </div>
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 text-neutral-700 font-medium text-xs rounded-lg border border-neutral-200">
                            <Server className="w-3.5 h-3.5 text-neutral-500" />
                            <span>Hyper-V & KVM Clusters</span>
                          </div>
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 text-neutral-700 font-medium text-xs rounded-lg border border-neutral-200">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                            <span>24/7 SLA Uptime</span>
                          </div>
                        </>
                      )}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </Section>
  );
};

export default Experience;
