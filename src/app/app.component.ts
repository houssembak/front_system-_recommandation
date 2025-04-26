import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { acceuilComponent } from './acceuil/acceuil.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    SignupComponent,
     NavbarComponent, 
     acceuilComponent,
     FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Correction ici
})
export class AppComponent {
  title = 'frontend';
}
