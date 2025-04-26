import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule here
import { CommonModule } from '@angular/common';  // Import CommonModule
import { NgIf } from '@angular/common';  // Import NgIf for structural directives

@Component({
  selector: 'app-gestion-formations',
  standalone: true, 
  imports: [CommonModule, FormsModule, NgIf],  // Add FormsModule here in imports
  templateUrl: './gestion-formations.component.html',
  styleUrls: ['./gestion-formations.component.css']
})
export class GestionFormationComponent implements OnInit {
  formations: any[] = [];  // List of formations
  showAddForm = false;     // Flag to toggle the add form
  isUpdate = false;        // Flag to toggle between add and update modes
  searchTerm = '';         // Search term for filtering formations
  formation = {
    id: null,
    titre: '',
    description: '',
    prix: 0,
    dateDebut: '',
    dateFin: '',
    disponible: false
  };  // New formation data model

  constructor() {}

  ngOnInit() {
    this.loadFormations();  // Load formations on init
  }

  loadFormations() {
    this.formations = [
      {
        id: 1,
        titre: 'Formation 1',
        description: 'Description 1',
        prix: 150,
        dateDebut: '2025-05-01',
        dateFin: '2025-05-10',
        disponible: true
      },
      {
        id: 2,
        titre: 'Formation 2',
        description: 'Description 2',
        prix: 200,
        dateDebut: '2025-06-01',
        dateFin: '2025-06-10',
        disponible: false
      },
      // Add more formations as needed
    ];
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;  // Toggle form visibility
    if (!this.showAddForm) {
      this.resetFormation();  // Reset form when hidden
    }
  }

  // Handle the form submission to add or update a formation
  onSubmit() {
    if (this.formation.titre && this.formation.description && this.formation.prix && this.formation.dateDebut && this.formation.dateFin) {
      if (this.isUpdate) {
        // Update the formation
        const index = this.formations.findIndex(f => f.id === this.formation.id);
        if (index !== -1) {
          this.formations[index] = { ...this.formation };  // Update the formation in the list
        }
      } else {
        // Add a new formation
        const newFormation = {
          id: this.formations.length + 1,  // Generate ID (could be improved)
          titre: this.formation.titre,
          description: this.formation.description,
          prix: this.formation.prix,
          dateDebut: this.formation.dateDebut,
          dateFin: this.formation.dateFin,
          disponible: this.formation.disponible
        };
        this.formations.push(newFormation);  // Add to the formations list
      }
      
      this.resetFormation();  // Reset the form
      this.showAddForm = false;  // Hide the form
      this.isUpdate = false;     // Reset update mode
    }
  }

  resetFormation() {
    this.formation = {
      id: null,
      titre: '',
      description: '',
      prix: 0,
      dateDebut: '',
      dateFin: '',
      disponible: false
    };
  }

  // Handle deleting a formation
  supprimerFormation(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cette formation ?')) {
      this.formations = this.formations.filter(f => f.id !== id);  // Remove formation by ID
    }
  }

  // Handle editing a formation
  editFormation(formation: any) {
    this.formation = { ...formation };  // Pre-fill the form with the selected formation's data
    this.showAddForm = true;           // Show the form
    this.isUpdate = true;              // Set to update mode
  }

  // Filter formations based on the search term
  get filteredFormations() {
    return this.formations.filter(formation =>
      formation.titre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      formation.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
