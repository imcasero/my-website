import { ReactElement } from "react";
import HomePresentationComponent from "../components/homePresentation/homePresentation.component";
import HomeDescriptionComponent from "../components/homeDescription/homeDescription.component";

export function Home(): ReactElement {
    return (
        <section className="max-w-screen-lg flex lg:flex-row flex-col  lg:mt-48 my-16 justify-center items-center">
            <HomePresentationComponent />
            <HomeDescriptionComponent />
        </section>
    );
}
