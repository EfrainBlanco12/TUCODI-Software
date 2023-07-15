import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { instalacionModel } from '../modelos/instalaciones.modelo';
@Injectable({
  providedIn: 'root'
})
export class InstalacionesService {

  private endpoint = "http://localhost:3000"

  constructor(
    private http: HttpClient
  ){}

  getInstalaciones(){
    return this.http.get(this.endpoint + "/api/instalaciones").pipe(map(r => {return r as any[]}))
  } 

  postInstalacion(
    instalacion: instalacionModel
  ){
    return this.http.post(this.endpoint + "/api/instalaciones", instalacion).pipe(map(r => {return r as instalacionModel}))
  } 
}
