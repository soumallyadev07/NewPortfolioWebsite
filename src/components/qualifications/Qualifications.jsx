import React, { useState } from 'react';
import './qualifications.css'

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section" id='qualifications'>
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.E. Computer Science</h3>
                            <span className="qualification__subtitle">
                                Patiala - Thapar University
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2018 - 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">

                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Higher Secondary</h3>
                            <span className="qualification__subtitle">
                                Noida - BBPS
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2016 - 2018
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Secondary</h3>
                            <span className="qualification__subtitle">
                                Noida - BBPS
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2012 - 2016
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">

                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Secondary</h3>
                            <span className="qualification__subtitle">
                                Korba - DPS
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2005 - 2012
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Technology Analyst</h3>
                            <span className="qualification__subtitle">
                                Morgan Stanley - Bangalore
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                 Jan '22 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">

                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">UI/UX Intern</h3>
                            <span className="qualification__subtitle">
                                Passbird Research, Inc - Remote
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                 Apr '21 - Jun '21
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Backend Developer</h3>
                            <span className="qualification__subtitle">
                                rollinow - Remote
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                 Dec '20 - Mar '21
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">

                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Project Intern</h3>
                            <span className="qualification__subtitle">
                                SashiDo.io - Remote
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                 Nov '20 - Jan '21
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualifications