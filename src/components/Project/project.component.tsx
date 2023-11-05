import { ReactElement } from "react";
import { IProject } from "../model";
import css from "./project.module.css";
import github from "../../assets/github.svg";
import deploy from "../../assets/deploy.svg";

export default function Project({ data }: { data: IProject }): ReactElement {
  return (
    <li className={css.card}>
      <img src={data.image} />
      <div className={css.data}>
        <h4>{data.name}</h4>
        <p>{data.description}</p>
        <div className={css.links}>
          <a href={data.repository} target="_blank">
            <img src={github} alt="github" />
            Github
          </a>
          {data.deploy && (
            <a href={data.deploy} target="_blank">
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
