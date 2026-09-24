import {
  FiArrowUpRight,
  FiMail,
  FiFileText,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__content">
          <div className="contact__top">
            <p className="section-label">07 — Contact</p>

            <span className="contact__status">
              <span className="contact__status-dot"></span>
              Open to opportunities
            </span>
          </div>

          <h2 className="contact__title">
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p className="contact__description">
            I'm currently looking for opportunities to start my career as a
            software developer. If you're hiring, working on an interesting
            product, or would simply like to connect, feel free to reach out.
          </p>

          <a
            href="mailto:karthikyannabathina4444@gmail.com"
            className="contact__email"
          >
            <span className="contact__icon">
              <FiMail />
            </span>

            <span className="contact__email-text">
              <small>Drop me an email</small>
              karthikyannabathina4444@gmail.com
            </span>

            <FiArrowUpRight className="contact__arrow" />
          </a>

          <div className="contact__links">
            <a
              href="https://github.com/karthikyannabathina"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <span className="contact__link-icon">
                <FiGithub />
              </span>

              <span>
                <small>Code</small>
                GitHub
              </span>

              <FiArrowUpRight />
            </a>

            <a
              href="https://www.linkedin.com/in/karthik-yannabathina/"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <span className="contact__link-icon">
                <FiLinkedin />
              </span>

              <span>
                <small>Connect</small>
                LinkedIn
              </span>

              <FiArrowUpRight />
            </a>

            <a
              href="/Karthik_Yannabathina_Mern_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <span className="contact__link-icon">
                <FiFileText />
              </span>

              <span>
                <small>View</small>
                Resume
              </span>

              <FiArrowUpRight />
            </a>
          </div>

          <div className="contact__footer">
            <span>Have an idea?</span>
            <span>Let's talk →</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;