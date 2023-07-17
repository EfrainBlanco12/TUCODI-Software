import { Router } from "express";
import { getPlanes } from "../controladores/plan.controller";

const routes = Router()
routes.get("/",getPlanes)      //Recibir

export default routes