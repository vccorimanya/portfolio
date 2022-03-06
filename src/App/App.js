import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { Curriculum } from "../pages/Curriculum";
import { Home } from "../pages/Home";
import { Tutoriales } from "../pages/Tutoriales";

const App = () => {
  return(
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tutoriales" element={<Tutoriales />} />
          <Route path="/curriculum" element={<Curriculum/>} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export { App }