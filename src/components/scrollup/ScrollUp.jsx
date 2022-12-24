import React from 'react';
import { Link } from 'react-scroll';
import './scrollup.css';

const ScrollUp = () => {
    window.addEventListener("scroll", function() {
        const scrollUp = document.querySelector(".scrollup");
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });
  return (
    <a className="scrollup">
        <Link activeClass="active" to="home" spy={true} smooth={true}>
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </Link>
    </a>
  )
}

export default ScrollUp