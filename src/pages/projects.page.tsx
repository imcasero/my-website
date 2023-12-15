import { ReactElement } from "react";
import ProjectsComponent from "../components/projects/projects.component";
import ProjectComponent from "../components/project/project.component";
import { IProject, projects } from "../model";

export function Projects(): ReactElement {
    return (
        <>
            //TODO review this style for better UX
            <ProjectsComponent>
                {projects.map((dataProject: IProject) => {
                    return <ProjectComponent data={dataProject} key={dataProject.id} />;
                })}
            </ProjectsComponent>
        </>
    )
}
