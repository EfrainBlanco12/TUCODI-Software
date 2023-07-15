import { Injectable } from "@angular/core";

@Injectable()
export class instalacionModel {
    public id?: number;
    public num_nav: string;
    public direccion_ip: string;
    public fecha_instalacion: Date | null;

    constructor() {
    this.num_nav = "";
    this.direccion_ip = "";
    this.fecha_instalacion = null;
    }
}