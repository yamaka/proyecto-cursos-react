import axios from "axios";
import React, {useEffect, useState} from "react";
import CardCurso from "../../components/CardCurso/CardCurso";
const Home = ({setNroCarrito}) => {
  const [cursos, setCursos] = useState([]);
  useEffect(() => {
    getCursos()
  }, [])
  
  const getCursos = async () =>{
    const response = await axios.get("http://localhost:8080/api/cursos");
    if(response.status == 200){
      setCursos(response.data);
    }
  }

  return (
  
      <div className=" flex flex-1 flex-col items-center justify-center m-7">
        <h1 className=" text-2xl font-bold ">Cursos</h1>
        <br /><br />
        <div className=" flex flex-1 flex-row flex-wrap">
          {/* tarea llamar al servicio de listado de cursos y hacer map para mostrar todos los curso de la base de datos */}
          {cursos.map(curso => <CardCurso curso={curso} setNroCarrito={setNroCarrito}/>)}
        </div>
      </div>
    
  );
};

export default Home;
