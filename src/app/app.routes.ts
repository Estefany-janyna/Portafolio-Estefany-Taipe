import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AdditionalInfoComponent } from './components/additional-info/additional-info.component';

export const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'additional-info', component: AdditionalInfoComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];
