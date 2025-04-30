import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  styleUrls: ['./contact.component.css'],
  imports: [NavbarComponent, FooterComponent, CommonModule, ReactiveFormsModule]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  showOptions: boolean = false;
  subjects: any; // À compléter si tu veux des sujets prédéfinis

  constructor(
    private formBuilder: FormBuilder,
    // private contactService: ContactService // <-- ajoute l'injection ici
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  selectSubject(subject: string): void {
    this.contactForm.get('subject')!.setValue(subject);
    this.showOptions = false;
  }

  onInputBlur(): void {
    this.showOptions = false;
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid) {
      try {
        const { name, email, subject, message } = this.contactForm.value;
    

        // SweetAlert de succès
        Swal.fire({
          icon: 'success',
          title: 'Message envoyé !',
          text: 'Votre message a été envoyé avec succès. Nous vous contacterons bientôt.',
          confirmButtonColor: '#3085d6'
        });

        this.contactForm.reset(); // Vide le formulaire après envoi
      } catch (error) {
        console.error('Erreur lors de l\'envoi du message :', error);

        // SweetAlert d'erreur
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.',
          confirmButtonColor: '#d33'
        });
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Formulaire invalide',
        text: 'Veuillez remplir correctement tous les champs avant de soumettre.',
        confirmButtonColor: '#f59e0b'
      });
    }
  }
  // Méthodes pour accéder facilement aux contrôles du formulaire
  public get nameControl() {
    return this.contactForm.get('name')!;
  }

  public get emailControl() {
    return this.contactForm.get('email')!;
  }

  public get subjectControl() {
    return this.contactForm.get('subject')!;
  }

  public get messageControl() {
    return this.contactForm.get('message')!;
  }


}
