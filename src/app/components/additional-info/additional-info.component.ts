import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-additional-info',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.css']  // Asegúrate de que sea 'styleUrls' y no 'styleUrl'
})
export class AdditionalInfoComponent {
  items = [
    {
      title: "Python Essentials - Cisco Networking Academy (2023)",
      description: "Curso de Python a nivel intermedio, completado en la Cisco Networking Academy.",
      image: "../../../assets/images/python-certificado.png",
      altText: "Python Essentials"
    },
    {
      title: "Nivel Intermedio de Inglés - Conversa Language School by Tecsup (Completo)",
      description: "Curso completado con nivel intermedio de inglés en Conversa Language School.",
      image: "../../../assets/images/ingles.png",
      altText: "Nivel Intermedio de Inglés"
    },
    {
      title: "Voluntaria en Refugiados por el Planeta - UNHCR ACNUR (2023)",
      description: "Experiencia de voluntariado en la ayuda a refugiados con UNHCR ACNUR.",
      image: "../../../assets/images/voluntariado.png",
      altText: "Voluntaria en Refugiados"
    },
    {
      title: "Bootcamp: Introducción al Desarrollo de Unity - NTT DATA (2023)",
      description: "Bootcamp completado sobre introducción al desarrollo en Unity ofrecido por NTT DATA.",
      image: "../../../assets/images/nttdata.png",
      altText: "Bootcamp Introducción al Desarrollo de Unity"
    },
   
    {
      title: "Google: Inteligencia Artificial y Productividad - Santander (2024)",
      description: "Curso completado sobre inteligencia artificial y productividad ofrecido por Google y Santander en 2024.",
      image: "../../../assets/images/iadoc.png",
      altText: "Imagen del curso de Google sobre inteligencia artificial y productividad ofrecido por Santander"
    },
    {
      title: "Open academy: Excel - Santander (2024)",
      description: "Curso completado de Excel ofrecido por Santander en 2024.",
      image: "../../../assets/images/excel.png",
      altText: "Imagen del curso de Excel de Open Academy ofrecido por Santander"
    },
    {
      title: "Pensando en tu empleabilidad (2024)",
      description: "Participación en el ciclo de webinars Pensando en tu empleabilidad - 2024.",
      image: "../../../assets/images/pronabec.png",
      altText: "Imagen Pensando en tu empleabilidad"
    },
    {
      title: "Curso: Universidad Excel - Básico, Intermedio y Avanzado",
      description: "Certificación en Excel desde nivel básico hasta avanzado - Udemy.",
      image: "../../../assets/images/vanzado.png",
      altText: "Imagen del curso de Excel de Básico, Intermedio y Avanzado"
    },
    {
      title: "Conferencia: Desafía tus límites y sé el protagonista de tu éxito",
      description: "Capacitación en gestión del tiempo y ahorro previsional - Prima AFP.",
      image: "../../../assets/images/prima.png",
      altText: "Imagen de Conferencia: Desafía tus límites "
    },
     {
      title: "NETZUN: SQL(2026)",
      description: "Certificación sql - NETZUN.",
      image: "../../../assets/images/netzun.png",
      altText: "Imagen del curso: sql"
    },
    
  ];


  selectedItem: any = null;

  openModal(item: any) {
    this.selectedItem = item;
  }

  closeModal() {
    this.selectedItem = null;
  }
}
