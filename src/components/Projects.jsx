import {
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiGlobe,
} from "react-icons/fi";

import projects from "../data/projects";

function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section id="projects" className="section projects">
      <div className="container">

        <div className="projects__header">
          <div>
            <p className="section-label">03 — Selected Work</p>

            <h2 className="section-title">
              Projects I've <span>actually built.</span>
            </h2>
          </div>

          <p className="section-description">
            A selection of products I've built across frontend interfaces,
            backend systems, databases, authentication, real-time
            communication, and modern development infrastructure.
          </p>
        </div>

        <div className="projects__list">
          {featuredProjects.map((project, index) => (
            <article
              className="project-card"
              key={project.id}
            >
              {/* PROJECT IMAGE */}

              {project.image && (
                <div className="project-card__image">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                  />

                  <span className="project-card__image-label">
                    Featured project
                  </span>
                </div>
              )}

              {/* PROJECT CONTENT */}

              <div className="project-card__content">

                <div className="project-card__meta">
                  <span className="project-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="project-card__category">
                    {project.category}
                  </span>
                </div>

                <h3 className="project-card__title">
                  {project.title}
                </h3>

                <p className="project-card__description">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}

                <div
                  className="project-card__technologies"
                  aria-label="Technologies"
                >
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* HIGHLIGHTS */}

                {project.highlights?.length > 0 && (
                  <ul className="project-card__highlights">
                    {project.highlights
                      .slice(0, 5)
                      .map((highlight) => (
                        <li key={highlight}>
                          {highlight}
                        </li>
                      ))}
                  </ul>
                )}
              </div>

              {/* LINKS */}

              <div className="project-card__links">

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link project-card__link--live"
                  >
                    <FiGlobe />
                    <span>Live Project</span>
                    <FiArrowUpRight />
                  </a>
                ) : (
                  <span
                    className="project-card__link project-card__link--disabled"
                    aria-disabled="true"
                  >
                    <FiExternalLink />
                    <span>Live Project</span>
                  </span>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link project-card__link--github"
                  >
                    <FiGithub />
                    <span>GitHub</span>
                    <FiArrowUpRight />
                  </a>
                )}

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;