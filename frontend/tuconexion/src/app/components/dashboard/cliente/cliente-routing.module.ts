import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as router from '@angular/router';
import { InitialClienteComponent } from './initial-cliente/initial-cliente.component';
import { CrudComponent } from './crud/crud.component';
import { CrearComponent } from './crear/crear.component';

const routesCliente: router.Routes = [
  {path: '',
   children:[
    {path: '', component: InitialClienteComponent },
    {path: 'crud', component: CrudComponent },
    {path: 'crear', component: CrearComponent },
    {path: '**', redirectTo:'cliente',pathMatch:'full'} 
   ]}
];

@NgModule({
  imports: [
    CommonModule,
    router.RouterModule.forChild(routesCliente) 
  ],
  exports:[router.RouterModule]
})

export class ClienteRoutingModule { }
