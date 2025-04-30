import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

interface User {
  id: number;
  nom: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-liste-utilisateur',
  standalone: true,
  imports: [],
  templateUrl: './liste-utilisateur.component.html',
  styleUrl: './liste-utilisateur.component.css'
})
export class ListeUtilisateurComponent {
  users: User[] = [];
  private userService = new UserService();

  async ngOnInit() {
    try {
      this.users = await this.userService.getAllUsers();
    } catch (error) {
      console.error('Erreur de chargement des utilisateurs', error);
    }
  }

}
