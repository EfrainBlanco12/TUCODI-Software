import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { viviendaModel } from '../modelos/vivienda.modelo';

@Injectable({
  providedIn: 'root'
})
export class ViviendasService {

  private endpoint = "http://localhost:3000"

  constructor(
    private http: HttpClient
  ){}

  getVivienda(){
    return this.http.get(this.endpoint + "/api/viviendas").pipe(map(r => {return r as any[]}))
  } 

  postVivienda(
    vivienda: viviendaModel
  ){
    return this.http.post(this.endpoint + "/api/viviendas", vivienda).pipe(map(r => {return r as viviendaModel}))
  } 
}
