import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiSwagger,
  SiJest,
} from "react-icons/si";

import {
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiServer,
  FiSettings,
  FiCheck,
} from "react-icons/fi";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    label: "INTERFACE ENGINEERING",
    description:
      "Building responsive, accessible, and interactive interfaces with modern JavaScript.",
    icon: FiCode,
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "React Router", icon: null },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Material UI", icon: SiMui },
      { name: "Vite", icon: SiVite },
    ],
  },

  {
    number: "02",
    title: "Backend",
    label: "SERVER ENGINEERING",
    description:
      "Designing APIs, authentication, validation, and server-side application systems.",
    icon: FiServer,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: null },
      { name: "JWT", icon: null },
      { name: "Socket.IO", icon: null },
      { name: "Multer", icon: null },
      { name: "Zod", icon: null },
    ],
  },

  {
    number: "03",
    title: "Databases & Data",
    label: "DATA ENGINEERING",
    description:
      "Working with persistent storage, caching, data modeling, and application data.",
    icon: FiDatabase,
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MongoDB Atlas", icon: SiMongodb },
      { name: "Mongoose", icon: null },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
    ],
  },

  {
    number: "04",
    title: "Tools & Infrastructure",
    label: "DEVELOPER WORKFLOW",
    description:
      "Using modern tooling for development, API testing, containers, and collaboration.",
    icon: FiSettings,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Docker Compose", icon: SiDocker },
      { name: "Postman", icon: SiPostman },
      { name: "Swagger", icon: SiSwagger },
    ],
  },

  {
    number: "05",
    title: "Testing & Engineering",
    label: "QUALITY & RELIABILITY",
    description:
      "Writing maintainable code and building reliable, testable application systems.",
    icon: FiCheck,
    skills: [
      { name: "Jest", icon: SiJest },
      { name: "Unit Testing", icon: null },
      { name: "API Testing", icon: null },
      { name: "Error Handling", icon: null },
      { name: "Validation", icon: null },
      { name: "API Design", icon: null },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">

        {/* HEADER */}

        <div className="skills__header">
          <div className="skills__eyebrow">
            <span className="skills__eyebrow-line"></span>
            <p className="section-label">02 — SKILLS</p>
          </div>

          <div className="skills__heading-row">
            <h2 className="section-title">
              Technologies I use to
              <span> build software.</span>
            </h2>

            <div className="skills__index">
              <span>STACK</span>
              <strong>05</strong>
            </div>
          </div>

          <p className="section-description">
            A practical full-stack toolkit covering interfaces, APIs,
            databases, real-time systems, testing, and developer
            infrastructure.
          </p>
        </div>

        {/* SKILL SYSTEM */}

        <div className="skills__grid">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <article
                className="skill-group"
                key={group.number}
              >
                {/* CARD TOP */}

                <div className="skill-group__top">
                  <div className="skill-group__number">
                    {group.number}
                  </div>

                  <div className="skill-group__icon">
                    <GroupIcon />
                  </div>

                  <div className="skill-group__heading">
                    <span>{group.label}</span>
                    <h3>{group.title}</h3>
                  </div>

                  <FiArrowUpRight className="skill-group__arrow" />
                </div>

                {/* DESCRIPTION */}

                <p className="skill-group__description">
                  {group.description}
                </p>

                {/* SKILLS */}

                <div className="skill-group__list">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <span
                        key={skill.name}
                        className="skill-item"
                      >
                        {Icon ? (
                          <Icon className="skill-item__icon" />
                        ) : (
                          <span className="skill-item__dot" />
                        )}

                        <span className="skill-item__name">
                          {skill.name}
                        </span>
                      </span>
                    );
                  })}
                </div>

                {/* CARD FOOTER */}

                <div className="skill-group__footer">
                  <span>TECHNOLOGY GROUP</span>

                  <span>
                    {String(group.skills.length).padStart(2, "0")} SKILLS
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM SYSTEM BAR */}

        <div className="skills__bottom">
          <span>ENGINEERING STACK / 2026</span>

          <div className="skills__bottom-line"></div>

          <span>
            FULL STACK DEVELOPMENT
            <FiArrowUpRight />
          </span>
        </div>

      </div>
    </section>
  );
}

export default Skills;