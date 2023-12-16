import { ReactNode } from "react"
export default function ProjectsComponent({
    children,
}: {
    children: ReactNode;
}): ReactNode {
    return (
        <section className="flex flex-col items-start w-3/4 mt-10 mb-10">
            <h2 className="text-title text-3xl font-bold mb-2 ">Projects</h2>
            <h3 className="text-subtitle text-base font-medium mb-4" >Here are some of the projects I've worked on.</h3>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">{children}</ul>
        </section >
    );
}
