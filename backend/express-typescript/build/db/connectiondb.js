"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Conexion a la base de datos
const connectiondb = new sequelize_1.Sequelize('tucodi', 'root', '123456', { host: "localhost", dialect: "mysql" });
exports.default = connectiondb;
