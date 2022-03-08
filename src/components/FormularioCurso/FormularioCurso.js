import React, { useState, useEffect } from "react";

const FormularioCurso = ({
  closeModal,
  agregarCurso,
  editarCurso,
  curso,
  tipo = "creacion",
}) => {
  const [formCurso, setFormCurso] = useState({
    titulo: "",
    descripcion: "",
    publicado: false,
    imagen: "",
  });

  useEffect(() => {
    if (tipo == "edicion") {
      setFormCurso({
        titulo: curso.titulo,
        descripcion: curso.descripcion,
        publicado: curso.publicado,
        imagen: curso.imagen,
      });
    }
  }, []);

  const onChangeText = (key, value) => {
    setFormCurso({ ...formCurso, ...{ [key]: value } });
  };

  const guardarCurso = () => {
    if (tipo == "creacion") {
      agregarCurso(formCurso);
    } else if (tipo == "edicion") {
      editarCurso(curso.id, formCurso);
    }
  };

  const toggleClass = " transform translate-x-5 bg-lime-500 ";
  return (
    <div
      className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
      id="modal"
    >
      <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
          <div className="w-full flex justify-start text-gray-600 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-wallet"
              width="52"
              height="52"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
              <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
            </svg>
          </div>
          <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
            Ingrese los detalles del curso
          </h1>
          <label
            htmlFor="name"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            Titulo de Curso
          </label>
          <input
            id="name"
            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            value={formCurso.titulo}
            onChange={(e) => onChangeText("titulo", e.target.value)}
          />
          <label
            htmlFor="email2"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            Descripcion del Curso:
          </label>
          <div className="relative mb-5 mt-2">
            <textarea
              className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
              value={formCurso.descripcion}
              onChange={(e) => onChangeText("descripcion", e.target.value)}
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Descripcion"
            ></textarea>
          </div>
          <label
            htmlFor="expiry"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            Url Imagen:
          </label>
          <div className="relative mb-5 mt-2">
            <input
              id="name"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              value={formCurso.imagen}
              onChange={(e) => onChangeText("imagen", e.target.value)}
            />
          </div>
          <label
            htmlFor="cvc"
            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >
            Publicado:
          </label>
          <div
            className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
            onClick={() => {
              setFormCurso({
                ...formCurso,
                ...{ publicado: !formCurso.publicado },
              });
            }}
          >
            {/* Switch */}
            <div
              className={
                " md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform " +
                (formCurso.publicado ? toggleClass : "bg-white")
              }
            ></div>
          </div>
          <br />
          <br />
          <div className="flex items-center justify-start w-full">
            <button
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
              onClick={() => guardarCurso(formCurso)}
            >
              Guardar
            </button>
            <button
              className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
              onClick={() => closeModal()}
            >
              Cancelar
            </button>
          </div>
          <button
            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
            onClick={() => closeModal()}
            aria-label="close modal"
            role="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormularioCurso;
