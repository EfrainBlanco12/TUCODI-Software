import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';

const routes: Routes = [
  { path: '', redirectTo : 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'recuperar-password', component: RecuperarPasswordComponent},
  { path: 'verificar-correo', component: VerificarCorreoComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '**', redirectTo : 'login', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
