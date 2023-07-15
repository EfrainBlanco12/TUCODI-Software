"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instalaciones = void 0;
const sequelize_1 = require("sequelize");
const connectiondb_1 = __importDefault(require("../db/connectiondb"));
class instalacion extends sequelize_1.Model {
}
exports.Instalaciones = connectiondb_1.default.define("instalaciones", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    num_nav: {
        type: sequelize_1.DataTypes.STRING
    },
    direccion_ip: {
        type: sequelize_1.DataTypes.STRING
    },
    fecha_instalacion: {
        type: sequelize_1.DataTypes.DATE
    }
}, { timestamps: false });
