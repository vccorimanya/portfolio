import React from "react";
import '@styles/Home.css'
import '@styles/global.css'
import { Hero } from "../components/Hero";
import { Projects } from "../staticdata/Projects"
const Home = () => {
  return(
    <>
      <Hero/>
      <main className="Home max_size_container">
        <section className="projects" >
          <h2 className="heading_section_projects" >Proyectos recientes</h2>
          <div>
            {Projects.map((item => (
              <div className="project_content" key={item.id}>
                <article className="content">
                  <a className="project_link" href={item.project_url} target="_blank" rel="noopener noreferrer">
                    <h3 className="heading_small_title">{item.title}</h3>
                    <p className="project_desc">{item.content}</p>
                    <div className="small_spacer"></div>
                    <div className="project_info">
                      Ver Proyecto
                    </div>
                  </a>
                </article>
              </div>
            )))}
          </div>
        </section>
      </main>
    </>
  )
}

export {Home}