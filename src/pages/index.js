import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

const paths = [
  {
    number: "01",
    label: "GET STARTED",
    title: "Your first clear next step.",
    text: "Create a project, capture a task, and take it all the way to done.",
    link: "/docs/getting-started/quick-start",
    action: "Follow the quick start",
  },
  {
    number: "02",
    label: "BUILD A HABIT",
    title: "Make space for the week.",
    text: "Give related work a home and choose dates that help you focus.",
    link: "/docs/guides/plan-your-week",
    action: "Plan your week",
  },
  {
    number: "03",
    label: "FIND AN ANSWER",
    title: "Get back to what matters.",
    text: "Understand task fields, find missing work, and keep moving.",
    link: "/docs/reference/troubleshooting",
    action: "Find a solution",
  },
];

export default function Home() {
  const boardImage = useBaseUrl("/img/daymark-board.svg");
  return (
    <Layout
      title="Help centre"
      description="Learn to capture tasks, organize projects, and plan a calmer week with Daymark. A fictional product documentation sample."
    >
      <main>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className="container">
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.eyebrow}>
                  <span aria-hidden="true" /> THE DAYMARK HELP CENTRE
                </p>
                <h1 id="hero-title">
                  Make room for
                  <br />
                  <em>what matters.</em>
                </h1>
                <p className={styles.lead}>
                  A little structure. A clearer next step.
                  <br />
                  Learn to turn a busy week into a plan you can finish.
                </p>
                <div className={styles.actions}>
                  <Link
                    className={styles.primaryButton}
                    to="/docs/getting-started/quick-start"
                  >
                    Start with one task <span aria-hidden="true">↗</span>
                  </Link>
                  <Link className={styles.secondaryLink} to="/docs/intro">
                    Meet Daymark <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <p className={styles.sampleNote}>
                  Fictional product · Original documentation sample
                </p>
              </div>
              <figure className={styles.boardFigure}>
                <div className={styles.figureLabel}>
                  <span>SMALL STEPS, VISIBLE PROGRESS</span>
                  <span aria-hidden="true">↘</span>
                </div>
                <img
                  src={boardImage}
                  width="900"
                  height="640"
                  alt="Illustrated Website refresh project with three tasks organized into To do, In progress, and Done."
                />
                <figcaption>
                  A place for the work. Space for the rest.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className={styles.paths} aria-labelledby="paths-title">
          <div className="container">
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.kicker}>A GOOD PLACE TO BEGIN</p>
                <h2 id="paths-title">
                  Less figuring out.
                  <br />
                  More moving forward.
                </h2>
              </div>
              <p>
                Short guides for the way you work.
                <br />
                Pick a starting point and make it yours.
              </p>
            </div>
            <div className={styles.cardGrid}>
              {paths.map((path) => (
                <Link
                  key={path.number}
                  to={path.link}
                  className={styles.pathCard}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.cardNumber}>{path.number}</span>
                    <span className={styles.cardLabel}>{path.label}</span>
                  </div>
                  <h3>{path.title}</h3>
                  <p>{path.text}</p>
                  <span className={styles.cardAction}>
                    {path.action}
                    <span aria-hidden="true">↗</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.rhythm} aria-labelledby="rhythm-title">
          <div className="container">
            <div className={styles.rhythmPanel}>
              <div>
                <p className={styles.kicker}>KEEP IT SIMPLE</p>
                <h2 id="rhythm-title">
                  A calmer rhythm,
                  <br />
                  one task at a time.
                </h2>
                <Link to="/docs/getting-started/workspace-basics">
                  Find your way around <span aria-hidden="true">→</span>
                </Link>
              </div>
              <ol className={styles.steps}>
                <li>
                  <span aria-hidden="true">1</span>
                  <div>
                    <h3>Capture it.</h3>
                    <p>Get the next action out of your head and into Inbox.</p>
                  </div>
                </li>
                <li>
                  <span aria-hidden="true">2</span>
                  <div>
                    <h3>Give it a home.</h3>
                    <p>
                      Group related tasks in a project. Add a date if it needs
                      one.
                    </p>
                  </div>
                </li>
                <li>
                  <span aria-hidden="true">3</span>
                  <div>
                    <h3>Move it forward.</h3>
                    <p>Focus on the work, then mark it Done.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <aside className={styles.aboutSample}>
          <div className="container">
            <strong>A note about Daymark.</strong> This is a help site for a
            fictional product. The example board is an illustration; there is no
            app or account to create.
          </div>
        </aside>
      </main>
    </Layout>
  );
}
