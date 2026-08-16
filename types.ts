
import React from 'react';

export interface Skill {
  name: string;
  icon: React.FC<{ className?: string }>;
}

export interface SkillCategory {
  title: string;
  description?: string;
  icon?: React.FC<{ className?: string }>;
  skills: Skill[];
}

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  points: string[];
}

export interface EducationItem {
    institution: string;
    location: string;
    degree: string;
    period: string;
    cgpa: string;
}

export interface Project {
  title: string;
  repoName: string;
  category: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  highlights: string[];
  icon: React.FC<{ className?: string }>;
}

export interface Certification {
  title: string;
  issuer: string;
  year: number | string;
  credentialId?: string;
  domain?: string;
  badgeUrl?: string;
}

