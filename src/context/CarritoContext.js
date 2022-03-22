import { createContext, useState, useEffect, useContext } from "react";
import { CarritoService } from "../services/CarritoService";
export default ({children})=>{
    const [carritoStateContext, setCarritoStateContext] = useState({
        idCarrito: null,
        cursos:[]
    })

    const agregarCarrito = async (curso) =>{
        let {cursos, idCarrito} = carritoStateContext;
        const cursoEncontrado = cursos.find(cursoContext => cursoContext.id == curso.id)
        if(!cursoEncontrado){
            cursos.push(curso); 
            setCarritoStateContext({...carritoStateContext, ...{cursos}})
        const response  = await  CarritoService.agregarCurso({idCarrito , idCurso:curso.id });
            if(response.status != 200){
                console.error("agregarCarrito service", response);
                
            }else{
                alert("agregado con exito!")
            }
        }
        
    }

    const borrarCarrito = () =>{
        setCarritoStateContext({
            cursos:[]
        })
    }

    const estaEnCarrito = (cursoId) =>{
        const {cursos} = carritoStateContext;
        const cursoEncontrado = cursos.find(cursoContext => cursoContext.id == cursoId)
        return cursoEncontrado? true :false
    }

    const obtenerCursosCarrito = async () =>{
        const {idCarrito} = carritoStateContext;
        try {
            const response = await CarritoService.obtenerCursos(idCarrito);
            
            if(response.status == 200){
                const {cursos} = response.data[0];
                setCarritoStateContext({...carritoStateContext, ...{cursos:cursos}})
            }else{                
                throw new Error(response.data)
            }
        } catch (error) {
            console.error("error obtenerCursosCarrito", error)
        } 
    }

    
    
    return (
        <CarritoContext.Provider
            value={[
                carritoStateContext,
                setCarritoStateContext,
                agregarCarrito,
                borrarCarrito,
                estaEnCarrito,
                obtenerCursosCarrito
            ]}
        >
            {children}
        </CarritoContext.Provider>   
        
    )
}

export const CarritoContext = createContext();