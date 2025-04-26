import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-power-bi',
  standalone: true,
  imports: [NavbarComponent,RouterModule],
  templateUrl: './power-bi.component.html',
  styleUrl: './power-bi.component.css'
})
export class PowerBiComponent {

}
