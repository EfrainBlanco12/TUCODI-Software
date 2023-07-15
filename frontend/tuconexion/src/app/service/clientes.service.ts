import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { clienteModel } from '../modelos/cliente.modelo';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private endpoint = "http://localhost:3000"

  constructor(
    private http: HttpClient
  ){}

  getCliente(){
    return this.http.get(this.endpoint + "/api/clientes").pipe(map(r => {return r as any[]}))
  } 

  postCliente(
    cliente: clienteModel
  ){
    return this.http.post(this.endpoint + "/api/clientes", cliente).pipe(map(r => {return r as clienteModel}))
  } 
}