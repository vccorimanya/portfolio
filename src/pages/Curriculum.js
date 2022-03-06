import React from "react";
import '@styles/Curriculum.css'

const Curriculum = () => {
  return(
    <div className="max_size_container ">
      <div className="project_content content_background">
        <section className="info_section">
          <div className="header_info">
            <h1 className="info_name">Victor Raul<br /> Ccorimanya Alfaro</h1>
            <span>Frontend Developper</span>
          </div>
          <div className="bg_color contact_info ">
            <div className="contact_header">
              <h5>Contacto</h5>
            </div>
            <div className="margin_top_2">
              <p>Celular: 925162575</p>
              <h4>Email:</h4>
              <p>raulccorimanyaalfaro@gmail.com</p>
              <a className="github" href="https://github.com/vccorimanya" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>
        <div className="">
          <p className="border_top_bott">Perfil Profesional</p>
        </div>
        <section className=" presonal_profile">

          <p>
            Soy egresado de la carrera de computación e informática, tengo experiencia
            desarrollando sitios web con html, css y javascript, utilizando frameworks como
            React o Angular. También desarrollé API's REST con laravel y express
            e integré servicios REST con React y Angular.
          </p>
        </section>
        <div className=" education_info">
          <div className="education">
            <section>
              <p className="border_top_bott">Educación</p>
              <div className="margin_bottom_1">
                <h4>CIBERTEC</h4>
                <h5 className="margin_0">Computación e informática</h5>
                <time>2015 - 2017</time>
              </div>
              <div>
                <h4>Platzi</h4>
                <h5 className="margin_0">Desarrollo Frontend con React</h5>
                <time>2021 - Actualidad</time>
              </div>
            </section>
            <section>
              <p className="border_top_bott">Experiencia</p>
              <div className="margin_bottom_1">
                <h4 className="margin_0">Materia gris</h4>
                <time>01-2018 - 04-2018</time>
                <h6>4 meses </h6>
              </div>
              <div>
                <h4>Cargo: Programador</h4>
                <p className="text_justify">
                  Participé en el desarrollo de un sistema realizanado maquetación y generando
                  modulos con angular, también manejé formularios reactivos e integración de
                  API rest.
                </p>
              </div>
            </section>
            <div className=" habilities">
              <div className="margin_right_3">
                <h4 className="border_top_bott">Habilidades</h4>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>ReactJs</p>
                <p>SCSS</p>
                <p>Redux</p>
                <p>Laravel</p>
                <p>NodeJS</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" habilities">
          <div className="margin_right_3">
            <h4 className="border_top_bott">Aptitudes</h4>
            <p>Trabajo en equipo</p>
            <p>Autodidacta</p>

          </div>
          <div>
            <h4 className="border_top_bott">Idiomas</h4>
            <p>Español</p>
            <p>Inglés: Intermedio</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Curriculum}