import { Component } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    NgIf,
    RouterModule // Importa RouterModule para usar routerLink
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.classList.toggle('menu-open', this.isMenuOpen);
  }

  navItems = [
    { title: "Sobre mí", url: "#about" },
    { title: "Educación", url: "#education" },
    { title: "Experiencia", url: "#experience" },
    { title: "Habilidades", url: "#skills" },
    { title: "Otros", url: "#additional-info" }
  ];

  scrollToSection(url: string) {
    const section = document.querySelector(url);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    this.toggleMenu(); // Cerrar menú en pantallas pequeñas
  }
  
}
