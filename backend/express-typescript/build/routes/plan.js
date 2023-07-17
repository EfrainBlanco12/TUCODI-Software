"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const plan_controller_1 = require("../controladores/plan.controller");
const routes = (0, express_1.Router)();
routes.get("/", plan_controller_1.getPlanes); //Recibir
exports.default = routes;
