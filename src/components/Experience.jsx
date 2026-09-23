import React from "react";
import {
  FiArrowUpRight,
  FiGitMerge,
  FiCheckCircle,
} from "react-icons/fi";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">

        {/* Header */}
        <div className="experience__header">
          <div>
            <span className="experience__eyebrow">
              EXPERIENCE
            </span>

            <h2 className="experience__title">
              Open source,
              <span> real engineering work.</span>
            </h2>
          </div>

          <p className="experience__intro">
            Contributing to production codebases, solving real
            user-facing problems, and collaborating with maintainers.
          </p>
        </div>

        {/* Experience */}
        <div className="experience__list">

          {/* =================================
              EXPERIENCE 01
          ================================= */}
          <article className="experience-card">

            <div className="experience-card__top">
              <div className="experience-card__identity">
                <span className="experience-card__number">
                  01
                </span>

                <span className="experience-card__type">
                  OPEN SOURCE
                </span>
              </div>

              <span className="experience-card__date">
                2026
              </span>
            </div>

            <div className="experience-card__body">

              <div className="experience-card__heading">
                <div>
                  <h3>
                    Open Source Contributor
                  </h3>

                  <p className="experience-card__organization">
                    archive-movie-browser
                  </p>
                </div>

                <div className="experience-card__merged">
                  <FiGitMerge />
                  <span>Merged</span>
                </div>
              </div>

              <div className="experience-card__pr">
                <span className="experience-card__pr-number">
                  #100
                </span>

                <span>
                  Keep filters in the URL so views are shareable
                  and the Back button works
                </span>
              </div>

              <p className="experience-card__description">
                Solved a navigation problem where filters lived only
                in component state, causing reloads to reset views
                and preventing users from sharing filtered pages.
              </p>

              <div className="experience-card__work">

                <div className="experience-card__work-item">
                  <span className="experience-card__work-dot" />
                  URL state synchronization
                </div>

                <div className="experience-card__work-item">
                  <span className="experience-card__work-dot" />
                  Browser Back / Forward support
                </div>

                <div className="experience-card__work-item">
                  <span className="experience-card__work-dot" />
                  URL validation & safe fallbacks
                </div>

                <div className="experience-card__work-item">
                  <span className="experience-card__work-dot" />
                  pushState / replaceState / popstate
                </div>

              </div>

              <div className="experience-card__stats">

                <div>
                  <strong>+117</strong>
                  <span>additions</span>
                </div>

                <div>
                  <strong>-8</strong>
                  <span>deletions</span>
                </div>

                <div>
                  <strong>77</strong>
                  <span>tests passing</span>
                </div>

                <div>
                  <strong>1</strong>
                  <span>file changed</span>
                </div>

              </div>

              <div className="experience-card__quote">

                <div className="experience-card__quote-mark">
                  “
                </div>

                <div>
                  <p>
                    “Shareable links and a working Back button
                    are a big deal for an app like this.”
                  </p>

                  <span>
                    — amponce · Project maintainer
                  </span>
                </div>

              </div>

              <div className="experience-card__footer">

                <div className="experience-card__status">
                  <FiCheckCircle />
                  Live in production
                </div>

                <div className="experience-card__links">

                  <a
                    href="https://github.com/amponce/archive-movie-browser/pull/100"
                    target="_blank"
                    rel="noreferrer"
                    className="experience-card__link"
                  >
                    Pull Request
                    <FiArrowUpRight />
                  </a>

                  <a
                    href="https://archive-movie-browser.vercel.app/?genre=Horror&sort=title+asc"
                    target="_blank"
                    rel="noreferrer"
                    className="experience-card__link experience-card__link--primary"
                  >
                    Live
                    <FiArrowUpRight />
                  </a>

                </div>

              </div>

            </div>
          </article>


          {/* =================================
              EXPERIENCE 02
          ================================= */}
          <article className="experience-card">

            <div className="experience-card__top">
              <div className="experience-card__identity">
                <span className="experience-card__number">
                  02
                </span>

                <span className="experience-card__type">
                  OPEN SOURCE
                </span>
              </div>

              <span className="experience-card__date">
                2026
              </span>
            </div>

            <div className="experience-card__body">

              <div className="experience-card__heading">
                <div>
                  <h3>
                    Open Source Contributor
                  </h3>

                  <p className="experience-card__organization">
                    Contribute-To-This-Project
                  </p>
                </div>

                <div className="experience-card__merged">
                  <FiGitMerge
                    style={{ color: "#a855f7" }}
                  />
                  <span>Merged</span>
                </div>
              </div>

              <div className="experience-card__pr">
                <span className="experience-card__pr-number">
                  #4767
                </span>

                <span>
                  Add Karthik's card to the public contributor showcase
                </span>
              </div>

              <p className="experience-card__description">
                Contributed a personal developer card to a
                community-maintained open-source project,
                following the repository's contribution workflow.
              </p>

              <div className="experience-card__work">

                <div className="experience-card__work-item">
                  <span className="experience-card__work-dot" />
                  Added contributor card
                </div>

                <div className="experience-card__work-item">
                  <span className="experience-card__work-dot" />
                  Followed repository guidelines
                </div>

                <div className="experience-card__work-item">
                  <span className="experience-card__work-dot" />
                  Passed automated checks
                </div>

                <div className="experience-card__work-item">
                  <span className="experience-card__work-dot" />
                  Merged into master
                </div>

              </div>

              <div className="experience-card__stats">

                <div>
                  <strong>1</strong>
                  <span>card added</span>
                </div>

                <div>
                  <strong>6</strong>
                  <span>checks</span>
                </div>

                <div>
                  <strong>1</strong>
                  <span>commit</span>
                </div>

                <div>
                  <strong>2.5K+</strong>
                  <span>stars</span>
                </div>

              </div>

              <div className="experience-card__quote">

                <div className="experience-card__quote-mark">
                  “
                </div>

                <div>
                  <p>
                    “Your card is valid and will merge automatically.”
                  </p>

                  <span>
                    — github-actions · Project automation
                  </span>
                </div>

              </div>

              <div className="experience-card__footer">

                <div className="experience-card__status">
                  <FiCheckCircle />
                  Contribution published
                </div>

                <div className="experience-card__links">

                  <a
                    href="https://github.com/Syknapse/Contribute-To-This-Project/pull/4767"
                    target="_blank"
                    rel="noreferrer"
                    className="experience-card__link"
                  >
                    Pull Request
                    <FiArrowUpRight />
                  </a>

                  <a
                    href="https://syknapse.github.io/Contribute-To-This-Project/cards/karthikyannabthina.html"
                    target="_blank"
                    rel="noreferrer"
                    className="experience-card__link experience-card__link--primary"
                  >
                    Contribution
                    <FiArrowUpRight />
                  </a>

                </div>

              </div>

            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Experience;