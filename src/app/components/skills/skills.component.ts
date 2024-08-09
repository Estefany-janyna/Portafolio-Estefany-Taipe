import { Component, OnInit, HostListener  } from '@angular/core';
import { NgFor, NgClass, NgTemplateOutlet, NgIf } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [  NgFor,
    NgClass,
    NgTemplateOutlet,
    NgIf],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  elements = [
    {
      title: 'Frontend',
      icon: '../../../assets/images/path.png',
      items: [
        { src: '../../../assets/images/html-5.png', alt: 'HTML' },
        { src: '../../../assets/images/css-3.png', alt: 'CSS' },
        // { src: '../../../assets/images/js.png', alt: 'JavaScript' },
        { src: '../../../assets/images/angular.png', alt: 'Angular' }
      ]
    },
    {
      title: 'Backend',
      icon: '../../../assets/images/server.png',
      items: [
        // { src: '../../../assets/images/django.png', alt: 'Django' },
        { src: '../../../assets/images/node-js.png', alt: 'Node.js' },
        { src: '../../../assets/images/express.png', alt: 'Express' }
      ]
    },
    {
      title: 'Base de datos',
      icon: '../../../assets/images/database.png',
      items: [
        // { src: '../../../assets/images/mysql.png', alt: 'MySQL' },
        { src: '../../../assets/images/sql.png', alt: 'SQLServer' },
        { src: '../../../assets/images/mongodb.png', alt: 'MongoDB' }
      ]
    },
    {
      title: 'Microsoft Office',
      icon: '../../../assets/images/microsoft.png',
      items: [
        { src: '../../../assets/images/word.png', alt: 'Word' },
        { src: '../../../assets/images/Excel2.png', alt: 'Excel' },
        { src: '../../../assets/images/powerpoint.png', alt: 'PowerPoint' }
      ]
    },
    {
      title: 'Expansión de habilidades',
      icon: '../../../assets/images/learning.png',
      items: [
        { src: '../../../assets/images/react.png', alt: 'React' },
        { src: '../../../assets/images/tailwind.png', alt: 'Tailwind' }
      ]
    }
  ];
}
