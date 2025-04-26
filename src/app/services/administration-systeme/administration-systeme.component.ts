import { Component } from '@angular/core';

import {MatExpansionModule} from '@angular/material/expansion';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-administration-systeme',
  standalone: true,
  imports: [NavbarComponent, MatExpansionModule,CommonModule,RouterModule],
  templateUrl: './administration-systeme.component.html',
  styleUrl: './administration-systeme.component.css'
})
export class AdministrationSystemeComponent {
  panelOpenState1 = false;
  panelOpenState2 = false;
  panelOpenState3 = false;
}
