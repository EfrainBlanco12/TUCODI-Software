import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BarriosService {

  private endpoint = "http://localhost:3000"

  constructor(
    private http: HttpClient
  ){}

  getBarrios(){
    return this.http.get(this.endpoint + "/api/barrios").pipe(map(r => {return r as any[]}))
  }  

}
