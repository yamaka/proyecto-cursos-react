import { createContext, useState, useEffect, useContext } from "react";
import { CarritoContext } from "./CarritoContext";
export default ({children})=>{
    const [usuarioStateContext, setUsuarioStateContext] = useState({
        estaLogueado:false,
        nombreUsuario:'',
        idUsuario: '',
        correo: ''
    });

    const [carritoStateContext,
        setCarritoStateContext,
        agregarCarrito,
        borrarCarrito,
        estaEnCarrito] = useContext(CarritoContext);

    useEffect(() => {
        
        cargarDatosStorage();
      
    }, []);

    const cargarDatosStorage = async () =>{
        let usuarioLogueado = await localStorage.getItem("USUARIO_INFO");
        usuarioLogueado = JSON.parse(usuarioLogueado);
        if(usuarioLogueado && usuarioLogueado.estaLogueado){
            setUsuarioStateContext(usuarioLogueado)
        }
    }

    const cerrarSesion = async () =>{
        await localStorage.removeItem("USUARIO_INFO");
        borrarUsuarioContext();
        borrarCarrito();
        
    }

    const borrarUsuarioContext = () =>{
        setUsuarioStateContext({
            estaLogueado:false,
            nombreUsuario:'',
            idUsuario: '',
            correo: ''
        })
    }
    

    return (
        <UsuarioContext.Provider
            value={[
                usuarioStateContext,
                setUsuarioStateContext,
                cerrarSesion
            ]}
        >
            {children}
        </UsuarioContext.Provider>   
        
    )
}

export const UsuarioContext = createContext();