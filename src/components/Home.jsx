import {
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiLayers,
  FiServer,
} from "react-icons/fi";

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__header">
          <div className="about__eyebrow">
            <span className="about__eyebrow-line"></span>
            <p className="section-label">01 — ABOUT</p>
          </div>

          <div className="about__heading-row">
            <h2 className="section-title">
              I build products with a focus on
              <span> clean engineering.</span>
            </h2>

            <div className="about__index">
              <span>01</span>
              <span>/</span>
              <span>07</span>
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className="about__intro">
            <div className="about__intro-label">
              <span className="about__pulse"></span>
              PROFILE / ENGINEERING
            </div>

            <p className="about__lead">
              I'm <strong>Karthik Yannabathina</strong>, a Computer Science
              student and <strong>Full Stack Developer</strong> focused on
              building reliable, scalable, and user-focused web applications.
            </p>

            <p>
              My primary focus is modern JavaScript development, working
              across the frontend and backend with React, Node.js, Express,
              and database technologies.
            </p>

            <div className="about__signature">
              <span>Currently building</span>
              <strong>real products, not tutorial projects.</strong>
              <FiArrowUpRight />
            </div>
          </div>

          <div className="about__details">
            <div className="about__details-header">
              <span>TECHNICAL PROFILE</span>
              <span>2026</span>
            </div>

            <div className="about__item">
              <div className="about__item-icon">
                <FiLayers />
              </div>

              <div className="about__item-content">
                <span>Focus</span>
                <strong>Full Stack Development</strong>
              </div>

              <FiArrowUpRight className="about__item-arrow" />
            </div>

            <div className="about__item">
              <div className="about__item-icon">
                <FiCode />
              </div>

              <div className="about__item-content">
                <span>Frontend</span>
                <strong>React & Modern JavaScript</strong>
              </div>

              <FiArrowUpRight className="about__item-arrow" />
            </div>

            <div className="about__item">
              <div className="about__item-icon">
                <FiServer />
              </div>

              <div className="about__item-content">
                <span>Backend</span>
                <strong>Node.js & Express</strong>
              </div>

              <FiArrowUpRight className="about__item-arrow" />
            </div>

            <div className="about__item">
              <div className="about__item-icon">
                <FiDatabase />
              </div>

              <div className="about__item-content">
                <span>Databases</span>
                <strong>MongoDB & PostgreSQL</strong>
              </div>

              <FiArrowUpRight className="about__item-arrow" />
            </div>
          </div>
        </div>

        <div className="about__bottom">
          <span>BUILD / SHIP / ITERATE</span>

          <div className="about__bottom-line"></div>

          <span>
            SOFTWARE ENGINEERING
            <FiArrowUpRight />
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;