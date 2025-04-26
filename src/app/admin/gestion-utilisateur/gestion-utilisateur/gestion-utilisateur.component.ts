import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion-utilisateur',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent {
  utilisateurs = [
    { id: 1, nom: 'Alice', email: 'alice@example.com', role: 'Consultant Sécurité' },
    { id: 2, nom: 'Bob', email: 'bob@example.com', role: 'Technicien IT' }
  ];

  showAddForm = false;
  isUpdate = false;

  newUtilisateur = {
    id: 0,
    nom: '',
    email: '',
    role: 'Consultant Sécurité'
  };
searchQuery: any;
searchTerm: any;

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
    if (!this.showAddForm) {
      this.resetForm();
    }
  }

  addUtilisateur() {
    const newId = this.utilisateurs.length > 0
      ? Math.max(...this.utilisateurs.map(u => u.id)) + 1
      : 1;

    this.utilisateurs.push({ ...this.newUtilisateur, id: newId });
    this.resetForm();
  }

  editUtilisateur(utilisateur: any) {
    this.newUtilisateur = { ...utilisateur };
    this.isUpdate = true;
    this.showAddForm = true;
  }

  updateUtilisateur() {
    const index = this.utilisateurs.findIndex(u => u.id === this.newUtilisateur.id);
    if (index !== -1) {
      this.utilisateurs[index] = { ...this.newUtilisateur };
    }
    this.resetForm();
  }

  deleteUtilisateur(id: number) {
    this.utilisateurs = this.utilisateurs.filter(u => u.id !== id);
  }

  resetForm() {
    this.newUtilisateur = {
      id: 0,
      nom: '',
      email: '',
      role: 'Consultant Sécurité'
    };
    this.isUpdate = false;
    this.showAddForm = false;
  }
}
