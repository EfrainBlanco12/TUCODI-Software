import { NgModule } from '@angular/core';
import * as router from '@angular/router';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';
import {InitialComponent} from "./initial/initial.component";


const routesLogin: router.Routes = [
  {path: '',
   children:[
    {path: '', component: InitialComponent},
    {path: 'recuperar-password', component: RecuperarPasswordComponent},
    {path: 'verificar-correo', component: VerificarCorreoComponent},
    {path: '**', redirectTo:'login',pathMatch:'full'}
   ]}
];

@NgModule({
  imports: [router.RouterModule.forChild(routesLogin)],
  exports: [router.RouterModule]
})
export class LoginRoutingModule { }
