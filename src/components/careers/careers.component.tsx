import { ReactNode } from "react";
import { variants } from "../../utils/effect.motion";
import { motion } from "framer-motion";
export default function CareersComponent({
    children,
}: {
    children: ReactNode;
}): ReactNode {
    const animationVariants = variants(0.1);
    return (
        <section className="flex flex-col items-start w-3/4 mt-10 mb-10">
            <motion.h2 initial="hidden"
                animate="visible"
                variants={animationVariants} className="text-title text-3xl font-bold mb-2 ">Career</motion.h2>
            <motion.h3 initial="hidden"
                animate="visible"
                variants={animationVariants} className="text-subtitle text-base font-medium mb-8" >Here is something about my career.</motion.h3>
            <ul className="flex flex-col justify-center w-full" >{children}</ul>
        </section >
    );
}
