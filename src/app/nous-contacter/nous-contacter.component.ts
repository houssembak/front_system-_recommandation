import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-nous-contacter',
  standalone: true,
  imports: [CommonModule, NavbarComponent,FooterComponent,MatSlideToggleModule,MatButtonModule,MatCardModule,ReactiveFormsModule],
  templateUrl: './nous-contacter.component.html',
  styleUrl: './nous-contacter.component.css'
})
export class NousContacterComponent {
  isChecked:boolean=false;
  userForm:FormGroup;
  constructor(private fb: FormBuilder) {
      this.userForm = this.fb.group({
        nom: ['', [Validators.required, Validators.maxLength(16)]],
        societe: ['', [Validators.required, Validators.maxLength(12)]],
        email: ['', [Validators.required, Validators.email]],
        telephone: ['', [Validators.required, Validators.minLength(6)]],
        sujet: ['', [Validators.required]],
        message: ['', [Validators.required]],
      });
    }

    OnSubmit(){
      if(this.userForm.valid){
        console.log(this.userForm.value);
      }
    }
}
