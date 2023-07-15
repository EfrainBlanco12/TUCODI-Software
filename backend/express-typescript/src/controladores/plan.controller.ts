import { Request,Response } from "express";
import { Planes } from "../modelos/plan";

export const getPlanes = async(_req:Request,res:Response,next:any) => {
    try {
    const planes = await Planes.findAll()
    res.json(planes)
    } catch (error) {
        next(error)
    }
}