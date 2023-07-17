import { Router } from "express";
import { getEstados } from "../controladores/estado.controller";

const routes = Router()
routes.get("/",getEstados)      //Recibir

export default routes