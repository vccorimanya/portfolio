import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { Home } from "../pages/Home";

const App = () => {
  return(
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export { App }