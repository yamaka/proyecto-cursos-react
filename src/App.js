import React, { useState } from "react";
import Cursos from "./pages/Cursos/Cursos";
import Home from "./pages/Home/Home";
import Contacto from "./pages/Contacto/Contacto";

import Header from "./components/Header/Header";

import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={  <Home />}/>
        <Route path="/cursos" element={<Cursos />}/>
        <Route path="/contacto" element={<Contacto />} />
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
