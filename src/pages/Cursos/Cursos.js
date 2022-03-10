import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cursos.css";
import FormularioCurso from '../../components/FormularioCurso/FormularioCurso'

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [curso, setCurso] = useState(null);
  const [tipoForm, setTipoForm] = useState("creacion");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {
    //component did mount aqui hacer peticiones al servidor para iniciar
    obtenerCursos();
  }, []);

  const obtenerCursos = () => {
    axios.get("http://localhost:8080/api/cursos").then(function (response) {
      // handle success
      console.log("obtenerCursos", response.data);
      setCursos(response.data);
    });
  };

  const mostarFormularioCurso = (tipo = "creacion", idCurso = null) =>{
    setTipoForm(tipo);
    setMostrarFormulario(true);
    if(tipo=="edicion"){
      const curso = cursos.find(curso => curso.id == idCurso);
      if(curso){
        setCurso(curso)
      }
      
    }    
  }

  const closeModal = () => {
    setMostrarFormulario(false);
  }

  const agregarCurso = (cursoData) =>{
    axios.post("http://localhost:8080/api/cursos", cursoData )
    .then(response=>{
      console.log("agregarCurso response");
      console.log(response);
      closeModal();
      obtenerCursos();
    })
  }

  const editarCurso = (idCurso, cursoData) => {
    axios.put("http://localhost:8080/api/cursos/"+idCurso, cursoData )
    .then(response=>{
      console.log("agregarCurso response");
      console.log(response);
      closeModal();
      obtenerCursos();
    })
  }

  const eliminarCurso = async (idCurso)=>{
    const response = await axios.delete(`http://localhost:8080/api/cursos/${idCurso}`);
    console.log(response);
    if(response.status == 200){
      const nuevosCursos = cursos.filter(curso => curso.id != idCurso);
      setCursos(nuevosCursos)
    }
  }

  return (
    <div>
      
    <div className="container mx-auto py-6 px-4">
        {mostrarFormulario && <FormularioCurso closeModal={closeModal} agregarCurso={agregarCurso} editarCurso={editarCurso} curso={curso} tipo={tipoForm}/>}
      <h1 className="text-3xl py-4 border-b mb-10">Administracion de Cursos</h1>
      <div>
          <button className="flex items-center justify-center h-12 px-4 text-sm font-semibold text-center text-white rounded-md lg:h-10 hover:bg-teal-300 button-add"
            onClick={() => mostarFormularioCurso()}
          > + Agregar Curso</button>
      </div>
      <div
        className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative"
        style={{ height: "405px" }}
      >
        <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
          <thead>
            <tr className="text-left">
              <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">
                CURSO
              </th>
              <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">
                DESCRIPCION
              </th>
              <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">
                PUBLICADO
              </th>

              <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">
                FECHA CREACION
              </th>

              <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {cursos.map((curso) => (
              <tr key={curso.id}>
                <td className="border-dashed border-t border-gray-200 userId">
                  <span className="text-gray-700 px-6 py-3 flex items-center">
                    {curso.titulo}
                  </span>
                </td>
                <td className="border-dashed border-t border-gray-200 firstName">
                  <span className="text-gray-700 px-6 py-3 flex items-center">
                    {curso.descripcion}
                  </span>
                </td>
                <td className="border-dashed border-t border-gray-200 lastName">
                  <span className="text-gray-700 px-6 py-3 flex items-center">
                    {curso.publicado ? "Si" : "No"}
                  </span>
                </td>
                <td className="border-dashed border-t border-gray-200 emailAddress">
                  <span className="text-gray-700 px-6 py-3 flex items-center">
                    {curso.createdAt}
                  </span>
                </td>

                <td className="border-dashed border-t border-gray-200 emailAddress">
                  <div>
                  <span className=" text-sky-500 px-6 py-3 flex items-center"
                    onClick={() => mostarFormularioCurso("edicion", curso.id)}
                  >
                    editar
                  </span>
                  <span className=" text-sky-500 px-6 py-3 flex items-center"
                    onClick={() => eliminarCurso(curso.id)}
                  >
                    eliminar
                  </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Cursos;
