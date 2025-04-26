import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-power-automate-formation',
  standalone: true,
  imports: [MatExpansionModule, NavbarComponent,RouterModule],
  templateUrl: './power-automate-formation.component.html',
  styleUrl: './power-automate-formation.component.css'
})
export class PowerAutomateFormationComponent {

}
