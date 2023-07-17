"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planes = void 0;
const sequelize_1 = require("sequelize");
const connectiondb_1 = __importDefault(require("../db/connectiondb"));
class plan extends sequelize_1.Model {
}
exports.Planes = connectiondb_1.default.define("planes", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    megas: {
        type: sequelize_1.DataTypes.STRING
    },
    precio: {
        type: sequelize_1.DataTypes.STRING
    }
}, { timestamps: false });
