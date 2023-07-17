import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
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

  getViviendaById(id: number): Observable<viviendaModel> {
    const url = `${this.endpoint}/api/viviendas/${id}`;
    return this.http.get<viviendaModel>(url);
  }

  postVivienda(
    vivienda: viviendaModel
  ){
    return this.http.post(this.endpoint + "/api/viviendas", vivienda).pipe(map(r => {return r as viviendaModel}))
  } 

  deleteVivienda(id: number) {
    return this.http.delete(`${this.endpoint}/api/viviendas/${id}`).pipe(map(r => r));
  }
  
  // updateVivienda(vivienda: viviendaModel) {
  //   const url = `${this.endpoint}/api/viviendas/${vivienda.id}`;
  //   return this.http.put(url, vivienda).pipe(map(r => r));
  // }

  updateVivienda(id: number, vivienda: viviendaModel): Observable<void> {
    return this.http.put<void>(`${this.endpoint}/api/viviendas/${id}`, vivienda);
  }
}
