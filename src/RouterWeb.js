import React from 'react'
//pages
import Cursos from "./pages/Cursos/Cursos";
import Home from "./pages/Home/Home";
import Contacto from "./pages/Contacto/Contacto";
import Login from "./pages/Login/Login";

//components
import Header from "./components/Header/Header";

import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

const RouterWeb = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={  <Home/>}/>
        <Route path="/cursos" element={<Cursos />}/>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/iniciar-sesion" element={<Login />} />
        
      </Routes>
    </Router>
  )
}

export default RouterWeb