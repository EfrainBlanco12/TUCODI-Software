import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './cliente/crud/crud.component';
import { CrearComponent } from './cliente/crear/crear.component';
import { InitialClienteComponent } from './cliente/initial-cliente/initial-cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';



@NgModule({
  declarations: [
    CrudComponent,
    CrearComponent,
    InitialClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
