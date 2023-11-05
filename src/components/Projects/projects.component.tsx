import { ReactNode } from "react";
import css from "./projects.module.css";
import { Technologies } from "../model";
export default function Projects({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const technologiesArray: string[] = Object.values(Technologies);
  return (
    <section id="projects" className={css.container}>
      <h3>Projects</h3>
      <div className={css.technologies}>
        {technologiesArray.map((tech, index) => (
          <button
            key={index}
            className={css[tech.toLowerCase()]}
            id={tech.toLowerCase()}
          >
            {tech}
          </button>
        ))}
      </div>
      <ul>{children}</ul>
    </section>
  );
}
