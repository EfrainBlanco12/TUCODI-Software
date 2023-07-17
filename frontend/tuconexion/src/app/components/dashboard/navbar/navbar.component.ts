import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  
  abrirMenu() {
    const nav: HTMLElement | null = document.querySelector("#nav");
    if (nav) {
      nav.style.visibility = "visible";
    }
  }

  // BUG - Al hacer uso de esta funcion y expandir la pagina no salen los elementos de la lista menu
  cerrarMenu() {
    const nav: HTMLElement | null = document.querySelector("#nav");
    if (nav) {
      nav.style.visibility = "hidden";
    }
  }
}
