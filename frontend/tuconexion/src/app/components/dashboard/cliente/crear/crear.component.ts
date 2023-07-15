import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { viviendaModel } from 'src/app/modelos/vivienda.modelo';
import { BarriosService } from 'src/app/service/barrios.service';
import { ViviendasService } from 'src/app/service/viviendas.service';
import { InstalacionesService } from 'src/app/service/instalaciones.service';
import { instalacionModel } from 'src/app/modelos/instalaciones.modelo';
import { PlanesService } from 'src/app/service/planes.service';
import { EstadosService } from 'src/app/service/estados.service';
import { ClientesService } from 'src/app/service/clientes.service';
import { clienteModel } from 'src/app/modelos/cliente.modelo';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  barrios: any[] = [];
  planes: any[] = [];
  estados: any[] = [];
  vivienda: viviendaModel = new viviendaModel();
  instalacion: instalacionModel = new instalacionModel();
  cliente: clienteModel = new clienteModel();
  formularioVivienda!: FormGroup;
  formularioInstalacion!: FormGroup;
  formularioCliente!: FormGroup;
  mostrar: boolean = false;
  id_extraido_vivienda!: number;
  id_extraido_instalacion!: number;

  constructor(
    private barriosServices: BarriosService,
    private planServices: PlanesService,
    private estadoServices: EstadosService,
    private viviendaServices: ViviendasService,
    private instalacionServices: InstalacionesService,
    private clienteServices: ClientesService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.barriosServices.getBarrios().subscribe(r => {
      this.barrios = r;
    });

    this.planServices.getPlanes().subscribe(r => {
      this.planes = r;
    });

    this.estadoServices.getEstados().subscribe(r => {
      this.estados = r;
    });

    this.formularioVivienda = this.formBuilder.group({
      id_barrio: ['', Validators.required],
      direccion: ['', Validators.required],
      fachada: ['', Validators.required],
      coordenada: ['', Validators.required],
      numero_piso: ['', Validators.required]
    });

    this.formularioInstalacion = this.formBuilder.group({
      num_nav: ['', Validators.required],
      direccion_ip: ['', Validators.required],
      fecha_instalacion: ['', Validators.required],
    });

    this.formularioCliente = this.formBuilder.group({
      id: ['', Validators.required],
      id_estado: ['', Validators.required],
      id_plan: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required]
    });
  }

  submitFormulario() {
    if (this.formularioVivienda.valid) {
      this.vivienda = this.formularioVivienda.value;
      this.instalacion = this.formularioInstalacion.value;
      this.cliente = this.formularioCliente.value;
  
      // POST VIVIENDA
      this.viviendaServices.postVivienda(this.vivienda).subscribe(
        () => {
          // Éxito: redireccionar a la página deseada o mostrar un mensaje de éxito
          this.mostrar = true;
  
          // Extraer el último id de la tabla vivienda
          this.http.get<any[]>('http://localhost:3000/api/viviendas').subscribe(
            (viviendas: any[]) => {
              if (viviendas.length > 0) {
                const ultimoRegistroVivienda = viviendas[viviendas.length - 1];
                const ultimoIdVivienda = ultimoRegistroVivienda.id;
                this.id_extraido_vivienda = ultimoIdVivienda;
                console.log('Último ID de vivienda:', this.id_extraido_vivienda);
  
                // POST INSTALACION
                this.instalacionServices.postInstalacion(this.instalacion).subscribe(
                  () => {
                    // Éxito: redireccionar a la página deseada o mostrar un mensaje de éxito
                    this.mostrar = true;
  
                    // Extraer el último id de la tabla instalacion
                    this.http.get<any[]>('http://localhost:3000/api/instalaciones').subscribe(
                      (instalaciones: any[]) => {
                        if (instalaciones.length > 0) {
                          const ultimoRegistroInstalacion = instalaciones[instalaciones.length - 1];
                          const ultimoIdInstalacion = ultimoRegistroInstalacion.id;
                          this.id_extraido_instalacion = ultimoIdInstalacion;
                          console.log('Último ID de instalacion:', this.id_extraido_instalacion);
  
                          // Actualizar el ID de instalacion en el objeto cliente
                          this.cliente.id_instalacion = this.id_extraido_instalacion;
                          this.cliente.id_vivienda = this.id_extraido_vivienda;
  
                          // POST CLIENTE
                          this.clienteServices.postCliente(this.cliente).subscribe(
                            () => {
                              // Éxito: redireccionar a la página deseada o mostrar un mensaje de éxito
                              this.mostrar = true;
                              console.log(this.cliente)
                            },
                            (error: any) => {
                              // Error: mostrar mensaje de error o realizar otras acciones
                              console.error('Error al guardar datos del cliente:', error);
                            }
                          );
                        } else {
                          console.log('No hay registros en la tabla instalacion');
                        }
                      },
                      (error: any) => {
                        console.error('Error al obtener el último registro de instalacion:', error);
                      }
                    );
                  },
                  (error: any) => {
                    // Error: mostrar mensaje de error o realizar otras acciones
                    console.error('Error al guardar datos de instalación:', error);
                  }
                );
              } else {
                console.log('No hay registros en la tabla vivienda');
              }
            },
            (error: any) => {
              console.error('Error al obtener el último registro de vivienda:', error);
            }
          );
        },
        (error: any) => {
          // Error: mostrar mensaje de error o realizar otras acciones
          console.error('Error al guardar la vivienda:', error);
        }
      );
    }
  }    
}
