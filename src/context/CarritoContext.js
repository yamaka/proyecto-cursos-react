import { createContext, useState, useEffect, useContext } from "react";
export default ({children})=>{
    const [carritoStateContext, setCarritoStateContext] = useState({
        cursos:[]
    })

    const agregarCarrito = (curso) =>{
        const {cursos} = carritoStateContext
        const nuevosCursos = cursos.push(curso); 
        setCarritoStateContext({...carritoStateContext, ...{cursos:nuevosCursos}})
    }
    
    return (
        <carritoStateContext.Provider
            value={[
                carritoStateContext,
                agregarCarrito
            ]}
        >
            {children}
        </carritoStateContext.Provider>   
        
    )
}

export const CarritoContext = createContext();