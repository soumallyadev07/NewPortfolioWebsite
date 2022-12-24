import React from 'react';
import { Link } from 'react-scroll';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Soumallya</h1>

            <ul className="footer__list">
                <li>
                    <a className="footer__link">
                    <Link activeClass="active" to="about" spy={true} smooth={true}>
                        About
                    </Link>
                    </a>
                </li>

                <li>
                    <a className="footer__link">
                    <Link activeClass="active" to="projects" spy={true} smooth={true}>
                        Projects
                    </Link>
                    </a>
                </li>

                <li>
                    <a className="footer__link">
                    <Link activeClass="active" to="qualifications" spy={true} smooth={true}>
                        Journey
                    </Link>
                    </a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/_soumallya_/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </a>

                <a href="https://www.facebook.com/SoumallyaDev/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-facebook"></i>
                </a>

                <a href="https://github.com/soumallyadev07" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Soumallya Dev. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer