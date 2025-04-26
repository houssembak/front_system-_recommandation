import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-infrastructures-cloud',
  standalone: true,
  imports: [NavbarComponent,RouterModule],
  templateUrl: './infrastructures-cloud.component.html',
  styleUrl: './infrastructures-cloud.component.css'
})
export class InfrastructuresCloudComponent {

}
