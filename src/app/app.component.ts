import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from "./components/experience/experience.component";
import { SkillsComponent } from './components/skills/skills.component';
import { AdditionalInfoComponent } from './components/additional-info/additional-info.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,
    FooterComponent,
    AboutComponent,
    EducationComponent, 
    ExperienceComponent,
    SkillsComponent,
    AdditionalInfoComponent,
    RouterModule // Para manejar la navegación si es necesario
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';
}
