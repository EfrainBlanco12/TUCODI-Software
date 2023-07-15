import { Component, OnInit } from '@angular/core';
import { clienteModel } from 'src/app/modelos/cliente.modelo';
import { ClientesService } from 'src/app/service/clientes.service';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  // items: string[] = []; // Lista de elementos
  // searchText: string = ''; // Texto de búsqueda

  // filteredItems: string[] = []; // Lista filtrada de elementos

  // constructor() { }

  // ngOnInit() {
  //   // Inicializar la lista de elementos
  //   this.items = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];
  //   // Inicializar la lista filtrada con todos los elementos
  //   this.filteredItems = [...this.items];
  // }

  // filterItems() {
  //   // Filtrar la lista de elementos basado en el texto de búsqueda
  //   this.filteredItems = this.items.filter(item =>
  //     item.toLowerCase().includes(this.searchText.toLowerCase())
  //   );
  // }

  listaClientes: clienteModel [] = [];
  searchText: string = ''; // Texto de búsqueda
  filteredItems: any[] = []; // Lista filtrada de elementos

  constructor 
  (
    private clienteService: ClientesService
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
  
}