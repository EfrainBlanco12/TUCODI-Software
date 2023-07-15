"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const instalacion_controller_1 = require("../controladores/instalacion.controller");
const routes = (0, express_1.Router)();
routes.get("/", instalacion_controller_1.getInstalaciones); //Recibir
routes.post("/", instalacion_controller_1.postInstalacion); //Enviar
routes.put("/:id", instalacion_controller_1.updateInstalacion); //Actualizar
routes.delete("/:id", instalacion_controller_1.deleteInstalacion); //Borrar
exports.default = routes;
