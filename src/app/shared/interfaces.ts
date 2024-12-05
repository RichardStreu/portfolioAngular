export interface Project {
  name: string;
  isCurrentlyShown: boolean;
  projectImg: string;
  skillsList: Skill[],
  headline: {
    en: string;
    de: string;
  },
  description: {
    en: string;
    de: string;
  }
}

export interface Skill {
  skillName: string;
  skillImg: string;
}