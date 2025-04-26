import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component'; // Chemin relatif correct
import { FooterComponent } from '../../footer/footer.component'; // Chemin relatif correct
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-administration-microsoft-365',
  standalone: true,
  imports: [CommonModule, NavbarComponent,FooterComponent,MatSlideToggleModule,MatButtonModule,MatCardModule,RouterModule], // Ajoutez FooterComponent ici
  templateUrl: './administration-microsoft-365.component.html',
  styleUrls: ['./administration-microsoft-365.component.css']
})
export class AdministrationMicrosoft365Component {
  // Votre logique de composant ici
  isChecked:boolean=false;
}
