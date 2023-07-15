import { Injectable } from "@angular/core";

@Injectable()

export class clienteModel {
    public id: number;
    public id_instalacion: number;
    public id_estado: number;
    public id_plan: number;
    public id_vivienda: number;
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public correo: string;
  toLowerCase: any;

    constructor() {
    this.id = 0
    this.id_instalacion = 0
    this.id_estado = 0
    this.id_plan = 0 
    this.id_vivienda = 0
    this.nombre = ""
    this.apellido = ""
    this.telefono = ""
    this.correo = ""
    }
}