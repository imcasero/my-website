import { ReactElement } from "react";
import { IExperience, experiences } from "../model";
import CareersComponent from "../components/careers/careers.component";
import CareerComponent from "../components/career/career.component";

export function Career(): ReactElement {
    return (
        <>
            <CareersComponent>
                {experiences.map((dataCareer: IExperience) => {
                    return <CareerComponent key={dataCareer.id} data={dataCareer} />;
                })}
            </CareersComponent>
        </>
    )
}