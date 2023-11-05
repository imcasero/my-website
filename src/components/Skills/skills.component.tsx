import css from "./skills.module.css";
import reactSVG from "/skills/react.svg";
import angularSVG from "/skills/angular.svg";
import typescriptSVG from "/skills/typescript.svg";
import javascriptSVG from "/skills/javascript.svg";
import cssSVG from "/skills/css.svg";
import sassSVG from "/skills/sass.svg";
import tailwindSVG from "/skills/tailwind.svg";
import bootstrapSVG from "/skills/bootstrap.svg";
import agileSVG from "/skills/agile.svg";
import gitSVG from "/skills/git.svg";
import githubSVG from "/skills/github.svg";

export default function Skills() {
  const svgFiles = {
    React: reactSVG,
    Angular: angularSVG,
    TypeScript: typescriptSVG,
    JavaScript: javascriptSVG,
    CSS: cssSVG,
    Tailwind: tailwindSVG,
    Bootstrap: bootstrapSVG,
    Sass: sassSVG,
    GitHub: githubSVG,
    Git: gitSVG,
    Agile: agileSVG,
  };

  const renderSlides = () => {
    return Object.entries(svgFiles).map(([key, photo]: [string, string]) => (
      <li key={key}>
        <img src={photo} alt={key} />
      </li>
    ));
  };

  return (
    <section className={css.container} id="skills">
      <h3>Skills</h3>
      <ul>{renderSlides()}</ul>
    </section>
  );
}
