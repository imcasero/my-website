import { ReactNode } from "react";
import photo from "../../assets/photo.png";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import css from "./home.module.css";
export function Home(): ReactNode {
  return (
    <section className={css.home} id="home">
      <img src={photo} alt="profile photo" className={css.img} />
      <div className={css.title}>
        <h2>
          Hi I'm Diego Casero!<span>|</span>
        </h2>
        <h3>Frontend Developer</h3>
        <p>Art challenges technology and technology inspires art.</p>
        <div className={css.contact}>
          <a
            href="https://github.com/imcasero"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/imcasero/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://twitter.com/imcasero_dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
        </div>
      </div>
    </section>
  );
}
