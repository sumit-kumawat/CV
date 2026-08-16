import type { SkillCategory, ExperienceItem, Project, Certification, EducationItem } from './types';
import * as SkillIcons from './components/SkillIcons';

export const personalInfo = {
    name: "Sumit Kumawat",
    title: "DevOps & Infrastructure Engineer",
    location: "Pune, India",
    email: "hello@sumitkumawat.com",
    phone: "(+91) 750 751 2005",
    linkedin: "https://www.linkedin.com/in/sumit-kumawat",
    github: "https://github.com/sumit-kumawat",
    instagram: "https://www.instagram.com/sumit__kumawat",
    facebook: "https://www.facebook.com/SumitKumawat09",
    twitter: "https://x.com/sumit__kumawat",
    portfolio: "https://sumitkumawat.com",
    imageUrl: "https://files.conzex.com/api/files/public/2c180725-d54e-46f5-ae6c-8ce927f7fe71/1721097078045.jpeg",
    cvUrl: "https://sumitkumawat.com/Sumit_Kumawat_CV.pdf",
    summary: "DevOps & Infrastructure Engineer with 5+ years of experience across hybrid cloud, virtualization, and security operations. Specialized in VMware vSphere/ESXi, Proxmox, KVM, and OpenStack at data center scale—including rack/chassis provisioning, storage mapping, and OS deployment (Windows/Linux/MaaS). Expertise in automating infrastructure workflows (PowerShell/PowerCLI/Bash), security operations (SIEM, threat detection, custom regex parsers), and cloud platforms (AWS/Azure). Proven track record of reducing manual efforts by 50%+ through automation. Seeking senior DevOps/Infrastructure roles with remote flexibility.",
};

export const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export const skillCategories: SkillCategory[] = [
    {
        title: "Virtualization & DC Ops",
        description: "Data center scale hypervisors, bare-metal provisioning, chassis orchestration, and SAN/NAS storage fabrics.",
        skills: [
            { name: "VMware vSphere/ESXi/vCenter", icon: SkillIcons.VMware },
            { name: "Proxmox VE", icon: SkillIcons.Proxmox },
            { name: "KVM", icon: SkillIcons.KVM },
            { name: "OpenStack", icon: SkillIcons.OpenStack },
            { name: "Nutanix AHV/Prism", icon: SkillIcons.Nutanix },
            { name: "Hyper-V", icon: SkillIcons.HyperV },
            { name: "Dell PowerEdge (Rack/Chasis/Blade)", icon: SkillIcons.Dell },
            { name: "Storage Mapping (iSCSI/FC/NFS)", icon: SkillIcons.StorageArea },
            { name: "OS Provisioning (Windows/Linux/MaaS)", icon: SkillIcons.Icons8Server }
        ]
    },
    {
        title: "Cloud & Orchestration",
        description: "Public cloud architecture, containerization ecosystems, multi-tenant clusters, and automation platforms.",
        skills: [
            { name: "AWS (EC2, IAM, S3, RDS, VPC, Lambda)", icon: SkillIcons.AWS },
            { name: "Azure (VMs, AD, NSG)", icon: SkillIcons.Azure },
            { name: "Docker", icon: SkillIcons.Docker },
            { name: "Docker-Compose", icon: SkillIcons.Docker },
            { name: "SpectroCloud", icon: SkillIcons.SpectroCloud },
            { name: "vRealize Automation", icon: SkillIcons.VRealizeAutomation }
        ]
    },
    {
        title: "OS & Directory Services",
        description: "Enterprise directory trees, mail backbones, and web application runtimes.",
        skills: [
            { name: "Windows Server 2012–2025", icon: SkillIcons.Windows },
            { name: "Active Directory", icon: SkillIcons.Server },
            { name: "Exchange 2016/2019", icon: SkillIcons.MicrosoftExchange },
            { name: "IIS", icon: SkillIcons.IIS },
            { name: "Apache", icon: SkillIcons.Apache },
            { name: "Tomcat", icon: SkillIcons.Tomcat }
        ]
    },
    {
        title: "Networking & DNS",
        description: "Core IPAM infrastructure, enterprise firewalls, secure protocols, and edge reverse proxies.",
        skills: [
            { name: "Infoblox (DNS/DHCP/IPAM/Alias)", icon: SkillIcons.Infoblox },
            { name: "pfSense", icon: SkillIcons.pfSense },
            { name: "KerioControl", icon: SkillIcons.Shield },
            { name: "Cisco Switches", icon: SkillIcons.Cisco },
            { name: "SSL/TLS Hardening", icon: SkillIcons.SSL },
            { name: "Reverse Proxy", icon: SkillIcons.ReverseProxy }
        ]
    },
    {
        title: "Security & SIEM",
        description: "Proactive threat intelligence, endpoint detection and response, SIEM parsing, and ethical vulnerability audits.",
        skills: [
            { name: "CrowdStrike Falcon", icon: SkillIcons.CrowdStrike },
            { name: "Wazuh EDR/XDR", icon: SkillIcons.Wazuh },
            { name: "AlienVault OSSIM", icon: SkillIcons.AlienVault },
            { name: "Incident Response", icon: SkillIcons.Icons8Security },
            { name: "Threat Detection & Regex Parsers", icon: SkillIcons.Icons8Bug },
            { name: "Vulnerability Assessment", icon: SkillIcons.Shield }
        ]
    },
    {
        title: "Automation & Scripting",
        description: "Infrastructure as Code, customized CLI automations, scheduled maintenance tasks, and continuous deployment.",
        skills: [
            { name: "PowerShell", icon: SkillIcons.PowerShell },
            { name: "PowerCLI", icon: SkillIcons.PowerCLI },
            { name: "Shell/Bash", icon: SkillIcons.Bash },
            { name: "Python", icon: SkillIcons.Python },
            { name: "CI/CD Pipelines (Basic)", icon: SkillIcons.Git }
        ]
    }
];

export const experience: ExperienceItem[] = [
    {
        company: "BMC Software Inc.",
        location: "Pune, India",
        role: "DevOps Engineer",
        period: "Jan 2022 – Present",
        points: [
            "Architect and orchestrate enterprise virtualization and hybrid cloud workloads spanning VMware vSphere, KVM, AWS, and Azure.",
            "Automated VM lifecycle provisioning, snapshots, migrations, and network configurations using PowerShell and PowerCLI, reducing manual efforts by 50%+.",
            "Engineered and maintained secure Windows Server environments (2012–2025), Active Directory (AD), Exchange mail, DNS/LDAP, and Failover Clusters.",
            "Supervised 182+ server instance upgrades to hardened operating system baselines with zero unscheduled downtime.",
            "Configured and tuned enterprise shared storage (SAN/NAS, iSCSI, FC, NFS) and automated disaster recovery backup routines.",
            "Deployed and managed enterprise security tooling, firewalls, SIEM regex log parsers, and CrowdStrike Falcon/Wazuh endpoint telemetry in collaboration with SOC."
        ]
    },
    {
        company: "Biz Secure Labs Pvt. Ltd.",
        location: "Pune, India",
        role: "System Administrator",
        period: "Jul 2021 – Dec 2021",
        points: [
            "Administered Hyper-V and KVM virtualization clusters supporting continuous development and testing environments.",
            "Configured and maintained pfSense and KerioControl perimeter firewalls, site-to-site VPNs, and VLAN segmentation.",
            "Managed Windows Servers, Exchange mail servers, IIS web services, and automated backup schedules using Veeam.",
            "Delivered endpoint security hardening, OS patch compliance, and vulnerability remediation across Windows and Linux fleets."
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
        title: "kai-manager",
        repoName: "sumit-kumawat/kai-manager",
        category: "Cloud & Orchestration",
        description: "Cluster Lifecycle Management & Workload Orchestrator. Automates multi-node cluster deployment, resource allocation, health telemetry, and automated failover across hybrid container and virtualization platforms.",
        techStack: ["Kubernetes", "Docker", "Python", "Shell/Bash", "Linux", "REST APIs"],
        githubUrl: "https://github.com/sumit-kumawat/kai-manager",
        highlights: [
            "Automated node provisioning and health polling",
            "Multi-environment configuration management",
            "Self-healing cluster agent integration"
        ],
        icon: SkillIcons.Icons8Cloud
    },
    {
        title: "WHMCS",
        repoName: "sumit-kumawat/WHMCS",
        category: "Hosting & Provisioning Ops",
        description: "Enterprise Web Hosting Automation & Virtual Machine Provisioning Suite. Custom modules integrating WHMCS with VMware vSphere, Proxmox VE, DNS/IPAM services, and cPanel/CloudLinux server farms for zero-touch client provisioning.",
        techStack: ["PHP", "WHMCS API", "VMware PowerCLI", "Proxmox API", "DNS/IPAM", "MySQL"],
        githubUrl: "https://github.com/sumit-kumawat/WHMCS",
        highlights: [
            "Automated VM & hosting lifecycle provisioning",
            "Real-time IPAM and DNS record synchronization",
            "Custom billing and resource quota hook workflows"
        ],
        icon: SkillIcons.Icons8Server
    },
    {
        title: "xFiles",
        repoName: "sumit-kumawat/xFiles",
        category: "Storage & Disaster Recovery",
        description: "Encrypted Distributed File Synchronization & Snapshot Backup Utility. Engineered for secure remote server synchronization, differential snapshot replication, and automated SHA-256 integrity verification with webhook alerts.",
        techStack: ["Shell/Bash", "Python", "rsync", "AES-256 / OpenSSL", "Cron", "Linux/Windows"],
        githubUrl: "https://github.com/sumit-kumawat/xFiles",
        highlights: [
            "End-to-end encrypted remote file transfer & rotation",
            "Automated SHA-256 checksum and integrity auditing",
            "Configurable retention policies and failure alert webhooks"
        ],
        icon: SkillIcons.Icons8Storage
    },
    {
        title: "IA-AMS",
        repoName: "sumit-kumawat/IA-AMS",
        category: "DC Ops & Asset Management",
        description: "Infrastructure Automation & Asset Management System. Unified discovery and management platform linking data center hardware (Dell PowerEdge/iDRAC), Infoblox IPAM mapping, rack/blade telemetry, and bare-metal OS provisioning pipelines (MaaS).",
        techStack: ["PowerShell", "Python", "Infoblox API", "Dell iDRAC", "MaaS", "Windows Server"],
        githubUrl: "https://github.com/sumit-kumawat/IA-AMS",
        highlights: [
            "Automated chassis & blade inventory discovery",
            "Infoblox IPAM/DNS automated subnet allocation",
            "Bare-metal OS provisioning and lifecycle tracking"
        ],
        icon: SkillIcons.Icons8Work
    },
    {
        title: "xVault",
        repoName: "sumit-kumawat/xVault",
        category: "Cybersecurity & Key Management",
        description: "Zero-Trust Credential, Token & SSL/TLS Certificate Rotation Vault. Secure repository featuring role-based access control (RBAC), biometric/hardware-backed cryptographic isolation, automated certificate renewal, and SIEM audit logging.",
        techStack: ["Python", "Cryptography", "SSL/TLS", "Wazuh / SIEM", "Active Directory", "REST API"],
        githubUrl: "https://github.com/sumit-kumawat/xVault",
        highlights: [
            "Hardware-backed zero-trust secret encryption",
            "Automated SSL/TLS certificate rotation pipelines",
            "Tamper-evident audit logging for SIEM compliance"
        ],
        icon: SkillIcons.Icons8Security
    },
    {
        title: "wipe-traces",
        repoName: "sumit-kumawat/wipe-traces",
        category: "Security & Forensic Hardening",
        description: "Forensic Trace Sanitizer & Security Baseline Hardening Toolkit. Automated incident response cleanup utility that scrubs residual logs, temporary artifacts, sensitive command histories, and applies CIS benchmark OS hardening across Linux and Windows systems.",
        techStack: ["Shell/Bash", "PowerShell", "Incident Response", "CIS Benchmarks", "Forensic Hygiene"],
        githubUrl: "https://github.com/sumit-kumawat/wipe-traces",
        highlights: [
            "Cross-platform secure log & memory dump sanitization",
            "Automated temporary artifact and trace purging",
            "One-click CIS benchmark compliance hardening"
        ],
        icon: SkillIcons.Icons8Bug
    }
];

export const certifications: Certification[] = [
    { 
        title: "Certified Ethical Hacker (CEH)", 
        issuer: "EC-Council", 
        year: "Dec 20, 2024",
        domain: "Cybersecurity & Pentesting",
        badgeUrl: "https://www.hatchtra.com/ceh.png"
    },
    { 
        title: "Microsoft Azure Fundamentals", 
        issuer: "Microsoft", 
        year: "2022",
        domain: "Cloud Architecture",
        badgeUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1280px-Microsoft_Azure.svg.png"
    },
    { 
        title: "Burp Suite Web Security", 
        issuer: "PortSwigger", 
        year: "2023",
        domain: "Application Security",
        badgeUrl: "https://cdn.simpleicons.org/burpsuite/FF6633"
    },
    { 
        title: "Cyber Hygiene Practice", 
        issuer: "ISEA / MeitY", 
        year: "2021",
        domain: "Security Best Practices",
        badgeUrl: "https://img.icons8.com/fluency/96/guarantee.png"
    }
];
