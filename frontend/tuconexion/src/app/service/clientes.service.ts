import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { clienteModel } from '../modelos/cliente.modelo';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private endpoint = "http://localhost:3000"

  constructor(
    private http: HttpClient
  ){}

  getCliente()
  {
    return this.http.get(this.endpoint + "/api/clientes").pipe(map(r => {return r as any[]}))
  }
  
  getClienteById(id: number): Observable<clienteModel> {
    const url = `${this.endpoint}/api/clientes/${id}`;
    return this.http.get<clienteModel>(url);
  }

  postCliente(
    cliente: clienteModel
  ){
    return this.http.post(this.endpoint + "/api/clientes", cliente).pipe(map(r => {return r as clienteModel}))
  } 

  deleteCliente(id: number) {
    return this.http.delete(`${this.endpoint}/api/clientes/${id}`).pipe(map(r => r));
  }

  // updateCliente(cliente: clienteModel) {
  //   const url = `${this.endpoint}/api/clientes/${cliente.id}`;
  //   return this.http.put(url, cliente).pipe(map(r => r));
  // }

  updateCliente(id: number, cliente: clienteModel): Observable<void> {
    return this.http.put<void>(`${this.endpoint}/api/clientes/${id}`, cliente);
  }
  
}