import React, { useEffect } from "react";

const Cursos = () => {
  useEffect(() => {
    console.log("componente did mount");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return <div>Cursos</div>;
};

export default Cursos;
