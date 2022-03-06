import React from "react";
import '@styles/Home.css'
import '@styles/global.css'
import { Hero } from "../components/Hero";
const Home = () => {
  return(
    <>
      <Hero/>
      <main className="Home max_size_container">
        <section className="projects" >
          <h2 className="heading_section_projects" >Proyectos recientes</h2>
          <div>
            <div className="project_content">
              <article className="content">
                <a className="project_link" href="https://vccorimanya.github.io/react-shop/index.html" target="_blank" rel="noopener noreferrer">
                  <h3 className="heading_small_title">React shop</h3>
                  <p className="project_desc">
                    Este proyecto formó parte de la carrera de Frontend con React.JS en platzi
                    donde configuré mi entorno de desarrollo con wabpack y babel.
                    Creación de componentes, contenedores, rutas con react-router-dom v6,
                    usé hooks para manejar  los estados de la applicación también el despliege de
                    la aplicación con gh-pages.
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
                <a className="project_link" href="https://github.com/vccorimanya/taller-avocado" target="_blank" rel="noopener noreferrer">
                  <h3 className="heading_small_title">Avocados App</h3>
                  <p className="project_desc">
                    Este proyecto fue desarrollado en la carrera de JavaScript de platzi donde
                    aprendí a manejar, escuchar eventos y manipular el DOM con Javascript.
                    Se utilizó la API de Internacionalización para los precios.
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
                <a className="project_link" href="https://vccorimanya.github.io/food-delivery/index.html" target="_blank" rel="noopener noreferrer">
                  <h3 className="heading_small_title">Food delivery</h3>
                  <p className="project_desc">
                    Proyecto personal de maquetación responsive con html, css y js.

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