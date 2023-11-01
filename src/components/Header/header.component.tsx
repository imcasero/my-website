import css from "./header.module.css";
export function Header() {
  return (
    <header className={css.header}>
      <h1>DIEGO CASERO MARTIN</h1>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#proyects">Proyectos</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
