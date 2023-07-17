import { Router } from "express";
import { getBarrios } from "../controladores/barrio.controller";

const routes = Router()
routes.get("/",getBarrios)      //Recibir

export default routes