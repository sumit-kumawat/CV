import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Facebook, Twitter, ArrowUp, CheckCircle2, Server, Terminal, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard?.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  // Cool interactive animated constellation / network canvas for footer background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const nodesCount = Math.min(40, Math.floor((width * height) / 20000));
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulse: number;
      pulseSpeed: number;
      color: string;
    }> = [];

    const colors = [
      'rgba(255, 116, 93, 0.7)',  // Primary accent
      'rgba(56, 189, 248, 0.6)',  // Sky blue
      'rgba(52, 211, 153, 0.6)',  // Emerald
      'rgba(167, 139, 250, 0.5)'  // Violet
    ];

    for (let i = 0; i < nodesCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        color: colors[i % colors.length]
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connecting neural lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255, 116, 93, ${0.18 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // Draw glowing nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;

        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        const currentRadius = node.radius + Math.sin(node.pulse) * 0.8;

        // Outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = node.color.replace('0.7', '0.15').replace('0.6', '0.12');
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(1, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <footer 
      id="contact" 
      className="bg-neutral-950 text-white border-t border-neutral-800 relative overflow-hidden"
    >
      {/* Animated Interactive Constellation Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-0"
      />

      {/* Cyber Grid Overlay & Ambient Radial Glows */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"
      />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 py-14 md:py-16 relative z-10">
        
        {/* 3 Columns Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center md:text-left">
          
          {/* Column 1: Personal Bio */}
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="w-10 h-10 rounded-xl bg-primary text-white font-black flex items-center justify-center text-lg shadow-md shadow-primary/30">
                {personalInfo.name.charAt(0)}
              </span>
              <div>
                <h4 className="text-xl font-black text-white tracking-tight">
                  {personalInfo.name}
                </h4>
                <p className="text-xs text-primary font-semibold">
                  {personalInfo.title}
                </p>
              </div>
            </div>
            
            <p className="text-neutral-300 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Thank you for reviewing my personal engineering portfolio! I'm always open to discussing new DevOps and infrastructure opportunities, automation scripts, and technical challenges.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2 pt-2 text-xs text-neutral-400">
              <span className="inline-flex items-center gap-1.5 bg-neutral-900/90 px-3 py-1 rounded-lg border border-neutral-800">
                <Server className="w-3.5 h-3.5 text-primary" />
                <span>Virtualization</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-neutral-900/90 px-3 py-1 rounded-lg border border-neutral-800">
                <Terminal className="w-3.5 h-3.5 text-primary" />
                <span>PowerCLI</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-neutral-900/90 px-3 py-1 rounded-lg border border-neutral-800">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Open for Roles</span>
              </span>
            </div>
          </div>
          
          {/* Column 2: Direct Contact Details */}
          <div className="space-y-4">
            <h5 className="text-xs font-black text-primary tracking-[0.25em] uppercase">
              Get In Touch
            </h5>
            
            <div className="flex flex-col gap-3.5 items-center md:items-start">
              {/* Email */}
              <div className="flex items-center gap-3 group">
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="flex items-center gap-3 text-neutral-200 hover:text-white transition-colors text-sm font-medium"
                >
                  <div className="w-9 h-9 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>{personalInfo.email}</span>
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="text-neutral-400 hover:text-white text-xs px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : 'Copy'}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 group">
                <a 
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} 
                  className="flex items-center gap-3 text-neutral-200 hover:text-white transition-colors text-sm font-medium"
                >
                  <div className="w-9 h-9 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{personalInfo.phone}</span>
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="text-neutral-400 hover:text-white text-xs px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
                  title="Copy phone number"
                >
                  {copiedPhone ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : 'Copy'}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-neutral-200 text-sm font-medium">
                <div className="w-9 h-9 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-primary">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Column 3: Social Profiles */}
          <div className="space-y-4">
            <h5 className="text-xs font-black text-primary tracking-[0.25em] uppercase">
              Connect With Me
            </h5>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
              Feel free to connect on LinkedIn or check out my repositories and open-source scripts on GitHub.
            </p>
            
            <div className="flex justify-center md:justify-start gap-2.5 flex-wrap pt-1">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-primary hover:border-primary rounded-xl flex items-center justify-center transition-all shadow-md"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-primary hover:border-primary rounded-xl flex items-center justify-center transition-all shadow-md"
                aria-label="GitHub"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-primary hover:border-primary rounded-xl flex items-center justify-center transition-all shadow-md"
                aria-label="Twitter / X"
                title="Twitter / X Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-primary hover:border-primary rounded-xl flex items-center justify-center transition-all shadow-md"
                aria-label="Instagram"
                title="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-primary hover:border-primary rounded-xl flex items-center justify-center transition-all shadow-md"
                aria-label="Facebook"
                title="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 border-t border-neutral-800/80 pt-6 flex flex-col sm:flex-row justify-between items-center text-neutral-400 text-xs sm:text-sm gap-4">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name} — Personal Portfolio</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-primary transition-colors text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
