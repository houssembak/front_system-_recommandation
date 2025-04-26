import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-power-automate',
  standalone: true,
  imports: [MatExpansionModule, NavbarComponent,RouterModule],
  templateUrl: './power-automate.component.html',
  styleUrl: './power-automate.component.css'
})
export class PowerAutomateComponent {

}
