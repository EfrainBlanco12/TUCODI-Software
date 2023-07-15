"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estado_controller_1 = require("../controladores/estado.controller");
const routes = (0, express_1.Router)();
routes.get("/", estado_controller_1.getEstados); //Recibir
exports.default = routes;
