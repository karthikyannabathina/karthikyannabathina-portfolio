import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";
import projects from "../data/projects";

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

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
            A selection of applications where I worked across frontend interfaces,
            backend services, databases, authentication, real-time communication,
            and infrastructure.
          </p>
        </div>

        <div className="projects__list">
          {featuredProjects.map((project, index) => (
            <article className="project-card" key={project.id}>
              {project.image && (
                <div className="project-card__image">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                  />
                  <span className="project-card__image-label">Featured project</span>
                </div>
              )}

              <div className="project-card__content">
                <div className="project-card__meta">
                  <span className="project-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="project-card__category">{project.category}</span>
                </div>

                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>

                <div className="project-card__technologies" aria-label="Technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {project.highlights?.length > 0 && (
                  <ul className="project-card__highlights">
                    {project.highlights.slice(0, 5).map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="project-card__links">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link project-card__link--live"
                  >
                    <span>Live Project</span>
                    <FiArrowUpRight />
                  </a>
                ) : (
                  <span
                    className="project-card__link project-card__link--disabled"
                    aria-disabled="true"
                  >
                    <span>Live Project</span>
                    <FiExternalLink />
                  </span>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link project-card__link--github"
                  >
                    <span>GitHub</span>
                    <FiGithub />
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
