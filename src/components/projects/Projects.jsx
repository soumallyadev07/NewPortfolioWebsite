import './projects.css';
import { Data } from "./Data";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">What I've created</span>

        <div className="projects__container container grid">

            {Data.map(({id, image, title, description, link}) => {
              return (
                <div className="projects__content" key={id}>
                    <div>
                        <div className='projects__img__div'>
                          <img src={image} alt="" className="projects__img" />
                        </div>
                        <h3 className="projects__title">
                            {title}
                        </h3>
                    </div>

                    <p className="project__description-small">
                      {description}
                    </p>

                    <a href={link} target="_blank" rel="noreferrer">
                      <span className="projects__button">
                          Demo <i className="uil uil-arrow-right projects__button-icon"></i>
                      </span>
                    </a>
                </div>
              )
            })}

        </div>
    </section>
  )
}

export default Projects