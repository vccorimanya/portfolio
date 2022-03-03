import React from "react";
import { Header } from "../components/Header";
import '@styles/Layout.css'
const Layout = ({ children}) => {
  return(
    <div className="Layout">
      <Header/>
      {children}
    </div>
  )
}

export {Layout}