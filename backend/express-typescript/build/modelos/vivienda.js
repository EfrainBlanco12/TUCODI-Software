"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Viviendas = void 0;
const sequelize_1 = require("sequelize");
const connectiondb_1 = __importDefault(require("../db/connectiondb"));
class vivienda extends sequelize_1.Model {
}
// Esto quiere decir que Viviendas va a ser una conexión a la base de datos con las variables 
// definidas en la clase vivienda
exports.Viviendas = connectiondb_1.default.define("vivienda", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    id_barrio: {
        type: sequelize_1.DataTypes.INTEGER
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING
    },
    // fachada:{
    //     type:DataTypes.STRING
    // },
    coordenada: {
        type: sequelize_1.DataTypes.STRING
    },
    numero_piso: {
        type: sequelize_1.DataTypes.STRING
    }
}, { timestamps: false }); //Me descativa la seguridad de sequelize del createAt y updateAt (NO HACER ESTO EN CASA)
