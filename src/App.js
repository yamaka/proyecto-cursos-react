import React, { useState } from "react";
import Router from "./RouterWeb";
import CarritoContext from "./context/CarritoContext";

import "./App.css";
import UsuarioContext from "./context/UsuarioContext";

function App() {

  return (
    <UsuarioContext>
    <CarritoContext>
      <Router />
    </CarritoContext>
    </UsuarioContext>
  );
}

export default App;
