import css from "./about.module.css";
import photo from "../../assets/ilustration.svg";
import { ReactNode } from "react";
export default function About(): ReactNode {
  return (
    <section id="about" className={css.container}>
      <h3>About me</h3>
      <div className={css.description}>
        <article className={css.text}>
          <p>
            🚀 Hello! I'm a junior web developer from Spain and I'm head over
            heels in love with programming and technology. 😍 Currently, I'm
            developing my skills as a full-stack developer and I'm eager to
            learn more every day. 😎
          </p>

          <p>
            I consider myself a creative, communicative, and self-taught person.
            What I love the most about programming is the constant opportunity
            to learn and be innovative. I'm always striving to stay up-to-date
            with the latest and greatest in the industry. 🤓
          </p>

          <p>
            I bring a fresh perspective and a can-do attitude to every project I
            work on. I love working in a team and enjoy finding creative
            solutions to challenges. Whether I'm working solo or as part of a
            team, I'm committed to delivering top-notch results and having fun
            along the way. 🤝
          </p>
        </article>
        <img className={css.ilustration} src={photo}></img>
      </div>
    </section>
  );
}
