import { Request,Response } from "express";
import { Estados } from "../modelos/estado";

export const getEstados = async(_req:Request,res:Response,next:any) => {
    try {
    const estados = await Estados.findAll()
    res.json(estados)
    } catch (error) {
        next(error)
    }
}