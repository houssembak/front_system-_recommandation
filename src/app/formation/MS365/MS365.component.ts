import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-MS365',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    FormsModule,         // Required for ngModel
    MatExpansionModule   // Required for mat-accordion
  ],
  templateUrl: './MS365.component.html',
  styleUrls: ['./MS365.component.css']
})
export class MS365Component {
  isAnnual: boolean = false;  // Renamed from isChecked for consistency with template
  isChecked: boolean = false; // Keep if used elsewhere in template
  activeTab: string = 'admin-tab'; // Controls which tab is active

  // Function to handle toggle change if needed
  onToggleChange() {
    console.log('Toggle changed:', this.isAnnual);
    // Add any additional logic here
  }
}