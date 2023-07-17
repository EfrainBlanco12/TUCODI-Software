import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as router from '@angular/router';

import { InitialDashComponent } from './initial-dash/initial-dash.component';

// Rutas hijas del dashboard
const routesDashboard: router.Routes = [
  {path: '',
   children:[
    {path: '', 
    component: InitialDashComponent},

    {path: 'cliente', 
    loadChildren: () => import('../dashboard/cliente/cliente.module').then(r => r.ClienteModule)},

    {path: '**', 
    redirectTo:'dashboard',pathMatch:'full'}
   ]}
];

@NgModule({
  imports: [
    CommonModule,
    router.RouterModule.forChild(routesDashboard)],
  exports: [router.RouterModule]
})

export class DashboardRoutingModule { }
