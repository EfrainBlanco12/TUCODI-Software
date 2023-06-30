import { Component } from '@angular/core';

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

  cerrarMenu() {
    const nav: HTMLElement | null = document.querySelector("#nav");
    if (nav) {
      nav.style.visibility = "hidden";
    }
  }
}
