import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-microsoft-bi',
  standalone: true,
  imports: [NavbarComponent,RouterModule],
  templateUrl: './microsoft-bi.component.html',
  styleUrl: './microsoft-bi.component.css'
})
export class MicrosoftBiComponent {

}
