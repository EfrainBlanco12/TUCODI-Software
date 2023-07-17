import { Router } from "express";
import { deleteInstalacion, getInstalaciones, postInstalacion, updateInstalacion,getInstalacionById } from "../controladores/instalacion.controller";


const routes = Router()
routes.get("/",getInstalaciones)        //Recibir
routes.get("/:id",getInstalacionById)   //Recibir por id 
routes.post("/",postInstalacion)        //Enviar
routes.put("/:id",updateInstalacion)    //Actualizar
routes.delete("/:id",deleteInstalacion) //Borrar

export default routes
