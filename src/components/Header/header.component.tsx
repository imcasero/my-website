import { ReactNode } from "react";
import css from "./header.module.css";

export function Header(): ReactNode {
  return (
    <header className={css.header}>
      <h1>DIEGO CASERO MARTIN</h1>
      <nav>
        <ul>
          <li>
            <a
              href="#home"
              onClick={(event) => scrollToSection(event, "#home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(event) => scrollToSection(event, "#about")}
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(event) => scrollToSection(event, "#projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(event) => scrollToSection(event, "#skills")}
            >
              Skills
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function scrollToSection(
  event: React.MouseEvent<HTMLAnchorElement>,
  targetId: string
) {
  event.preventDefault();

  const targetElement = document.querySelector(targetId);

  if (targetElement instanceof HTMLElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
