"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const barrio_controller_1 = require("../controladores/barrio.controller");
const routes = (0, express_1.Router)();
routes.get("/", barrio_controller_1.getBarrios); //Recibir
exports.default = routes;
