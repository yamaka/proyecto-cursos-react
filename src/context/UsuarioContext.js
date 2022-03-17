import { createContext, useState, useEffect, useContext } from "react";
export default ({children})=>{
    const [usuarioStateContext, setUsuarioStateContext] = useState({
        estaLogueado:false,
        nombreUsuario:''
    })

    return (
        <UsuarioContext.Provider
            value={[
                usuarioStateContext,
                setUsuarioStateContext
            ]}
        >
            {children}
        </UsuarioContext.Provider>   
        
    )
}

export const UsuarioContext = createContext();