import { Component, OnInit } from '@angular/core';
import { viviendaModel } from 'src/app/modelos/vivienda.modelo';
import { BarriosService } from 'src/app/service/barrios.service';
import { ViviendasService } from 'src/app/service/viviendas.service';



@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})

export class CrudComponent implements OnInit{

  barrios: any[] = []
  vivienda: viviendaModel = new viviendaModel();

  constructor(
    private barriosServices: BarriosService, // Llamamos el servicio BarriosServices
    private viviendaServices: ViviendasService // Llamamos al servicio VIviendaServices 
  ){}

  ngOnInit(){
    this.barriosServices.getBarrios().subscribe(r => {this.barrios = r})
    
  }

  guardarVivienda(){
    this.viviendaServices.postViviendas(this.vivienda).subscribe()
  }
}
