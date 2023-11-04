import { IProject, Technologies } from "./interfaces";

export const projects: IProject[] = [
  {
    name: "To-do List",
    description:
      "Contained within this repository is the codebase for a React application designed as a comprehensive to-do list.",
    image: "/projects/to-doList.png",
    deploy: "https://imcasero.github.io/to-doList/",
    repository: "https://github.com/imcasero/to-doList",
    technologies: [Technologies.REACT, Technologies.JAVASCRIPT],
  },
  {
    name: "Pokedex",
    description: "This repository will create a Pokedex using the PokeAPI.",
    image: "/projects/pokedex.png",
    deploy: "https://imcasero.github.io/pokedex",
    repository: "https://github.com/imcasero/pokedex",
    technologies: [Technologies.JAVASCRIPT, Technologies.POKEAPI],
  },
  {
    name: "Tip Calculator",
    description:
      "This project utilizes TypeScript and allows the user to input a bill amount and a percentage to calculate the total bill with tip.",
    image: "/projects/tip-calculator.png",
    deploy: "https://imcasero.github.io/Tip-Calculator",
    repository: "https://github.com/imcasero/Tip-Calculator",
    technologies: [Technologies.TYPESCRIPT, Technologies.CSS],
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "A simple Tic-Tac-Toe game using HTML, CSS, and JavaScript to practice basic concepts.",
    image: "/projects/tictac.png",
    deploy: "https://imcasero.github.io/tictac",
    repository: "https://github.com/imcasero/tictac",
    technologies: [Technologies.JAVASCRIPT, Technologies.CSS],
  },
  {
    name: "CSS Animation Project",
    description:
      "A small project I created to enhance and comprehend my skills in CSS, particularly in animations.",
    image: "/projects/bottle.png",
    deploy: "https://imcasero.github.io/bottles",
    repository: "https://github.com/imcasero/bottles",
    technologies: [Technologies.CSS, Technologies.ANIMATIONS],
  },
];
