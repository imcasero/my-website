import photo from "../../assets/photo.png";
import css from "./home.module.css";
export function Home() {
  return (
    <section className={css.home} id="home">
      <img src={photo} alt="profile photo" className={css.img} />
      <div className={css.title}>
        <h2>
          Hi I'm Diego Casero!<span>|</span>
        </h2>
        <h3>Frontend Developer</h3>
        <p>Art challenges technology and technology inspires art.</p>
      </div>
    </section>
  );
}
