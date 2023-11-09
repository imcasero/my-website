import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import css from "./skills.module.css";
import reactSVG from "/skills/react.svg";
import angularSVG from "/skills/angular.svg";
import typescriptSVG from "/skills/typescript.svg";
import javascriptSVG from "/skills/javascript.svg";
import cssSVG from "/skills/css.svg";
import sassSVG from "/skills/sass.svg";
import tailwindSVG from "/skills/tailwind.svg";
import bootstrapSVG from "/skills/bootstrap.svg";
import gitSVG from "/skills/git.svg";
import githubSVG from "/skills/github.svg";

export default function Skills() {
  const svgFiles = {
    React: reactSVG,
    Angular: angularSVG,
    TypeScript: typescriptSVG,
    JavaScript: javascriptSVG,
    CSS: cssSVG,
    Bootstrap: bootstrapSVG,
    Tailwind: tailwindSVG,
    Sass: sassSVG,
    GitHub: githubSVG,
    Git: gitSVG,
  };

  const renderSlides = () => {
    return Object.entries(svgFiles).map(([key, photo]: [string, string]) => (
      <div key={key} className={css.slide}>
        <img src={photo} alt={key} className={css.img} />
        <h4 className={css.technologiTitle}>{key}</h4>
      </div>
    ));
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <section className={css.container} id="skills">
      <h3>Skills</h3>
      <div>
        <Slider {...settings}>{renderSlides()}</Slider>
      </div>
    </section>
  );
}
