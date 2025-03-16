import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  
  TAGS = {
    KOTLIN: {
      name: "Kotlin",
      class: "bg-[#003159] text-white",
      icon: "fas fa-cogs",  // Ajusta el icono según sea necesario
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "bg-[#003159] text-white",
      icon: "fab fa-css3",
    },
    NODEJS: {
      name: "Node.js",
      class: "bg-[#003159] text-white",
      icon: "fab fa-node",
    },
    EXPRESS: {
      name: "Express",
      class: "bg-[#003159] text-white",
      icon: "fas fa-server",
    },
    ANGULAR: {
      name: "Angular",
      class: "bg-[#003159] text-white",
      icon: "fab fa-angular",
    },
    Mongodb: {
      name: "MongoDB",
      class: "bg-[#003159] text-white",
      icon: "fas fa-database",
    },
    Bootstrap: {
      name: "Bootstrap",
      class: "bg-[#003159] text-white",
      icon: "fab fa-bootstrap",
    },
    REACT: {
      name: "React",
      class: "bg-[#003159] text-white",
      icon: "fab fa-react",
    },
    SpringBoot: {
      name: "SpringBoot",
      class: "bg-[#003159] text-white",
      icon: "fas fa-leaf",
    },
    figma: {
      name: "Figma",
      class: "bg-[#003159] text-white",
      icon: "fa-brands fa-figma",
    },
    canva: {
      name: "Canva",
      class: "bg-[#003159] text-white",
      icon: "fa-solid fa-c",
    },
  }

  PROJECTS = [
    {
      title: "Girl of the Future",
      description: "Aplicación móvil para abordar la problematica del bullying en el Perú.",
      // link: "https://svgl.vercel.app/",
      github: "https://github.com/Estefany-janyna",
      image: "../../../assets/images/software.jpg",
      tags: [this.TAGS.KOTLIN, this.TAGS.TAILWIND],
    },
    {
      title: "Citas Tec Médicas",
      description: "Sistema para la reserva de citas médicas.",
      // link: "https://adventjs.dev",
      github: "https://github.com/Jhoselin19/PROYECTOJMDE.git",
      image: "../../../assets/images/citas.png",
      tags: [this.TAGS.REACT, this.TAGS.SpringBoot],
    },
    {
      title: "CyberSentinel",
      description: "Aplicación web para mejorar la conciencia de seguridad cibernética.",
      // link: "https://adventjs.dev",
      github: "https://github.com/Estefany-janyna/CyberSentinel.git",
      image: "../../../assets/images/IMG1.png",
      tags: [this.TAGS.NODEJS, this.TAGS.Bootstrap],
    },
    {
      title: "Enseñame",
      description: "Aplicación web para reforzar el conocimiento de lenguaje de señas peruanas. Un software implementado a una empresa.",
      // link: "https://adventjs.dev",
      github: "https://github.com/Estefany-janyna/EM-PROYECTO_PRETESIS_FINAL.git",
      image: "../../../assets/images/lara.png",
      tags: [this.TAGS.NODEJS, this.TAGS.Mongodb, this.TAGS.Bootstrap, this.TAGS.ANGULAR],
    },
    {
      title: "Fundación Calma",
      description: "Diseñadora Web en el área de Marketing, Branding y Comunicaciones. Desarrollo de contenido digital para sensibilización y cultura de paz (720 horas).",
      // link: "https://adventjs.dev",
      github: "https://www.figma.com/design/hf5MNo0nvDSBJf2vBJpOYp/Untitled?node-id=0-1&p=f&t=Crsokd43fU1ZICoQ-0",
      image: "../../../assets/images/suyat.png",
      tags: [this.TAGS.figma, this.TAGS.canva],
    },
  ]



  selectedItem: any = null;

  openModal(item: any) {
    this.selectedItem = item;
  }

  closeModal() {
    this.selectedItem = null;
  }
}
