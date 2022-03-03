import React from "react";
import '@styles/Home.css'
import '@styles/global.css'
import { Hero } from "../components/Hero";
const Home = () => {
  return(
    <>
      <Hero/>
      <main className="Home max_size_container">
        <section className="projects">
          <h2 className="heading_section_projects">Proyectos recientes</h2>
          <div>
            <div className="project_content">
              <article className="content">
                <a className="project_link" href="http://" target="_blank" rel="noopener noreferrer">
                  <h3 className="heading_small_title">React shop</h3>
                  <p className="project_desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis assumenda sed beatae perspiciatis quas illum veritatis quidem quasi qui, sapiente repudiandae obcaecati. Aut repudiandae optio atque, in dolor quaerat pariatur?
                  </p>
                  <div className="small_spacer"></div>
                  <div className="project_info">
                    Ver Proyecto
                  </div>
                </a>
              </article>
            </div>
            <div className="project_content">
              <article className="content">
                <a className="project_link" href="http://" target="_blank" rel="noopener noreferrer">
                  <h3 className="heading_small_title">React shop</h3>
                  <p className="project_desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis assumenda sed beatae perspiciatis quas illum veritatis quidem quasi qui, sapiente repudiandae obcaecati. Aut repudiandae optio atque, in dolor quaerat pariatur?
                  </p>
                  <div className="small_spacer"></div>
                  <div className="project_info">
                    Ver Proyecto
                  </div>
                </a>
              </article>
            </div>
            <div className="project_content">
              <article className="content">
                <a className="project_link" href="http://" target="_blank" rel="noopener noreferrer">
                  <h3 className="heading_small_title">React shop</h3>
                  <p className="project_desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis assumenda sed beatae perspiciatis quas illum veritatis quidem quasi qui, sapiente repudiandae obcaecati. Aut repudiandae optio atque, in dolor quaerat pariatur?
                  </p>
                  <div className="small_spacer"></div>
                  <div className="project_info">
                    Ver Proyecto
                  </div>
                </a>
              </article>
            </div>
            <div className="project_content">
              <article className="content">
                <a className="project_link" href="http://" target="_blank" rel="noopener noreferrer">
                  <h3 className="heading_small_title">React shop</h3>
                  <p className="project_desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis assumenda sed beatae perspiciatis quas illum veritatis quidem quasi qui, sapiente repudiandae obcaecati. Aut repudiandae optio atque, in dolor quaerat pariatur?
                  </p>
                  <div className="small_spacer"></div>
                  <div className="project_info">
                    Ver Proyecto
                  </div>
                </a>
              </article>
            </div>
            <div className="project_content">
              <article className="content">
                <a className="project_link" href="http://" target="_blank" rel="noopener noreferrer">
                  <h3 className="heading_small_title">React shop</h3>
                  <p className="project_desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis assumenda sed beatae perspiciatis quas illum veritatis quidem quasi qui, sapiente repudiandae obcaecati. Aut repudiandae optio atque, in dolor quaerat pariatur?
                  </p>
                  <div className="small_spacer"></div>
                  <div className="project_info">
                    Ver Proyecto
                  </div>
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export {Home}