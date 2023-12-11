import { IExperience, IProject, Month, Technologies } from "./interfaces";

export const projects: IProject[] = [
  {
    name: "To do List",
    description:
      "Contained within this repository is the codebase for a React application designed as a comprehensive to-do list.",
    year: 2023,
    image: "/projects/to-doList.png",
    deploy: "https://imcasero.github.io/to-doList/",
    repository: "https://github.com/imcasero/to-doList",
    technologies: [
      Technologies.REACT,
      Technologies.JAVASCRIPT,
      Technologies.CSS,
    ],
  },
  {
    name: "Pokedex",
    description:
      "Contained within this repository is the Pokedex application, which utilizes JavaScript and CSS for its development.",
    year: 2023,
    image: "/projects/pokedex.png",
    deploy: "https://imcasero.github.io/pokedex",
    repository: "https://github.com/imcasero/pokedex",
    technologies: [Technologies.JAVASCRIPT, Technologies.API, Technologies.CSS],
  },
  {
    name: "Bottles",
    description:
      "This repository showcases a concise project aimed at refining CSS skills, focusing on animations and their implementation.",
    year: 2021,
    image: "/projects/bottle.png",
    deploy: "https://imcasero.github.io/bottles",
    repository: "https://github.com/imcasero/bottles",
    technologies: [Technologies.CSS, Technologies.ANIMATIONS],
  },
  {
    name: "Tip Calculator",
    description:
      "This project utilizes TypeScript and allows the user to input a bill amount and a percentage to calculate the total bill with tip.",
    year: 2023,
    image: "/projects/tip-calculator.png",
    deploy: "https://imcasero.github.io/Tip-Calculator",
    repository: "https://github.com/imcasero/Tip-Calculator",
    technologies: [Technologies.TYPESCRIPT, Technologies.CSS],
  },
];
export const experiences: IExperience[] = [
  {
    bussines: "Globant",
    from: { month: Month.August, year: new Date(2023, Month.August) },
    to: "Current",
    description:
      "Development of interfaces using React, Angular, and styled with CSS/SASS for complex web applications. Collaboration with multidisciplinary teams to integrate design and functionality. Use of Git and GitHub for version control and Agile with Scrum for project collaboration.",
    technologies: [
      Technologies.REACT,
      Technologies.ANGULAR,
      Technologies.TYPESCRIPT,
      Technologies.JAVASCRIPT,
      Technologies.CSS,
      Technologies.SASS,
      Technologies.GITHUB,
      Technologies.GIT,
      Technologies.VSCODE,
      Technologies.AGILE,
      Technologies.SCRUM,
      Technologies.TDD,
      Technologies.FIGMA,
    ],
  },
  {
    bussines: "Inetum",
    from: { month: Month.April, year: new Date(2023, Month.April) },
    to: { month: Month.June, year: new Date(2023, Month.June) },
    description:
      "Interface layout tasks and utilization of the Figma platform for application design. Backend development using .NET, contributing to the design and creation of robust solutions for specific projects.",
    technologies: [
      Technologies.JAVASCRIPT,
      Technologies.CSS,
      Technologies.BOOTSTRAP,
      Technologies.VSCODE,
      Technologies.DOTNET,
      Technologies.CSHARP,
      Technologies.VB,
      Technologies.FIGMA,
      Technologies.SQL,
    ],
  },
];
