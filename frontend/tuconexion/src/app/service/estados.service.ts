import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  private endpoint = "http://localhost:3000"

  constructor(
    private http: HttpClient
  ){}

  getEstados(){
    return this.http.get(this.endpoint + "/api/estados").pipe(map(r => {return r as any[]}))
  }  

}