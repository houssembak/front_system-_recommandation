import { AjouterProduitComponent } from './../../ajouter-produit/ajouter-produit.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../../../Service/produit.service';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, AjouterProduitComponent, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  produits: any[] = [];
  token: string = '';
  showAddForm = false;
  searchTerm: string = '';

  constructor(private produitService: ProduitService) { }

  ngOnInit() {
    this.token = localStorage.getItem('token') || '';
    this.loadProduits();
  }

  async loadProduits() {
    try {
      this.produits = await this.produitService.getProduits(this.token);
    } catch (error) {
      console.error('Erreur chargement produits:', error);
    }
  }

  async supprimerProduit(id: number) {
    if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      try {
        await this.produitService.supprimerProduit(this.token, id);
        this.loadProduits();
      } catch (error) {
        console.error('Erreur suppression produit:', error);
      }
    }
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  onProductAdded() {
    this.showAddForm = false;
    this.loadProduits();
  }

  get filteredProduits() {
    return this.produits.filter(produit =>
      produit.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      produit.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}