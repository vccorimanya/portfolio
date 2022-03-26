import React, { useState } from "react"
import { Link } from "react-router-dom"
import '@styles/Tutoriales.css'
import '@styles/global.css'


const animated = {
  paddingRight: '16px'
}

const Tutoriales = () => {

  const [animation, setAnimation] = useState(false)

  const translateX = () => {
    setAnimation(true)
  }
  const reset = () => {
    setAnimation(false)
  }



  return(
    <div className="Tutoriales max_size_container">
      <section className="tutorials">
        <div>
          <div className="project_content">
            <article className="content">
              <h3 className="heading_small_title">Enviar formularios en React</h3>
              <p className="project_desc">
                Muy pronto ...
                <br />
                <br />
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="tutorials">
        <div>
          <div className="">
            <article className="content">
              <h2 className="heading_section_projects">Entradas recientes</h2>
              <div>
                <ul>
                  <li className="list_wrapper display_flex align_ic">
                    <span
                    style={animated}
                      className={animation ? 'arrow_annimated' : 'arrow_container'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </span>
                      <div>
                      <Link onMouseOver={translateX} onMouseLeave={reset} className="external_link" to={'/tutoriales'}>Enviar formularios en React</Link>
                      </div>
                  </li>
                </ul>
              </div>
              {/* <a className="project_link" href="#proy1" target="_blank" rel="noopener noreferrer">
                <h3 className="heading_small_title">Enviar formularios en React</h3>
              </a> */}
            </article>
          </div>
        </div>
      </section>

    </div>
  )
}

export {Tutoriales}