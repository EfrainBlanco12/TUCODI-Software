import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
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
  
  getInstalacionById(id: number): Observable<instalacionModel> {
    const url = `${this.endpoint}/api/instalaciones/${id}`;
    return this.http.get<instalacionModel>(url);
  }

  postInstalacion(
    instalacion: instalacionModel
  ){
    return this.http.post(this.endpoint + "/api/instalaciones", instalacion).pipe(map(r => {return r as instalacionModel}))
  }
  
  deleteInstalacion(id: number) {
    return this.http.delete(`${this.endpoint}/api/instalaciones/${id}`).pipe(map(r => r));
  }
  
  // updateInstalacion(instalacion: instalacionModel) {
  //   const url = `${this.endpoint}/api/instalaciones/${instalacion.id}`;
  //   return this.http.put(url, instalacion).pipe(map(r => r));
  // }

  updateInstalacion(id: number, instalacion: instalacionModel): Observable<void> {
    return this.http.put<void>(`${this.endpoint}/api/instalaciones/${id}`, instalacion);
  }
}
