import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  private endpoint = "http://localhost:3000"

  constructor(
    private http: HttpClient
  ){}

  getPlanes(){
    return this.http.get(this.endpoint + "/api/planes").pipe(map(r => {return r as any[]}))
  }  

}