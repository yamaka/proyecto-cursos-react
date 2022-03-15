import { createContext, useState, useEffect, useContext } from "react";
export default ({children})=>{
    const [carritoStateContext, setCarritoStateContext] = useState({
        cursos:[]
    })

    const agregarCarrito = (curso) =>{
        let {cursos} = carritoStateContext;
        const cursoEncontrado = cursos.find(cursoContext => cursoContext.id == curso.id)
        if(!cursoEncontrado){
            cursos.push(curso); 
            setCarritoStateContext({...carritoStateContext, ...{cursos}})
        }
        
    }
    
    return (
        <CarritoContext.Provider
            value={[
                carritoStateContext,
                agregarCarrito
            ]}
        >
            {children}
        </CarritoContext.Provider>   
        
    )
}

export const CarritoContext = createContext();