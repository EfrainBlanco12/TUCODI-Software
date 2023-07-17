import { Request, Response } from "express";
import { Clientes } from "../modelos/cliente";

export const getClientes = async (_req: Request, res: Response, next: any) => {
    try {
        const clientes = await Clientes.findAll()
        res.json(clientes)
    } catch (error) {
        next(error)
    }
}

export const getClienteById = async (req: Request, res: Response, next: any) => {
    const id = req.params.id
    try {
        // id db es igual al id que recibe
        const cliente = await Clientes.findByPk(id)
        res.json(cliente)
    } catch (error) {
        next(error)
        console.log(error)
    }
}

export const postCliente = async (req: Request, res: Response, next: any) => {
    const { body } = req
    try {
        const cliente = await Clientes.create(body)
        await cliente.save()
        res.json(cliente)
    } catch (error) {
        next(error)
    }
}

export const deleteCliente = async (req: Request, res: Response, next: any) => {
    const id = req.params.id
    try {
        // id db es igual al id que recibe
        const cliente = await Clientes.destroy({ where: { id: id } })
        res.json(cliente)
    } catch (error) {
        next(error)
    }
}

export const updateCliente = async (req: Request, res: Response, next: any) => {
    const { body } = req
    const id = req.params.id
    try {
        // id db es igual al id que recibe
        const cliente = await Clientes.update(body, { where: { id: id } })
        res.json(cliente)
    } catch (error) {
        next(error)
        console.log(error)
    }
}




