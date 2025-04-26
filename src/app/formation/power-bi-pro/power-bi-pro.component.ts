import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-power-bi-pro',
  standalone: true,
   imports: [NavbarComponent,RouterModule],
  templateUrl: './power-bi-pro.component.html',
  styleUrl: './power-bi-pro.component.css'
})
export class PowerBiProComponent {

}
