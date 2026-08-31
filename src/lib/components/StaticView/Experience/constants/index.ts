export interface Experience {
  period: string;
  position: string;
  company: string;
  summary: string;
  impact: string[];
  stack: string[];
}

export const VISIBLE_BULLETS = 3;

export const experiences: Experience[] = [
  {
    period: "Nov 2024 — Present",
    position: "Front-end Developer",
    company: "CaixaBankTech",
    summary: `Build internal tools serving <span class="key">5,000+</span> daily
              users — complex forms with dependent field logic, multi-step validation and
              state management using <span class="term">React</span>,
              <span class="term">Formik</span> and <span class="term">Jest</span>. Work
              closely with experienced team members on
              <span class="em">microfrontend architecture</span> and custom component
              libraries.`,
    impact: [
      `Reduced key processes from <span class="em">months to days</span> through systematic refactoring`,
      `Delivered production features for critical automation workflows`,
      `Established testing patterns for complex form validation logic`,
      `Participated in Agile adoption: retrospectives, sprint planning and team collaboration`,
      `Introduced bi-weekly coffee breaks for team cohesion and knowledge sharing`,
      `Regular participant in code reviews and architectural discussions`,
    ],
    stack: ["React", "TypeScript", "Formik", "CSS Modules", "Jest", "Microfrontends", "Scrum"],
  },
  {
    period: "Aug 2023 — Nov 2024",
    position: "Front-end Developer",
    company: "Globant",
    summary: `Joined a specialized training program for <span class="em">Iberia's</span>
              digital transformation. Worked on the Customer Experience team handling
              pre/post-purchase flows on the public website. Rapidly grew from junior to
              <span class="em">the team's React reference</span>.`,
    impact: [
      `Drove a <span class="key">30%</span> reduction in production bugs through systematic clean code practices`,
      `Led <span class="term">React</span> adoption: built the company's first React web component and reusable component library`,
      `Became primary code reviewer for React implementations`,
      `Developed a comprehensive POC exploring hexagonal architecture patterns`,
      `Collaborated with the cloud team on <span class="term">AWS</span> deployment pipeline (S3, CloudFront)`,
      `Improved code quality and test coverage across a legacy <span class="term">Angular</span> codebase`,
    ],
    stack: ["React", "Angular", "TypeScript", "SASS", "Jest", "Web Components", "AWS", "GitLab"],
  },
  {
    period: "Apr 2023 — Jun 2023",
    position: "Full-stack Developer",
    company: "Inetum",
    summary: `Contributed to digital services for
              <span class="em">Spain's Land Registry</span> public portal. Proactively
              proposed and delivered a complete landing page redesign — created wireframes
              in <span class="term">Figma</span> and implemented using
              <span class="term">HTML</span>, <span class="term">CSS</span> and vanilla
              <span class="term">JavaScript</span>. Gained exposure to legacy
              <span class="term">.NET</span> backend systems.`,
    impact: [],
    stack: ["HTML", "CSS", "JavaScript", ".NET", "Figma"],
  },
];
