import React, { useState, useEffect } from 'react';
import { personalInfo, navLinks } from '../constants';
import { 
  Menu, 
  X, 
  MessageSquare, 
  User, 
  Layers, 
  Code2, 
  Briefcase, 
  Award, 
  GraduationCap, 
  Mail 
} from 'lucide-react';

const getNavIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'about':
      return <User className="w-3.5 h-3.5" />;
    case 'skills':
      return <Layers className="w-3.5 h-3.5" />;
    case 'projects':
      return <Code2 className="w-3.5 h-3.5" />;
    case 'experience':
      return <Briefcase className="w-3.5 h-3.5" />;
    case 'certifications':
      return <Award className="w-3.5 h-3.5" />;
    case 'education':
      return <GraduationCap className="w-3.5 h-3.5" />;
    case 'contact':
      return <Mail className="w-3.5 h-3.5" />;
    default:
      return null;
  }
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-xl border-b border-neutral-200/80 text-neutral-900 ${
        isScrolled 
          ? 'py-2.5 shadow-md' 
          : 'py-3 shadow-xs'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Brand Logo & Name */}
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, '#home')} 
            className="text-lg sm:text-xl font-black tracking-tight group flex items-center gap-2.5 text-neutral-900 shrink-0"
          >
            <span className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
              {personalInfo.name.charAt(0)}
            </span>
            <span className="truncate">{personalInfo.name}</span>
          </a>
          
          {/* Desktop Nav (Large screens >= 1180px) */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 font-medium text-xs xl:text-sm transition-all rounded-full text-neutral-600 hover:text-primary hover:bg-neutral-100/80 group whitespace-nowrap"
              >
                <span className="text-neutral-400 group-hover:text-primary transition-colors">
                  {getNavIcon(link.name)}
                </span>
                <span>{link.name}</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary-dark text-white text-xs xl:text-sm font-semibold rounded-full shadow-md shadow-primary/25 transition-all shrink-0 whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </a>
          </nav>

          {/* Tab & Medium Screen Nav (Medium to Large screens: 768px - 1279px) */}
          <div className="hidden md:flex xl:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-primary hover:bg-primary-dark text-white text-xs font-semibold rounded-full shadow-md shadow-primary/25 transition-all shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </a>

            {/* Hamburger Button for Tablet & Mobile for clean uncluttered layout */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="px-3 py-1.5 flex items-center gap-1.5 rounded-xl transition-all shadow-xs bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-800 text-xs font-semibold"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span>Menu</span>
            </button>
          </div>

          {/* Mobile Menu Button (<768px) */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="w-10 h-10 flex items-center justify-center rounded-xl transition-all shadow-xs bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-800"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Dropdown for Tablet & Mobile views */}
        {isMenuOpen && (
          <div className="xl:hidden mt-3 bg-white text-neutral-900 rounded-2xl shadow-xl border border-neutral-200 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="grid grid-cols-1 sm:grid-cols-2 p-3 gap-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)} 
                  className="flex items-center gap-2.5 text-neutral-700 font-medium text-sm hover:text-primary hover:bg-neutral-50 transition-colors py-2.5 px-3.5 rounded-xl"
                >
                  <span className="text-primary/70">
                    {getNavIcon(link.name)}
                  </span>
                  <span>{link.name}</span>
                </a>
              ))}
              <div className="sm:col-span-2 pt-2 border-t border-neutral-100 mt-1">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Let's Talk</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
