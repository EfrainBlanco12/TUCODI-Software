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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEstados = void 0;
const estado_1 = require("../modelos/estado");
const getEstados = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const estados = yield estado_1.Estados.findAll();
        res.json(estados);
    }
    catch (error) {
        next(error);
    }
});
exports.getEstados = getEstados;
