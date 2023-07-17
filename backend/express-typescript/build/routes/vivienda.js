"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vivienda_controller_1 = require("../controladores/vivienda.controller");
const routes = (0, express_1.Router)();
routes.get("/", vivienda_controller_1.getViviendas); //Recibir
routes.get("/:id", vivienda_controller_1.getViviendaById); //Recibir por id 
routes.post("/", vivienda_controller_1.postVivienda); //Enviar
routes.put("/:id", vivienda_controller_1.updateVivienda); //Actualizar
routes.delete("/:id", vivienda_controller_1.deleteVivienda); //Borrar
exports.default = routes;
