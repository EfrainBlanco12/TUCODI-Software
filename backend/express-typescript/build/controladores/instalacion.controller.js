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
exports.updateInstalacion = exports.deleteInstalacion = exports.postInstalacion = exports.getInstalacionById = exports.getInstalaciones = void 0;
const instalacion_1 = require("../modelos/instalacion");
const getInstalaciones = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const instalaciones = yield instalacion_1.Instalaciones.findAll();
        res.json(instalaciones);
    }
    catch (error) {
        next(error);
    }
});
exports.getInstalaciones = getInstalaciones;
const getInstalacionById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        // id db es igual al id que recibe
        const instalacion = yield instalacion_1.Instalaciones.findByPk(id);
        res.json(instalacion);
    }
    catch (error) {
        next(error);
        console.log(error);
    }
});
exports.getInstalacionById = getInstalacionById;
const postInstalacion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const instalacion = yield instalacion_1.Instalaciones.create(body);
        yield instalacion.save();
        res.json(instalacion);
    }
    catch (error) {
        next(error);
    }
});
exports.postInstalacion = postInstalacion;
const deleteInstalacion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        // id db es igual al id que recibe
        const instalacion = yield instalacion_1.Instalaciones.destroy({ where: { id: id } });
        res.json(instalacion);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteInstalacion = deleteInstalacion;
const updateInstalacion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const id = req.params.id;
    try {
        // id db es igual al id que recibe
        const instalacion = yield instalacion_1.Instalaciones.update(body, { where: { id: id } });
        res.json(instalacion);
    }
    catch (error) {
        next(error);
        console.log(error);
    }
});
exports.updateInstalacion = updateInstalacion;
