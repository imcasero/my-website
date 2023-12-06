import { ReactElement } from "react";
import profile from "../assets/profile.png";
import arrow from '../assets/arrow.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';

export function Home(): ReactElement {
    return (
        <section className="max-w-screen-lg flex lg:flex-row flex-col  mt-24 justify-center items-center">
            <div className="lg:w-1/3 w-auto">
                <h1 className="text-title text-3xl font-bold">DIEGO CASERO</h1>
                <h2 className="text-subtitle text-base font-medium">I write code and love it</h2>
                <img className="mt-6" src={profile} alt="profile" />
                <div className="flex items-center justify-between w-48 mt-6">
                    <a href="" target="_blank">
                        <img src={github} alt="github" />
                    </a>
                    <a href="" target="_blank">
                        <img src={linkedin} alt="linkedin" />
                    </a>
                    <a href="" target="_blank">
                        <img src={twitter} alt="twitter" />
                    </a>
                </div>
            </div>
            <article className="flex-col items-center w-2/3 mt-10 lg:mt-0">
                <p className="text-base font-normal">Hi, I'm Diego Casero, a frontend developer who loves building cool things with code. Started coding with Arduino at 15, it sparked my love for tech. I enjoy an organized setup and building computers.</p>
                <p className="text-base font-normal mt-4">I take pleasure in executing tasks with a focus on achieving the highest quality possible and consistently tackling challenges. Apart from coding, I have an interest in sports and traveling.</p>
                <div className="flex mt-8 gap-6 ">
                    <a className="hover:text-title text-link flex gap-2" href="/public/diego_casero_en.pdf" target="_blank">
                        See mi CV
                        <img src={arrow} alt="arrow" />
                    </a>
                    <a className="hover:text-title text-link flex gap-2" href="mailto:diegocaserosmr@gmail.com" target="_blank">
                        Email me
                        <img src={arrow} alt="arrow" />
                    </a>
                </div>
            </article>
        </section>
    );
}
