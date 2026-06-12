export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
  cretificate?: string;
}

export interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
}

export interface Contact {
  address: string;
  phoneNo: string;
  email: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}
