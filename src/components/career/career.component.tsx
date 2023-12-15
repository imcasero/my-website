import { ReactElement } from "react";
import { IExperience, IMonthYear, Month } from "../../model";

const customDateFormat = (data: IMonthYear | "Current"): string => {
    return data === "Current" ? "Current" : `${Month[data.month]} ${data.year}`;
}

export default function CareerComponent({ data }: { data: IExperience }): ReactElement {
    return (
        <li className="flex flex-col lg:flex-row m-4 gap-8 w-3/4" >
            <div className="w-1/2">
                <h3 className="text-2xl mb-2">{data.bussines}</h3>
                <span className="text-sm text-link">{customDateFormat(data.from)} / {customDateFormat(data.to)}</span>
            </div>
            <div className="w-full lg:w-1/2">
                <h4 className="text-xl mb-2"> {data.position}</h4>
                <p className="mb-4 text-link font-medium">
                    {data.description}
                </p>
                //TODO make a component for this, we use the same logic in career.component.tsx
                <ul className="flex flex-wrap gap-4">
                    {data.technologies.map((tech: string) => {
                        return <li className="bg-tag py-1 px-4 rounded-lg" key={tech}>{tech}</li>
                    })}
                </ul>
            </div>
        </li >
    )
}
