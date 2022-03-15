import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex flex-col flex-1 items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Ingresar</h1>
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="text"
            placeholder="Usuario"
           /*  onChange={(e) => handleChangeForm(e.target.value, "username")} */
          />
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="password"
            placeholder="Contraseña"
          /*   onChange={(e) => handleChangeForm(e.target.value, "password")} */
          />
          <br />
          <span>Si no tienes una cuenta  <Link to="/signup"><span className="text-blue-300">registrate</span></Link></span>
          <br />
          <br />
          <button
           /*  disabled={validateInfo()} */
            className="bg-green-500 w-full text-center py-3 rounded text-white hover:bg-green-dark focus-outline-none my-1 "
           /*  onClick={() => handleSignin()} */
          >
            Ingresar
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Login