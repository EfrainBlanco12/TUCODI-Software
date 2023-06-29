import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';
import { FormularioComponent } from './formulario/formulario.component';
import {InitialComponent} from "./initial/initial.component";


const routesLogin: Routes = [
  {path: '', component: InitialComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routesLogin)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
