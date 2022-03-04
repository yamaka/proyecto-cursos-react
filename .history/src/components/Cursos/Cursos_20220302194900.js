import React, { useEffect } from "react";

const Cursos = () => {
  useEffect(() => {
    console.log("componente did mount");
  }, []);

  return <div>Cursos</div>;
};

export default Cursos;
