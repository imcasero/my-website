import profile from "../../assets/profile.png";
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
export default function HomePresentationComponent() {
    return (
        <div className="lg:w-1/3 w-auto">
            <h1 className="text-title text-3xl font-bold">DIEGO CASERO</h1>
            <h2 className="text-subtitle text-base font-medium">I write code and love it</h2>
            <img className="mt-6" src={profile} alt="profile" />
            <div className="flex items-center justify-between w-48 mt-6">
                <a href="https://github.com/imcasero" target="_blank">
                    <img src={github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/imcasero/" target="_blank">
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a href="https://twitter.com/imcasero_dev" target="_blank">
                    <img src={twitter} alt="twitter" />
                </a>
            </div>
        </div>
    )
}
