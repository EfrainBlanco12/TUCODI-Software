import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'formulario',component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
