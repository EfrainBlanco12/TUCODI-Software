import { Request,Response } from "express";
import { Viviendas } from "../modelos/vivienda";

// req -> recibo
// res -> respuesta
// next -> error

export const getViviendas = async(_req:Request,res:Response,next:any) => {
    try {
    const viviendas = await Viviendas.findAll()
    res.json(viviendas)
    } catch (error) {
        next(error)
    }
}

export const postVivienda =async (req: Request,res: Response,next:any) => {
    const {body} = req
    try {
        const vivienda = await Viviendas.create(body)
        await vivienda.save()
        res.json(vivienda)
    } catch (error) {
        next(error)
    }
}

export const deleteVivienda =async (req: Request,res: Response,next:any) => {
    const id = req.params.id
    try {
        // id db es igual al id que recibe
        const vivienda = await Viviendas.destroy({where:{id:id}}) 
        res.json(vivienda)
    } catch (error) {
        next(error)
    }
}

export const updateVivienda =async (req: Request,res: Response,next:any) => {
    const {body} = req
    const id = req.params.id 
    try {
        // id db es igual al id que recibe
        const vivienda = await Viviendas.update(body,{where:{id:id}}) 
        res.json(vivienda)
    } catch (error) {
        next(error)
        console.log(error)
    }
}


