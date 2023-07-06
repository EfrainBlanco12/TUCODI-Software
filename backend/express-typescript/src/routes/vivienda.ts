import { Router } from "express";
import { deleteVivienda, getViviendas, postVivienda, updateVivienda } from "../controladores/vivienda.controller";

const routes = Router()
routes.get("/",getViviendas)         //Recibir
routes.post("/",postVivienda)        //Enviar
routes.put("/:id",updateVivienda)    //Actualizar
routes.delete("/:id",deleteVivienda) //Borrar

export default routes
