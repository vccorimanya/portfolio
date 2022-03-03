import React from "react";
import '@styles/global.css'
import '@styles/Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <>
      <div size="48" className="hero_spacer_top"></div>
      <div className="header_wrapper">
        <div className="hader_container max_size_container">
          <header className="header">
            <div className="header_left">
              <Link className="logo" to={'/'}>Vccorimanya</Link>
              <nav className="display_flex">
                <ul className="display_flex">
                  <li className="margin_10">
                    <div className="nav_item">
                      <Link to={'/tutoriales'}>Tutoriales</Link>
                    </div>
                  </li>
                  <li className="margin_10">
                    <div className="nav_item">
                      <Link to={'/proyectos'}>Proyectos</Link>
                    </div>
                  </li>
                  <li className="margin_10">
                    <div className="nav_item">
                      <Link to={'/curriculum'}>Curriculum</Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
      </div>
    </>
  )
}
export {Header}