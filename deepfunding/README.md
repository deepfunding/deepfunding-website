# DeepFunding

A modern web application built with Astro, Tailwind CSS, and shadcn/ui components.

## Project Overview

DeepFunding is a crowdfunding platform template with three main pages:
- Homepage - An introduction to the platform with key features
- FAQ - Frequently asked questions about using the platform
- Resources - Tools, guides, and downloadable resources for project creators

## Technologies Used

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable UI components built with Tailwind CSS

## Requirements

- Node.js >=18.17.1
- npm >= 9.6.5

## Installation

1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   ```

## Development

Start the development server:

```bash
npm run dev
```

## Building for Production

To create a production version of the site:

```bash
npm run build
```

You can preview the production build with:

```bash
npm run preview
```

## Project Structure

```
deepfunding/
├── public/            # Static assets
├── src/
│   ├── layouts/       # Layout components
│   ├── pages/         # Astro pages
│   │   ├── index.astro  # Homepage
│   │   ├── faq.astro    # FAQ page
│   │   └── resources.astro # Resources page
│   └── styles/        # Global styles
├── astro.config.mjs   # Astro configuration
├── tailwind.config.js # Tailwind CSS configuration
└── package.json       # Project dependencies
```

## Features

- Responsive design that works on mobile, tablet, and desktop
- Modern UI with Tailwind CSS and shadcn/ui
- Fast performance with Astro's static site generation
- Easily customizable styling with Tailwind CSS utility classes

## License

MIT

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
