import { Router } from "express";
import { getClientes, postCliente, updateCliente,deleteCliente, getClienteById } from "../controladores/cliente.controller";

const routes = Router()
routes.get("/",getClientes)         //Recibir
routes.get("/:id",getClienteById)   //Recibir por id 
routes.post("/",postCliente)        //Enviar
routes.put("/:id",updateCliente)    //Actualizar
routes.delete("/:id",deleteCliente) //Borrar

export default routes
