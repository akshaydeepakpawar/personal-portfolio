export interface Project {
  title: string;
  image: string;
  description: string;
  features: string[];
  technologies: string[];
  link: string;
  github: string;
  featured: boolean;
}

export interface Journey {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Contact {
  address: string;
  phoneNo: string;
  email: string;
}
