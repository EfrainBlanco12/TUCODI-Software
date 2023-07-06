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
exports.updateVivienda = exports.deleteVivienda = exports.postVivienda = exports.getViviendas = void 0;
const vivienda_1 = require("../modelos/vivienda");
// req -> recibo
// res -> respuesta
// next -> error
const getViviendas = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const viviendas = yield vivienda_1.Viviendas.findAll();
        res.json(viviendas);
    }
    catch (error) {
        next(error);
    }
});
exports.getViviendas = getViviendas;
const postVivienda = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const vivienda = yield vivienda_1.Viviendas.create(body);
        yield vivienda.save();
        res.json(vivienda);
    }
    catch (error) {
        next(error);
    }
});
exports.postVivienda = postVivienda;
const deleteVivienda = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        // id db es igual al id que recibe
        const vivienda = yield vivienda_1.Viviendas.destroy({ where: { id: id } });
        res.json(vivienda);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteVivienda = deleteVivienda;
const updateVivienda = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const id = req.params.id;
    try {
        // id db es igual al id que recibe
        const vivienda = yield vivienda_1.Viviendas.update(body, { where: { id: id } });
        res.json(vivienda);
    }
    catch (error) {
        next(error);
        console.log(error);
    }
});
exports.updateVivienda = updateVivienda;
