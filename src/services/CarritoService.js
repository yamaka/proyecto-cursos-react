import axios from "axios"


export const CarritoService = {
    agregarCurso: async function(data){
        const response = axios.post("http://localhost:8080/api/carrito/add-curso", data);
        return response;
    },

    obtenerCursos: async function (idCarrito){
        const response = axios.get("http://localhost:8080/api/carrito/get-cursos/"+idCarrito);
        return response
    }


}