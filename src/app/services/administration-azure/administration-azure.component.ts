import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../navbar/navbar.component";
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-administration-azure',
  standalone: true,
  imports: [CommonModule, NavbarComponent,MatCardModule,RouterModule],
  templateUrl: './administration-azure.component.html',
  styleUrls: ['./administration-azure.component.css']
})
export class AdministrationAzureComponent {
  // Logique du composant
}