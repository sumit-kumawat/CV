
import React from 'react';

// --- Existing Official SVGs for Skills ---

export const Windows = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 88 88" className={className} fill="currentColor">
    <path fill="#F25022" d="M0 12.402l35.687-4.86.016 34.423-35.67.216-.033-29.779z"/>
    <path fill="#7FBA00" d="M39.699 6.887L87.974 0v41.85H39.715V6.887z"/>
    <path fill="#00A4EF" d="M0 46.22l35.67.185.016 34.69L0 76.168V46.22z"/>
    <path fill="#FFB900" d="M39.684 46.421H88V88l-48.316-6.66V46.421z"/>
  </svg>
);

export const MicrosoftExchange = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path stroke="#0078D4" d="M3 12h18M3 6h18M3 18h18" strokeWidth="2" strokeLinecap="round"/>
    <rect x="7" y="4" width="10" height="16" rx="2" fill="white" stroke="#0078D4" strokeWidth="2"/>
    <path d="M10 8l4 4-4 4" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const VMware = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path fill="#607078" d="M18.665 2.1H14.54l-1.895 9.124L10.749 2.1H5.334L0 21.9h3.765l2.723-11.83 2.502 11.83h4.152l2.503-11.83L18.37 21.9H24l-5.335-19.8z"/>
  </svg>
);

export const KVM = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 60" className={className} fill="currentColor">
    <rect width="100" height="60" rx="8" fill="#232323"/>
    <text x="50" y="42" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="35" textAnchor="middle" fill="white">KVM</text>
  </svg>
);

export const HyperV = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path fill="#0078D4" d="M2 2h20v20H2z"/>
    <path fill="white" d="M6 6h3v12H6zm5 0h8v3h-8zm0 4.5h8v3h-8zm0 4.5h8v3h-8z"/>
  </svg>
);

export const Nutanix = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path fill="#0642BC" d="M17.82 2.22L6.18 2.22L0.36 12.00L6.18 21.78L17.82 21.78L23.64 12.00L17.82 2.22ZM16.32 19.28L7.68 19.28L4.69 14.28L7.68 9.28L16.32 9.28L19.31 14.28L16.32 19.28Z"/>
    <path fill="#84B7F8" d="M12.00 4.72L14.99 9.72L12.00 14.72L9.01 9.72L12.00 4.72Z"/>
  </svg>
);

export const AWS = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path fill="#FF9900" d="M17.4 18.2c-.3 0-.6.1-.9.1-3.6 0-5.8-1.5-6.6-4.5h-1.6c-.7 2.3-2.1 3.5-4.1 3.5-1.9 0-3.2-1.2-3.2-3 0-2 1.6-3.2 4.6-3.2h2.7v-1.1c0-1.6-.9-2.3-2.6-2.3-1.4 0-2.3.4-3.5 1.4l-1.1-1.2c1.4-1.3 3.1-1.7 4.9-1.7 2.8 0 4.2 1.5 4.2 4.1v6.9h-1.6v-2.3c-.9 2-2.8 3.3-5.3 3.3zm-6.6-5.4h-2.5c-1.8 0-2.6.6-2.6 1.7 0 1.1.9 1.7 2.3 1.7 2 0 3.8-1.3 3.8-3.4v-1.3z"/>
    <path fill="#232F3E" d="M12 21.8c2.6 0 5-1 6.8-2.8l1.3 1.3c-2.1 2.1-5 3.3-8.1 3.3-2.6 0-5.1-.9-7.1-2.5l1-1.5c1.7 1.4 3.9 2.2 6.1 2.2z"/>
  </svg>
);

export const Azure = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path fill="#0089D6" d="M5.3 16.5l3.8-11h5.6l-8.6 15z"/>
    <path fill="#0072C6" d="M13.2 13.9l-2.6-2.4 4.1-6h5.6l-9 15.8z"/>
  </svg>
);

export const Docker = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path fill="#2496ED" d="M13.98 8.07H15.87V9.96H13.98V8.07ZM13.98 5.66H15.87V7.55H13.98V5.66ZM11.39 8.07H13.28V9.96H11.39V8.07ZM11.39 5.66H13.28V7.55H11.39V5.66ZM8.81 8.07H10.7V9.96H8.81V8.07ZM8.81 5.66H10.7V7.55H8.81V5.66ZM6.22 8.07H8.11V9.96H6.22V8.07ZM11.39 10.47H13.28V12.36H11.39V10.47ZM13.98 10.47H15.87V12.36H13.98V10.47ZM1.13 10.47H3.01V12.36H1.13V10.47ZM3.72 10.47H5.6V12.36H3.72V10.47ZM6.22 10.47H8.11V12.36H6.22V10.47ZM8.81 10.47H10.7V12.36H8.81V10.47ZM24 13.58C24 13.58 23.95 16.14 22.09 18.06C20.48 19.72 17.58 19.45 17.58 19.45C17.58 19.45 16.89 21.82 13.78 22.25C11.51 22.56 9.53 21.6 9.53 21.6C9.53 21.6 7.6 22.26 5.8 21.4C4.24 20.65 3.33 19.06 3.33 19.06C3.33 19.06 1.84 19.38 0.61 18.25C-0.45 17.29 0.17 14.6 0.17 14.6L1.08 13.73L22.9 13.11L24 13.58Z"/>
  </svg>
);

export const Linux = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path fill="#FCC624" d="M12 2C9 2 7 4 7 7c0 2 1 3 2 4 0 2-2 4-2 6 0 3 2 5 5 5s5-2 5-5c0-2-2-4-2-6 1-1 2-2 2-4 0-3-2-5-5-5z"/>
    <path fill="#333" d="M12 22c-3 0-6-2-6-5v-1l1-3h10l1 3v1c0 3-3 5-6 5z"/>
  </svg>
);

export const Cisco = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 32" className={className} fill="currentColor">
    <path fill="#1BA0D7" d="M7.4 24.3l-2.6-4.5L2.2 24.3c-1 1.7.2 3.8 2.2 3.8h.9c1.9 0 3.1-2.1 2.1-3.8zM15.5 12.1l-2.6-4.5-2.6 4.5c-1 1.7.2 3.8 2.2 3.8h.9c1.9 0 3.1-2.1 2.1-3.8zM23.6 24.3l-2.6-4.5-2.6 4.5c-1 1.7.2 3.8 2.2 3.8h.9c1.9 0 3.1-2.1 2.1-3.8zM31.8 12.1l-2.6-4.5-2.6 4.5c-1 1.7.2 3.8 2.2 3.8h.9c1.9 0 3.1-2.1 2.1-3.8zM39.9 24.3l-2.6-4.5-2.6 4.5c-1 1.7.2 3.8 2.2 3.8h.9c1.9 0 3.1-2.1 2.1-3.8zM48 12.1l-2.6-4.5-2.6 4.5c-1 1.7.2 3.8 2.2 3.8h.9c1.9 0 3.1-2.1 2.1-3.8zM56.2 24.3l-2.6-4.5-2.6 4.5c-1 1.7.2 3.8 2.2 3.8h.9c1.9 0 3.1-2.1 2.1-3.8zM64.3 12.1l-2.6-4.5-2.6 4.5c-1 1.7.2 3.8 2.2 3.8h.9c1.9 0 3.1-2.1 2.1-3.8z"/>
  </svg>
);

export const CrowdStrike = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path fill="#FC0000" d="M21.2 5.1c-1.6-.8-3.4-1.3-5.2-1.3-1.8 0-3.6.4-5.2 1.3L2 10.2l2.6 4.5L12 10.4l7.4 4.3 2.6-4.5-8.8-5.1z"/>
    <path fill="#333" d="M12 13l-4.5 2.6L12 18.2l4.5-2.6z"/>
  </svg>
);

export const PowerShell = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path fill="#5391FE" d="M20.5 13.5l-6-9-6 9h12z"/>
    <rect x="2" y="15" width="20" height="4" fill="#333"/>
    <path fill="#333" d="M5 8l4 4-4 4"/>
  </svg>
);

export const CPanel = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path fill="#FF6C2C" d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10zM6.5 12c0 3 2.5 5.5 5.5 5.5s5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5S6.5 9 6.5 12z"/>
    <path fill="#FFF" d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
  </svg>
);

export const Code = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

export const Server = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

export const Network = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2v20" />
    <path d="M12 12l4.9 4.9" />
  </svg>
);

export const Shield = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const JetBackup = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#FF6600" strokeWidth="2">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 8v4l3 3"/>
    <path d="M7 16l-2-2"/>
  </svg>
);

export const Wazuh = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="#00A9E0">
        <circle cx="12" cy="12" r="10" fillOpacity="0.2" />
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 18l-8-4V8l8-4 8 4v8l-8 4z" />
    </svg>
);

export const Imunify = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="#37A000">
        <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm0 18c-4.19-1.12-7.16-5.32-7.8-9.45L12 12l7.8-1.45c-.64 4.13-3.61 8.33-7.8 9.45z"/>
    </svg>
);

// --- New Icons8 Components for Experience & Projects ---

export const Icons8Server = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/server.png" alt="Server" className={className} />
);

export const Icons8Cloud = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/cloud-computing.png" alt="Cloud" className={className} />
);

export const Icons8Security = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/security-shield-green.png" alt="Security" className={className} />
);

export const Icons8Storage = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/data-storage-network.png" alt="Storage" className={className} />
);

export const Icons8Bug = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/bug.png" alt="Vulnerability" className={className} />
);

export const Icons8Work = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/briefcase.png" alt="Work" className={className} />
);

export const Icons8Company = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/company.png" alt="Company" className={className} />
);
