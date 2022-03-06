import React from "react"
import '@styles/Tutoriales.css'
import '@styles/global.css'

const Tutoriales = () => {
  return(
    <div className="Tutoriales max_size_container">
      <section className="tutorials">
        <div>
          <div className="project_content">
            <article className="content">
              <h3 className="heading_small_title">React shop</h3>
              <p className="project_desc">
                Este proyecto formó parte de la carrera de Frontend con React.JS en platzi
                donde configuré mi entorno de desarrollo con wabpack y babel.
                Creación de componentes, contenedores, rutas con react-router-dom v6,
                usé hooks para manejar  los estados de la applicación también el despliege de
                la aplicación con gh-pages.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="tutorials">
        <div>
          <div className="project_content">
            <article className="content">
              <a className="project_link" href="https://vccorimanya.github.io/react-shop/index.html" target="_blank" rel="noopener noreferrer">
                <h3 className="heading_small_title">Desplegar un proyecto de React en GitHub</h3>
                <p className="project_desc">
                  Tutorial para deplegar un proyecto hecho con react
                </p>
                <div className="small_spacer"></div>
                <div className="project_info">
                  Ver tutorial
                </div>
              </a>
            </article>
          </div>
          <div className="project_content">
            <article className="content">
              <a className="project_link" href="https://vccorimanya.github.io/react-shop/index.html" target="_blank" rel="noopener noreferrer">
                <h3 className="heading_small_title">Desplegar un proyecto de React en GitHub</h3>
                <p className="project_desc">
                  Tutorial para deplegar un proyecto hecho con react
                </p>
                <div className="small_spacer"></div>
                <div className="project_info">
                  Ver tutorial
                </div>
              </a>
            </article>
          </div>
        </div>
      </section>

    </div>
  )
}

export {Tutoriales}