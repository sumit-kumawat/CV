
// --- User Provided Official Logos ---

const RemoteIcon = ({ src, alt, className }: { src: string, alt: string, className?: string }) => (
  <img 
    src={src} 
    alt={alt} 
    className={className} 
    referrerPolicy="no-referrer"
  />
);

export const VMware = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://upload.wikimedia.org/wikipedia/commons/9/91/VMware_logo.svg" alt="VMware" className={className} />
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
  <RemoteIcon src="https://img.icons8.com/?size=100&id=VLKafOkk3sBX" alt="Azure" className={className} />
);

export const Docker = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Docker_Logo.png" alt="Docker" className={className} />
);

export const CPanel = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/CPanel_logo.svg/960px-CPanel_logo.svg.png" alt="cPanel" className={className} />
);

export const JetBackup = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://www.jetbackup.com/wp-content/uploads/2023/09/JetBackup_Logo.png" alt="JetBackup" className={className} />
);

export const Windows = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://cdn.worldvectorlogo.com/logos/windows-server.svg" alt="Windows Server" className={className} />
);

export const MicrosoftExchange = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://upload.wikimedia.org/wikipedia/commons/7/79/Microsoft_Exchange_logo_%282013-2019%29.png" alt="Exchange" className={className} />
);

export const Linux = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://img.icons8.com/?size=100&id=HF4xGsjDERHf" alt="Linux" className={className} />
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

export const Imunify = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://imunify360.com/wp-content/uploads/2021/03/Imunify360-800-2.png" alt="Imunify360" className={className} />
);

export const CloudLinux = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://cloudlinux.com/wp-content/uploads/2025/12/CloudLinux-Logo.png" alt="CloudLinux" className={className} />
);

export const Wazuh = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://wazuh.com/uploads/2022/05/Logo-blogpost.png" alt="Wazuh" className={className} />
);

export const CrowdStrike = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://1000logos.net/wp-content/uploads/2024/08/CrowdStrike-Emblem.png" alt="CrowdStrike" className={className} />
);

export const PowerShell = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://www.tools4ever.com/wp-content/uploads/2022/08/powershell_logo.png.webp" alt="PowerShell" className={className} />
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

export const Code = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://cdn.simpleicons.org/visualstudiocode/007ACC" alt="Code" className={className} />
);

export const Shield = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://cdn.simpleicons.org/pfsense/000000" alt="Shield" className={className} />
);

export const Network = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://cdn.simpleicons.org/wireshark/1679A7" alt="Network" className={className} />
);

export const JetBackupIcon = ({ className }: { className?: string }) => (
  <RemoteIcon src="https://cdn.simpleicons.org/jetbackup/FF6600" alt="JetBackup" className={className} />
);

// --- Icons8 Fluency Icons for Aesthetic Enhancements ---

export const Icons8Server = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/?size=100&id=jDxcFpRjY4iu" alt="Server" className={className} referrerPolicy="no-referrer" />
);

export const Icons8Cloud = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/?size=100&id=FLqnkaHTIYwU" alt="Cloud" className={className} referrerPolicy="no-referrer" />
);

export const Icons8Security = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/?size=100&id=OvVEbsERQxkM" alt="Security" className={className} referrerPolicy="no-referrer" />
);

export const Icons8Storage = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/?size=100&id=11873" alt="Storage" className={className} referrerPolicy="no-referrer" />
);

export const Icons8Bug = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/?size=100&id=RYJuBLO3YDl5" alt="Vulnerability" className={className} referrerPolicy="no-referrer" />
);

export const Icons8Work = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/briefcase.png" alt="Work" className={className} referrerPolicy="no-referrer" />
);

export const Icons8Certificate = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/certificate.png" alt="Certificate" className={className} referrerPolicy="no-referrer" />
);

export const Icons8Diploma = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/diploma.png" alt="Diploma" className={className} referrerPolicy="no-referrer" />
);

export const Icons8University = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/university.png" alt="University" className={className} referrerPolicy="no-referrer" />
);

export const Icons8Student = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/student-male.png" alt="Student" className={className} referrerPolicy="no-referrer" />
);

export const Icons8LinkedIn = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/linkedin.png" alt="LinkedIn" className={className} referrerPolicy="no-referrer" />
);

export const Icons8GitHub = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/github.png" alt="GitHub" className={className} referrerPolicy="no-referrer" />
);

export const Icons8Email = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/mail.png" alt="Email" className={className} referrerPolicy="no-referrer" />
);

export const Icons8Phone = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/phone.png" alt="Phone" className={className} referrerPolicy="no-referrer" />
);

export const Icons8Location = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/marker.png" alt="Location" className={className} referrerPolicy="no-referrer" />
);

export const Icons8Badge = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/guarantee.png" alt="Badge" className={className} referrerPolicy="no-referrer" />
);

export const Icons8Instagram = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/instagram-new.png" alt="Instagram" className={className} referrerPolicy="no-referrer" />
);

export const Icons8Facebook = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/facebook-new.png" alt="Facebook" className={className} referrerPolicy="no-referrer" />
);

export const Icons8Twitter = ({ className }: { className?: string }) => (
    <img src="https://img.icons8.com/fluency/96/twitter.png" alt="Twitter" className={className} referrerPolicy="no-referrer" />
);
