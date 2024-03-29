import arrow from '../../assets/arrow.svg';
import { motion } from 'framer-motion';
import { variants } from '../../utils/effect.motion';
import { useState } from 'react';
import FormEmailComponent from '../FormEmail/formEmail.component';
export default function HomeDescriptionComponent() {
    const animationVariants = variants(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };
    return (
        <>
            <motion.article initial="hidden"
                animate="visible"
                variants={animationVariants} className="flex-col items-center md:w-1/3 w-full mt-10 lg:mt-0 md:px-0 px-4">
                <p className="text-base font-normal">Hi, I'm Diego Casero, a frontend developer who loves building cool things with code. Started coding with Arduino at 15, it sparked my love for tech. I enjoy an organized setup and building computers.</p>
                <p className="text-base font-normal mt-4">I take pleasure in executing tasks with a focus on achieving the highest quality possible and consistently tackling challenges. Apart from coding, I have an interest in sports and traveling.</p>
                <div className="flex mt-8 gap-6 ">
                    <a className="hover:text-title text-link flex gap-2" href="/diego_casero_en.pdf" target="_blank">
                        See my CV
                        <img src={arrow} alt="arrow" />
                    </a>
                    <a className="hover:text-title text-link flex gap-2" onClick={openPopup} href="#email-popup">
                        Email me
                        <img src={arrow} alt="arrow" />
                    </a>
                </div>
            </motion.article>

            {isPopupOpen && <FormEmailComponent onClose={closePopup} />}
        </>
    )
}
