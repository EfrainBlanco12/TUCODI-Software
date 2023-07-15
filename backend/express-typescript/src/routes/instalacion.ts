import { Router } from "express";
import { deleteInstalacion, getInstalaciones, postInstalacion, updateInstalacion } from "../controladores/instalacion.controller";


const routes = Router()
routes.get("/",getInstalaciones)         //Recibir
routes.post("/",postInstalacion)        //Enviar
routes.put("/:id",updateInstalacion)    //Actualizar
routes.delete("/:id",deleteInstalacion) //Borrar

export default routes
