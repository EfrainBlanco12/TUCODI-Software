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
exports.updateCliente = exports.deleteCliente = exports.postCliente = exports.getClienteById = exports.getClientes = void 0;
const cliente_1 = require("../modelos/cliente");
const getClientes = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientes = yield cliente_1.Clientes.findAll();
        res.json(clientes);
    }
    catch (error) {
        next(error);
    }
});
exports.getClientes = getClientes;
const getClienteById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        // id db es igual al id que recibe
        const cliente = yield cliente_1.Clientes.findByPk(id);
        res.json(cliente);
    }
    catch (error) {
        next(error);
        console.log(error);
    }
});
exports.getClienteById = getClienteById;
const postCliente = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const cliente = yield cliente_1.Clientes.create(body);
        yield cliente.save();
        res.json(cliente);
    }
    catch (error) {
        next(error);
    }
});
exports.postCliente = postCliente;
const deleteCliente = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        // id db es igual al id que recibe
        const cliente = yield cliente_1.Clientes.destroy({ where: { id: id } });
        res.json(cliente);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteCliente = deleteCliente;
const updateCliente = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const id = req.params.id;
    try {
        // id db es igual al id que recibe
        const cliente = yield cliente_1.Clientes.update(body, { where: { id: id } });
        res.json(cliente);
    }
    catch (error) {
        next(error);
        console.log(error);
    }
});
exports.updateCliente = updateCliente;
