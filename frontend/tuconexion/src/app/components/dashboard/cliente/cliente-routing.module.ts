import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as router from '@angular/router';
import { InitialClienteComponent } from './cliente/initial-cliente/initial-cliente.component';
import { CrudComponent } from './cliente/crud/crud.component';
import { CrearComponent } from './cliente/crear/crear.component';


const routesCliente: router.Routes = [
  {path: '',
   children:[
    {path: '', component: InitialClienteComponent },
    {path: 'cliente/crud', component: CrudComponent},
    {path: 'cliente/crear', component: CrearComponent},
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
