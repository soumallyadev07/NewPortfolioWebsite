import React, { useState } from 'react';
import { Link } from 'react-scroll';
import "./header.css";

const Header = () => {

    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("home");

  return (
    <header className="header">
        <nav className="nav container">
            <a className="nav__logo"><Link activeClass="active" to="home" spy={true} smooth={true}>Soumallya</Link></a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a onClick={() => setActiveNav("home")} className={activeNav === "home" ? "nav__link active-link" : "nav__link"}>
                            <Link activeClass="active" to="home" spy={true} smooth={true}>
                                <i className="uil uil-estate nav__icon"></i>Home
                            </Link>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a onClick={() => setActiveNav("about")} className={activeNav === "about" ? "nav__link active-link" : "nav__link"}>
                            <Link activeClass="active" to="about" spy={true} smooth={true}>
                                <i className="uil uil-user nav__icon"></i>About
                            </Link>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a onClick={() => setActiveNav("skills")} className={activeNav === "skills" ? "nav__link active-link" : "nav__link"}>
                            <Link activeClass="active" to="skills" spy={true} smooth={true}>
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </Link>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a onClick={() => setActiveNav("services")} className={activeNav === "services" ? "nav__link active-link" : "nav__link"}>
                            <Link activeClass="active" to="services" spy={true} smooth={true}>
                                <i className="uil uil-briefcase-alt nav__icon"></i>Services
                            </Link>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a onClick={() => setActiveNav("projects")} className={activeNav === "projects" ? "nav__link active-link" : "nav__link"}>
                            <Link activeClass="active" to="projects" spy={true} smooth={true}>
                                <i className="uil uil-processor nav__icon"></i>Projects
                            </Link>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a onClick={() => setActiveNav("contact")} className={activeNav === "contact" ? "nav__link active-link" : "nav__link"}>
                            <Link activeClass="active" to="contact" spy={true} smooth={true}>
                                <i className="uil uil-message nav__icon"></i>Contact
                            </Link>
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header