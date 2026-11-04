# Daymark help centre

An original documentation site for **Daymark**, a fictional personal task planner.
The product screens are illustrations. This repository contains the help site, not a task-planning application.

Built by Binoy Varghese with Docusaurus, using the TWT-provided starter as the foundation.

## Preview locally

Use Node.js 20 or later and run these commands from the repository root:

```bash
npm ci
npm start
```

Open `http://localhost:3000/docs-as-code-starter/`.

## Content structure

| Location | Content |
| --- | --- |
| `docs/intro.md` | Product overview and sample disclosure |
| `docs/getting-started/` | Quick start and workspace basics |
| `docs/guides/` | Task management, projects, and weekly planning |
| `docs/reference/` | Field definitions and troubleshooting |
| `src/pages/` | Homepage and its layout styles |
| `src/css/custom.css` | Site colours, typography, and documentation styles |
| `static/img/` | Original logo, favicon, and illustrated project board |

## Check a change

```bash
npm run check
npm run serve
```

The check runs Markdown linting and a production build. Broken internal links fail the build.
Review the production preview, including navigation, mobile layout, images, and light/dark themes.

## Review and publish

Work on a feature branch and open a pull request into `main`. Ask another person to review,
address their comments on the same branch, and merge after approval.

The existing GitHub Actions workflow builds and publishes changes merged to `main`.
GitHub Pages must use **GitHub Actions** as its publishing source.

- [Published site](https://tvbinoy.github.io/docs-as-code-starter/)
- [Repository](https://github.com/tvbinoy/docs-as-code-starter)

The local defaults and deployment path both use `/docs-as-code-starter/`.

## Attribution

The original Docusaurus starter was provided by Tech Writer's Tribe for the course project.
Daymark's product concept, help content, visual identity, and illustrations are original sample work.
The course toolkit and meeting transcripts are not included in this repository.
