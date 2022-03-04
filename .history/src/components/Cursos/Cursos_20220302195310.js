import React, { useEffect } from "react";
import axios from "axios";

const Cursos = () => {
  useEffect(() => {
    console.log("componente did mount");
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(function (response) {
        // handle success
        console.log(response);
      });
  }, []);

  return <div>Cursos</div>;
};

export default Cursos;
