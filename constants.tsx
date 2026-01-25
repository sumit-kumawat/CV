
import type { SkillCategory, ExperienceItem, Project, Certification, EducationItem } from './types';
import * as SkillIcons from './components/SkillIcons';

export const personalInfo = {
    name: "Sumit Kumawat",
    title: "Senior IT Infrastructure & Cybersecurity Engineer",
    location: "Pune, India",
    email: "kumawatsumit45@gmail.com",
    phone: "+91 750 751 2005",
    linkedin: "https://www.linkedin.com/in/sumit-kumawat-infosec/",
    github: "https://github.com/sumit-kumawat",
    imageUrl: "https://cdn.conzex.com/files/profile-icon/1721097078045.jpeg",
    summary: "Senior IT Infrastructure & Cybersecurity Engineer with extensive virtualization experience and a proven track record in designing cloud solutions. Expert in managing Microsoft Windows Server ecosystems (2012–2025), Microsoft Exchange 2016, and complex shared network storage environments. Proficient in VMware, KVM, and open-source technologies, delivering comprehensive upgrades and optimization for diverse application landscapes.",
};

export const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Icons = {
  Email: ({ className = 'h-5 w-5' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>,
  Phone: ({ className = 'h-5 w-5' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>,
  LinkedIn: ({ className = 'h-6 w-6' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.48 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>,
  GitHub: ({ className = 'h-6 w-6' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
  Location: ({ className = 'h-5 w-5' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>,
  Briefcase: ({ className = 'h-6 w-6' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
  Check: ({ className = 'h-5 w-5 text-primary' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>,
  Signature: ({ className = 'w-48 text-secondary' }: { className?: string }) => <div className={`font-signature text-6xl ${className}`}>Sumit K.</div>
};


export const skillCategories: SkillCategory[] = [
    {
        title: "Virtualization & Cloud",
        description: "Implementing robust virtualization strategies to maximize resource efficiency and ensure business continuity.",
        skills: [
            { name: "VMware vSphere", icon: SkillIcons.VMware },
            { name: "KVM", icon: SkillIcons.KVM },
            { name: "Hyper-V", icon: SkillIcons.HyperV },
            { name: "Nutanix AHV", icon: SkillIcons.Nutanix },
            { name: "AWS", icon: SkillIcons.AWS },
            { name: "Azure", icon: SkillIcons.Azure },
            { name: "Docker", icon: SkillIcons.Docker },
            { name: "cPanel", icon: SkillIcons.CPanel },
            { name: "JetBackup", icon: SkillIcons.JetBackup }
        ]
    },
    {
        title: "Server & Network Infrastructure",
        description: "Designing and maintaining secure, high-uptime server ecosystems (99.9%) and shared storage solutions.",
        skills: [
            { name: "Windows Server", icon: SkillIcons.Windows },
            { name: "Exchange 2016", icon: SkillIcons.MicrosoftExchange },
            { name: "Linux", icon: SkillIcons.Linux },
            { name: "Active Directory", icon: SkillIcons.Server },
            { name: "Cisco", icon: SkillIcons.Cisco },
            { name: "pfSense", icon: SkillIcons.Shield },
            { name: "Shared Storage", icon: SkillIcons.Network },
            { name: "Imunify360", icon: SkillIcons.Imunify },
            { name: "Wazuh", icon: SkillIcons.Wazuh }
        ]
    },
    {
        title: "Security & Risk Management",
        description: "Deploying advanced threat detection and automation to reduce risk and harden endpoint security.",
        skills: [
            { name: "CrowdStrike", icon: SkillIcons.CrowdStrike },
            { name: "PowerShell", icon: SkillIcons.PowerShell },
            { name: "Bash Scripting", icon: SkillIcons.Code },
            { name: "HTML/CSS/JS", icon: SkillIcons.Code },
            { name: "SSL/TLS", icon: SkillIcons.Shield }
        ],
    },
];

export const experience: ExperienceItem[] = [
    {
        company: "BMC Software Inc.",
        location: "Pune, India",
        role: "Associate Platform System Administrator",
        period: "Jan 2022 – Present",
        points: [
            "Executed comprehensive upgrades across 182+ server instances, improving performance and security posture in all aspects of the infrastructure.",
            "Architected and maintained Hybrid Cloud solutions integrating AWS, Azure, and on-premise Virtualization (VMware/KVM).",
            "Managed Shared Network Storage environments, optimizing data flow and redundancy using VASA and high-performance specs.",
            "Automated VM lifecycle operations and deployment options for both monolithic and microservices applications using PowerShell & PowerCLI.",
            "Administered Microsoft Windows Server (2016-2025) and Microsoft Exchange 2016 ecosystems, ensuring 99.9% uptime.",
            "Implemented security hardening for Client OS and server endpoints, integrating open-source security tools with enterprise SIEM.",
            "Collaborated on evaluating hardware specs and software options for future-proof infrastructure procurement."
        ]
    },
    {
        company: "Biz Secure Labs Pvt. Ltd.",
        location: "Pune, India",
        role: "System Administrator",
        period: "Jul 2021 – Dec 2021",
        points: [
            "Administered Virtualization platforms including Hyper-V and KVM for diverse development environments.",
            "Managed firewalls and VPNs (KerioControl, pfSense) to secure shared network resources.",
            "Maintained Windows Server, Exchange, IIS, and backups using Veeam and open standards.",
            "Provided extensive support for Client OS (Windows/Linux) and endpoint security."
        ]
    }
];

export const education: EducationItem[] = [
    {
        institution: "D.Y. Patil International University",
        location: "Pune, India",
        degree: "BCA – Cloud Computing & Information Security",
        period: "2018 – 2021",
        cgpa: "7.6"
    }
];

export const projects: Project[] = [
    {
        title: "Enterprise Infrastructure Modernization",
        description: "Led a major upgrade initiative across 182+ servers, migrating legacy systems to modern Windows Server 2022 and virtualized environments.",
        icon: SkillIcons.Icons8Server,
        tags: ["Windows Server 2022", "Migration", "Virtualization"]
    },
    {
        title: "Automated Docker & Cloud Deployment",
        description: "Developed scripts for automated Docker installation and cloud resource provisioning on both Windows & Linux servers.",
        icon: SkillIcons.Icons8Cloud,
        tags: ["Docker", "Automation", "Cloud Ops", "Linux"]
    },
    {
        title: "Custom SIEM Parsers & Alerts",
        description: "Built custom SIEM parsers and security alerts for enhanced threat monitoring and faster detection.",
        icon: SkillIcons.Icons8Security,
        tags: ["SIEM", "Cybersecurity", "Threat Detection"]
    },
    {
        title: "Storage Optimization Project",
        description: "Implemented VASA and shared network storage solutions to optimize virtual machine performance and backup efficiency.",
        icon: SkillIcons.Icons8Storage,
        tags: ["VASA", "SAN/NAS", "Backup Strategy"]
    },
    {
        title: "Security Research & Vulnerability Discovery",
        description: "Identified critical vulnerabilities (XSS, SQL Injection) in commercial antivirus software and public sector web portals.",
        icon: SkillIcons.Icons8Bug,
        tags: ["Vulnerability Assessment", "XSS", "SQLi", "Research"]
    }
];

export const certifications: Certification[] = [
    { title: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", year: "Dec 20, 2024" },
    { title: "Microsoft Azure Fundamentals", issuer: "Microsoft", year: 2022 },
    { title: "Burp Suite Web Application Security Testing", issuer: "Burp Suite", year: 2023 },
    { title: "Cyber Hygiene Practice", issuer: "ISEA", year: 2021 }
];
