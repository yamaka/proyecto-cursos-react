import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Registro = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({
        username: '',
        email: '',
        password: ''
    })

    const registro = async () =>{
        const {username, email, password} = usuario;
        const data = {
            username,
            email,
            password
        }
        const response = await axios.post("http://localhost:8080/api/auth/signup", data);
        if(response.status == 200){
            navigate("/iniciar-sesion");
        }
    }
    const cambiarTexto = (valor, tipo) =>{
        setUsuario({...usuario, ...{[tipo]:valor }})
    }
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex flex-col flex-1 items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Registrate</h1>
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="text"
            placeholder="Usuario"
            value={usuario.username}
            onChange={(e) => cambiarTexto(e.target.value, "username")}
          />
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="email"
            placeholder="Correo"
            value={usuario.email}
            onChange={(e) => cambiarTexto(e.target.value, "email")}
          />
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="password"
            placeholder="Contraseña"
            value={usuario.password}
            onChange={(e) => cambiarTexto(e.target.value, "password")}
          />
          <button
           /*  disabled={validateInfo()} */
            className="bg-green-500 w-full text-center py-3 rounded text-white hover:bg-green-dark focus-outline-none my-1 "
            onClick={() => registro()}
          >
            Registrarse
          </button>
        </div>
        {/* <div className=" flex flex-col items-center text-grey-dark mt-6">
          <div>Hazlo con google o facebook</div>
          <GoogleLogin
            clientId="585612183624-ro55sv0ggkclm8a31tvqlfsfe21j19au.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div> */}
      </div>
    </div>
  )
}

export default Registro