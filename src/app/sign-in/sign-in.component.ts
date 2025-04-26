import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  userForm!: FormGroup;
  private userService = new UserService();
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }




  async onSubmit() {
    if (this.userForm.valid) {
      try {
        const response = await this.userService.login(this.userForm.value);

        // Stocker le user
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user.nom));

        // ✅ Affichage d'une popup de succès
        Swal.fire({
          title: "Connexion réussie !",
          text: "Bienvenue " + response.user.nom,
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        });

        // 🚀 Redirection après connexion
        setTimeout(() => {
          window.location.href = "/products";
        }, 2000);

      } catch (error) {

      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Formulaire invalide',
        text: 'Veuillez remplir tous les champs correctement.',
      });
    }
  }
}
