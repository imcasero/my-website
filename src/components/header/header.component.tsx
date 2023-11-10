import { ReactElement } from 'react';
import logo from '/IconLight.svg';
import css from './header.module.css';
import moon from '../../assets/moon.svg';
import { useNavigate } from 'react-router-dom';

export function HeaderComponent(): ReactElement {
  const navigate = useNavigate();

  const handleLogo = (): void => {
    navigate("/home", { replace: true });
  };

  const handleProjects = (): void => {
    navigate("/projects", { replace: true });
  };

  const handleCarrer = (): void => {
    navigate("/carrer", { replace: true });
  };

  return (
    <header className={css.header}>
      <button type="button" onClick={handleLogo}>
        <img src={logo} alt="logo" className={css.logo} />
      </button>
      <nav>
        <button type="button" onClick={handleProjects}>
          Projects
        </button>
        <button type="button" onClick={handleCarrer}>
          Carrer
        </button>
        <button type="button">
          <img src={moon} alt="moon" />
        </button>
      </nav>
    </header>
  );
}
