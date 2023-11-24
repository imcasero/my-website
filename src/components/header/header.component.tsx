import { ReactElement } from "react";
import Icon from '/myIcon.svg';
import moon from '../../assets/moon.svg'
import { useNavigate } from "react-router-dom";
export default function HeaderComponent(): ReactElement {
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
        <header className="w-full flex items-center justify-center text-text">
            <nav className="w-3/4 flex items-center justify-around">
                <button onClick={handleHome}>
                    <img src={Icon} alt="icono" />
                </button>
                <ul className="w-1/2 flex justify-around ">
                    <li onClick={handleProjects} className="cursor-pointer ">
                        Projects
                    </li>
                    <li onClick={handleCarrer} className="cursor-pointer">
                        Carrer
                    </li>
                </ul>
                <img src={moon} alt="moon" />
            </nav>
        </header>
    )
}
