import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-verificar-correo',
  templateUrl: './verificar-correo.component.html',
  styleUrls: ['./verificar-correo.component.css']
})
export class VerificarCorreoComponent {
  constructor(private loginService: LoginService,private routeService:Router){
    
  }

  sessionStart(){
    this.loginService.logged=true;
    this.routeService.navigate(["/dashboard"])
  }
}
