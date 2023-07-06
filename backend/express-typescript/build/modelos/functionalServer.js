"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Index = void 0;
const express_1 = __importDefault(require("express"));
const connectiondb_1 = __importDefault(require("../db/connectiondb"));
const cors_1 = __importDefault(require("cors"));
const vivienda_1 = __importDefault(require("../routes/vivienda"));
const barrio_1 = __importDefault(require("../routes/barrio"));
class Index {
    constructor() {
        this.routes = {
            viviendas: "/api/viviendas",
            barrios: "/api/barrios"
        };
        this.app = (0, express_1.default)();
        this.PORT = "3000";
        this.dbconnection();
        this.middlewares();
        this.Routes();
    }
    dbconnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Llamando la conexion de la DB
                yield connectiondb_1.default.authenticate();
                console.log('Conexion exitosa!');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // Declarando middlewares
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    Listen() {
        this.app.listen(this.PORT, () => { });
    }
    Routes() {
        this.app.use(this.routes.viviendas, vivienda_1.default);
        this.app.use(this.routes.barrios, barrio_1.default);
    }
}
exports.Index = Index;
