import { ReactElement } from "react";
import { IProject } from "../../model";
import github from '../../assets/github.svg';
import deploy from '../../assets/deploy.svg';
import TechComponent from "../tech/tech.component";

export default function ProjectComponent({ data }: { data: IProject }): ReactElement {
    return (
        <li className="flex flex-col lg:flex-row my-4 gap-8 w-3/4">
            <img className="min-w-1/3" src={data.image} alt="project image" />
            <div className="w-2/3 flex flex-col">
                <h3 className="text-2xl mb-2 font-semibold text-subtitle gap-2">{data.name} <span className="text-lg text-link font-light">{data.year}</span></h3>
                <p className="mb-2 font-medium">{data.description}</p>
                <div className="flex gap-2 mb-4">
                    <a href={data.repository} target="_balnk" className="transition-transform duration-300 transform-gpu hover:scale-105">
                        <img src={github} alt="github" />
                    </a>
                    {data.deploy && (
                        <a href={data.deploy} target="_blank" className="transition-transform duration-300 transform-gpu hover:scale-105">
                            <img src={deploy} alt="deploy" />
                        </a>
                    )}
                </div>
                <ul className="flex gap-1">
                    {data.technologies.map((tech: string) => {
                        return <TechComponent tech={tech} key={tech} />
                    })}
                </ul>
            </div>
        </li>
    )
}
