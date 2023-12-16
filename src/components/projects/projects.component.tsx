import { ReactNode } from "react"
import { motion } from 'framer-motion';
import { variants } from "../../utils/effect.motion";
export default function ProjectsComponent({
    children,
}: {
    children: ReactNode;
}): ReactNode {
    const animationVariants = variants(0);
    return (
        <section className="flex flex-col items-start w-3/4 mt-10 mb-10">
            <motion.h2 initial="hidden"
                animate="visible"
                variants={animationVariants} className="text-title text-3xl font-bold mb-2 ">Projects</motion.h2>
            <motion.h3 initial="hidden"
                animate="visible"
                variants={animationVariants} className="text-subtitle text-base font-medium mb-4" >Here are some of the projects I've worked on.</motion.h3>
            <ul className="grid  grid-cols-1 lg:grid-cols-2 mt-2 gap-8 w-full">{children}</ul>
        </section >
    );
}
