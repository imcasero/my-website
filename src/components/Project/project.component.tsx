import { ReactElement } from "react";
import { IProject } from "../model";
import css from "./project.module.css";
import github from "../../assets/github.png";
import deploy from "../../assets/deploy.png";

export default function Project({ data }: { data: IProject }): ReactElement {
  return (
    <li className={css.card}>
      <img src={data.image} />
      <div className={css.data}>
        <h4>{data.name}</h4>
        <p>{data.description}</p>
        <div className={css.links}>
          <a href={data.repository} target="blank">
            <img src={github} alt="github" />
            Github
          </a>
          {data.deploy && (
            <a href={data.deploy} target="blank">
              <img src={deploy} alt="github" />
              Deploy
            </a>
          )}
        </div>
        <div className={css.technologies}>
          {data.technologies.map((tech, index) => (
            <span key={index} className={css[tech.toLowerCase()]}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}
