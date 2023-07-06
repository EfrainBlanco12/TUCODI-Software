import { Injectable } from "@angular/core";

@Injectable()

export class viviendaModel{
    public id: number;
    public id_barrio: number;
    public direccion: string;
    public fachada: string;
    public coordenada: string;
    public numero_piso: string;

    constructor(){
        this.id = 0;
        this.id_barrio = 0;
        this.direccion = "";
        this.fachada = "";
        this.coordenada = "";
        this.numero_piso = "";
    }
}