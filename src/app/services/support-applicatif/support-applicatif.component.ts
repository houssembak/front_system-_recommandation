import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-support-applicatif',
  standalone: true,
  imports: [NavbarComponent,RouterModule],
  templateUrl: './support-applicatif.component.html',
  styleUrl: './support-applicatif.component.css'
})
export class SupportApplicatifComponent {

}
