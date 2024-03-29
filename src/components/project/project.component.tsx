import { ReactElement } from "react";
import { IProject } from "../../model";
import arrow from '../../assets/arrow.svg';
import TechComponent from "../tech/tech.component";
import { motion } from 'framer-motion';
import { variants } from "../../utils/effect.motion";

export default function ProjectComponent({ data }: { data: IProject }): ReactElement {
    const animationVariants = variants(0.1);
    return (
        <motion.li initial="hidden"
            animate="visible"
            variants={animationVariants} className="flex flex-col my-4 gap-8 lg:w-3/4 w-full">
            <img className="w-auto rounded-md" src={data.image} alt="project image" />
            <div className="w-full flex flex-col">
                <h3 className="text-2xl mb-2 font-semibold text-subtitle gap-2">{data.name} <span className="text-lg text-link font-light">{data.year}</span></h3>
                <p className="mb-2 font-medium">{data.description}</p>
                <div className="flex mt-2 gap-6">
                    <a className="hover:text-title text-link flex gap-2" href={data.repository} target="_blank">
                        Repository
                        <img src={arrow} alt="arrow" />
                    </a>
                    {data.deploy && (
                        <a className="hover:text-title text-link flex gap-2" href={data.deploy} target="_blank">
                            Web
                            <img src={arrow} alt="arrow" />
                        </a>
                    )}
                </div>
                <ul className="flex gap-1 mx-0 mt-6">
                    {data.technologies.map((tech: string) => {
                        return <TechComponent tech={tech} key={tech} />
                    })}
                </ul>
            </div>
        </motion.li>
    )
}
