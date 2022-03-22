import React, { useContext } from "react";
import Button from "../Button/Button";
import "./CardCurso.css";
//context
import { CarritoContext } from "../../context/CarritoContext";
import { UsuarioContext } from "../../context/UsuarioContext";
import { useNavigate } from "react-router-dom";

const CardCurso = ({ curso: { id, titulo, descripcion, imagen } }) => {
  const navigate = useNavigate();
  const [carritoStateContext,
    setCarritoStateContext,
    agregarCarrito,
    borrarCarrito,
    estaEnCarrito] =
    useContext(CarritoContext);
  const [usuarioStateContext] = useContext(UsuarioContext);
  const { estaLogueado } = usuarioStateContext;

  const verificarSesion = () => {
    if (estaLogueado) {
      agregarCarrito({ id, titulo, descripcion, imagen });
    } else {
      navigate("/iniciar-sesion");
    }
  };

  return (
    <div className="container-curso m-6 figure-curso mb-6">
      <figure className="bg-gray-700 rounded-xl p-8 dark:bg-slate-800 figure-curso flex">
        <div className="flex-1 flex flex-col justify-between items-center">
          <div className=" h-32 flex flex-col w-11/12">
            <img className=" mx-auto image-curso" src={imagen} alt="" />
          </div>
          <div className="flex flex-col justify-end pt-6 text-center space-y-4">
            <span className=" text-2xl font-medium text-white">{titulo}</span>
            <blockquote>
              <p className="text-lg font-medium text-white">{descripcion}</p>
            </blockquote>
          </div>
          
          <div className=" flex flex-row justify-center">
          {!estaEnCarrito(id)? <Button title="Agregar al Carrito" onPress={verificarSesion} />
          :   <Button title="Ir al Carrito" onPress={() => alert("carrito")} /> }
            
          </div>
        </div>
      </figure>
    </div>
  );
};

export default CardCurso;
