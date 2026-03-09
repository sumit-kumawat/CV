
import type { SkillCategory, ExperienceItem, Project, Certification, EducationItem } from './types';
import * as SkillIcons from './components/SkillIcons';

export const personalInfo = {
    name: "Sumit Kumawat",
    title: "Senior IT Infrastructure & Cybersecurity Engineer",
    location: "D-403 Atulya Nirman, Punawale, Pune (MH), INDIA - 411033",
    email: "hello@sumitkumawat.com",
    phone: "+91 750 751 2005",
    linkedin: "https://www.linkedin.com/in/sumit-kumawat",
    github: "https://github.com/sumit-kumawat",
    instagram: "https://www.instagram.com/sumit__kumawat",
    facebook: "https://www.facebook.com/SumitKumawat09",
    twitter: "https://x.com/sumit__kumawat",
    imageUrl: "https://cdn.conzex.com/files/profile-icon/1721097078045.jpeg",
    cvUrl: "https://sumitkumawat.com/Sumit_Kumawat_CV.pdf",
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
  // Functional SVGs for UI elements
  Check: ({ className = 'h-5 w-5 text-primary' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>,
  Signature: ({ className = 'w-48 text-secondary' }: { className?: string }) => <div className={`font-signature text-6xl ${className}`}>Sumit K.</div>,
  Briefcase: ({ className = 'h-6 w-6' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
  Download: ({ className = 'h-5 w-5' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>,

  // Icons8 Colorful Icons for Contact/Social
  Email: SkillIcons.Icons8Email,
  Phone: SkillIcons.Icons8Phone,
  Location: SkillIcons.Icons8Location,
  LinkedIn: SkillIcons.Icons8LinkedIn,
  GitHub: SkillIcons.Icons8GitHub,
  Instagram: SkillIcons.Icons8Instagram,
  Facebook: SkillIcons.Icons8Facebook,
  Twitter: SkillIcons.Icons8Twitter,
};


export const skillCategories: SkillCategory[] = [
    {
        title: "Infrastructure & Virtualization",
        description: "Designing and maintaining secure, high-uptime server ecosystems and virtualization strategies.",
        skills: [
            { name: "VMware vSphere", icon: SkillIcons.VMware },
            { name: "KVM", icon: SkillIcons.KVM },
            { name: "Hyper-V", icon: SkillIcons.HyperV },
            { name: "Nutanix AHV", icon: SkillIcons.Nutanix },
            { name: "AWS", icon: SkillIcons.AWS },
            { name: "Azure", icon: SkillIcons.Azure },
            { name: "Windows Server", icon: SkillIcons.Windows },
            { name: "Active Directory", icon: SkillIcons.Server },
            { name: "Exchange 2016", icon: SkillIcons.MicrosoftExchange },
            { name: "Cisco", icon: SkillIcons.Cisco },
            { name: "pfSense", icon: SkillIcons.pfSense },
            { name: "Wazuh", icon: SkillIcons.Wazuh },
            { name: "CrowdStrike", icon: SkillIcons.CrowdStrike }
        ]
    },
    {
        title: "Hosting & Security",
        description: "Managing shared resources and implementing advanced threat detection and hardening.",
        skills: [
            { name: "cPanel", icon: SkillIcons.CPanel },
            { name: "JetBackup", icon: SkillIcons.JetBackup },
            { name: "Imunify360", icon: SkillIcons.Imunify },
            { name: "CloudLinux", icon: SkillIcons.CloudLinux },
            { name: "SSL/TLS", icon: SkillIcons.SSL },
            { name: "Linux", icon: SkillIcons.Linux }
        ]
    },
    {
        title: "Development & Automation",
        description: "Leveraging scripting and containerization to automate operations and improve efficiency.",
        skills: [
            { name: "Python", icon: SkillIcons.Python },
            { name: "Bash Scripting", icon: SkillIcons.Bash },
            { name: "PowerShell", icon: SkillIcons.PowerShell },
            { name: "Docker", icon: SkillIcons.Docker }
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
