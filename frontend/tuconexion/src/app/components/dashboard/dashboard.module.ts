import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { InitialDashComponent } from './initial-dash/initial-dash.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ClienteModule } from './cliente/cliente.module';
import { InitialClienteComponent } from './cliente/initial-cliente/initial-cliente.component';

@NgModule({
  declarations: [
    InitialDashComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ClienteModule
  ],
  exports:[
    InitialDashComponent,
    NavbarComponent
  ]
})
export class DashboardModule {

}
