import React, { useState } from 'react';

interface RemoteIconProps {
  src: string;
  alt: string;
  className?: string;
}

const RemoteIcon: React.FC<RemoteIconProps> = ({ src, alt, className }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-neutral-100 rounded text-[10px] font-bold text-neutral-600 ${className || ''}`}>
        {alt.slice(0, 3).toUpperCase()}
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
};

// --- Technologies & Official Brand Logos ---

export const VMware = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://www.drupal.org/files/project-images/vmware.png" alt="VMware" className={className} />
);

export const VRealizeAutomation = ({ className }: { className?: string }) => (
  <div className="w-full h-full rounded-lg bg-white p-0.5 shadow-sm border border-neutral-100 flex items-center justify-center overflow-hidden">
    <RemoteIcon 
      src="https://www.stevenbright.com/2021/06/vmware-vrealize-automation-8-4-2-released/images/cover.png" 
      alt="vRealize Automation" 
      className={`${className || ''} object-contain mix-blend-multiply w-full h-full`} 
    />
  </div>
);

export const PowerCLI = ({ className }: { className?: string }) => (
  <RemoteIcon 
    src="https://blogs.vmware.com/wp-content/uploads/sites/132/2021/02/PowerCLI.png" 
    alt="VMware PowerCLI" 
    className={className} 
  />
);

export const KVM = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://upload.wikimedia.org/wikipedia/commons/7/70/Kvmbanner-logo2_1.png" alt="KVM" className={className} />
);

export const HyperV = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://upload.wikimedia.org/wikipedia/commons/5/58/Hyper-V_Logo.png" alt="Hyper-V" className={className} />
);

export const Nutanix = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Nutanix_Logo.svg/1280px-Nutanix_Logo.svg.png" alt="Nutanix" className={className} />
);

export const AWS = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/330px-Amazon_Web_Services_Logo.svg.png" alt="AWS" className={className} />
);

export const Azure = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1280px-Microsoft_Azure.svg.png" alt="Microsoft Azure" className={className} />
);

export const Docker = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Docker_Logo.png" alt="Docker" className={className} />
);

export const Windows = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://cdn.worldvectorlogo.com/logos/windows-server.svg" alt="Windows Server" className={className} />
);

export const MicrosoftExchange = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://upload.wikimedia.org/wikipedia/commons/7/79/Microsoft_Exchange_logo_%282013-2019%29.png" alt="Exchange" className={className} />
);

export const Server = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://cdn.worldvectorlogo.com/logos/active-directory-1.svg" alt="Active Directory" className={className} />
);

export const Cisco = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://www.dentonsolutions.com/wp-content/uploads/2017/06/Cisco-logo.png" alt="Cisco" className={className} />
);

export const pfSense = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://upload.wikimedia.org/wikipedia/commons/b/b9/PfSense_logo.png" alt="pfSense" className={className} />
);

export const Wazuh = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://wazuh.com/uploads/2022/05/Logo-blogpost.png" alt="Wazuh" className={className} />
);

export const CrowdStrike = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://1000logos.net/wp-content/uploads/2024/08/CrowdStrike-Emblem.png" alt="CrowdStrike" className={className} />
);

export const PowerShell = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://learn.microsoft.com/en-us/powershell/media/index/ps_black_128.svg" alt="PowerShell" className={className} />
);

export const Bash = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://cdn.rawgit.com/odb/official-bash-logo/master/assets/Logos/Identity/PNG/BASH_logo-transparent-bg-color.png" alt="Bash" className={className} />
);

export const Python = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Python_logo_and_wordmark.svg" alt="Python" className={className} />
);

export const SSL = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://logodownload.org/wp-content/uploads/2019/05/lets-encrypt-logo.png" alt="SSL/TLS" className={className} />
);

export const Shield = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://cdn.simpleicons.org/pfsense/000000" alt="Shield" className={className} />
);

export const Proxmox = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://cdn.simpleicons.org/proxmox/E57000" alt="Proxmox VE" className={className} />
);

export const OpenStack = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://cdn.simpleicons.org/openstack/ED1944" alt="OpenStack" className={className} />
);

export const Dell = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://cdn.simpleicons.org/dell/007DB8" alt="Dell PowerEdge" className={className} />
);

export const Infoblox = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://images.icon-icons.com/2699/PNG/512/infoblox_logo_icon_170652.png" alt="Infoblox" className={className} />
);

export const ReverseProxy = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/nginx-proxy-manager.webp" alt="Reverse Proxy" className={className} />
);

export const Apache = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://cdn.simpleicons.org/apache/D22128" alt="Apache" className={className} />
);

export const Tomcat = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://cdn.simpleicons.org/apachetomcat/F8DC75" alt="Tomcat" className={className} />
);

export const SpectroCloud = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://cdn.simpleicons.org/kubernetes/326CE5" alt="SpectroCloud" className={className} />
);

export const AlienVault = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://cdn.simpleicons.org/kalilinux/557C94" alt="AlienVault OSSIM" className={className} />
);

export const Git = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://cdn.simpleicons.org/git/F05032" alt="Git & CI/CD" className={className} />
);

export const StorageArea = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://img.icons8.com/?size=100&id=11873" alt="Storage Mapping" className={className} />
);

export const IIS = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://cdn.worldvectorlogo.com/logos/windows-server.svg" alt="IIS" className={className} />
);

// --- High-Fidelity Thematic Icons for Projects ---

export const Icons8Server = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://img.icons8.com/?size=100&id=jDxcFpRjY4iu" alt="Server" className={className} />
);

export const Icons8Cloud = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://img.icons8.com/?size=100&id=FLqnkaHTIYwU" alt="Cloud" className={className} />
);

export const Icons8Security = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://img.icons8.com/?size=100&id=OvVEbsERQxkM" alt="Security" className={className} />
);

export const Icons8Storage = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://img.icons8.com/?size=100&id=11873" alt="Storage" className={className} />
);

export const Icons8Bug = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://img.icons8.com/?size=100&id=RYJuBLO3YDl5" alt="Security Threat" className={className} />
);

export const Icons8Work = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://img.icons8.com/fluency/96/briefcase.png" alt="Infrastructure Workload" className={className} />
);
