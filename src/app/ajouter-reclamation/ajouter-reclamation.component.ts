import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-reclamation',
  templateUrl: './ajouter-reclamation.component.html',
  styleUrls: ['./ajouter-reclamation.component.css']
})
export class AjouterReclamationComponent {
  reclamationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reclamationForm = this.fb.group({
      sujet: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      date: [new Date(), Validators.required]
    });
  }

  onSubmit() {
    if (this.reclamationForm.valid) {
      console.log('Réclamation envoyée :', this.reclamationForm.value);
      alert('Réclamation envoyée avec succès ✅');
      this.reclamationForm.reset({
        date: new Date() // Réinitialiser avec date du jour
      });
    } else {
      console.log('Formulaire invalide');
      alert('Veuillez remplir correctement le formulaire ❌');
    }
  }
}
