import React from "react";
import Button from '../Button/Button'
import "./CardCurso.css";
const CardCurso = ({ curso: { id, titulo, descripcion, imagen }, setNroCarrito }) => {
 
  return (
    <div className="container-curso m-6 figure-curso mb-6">
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 figure-curso flex">
        <div className="flex-1 flex flex-col justify-between items-center">
          <div className=" h-32 flex flex-col w-11/12">
            <img
              className=" mx-auto image-curso"
              src={imagen}
              alt=""
             
            />
          </div>
          <div class="flex flex-col justify-end pt-6 text-center space-y-4">
            <span className=" text-2xl font-medium text-white">{titulo}</span>
            <blockquote>
              <p class="text-lg font-medium text-white">{descripcion}</p>
            </blockquote>
          </div>
          <div className=" flex flex-row justify-center">
           <Button title="Carrito" onPress={setNroCarrito}/>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default CardCurso;
