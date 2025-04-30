import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Reclamation {
  id: number;
  sujet: string;
  description: string;
  date: string;
  confirmed: boolean;
}


@Component({
  selector: 'app-liste-reclamation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-reclamation.component.html',
  styleUrl: './liste-reclamation.component.css'
})
export class ListeReclamationComponent {
  reclamations: Reclamation[] = [
    {
      id: 1,
      sujet: 'Problème de connexion',
      description: 'Je n’arrive pas à me connecter au portail.',
      date: '2024-04-27',
      confirmed: false
    },
    {
      id: 2,
      sujet: 'Erreur de facturation',
      description: 'Le montant de la facture est incorrect.',
      date: '2024-04-28',
      confirmed: false
    }
  ];

  confirmReclamation(id: number) {
    const index = this.reclamations.findIndex(r => r.id === id);
    if (index !== -1) {
      this.reclamations[index].confirmed = true;
    }
  }

  deleteReclamation(id: number) {
    this.reclamations = this.reclamations.filter(r => r.id !== id);
  }
}
