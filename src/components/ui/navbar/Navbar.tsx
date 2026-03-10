import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a key="about" href="#about" className="navbar-link">
        ABOUT
      </a>
      <a key="skills" href="#skills" className="navbar-link">
        SKILLS
      </a>
      <a key="work" href="#work" className="navbar-link">
        WORK
      </a>
      <a key="projects" href="#projects" className="navbar-link">
        CASE STUDIES
      </a>
      <a key="contact" href="#contact" className="navbar-link">
        CONTACT
      </a>
    </nav>
  );
}
