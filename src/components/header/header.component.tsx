import { ReactElement } from "react";
import Icon from '/myIcon.svg';
import moon from '../../assets/moon.svg'
import { Outlet, useNavigate } from "react-router-dom";

export function HeaderComponent(): ReactElement {

    const navigate = useNavigate();

    const handleProjects = () => {
        navigate('/projects', { replace: true })
    }
    const handleCarrer = () => {
        navigate('/career', { replace: true })
    }
    const handleHome = () => {
        navigate('/', { replace: true })
    }

    return (
        <>
            <header>
                <nav>
                    <button onClick={handleHome}>
                        <img src={Icon} alt="icono" />
                    </button>
                    <ul>
                        <li onClick={handleProjects}>
                            Projects
                        </li>
                        <li onClick={handleCarrer}>
                            Carrer
                        </li>
                    </ul>
                    <img src={moon} alt="moon" />
                </nav>
            </header>
            <Outlet />
        </>

    )
}
