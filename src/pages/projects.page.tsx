import { ReactElement } from "react";
import ProjectsComponent from "../components/projects/projects.component";
import ProjectComponent from "../components/project/project.component";
import { IProject, projects } from "../model";

export function Projects(): ReactElement {
    return (
        <>
            <ProjectsComponent>
                {projects.map((dataProject: IProject) => {
                    return <ProjectComponent key={dataProject.name} data={dataProject} />;
                })}
            </ProjectsComponent>
        </>
    )
}
