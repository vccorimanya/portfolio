import React from "react";
import { Link } from "react-router-dom";
import '@styles/Footer.css'

const Footer = () => {
  return(
    <footer className=" Footer">
      <div className="max_size_container">
        <Link className="logo" to={'/'}>Vccorimanya</Link>
        <span>
          <div>
            © 2022 Victor Ccorimanya. Todos los derechos reservados.
          </div>
        </span>
      </div>
    </footer>
  )
}

export {Footer}