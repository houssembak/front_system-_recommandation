import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-consulting-cyber-security',
  standalone: true,
  imports: [NavbarComponent,CommonModule,RouterModule],
  templateUrl: './consulting-cyber-security.component.html',
  styleUrl: './consulting-cyber-security.component.css'
})
export class ConsultingCyberSecurityComponent {

}
