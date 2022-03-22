import axios from 'axios';
import React, {useState, useContext, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UsuarioContext } from '../../context/UsuarioContext';
import { CarritoContext } from '../../context/CarritoContext';

const Login = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    username:"",
    password: ""
  });

  const [usuarioStateContext, setUsuarioStateContext] = useContext(UsuarioContext);
  const [carritoStateContext,
    setCarritoStateContext,
    agregarCarrito,
    borrarCarrito,
    estaEnCarrito,
    obtenerCursosCarrito] = useContext(CarritoContext);

  useEffect(() => {
    if(carritoStateContext.idCarrito != null){
      obtenerCursosCarrito();
    }
  
   
  }, [carritoStateContext.idCarrito])
  

  const ingresar = async () =>{
    const data = {...usuario};
    const response  =  await axios.post("http://localhost:8080/api/auth/signin", data)
    if(response.status == 200){
      const data = response.data;
      let  usuarioLogueado = {...usuarioStateContext, ...{estaLogueado: true}, ...data}
      setUsuarioStateContext(usuarioLogueado)
      setCarritoStateContext({...carritoStateContext, ...{idCarrito: data.carrito.id}})
      usuarioLogueado = JSON.stringify(usuarioLogueado);
      localStorage.setItem("USUARIO_INFO", usuarioLogueado);      
      setTimeout(() => {
        navigate("/")}, 500);
      
    }
  }

  const cambiarTexto = (valor, tipo) =>{
    setUsuario({...usuario, ...{[tipo]:valor }})
}

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex flex-col flex-1 items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Ingresar</h1>
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="text"
            placeholder="Usuario"
            value={usuario.username}
            onChange={(e) => cambiarTexto(e.target.value, "username")}
          />
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="password"
            value={usuario.password}
            placeholder="Contraseña"
            onChange={(e) => cambiarTexto(e.target.value, "password")}
          />
          <br />
          <span>Si no tienes una cuenta  <Link to="/signup"><span className="text-blue-300">registrate</span></Link></span>
          <br />
          <br />
          <button
           /*  disabled={validateInfo()} */
            className="bg-green-500 w-full text-center py-3 rounded text-white hover:bg-green-dark focus-outline-none my-1 "
            onClick={() => ingresar()}
          >
            Ingresar
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Login