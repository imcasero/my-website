export interface IProject {
  name: string;
  description: string;
  image: string; // URL de la imagen del proyecto
  deploy?: string; // Enlace de implementación (opcional)
  repository: string; // Enlace al repositorio del proyecto
  technologies: Technologies[]; // Array de tecnologías utilizadas en el proyecto
}

export enum Technologies {
  REACT = "React",
  JAVASCRIPT = "JavaScript",
  POKEAPI = "PokeAPI",
  TYPESCRIPT = "TypeScript",
  CSS = "CSS",
  ANIMATIONS = "Animations",
}
