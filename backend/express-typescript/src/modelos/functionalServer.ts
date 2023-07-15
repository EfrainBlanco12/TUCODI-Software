import { Application } from "express"
import express from 'express'
import connectiondb from "../db/connectiondb"
import cors from "cors"

import viviendasRoutes from "../routes/vivienda"
import barriosRoutes from "../routes/barrio"
import clienteRoutes from "../routes/cliente"
import instalacionRoutes from "../routes/instalacion"
import estadoRoutes from "../routes/estado"
import planRoutes from "../routes/plan"

export class Index {
    private app: Application
    private PORT: String

    private routes = {
        planes: "/api/planes",
        estado: "/api/estados",
        instalaciones: "/api/instalaciones",
        clientes: "/api/clientes",
        viviendas: "/api/viviendas",
        barrios: "/api/barrios"
    }

    constructor(){
        this.app = express()
        this.PORT = "3000"
        this.dbconnection()
        this.middlewares()
        this.Routes()
    }

    async dbconnection() {
        try {
            // Llamando la conexion de la DB
            await connectiondb.authenticate()
            console.log('Conexion exitosa!')
        } catch (error) {
            console.log(error)
        }
    }

    // Declarando middlewares
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    Listen(){
        this.app.listen(this.PORT,() => {})
    }

    Routes(){
        this.app.use(this.routes.planes,planRoutes)
        this.app.use(this.routes.estado,estadoRoutes)
        this.app.use(this.routes.instalaciones,instalacionRoutes)
        this.app.use(this.routes.clientes,clienteRoutes)
        this.app.use(this.routes.viviendas,viviendasRoutes)
        this.app.use(this.routes.barrios,barriosRoutes)
    }
}