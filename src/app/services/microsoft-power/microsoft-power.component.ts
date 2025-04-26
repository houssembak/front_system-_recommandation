import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-microsoft-power',
  standalone: true,
  imports: [NavbarComponent,RouterModule],
  templateUrl: './microsoft-power.component.html',
  styleUrl: './microsoft-power.component.css'
})
export class MicrosoftPowerComponent {

}
