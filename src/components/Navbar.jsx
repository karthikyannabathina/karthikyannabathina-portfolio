function Navbar() {
  return (
    <header className="navbar">

      <div className="container navbar__inner">

        {/* LOGO */}

        <a
          href="/"
          className="navbar__brand"
        >
          <span className="navbar__brand-icon">
            &lt;/&gt;
          </span>

          <span className="navbar__brand-name">
            Karthik
          </span>
        </a>


        {/* NAVIGATION */}

        <nav className="navbar__links">

          <a href="#about">
            About
          </a>

          <a href="#experience">
            Experience
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#contact">
            Contact
            <span className="navbar__external">
              ↗
            </span>
          </a>

        </nav>


        {/* RIGHT */}

        <div className="navbar__right">

          <a
            href="/Karthik_Yannabathina_Mern_Resume.pdf"
            className="navbar__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
            <span>↗</span>
          </a>

        </div>

      </div>

    </header>
  );
}

export default Navbar;