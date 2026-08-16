import React from 'react';
import Section from './Section';
import { personalInfo } from '../constants';
import { UserCheck, ShieldCheck, Cloud, Terminal, CheckCircle2, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" title="Professional Summary" className="bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Main Card */}
        <div className="bg-neutral-50/80 rounded-3xl border border-neutral-200 p-6 sm:p-8 md:p-10 shadow-xs space-y-8">
          
          {/* Header Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white rounded-full border border-neutral-200 text-xs font-bold text-primary shadow-xs">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Infrastructure Engineer & Systems Administrator</span>
          </div>

          {/* Bio Text in simple, natural first-person / professional tone */}
          <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
            {personalInfo.summary}
          </p>

          {/* 4 Core Focus Areas in clear, simple English */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            
            <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-xs flex flex-col justify-between">
              <div>
                <Cloud className="w-5 h-5 text-primary mb-2.5" />
                <h4 className="font-bold text-neutral-900 text-sm">Data Center & Cloud</h4>
                <p className="text-neutral-600 text-xs mt-1 leading-relaxed">
                  Managing physical servers, storage arrays, and virtualization platforms like VMware ESXi, vSphere, and Proxmox.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-xs flex flex-col justify-between">
              <div>
                <Terminal className="w-5 h-5 text-primary mb-2.5" />
                <h4 className="font-bold text-neutral-900 text-sm">Scripting & Automation</h4>
                <p className="text-neutral-600 text-xs mt-1 leading-relaxed">
                  Building PowerShell, PowerCLI, and Python scripts to automate daily operational tasks, deployments, and patching.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-xs flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-5 h-5 text-primary mb-2.5" />
                <h4 className="font-bold text-neutral-900 text-sm">Security & Compliance</h4>
                <p className="text-neutral-600 text-xs mt-1 leading-relaxed">
                  Implementing SIEM log monitoring, Wazuh rules, endpoint protection, and system hardening guidelines.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-xs flex flex-col justify-between">
              <div>
                <Cpu className="w-5 h-5 text-primary mb-2.5" />
                <h4 className="font-bold text-neutral-900 text-sm">High Availability & DR</h4>
                <p className="text-neutral-600 text-xs mt-1 leading-relaxed">
                  Designing backup retention schedules, failover mechanisms, and zero-downtime cluster migrations.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Reliability Checklist */}
          <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center gap-4 text-xs text-neutral-600 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Production Uptime & 24/7 SLA Management</span>
            </span>
            <span className="text-neutral-300 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Disaster Recovery & Fast Incident Resolution</span>
            </span>
            <span className="text-neutral-300 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Certified Ethical Hacker (CEH)</span>
            </span>
          </div>

        </div>

      </div>
    </Section>
  );
};

export default About;
