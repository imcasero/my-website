import { ReactElement } from "react";
import Icon from '/myIcon.png';
import { useNavigate } from "react-router-dom";
export default function HeaderComponent(): ReactElement {
    const navigate = useNavigate();

    const handleProjects = () => {
        navigate('/projects', { replace: true })
    }
    const handlecareer = () => {
        navigate('/career', { replace: true })
    }
    const handleHome = () => {
        navigate('/', { replace: true })
    }
    return (
        <header className="w-full flex items-center justify-center text-text mt-6">
            <nav className="w-3/4 flex md:flex-row flex-col  items-center justify-between">
                <button onClick={handleHome} className="md:m-0 my-4" >
                    <img src={Icon} alt="icono" className="w-12" />
                </button>
                <ul className="w-1/2 flex md:flex-row flex-col  justify-around items-center gap-4">
                    <li onClick={handleProjects} className="cursor-pointer hover:text-title">
                        Projects
                    </li>
                    <li onClick={handlecareer} className="cursor-pointer hover:text-title">
                        Career
                    </li>
                </ul>
            </nav>
        </header>
    )
}
