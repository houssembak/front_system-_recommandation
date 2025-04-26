import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajouter-produit',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent {
  @Output() productAdded = new EventEmitter<void>();
  
  product = {
    nom: '',
    prix: 0,
    description: '',
    categorie: '',
    quantite: 0,
    image: null as File | null,
    disponible: false  
  };
  

  categories = ['Sécurité', 'Microsoft', 'antivirus'];

  onImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    this.product.image = file || null;
  }

  onSubmit() {
    // Simulation d’ajout sans backend
    console.log('Produit à ajouter :', this.product);
    this.productAdded.emit();
    this.resetForm();
  }

  resetForm() {
    this.product = {
      nom: '',
      prix: 0,
      description: '',
      categorie: '',
      quantite: 0,
      image: null,
      disponible: false  // ← corriger ici
    };
  }}
  