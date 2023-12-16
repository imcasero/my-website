import arrow from '../../assets/arrow.svg';
export default function HomeDescriptionComponent() {
    return (
        <article className="flex-col items-center w-1/3 mt-10 lg:mt-0">
            <p className="text-base font-normal">Hi, I'm Diego Casero, a frontend developer who loves building cool things with code. Started coding with Arduino at 15, it sparked my love for tech. I enjoy an organized setup and building computers.</p>
            <p className="text-base font-normal mt-4">I take pleasure in executing tasks with a focus on achieving the highest quality possible and consistently tackling challenges. Apart from coding, I have an interest in sports and traveling.</p>
            <div className="flex mt-8 gap-6 ">
                <a className="hover:text-title text-link flex gap-2" href="/diego_casero_en.pdf" target="_blank">
                    See mi CV
                    <img src={arrow} alt="arrow" />
                </a>
                <a className="hover:text-title text-link flex gap-2" href="mailto:diegocaserosmr@gmail.com" target="_blank">
                    Email me
                    <img src={arrow} alt="arrow" />
                </a>
            </div>
        </article>
    )
}