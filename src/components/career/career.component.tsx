import { ReactElement } from "react";
import { IExperience, IMonthYear, Month } from "../../model";
import TechComponent from "../tech/tech.component";
import { motion } from "framer-motion";
import { variants } from "../../utils/effect.motion";

const customDateFormat = (data: IMonthYear | "Current"): string => {
    return data === "Current" ? "Current" : `${Month[data.month]} ${data.year}`;
}

export default function CareerComponent({ data }: { data: IExperience }): ReactElement {
    const animationVariants = variants(0.2);
    return (
        <motion.li initial="hidden"
            animate="visible"
            variants={animationVariants} className="flex flex-col lg:flex-row mb-20 gap-8 w-3/4" >
            <div className="w-2/3">
                <h3 className="text-2xl mb-2 font-semibold text-subtitle">{data.bussines}</h3>
                <span className="text-sm text-link">{customDateFormat(data.from)} / {customDateFormat(data.to)}</span>
            </div>
            <div className="w-full lg:w-1/2">
                <h4 className="text-xl mb-2 font-medium text-subtitle"> {data.position}</h4>
                <p className="mb-6 text-text font-light">
                    {data.description}
                </p>
                <ul className="flex flex-wrap gap-1">
                    {data.technologies.map((tech: string) => {
                        return <TechComponent tech={tech} key={tech} />
                    })}
                </ul>
            </div>
        </motion.li >
    )
}
