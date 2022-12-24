import React, { useState } from 'react';
import { Link } from 'react-scroll';
import "./header.css";

const Header = () => {
    const[Toggle, showMenu] = useState(false);
  return (
    <header className="header">
        <nav className="nav container">
            <a className="nav__logo"><Link activeClass="active" to="home" spy={true} smooth={true}>Soumallya</Link></a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a className="nav__link active-link">
                            <Link activeClass="active" to="home" spy={true} smooth={true}>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </Link>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a className="nav__link">
                            <Link activeClass="active" to="about" spy={true} smooth={true}>
                                <i className="uil uil-estate nav__icon"></i> About
                            </Link>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a className="nav__link">
                            <Link activeClass="active" to="skills" spy={true} smooth={true}>
                                <i className="uil uil-estate nav__icon"></i> Skills
                            </Link>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a className="nav__link">
                            <Link activeClass="active" to="services" spy={true} smooth={true}>
                                <i className="uil uil-estate nav__icon"></i> Services
                            </Link>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a className="nav__link">
                            <Link activeClass="active" to="projects" spy={true} smooth={true}>
                                <i className="uil uil-estate nav__icon"></i> Projects
                            </Link>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a className="nav__link">
                            <Link activeClass="active" to="contact" spy={true} smooth={true}>
                                <i className="uil uil-estate nav__icon"></i> Contact
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