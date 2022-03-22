import React, { useState } from "react";
import Router from "./RouterWeb";
import CarritoContext from "./context/CarritoContext";

import "./App.css";
import UsuarioContext from "./context/UsuarioContext";

function App() {

  return (
    <CarritoContext>
    <UsuarioContext>
    
      <Router />
    </UsuarioContext>
    </CarritoContext>
   
  );
}

export default App;
