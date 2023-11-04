import { ReactNode } from "react";
import css from "./projects.module.css";
import { Technologies } from "../model";

const technologiesArray: string[] = Object.values(Technologies);
export default function Projects({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  return (
    <section id="projects" className={css.container}>
      <h3>Projects</h3>
      <div className={css.technologies}>
        {technologiesArray.map((tech) => (
          <button className={css[tech.toLowerCase()]}>{tech}</button>
        ))}
      </div>
      <ul>{children}</ul>
    </section>
  );
}
