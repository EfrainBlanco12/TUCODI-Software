import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { FormularioComponent } from './formulario/formulario.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';

@NgModule({
  declarations: [
    FormularioComponent,
    RecuperarPasswordComponent,
    VerificarCorreoComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
