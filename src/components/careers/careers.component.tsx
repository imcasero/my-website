import { ReactNode } from "react";
export default function CareersComponent({
    children,
}: {
    children: ReactNode;
}): ReactNode {
    return (
        <section className="flex flex-col items-start w-3/4 mt-10 mb-10">
            <h2 className="text-title text-3xl font-bold mb-2 ">Carrer</h2>
            <h3 className="text-subtitle text-base font-medium mb-4" >Here are some about my carrer.</h3>
            <ul className="flex flex-col justify-center w-full" >{children}</ul>
        </section >
    );
}
