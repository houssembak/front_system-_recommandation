import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  userForm: FormGroup;
  private userService = new UserService();

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nom: ['', [Validators.required, Validators.maxLength(10)]],
      prenom: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit() {
    if (this.userForm.valid) {
      try {
        await this.userService.signup(this.userForm.value);

        // ✅ SweetAlert2 - Popup après l'inscription réussie
        let timerInterval: any;
        Swal.fire({
          title: "Inscription réussie !",
          html: "Vous serez redirigé dans <b></b> millisecondes.",
          timer: 3000, // Ferme après 3 secondes
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup()?.querySelector("b");
            timerInterval = setInterval(() => {
              if (timer) timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("Fermé automatiquement");
            // 🚀 Redirection après la popup
            window.location.href = "/login"; // Modifie cette URL selon ta route Angular
          }
        });

      } catch (error) {
        
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Formulaire invalide',
        text: 'Veuillez remplir correctement le formulaire.',
      });
    }
  }
}
