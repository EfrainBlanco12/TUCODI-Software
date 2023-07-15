"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clientes = void 0;
const sequelize_1 = require("sequelize");
const connectiondb_1 = __importDefault(require("../db/connectiondb"));
class cliente extends sequelize_1.Model {
}
exports.Clientes = connectiondb_1.default.define("clientes", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    id_instalacion: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_estado: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_plan: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_vivienda: {
        type: sequelize_1.DataTypes.INTEGER
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING
    },
    correo: {
        type: sequelize_1.DataTypes.STRING
    }
}, { timestamps: false });
