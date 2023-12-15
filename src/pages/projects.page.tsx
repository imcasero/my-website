import { ReactElement } from "react";
import ProjectsComponent from "../components/projects/projects.component";
import ProjectComponent from "../components/project/project.component";
import { IProject, projects } from "../model";

export function Projects(): ReactElement {
    return (
        <>
            <ProjectsComponent>
                {projects.map((dataProject: IProject) => {
                    console.log("ID:", dataProject.id); return <ProjectComponent data={dataProject} key={dataProject.id} />;
                })}
            </ProjectsComponent>
        </>
    )
}
