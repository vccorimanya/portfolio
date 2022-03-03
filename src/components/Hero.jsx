import React from "react";
import '@styles/Hero.css'

const Hero = () => {
  return(
    <div className="hero_wrapper">
      <div className="max_size_container">
        <div className="hero_text_wrapper">
          <div className="hero_text">
            <span>¡Hola a todos!</span>
            <h2>Soy Victor</h2>
            <p>Frontend Developer que le encanta
              implementar diseños que inspiran y
              atraen a las personas.
            </p>
          </div>
        </div>
      </div>
      <div className="hero_end_container">
        <svg preserveAspectRatio="none" width="1440" height="74" viewBox="0 0 1440 74" className="hero_end_svg"><path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path></svg>
      </div>
    </div>

  )
}

export {Hero}