import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialDashComponent } from './initial-dash/initial-dash.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ClienteModule } from './cliente/cliente.module';




@NgModule({
  declarations: [
    InitialDashComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ClienteModule
  ]
})
export class DashboardModule { }
