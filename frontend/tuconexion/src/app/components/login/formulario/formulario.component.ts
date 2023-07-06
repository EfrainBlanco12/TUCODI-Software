import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  constructor(private router: Router) {}

  mostrar =  false;
  Login(){
    this.mostrar=true;
    this.router.navigate(['/dashboard']);
  }
}
