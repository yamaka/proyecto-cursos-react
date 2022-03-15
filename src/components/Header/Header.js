import React, { useContext } from "react";
import { Link } from "react-router-dom";

//context 
import { CarritoContext } from "../../context/CarritoContext";

const Header = () => {
  
  const [carritoStateContext, setCarritoStateContext ] = useContext(CarritoContext);
  const {cursos} = carritoStateContext;
  const nroCarrito = cursos.length;
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <Link to="/">
          <span className="font-semibold text-xl tracking-tight">Cursos Pro</span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg
            className="h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/cursos"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
          >
            Cursos
          </Link>
          <Link
            to="/contacto"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4"
          >
            Contacto
          </Link>
        </div>
        <div className="flex flex-row items-center">
          <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-white hover:text-gray-700">
            <a href="#" role="button" className="relative flex">
              <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
              </svg>
              <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                {nroCarrito}
              </span>
            </a>
          </li>

          <address
            to="/signin"
            className="inline-block text-sm px-4 py-2 leading-none  text-white   mt-4 lg:mt-0"
          >
            Ingresar
          </address>
          <address
            to="/signup"
            className="inline-block text-sm px-4 py-2 leading-none  text-white   mt-4 lg:mt-0"
          >
            Registrate
          </address>

          {/*  <React.Fragment>
            
                <Cart />
                <address
                  to="/"
                  className="inline-block text-sm px-4 py-2 leading-none  text-white   mt-4 lg:mt-0"
                >
                  {username}
                </address>
                <button 
                  className="inline-block text-sm px-4 py-2 leading-none  text-white   mt-4 lg:mt-0"
                  onClick={() => logout()}
                >
                  Salir
                </button>
              </React.Fragment> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
