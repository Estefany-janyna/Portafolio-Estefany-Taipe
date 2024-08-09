import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes) // Asegúrate de usar provideRouter en lugar de AppRoutingModule
  ],
}).catch(err => console.error(err));
