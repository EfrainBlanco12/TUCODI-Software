import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialDashComponent } from './initial-dash/initial-dash.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';




@NgModule({
  declarations: [
    InitialDashComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
