import { ReactNode } from "react";
import css from "./projects.module.css";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Projects({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  return (
    <section id="projects" className={css.container}>
      <h3>Projects</h3>
      <ul>{children}</ul>
    </section>
  );
}
