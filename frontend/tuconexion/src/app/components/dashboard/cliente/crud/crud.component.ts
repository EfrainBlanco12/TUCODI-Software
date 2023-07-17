import { Component, OnInit } from '@angular/core';
import { clienteModel } from 'src/app/modelos/cliente.modelo';
import { ClientesService } from 'src/app/service/clientes.service';
import { ViviendasService } from 'src/app/service/viviendas.service';
import { InstalacionesService } from 'src/app/service/instalaciones.service';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  listaClientes: clienteModel [] = [];
  searchText: string = ''; // Texto de búsqueda
  filteredItems: any[] = []; // Lista filtrada de elementos

  constructor 
  (
    private clienteService: ClientesService,
    private viviendaService: ViviendasService,
    private instalacionService: InstalacionesService
  ) {}

  ngOnInit(){
    // Inicializar la lista de elementos
    this.clienteService.getCliente().subscribe(r => {
      this.listaClientes = r;
    });

    this.filteredItems = this.listaClientes.map(cliente => cliente.id)
  }

  filterItems() {
    // Filtrar los IDs basado en el texto de búsqueda
    this.filteredItems = this.listaClientes
    .filter(cliente => cliente.id.toString().includes(this.searchText))
    .map(cliente => cliente.id);
  }
  
  borrarCliente(cliente: clienteModel) {
    this.clienteService.deleteCliente(cliente.id).subscribe(
      () => {
        // Eliminar el cliente de la lista
        this.listaClientes = this.listaClientes.filter(c => c.id !== cliente.id);
        
        // Eliminar la vivienda relacionada
        this.viviendaService.deleteVivienda(cliente.id_vivienda).subscribe(
          () => {
            // Realizar acciones adicionales o mostrar mensajes de éxito
          },
          (error: any) => {
            console.error('Error al borrar la vivienda:', error);
          }
        );
        
        // Eliminar la instalación relacionada
        this.instalacionService.deleteInstalacion(cliente.id_instalacion).subscribe(
          () => {
            // Realizar acciones adicionales o mostrar mensajes de éxito
            window.alert('Los datos del cliente se BORRARON correctamente');
          },
          (error: any) => {
            console.error('Error al borrar la instalación:', error);
          }
        );
      },
      (error: any) => {
        console.error('Error al borrar el cliente:', error);
      }
    );
  }
  
  
}