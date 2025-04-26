import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licence',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Initialisation ou logique supplémentaire ici
  }

  // Exemple de méthode pour gérer l'activation de Windows
  activateWindows(): void {
    console.log('Redirection vers les paramètres pour activer Windows...');
    // Logique pour rediriger ou afficher des informations supplémentaires
  }
}