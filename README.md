# Portfolio with Astro, TypeScript, and pnpm

This is a personal portfolio project built with [Astro](https://astro.build), using [TypeScript](https://www.typescriptlang.org/) and managed with [pnpm](https://pnpm.io/).

## 🚀 Project Structure

The project contains the following folders and files:

```text
/
├── .astro/
├── .vscode/
├── dist/
├── node_modules/
├── public/
│   ├── favicon.svg
│   └── imcasero.png
├── src/
│   ├── components/
│   │   ├── icons/
│   │   │   ├── Arrow.tsx
│   │   │   ├── Email.tsx
│   │   │   ├── Github.tsx
│   │   │   ├── Linkedin.tsx
│   │   │   └── X.tsx
│   │   └── ui/
│   │       ├── Card.astro
│   │       ├── FormModal.astro
│   │       ├── Modal.astro
│   │       ├── SocialMedia.astro
│   │       ├── Step.astro
│   │       ├── Tag.astro
│   │       ├── Career.astro
│   │       ├── Footer.astro
│   │       ├── Home.astro
│   │       └── Projects.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── .gitignore
├── astro.config.mjs
├── package.json
├── README.md
├── tailwind.config.mjs
└── tsconfig.json
```

### Description

- **`public/`**: Contains static assets such as images and the site favicon.
- **`src/components/icons/`**: Houses individual icon components used throughout the site.
- **`src/components/ui/`**: Contains reusable UI components like cards, modals, social media sections, etc.
- **`src/layouts/`**: Includes layout components used to wrap pages and provide consistent structure.
- **`src/pages/`**: Contains the main pages of the website. Each `.astro` file here corresponds to a route in the site.
- **Configuration files**:
  - `.astro/`, `.vscode/`, `dist/`, `node_modules/`: Project-specific directories for Astro, VS Code settings, build output, and dependencies respectively.
  - `astro.config.mjs`: Configuration for the Astro project.
  - `tailwind.config.mjs`: Tailwind CSS configuration file.
  - `tsconfig.json`: TypeScript configuration file.
  - `package.json`: Lists project dependencies and scripts.

## 🧞 Commands

All commands are run from the root of the project, in a terminal:

| Command             | Action                                            |
| :------------------ | :------------------------------------------------ |
| `pnpm install`      | Installs dependencies                             |
| `pnpm dev`          | Starts local dev server at `localhost:4321`       |
| `pnpm build`        | Builds your production site to `./dist/`          |
| `pnpm preview`      | Previews your build locally, before deploying     |
| `pnpm astro ...`    | Runs CLI commands like `astro add`, `astro check` |
| `pnpm astro --help` | Get help using the Astro CLI                      |

## 🌈 Technologies Used

- **Astro**: Static site generator for building fast websites.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **pnpm**: Fast, disk space-efficient package manager.

## 🌐 Deployment

The site can be deployed using static hosting platforms: [Vercel](https://vercel.com/)

## 📚 Learning Resources

For more information, feel free to check [Astro's documentation](https://docs.astro.build) or join the [Astro Discord server](https://astro.build/chat) to ask questions and share ideas.
