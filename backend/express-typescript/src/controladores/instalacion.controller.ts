import { Request,Response } from "express";
import { Instalaciones } from "../modelos/instalacion";

export const getInstalaciones = async(_req:Request,res:Response,next:any) => {
    try {
    const instalaciones = await Instalaciones.findAll()
    res.json(instalaciones)
    } catch (error) {
        next(error)
    }
}

export const getInstalacionById = async (req: Request, res: Response, next: any) => {
    const id = req.params.id
    try {
        // id db es igual al id que recibe
        const instalacion = await Instalaciones.findByPk(id)
        res.json(instalacion)
    } catch (error) {
        next(error)
        console.log(error)
    }
}

export const postInstalacion =async (req: Request,res: Response,next:any) => {
    const {body} = req
    try {
        const instalacion = await Instalaciones.create(body)
        await instalacion.save()
        res.json(instalacion)
    } catch (error) {
        next(error)
    }
}

export const deleteInstalacion =async (req: Request,res: Response,next:any) => {
    const id = req.params.id
    try {
        // id db es igual al id que recibe
        const instalacion = await Instalaciones.destroy({where:{id:id}}) 
        res.json(instalacion)
    } catch (error) {
        next(error)
    }
}

export const updateInstalacion =async (req: Request,res: Response,next:any) => {
    const {body} = req
    const id = req.params.id 
    try {
        // id db es igual al id que recibe
        const instalacion = await Instalaciones.update(body,{where:{id:id}}) 
        res.json(instalacion)
    } catch (error) {
        next(error)
        console.log(error)
    }
}
