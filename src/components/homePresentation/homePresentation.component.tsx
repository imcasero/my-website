import profile from "../../assets/profile.png";
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import { motion } from 'framer-motion';
import { variants } from '../../utils/effect.motion';
export default function HomePresentationComponent() {
    const animationVariants = variants(0);
    return (
        <motion.div initial="hidden"
            animate="visible"
            variants={animationVariants} className="lg:w-1/3 w-auto">
            <h1 className="text-title text-3xl font-bold">DIEGO CASERO</h1>
            <h2 className="text-subtitle text-base font-medium">I write code and love it</h2>
            <img className="mt-6" src={profile} alt="profile" />
            <div className="flex items-center justify-between w-48 mt-6">
                <a href="https://github.com/imcasero" target="_blank" className="transform transition-transform hover:scale-110">
                    <img src={github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/imcasero/" target="_blank" className="transform transition-transform hover:scale-110">
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a href="https://twitter.com/imcasero_dev" target="_blank" className="transform transition-transform hover:scale-110">
                    <img src={twitter} alt="twitter" />
                </a>
            </div>
        </motion.div>
    )
}
