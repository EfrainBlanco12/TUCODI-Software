import { Request,Response } from "express";
import { Barrios } from "../modelos/barrio";

export const getBarrios = async(_req:Request,res:Response,next:any) => {
    try {
    const barrios = await Barrios.findAll()
    res.json(barrios)
    } catch (error) {
        next(error)
    }
}