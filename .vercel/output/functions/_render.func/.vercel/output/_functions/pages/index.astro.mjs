/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, a as addAttribute, d as renderComponent, e as renderHead, f as renderSlot } from '../chunks/astro/server_BJaRsRQn.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
export { renderers } from '../renderers.mjs';

function ArrowIcon(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1rem",
      height: "1rem",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z" })
    }
  );
}

const $$Astro$4 = createAstro();
const $$Tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Tag;
  const { name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span class="w-auto py-1 px-4 bg-transparent border border-teal-400 rounded-3xl text-xs"> ${name} </span>`;
}, "/Users/diego/Developer/my-website/src/components/ui/Tag.astro", void 0);

const $$Astro$3 = createAstro();
const $$Step = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Step;
  const { job, startDate, endDate, company, website, description, techs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full mx-auto flex flex-col gap-3"> <div> <span class="font-medium text-sm"> ${startDate} - ${endDate} </span> <h3 class="text-xl font-semibold text-gray-800">${job}</h3> <a${addAttribute(website, "href")} target="_blank" class="flex items-center gap-1 text-sm font-medium hover:text-teal-500"> ${company} ${renderComponent($$result, "ArrowIcon", ArrowIcon, {})} </a> </div> <p class="text-sm">${description}</p> <div class="w-full flex flex-wrap gap-1"> ${techs.map((tech) => {
    return renderTemplate`${renderComponent($$result, "Tag", $$Tag, { "name": tech })}`;
  })} </div> </div>`;
}, "/Users/diego/Developer/my-website/src/components/ui/Step.astro", void 0);

const $$Career = createComponent(($$result, $$props, $$slots) => {
  const careers = [
    {
      job: "Front-end Developer",
      startDate: "August 2023",
      endDate: "present",
      company: "Globant",
      website: "https://www.globant.com/",
      description: "Development of interfaces using React, Angular, and styled with CSS/SASS for complex web applications. Collaboration with multidisciplinary teams to integrate design and functionality. Use of Git and GitHub for version control and Agile with Scrum for project collaboration.",
      techs: [
        "React",
        "Angular",
        "Typescript",
        "Javascript",
        "CSS",
        "SASS",
        "Jasmine",
        "Vitest",
        "TDD",
        "CI/CD",
        "AWS",
        "Scrum"
      ]
    },
    {
      job: "Full-stack Developer",
      startDate: "April 2023",
      endDate: "June 2023",
      company: "Inetum",
      website: "https://www.inetum.com/",
      description: "Interface layout tasks and utilization of the Figma platform for applications design. Backend development using .NET, contributing to the design and creation of robust solutions for specific projects.",
      techs: [
        "Javascript",
        "Bootstrap",
        "CSS",
        ".NET",
        "C#",
        "VB.NET",
        "Figma",
        "SQL"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section> <h2 class="font-semibold text-lg mb-4">Career</h2> <article class="flex flex-col gap-10 relative"> ${careers.map((career, index) => renderTemplate`<div class="flex items-start relative"> <div class="flex flex-col items-center mr-4 relative"> <div class="rounded-full h-4 w-4 border-teal-500 border-2 bg-white z-10 absolute top-1"></div> <hr${addAttribute(`bg-teal-500 absolute bottom-0 h-[2px]  transform rotate-90 ${index === 0 ? "top-24 w-[200px]" : "top-0 w-[400px]"}`, "class")}> </div> <div class="flex-1"> ${renderComponent($$result, "Step", $$Step, { ...career })} </div> </div>`)} </article> </section>`;
}, "/Users/diego/Developer/my-website/src/components/Career.astro", void 0);

function EmailIcon(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1.625rem",
      height: "1.625rem",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsxs(
        "g",
        {
          fill: "none",
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          children: [
            /* @__PURE__ */ jsx("rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }),
            /* @__PURE__ */ jsx("path", { d: "m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })
          ]
        }
      )
    }
  );
}

function GithubIcon(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1.625rem",
      height: "1.625rem",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsxs(
        "g",
        {
          fill: "none",
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "1.5",
          color: "currentColor",
          children: [
            /* @__PURE__ */ jsx("path", { d: "M10 20.568c-3.429 1.157-6.286 0-8-3.568" }),
            /* @__PURE__ */ jsx("path", { d: "M10 22v-3.242c0-.598.184-1.118.48-1.588c.204-.322.064-.78-.303-.88C7.134 15.452 5 14.107 5 9.645c0-1.16.38-2.25 1.048-3.2c.166-.236.25-.354.27-.46c.02-.108-.015-.247-.085-.527c-.283-1.136-.264-2.343.16-3.43c0 0 .877-.287 2.874.96c.456.285.684.428.885.46s.469-.035 1.005-.169A9.5 9.5 0 0 1 13.5 3a9.6 9.6 0 0 1 2.343.28c.536.134.805.2 1.006.169c.2-.032.428-.175.884-.46c1.997-1.247 2.874-.96 2.874-.96c.424 1.087.443 2.294.16 3.43c-.07.28-.104.42-.084.526s.103.225.269.461c.668.95 1.048 2.04 1.048 3.2c0 4.462-2.134 5.807-5.177 6.643c-.367.101-.507.559-.303.88c.296.47.48.99.48 1.589V22" })
          ]
        }
      )
    }
  );
}

function LinkedinIcon(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1.625rem",
      height: "1.625rem",
      viewBox: "0 0 16 16",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M3.44 4.89c.8 0 1.44-.65 1.44-1.44s-.65-1.44-1.44-1.44S2 2.66 2 3.45s.65 1.44 1.44 1.44m2.81 1.09V14h2.48v-3.96c0-1.05.2-2.06 1.49-2.06s1.29 1.2 1.29 2.12V14H14V9.6c0-2.16-.46-3.82-2.98-3.82c-1.21 0-2.02.66-2.35 1.29h-.03v-1.1H6.26Zm-4.05 0h2.49V14H2.2z"
        }
      )
    }
  );
}

function XIcon(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1.625rem",
      height: "1.625rem",
      viewBox: "0 0 16 16",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
        }
      )
    }
  );
}

const $$Astro$2 = createAstro();
const $$SocialMedia = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SocialMedia;
  const { additionalClasses = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`icons ${additionalClasses} flex space-x-4`, "class")}> <a target="_blank" href="https://www.linkedin.com/in/imcasero/" class="transition-transform duration-300 transform hover:scale-110"> ${renderComponent($$result, "LinkedinIcon", LinkedinIcon, {})} </a> <a target="_blank" href="https://github.com/imcasero" class="transition-transform duration-300 transform hover:scale-110"> ${renderComponent($$result, "GithubIcon", GithubIcon, {})} </a> <a target="_blank" href="https://x.com/imcasero_dev" class="transition-transform duration-300 transform hover:scale-110"> ${renderComponent($$result, "XIcon", XIcon, {})} </a> <a name="email-link" class="transition-transform duration-300 transform hover:scale-110"> ${renderComponent($$result, "EmailIcon", EmailIcon, {})} </a> </div>`;
}, "/Users/diego/Developer/my-website/src/components/ui/SocialMedia.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full flex justify-between flex-row py-11 mt-4"> <p>
Developed by
<a href="https://www.linkedin.com/in/imcasero/" class="text-teal-400 font-semibold">@imcasero.dev</a>
with 💚
</p> ${renderComponent($$result, "SocialMedia", $$SocialMedia, { "additionalClasses": "flex flex-row gap-11" })} </footer>`;
}, "/Users/diego/Developer/my-website/src/components/Footer.astro", void 0);

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full" data-astro-cid-xhaoqxbd> <img src="/imcasero.png" alt="logo" class="mt-6 w-32" data-astro-cid-xhaoqxbd> <h1 class="gradient-text font-black text-8xl my-8" data-astro-cid-xhaoqxbd>imcasero.dev</h1> <p data-astro-cid-xhaoqxbd>
Hi, I'm Diego Casero, <span class="text-teal-500" data-astro-cid-xhaoqxbd>frontend developer</span> with
    over a year of experience. I deeply enjoy writing code and always seek opportunities
    to grow and tackle challenges. Known by my coworkers as a proactive and efficient
    programmer, I give my best to deliver quality solutions.
</p> ${renderComponent($$result, "SocialMedia", $$SocialMedia, { "additionalClasses": "flex justify-between my-9", "data-astro-cid-xhaoqxbd": true })} </section> `;
}, "/Users/diego/Developer/my-website/src/components/Home.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, description, deploy, repository, techs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="border p-4 rounded-md shadow-md h-40 flex flex-col gap-4"> <div class="w-full flex flex-row justify-between items-center"> <a${addAttribute(deploy, "href")} target="_blank" class="text-sm font-medium hover:text-teal-500 hover:underline"> <h3 class="flex items-center gap-1">${title} ${renderComponent($$result, "ArrowIcon", ArrowIcon, {})}</h3> </a> <a${addAttribute(repository, "href")} target="_blank" rel="repository" class="hover:text-teal-500"> ${renderComponent($$result, "GithubIcon", GithubIcon, { "width": "1.2rem" })} </a> </div> <p class="text-sm">${description}</p> <div class="w-full flex flex-wrap gap-1"> ${techs.map((tech) => {
    return renderTemplate`${renderComponent($$result, "Tag", $$Tag, { "name": tech })}`;
  })} </div> </div>`;
}, "/Users/diego/Developer/my-website/src/components/ui/Card.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "All I Do",
      description: "\u{1F4DD} A stylish and functional to-do list.",
      deploy: "https://all-i-do.vercel.app/",
      repository: "https://github.com/imcasero/all-i-do",
      techs: ["React", "Typescript", "Tailwind", "Vercel"]
    },
    {
      title: "Pokedex",
      description: "\u{1F50D} A Pok\xE9dex web app for searching Pok\xE9mon.",
      deploy: "https://imcasero.github.io/pokedex/",
      repository: "https://github.com/imcasero/pokedex",
      techs: ["Javascrit", "API", "CSS", "Actions"]
    },
    {
      title: "Animated Vessel",
      description: "\u{1F3A8} A project featuring a bottle that changes color and sways",
      deploy: "https://imcasero.github.io/AnimatedVessel/",
      repository: "https://github.com/imcasero/AnimatedVessel",
      techs: ["CSS", "HTML", "Animation", "Actions"]
    },
    {
      title: "PX to REM converter",
      description: "\u{1F4CF} A handy tool for converting PX to REM units.",
      deploy: "https://px-to-rem-converter-imcasero.vercel.app/",
      repository: "https://github.com/imcasero/px-to-rem-converter",
      techs: ["React", "Typescript", "React Hook Form", "Vercel"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section> <h2 class="font-semibold text-lg mb-6">Projects</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-9"> ${projects.map((project) => renderTemplate`${renderComponent($$result, "Card", $$Card, { ...project })}`)} </div> </section>`;
}, "/Users/diego/Developer/my-website/src/components/Projects.astro", void 0);

const $$FormModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h3 class="text-teal-500 font-bold mb-2">Lets talk!</h3> <form id="contact-form" action="https://formspree.io/f/mdoqwzgy" method="POST" class="space-y-4"> <label class="block text-sm font-medium">
Your email:
<input type="email" name="email" required class="border mt-2 py-2 px-1 h-auto block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50"> </label> <label class="block text-sm font-medium">
Your message:
<textarea name="message" required class="border mt-2 block w-full py-2 px-1 h-auto rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50"></textarea> </label> <button type="submit" class="w-full bg-teal-500 text-white rounded-md py-2 font-semibold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
Send
</button> </form>`;
}, "/Users/diego/Developer/my-website/src/components/ui/FormModal.astro", void 0);

const $$Modal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="modal" class="fixed inset-0 items-center justify-center bg-black bg-opacity-50 hidden" data-astro-cid-hrybwmjy> <div class="bg-white rounded-lg p-8 shadow-md w-80 max-w-main relative border border-teal-300" data-astro-cid-hrybwmjy> <button id="modal-close" class="absolute top-4 right-4 text-teal-500 hover:text-teal-700" data-astro-cid-hrybwmjy>
X
</button> <div id="modal-content" data-astro-cid-hrybwmjy> ${renderComponent($$result, "FormModal", $$FormModal, { "data-astro-cid-hrybwmjy": true })} </div> </div> </div>  `;
}, "/Users/diego/Developer/my-website/src/components/ui/Modal.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/imcasero.png"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <main class="font-inter w-main m-auto px-5"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Modal", $$Modal, {})} </main> </body></html>`;
}, "/Users/diego/Developer/my-website/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Diego Casero - imcasero.dev" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Home", $$Home, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Career", $$Career, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/diego/Developer/my-website/src/pages/index.astro", void 0);

const $$file = "/Users/diego/Developer/my-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
