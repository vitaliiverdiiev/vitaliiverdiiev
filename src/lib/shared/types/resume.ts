export interface Resume {
  generalInfo: GeneralInfo
  summary: string
  experience: Experience[]
  education: Education[]
  techStack: TechStack
}

export interface GeneralInfo {
  name: string
  secondName: string
  position: string
  location: string
  phone: string
  languages: Language[]
  email: string
  github: string
  telegram: string
  linkedin: string
}

export interface Language {
  language: string
  proficency: string
}

export interface Experience {
  position: string
  company: string
  companyType: string
  location: string
  dateStart: string;
  dateEnd: string;
  period: string
  positionType: string
  achievements: string[]
}

export interface Education {
  title: string
  almamater: string
  dates: string
  location: string
}

export interface TechStack {
  frontend: Frontend
  backend: Backend
  general: General
}

export interface Frontend {
  base: string[]
  frameworks: string[]
  "state management": string[]
  "ui libraries": string[]
  "css tools": string[]
  routing: string[]
  auth: string[]
  forms: string[]
  validation: string[]
  internalization: string[]
  api: string[]
  tables: string[]
  charts: string[]
  testing: string[]
  "ci/cd": string[]
  communication: string[]
  "project builders": string[]
}

export interface Backend {
  base: string[]
  frameworks: string[]
  api: string[]
  databases: string[]
  "orm/schemas": string[]
  containerization: string[]
  cloud: string[]
}

export interface General {
  methodologies: string[]
  documentation: string[]
  "version control": string[]
  os: string[]
}
