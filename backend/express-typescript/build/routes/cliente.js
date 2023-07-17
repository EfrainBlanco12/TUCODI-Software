"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_controller_1 = require("../controladores/cliente.controller");
const routes = (0, express_1.Router)();
routes.get("/", cliente_controller_1.getClientes); //Recibir
routes.get("/:id", cliente_controller_1.getClienteById); //Recibir por id 
routes.post("/", cliente_controller_1.postCliente); //Enviar
routes.put("/:id", cliente_controller_1.updateCliente); //Actualizar
routes.delete("/:id", cliente_controller_1.deleteCliente); //Borrar
exports.default = routes;
