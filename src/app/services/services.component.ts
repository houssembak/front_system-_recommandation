// services.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { CommonModule } from '@angular/common'; // <-- Import CommonModule for *ngFor

@Component({
  selector: 'app-services',
  standalone: true, // <-- Mark as standalone
  imports: [FormsModule, CommonModule], // <-- Import FormsModule and CommonModule
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  // List of categories
  categories: string[] = [
    'Administration Microsoft 365',
    'Administration Azure',
    'Administration réseau et système',
    'Audit infra IT',
    'Consulting cyber security',
    'Vente licence MS 365',
    'Vente licence Windows',
    'SQL Server',
    'Visio',
    'Étude financière projet infra IT',
    'Support IT',
    'Support applicatif',
    'Migration vers Cloud',
    'Development Power Apps',
    'Development Power Automate',
    'Dashbording Power BI'
  ];

  // Selected category (optional, for two-way binding)
  selectedCategory: string = '';

  constructor() { }

  ngOnInit(): void {
    // Initialize the selected category if needed
    this.selectedCategory = this.categories[0];
  }

  // Method to handle category selection (optional)
  onCategoryChange(event: any): void {
    this.selectedCategory = event.target.value;
    console.log('Selected Category:', this.selectedCategory);
  }
}