import { Router } from "express";
import { deleteVivienda, getViviendas, postVivienda, updateVivienda,getViviendaById } from "../controladores/vivienda.controller";

const routes = Router()
routes.get("/",getViviendas)         //Recibir
routes.get("/:id",getViviendaById)   //Recibir por id 
routes.post("/",postVivienda)        //Enviar
routes.put("/:id",updateVivienda)    //Actualizar
routes.delete("/:id",deleteVivienda) //Borrar

export default routes
