# Portfolio Repository

This repository hosts my portfolio, showcasing my projects and experiences built with React, Tailwind CSS, and Vite.
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Features

This template offers a minimal setup for a robust portfolio with features such as:

- **React with HMR**: Utilizes React to create a dynamic and interactive user interface, with Hot Module Replacement (HMR) for a smooth development experience.
- **TypeScript Integration**: Seamlessly incorporates TypeScript for enhanced type safety and code reliability.
- **Tailwind CSS Configuration**: Tailwind CSS is integrated and configured to cater to personalized styling needs, ensuring a sleek and customizable design.

## Plugins

The repository includes the following official Vite plugins:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses Babel for Fast Refresh during development.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Utilizes SWC for Fast Refresh, providing an alternative approach.

## ESLint Configuration

For those working on a production-ready application, it's recommended to expand the ESLint configuration:

- Configure the top-level `parserOptions` in `.eslintrc.js` as follows:

```js
parserOptions: {
  ecmaVersion: 'latest',
  sourceType: 'module',
  project: ['./tsconfig.json', './tsconfig.node.json'],
  tsconfigRootDir: __dirname,
},
```
