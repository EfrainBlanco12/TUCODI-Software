import { Application } from "express"
import express from 'express'
import connectiondb from "../db/connectiondb"
import cors from "cors"

import viviendasRoutes from "../routes/vivienda"
import barriosRoutes from "../routes/barrio"

export class Index {
    private app: Application
    private PORT: String

    private routes = {
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
        this.app.use(this.routes.viviendas,viviendasRoutes)
        this.app.use(this.routes.barrios,barriosRoutes)
    }
}