export interface IProject {
  id: number;
  name: string;
  description: string;
  year: number;
  image: string;
  deploy?: string;
  repository: string;
  technologies: Technologies[];
}
export enum Month {
  January = 0,
  February = 1,
  March = 2,
  April = 3,
  May = 4,
  June = 5,
  July = 6,
  August = 7,
  September = 8,
  October = 9,
  November = 10,
  December = 11,
}

export interface IMonthYear {
  month: Month;
  year: number;
}

export interface IExperience {
  id: number;
  bussines: string;
  from: IMonthYear;
  to: IMonthYear | "Current";
  description: string;
  technologies: Technologies[];
}

export enum Technologies {
  REACT = "React",
  ANGULAR = "Angular",
  JAVASCRIPT = "JavaScript",
  TYPESCRIPT = "TypeScript",
  GITHUB = "Github",
  SASS = "SASS",
  CSS = "CSS",
  API = "API",
  ANIMATIONS = "Animations",
  GIT = "Git",
  VSCODE = "Vscode",
  SCRUM = "Scrum",
  AGILE = "Agile",
  TDD = "TDD",
  FIGMA = "Figma",
  BOOTSTRAP = "Bootstrap",
  DOTNET = ".NET",
  CSHARP = "CSharp",
  VB = "VB.NET",
  SQL = "SQL",
}
