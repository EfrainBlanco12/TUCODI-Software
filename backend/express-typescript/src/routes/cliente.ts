import { Router } from "express";
import { getClientes, postCliente, updateCliente,deleteCliente } from "../controladores/cliente.controller";

const routes = Router()
routes.get("/",getClientes)         //Recibir
routes.post("/",postCliente)        //Enviar
routes.put("/:id",updateCliente)    //Actualizar
routes.delete("/:id",deleteCliente) //Borrar

export default routes
