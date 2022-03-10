import React from "react";
import CardCurso from "../../components/CardCurso/CardCurso";
const Home = () => {
  return (
  
      <div className=" flex flex-1 flex-col items-center justify-center m-7">
        <h1 className=" text-2xl font-bold ">Cursos</h1>
        <br /><br />
        <div className=" flex flex-1 flex-row ">
          {/* tarea llamar al servicio de listado de cursos y hacer map para mostrar todos los curso de la base de datos */}
          <CardCurso/>
          <CardCurso/>
          <CardCurso/>
          <CardCurso/>
        </div>
      </div>
    
  );
};

export default Home;
