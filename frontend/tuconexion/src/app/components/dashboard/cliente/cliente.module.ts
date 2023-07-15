import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialClienteComponent } from './initial-cliente/initial-cliente.component';
import { CrudComponent } from './crud/crud.component';
import { CrearComponent } from './crear/crear.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { EditarComponent } from './editar/editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    InitialClienteComponent,
    CrudComponent,
    CrearComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    InitialClienteComponent,
    CrudComponent,
    CrearComponent
  ]
})
export class ClienteModule { }
